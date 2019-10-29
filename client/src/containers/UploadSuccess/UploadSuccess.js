import React, { useState } from 'react';
import './UploadSuccess.css';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/upload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { setAlert } from '../../actions/alert';
import EmailLoader from '../Loader/EmailLoader';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';
import fakeShortUrl from '../../assets/data/fakeShortUrl.json';

const UploadSuccess = ({ sendEmail, uploadstate, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    to: '',
    message: '',
    loading: false,
    show: false,
    share: false
  });
  const arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  }
  const { name, message, to, show, loading, share } = formData;
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

  const shareUrl = event => {
    setFormData({ share: true });
  };
  const shortUrl = uploadstate.shortUrl;
  const clipText =
    ' Please visit http://xshare.ga to share your files with ease';
  return (
    <>
      {!show ? (
        <div className="right-section-success d-flex flex-column justify-content-center align-items-center">
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
              <div className="d-flex justify-content-between align-items-center mb-4">
                <img
                  src="https://res.cloudinary.com/busola/image/upload/v1571806132/success.png"
                  alt=""
                  className="upload-success-img mr-3"
                />
                <p className="upload-success">Upload Success</p>
              </div>
              <div className="short-links">
                {fakeShortUrl.map(short => {
                  return (
                    <div
                      className="d-flex align-items-center short-link"
                      key={short.id}
                    >
                      <div
                        className="mt-2 d-flex align-items-center upload-link mr-3"
                        id="upload-link"
                      >
                        <h5>{short.shortUrl}</h5>
                      </div>
                      <div className="d-flex align-items-center">
                        {!share ? (
                          <>
                            <CopyToClipboard
                              text={short.shortUrl}
                              onCopy={() => {
                                setFormData({ copied: true });
                                short.shortUrl === null
                                  ? setAlert('Clipboard is empty', 'danger')
                                  : setAlert('Link Copied', 'success');
                              }}
                            >
                              <div className="mr-3 d-flex align-items-center upload-success-copy">
                                <img
                                  src="https://res.cloudinary.com/cavdy/image/upload/v1572343978/content_copy_24px_1_wuelex.png"
                                  alt=""
                                  className="mr-1"
                                />
                                Copy
                              </div>
                            </CopyToClipboard>
                            <div
                              className="d-flex align-items-center upload-success-share"
                              onClick={shareUrl}
                            >
                              <img
                                src="https://res.cloudinary.com/cavdy/image/upload/v1572343978/XMLID_4_czlhcl.png"
                                alt=""
                                className="mr-2"
                              />
                              Share
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className="mr-3 d-flex align-items-center upload-success-copy"
                              onClick={email}
                            >
                              <img
                                src="https://res.cloudinary.com/cavdy/image/upload/v1572343978/mail_outline_24px_1_tq5nxb.png"
                                alt=""
                                className="mr-1"
                              />
                              Email
                            </div>
                            <div className="social-icons d-flex justify-content-center align-items-center">
                              <a
                                className="socials"
                                href={`https://api.whatsapp.com/send?&text=${short.shortUrl} ${clipText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  className="social-icon mr-3"
                                  src="https://res.cloudinary.com/busola/image/upload/v1571852212/whatsapp.png"
                                  alt=""
                                />
                              </a>
                              <a
                                className="socials"
                                href={`https://twitter.com/intent/tweet?text=${short.shortUrl} ${clipText}`}
                                data-size="large"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  className="social-icon mr-3"
                                  src="https://res.cloudinary.com/busola/image/upload/v1571852204/twitter.png"
                                  alt=""
                                />
                              </a>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://www.facebook.com/sharer/sharer.php?u=${short.shortUrl}&amp;src=sdkpreparse`}
                                className="socials"
                              >
                                <img
                                  className="social-icon"
                                  src="https://res.cloudinary.com/busola/image/upload/v1571852202/facebook.png"
                                  alt=""
                                />
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="d-flex justify-centent-center align-items-center flex-column loader">
              <div style={{ width: '150px' }}>
                <ChangingProgressProvider values={arr}>
                  {percentage => (
                    <CircularProgressbar
                      styles={buildStyles({
                        pathTransitionDuration: 0.15
                      })}
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  )}
                </ChangingProgressProvider>
              </div>
              <div
                className="left-section-content mt-3"
                style={{ textAlign: 'center' }}
              >
                <p>Please be patient while your file gets uploaded...</p>
                <p className="mt-2">
                  Kindly note that larger files will take longer to be completed
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="right-section-success d-flex flex-column justify-content-center">
          <h3 className="email-title">Email Link</h3>
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
            {!loading ? (
              <button className="upload-btn mt-4">Send</button>
            ) : (
              <EmailLoader />
            )}
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { sendEmail, setAlert }
)(UploadSuccess);
