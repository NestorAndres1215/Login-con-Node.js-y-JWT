# Sistema de autenticación en Node.js utilizando JWT (JSON Web Tokens)

Este proyecto implementa un sistema de autenticación en **Node.js** utilizando **JSON Web Tokens (JWT)** para crear un login seguro y eficiente. Permite a los usuarios iniciar sesión y recibir un token de autenticación que puede ser utilizado para acceder a rutas protegidas.

## Instalación de las dependencias necesarias

Para empezar, debes instalar las dependencias necesarias. Ejecuta los siguientes comandos:

```bash
npm init -y
npm install express jsonwebtoken bcryptjs body-parser
```
### Dependencias:
- **express**: Framework para manejar rutas y crear el servidor.
- **jsonwebtoken**: Para crear y verificar los tokens JWT.
- **bcryptjs**: Para encriptar las contraseñas.
- **body-parser**: Middleware para analizar el cuerpo de las peticiones.

## Cómo ejecutar el proyecto
### Clona el repositorio.

- **Instala las dependencias** usando `npm install`.

- **Inicia el servidor** con `node app.js` o `npm start`.

- **Usa herramientas como Postman** para probar las rutas `/users`, `/login` y `/register`.

### Puerto del Proyecto.
```bash
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

