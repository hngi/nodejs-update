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
      <div class="reg-containerr">
        <h2>Create account</h2>
        <form onSubmit={e => {
          e.preventDefault();
          register(username, email, password, history);
        }}>
          <label for="username"></label>
          <input onChange={e => onChange(e)}
          type='text'
          id='username'
          name='username'
          value={username}
          placeholder="&#xf007;  username"
          style={{fontFamily:"Arial, FontAwesome"}}
          required/>

          <label for="email"></label>
          <input name='email'
          id='email'
          value={email}
          required
          onChange={e => onChange(e)}
          type="email"
          name="email"
          placeholder="&#xf0e0;  email"
          style={{fontFamily:"Arial, FontAwesome"}}/>

          <label for="password"></label>
          <input type='password'
          name='password'
          id='password'
          value={password}
          minLength={3}
          onChange={e => onChange(e)}
          required
          placeholder="&#xf023;  *******"
          style={{fontFamily:"Arial, FontAwesome"}}/>

          {!loading ? (
            <button className='btn'>Create Account</button>
          ) : (
            <EmailLoader />
          )}

        </form>

        <p>
        Already have an account? <Link to='/login'>Login</Link>{' '}
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
