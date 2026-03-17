function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // We clear the previous message
  errorMsg.innerHTML = "";

  // Check for empty fields
  if (!email || !password) {
    errorMsg.innerHTML = "All fields are required.";
    return;
  }

  // We check email contains "@"
  if (!email.includes("@")) {
    // Vulnerable: reflecting user input using innerHTML
    errorMsg.innerHTML = "Invalid email: " + email;
    return;
  }

  // Then, check the password length
  if (password.length < 8) {
    errorMsg.innerHTML = "Password must be at least 8 characters.";
    return;
  }

  // Finally, another vulnerability since we reflect user input without sanitization
  errorMsg.innerHTML = "Welcome " + email;
}