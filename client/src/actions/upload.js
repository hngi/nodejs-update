import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  DOWNLOAD_LINK_FAIL,
  DOWNLOAD_LINK_SUCCESS,
  GET_USER_UPLOADS_SUCCESS,
  GET_USER_UPLOADS_FAIL,
  HIDE_LINK,
  LOADING,
  PROGRESS_BAR
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
const base_url = 'http://localhost:4000';
// const base_url = 'http://xshare.gq';
// const base_url = 'https://x-shareserver.herokuapp.com';
export const hidelink = () => async => dispatch => {
  dispatch({
    type: HIDE_LINK
  });
};
export const uploadFile = (file,email) => async dispatch => {
  const fd = new FormData();

  fd.append('email', email);
  file.map(i => {
    return fd.append('file', i);
  });

  dispatch({
    type: LOADING
  });
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: function(progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      dispatch({
        type: PROGRESS_BAR,
        payload: percentCompleted
      });
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
      dispatch(setAlert('Error uploading', 'danger'));
      dispatch({
        type: UPLOAD_FILE_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert('Error uploading', 'danger'));
  }
};

export const uploadFolder = (file,email) => async dispatch => {
  const fd = new FormData();

  fd.append('email', email);
  fd.append('file', file);

  dispatch({
    type: LOADING
  });
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: function(progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      dispatch({
        type: PROGRESS_BAR,
        payload: percentCompleted
      });
    }
  };

  try {
    const response = await axios.post(
      base_url + `/api/auth/upload`,
      fd,
      config
    );
    if (response.data.success) {
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch(setAlert('Error uploading', 'danger'));
      dispatch({
        type: UPLOAD_FILE_FAIL,
        payload: response.data.message
      });
    }
  } catch (error) {
    dispatch(setAlert('Error uploading', 'danger'));
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
export const getUserUploads = email => async dispatch => {
  try {
    const response = await axios.get(base_url + `/api/auth/uploads/${email}`);
    if (response.data.success) {
      dispatch({
        type: GET_USER_UPLOADS_SUCCESS,
        payload:response.data
      });

    } else {
      dispatch({
        type: GET_USER_UPLOADS_FAIL
      });
    }
  } catch (error) {
    dispatch({
      type: GET_USER_UPLOADS_FAIL
    });
  }
};
