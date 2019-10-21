// // email field
const sendEmailField = document.querySelector('[send-email]');

// success field
const successField = document.querySelector('[success]');

// email button
const sendByEmailBtn = document.querySelector('.for-email');
// const uploadBtn = document.querySelector('.file');
// // image
// const rightDisplay = document.querySelector('.right');
// // upload field


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
// uploadBtn.addEventListener('click', () => {
//      rightDisplay.style.display = 'none';
//      fileUploadField.style.display = 'block';
//      sendLinkField.style.display = 'none';
// });

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


// // add files 
// const addFiles = document.querySelector('#add-files');
// // 

// const fileName =  document.querySelector('h4');

// function add() {
//     fileName.textContent = addFiles.value
// }

// // copy feed back
// // const copy =  document.querySelector('.copy');
// // const feedback =  document.querySelector('.copy-feedback');

// // copy.addEventListener('click', () => {
// //     feedback.style.display = 'block';
// // })
