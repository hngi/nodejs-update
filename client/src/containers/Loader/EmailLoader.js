
import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

export default function emailLoader() {
return (
  <div className='d-flex justify-centent-center align-items-center flex-column loader'>
    <Loader type='Circles' color='#172B4D' height={70} width={70} />
  </div>
);
}
