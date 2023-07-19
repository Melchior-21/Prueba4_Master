const request = new Request('/login', {
    method: 'POST',
    body: JSON.stringify({
      username: 'username',
      password: 'password',
    }),
  });
  
  request.send().then(response => {
    if (response.ok) {
      // The login was successful, the token is in the response body.
      const token = response.body.token;
    } else {
      // The login was not successful, the error message is in the response body.
      const error = response.body.error;
    }
  });
  
  module.exports = router;