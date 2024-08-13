document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('message');

    if (!emailInput.validity.valid) {
        emailInput.classList.add('error');
        messageDiv.textContent = 'Valid email required';
        messageDiv.className = 'message error-message';
        messageDiv.style.display = 'block';
        document.querySelector('button').classList.add('error');
    } else {
        emailInput.classList.remove('error');
        messageDiv.textContent = `¡Gracias por suscribirte con ${emailInput.value}!`;
        messageDiv.className = 'message success';
        messageDiv.style.display = 'block';
        document.querySelector('button').classList.remove('error');
    }
});
