import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import shopReducer from './reducers';
import thunk from 'redux-thunk';

export default function setupStore(middleware) {
  return createStore(shopReducer,
                     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                     applyMiddleware(middleware, thunk));
}
