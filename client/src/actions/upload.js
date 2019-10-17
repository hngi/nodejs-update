import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  SHORTEN_LINK_SUCCESS,
  SHORTEN_LINK_FAIL
} from './types';
import { setAlert } from './alert';

import axios from 'axios';
// const base_url = '';

const base_url = 'http://localhost:4000';
export const upload = file => async dispatch => {
  const body = JSON.stringify({
    file
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  try {
    const response = await axios.post(
      base_url + '/api/auth/upload',
      body,
      config
    );
    console.log(response);
    if (response.data.success) {
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: response.data
      });
      dispatch(setAlert(response.data.message, 'success'));
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({
        type: UPLOAD_FILE_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));

    dispatch({
      type: UPLOAD_FILE_FAIL,
      payload: error.toString()
    });
  }
};
export const sendEmail = (to, link) => async dispatch => {
  const body = JSON.stringify({
    to,
    link
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  try {
    const response = await axios.post(
      base_url + '/api/auth/sendEmail',
      body,
      config
    );
    console.log(response);
    if (response.data.success) {
      dispatch({
        type: SEND_EMAIL_SUCCESS,
        payload: response.data
      });
      dispatch(setAlert(response.data.message, 'success'));
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({
        type: SEND_EMAIL_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));

    dispatch({
      type: SEND_EMAIL_FAIL,
      payload: error.toString()
    });
  }
};
export const copyLink = link => async dispatch => {
  const body = JSON.stringify({
    file
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  try {
    const response = await axios.post(
      base_url + '/api/auth/upload',
      body,
      config
    );
    console.log(response);
    if (response.data.success) {
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: response.data
      });
      dispatch(
        setAlert(
          'File upload was successful,please choose how you want to send your file',
          'success'
        )
      );
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({
        type: UPLOAD_FILE_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));

    dispatch({
      type: UPLOAD_FILE_FAIL,
      payload: error.toString()
    });
  }
};
