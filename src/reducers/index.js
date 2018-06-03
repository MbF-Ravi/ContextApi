import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import postReducer from './postReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  postReducer
});

export default rootReducer;