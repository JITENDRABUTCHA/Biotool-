document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Simulating login with hardcoded credentials
  if (username === "jitendra" && password === "1234") {
    window.location.href = "/dashboard"; // Redirect to dashboard
  } else {
    document.getElementById("error-message").innerText = "Invalid username or password";
  }
});
