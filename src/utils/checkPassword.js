const checkPassword = (password) => {
  let errors = [];

  if (!password) {
    errors.push("Password field is required.");
    return errors;
  }

  // Check for minimum length of 8 characters
  if (password.length < 8) {
    errors.push("Password needs at least 8 characters.");
  }

  // Check for at least two uppercase letters
  if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    errors.push("Password needs at least two uppercase letters.");
  }

  // Check for at least one special character
  if (!/(?=.*[!@#$&*])/.test(password)) {
    errors.push("Password needs at least one special character (!@#$&*).");
  }

  // Check for at least two digits
  if (!/(?=.*[0-9].*[0-9])/.test(password)) {
    errors.push("Password needs at least two digits.");
  }

  // Check for at least three lowercase letters
  if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
    errors.push("Password needs at least three lowercase letters.");
  }

  return errors;
};

export default checkPassword;
