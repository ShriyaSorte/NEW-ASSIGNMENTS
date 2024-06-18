const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); 
  }
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
