import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './Login.css';
const Login = ({ login, history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='login-container'>
        <form
          onSubmit={e => {
            e.preventDefault();
            login(email, password, history);
          }}>
          <div>
            <h1>Login to your account</h1>
          </div>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-envelope fa_custom }' />
            </span>
            <input
              id='email'
              // className='form-control'
              onChange={e => onChange(e)}
              value={email}
              type='email'
              placeholder='Email Address'
              name='email'
              required
            />
          </div>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-lock fa_custom }' />
            </span>
            <input
              id='password'
              onChange={e => onChange(e)}
              value={password}
              type='password'
              placeholder='Password'
              name='password'
              required
            />
          </div>
          <div className='r-container'>
            {/* <label className='container'>
              Remember me
              <input type='checkbox' />
              <span className='checkmark' />
            </label>
            <p>
              <a href='#'>Forgot Password?</a>
            </p> */}
          </div>
          <div>
            <button className='login-btn' type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='signup'>
        <p>
          Don't have an account? <Link to='/register'>Sign Up</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default connect(
  null,
  { login }
)(Login);
