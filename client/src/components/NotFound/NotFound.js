import React from 'react';import{Link}from 'react-router-dom';import './NotFound.css';const NotFound=()=>{return(<main className="wrapper" id="s2-error"><img
style={{height:'auto'}}
src="https://res.cloudinary.com/busola/image/upload/v1571518592/17828.jpg"
alt="cloudimage"/>{}<p className="e-text">Sorry,we can't find the page you are looking for</p><Link className="home" to="/">Go Home</Link></main>)};export default NotFound