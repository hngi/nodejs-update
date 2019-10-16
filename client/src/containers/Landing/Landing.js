import React from 'react';
import './Landing.css';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { logout } from '../../actions/auth';
const Landing = ({ isSignedInWithGoogle ,logout}) => {
  return (
    <div>
      <header>
        <nav>
          <a href='index.html'>XSHARE</a>
          <ul className='sub-link'>
            {/* <li>About</li> */}
            {isSignedInWithGoogle ? (
              <li>
                <GoogleLogout
                  id='googleLogOutBtn'
                  clientId='97829381082-8imeelchtkuvfcd47q0dgia1p0l91msr.apps.googleusercontent.com'
                  buttonText='Logout'
                  onLogoutSuccess={logout}
                  onFailure={() => logout()}
                />
              </li>
            ) : (
              <li>
                <GoogleAuth />
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <section container>
          <div className='left'>
            <h2>The most seamless file transfer experence ever.</h2>
            <button className='upload-btn file'>Upload a file</button>
            <button className='upload-btn folder'>Upload a folder</button>
          </div>
          <div className='right'>
            <img
              src='https://res.cloudinary.com/dvbwpicno/image/upload/v1571178848/yg8ch6bhftwzooxugbuo.png'
              alt='cloudimage'
            />
          </div>
        </section>
      </main>
    </div>
  );
};
const mapStateToProps = state => ({
  isSignedInWithGoogle: state.auth.isSignedInWithGoogle
});
export default connect(mapStateToProps,{logout})(Landing);
