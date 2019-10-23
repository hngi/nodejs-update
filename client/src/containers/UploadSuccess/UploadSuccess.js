import React, { useState } from 'react';
import './UploadSuccess.css';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/upload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { setAlert } from '../../actions/alert';
import Loader from '../Loader/Loader';
const UploadSuccess = ({ sendEmail, uploadstate, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    to: '',
    message: '',
    loading: false,
    show: false
  });

  const { name, message, to, show, loading } = formData;
  const email = () => {
    setFormData({ show: true });
  };
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    setFormData({ loading: true, show: true, name: '', to: '', message: '' });
    sendEmail(name, to, message, shortUrl);
    setTimeout(() => {
      setAlert(`The file was sent to ${to} successfully`, 'success');
      setFormData({ loading: false, show: true });
      window.location.reload();
    }, 3000);
  };
  const shortUrl = uploadstate.shortUrl;
  const clipText =
    ' Please visit http://xshare.ga to share your files with ease';
  return (
    <div className=''>
      {!show ? (
        <div className='right-section-success d-flex flex-column justify-content-center align-items-center'>
          {shortUrl ? (
            <>
              {/* <div className=''>
                {' '}
                <i
                  onClick={() => {
                    setFormData({ show: false });
                  }}
                  className='fas fa-chevron-left back'
                />{' '}
              </div>
              {''} */}
              <img
                src='https://res.cloudinary.com/busola/image/upload/v1571806132/success.png'
                alt=''
              />
              <p className='upload-success'>Upload Success</p>
              <div className='mt-2 upload-link' id='upload-link'>
                {shortUrl}
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <CopyToClipboard
                  text={shortUrl}
                  onCopy={() => {
                    setFormData({ copied: true });
                    shortUrl === null
                      ? setAlert('Clipboard is empty', 'danger')
                      : setAlert('Link Copied', 'success');
                  }}>
                  <button className='upload-btn mt-4 mr-3'>Copy Link</button>
                </CopyToClipboard>
                <button className='upload-btn mt-4' onClick={email}>
                  Email Link
                </button>
              </div>
              <p className='share mt-4'>or share with</p>
              <div className='social-icons d-flex justify-content-center align-items-center pl-3 pr-3 mt-2'>
                <a
                  className='socials'
                  href={`https://api.whatsapp.com/send?&text=${shortUrl} ${clipText}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    className='social-icon mr-4'
                    src='https://res.cloudinary.com/busola/image/upload/v1571852212/whatsapp.png'
                    alt=''
                  />
                </a>
                <a
                  className='socials'
                  href={`https://twitter.com/intent/tweet?text=${shortUrl} ${clipText}`}
                  data-size='large'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    className='social-icon mr-4'
                    src='https://res.cloudinary.com/busola/image/upload/v1571852204/twitter.png'
                    alt=''
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shortUrl} ${clipText}&amp;src=sdkpreparse`}
                  className='socials'>
                  <img
                    className='social-icon'
                    src='https://res.cloudinary.com/busola/image/upload/v1571852202/facebook.png'
                    alt=''
                  />
                </a>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <div className='right-section-success d-flex flex-column justify-content-center'>
          <h3 className='email-title'>Email Link</h3>
          <form onSubmit={onFormSubmit}>
            <input
              type='text'
              className='form-input'
              placeholder='Your Name'
              id='name'
              name='name'
              value={name}
              required
              onChange={e => onChange(e)}
            />
            <input
              type='email'
              className='form-input'
              name='to'
              value={to}
              required
              onChange={e => onChange(e)}
              placeholder="Reciever's email"
            />
            <textarea
              onChange={e => onChange(e)}
              name='message'
              id='message'
              value={message}
              required
              cols='30'
              rows='10'
              className='form-textarea'
              placeholder='Message'
            />
            {!loading ? (
              <button className='upload-btn mt-4'>Send</button>
            ) : (
              <Loader />
            )}
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { sendEmail, setAlert }
)(UploadSuccess);
