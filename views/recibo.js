const express = require('express');
const app = express();

// Set the port number
const port = 3000;

// Create a route for the login form
app.post('/login', (req, res) => {
  // Get the username and password from the form
  const username = req.body.username;
  const password = req.body.password;

  // Check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    // The credentials are valid, so log the user in
    res.send('Login successful');
  } else {
    // The credentials are invalid, so return an error message
    res.send('Login failed');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);