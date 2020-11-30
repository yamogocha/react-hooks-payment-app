import React from 'react';
import config from '../utils/config';

const Square = ({ paymentForm }) => {
    paymentForm = new paymentForm(config);
    paymentForm.build();
    const requestCardNonce = () =>{
        paymentForm.requestCardNonce();
    }

    return (
      <div className="payment-page">
        <div className="overlay fadeIn">
          <div id="form-container">
            <div id="sq-walletbox" className="fadeIn">
              <button className="wallet-button" id="sq-masterpass"></button>
              <button className="wallet-button" id="sq-google-pay"></button>
              <div className="seperator"><hr/><span>OR</span><hr/></div>
            </div>
            <div id="sq-ccbox" className="flip">
              <div>
                <span id="card-brand">Enter card info below</span>
              </div>
              <div id="cc-field-wrapper">
                  <div id="sq-card-number"></div>
                  <input type="hidden" id="card-nonce" name="nonce" />
                  <div id="sq-expiration-date"></div>
                  <div id="sq-cvv"></div>
                  <input className="name" type="text" placeholder="Name"/>
                  <div id="sq-postal-code"></div>
              </div>
            </div>
            <button className="button-credit-card" onClick={requestCardNonce}>Place Order</button>
          </div>
        </div>
      </div>
    )
}

export default Square;
