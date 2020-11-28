
import uuidv4 from './helper'

const idempotency_key = uuidv4()
const config = {
    // Initialize the payment form elements

    //TODO: Replace with your sandbox application ID
    // applicationId: process.env.REACT_APP_APLLICATION_ID,
    applicationId: 'sandbox-sq0idb-JDxB0RhjQ0X2SRyJN9VZsw',
    locationId: "LBMEPJSGHG1EN",
    inputClass: 'sq-input',
    autoBuild: false,
    applePay: {
      elementId: 'sq-apple-pay'
    },
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
        padding: '16px',
        placeholderColor: '#a0a0a0',
        backgroundColor: 'transparent',
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
      methodsSupported: (methods) => {
        if(methods.applePay) {
          const applePayBtn = document.getElementById('sq-apple-pay');
          applePayBtn.style.display = 'inline-block'
        }
        if(methods.masterpass){
          const masterpassBtn = document.getElementById('sq-masterpass');
          masterpassBtn.style.display = 'inline-block'
        }
        if(methods.googlePay){
          const googlePayBtn = document.getElementById('sq-google-pay');
          googlePayBtn.style.display = 'inline-block'
        }
        return;
      },
      createPaymentRequest: () => {
        return {
          requestShippingAddress: false,
          requestBillingInfo: true,
          currencyCode: "USD",
          countryCode: "US",
          total: {
            label: "MERCHANT NAME",
            amount: "100",
            pending: false
          },
          lineItems: [
            {
              label: "Subtotal",
              amount: "100",
              pending: false
            }
          ]
        };
      },
        /*
        * callback function: cardNonceResponseReceived
        * Triggered when: SqPaymentForm completes a card nonce request
        */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
        if (errors) {
            // Log errors from nonce generation to the browser developer console.
            console.error('Encountered errors:');
            errors.forEach(function (error) {
                console.error('  ' + error.message);
            });
            alert('Encountered errors, check browser developer console for more details');
            return;
        }
         //alert(`The generated nonce is:\n${nonce}`);
         fetch('/process-payment', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               nonce: nonce,
               idempotency_key: idempotency_key
             })
           })
           .then(response => {
             if (!response.ok) {
               return response.json().then(
                 errorInfo => Promise.reject(errorInfo));
             }
             return response.json();
           })
           .then(data => {
             console.log(data);
             alert('Payment complete successfully!\nCheck browser developer console for more details');
           })
           .catch(err => {
             console.error(err);
             alert('Payment failed to complete!\nCheck browser developer console for more details');
           });
        }
      }
    }

export default config
