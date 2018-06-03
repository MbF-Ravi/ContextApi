import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReaduxFile from './Components/Redux';
import registerServiceWorker from './registerServiceWorker';
import postReducer from './reducers/postReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import store from './store';

const router = (
  <Provider store={store}>
    <ReaduxFile />
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
registerServiceWorker();