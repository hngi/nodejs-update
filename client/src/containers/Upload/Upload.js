import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import uuid from 'uuid/v4';
import './Upload.css';
import { connect } from 'react-redux';
import { uploadFile } from '../../actions/upload';
import { setAlert } from '../../actions/alert';
import UploadSuccess from '../UploadSuccess/UploadSuccess';

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
    uploadedFile.map(i => {
      if (
        i.name.match(
          /.(jpeg|jpg|png|gif|mp4|mp3|fig|doc|docx|pdf|xlsx|avi|mkv|xml|exe)$/
        )
      ) {
        setFormData({ show: true });
        uploadFile(uploadedFile);
      } else {
        setFormData({ show: false });
        setAlert(
          'Only .mp4 .mp3 .avi .mkv .png .jpg .jpeg .doc .docx .pdf .gif .xml .exe files are supported',
          'danger'
        );
      }
    });
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

  const removeFile = event => {
    console.log('PARENT PARENT', event.target);
    console.log('PARENT', event.target.parentElement);
    event.target.parentElement.remove();
  };

  // Convert Uploaded Files to Array
  let fileUploaded;

  if (file) {
    fileUploaded = Object.values(file);
  }

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
          <div
            {...getRootProps()}
            className="d-flex flex-column align-items-center"
            style={{ outline: 'none' }}
          >
            <div className="right-section-upload d-flex flex-column justify-content-center align-items-center p-3">
              <label htmlFor="upload" className="upload-form-label">
                {isDragActive ? (
                  <div
                    style={{ background: 'rgba(38,128,235,0.5)' }}
                    {...getRootProps()}
                    className="d-flex flex-column align-items-center"
                  >
                    <label
                      htmlFor="upload"
                      className="right-section-upload d-flex flex-column justify-content-center align-items-center"
                    >
                      <p style={{ color: 'rgba(0,0,0,0.4)' }}>
                        Drop the file here...
                      </p>
                    </label>
                  </div>
                ) : (
                  <>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://res.cloudinary.com/busola/image/upload/v1571806132/add.png"
                        alt=""
                      />
                      <p className="right-section-title mb-0 mt-2 ml-3">
                        Select files to upload
                        <span className="right-section-sub-title">
                          (max size: 1gb | .mp4 .mp3 .png .jpg files supported)
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </label>
              <>
                <h6 className="right-section-content mt-2">
                  {file ? (
                    <>
                      {fileUploaded.map(i => {
                        return (
                          <span className="uploading-file mt-3" key={uuid()}>
                            <span className="upload-file-title">{`${i.name.substring(
                              0,
                              28
                            )}`}</span>{' '}
                            <img
                              src="https://res.cloudinary.com/cavdy/image/upload/v1572357426/Group_1_gnjyx3.png"
                              alt=""
                              className="cancel-upload"
                              onClick={removeFile}
                            />
                          </span>
                        );
                      })}
                    </>
                  ) : null}
                </h6>
              </>
            </div>
            <input
              {...getInputProps}
              type="file"
              name="file"
              onChange={e => onChange(e)}
              className="input-file"
              id="upload"
              multiple
            />

            <button
              onClick={() => {
                upload();
              }}
              className="upload-btn mt-4"
            >
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
)(Upload);
