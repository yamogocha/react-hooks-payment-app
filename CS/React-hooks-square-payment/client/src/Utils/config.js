
import { methodsSupported, cardNonceResponseReceived, inputEventReceived } from './helper'

const config = {
    // Initialize the paymentForm elements

    // applicationId: process.env.REACT_APP_APLLICATION_ID,
    applicationId: 'sandbox-sq0idb-JDxB0RhjQ0X2SRyJN9VZsw',
    locationId: "LBMEPJSGHG1EN",
    inputClass: 'sq-input',
    autoBuild: false,
    // applePay: {
    //   elementId: 'sq-apple-pay'
    // },
    masterpass: {
      elementId: 'sq-masterpass'
    },
    googlePay: {
      elementId: 'sq-google-pay'
    },
    // Customize the CSS for SqPaymentForm iframe elements
    inputStyles: [{
        fontSize: '16px',
        lineHeight: '24px',
        padding: '16px 0',
        color: 'white',
        placeholderColor: 'white',
        backgroundColor: 'transparent'
    }],
    // Initialize the credit card placeholders
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: 'Card Number'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    // SqPaymentForm callback functions
    callbacks: {
      methodsSupported: (methods) => methodsSupported(methods),
      createPaymentRequest: () => {},
        /*
        * callback function: cardNonceResponseReceived
        * Triggered when: SqPaymentForm completes a card nonce request
        */
        cardNonceResponseReceived: (errors, nonce) => cardNonceResponseReceived(errors, nonce),
        inputEventReceived: (inputEvent) => inputEventReceived(inputEvent)
      }
    }

export default config
