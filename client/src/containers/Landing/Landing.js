import React, { useState } from 'react';
import './Landing.css';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/upload';
import { setAlert } from '../../actions/alert';
import UploadSuccess from '../UploadSuccess/UploadSuccess';

const NewLanding = ({ uploadFile, setAlert }) => {
  const [formData, setFormData] = useState({
    file: '',
    show: false,
    loader: true
  });
  const { file, show } = formData;

  const upload = () => {
    if (file === '' || file === undefined || file === null) {
      setAlert('Please select a file to upload', 'danger');
      setFormData({ show: false });
    } else if (file.size >= 20000000) {
      setFormData({ show: false });
      setAlert('Only files less than 20MB supported', 'danger');
    } else if (
      file.name.match(/.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|zip|xlsx)$/)
    ) {
      setFormData({ show: true });
      uploadFile(file);
    } else {
      setFormData({ show: false });
      setAlert(
        'Only .mp4 .mp3 .png .jpg .jpeg .docx .pdf .gif files are supported',
        'danger'
      );
    }
  };
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name !== 'file' ? e.target.value : e.target.files[0]
    });
  };

  return (
    <main className='wrapper home-section d-flex justify-content-between align-items-center'>
      <div className='left-section'>
        <h1 className='left-section-title'>
          The most seamless
          <br />
          file transfer experience
        </h1>
        <h4 className='left-section-content'>
          Fast, Safe and Secure.... <br />
          Simply upload a file and share it via email or a generated link{' '}
        </h4>
        <img
          className='left-section-image'
          src='https://res.cloudinary.com/busola/image/upload/v1571806133/icon.png'
          alt=''
        />
      </div>
      <div className='right-section d-flex justify-content-center align-items-center'>
        {!show ? (
          <div className='d-flex flex-column align-items-center'>
            <label
              htmlFor='upload'
              className='right-section-upload d-flex flex-column justify-content-center align-items-center'>
              <img
                src='https://res.cloudinary.com/busola/image/upload/v1571806132/add.png'
                alt=''
              />
              <p className='right-section-title mt-2'>Add a file</p>
              <h6 className='right-section-content'>
                {file ? file.name : null}
              </h6>
              <br />
              <p className='right-section-content pl-4 pr-4'>
                {''} ( max size: 20MB | .mp4 .mp3 .png .jpg .jpeg .docx .pdf
                .gif files are supported)
              </p>
            </label>
            <input
              type='file'
              name='file'
              onChange={e => onChange(e)}
              className='input-file'
              id='upload'
            />
            <button className='upload-btn mt-4' onClick={upload}>
              Upload
            </button>
          </div>
        ) : (
          <UploadSuccess />
        )}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { uploadFile, setAlert }
)(NewLanding);
