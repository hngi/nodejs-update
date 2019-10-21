import React, { useState } from 'react';

import './Landing.css';
import { connect } from 'react-redux';

import { uploadFile,sendEmail } from '../../actions/upload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {setAlert} from '../../actions/alert'
const NewLanding = ({ uploadFile, sendEmail, uploadstate,setAlert }) => {
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
        const onChange = e => {
          setFormData({
            ...formData,
            [e.target.name]:
              e.target.name !== 'file'
                ? e.target.value
                : e.target.files[0]
          });
        };
        // const thisFileUpload=() =>{
        //   document.getElementById('file').click();
        // }
        
        const shortUrl = uploadstate.shortUrl;
        return (
          <main>
            <section container>
              <div className='left'>
                <h2>The most seamless file transfer experience </h2>
                <div className='text'>
                  <p>Fast, safe and secure</p>
                  <p>
                    Upload a file and share it with your friends via
                    email or a generated link{' '}
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

              <div upload-file>
                <div className='upload-div'>
                  <div className='circular-plus center'>
                    <input
                      name='file'
                      type='file'
                      id='file'
                      file='file'
                      onChange={e => onChange(e)}
                      style={{ display: 'none' }}
                    />
                    <a
                      value='upload'
                      // onclick={thisFileUpload}
                    >
                      <i className='icon ion-md-add-circle' />
                    </a>
                  </div>
                  <h3 className='center u-text'>Add your files</h3>
                  <p className='center u-text'>
                    (max size: 20MB | .mp4 .mp3 .png .jpg .jpeg .png
                    .docx .pdf .gif files supported)
                  </p>
                </div>
                <div className='send-options'>
                  <button className='upload-btn upload '>Upload</button>
                </div>
              </div>

              <div success>
                <span>
                  <i className='far fa-check-circle' />
                </span>
                <br />
                <p>{shortUrl ? shortUrl : null}</p>
                <br />
                <CopyToClipboard
                  text={shortUrl}
                  onCopy={() => setFormData({ copied: true })}>
                  <button
                    // id='btn-link'
                    className='btn'>
                    Copy link
                  </button>
                </CopyToClipboard>
                {setAlert('Link Copied')}
                <button className='btn for-email'>Email file</button>
              </div>
              <div className='right'>
                {/* send by email */}
                <div send-email>
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
                    <br/>
                    <textarea
                      name='message'
                      id='message'
                      value={message}
                      cols={30}
                      rows={9}
                      required
                      placeholder='Message'
                      defaultValue={''}
                    />
                    <br />
                    <div className='send-options'>
                      <button className='upload-btn send'>Send</button>
                    </div>
                  </div>
                </div>
              </div>
              <div success>
                <span>
                  <i className='far fa-check-circle' />
                </span>
                <br />
                <button className='btn'>Copy link</button>
                <button className='btn'>Email file</button>
              </div>
            </section>
          </main>
        );
      };;

const mapStateToProps = state => ({
  // isSignedInWithGoogle: state.auth.isSignedInWithGoogle,
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { uploadFile,sendEmail,setAlert }
)(NewLanding);
