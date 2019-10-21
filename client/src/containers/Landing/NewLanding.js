// import React from 'react';
// import { connect } from 'react-redux';

// import { upload, hidelink } from '../../actions/upload';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// import './NewLanding.css';

// const NewLanding = ({ upload }) => {
//   const uploadBtn = document.querySelector('.file');
//   // image
//   const rightDisplay = document.querySelector('.right');
//   // upload field
//   const fileUploadField = document.querySelector('[upload-file]');

//   const sendEmailField = document.querySelector('[send-email]');
//   const sendLinkField = document.querySelector('[generate-link]');
//   //
//   const send = document.querySelector('.send');

//   // all back links
//   // back to home
//   const backForUpload = document.querySelector('.for-upload');

//   const backForLink = document.querySelector('.for-link');

//   // upload
//   uploadBtn.addEventListener('click', () => {
//     rightDisplay.style.display = 'none';
//     fileUploadField.style.display = 'block';
//     sendLinkField.style.display = 'none';
//   });

//   // link send
//   send.addEventListener('click', () => {
//     sendLinkField.style.display = 'block';
//     fileUploadField.style.display = 'none';
//   });

//   // all back links dir
//   // back to screen
//   backForUpload.addEventListener('click', () => {
//     rightDisplay.style.display = 'block';
//     fileUploadField.style.display = 'none';
//   });

//   // back to upload from link
//   backForLink.addEventListener('click', () => {
//     fileUploadField.style.display = 'block';
//     sendLinkField.style.display = 'none';
//   });

//   // add files
//   const addFiles = document.querySelector('#add-files');
//   //

//   const fileName = document.querySelector('h4');

//   function add() {
//     fileName.textContent = addFiles.value;
//   }

//   return (
//     <div>
//       <section container>
//         <div className='left'>
//           <h2>The most seamless file transfer experence ever.</h2>
//           <button className='upload-btn file'>Upload a file</button>
 
//         </div>
//         <div className='right'>
//           <img
//             style={{ margin: '0 auto', width: '700px', height: 'auto' }}
//             src='https://res.cloudinary.com/busola/image/upload/v1571518592/17828.jpg'
//             alt='cloudimage'
//           />
//         </div>
//         {/* file upload field */}
//         <div upload-file>
//           <span className='back for-upload' title='back'>
//             ⋖
//           </span>
//           <div className='form-header'>
//             <h2>Upload a file and send it by email</h2>
//             <br />
//           </div>
//           <div className='email-field-content'>
//             <div className>
//               <input type='file' name='add' id='add-files' onchange='add()' />
//             </div>
//             <input type='text' placeholder='Name' />
//             <br />
//             <input type='email' placeholder="Receiver's email address" />
//             <br />
//             <input type='text' placeholder='Subject' />
//             <br />
//             <div className='send-options'>
//               <a href='index.html' className='cancel'>
//                 cancel
//               </a>
//               <button className='upload-btn send'>send</button>
//             </div>
//           </div>
//         </div>
//         <div generate-link>
//           <span className='back for-link' title='back'>
//             ⋖
//           </span>
//           <div className='gen-link-content'>
//             <h2>Link generated successfully!</h2>
//             <p className='generated-link'>
//               https://github.com/shonubijerry/Andela-BootCamp-44-Slack-Resources
//             </p>
//             <div copy>
//               <button className='upload-btn copy'>copy link</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   uploadstate: state.upload
// });
// export default connect(
//   mapStateToProps,
//   { upload, hidelink }
// )(NewLanding);

