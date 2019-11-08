import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import upload from './upload';
import progress from './progress';
const rootReducer = combineReducers({ auth, alert, upload, progress });
export default rootReducer;
