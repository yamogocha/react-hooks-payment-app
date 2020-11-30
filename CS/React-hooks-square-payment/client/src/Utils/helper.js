// Generate a random UUID as an idempotency key for the payment request
// length of idempotency_key should be less than 45
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

export const methodsSupported = methods => {}

const idempotency_key = uuidv4()
export const cardNonceResponseReceived = (errors, nonce) => {
  if (errors) {
    // Log errors from nonce generation to the browser developer console.
    errors.forEach((err) => {
      console.error('error: ' + err.message);
    });
    alert('Encountered errors, check browser developer console for more details');
  }
  alert(`The generated nonce is:\n${nonce}`);

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
          err => Promise.reject(err));
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

export const inputEventReceived = inputEvent => {
  const cardbrand = document.getElementById("card-brand")

  switch (inputEvent.eventType) {
    case "errorClassAdded":
      cardbrand.innerHTML = "Please fill required card information";
      cardbrand.style.color = "red";
      break;
    case "errorClassRemoved":
      cardbrand.innerHTML = "Enter card info below";
      break;
    case "cardBrandChanged":
      if (inputEvent.cardBrand !== "unknown") {
        cardbrand.innerHTML = inputEvent.cardBrand
        cardbrand.style.textTransform = "uppercase"
        cardbrand.style.color = "white";
      } else {
        cardbrand.innerHTML = "Enter card info below"
        cardbrand.style.textTransform = "inherit"
      }
      break;
    default:
      break;
  }
}
