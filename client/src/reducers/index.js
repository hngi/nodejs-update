import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import upload from "./upload";

const rootReducer = combineReducers({
  auth,
  alert,
  upload
});

export default rootReducer;
