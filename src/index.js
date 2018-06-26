// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';


const history = createHistory();
export const middleware = routerMiddleware(history);

ReactDOM.render(
  <Provider store={applicationStore(middleware)}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
