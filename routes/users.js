
const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
  const getUsersQuery = 'SELECT * FROM users';
  connection.query(getUsersQuery, (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
