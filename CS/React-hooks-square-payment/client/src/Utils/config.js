
import { methodsSupported, cardNonceResponseReceived, inputEventReceived } from './helper'

const config = {
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
    inputStyles: [{
        fontSize: '16px',
        lineHeight: '24px',
        padding: '16px 0',
        color: 'white',
        placeholderColor: 'white',
        backgroundColor: 'transparent'
    }],
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
    callbacks: {
      methodsSupported: (methods) => methodsSupported(methods),
      createPaymentRequest: () => {},
        cardNonceResponseReceived: (errors, nonce) => cardNonceResponseReceived(errors, nonce),
        inputEventReceived: (inputEvent) => inputEventReceived(inputEvent)
      }
    }

export default config
