import React, { useState } from 'react';

import './Landing.css';
import { connect } from 'react-redux';

import { upload, hidelink } from '../../actions/upload';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Landing = ({
  upload,
  uploadstate,
  hidelink
}) => {
  const [formData, setFormData] = useState({
    name: '',
    to: '',
    file: '',
    copied: false,
    isLoading: false
  });

  const clearState = () => {
    setFormData({
      name: '',
      from: '',
      to: '',
      file: '',
      value: '',
      copied: false,
      isLoading: false
    });
  };

  const { name, to, file, copied, isLoading } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name !== 'file' ? e.target.value : e.target.files[0]
    });
  };
  const shortUrl = uploadstate.shortUrl;
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <p className='text'>
              The most seamless file transfer experience ever.
            </p>
            <div className='buttons'>
              <button
                id='btn-email'
                className='btn btn-light'
                onClick={() => {
                  var form1 = document.getElementsByClassName('form1')[0];
                  // () =>
                  form1.classList.contains('d-none')
                    ? form1.classList.remove('d-none')
                    : form1.classList.add('d-none');
                }}
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
                Send file via email
              </button>
              <CopyToClipboard
                text={shortUrl}
                onCopy={() => setFormData({ copied: true })}>
                <button
                  id='btn-link'
                  className={
                    uploadstate.emailSent
                      ? 'btn btn-light ml-5'
                      : 'btn btn-light ml-5 d-none'
                  }>
                  Copy link
                </button>
              </CopyToClipboard>
              {copied ? (
                <span style={{ color: 'red' }}> Link Copied!</span>
              ) : null}
            </div>
            {''}
            <div
              className={
                uploadstate.emailSent === false ? 'form1' : 'form1 d-none'
              }>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  upload(name, to, file, true);
                  setFormData({ isLoading: true });
                  setTimeout(clearState, 5000);
                }}>
                <div className='form-group'>
                  <input
                    required
                    className='form-control'
                    type='name'
                    placeholder='Your Name'
                    id='name'
                    name='name'
                    value={name}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  {/* <label htmlFor="Remail">Receiver's Email</label> */}
                  <input
                    required
                    className='form-control'
                    type='email'
                    placeholder="Receiver's Email"
                    id='Remail'
                    name='to'
                    value={to}
                    onChange={e => onChange(e)}
                  />
                  {/* {/* <label htmlFor='email'>Optional message</label> */}
                  {/* <br /> */}
                  {/* <textarea
                    className='form-control'
                    name
                    id
                    cols={10}
                    rows={3}
                    defaultValue={'Message'}
                  /> */}

                  <br />
                  <label htmlFor>Upload file</label>
                  <input
                    required
                    name='file'
                    //value={file}
                    onChange={e => onChange(e)}
                    className='form-control-file'
                    type='file'
                    file='file'
                  />
                  <br />
                  {isLoading ? (
                    <div class='spinner-border text-primary' role='status'>
                      <span class='sr-only'>Loading...</span>
                    </div>
                  ) : (
                    <button
                      type='submit'
                      className='btn btn-light float-left'
                      defaultValue='Transfer'>
                      Share
                    </button>
                  )}

                  {/* <button id='back' className='btn float-left'>
                    Cancel
                  </button> */}
                </div>
              </form>
            </div>
            {/* <div className='form2 d-none'> */}
            {/* <form
                onSubmit={e => {
                  e.preventDefault();
                  upload(link, file, false);
                }}> */}
            {/* <div className='form-group'> */}
            {/* <label htmlFor='email'>Message</label>*/}
            {/* <textarea
                    className='form-control'
                    name
                    id
                    cols={10}
                    rows={3}
                    defaultValue={''}
                  /> */}
            {/* <br />
                  <label htmlFor>Upload file</label>
                  <input className='form-control-file' type='file' />
                  <br />
                  <input
                    name='file' */}
            {/* //value={file}
                    onChange={e => onChange(e)}
                    type='submit'
                    className='btn float-right'
                    defaultValue='Generate Link'
                  />
                  <button id='back' className='btn float-left'>
                    Cancel
                  </button>
                </div>
              </form>
            </div> */}
          </div>
          <div className='col-lg-6'>
            <img
              src='https://res.cloudinary.com/dvbwpicno/image/upload/v1571178848/yg8ch6bhftwzooxugbuo.png'
              alt='cloudimage'
              className='responsive'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  // isSignedInWithGoogle: state.auth.isSignedInWithGoogle,
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { upload, hidelink }
)(Landing);
