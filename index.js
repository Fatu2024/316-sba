// Cache form elements
const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmation');

// Cache register button
const registerButton = document.querySelector('.btn');

// Display error message for invalid input
function displayErrorMessage(inputElement, message) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    const parentElement = inputElement.parentElement;
    parentElement.appendChild(errorElement);


    setTimeout(() => {
        errorElement.remove();
    }, 3000);
}

// Validate first name
function validateFirstName(value) {
    if (value && typeof value === 'string') {
        return value.trim() !== '';
    }
    return false;
}

// Validate last name
// Validate last name
function validateLastName(value) {
    if (value && typeof value === 'string') {
        return value.trim() !== '';
    }
    return false;
}

// Validate email
function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && typeof value === 'string') {
        return emailRegex.test(value);
    }
    return false;
}

// Validate password
function validatePassword(value) {
    if (value && typeof value === 'string') {
        return value.length >= 8;
    }
    return false;
}

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate form inputs
    if (!validateFirstName(firstNameInput.value)) {
        displayErrorMessage(firstNameInput, 'Please enter a valid first name.');
        return;
    }

    if (!validateLastName(lastNameInput.value)) {
        displayErrorMessage(lastNameInput, 'Please enter a valid last name.');
        return;
    }

    if (!validateEmail(emailInput.value)) {
        displayErrorMessage(emailInput, 'Please enter a valid email address.');
        return;
    }

    if (!validatePassword(passwordInput.value)) {
        displayErrorMessage(passwordInput, 'Password must be at least 8 characters long.');
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        displayErrorMessage(confirmPasswordInput, 'Passwords do not match.');
        return;
    }

    if (allInputsValidated()) {
        console.log('Register button clicked.');
        alert('Registration successful!');
        form.submit();
    } else {
        console.log('Register button click - form validation failed.');
    }
});

// Event listener for register button click
registerButton.addEventListener('click', function () {
    console.log('Register button clicked!');
});
function allInputsValidated() {
    return (
        validateFirstName(firstNameInput.value) &&
        validateLastName(lastNameInput.value) &&
        validateEmail(emailInput.value) &&
        validatePassword(passwordInput.value) &&
        passwordInput.value === confirmPasswordInput.value
    );
}

// Register button click event
registerButton.addEventListener('click', function () {
    if (allInputsValidated()) {
        alert('Registration successful!');
        form.submit();
    }
});
