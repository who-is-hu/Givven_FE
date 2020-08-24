import { combineReducers } from 'redux';
import auth from './auth';
import shared from './shared';

export default combineReducers({
  auth,
  shared,
});
