import {combineReducers} from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';
import sort, * as fromSort from './sort';

const shopApp = combineReducers({
    cart,
    products,
    sort
});

export const getAllProducts = (state) => fromProducts.getAllProducts(state.products);
export const getAllCartItems = (state) => fromCart.getAllCartItems(state.cart);
export const getOrder = (state) => fromSort.getOrder(state.sort);

export default shopApp;
