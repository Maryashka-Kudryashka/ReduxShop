import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCartItems } from './actions/cart';
import { addProductItem } from './actions/products';
import { getAllCartItems } from './reducers';
import { withRouter } from 'react-router';

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

// CSS
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        name: 'Name',
        price: 0,
        available: 0,
      }
    };
    this.showDialog = this.showDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.submitAdd = this.submitAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    if (!this.props.cartItems) {
      this.props.fetchAllCartItems();
    }
  }

  showDialog() {
    var dialog = document.getElementById('dialog');
    dialog.show()
  }

  closeDialog() {
    var dialog = document.getElementById('dialog');
    dialog.close()
  }

  submitAdd() {
    this.props.addProduct(this.state.addForm);
    this.closeDialog();
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      addForm: {
        ...this.state.addForm,
        [event.target.name]: event.target.value
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to={`/products/`} className="App-title"><h1>My simple shop</h1></NavLink>
          <dialog id="dialog">
            <h2>Add new product</h2>
            <label>
              Name:
              <input type="text" name="name" value={this.state.addForm.name} onChange={this.handleChange}/>
            </label>
            <label>
              Price:
              <input type="number" name="price" value={this.state.addForm.price} onChange={this.handleChange}/>
            </label>
            <label>
              Available:
              <input type="number" name="available" value={this.state.addForm.available} onChange={this.handleChange}/>
            </label>
            <button onClick={this.submitAdd}>Submit</button>
            <button onClick={this.closeDialog}>Cancel</button>
          </dialog>
          <button onClick={this.showDialog}>Add product</button>
          <NavLink to={`/cart/`} className="App-title"><h2>Cart {this.props.cartItems.length}</h2></NavLink>
        </header>
        <div className="App-wrapper">
          <SideBar/>
          <Switch>
            <Route exact path="/products" component={ProductList}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cartItems = getAllCartItems(state);
  console.log('MAP', cartItems)
  return { cartItems }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchCartItems()),
    addProduct: (product) => dispatch(addProductItem(product))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
