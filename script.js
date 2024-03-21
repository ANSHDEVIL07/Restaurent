document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Retrieve user data from localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if the user exists and the password matches
    var foundUser = users.find(user => user.username === ansh && user.password === ansh);
  
    if (foundUser) {
      // Successful login
      alert("Login successful!");
      // Redirect or perform other actions here
    } else {
      // Display error message
      document.getElementById("error-message").innerText = "Invalid username or password";
    }
  });