import React, { useState } from 'react';
import './UploadSuccess.css';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/upload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { setAlert } from '../../actions/alert';
import Loader from '../Loader/Loader';
import { whatsapp, twitter, facebook } from '../../assets/img';
const UploadSuccess = ({ sendEmail, uploadstate, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    to: '',
    message: '',
    show: false
  });

  const { name, message, to, show } = formData;
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
    sendEmail(name, to, message, shortUrl);
    setAlert(`The file was sent to ${to} successfully`, 'success');
  };
  const shortUrl = uploadstate.shortUrl;

  return (
    <div className="">
      {!show ? (
        <div className="right-section-success d-flex flex-column justify-content-center align-items-center">
          {shortUrl ? (
            <>
            {/* <i 
          onClick={() => {
            document.querySelector('.right-section').style.display = 'block';
            document.querySelector('.success').style.display = 'none';
          }}
          className="fas fa-chevron-circle-left back"></i> */}
              <img
                src="https://res.cloudinary.com/busola/image/upload/v1571806132/success.png"
                alt=""
              />
              <p className="upload-success">Upload Success</p>
              <div className="mt-2 upload-link" id="upload-link">
                {shortUrl}
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <CopyToClipboard
                  text={shortUrl}
                  onCopy={() => {
                    setFormData({ copied: true });
                    shortUrl === null
                      ? setAlert('Clipboard is empty', 'danger')
                      : setAlert('Link Copied', 'success');
                  }}
                >
                  <button className="upload-btn mt-4 mr-3">Copy Link</button>
                </CopyToClipboard>
                <button className='upload-btn mt-4' onClick={email}>
                  Email File
                </button>
              </div>
              <p className='option'>or share with</p>
                <div className='d-flex justify-content-center align-items-center'>
                <a href="#" className="social-icon whatsapp"><i class="fab fa-whatsapp fa-lg"></i></a>
                <a href="#" className="social-icon twitter"><i class="fab fa-facebook fa-lg"></i></a>
                <a href="#" className="social-icon facebook"><i class="fab fa-twitter fa-lg"></i></a>
                </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <div className='right-section-success d-flex flex-column justify-content-center email'>
          <i 
          onClick={() => {
            document.querySelector('.success').style.display = 'block';
            document.querySelector('.email').style.display = 'none';
          }}
          className="fas fa-chevron-circle-left back"></i>
          <h3 className='email-title'>Email File</h3>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              id="name"
              name="name"
              value={name}
              required
              onChange={e => onChange(e)}
            />
            <input
              type="email"
              className="form-input"
              name="to"
              value={to}
              required
              onChange={e => onChange(e)}
              placeholder="Reciever's email"
            />
            <textarea
              onChange={e => onChange(e)}
              name="message"
              id="message"
              value={message}
              required
              cols="30"
              rows="10"
              className="form-textarea"
              placeholder="Message"
            />
            <button className='upload-btn mt-4'>Send</button>
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
