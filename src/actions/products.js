import * as fromApi from '../api/fetch';
import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    POST_PRODUCT_SUCCESS,
    CHANGE_ORDER
} from '../helpers/actionTypes';

export const fetchProductsStart = () => ({type: FETCH_PRODUCTS_START});
export const fetchProductsSuccess = (products) => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const postProductSuccess = (product) => ({type: POST_PRODUCT_SUCCESS, product});
export const changeOrder = (order) => ({type: CHANGE_ORDER, order});

export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    let products = await fromApi.allProducts();
    dispatch(fetchProductsSuccess(products));
};

export const addProductItem = (product) => async (dispatch) => {
    let postedProduct = await fromApi.postProduct(product);
    dispatch(postProductSuccess(postedProduct));
};
