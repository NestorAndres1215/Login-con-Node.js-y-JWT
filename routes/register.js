const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('../db');



router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica si el nombre de usuario ya está en uso en la base de datos
    const existingUserQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(existingUserQuery, [username], async (error, results) => {
      if (error) {
        console.error('Error al buscar el usuario existente:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
      }

      if (results.length > 0) {
        return res.status(409).json({ message: 'El nombre de usuario ya está en uso' });
      }

      try {
        // Genera el hash de la contraseña de forma asíncrona
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Crea el nuevo usuario
        const newUser = {
          username,
          password: hashedPassword
        };

        // Inserta el usuario en la base de datos
        const insertUserQuery = 'INSERT INTO users SET ?';
        connection.query(insertUserQuery, newUser, (error) => {
          if (error) {
            console.error('Error al insertar el usuario en la base de datos:', error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }

          res.status(201).json({ message: 'Usuario registrado correctamente' });
        });
      } catch (error) {
        console.error('Error al generar el hash de la contraseña:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
