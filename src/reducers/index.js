import { combineReducers } from 'redux';
import * as userReducer from './UserReducer';

const rootReducer = combineReducers({
  ...userReducer,
});

export default rootReducer;
