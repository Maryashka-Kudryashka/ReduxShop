import {
    FETCH_CART_ITEMS_SUCCESS,
    CHANGE_ITEMS_AMOUNT,
    DELETE_CART_ITEM,
    POST_CART_ITEM_SUCCESS
} from '../helpers/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS_SUCCESS:
      return [...action.items];
    case CHANGE_ITEMS_AMOUNT:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: action.value
          }}
        return item;
      });
    case DELETE_CART_ITEM:
      return state.filter(el => el.id !== action.id);
    case POST_CART_ITEM_SUCCESS:
      return [...state, ...action.item];
    default:
      return state;
  }
}

export const getAllCartItems = (state) => state;
