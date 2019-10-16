import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`} style={{position: "fixed",
    top: "0",
      left: "0",
      zIndex: "1040",
      width: "100%",}}>
      {alert.msg}
    </div>
  ));
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
