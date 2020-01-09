import React, { useState } from 'react';
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
  const [uploadType, setUploadType] = useState(false);

  const toggleUploadType = () => {
    if (uploadType === true) {
      setUploadType(false);
    } else {
      setUploadType(true);
    }
  };

  return (
    <div
      {...getRootProps()}
      className='d-flex flex-column align-items-center'
      style={{ outline: 'none' }}>
      {!uploadType ? (
        <FileUpload
          file={file}
          onChange={onChange}
          isDragActive={isDragActive}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          removeFile={removeFile}
          toggleUploadType={toggleUploadType}
          upload={upload}
        />
      ) : (
        <FolderUpload
          file={file}
          onChange={onChange}
          isDragActive={isDragActive}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          removeFile={removeFile}
          toggleUploadType={toggleUploadType}
          upload={upload}
        />
      )}
    </div>
  );
}
