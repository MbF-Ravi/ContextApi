import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReaduxFile from './Components/Redux';
import registerServiceWorker from './registerServiceWorker';
import postReducer from './reducers/postReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(postReducer);

ReactDOM.render(
	<Provider store={store}>
		<ReaduxFile />
	</Provider>, document.getElementById('root'));
registerServiceWorker();