import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <p id='year'>
        {new Date().getFullYear()} {''}
        Built by HNG 6.0 Interns |{' '}
        <Link href='privacy.html'>Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
