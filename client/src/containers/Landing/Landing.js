import React, { useState } from 'react';
import './Landing.css';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { logout } from '../../actions/auth';
import { upload } from '../../actions/upload';
const Landing = ({ isSignedInWithGoogle, logout, upload, uploadstate }) => {
  const [formData, setFormData] = useState({
    name: '',
    to: '',
    link: '',
    file: ''
  });
  const { name, to, link, file } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name !== 'file' ? e.target.value : e.target.files[0]
    });
    console.log(formData);
  };
  console.log(uploadstate);
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
              // onClick={() => {
              //   document
              //     .getElementsByClassName('form2')[0]
              //     .classList.add('d-none');
              //   var form1 = document.getElementsByClassName('form1')[0];
              //   form1.classList.contains('d-none')
              //     ? form1.classList.remove('d-none')
              //     : form1.classList.add('d-none');
              // }}
              >
              Upload by email
            </button>
            <button
              id='btn-link'
              className='btn btn-primary ml-5'
              // onClick={() => {
              //   document
              //     .getElementsByClassName('form1')[0]
              //     .classList.add('d-none');
              //   var form2 = document.getElementsByClassName('form2')[0];
              //   form2.classList.contains('d-none')
              //     ? form2.classList.remove('d-none')
              //     : form2.classList.add('d-none');
              // }}
              >
              Copy link
            </button>
            {''}
            <div className='form1'>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  upload(name,to,file,true)
                }}>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input
                    className='form-control'
                    type='name'
                    placeholder='Your name'
                    id='name'
                    name='name'
                    value={name}
                    onChange={e => onChange(e)}
                  />
                  <label htmlFor='Remail'>Receiver's Email</label>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Email of receiver'
                    id='Remail'
                    name='to'
                    value={to}
                    onChange={e => onChange(e)}
                  />
                  {/* <label htmlFor='email'>Optional message</label>
                  <textarea
                    className='form-control'
                    name
                    id
                    cols={10}
                    rows={3}
                    defaultValue={''}
                  /> */}
                  <label htmlFor='file'>Upload file</label>
                  <input
                    name='file'
                    //value={file}
                    onChange={e => onChange(e)}
                    className='form-control-file'
                    type='file'
                  />
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
              <form
                onSubmit={e => {
                  e.preventDefault();
                  upload(link,file,
                    false)
                }}>
                <div className='form-group'>
                  {/* <label htmlFor='email'>Message</label>
                  <textarea
                    className='form-control'
                    name
                    id
                    cols={10}
                    rows={3}
                    defaultValue={''}
                  /> */}
                  <label htmlFor='file '>Upload file</label>
                  <input className='form-control-file' type='file' />
                  <input
                    name='file'
                    value={file}
                    onChange={e => onChange(e)}
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
  isSignedInWithGoogle: state.auth.isSignedInWithGoogle,
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { logout, upload }
)(Landing);
