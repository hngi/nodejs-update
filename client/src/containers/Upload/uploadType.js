import React, { useState, useEffect } from 'react';
import FileUpload from './fileUpload';
import FolderUpload from './folderUpload';

export default function UploadType({
  upload,
  onChange,
  file,
  getRootProps,
  getInputProps,
  isDragActive,
  removeFile
}) {
  const [uploadData, setUploadData] = useState({
    uploadType: false,
    fileUploaded: ''
  });

  const { uploadType, fileUploaded } = uploadData;

  const validate = file !== '' && file !== undefined && file !== null;

  useEffect(() => {
    setUploadData({
      fileUploaded: Object.values(file)
    });
  }, [validate]);

  // Check if file array has any changes
  useEffect(() => {
    setUploadData({
      fileUploaded: Object.values(file)
    });
  }, [file]);

  const toggleUploadType = () => {
    setUploadData({
      uploadType: !uploadType
    });
  };

  return (
    <div
      {...getRootProps()}
      className="d-flex flex-column align-items-center"
      style={{ outline: 'none' }}
    >
      {!uploadType ? (
        <FileUpload
          file={file}
          fileUploaded={fileUploaded}
          onChange={onChange}
          isDragActive={isDragActive}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          removeFile={removeFile}
          toggleUploadType={toggleUploadType}
        />
      ) : null}
      <button
        onClick={() => {
          upload();
        }}
        className="upload-btn mt-4"
      >
        Upload
      </button>
    </div>
  );
}
