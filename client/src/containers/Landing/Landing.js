import React, { useState } from 'react';
import './Landing.css';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/upload';
import UploadSuccess from '../UploadSuccess/UploadSuccess';
import { setAlert } from '../../actions/alert';
import { iconImage, add } from '../../assets/img';

const NewLanding = ({ uploadFile, uploadstate, setAlert }) => {
  const [formData, setFormData] = useState({
    file: '',
    show: false,
    isLoading: false
  });
  const { file, show, isLoading } = formData;

  const upload = () => {
    console.log(file)
    if(file===''||file===undefined){
      setAlert('Please upload a file', 'danger');
      setFormData({ show: false });
    }else{

      setFormData({ isLoading: false, show: true });
      uploadFile(file);
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
    <main className='wrapper home-section d-flex justify-content-between align-items-center mt-5'>
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
        <img className='left-section-image' src={iconImage} alt='' />
      </div>
      <div className='right-section d-flex justify-content-center align-items-center'>
        {!show ? (
          <div className='d-flex flex-column align-items-center'>
            <label
              htmlFor='upload'
              className='right-section-upload d-flex flex-column justify-content-center align-items-center'>
              <img src={add} alt='' />
              <p className='right-section-title mt-2'>Add a file</p>
              <p className='right-section-content'>
                (max size: 20MB | .mp4 .mp3 .png .jpg .jpeg .png .docx .pdf .gif
                files supported)
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
