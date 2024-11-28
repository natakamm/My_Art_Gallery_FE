const checkEmail = (email) => {
  const errors = [];

  if (!email) {
    errors.push("Email field is required.");
    return errors;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  return errors;
};

export default checkEmail;
