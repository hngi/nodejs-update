import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <Link className='header' to='/'>
            XSHARE
          </Link>
          <ul>
            <li>
              <Link to='/privacy'>
                Privacy
              </Link>
            </li>
          </ul>
          {/* <ul className='sub-link'>
            {isSignedInWithGoogle ? (
              <li>
                <GoogleLogout
                  id="googleLogOutBtn"
                  clientId="97829381082-8imeelchtkuvfcd47q0dgia1p0l91msr.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  onFailure={() => logout()}
                />
              </li>
            ) : (
              <li className="login">
                <GoogleAuth />
              </li>
            )}
          </ul> */}
        </nav>
      </header>
    </div>
  );
}

export default Navbar
