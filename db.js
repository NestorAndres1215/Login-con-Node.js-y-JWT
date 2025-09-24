require("dotenv").config();
const mysql = require("mysql2");

// Crear la conexión usando variables de entorno
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Conectar
connection.connect((error) => {
  if (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
  } else {
    console.log("✅ Conexión exitosa al servidor MySQL");

    // Crear base de datos si no existe
    connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``,
      (error) => {
        if (error) {
          console.error("❌ Error al crear la base de datos:", error);
        } else {
          console.log("✅ Base de datos verificada/creada");

          // Seleccionar la base de datos
          connection.changeUser({ database: process.env.DB_NAME }, (err) => {
            if (err) {
              console.error("❌ Error al usar la base de datos:", err);
            } else {
              console.log(`✅ Usando la base de datos: ${process.env.DB_NAME}`);
            }
          });
        }
      }
    );
  }
});

module.exports = connection;
