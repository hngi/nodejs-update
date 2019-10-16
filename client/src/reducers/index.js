import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';

const rootReducer = combineReducers({ auth,alert });

export default rootReducer;
