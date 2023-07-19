document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
  
    // Make a request to the login API
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: $("#username").val(),
        password: $("#password").val()
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // The login was successful, redirect the user to the home page
        window.location.href = "/";
      } else {
        // The login was not successful, show an error message
        alert("Invalid username or password.");
      }
    });
  });
  