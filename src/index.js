import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import rootSaga from './sagas';

const windowIfDefined = typeof window === 'undefined' ? null : window;
// If devTools is installed, connect to it
const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({collapsed: true});
const createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware, logger), 
    devToolsExtension ? devToolsExtension() : (next => next))(createStore);
const store = createStoreWithMiddleware(reducers, {});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
