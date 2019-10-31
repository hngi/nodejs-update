import React, { useState } from 'react';
import FileUpload from './fileUpload';
import FolderUpload from './folderUpload';

export default function UploadType({
  upload,
  onChange,
  file,
  getRootProps,
  getInputProps,
  isDragActive
}) {
  const [uploadType, setUploadType] = useState(false);
  const removeFile = event => {
    console.log('PARENT PARENT', event.target);
    console.log('PARENT', event.target.parentElement);
    event.target.parentElement.remove();
  };

  const toggleUploadType = () => {
    setUploadType(!uploadType);
  };

  // Convert Uploaded Files to Array
  let fileUploaded;

  if (file) {
    fileUploaded = Object.values(file);
  }
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
      ) : (
        <FolderUpload
          file={file}
          fileUploaded={fileUploaded}
          onChange={onChange}
          isDragActive={isDragActive}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          removeFile={removeFile}
          toggleUploadType={toggleUploadType}
        />
      )}
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
