// import React, { Component } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { success } from '../../assets/img';
// import './style.css';

// export default class index extends Component {
//   state = {
//     name: '',
//     to: '',
//     message: '',
//     copied: false,
//     value: '',
//     show: false
//   };
//   componentDidMount() {
//     const val = document.querySelector('.upload-link');
//     this.setState({ value: val.textContent });

//     setTimeout(() => {
//       this.setState({ copied: false });
//     }, 5000);
//   }
//   email = () => {
//     this.setState({ show: true });
//   };
//   render() {
//     const { show } = this.state;
//     return (
//       <>
//         {!show ? (
//           <div className="right-section-success d-flex flex-column justify-content-center align-items-center">
//             <img src={success} alt="" />
//             <p className="upload-success">Upload Success</p>
//             <div className="mt-2 upload-link" id="upload-link">
//               {shortUrl ? shortUrl : null}
//             </div>

//             <div className="d-flex justify-content-center align-items-center">
//               <CopyToClipboard
//                 text={shortUrl}
//                 onCopy={() => {
//                   setFormData({ copied: true });
//                   setAlert('Link Copied', 'success');
//                 }}>
//                 <button className="upload-btn mt-4 mr-3">Copy Link</button>
//               </CopyToClipboard>
//               <button className="upload-btn mt-4" onClick={email}>
//                 Email File
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="right-section-success d-flex flex-column justify-content-center">
//             <h3 className="email-title">Email File</h3>
//               <form
//               onSubmit={e => {
//                 e.preventDefault();
//                 sendEmail(name, to, message, shortUrl);
//                 setAlert(`The file was sent to ${to} successfully`, 'success');
//               }}>
//                 <input type="text" className="form-input" placeholder='Your Name'
//                   id='name'
//                   name='name'
//                   value={name}
//                   onChange={e => onChange(e)} />
//             <input
//               type="email"
//               className="form-input"
//                   name='to'
//                   value={to}
//                   onChange={e => onChange(e)}
//               placeholder="Reciever's email"
//             />
//             <textarea
//                   onChange={e => onChange(e)}
//                   name='message'
//                   id='message'
//                   value={message}
//                   required
//               cols="30"
//               rows="10"
//               className="form-textarea"
//               placeholder="Message"
//             ></textarea>
//             <button className="upload-btn mt-4">Send</button>
//             </form>
//           </div>
//         )}
//       </>
//     );
//   }
// }
