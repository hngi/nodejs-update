import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <MDBFooter color='blue' className='font-small pt-4 mt-4'>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}{' '}
          <a href='https://www.hng.tech'> Built by HNG 6.0 Interns </a>
          <Link to='/privacy'> Privacy</Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
