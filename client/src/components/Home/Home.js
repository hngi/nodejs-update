import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className='wrapper home-section d-flex justify-content-between align-items-center oga2'>
      <div className='left-section'>
        <h1 className='left-section-title'>
          The most seamless
          <br />
          file transfer experience
        </h1>
        <h4 className='left-section-content mb-5'>
          Fast, Safe and Secure.... <br />
          Simply upload a file and share it via email or a generated link{' '}
        </h4>
        <Link to='/upload' className='upload-btn get-started'>
          Get Started
        </Link>
      </div>
      <div className='right-section d-flex justify-content-center align-items-center'>
        <img
          className='home-image-right'
          src='https://res.cloudinary.com/cavdy/image/upload/v1571914214/sharing_f14pkg.png'
          alt=''
        />
      </div>
    </main>
  );
}
