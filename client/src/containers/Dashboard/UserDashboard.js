import React,{useEffect}from 'react';import{connect}from 'react-redux';import{Link}from 'react-router-dom';import{Redirect}from 'react-router-dom';import uuid from 'uuid/v4';import{CopyToClipboard}from 'react-copy-to-clipboard';import{setAlert}from '../../actions/alert';import{getUserUploads}from '../../actions/upload';import moment from 'moment';import './UserDashboard.css';const UserDashboard=({isAuthenticated,setAlert,user,getUserUploads,uploads})=>{var email,username,downloadCount;var totalDownloadCount=0;const clipText=' Please visit http://xshare.ga to share your files with ease';if(user!==null||uploads!==null||downloadCount!==undefined){var{email,username}=user;username=username;email=email;uploads.forEach(element=>{totalDownloadCount+=element.downloadCount})}
useEffect(()=>{getUserUploads(email)},[getUserUploads,email]);return(<div>{!isAuthenticated?((setAlert('You need to be logged in to do that','danger'),<Redirect to='/login'/>)):(<div className='main-grid'><section id='s1-left'><div className='l-two-grid'><div className='l-two'><Link to='/'><img
src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/home_m43xbx.png'
alt=''/><span>Home</span></Link></div><div className='l-two'><Link to='/payment'><img
src='https://res.cloudinary.com/fego/image/upload/v1572496670/xshare/payment_uhwtwy.png'
alt=''/><span>Payment</span></Link></div></div></section>{}<section id='s2-right'><section id='s3-top'>{}<nav><div className='search'></div><div className='nav-right'></div></nav><article id='nav-cards'><div className='card-one'><div className='card-sub-flex'><p>UPLOADS</p><h2>TOTAL</h2><h2>UPLOADS</h2></div><div className='img-circle green circle-div'>{uploads!==null?uploads.length:0}</div></div><div className='card-one'><div className='card-sub-flex'><p>DOWNLOADS</p><h2>TOTAL</h2><h2>DOWNLOADS</h2></div><div className='img-circle green circle-div'>{totalDownloadCount}</div></div><div className='card-one'><div className='card-sub-flex'><p>STORAGE</p><h2>STORAGE</h2></div><div className='img-circle green circle-div'>10GB</div></div><div className='card-one'><div className='card-sub-flex'><p>PLAN</p><Link to='/payment'><h2>UPGRADE NOW</h2></Link></div><div className='img-circle blue circle-div'>FREE</div></div></article></section>{}<section id='s4-bottom'><div className='right-section-content offset-grid'><article className='right-section-content' id='dl-cards'>{uploads!=null?(uploads.map(upload=>{return(<div key={uuid()}className='card-two'><div className='two-sub-flex'><br/><br/><br/><h3>{upload.fileName}</h3><a href>{upload.shortUrl}</a><p>{upload.downloadCount}{' '}
{upload.downloadCount===1?'Download':'Downloads'}</p><p>{moment(upload.createdAt).format('DD-MM-YYYY')}</p></div><div className='card-icons'><Link><CopyToClipboard
text={upload.shortUrl}
onCopy={()=>{upload.shortUrl===null?setAlert('Clipboard is empty','danger'):setAlert('Link Copied','success')}}><img
src='https://res.cloudinary.com/fego/image/upload/v1572496671/xshare/copy_yhensf.png'
alt=''/></CopyToClipboard></Link><div className='social-icons d-flex justify-content-center align-items-center'><a
className='socials'
href={`https://api.whatsapp.com/send?&text=${upload.shortUrl} ${clipText}`}
target='_blank'
rel='noopener noreferrer'><img
className='social-icon mr-3'
src='https://res.cloudinary.com/busola/image/upload/v1573039450/Webp.net-resizeimage_5.png'
alt=''/></a><a
className='socials'
href={`https://twitter.com/intent/tweet?text=${upload.shortUrl} ${clipText}`}
data-size='large'
target='_blank'
rel='noopener noreferrer'><img
className='social-icon mr-3'
src='https://res.cloudinary.com/busola/image/upload/v1573039442/Webp.net-resizeimage_4.png'
alt=''/></a><a
target='_blank'
rel='noopener noreferrer'
href={`https://www.facebook.com/sharer/sharer.php?u=${upload.shortUrl}&amp;src=sdkpreparse`}
className='socials'><img
className='social-icon'
src='https://res.cloudinary.com/busola/image/upload/v1573039378/Webp.net-resizeimage_3.png'
alt=''/></a></div></div></div>)})):(<h5>No uploads</h5>)}</article></div></section></section></div>)}</div>)};const mapStateToProps=state=>({isAuthenticated:state.auth.isAuthenticated,user:state.auth.user,uploads:state.upload.uploads});export default connect(mapStateToProps,{setAlert,getUserUploads})(UserDashboard)