// Generate a random UUID as an idempotency key for the payment request
// length of idempotency_key should be less than 45
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

export default uuidv4
