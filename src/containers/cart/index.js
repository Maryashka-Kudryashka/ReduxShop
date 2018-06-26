import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems, changeItemsAmount, deleteCartItem } from '../../actions/cart';
import { getAllCartItems } from '../../reducers';

import './cart.css';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllCartItems();
  }

  changeAmount(event, product) {
    this.props.changeCartItemsAmount(event.target.value, product.id);
  }

  handleDelete(item) {
    this.props.deleteItem(item.id);
  }

  renderCart() {
    if (!this.props.cartItems || this.props.cartItems.length === 0) {
      return (<span className="App-cart-empty">Your cart is empty</span>);
    }
    return this.props.cartItems.map((i, index) => (
      <div className="App-cart-item" key={index}>
        <p>{i.name}</p>
        <div className="App-cart-wrapper">
          <input type="number" min="0" max={i.available} value={i.amount} onChange={(event) => this.changeAmount(event, i)}/>
          <span className="App-cart-delete" onClick={() => this.handleDelete(i)}></span>
        </div>
      </div>
    ));
  }

  render() {
    return (<div className="App-cart">
      {this.renderCart()}
    </div>);
  }
}

const mapStateToProps = (state) => {
  const cartItems = getAllCartItems(state);
  return { cartItems }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchCartItems()),
    changeCartItemsAmount: (value, id) => dispatch(changeItemsAmount(value, id)),
    deleteItem: (id) => dispatch(deleteCartItem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
