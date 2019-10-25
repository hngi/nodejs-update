import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import auth from "./auth";
import alert from "./alert";
import upload from "./upload";

const rootReducer = combineReducers({
  auth,
  alert,
  upload,
  loadingBar: loadingBarReducer
});

export default rootReducer;
