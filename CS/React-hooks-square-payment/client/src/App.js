import React, { useState, useEffect } from 'react';
import './css/App.scss';
import Square from './component/Square';

const App = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    let sqPaymentScript = document.createElement("script");
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      setLoaded(true);
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  });

  const squarePayment = isLoaded ? (
        <Square paymentForm={ window.SqPaymentForm }/>
    ) : (
       null
    )

  return (
    <div className="App">
       {squarePayment}
    </div>
  );
}

export default App;
