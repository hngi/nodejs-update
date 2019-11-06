import React from 'react';
import uuid from 'uuid/v4';
import { get } from 'http';

export default function fileUpload({
  file,
  isDragActive,
  getInputProps,
  getRootProps,
  onChange,
  removeFile,
  toggleUploadType,
  upload
}) {
  return (
    <>
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
                  Select a file(s) to upload
                  <span className="right-section-sub-title">
                    Up to 2GB for unregistered users
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
                {file.map(i => {
                  const id = uuid();
                  const getSize = (arr) => {
                    if (arr <= 1000) {
                      return `Size: ${arr }byte`
                    }
                    if (arr>=1000 && arr <= 100000) {
                      return `Size: ${(arr / 1000).toFixed(1)} kb`
                    }
                    if (arr >= 1000000 && arr <= 100000000) {
                      return `Size: ${(arr / 1000000).toFixed(1)}mb`
                    }
                    if (arr >= 1000000000) {
                      return `Size: ${(arr / 1000000000).toFixed(1)}gb`
                    }
                  }
                  return (
                    <span className="uploading-file mt-3" key={id}>
                      <span className="upload-file-title">{`${i.name.substring(
                        0,
                        28
                      )}`}
                        <br /><span className="preview">{getSize(i.size)}</span>
                      </span>{' '}
                      <img
                        src="https://res.cloudinary.com/cavdy/image/upload/v1572357426/Group_1_gnjyx3.png"
                        alt=""
                        className="cancel-upload"
                        onClick={e => removeFile(e, id, i.name)}
                      />
                    </span>
                  );
                })}
              </>
            ) : null}
          </h6>
        </>
      </div>
      <h3 className="upload-type" onClick={toggleUploadType}>
        Click here to upload a folder
      </h3>
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
          upload('file');
        }}
        className="upload-btn mt-4"
      >
        Upload
      </button>
    </>
  );
}
