import {
    CHANGE_ORDER,
} from '../helpers/actionTypes';

export default (state = {order: 'name'}, action) => {
  switch (action.type) {
    case CHANGE_ORDER:
      return {...state, order: action.order}
    default:
      return state;
  }
}

export const getOrder = (state) => state.order;
