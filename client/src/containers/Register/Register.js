import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Link } from 'react-router-dom';

import './Register.css';
const Register = ({ register, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    loading: false
  });
  const { username, email, password, loading } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div class='reg-containerr'>
        <h2>Create account</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            setFormData({ loading: true });
            register(username, email, password, history);
          }}
        >
          <label for='username'></label>
          <input
            onChange={e => onChange(e)}
            type='text'
            id='username'
            name='username'
            value={username}
            placeholder='username'
            style={{ fontFamily: 'Arial, FontAwesome' }}
            required
          />
          <label for='email'></label>
          <input
            name='email'
            id='email'
            value={email}
            required
            onChange={e => onChange(e)}
            type='email'
            placeholder='email'
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />
          <label for='password'></label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            minLength={3}
            onChange={e => onChange(e)}
            required
            placeholder='*******'
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />

          {loading ? (
            <button className='btn btn-secondary' type='button' disabled>
              <span
                className='mr-2 spinner-grow spinner-grow-sm'
                role='status'
                aria-hidden='true'
              ></span>
            </button>
          ) : (
            <button className='btn'>Create Account</button>
          )}
        </form>

        <p className='mt-4'>
          Already have an account? <Link to='/login'>Login</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default connect(
  null,
  { register }
)(Register);
