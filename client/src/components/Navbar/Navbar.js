import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function index() {
  return (
    <nav className="navbar nav navbar-expand-lg navbar-light bg-light wrapper pt-3 pb-3">
      <Link className="nav__nav-logo" to="/">
        xShare
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/upload">
              Upload a File
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team">
              Meet the Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
