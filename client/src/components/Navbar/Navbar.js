import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'>
            <img
              src='https://res.cloudinary.com/dvbwpicno/image/upload/v1571673681/oew99jmi9illraj70pfo.png'
              alt='logo'
            />
          </Link>
          <ul className='sub-link'>
            <li>
              <a href='/team'>Meet the Team</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar
