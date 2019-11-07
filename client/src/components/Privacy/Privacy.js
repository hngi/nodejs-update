import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <main className='wrapper mt-4'>
      <h1 className='privacy-title mb-5'>Privacy Policy</h1>
      <div className='d-flex justify-content-between w-100 privacy'>
        <div className='privacy-left w-50'>
          <h3 className='privacy-content-title'>About</h3>
          <p className='privacy-content-body'>
            XSHARE, accessible from here, one of our main priorities is the
            privacy of our visitors. This Privacy Policy document contains types
            of information that is collected and recorded by Xshare and how we
            use it. If you have additional questions or require more information
            about our Privacy Policy, do not hesitate to contact us through
            email at <a href='mailto:xshareng@gmail.com'>xshareng@gmail.com</a>
          </p>
          <h3 className='privacy-content-title mt-4'>
            Cookies and Web Beacons
          </h3>
          <p className='privacy-content-body'>
            Like any other website, Xshare uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>
        </div>
        <div className='w-50 ml-5 privacy-right'>
          <h3 className='privacy-content-title'>Privacy Policies</h3>
          <p className='privacy-content-body'>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Xshare. Our Privacy Policy was created with
            the help of the Privacy Policy Generator and the Generate Privacy
            Policy Generator.
          </p>
          <p className='privacy-content-body mt-2'>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Xshare, which are
            sent directly to users' browser. They automatically receive your IP
            address when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize
            the advertising content that you see on websites that you visit.
            Note that Xshare has no access to or control over these cookies that
            are used by third-party advertisers.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
