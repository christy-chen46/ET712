let form = document.querySelector("#myform");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let success = document.querySelector("#success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  success.textContent = "";

  let valid = true;

  // Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  }

  // Password
  let special = /[#\$%]/;

  if (password.value.length < 5) {
    passwordError.textContent = "At least 5 characters required";
    valid = false;
  } else if (!special.test(password.value)) {
    passwordError.textContent = "Must include #, $ or %";
    valid = false;
  }

  // Success
  if (valid) {
    success.textContent = "Form submitted successfully!";
    form.reset();
  }
});