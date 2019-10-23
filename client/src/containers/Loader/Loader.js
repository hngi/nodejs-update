import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

export default function loader() {
  return (
    <div className="d-flex justify-centent-center align-items-center loader">
      <Loader type="Circles" color="#2680eb" height={70} width={70} />
    </div>
  );
}
