import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

export default function loader() {
  return (
    <div className='d-flex justify-centent-center align-items-center flex-column loader'>
      <Loader type='Circles' color='#172B4D' height={70} width={70} />
      <p className='left-section-content mt-3' style={{ textAlign: 'center' }}>
        <p>Please be patient while your file gets uploaded...</p>
        <p className='mt-2'>
          Kindly note that larger files will take longer to be completed
        </p>
      </p>
    </div>
  );
}
