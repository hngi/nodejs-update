import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInWithGoogle } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class GoogleAuth extends Component {
  renderAuthButton() {
    return (
      <GoogleLogin
        clientId='97829381082-8imeelchtkuvfcd47q0dgia1p0l91msr.apps.googleusercontent.com'
        buttonText='Sign In With Google'
        onSuccess={response => {
          const { w3 } = response;
          const { U3, ofa } = w3;

          const username = ofa;
          const password = 'googlepriviledgeuser';
          const email = U3;
          this.props.signInWithGoogle(
            username,
            email,
            password
            // this.props.history
          );
        }}
        style={{ display: 'flex', justifyContent: 'center' }}
        onFailure={response => {}}
        cookiePolicy={'single_host_origin'}
      />
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signInWithGoogle }
)(withRouter(GoogleAuth));
