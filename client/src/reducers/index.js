import { combineReducers } from 'redux';
import auth from './auth';
import authError from './authError';
import alert from './alert';
import upload from './upload';
import progress from './progress';
const rootReducer = combineReducers({
  auth,
  authError,
  alert,
  upload,
  progress
});
export default rootReducer;
