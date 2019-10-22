// // email field
const sendEmailField = document.querySelector('[send-email]');

// success field
const successField = document.querySelector('[success]');

// email button
const sendByEmailBtn = document.querySelector('.for-email');

// 
const fileUploadField = document.querySelector('[upload-file]');

// 
const fileUploadBtn = document.querySelector('.upload-btn');

fileUploadBtn.addEventListener('click', () => {
     fileUploadField.style.display = 'none';
     successField.style.display = 'block';
});

// // email send
sendByEmailBtn.addEventListener('click', () => {
    sendEmailField.style.display = 'block';
    successField.style.display = 'none'
});

function thisFileUpload() {
  document.getElementById("file").click();
};