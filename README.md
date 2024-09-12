# Sistema de autenticación en Node.js utilizando JWT (JSON Web Tokens)
Para implementar un sistema de autenticación en Node.js utilizando JWT (JSON Web Tokens), 
te mostraré una estructura básica y los pasos que debes seguir para crear un login funcional.
1. Instalación de las dependencias necesarias
Primero, necesitas instalar las dependencias en tu proyecto.
npm init -y
npm install express jsonwebtoken bcryptjs body-parser

express: Framework para manejar rutas y crear el servidor.
jsonwebtoken: Para crear y verificar los tokens JWT.
bcryptjs: Para encriptar las contraseñas.
body-parser: Middleware para analizar el cuerpo de las peticiones.


