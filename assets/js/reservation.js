const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault(); // untuk pause submissionnya sebelum dicek validasinya

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const roomType = document.getElementById('roomType').value;

  if (name === '') {
    alert('Please provide your name!');
    return;
  }

  if (name.length < 7) {
    alert('Name length must be greater than 7!');
    return;
  }

  if (email === '') {
    alert('Provide your email!');
    return;
  }

  if (checkin === '') {
    alert('Select a check-in date!');
    return;
  }

  if (checkout === '') {
    alert('Select a check-out date!');
    return;
  }

  if (new Date(checkin) > new Date(checkout)) {
    alert('Check-in date cannot be greater than the checkout date!');
    return;
  }

  if (roomType === '') {
    alert('Select a room type!');
    return;
  }

  alert('Your form has been submitted successfully!');
  bookingForm.reset(); // untuk mengosongkan form habis disubmit
});
