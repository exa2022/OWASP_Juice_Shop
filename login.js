function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Clear previous message
  errorMsg.innerHTML = ""; // changed from textContent

  // Check for empty fields
  if (!email || !password) {
    errorMsg.innerHTML = "All fields are required.";
    return;
  }

  // Check email contains "@"
  if (!email.includes("@")) {
    // 🔴 Vulnerable: reflecting user input using innerHTML
    errorMsg.innerHTML = "Invalid email: " + email;
    return;
  }

  // Check password length
  if (password.length < 8) {
    errorMsg.innerHTML = "Password must be at least 8 characters.";
    return;
  }

  // 🔴 Another vulnerable reflection
  errorMsg.innerHTML = "Welcome " + email;
}