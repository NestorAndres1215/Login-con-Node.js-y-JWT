const express = require('express');
const app = express();
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
// Configurar el middleware body-parser
// Analizar las solicitudes con datos JSON
app.use(express.json());

// Analizar las solicitudes con datos codificados en URL
app.use(express.urlencoded({ extended: false }));


const usersRouter = require('./routes/users'); // Ruta al archivo de rutas de usuarios
app.use('/users', usersRouter); // Usar la ruta de usuarios en la URL '/users'
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});