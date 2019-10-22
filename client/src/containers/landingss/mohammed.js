import React, { useState } from 'react';
import landingControl from '../Landing/index';
import './Landing.css';
import { connect } from 'react-redux';

import { uploadFile, sendEmail } from '../../actions/upload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { setAlert } from '../../actions/alert';
const NewLanding = ({ uploadFile, sendEmail, uploadstate, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    to: '',
    message: '',
    file: '',
    copied: false,
    isLoading: false
  });

  const clearState = () => {
    setFormData({
      name: '',
      message: '',
      to: '',
      file: '',
      value: '',
      copied: false,
      isLoading: false
    });
  };

  const { name, message, to, file, copied, isLoading } = formData;
  console.log(formData);
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name !== 'file' ? e.target.value : e.target.files[0]
    });
  };

  const shortUrl = uploadstate.shortUrl;
  return (
    <main>
      <section className='container'>
        <div className='left'>
          <h2>The most seamless file transfer experience </h2>
          <div className='text'>
            <p>Fast, safe and secure</p>
            <p>
              Upload a file and share it with your friends via email or a
              generated link{' '}
            </p>
            <img
              style={{
                margin: '0 auto',
                width: '400px',
                height: 'auto'
              }}
              src='https://res.cloudinary.com/busola/image/upload/v1571518592/17828.jpg'
              alt='cloudimage'
            />
          </div>
        </div>

        <div className='upload-file'>
          <div className='upload-div'>
            <div
              onClick={landingControl.thisFileUpload}
              className='circular-plus center'>
              <input
                required
                name='file'
                type='file'
                id='file'
                file='file'
                onChange={e => onChange(e)}
                style={{ display: 'none' }}
              />
              <a value='upload'>
                <i className='icon ion-md-add-circle' />
              </a>
            </div>
            <h3 className='center u-text'>Add a file</h3>
            <p className='center u-text'>
              (max size: 20MB | .mp4 .mp3 .png .jpg .jpeg .png .docx .pdf .gif
              files supported)
            </p>
          </div>
          <div className='send-options'>
            <button
              onClick={() => {
                {
                  file === ''
                    ? setAlert('Please upload a file', 'danger')
                    : setFormData({ isLoading: true });
                  uploadFile(file);
                }
              document.querySelector('.upload-file').style.display = 'none';
              document.querySelector('.success').style.display = 'block';
              }}
              className='btn upload-btn upload'>
              {isLoading ? (
                <i className='fa fa-circle-o-notch text-white spin-loader' />
              ) : null}
              Upload
            </button>
          </div>
        </div>

        <div className='success'>
          <i 
          onClick={() => {
            document.querySelector('.upload-file').style.display = 'block';
            document.querySelector('.success').style.display = 'none';
          }}
          className="fas fa-chevron-circle-left back"></i>
          <span>
            <i
              // style={{
              //   display: 'none'
              // }}
              className='far fa-check-circle'
            />
          </span>
          <br />
          <h6
          // style={{
          //   display: 'none'
          // }}
          >
            {shortUrl ? shortUrl : null}
          </h6>
          <br />
          <CopyToClipboard
            text={shortUrl}
            onCopy={() => {
              setFormData({ copied: true });
              setAlert('Link Copied', 'success');
            }}>
            <button
              className='btn'
              // style={{
              //   display: 'none'
              // }}
            >
              Copy link
            </button>
          </CopyToClipboard>

          <button
            onClick={() => {
              document.querySelector('.success').style.display = 'none';
              document.querySelector('.send-email').style.display = 'block';
            }}
            className='btn for-email'
            // style={{
            //   display: 'none'
            // }}
          >
            Email file
          </button>
        </div>
        <div className='right'>
          {/* send by email */}
          <div className='send-email'>
          <i 
          onClick={() => {
            document.querySelector('.success').style.display = 'block';
            document.querySelector('.send-email').style.display = 'none';
          }}
          className="fas fa-chevron-circle-left back"></i>
            <form
              // style={{
              //   display: 'none'
              // }}
              onSubmit={e => {
                e.preventDefault();
                sendEmail(name, to, message, shortUrl);
                setAlert(`The file was sent to ${to} successfully`, 'success');
              }}>
              <div className='email-field-content'>
                <p>Email File</p>
                <input
                  required
                  // className='form-control'
                  type='name'
                  placeholder='Your Name'
                  id='name'
                  name='name'
                  value={name}
                  onChange={e => onChange(e)}
                />
                <br />
                <input
                  required
                  // className='form-control'
                  type='email'
                  placeholder="Receiver's Email"
                  id='Remail'
                  name='to'
                  value={to}
                  onChange={e => onChange(e)}
                />
                <br />
                <textarea
                  onChange={e => onChange(e)}
                  name='message'
                  id='message'
                  value={message}
                  cols={30}
                  rows={9}
                  required
                  placeholder='Message'
                />
                <br />
                <div className='send-options'>
                  <button className='btn upload-btn send'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div success>
          <span>
            <i className='far fa-check-circle' />
          </span>
          <br />
          <button className='btn'>Copy link</button>
          <button className='btn'>Email file</button>
        </div> */}
      </section>
    </main>
  );
};

const mapStateToProps = state => ({
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { uploadFile, sendEmail, setAlert }
)(NewLanding);
