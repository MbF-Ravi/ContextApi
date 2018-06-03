import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas'

import rootReducer from '../reducers';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga)

export default store;