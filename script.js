function submitForm() {
    const phoneNumber = document.getElementById('phone-number').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber)) {
        errorMessage.style.display = 'none';
        // Perform the login action
        login(phoneNumber);
    } else {
        errorMessage.style.display = 'block';
    }
}

function login(phoneNumber) {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            // Redirect or perform other actions on success
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
