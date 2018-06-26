import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    ADD_NEW_PRODUCT,
    CHANGE_ITEMS_AMOUNT,
    POST_PRODUCT_SUCCESS
} from '../helpers/actionTypes';

export default (state = [], action) => {
  switch (action.type) {    
    case FETCH_PRODUCTS_SUCCESS:
      return [...action.products];
    case CHANGE_ITEMS_AMOUNT:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            available: (item.available - action.value)
          }}
        return item;
      });
    case POST_PRODUCT_SUCCESS:
      return [...state, action.product];
    default:
      return state;
  }
}

export const getAllProducts = (state) => state;
