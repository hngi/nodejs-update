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



// //  //
// // email send button 
// const sendEmailBtn = document.querySelector('.email-btn');

// // //
// const sendLinkBtn = document.querySelector('.link-btn');
// // email field
// const sendLinkField = document.querySelector('[generate-link]');
// // 
// const send =  document.querySelector('.send');


// // all back links
// // back to home
// const backForUpload = document.querySelector('.for-upload');

// // back to home
// const backForLink = document.querySelector('.for-link');


// // upload
fileUploadBtn.addEventListener('click', () => {
     fileUploadField.style.display = 'none';
     successField.style.display = 'block';
});

// // email send
sendByEmailBtn.addEventListener('click', () => {
    sendEmailField.style.display = 'block';
    successField.style.display = 'none'
});

// // link send
// sendLinkBtn.addEventListener('click', () => {
//     sendLinkField.style.display = 'block';
//     fileUploadField.style.display = 'none'
// });

// // all back links dir
// // back to screen
// backForUpload.addEventListener('click', () => {
//     rightDisplay.style.display = 'block';
//     fileUploadField.style.display = 'none';
// });

// // back to upload from email
// backForEmail.addEventListener('click', () => {
//     sendLinkField.style.display = 'block';
//     sendEmailField.style.display = 'none';
// });

// // back to upload from link
// backForLink.addEventListener('click', () => {
//     fileUploadField.style.display = 'block';
//     sendLinkField.style.display = 'none';
// });





function thisFileUpload() {
  document.getElementById("file").click();
};