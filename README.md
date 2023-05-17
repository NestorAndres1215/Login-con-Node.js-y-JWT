# Login_MYSQL_JWT_NODE.JS
Este servidor api  en  Node.js se enfoca en implementar un sistema de inicio de sesión con autenticación basada en JSON Web Tokens (JWT).

 
# Ejecutar Servidor


Una vez que todo funcione correctamente, podrías esperar ver los siguientes mensajes:

"Conexión exitosa a la base de datos": Este mensaje indica que la conexión con la base de datos MySQL se estableció correctamente.

"Servidor Express funcionando en el puerto 3000": Este mensaje muestra que tu servidor Express está en funcionamiento y escuchando las solicitudes en el puerto 3000.

 
# Registrarse
Cuando consumas el servicio de inicio de sesión en tu aplicación o herramienta de elección, necesitarás utilizar la siguiente URL para realizar las solicitudes:

http://localhost:3000/register

Esta URL corresponde al endpoint de inicio de sesión en tu servidor Express, que escucha en el puerto 3000 localmente. Puedes enviar solicitudes POST a esta URL para enviar las credenciales de inicio de sesión y autenticarte.

![image](https://github.com/Drest12/Login_MYSQL_JWT_NODE.JS/assets/107701223/93541858-d75f-46d2-b2a9-a260d9ebbc44)

 
# Logear
Cuando se realiza la solicitud de inicio de sesión al endpoint /login, es común utilizar el método HTTP POST para enviar las credenciales de inicio de sesión en el cuerpo de la solicitud. Aquí hay un ejemplo de cómo podría verse el proceso de inicio de sesión y la respuesta correspondiente:
http://localhost:3000/login
![image](https://github.com/Drest12/Login_MYSQL_JWT_NODE.JS/assets/107701223/12be7b9c-dea9-4328-9675-2e6229abd587)


