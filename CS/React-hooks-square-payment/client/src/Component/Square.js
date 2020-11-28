import React from 'react';
import config from '../Utils/config';

const Square = ({ paymentForm }) => {
    paymentForm = new paymentForm(config);
    paymentForm.build();
    const requestCardNonce = () =>{
        paymentForm.requestCardNonce();
    }

    return (
        <div id="form-container">
          <div id="sq-walletbox">
            <button
                    className="wallet-button"
                    id="sq-apple-pay"></button>
            <button
                    className="wallet-button"
                    id="sq-masterpass"></button>
            <button
                    className="wallet-button"
                    id="sq-google-pay"></button>
            <hr />
          </div>
          <div id="sq-ccbox">
            <p>
              <span>Enter Card Info Below </span>
              <span>
              </span>
            </p>
            <div id="cc-field-wrapper">
              <div id="sq-card-number"></div>
              <input type="hidden" id="card-nonce" name="nonce" />
              <div id="sq-expiration-date"></div>
              <div id="sq-cvv"></div>
            </div>
            <input
              id="name"
              type="text"
              placeholder="Name"
            />
            <div id="sq-postal-code"></div>
          </div>
          <button className="button-credit-card"
                  onClick={requestCardNonce}>Pay</button>
        </div>

    )
}

export default Square;
