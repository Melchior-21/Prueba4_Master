const express = require('express');
const router = express.Router();
const login = require('../controllers/logincontroller')

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Get the login information from the database.
  const user = await getLogin(username, password);

  if (user) {
    // The login was successful, create a token and return it to the user.
    const token = generateToken(user.id);
    res.json({ token });
  } else {
    // The login was not successful, return an error message to the user.
    res.json({ error: 'Invalid username or password.' });
  }
});
router.get('/showlogin',login.showlogin)

module.exports = router;
