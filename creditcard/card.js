function isCardNumberValid(number) {
  // Simulated valid card number
  return number === '1234123412341234';
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg.replace(/\n/g, '<br>');
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';

  const cardNumber = this["card-number"].value.replace(/\s+/g, ''); // Strip spaces
  const month = this["exp-month"].value;
  const year = this["exp-year"].value;

  // Clear any previous errors
  displayError('');

  // Validate card number
  if (isNaN(cardNumber)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  // Validate expiration date is in the future
  const currentDate = new Date();
  const inputDate = new Date(`20${year}`, parseInt(month) - 1); // Month is 0-based

  if (isNaN(inputDate) || inputDate < currentDate) {
    errorMsg += 'Expiration date must be in the future\n';
  }

  // Show error and prevent submission
  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  // All good — you could submit the form programmatically here if needed
  alert('Form submitted successfully (simulated)');
  return true;
}

// Attach handler to form
document.querySelector('#card-form').addEventListener('submit', submitHandler);
