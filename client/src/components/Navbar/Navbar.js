import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import { logout } from "../../actions/auth";
const Navbar = ({ logout, isAuthenticated }) => {
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
          {/* <li
            className='nav-item'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'>
            <Link className='nav-link' to='/team'>
              Meet the Team
            </Link>
          </li> */}
          {isAuthenticated ? (
            <Fragment>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                <Link className="nav-link" to="/dashboard">
                  <span className="hide-sm">Dashboard</span>{" "}
                </Link>{" "}
              </li>
              <li
                onClick={logout}
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                <Link className="nav-link" to="/login">
                  <span className="hide-sm">Logout</span>{" "}
                  <i className="fas fa-sign-out-alt"></i>
                </Link>{" "}
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logout })(Navbar);
