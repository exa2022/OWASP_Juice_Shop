function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Clear previous message
  errorMsg.textContent = "";

  // Check for empty fields
  if (!email || !password) {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  // Check email contains "@"
  if (!email.includes("@")) {
    errorMsg.textContent = "Invalid email format.";
    return;
  }

  // Check password length
  if (password.length < 8) {
    errorMsg.textContent = "Password must be at least 8 characters.";
    return;
  }

  // If all checks pass
  alert("Login successful (client-side validation passed)");
}