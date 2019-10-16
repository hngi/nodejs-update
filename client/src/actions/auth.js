import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SIGN_IN_GOOGLE,
  CLEAR_PROFILE,
  LOGOUT
} from './types';
import { setAlert } from './alert';

import axios from 'axios';
// const base_url = '';
const base_url = 'http://localhost:4000';

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
      base_url + '/api/auth/signup',
      body,
      config
    );
    if (response.data.success) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      });
    } else if (response.data.message === 'User already exists') {
      dispatch(login(email, password, history));
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
