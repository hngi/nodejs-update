import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  DOWNLOAD_LINK_FAIL,
  DOWNLOAD_LINK_SUCCESS,
  HIDE_LINK,
  LOADING
} from './types';
import { setAlert } from './alert';

import axios from 'axios';
// const base_url = 'http://localhost:4000';
const base_url = 'http://xshare.gq';
// const base_url = 'https://x-shareserver.herokuapp.com';
export const hidelink = () => async => dispatch => {
  dispatch({
    type: HIDE_LINK
  });
};
export const uploadFile = file => async dispatch => {
  const fd = new FormData();

  // fd.append('name', name);
  // fd.append('to', to);
  // fd.append('isEmail', true);
  fd.append('file', file);

  dispatch({
    type: LOADING
  });
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data'
    }
  };
  try {
    const response = await axios.post(
      base_url + '/api/auth/upload',
      fd,
      config
    );
    if (response.data.success) {
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch(setAlert('Error uploading file', 'danger'));
      dispatch({
        type: UPLOAD_FILE_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert('Error uploading file', 'danger'));
  }
};
export const sendEmail = (name, to, message, link) => async dispatch => {
  const body = JSON.stringify({
    name,
    to,
    message,
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
    if (response.data.success) {
      dispatch({
        type: SEND_EMAIL_SUCCESS
      });
      // dispatch(setAlert(`The file was sent to ${to} successfully`, 'success'));
    } else {
      dispatch({
        type: SEND_EMAIL_FAIL
      });
    }
  } catch (error) {
    dispatch({
      type: SEND_EMAIL_FAIL
    });
  }
};
export const downloadLink = shortCode => async dispatch => {
  try {
    const response = await axios.post(base_url + `/${shortCode}`);
    if (response.data.success) {
      dispatch({
        type: DOWNLOAD_LINK_SUCCESS
      });
      dispatch(setAlert(`File downloaded successfully`, 'success'));
    } else {
      dispatch(setAlert('Error downloading file', 'danger'));
      dispatch({
        type: DOWNLOAD_LINK_FAIL
      });
    }
  } catch (error) {
    dispatch(setAlert('Error downloading file', 'danger'));
    dispatch({
      type: DOWNLOAD_LINK_FAIL
    });
  }
};
