import * as fromApi from '../api/fetch';
import {
    POST_CART_ITEM_SUCCESS,
    FETCH_CART_ITEMS_START,
    FETCH_CART_ITEMS_SUCCESS,
    CHANGE_ITEMS_AMOUNT,
    DELETE_CART_ITEM
} from '../helpers/actionTypes';

export const postedCartItemSuccess =(item) => ({type: POST_CART_ITEM_SUCCESS, item});
export const fetchCartItemStart =() => ({type: FETCH_CART_ITEMS_START});
export const fetchCartItemsSuccess =(items) => ({type: FETCH_CART_ITEMS_SUCCESS, items});
export const changeItemsAmount = (value, id) => ({type: CHANGE_ITEMS_AMOUNT, value, id});
export const deleteCartItemSuccess = (id) => ({type: DELETE_CART_ITEM, id});

export const postCartItem = (product) => async (dispatch) => {
    console.log(product, 'ACTION')
    const postedProduct = await fromApi.postCartItem(product);
    dispatch(postedCartItemSuccess(postedProduct));
};

export const fetchCartItems = () => async (dispatch) => {
    dispatch(fetchCartItemStart());
    const items = await fromApi.allCartItems();
    dispatch(fetchCartItemsSuccess(items));
};

export const deleteCartItem = (id) => async (dispatch) => {
    const item = await fromApi.deleteItemFromCart(id);
    dispatch(deleteCartItemSuccess(id));
}
