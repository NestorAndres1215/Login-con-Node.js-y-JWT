const mysql = require('mysql2');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'login' // Cambia 'login' por el nombre de tu base de datos
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');

    // Crea la base de datos si no existe
    connection.query('CREATE DATABASE IF NOT EXISTS login', (error) => {
      if (error) {
        console.error('Error al crear la base de datos:', error);
      } else {
        console.log('Base de datos creada exitosamente');

        // Usa la base de datos recién creada
        connection.query('USE login', (error) => {
          if (error) {
            console.error('Error al usar la base de datos:', error);
          } else {
            console.log('Usando la base de datos');

            // Aquí puedes realizar otras operaciones con la base de datos
          }
        });
      }
    });
  }
});

module.exports = connection;

