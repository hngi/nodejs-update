import React from "react";
import "./Landing.css";
import Share from "../../components/Share/share";
import { showShare } from "../../actions/share";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { logout } from "../../actions/auth";

const Landing = ({ isSignedInWithGoogle, logout, showShare, hide }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">XSHARE</Link>
          <ul className="sub-link">
            {isSignedInWithGoogle ? (
              <li>
                <GoogleLogout
                  id="googleLogOutBtn"
                  clientId="97829381082-8imeelchtkuvfcd47q0dgia1p0l91msr.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  onFailure={logout}
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
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>The most seamless file transfer experience ever.</h1>
            <label htmlFor>Upload file</label>
            <input className="form-control-file" type="file" />
            <br />
            <button
              type="submit"
              className="btn btn-primary float-right"
              value="Share"
              onClick={showShare}
            >
              {" "}
              Share
            </button>
            <button id="back" className="btn btn-primary float-left">
              Cancel
            </button>

            {hide ? null : <Share />}
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src="https://res.cloudinary.com/dvbwpicno/image/upload/v1571178848/yg8ch6bhftwzooxugbuo.png"
                alt="cloudimage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  isSignedInWithGoogle: state.auth.isSignedInWithGoogle,
  hide: state.showShare.hide
});

const mapDispatchToProps = dispatch => ({
  showShare: () => dispatch(showShare()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
