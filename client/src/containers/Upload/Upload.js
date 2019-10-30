import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Upload.css';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/upload';
import { setAlert } from '../../actions/alert';
import UploadSuccess from '../UploadSuccess/UploadSuccess';
import UploadType from './uploadType';

const Upload = ({ uploadFile, setAlert }) => {
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
      return null;
    }

    // Convert Uploaded Files to Array
    const uploadedFile = Object.values(file);
    setFormData({ show: true });
    uploadFile(uploadedFile);
  };
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name !== 'file' ? e.target.value : e.target.files
    });
  };

  const onDrop = useCallback(File => {
    setFormData({ file: File });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <main className="wrapper home-section d-flex justify-content-between align-items-center">
      <div className="left-section">
        <h1 className="left-section-title">
          The most seamless
          <br />
          file transfer experience
        </h1>
        <h4 className="left-section-content">
          Fast, Safe and Secure.... <br />
          Simply upload a file and share it via email or a generated link{' '}
        </h4>
        <img
          className="left-section-image"
          src="https://res.cloudinary.com/busola/image/upload/v1571806133/icon.png"
          alt=""
        />
      </div>
      <div className="right-section d-flex justify-content-center align-items-center">
        {!show ? (
          <UploadType
            upload={upload}
            onChange={onChange}
            file={file}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            getRootProps={getRootProps}
          />
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
)(Upload);
