const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailError = document.getElementById('emailError');
const passwordMatchError = document.getElementById('passwordMatchError');
const passwordStrengthMeter = document.getElementById('passwordStrength');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  // Password strength criteria: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (strongRegex.test(password)) {
    return 'strong';
  } else if (mediumRegex.test(password)) {
    return 'medium';
  } else {
    return 'weak';
  }
}

function validateForm() {
  let valid = true;

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email address';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordMatchError.textContent = 'Passwords do not match';
    valid = false;
  } else {
    passwordMatchError.textContent = '';
  }

  return valid;
}

passwordInput.addEventListener('input', function() {
  const strength = validatePassword(passwordInput.value);
  passwordStrengthMeter.value = strength === 'weak' ? 1 : strength === 'medium' ? 2 : 3;
});

confirmPasswordInput.addEventListener('input', function() {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordMatchError.textContent = '';
  } else {
    passwordMatchError.textContent = 'Passwords do not match';
  }
});
