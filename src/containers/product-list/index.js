import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products';
import { postCartItem } from '../../actions/cart';
import { getAllProducts, getOrder } from '../../reducers';

import Sort from '../../components/sort';

import './product-list.css';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllProducts();
  }


  addToCart(product) {
    product['amount'] = 1;
    this.props.putItemToCart(product);
  }

  renderProducts() {
    if (!this.props.products) {
      return null;
    }
    return this.props.products.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
        {i.available > 0 ? <button className="add-to-cart-btn" onClick={() => this.addToCart(i)}>Add to cart</button> : null}
      </div>
    ));
  }

  render() {
    return ( <div>
      <Sort/>
      <div className="App-product_list">
        {this.renderProducts()}
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  const order = getOrder(state);
  let products = getAllProducts(state).slice(0);
  console.log(order, 'ORDER');
  if (order === 'name') {
    products.sort((a, b) => a[order].localeCompare(b[order]));
  } if (order === 'price') {
    products.sort((a, b) => a[order] - b[order]);
  } if (order === 'availability') {
    products = products.filter((el) => el.available > 0);
  }
  return {products}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchProducts()),
    putItemToCart: (product) => dispatch(postCartItem(product))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
