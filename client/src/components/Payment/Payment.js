import React, { Component } from "react";
import RavePaymentModal from "react-ravepayment";
import "./Payment.css";

class Payment extends Component {
  constructor() {
    super();

    this.state = {
      key: 'FLWPUBK-6b5f592d963f5b9054e633eb59576887-X', // RavePay PUBLIC KEY
      email: 'codedcoderrr@gmail.com', // customer email
      amount: 1 // equals NGN 1000. Minimum amount allowed NGN 1 while on production or live system, it's 10
    };
  }

  callback = response => {
  };

  close = () => {
  };

  getReference = () => {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    return (
      <div className="payment-page">
        <p className="App-intro">
          <RavePaymentModal
            text="Make Payment"
            class="payButton"
            metadata={[{ metaname: "Device", metavalue: "IPhone X" }]}
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            ravePubKey={this.state.key}
            callback={this.callback}
            close={this.close}
            isProduction={true}
            tag="button"
          />
        </p>
      </div>
    );
  }
}

export default Payment;
