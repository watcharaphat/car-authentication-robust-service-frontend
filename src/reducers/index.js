import { combineReducers } from 'redux';
import * as userReducer from './UserReducer';
import * as userIdReducer from './UserIdReducer';

const rootReducer = combineReducers({
  ...userIdReducer,
  ...userReducer,
});

export default rootReducer;
