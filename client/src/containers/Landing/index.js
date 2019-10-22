const landingControl = {
  sendEmailField() {
    document.querySelector('[send-email]');
  },
  successField() {
    document.querySelector('[success]');
  },
  sendByEmailBtn() {
    document.querySelector('.for-email');
  },
  fileUploadField() {
    document.querySelector('[upload-file]');
  },
  fileUploadBtn() {
    document.querySelector('.upload-btn');
  },
  fileUploadBtnOnClick(fileUploadField) {
    landingControl.fileUploadField.style.display = 'none';
    landingControl.successField.style.display = 'block';
  },

  sendByEmailBtnOnClick(sendEmailField) {
    landingControl.sendEmailField.style.display = 'block';
    landingControl.successField.style.display = 'none';
  },

  thisFileUpload() {
    document.getElementById('file').click();
  }
};

export default landingControl;
