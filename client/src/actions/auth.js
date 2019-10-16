import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SIGN_IN_GOOGLE,
  CLEAR_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from './types';
import { setAlert } from './alert';

import axios from 'axios';
// const base_url = '';

const base_url = 'http://localhost:4000';
export const login = (email, password) => async dispatch => {
  const body = JSON.stringify({
    email,
    password
  });
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
    // console.log(response)
    if (response.data.success) {
      console.log('login success');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
      dispatch({
        type: SIGN_IN_GOOGLE
      });
      dispatch(setAlert('Login was successful', 'success'));
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({
        type: LOGIN_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));

    dispatch({
      type: LOGIN_FAIL,
      payload: error.toString()
    });
  }
};

export const signInWithGoogle = (
  username,
  email,
  password
) => async dispatch => {
  const body = JSON.stringify({
    username,
    email,
    password
  });
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  try {
    const response = await axios.post(
      base_url + '/api/auth/register',
      body,
      config
    );
    // console.log(response)
    if (response.data.success) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      });
      dispatch(login(email, password));
    } else if (response.data.message === 'User already exists') {
      console.log('trying to login with google');
      dispatch(login(email, password));
      dispatch({
        type: SIGN_IN_GOOGLE
      });
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({
        type: REGISTER_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));

    dispatch({
      type: REGISTER_FAIL,
      payload: error.toString()
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
  dispatch(setAlert('Logout was successful', 'success'));
};
