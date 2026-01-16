import {
  EMAIL_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
} from "../constants/formConstants";

// Fields level validations
// .test() will return true if it's valid otherwise false
export const validateEmail = (email) => {
  if (email.length === 0) return "Email is required";
  if (!EMAIL_REGEX.test(email)) return "Email is not valid";
  return null;
};

export const validateName = (name) => {
  if (name.length === 0) return "Name is required";
  if (!NAME_REGEX.test(name)) return "Name is not valid";
  return null;
};

export const validatePassword = (password) => {
  if (password.length === 0) return "Password is required";
  if (!PASSWORD_REGEX.test(password)) return "Password is not valid";
  return null;
};

// Form level validations
export const validateLoginForm = (email, password) => {
  return validateEmail(email) || validatePassword(password) || null;
};

export const validateSignUpForm = (name, email, password) => {
  return (
    validateName(name) ||
    validateEmail(email) ||
    validatePassword(password) ||
    null
  );
};
