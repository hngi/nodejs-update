import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './Login.css';
const Login = ({ login, history, loginAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loading: !1
  });

  const { email, password, loading } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData({
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      loading: !1
    });

  }, [loginAuth.authData]);
  return (
    <div>
      <div class='reg-container'>
        <h2>Login</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            setFormData({ loading: !0 });
            login(email, password, history);
          }}>
          <label for='email'></label>
          <input
            id='email'
            onChange={e => onChange(e)}
            // value={email}
            type='email'
            name='email'
            required
            placeholder='Email'
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />
          <label for='password'></label>
          <input
            id='password'
            onChange={e => onChange(e)}
            // value={password}
            type='password'
            name='password'
            required
            placeholder='Password'
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />
          {loading ? (
            <button className='btn btn-secondary' type='button' disabled>
              <span
                className='mr-2 spinner-grow spinner-grow-sm'
                role='status'
                aria-hidden='true'></span>
            </button>
          ) : (
            <button className='btn'>Login</button>
          )}
        </form>
        <p className='mt-4'>
          Don't have an account? <Link to='/register'>Sign Up</Link>{' '}
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({ loginAuth: state.authError });
export default connect(
  mapStateToProps,
  { login }
)(Login);
