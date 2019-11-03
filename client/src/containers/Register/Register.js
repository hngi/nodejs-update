import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import EmailLoader from '../Loader/EmailLoader';
import { Link } from 'react-router-dom';

import './Register.css';
const Register = ({ register, history,loading }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const { username, email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='register-container'>
        <form
          onSubmit={e => {
            e.preventDefault();
            register(username, email, password, history);
          }}>
          <div>
            <h1>Create account</h1>
          </div>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-user fa_custom }' />
            </span>
            <input
              onChange={e => onChange(e)}
              type='text'
              id='username'
              name='username'
              value={username}
              placeholder='Username'
              required
            />
          </div>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-envelope fa_custom }' />
            </span>
            <input
              type='email'
              placeholder='jdoe@gmail.com'
              name='email'
              id='email'
              value={email}
              required
              onChange={e => onChange(e)}
            />
          </div>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-lock fa_custom }' />
            </span>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              // className='form-control'
              minLength={3}
              onChange={e => onChange(e)}
              placeholder='********'
              required
            />
          </div>
          <div className='r-container'>
            {/* <label className='container'>
              Remember me
              <input type='checkbox' defaultChecked='checked' />
              <span className='checkmark' />
            </label> */}
            {/* <p>
              <a href='#'>Forgot Password?</a>
            </p> */}
          </div>
          <div>
            {!loading ? (
              <button className='upload-btn mt-4'>Create Account</button>
            ) : (
              <EmailLoader />
            )}
          </div>
        </form>
      </div>
      <div className='signup'>
        <p>
          Already have an account?<Link to='/login'>Login</Link>{' '}
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  loading: state.auth.loading
});
export default connect(
  mapStateToProps,
  { register }
)(Register);
