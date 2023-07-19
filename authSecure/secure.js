function getLogin(username, password) {
    // Limpiar el código JavaScript del nombre de usuario y la contraseña.
    username = cleanJavaScript(username);
    password = cleanJavaScript(password);
  
    // Hacer una consulta a la base de datos para verificar el nombre de usuario y la contraseña.
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    const results = async () => await db.query(query);
  
    // Si la consulta no devuelve ningún resultado, significa que el nombre de usuario o la contraseña son incorrectos.
    if (results.length === 0) {
      return false;
    }
  
    // Si la consulta devuelve un resultado, significa que el nombre de usuario y la contraseña son correctos.
    // Devolver el token de sesión para el usuario.
    return results[0].token;
  }
  
  function cleanJavaScript(str) {
    // Eliminar todas las etiquetas HTML del string.
    str = str.replace(/<[^>]+>/g, '');
  
    // Eliminar todos los caracteres especiales del string.
    str = str.replace(/[&<>"']/g, '');
  
    return str;
  }
  
  function secureRoutes(route, token) {
    // Agregar un middleware a la ruta que valida el token de sesión.
    route.use((req, res, next) => {
      // Obtener el token de sesión de la solicitud.
      const token = req.headers.authorization.split('Bearer ')[1];
  
      // Si el token no está presente o no es válido, devolver un error 401.
      if (!token || !validateToken(token)) {
        res.status(401).send('Unauthorized');
        return;
      }
  
      // Si el token es válido, continuar con la solicitud.
      next();
    });
  }  