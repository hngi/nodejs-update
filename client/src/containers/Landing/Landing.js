import React from 'react';
import './Landing.css';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { logout } from '../../actions/auth';
const Landing = ({ isSignedInWithGoogle, logout }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'>XSHARE</Link>
          <ul className='sub-link'>
            {/* <li>About</li> */}
            {isSignedInWithGoogle ? (
              <li>
                <GoogleLogout
                  id='googleLogOutBtn'
                  clientId='97829381082-8imeelchtkuvfcd47q0dgia1p0l91msr.apps.googleusercontent.com'
                  buttonText='Logout'
                  onLogoutSuccess={logout}
                  onFailure={() => logout()}
                />
              </li>
            ) : (
                <li>
                  <GoogleAuth />
                </li>
              )}
          </ul>
        </nav>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>The most seamless file transfer experience ever.</h1>
            <button
              id='btn-email'
              className='btn btn-primary'
              onClick={() => {
                document
                  .getElementsByClassName('form2')[0]
                  .classList.add('d-none');
                var form1 = document.getElementsByClassName('form1')[0];
                form1.classList.contains('d-none')
                  ? form1.classList.remove('d-none')
                  : form1.classList.add('d-none');
              }}>
              Upload by email
            </button>
            <button
              id='btn-link'
              className='btn btn-primary ml-5'
              onClick={() => {
                document
                  .getElementsByClassName('form1')[0]
                  .classList.add('d-none');
                var form2 = document.getElementsByClassName('form2')[0];
                form2.classList.contains('d-none')
                  ? form2.classList.remove('d-none')
                  : form2.classList.add('d-none');
              }}>
              Upload by link
            </button>
            {''}
            <div className='form1 d-none'>
              <form action>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Your email address'
                    id='email'
                  />
                  <label htmlFor='Remail'>Reciever Email</label>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='email address of Reciever'
                    id='Remail'
                  />
                  <label htmlFor='email'>Message</label>
                  <textarea
                    className='form-control'
                    name
                    id
                    cols={10}
                    rows={3}
                    defaultValue={''}
                  />
                  <label htmlFor='password'>Optional Password to protect File</label>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    id='password'
                  />
                  <label htmlFor>Upload file</label>
                  <input className='form-control-file py-2' type='file' />
                  <input
                    type='submit'
                    className='btn btn-primary float-right'
                    defaultValue='Transfer'
                  />
                  <button id='back' className='btn btn-primary float-left'>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <div className='form2 d-none'>
              <form action>
                <div className='form-group'>
                  <label htmlFor='email'>Message</label>
                  <textarea
                    className='form-control'
                    name
                    id
                    cols={10}
                    rows={3}
                    defaultValue={''}
                  />
                  <label htmlFor='password'>Optional Password to protect File</label>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    id='password'
                  />
                  <label htmlFor>Upload file</label>
                  <input className='form-control-file py-2' type='file' />
                  <input
                    type='submit'
                    className='btn btn-primary float-right'
                    defaultValue='Generate Link'
                  />
                  <button id='back' className='btn btn-primary float-left'>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-6'>
            <div>
              <img
                src='https://res.cloudinary.com/dvbwpicno/image/upload/v1571178848/yg8ch6bhftwzooxugbuo.png'
                alt='cloudimage'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  isSignedInWithGoogle: state.auth.isSignedInWithGoogle
});
export default connect(
  mapStateToProps,
  { logout }
)(Landing);
