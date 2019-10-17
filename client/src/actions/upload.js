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
export const upload = (name,to,file,link,isEmail) => async dispatch => {
  const body = JSON.stringify({
    name,to,file,link,isEmail
  });
  console.log(body)
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
    } else if(response.data.message == 'Link shortened successfully') {
      dispatch(setAlert(response.data.message, 'danger'));
    }else if(response.data.message.includes('File successfully sent to')){
      dispatch(setAlert(response.data.message, 'danger'));
    }else{
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
