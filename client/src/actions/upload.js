import {
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL
} from './types';
import { setAlert } from './alert';

import axios from 'axios';
// const base_url = '';

const base_url = 'http://localhost:4000';
export const upload = (name, to, file, link, isEmail) => async dispatch => {
  const fd = new FormData();

  fd.append('name', name);
  fd.append('to', to);
  fd.append('isEmail', true);
  fd.append('file', file);
  // const body = {
  //   name,
  //   to,
  //   file,
  //   isEmail: true
  // };
  console.log(fd.get('file'));
  
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
    // const response = await fetch(base_url + '/api/auth/upload', {
    //   method: 'POST',
    //   config,
    //   body: fd
    // });
    console.log(response);
    if (response.data.success) {
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: response.data
      });
      dispatch(setAlert(response.data.message, 'success'));
    } else if (response.data.message === 'Link shortened successfully') {
      dispatch(setAlert(response.data.message, 'danger'));
    } else if (response.data.message.includes('File successfully sent to')) {
      dispatch(setAlert(response.data.message, 'danger'));
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
