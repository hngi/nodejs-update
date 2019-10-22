import React from 'react';
import './style.css';
import { iconImage, add } from '../../assets/img';
import UploadSuccess from '../UploadSuccess';

export default class index extends React.Component {
  state = {
    show: false,
    copied: false,
    value: ''
  };

  upload = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { show } = this.state;
    return (
      <main className="wrapper home-section d-flex justify-content-between align-items-center mt-5">
        <div className="left-section">
          <h1 className="left-section-title">
            The most seamless file
            <br />
            transfer experience ever.
          </h1>
          <h4 className="left-section-content">
            Fast, Safe and Secure.... <br />
            Enter your Name and Receiver's email and upload file(s).
          </h4>
          <img className="left-section-image" src={iconImage} alt="" />
        </div>
        <div className="right-section d-flex justify-content-center align-items-center">
          {!show ? (
            <div className="d-flex flex-column align-items-center">
              <label
                htmlFor="upload"
                className="right-section-upload d-flex flex-column justify-content-center align-items-center"
              >
                <img src={add} alt="" />
                <p className="right-section-title mt-2">Add your files</p>
                <p className="right-section-content">
                  (max size: 1gb | .mp4 .mp3 .png .jpg files supported)
                </p>
              </label>
              <input type="file" className="input-file" id="upload" />
              <button className="upload-btn mt-4" onClick={this.upload}>
                Upload
              </button>
            </div>
          ) : (
            <UploadSuccess />
          )}
        </div>
      </main>
    );
  }
}
