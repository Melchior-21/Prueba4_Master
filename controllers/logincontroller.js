// Create a new controller class.
// var LoginController = function() {

    // Define a function to handle the login request.
    const login = function(req, res) {
      // Get the username and password from the request body.
      var username = req.body.username;
      var password = req.body.password;
  
      // Check if the username and password are valid.
      if (username === "admin" && password === "password") {
        // The login is successful.
        res.status(200).send({
          success: true,
          message: "Login successful."
        });
      } else {
        // The login is unsuccessful.
        res.status(401).send({
          success: false,
          message: "Invalid username or password."
        });
      }
    };
    const showLogin  = (req,res) =>{
        res.render('login')
    }
//   };
  
  // Export the controller.
  module.exports = {login,showLogin};
  