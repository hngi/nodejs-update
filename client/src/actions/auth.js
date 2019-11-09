import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOADING,
  NOT_LOADING
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
const base_url = 'http://xshare.gq';
// const base_url = 'http://localhost:4000';
export const login = (email, password, history) => async dispatch => {
  const body = JSON.stringify({ email, password });
  console.log(body);
  dispatch({ type: LOADING });
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  try {
    const response = await axios.post(
      base_url + '/api/auth/login',
      body,
      config
    );
    if (response.data.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      dispatch(setAlert('Login was successful', 'success'));
      history.push('/dashboard');
    } else {
      console.log(response.data.message);
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({ type: LOGIN_FAIL, payload: response.data.message });
    }
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.toString(), 'danger'));
    dispatch({ type: LOGIN_FAIL, payload: error.toString() });
  }
};
export const register = (
  username,
  email,
  password,
  history
) => async dispatch => {
  const body = JSON.stringify({ username, email, password });
    console.log(body);

  dispatch({ type: LOADING });
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const response = await axios.post(
      base_url + '/api/auth/register',
      body,
      config
    );
    if (response.data.success) {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      dispatch(setAlert('Registration was successful', 'success'));
      history.push('/login');
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({ type: REGISTER_FAIL, payload: response.data.message });
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));
    dispatch({ type: REGISTER_FAIL, payload: error.toString() });
  }
};
export const logout = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  dispatch(setAlert('Logout was successful', 'success'));
};
export const notLoading = () => async dispatch => {
  dispatch({ type: NOT_LOADING });
};
