import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { success } from '../../assets/img';
import './style.css';

export default class index extends Component {
  state = {
    copied: false,
    value: '',
    show: false
  };
  componentDidMount() {
    const val = document.querySelector('.upload-link');
    this.setState({ value: val.textContent });

    setTimeout(() => {
      this.setState({ copied: false });
    }, 5000);
  }
  email = () => {
    this.setState({ show: true });
  };
  render() {
    const { show } = this.state;
    return (
      <>
        {!show ? (
          <div className="right-section-success d-flex flex-column justify-content-center align-items-center">
            <img src={success} alt="" />
            <p className="upload-success">Upload Success</p>
            <div className="mt-2 upload-link" id="upload-link">
              https://bit.ly/vvscfgcfgfccghccvvvgg
            </div>
            {this.state.copied ? (
              <span style={{ color: 'red' }}>Copied.</span>
            ) : null}
            <div className="d-flex justify-content-center align-items-center">
              <CopyToClipboard
                text={this.state.value}
                onCopy={() => this.setState({ copied: true })}
              >
                <button className="upload-btn mt-4 mr-3">Copy Link</button>
              </CopyToClipboard>
              <button className="upload-btn mt-4" onClick={this.email}>
                Email File
              </button>
            </div>
          </div>
        ) : (
          <div className="right-section-success d-flex flex-column justify-content-center">
            <h3 className="email-title">Email File</h3>
            <input type="text" className="form-input" placeholder="Name" />
            <input
              type="email"
              className="form-input"
              placeholder="Reciever's email"
            />
            <textarea
              cols="30"
              rows="10"
              className="form-textarea"
              placeholder="Message"
            ></textarea>
            <button className="upload-btn mt-4">Send</button>
          </div>
        )}
      </>
    );
  }
}
