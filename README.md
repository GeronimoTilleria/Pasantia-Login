# Login con MERN - Pasantía

Este proyecto es una aplicación de login desarrollada con tecnologías MERN (MongoDB, Express, React, Node.js). La aplicación permite a los usuarios registrarse, iniciar sesión, y cerrar sesión, registrando la hora de inicio de sesión en la base de datos.

Ejecute este proyecto en un Sistema Operativo Windows.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

* Node.js:  [Descargar e instalar Node.js](https://nodejs.org/es)

## Procedimientos para iniciar

1. Clonar el repositorio

	```git clone https://github.com/GeronimoTilleria/Pasantia-Login.git```

2. Instalar dependencias

	Estando dentro del proyecto abre dos terminales, ejecuta los siguientes comandos para instalar las dependencias tanto en el backend como en el frontend:
	* Terminal client:
		
		```cd client```

		```npm install```
	
	* Terminal server:
		
		```cd server```

		```npm install```

3. Instala nodemon globalmente (si aún no lo tienes instalado):

	```npm install -g nodemon```

	En la terminal de server.

4. Configurar variables de entorno

	Tanto en el directorio client y el directorio server se encuentra un archivo llamado ".env copy" (variables de entorno), renombra ese archivo a ".env" en ambos directorios para que las variables de entorno se carguen correctamente.


## Configuraciones para la base de datos en MongoDB Cloud 

(Existen opciones para instalar MongoDB en tu ordenador; sin embargo, para evitar consumir recursos de disco, optamos por gestionar la base de datos a través de MongoDB Cloud en línea.)

A continuación, se presenta una guía para configurar MongoDB Cloud y conectarlo a tu proyecto. Sigue estos pasos para configurar la base de datos en la nube:

1. Ir a MongoDB Cloud

	Accede al sitio web de MongoDB Cloud en el siguiente enlace:
[https://www.mongodb.com/products/platform/cloud](https://www.mongodb.com/products/platform/cloud)


2. Iniciar sesión

	Si aún no tienes una cuenta, puedes registrarte con tu cuenta de Google o GitHub. Si ya tienes una cuenta, inicia sesión con tus credenciales.


3. Crear un proyecto

	Una vez hayas iniciado sesión, dirígete a la barra lateral izquierda y selecciona "Projects". Luego, haz clic en "New Project". Asigna un nombre descriptivo para tu proyecto, por ejemplo, "Pasantia-Login", y haz clic en "Create Project".


4. Crear un Cluster

	Después de haber creado el proyecto, selecciona "Build a Database" para crear un nuevo clúster. Escoge el servicio gratuito (MO) para aprender a explorar MongoDB en un entorno en la nube. Elige una región que sea cercana a tu ubicación, como "Sao Paulo". Asigna un nombre a tu clúster, por ejemplo, "MyCluster", y luego haz clic en "Crear" o "Create".


5. Configurar la conexión

	Una vez se haya creado el clúster, se te pedirá que configuremos la autenticación de la conexión. Debes crear un nombre de usuario y contraseña para esta conexión (asegúrate de guardar la contraseña en un archivo de texto por ahora). Haz clic en "Crear Usuario", luego en "Terminar y Cerrar", y finalmente, en "Ir a la Base de Datos".


6. Conectar el Cluster

	Haz clic en "Connect" en la página del clúster. Luego, en la sección "Connect to your application", selecciona "Drivers". Aquí encontrarás la cadena de conexión para conectar tu backend (server) con la base de datos. Copia esa cadena y agrégala al archivo ".env" (en la carpeta server) de tu proyecto. La cadena de conexion debe ir antecedido por el nombre de la variable "MONGO_URL" seguido de "=" (la cadena de conexion debe ir entre de comillas) quedando como algo así:
	
	`MONGO_URL='mongodb+srv://<nombreusuario>:<password>@mycluster.bsniy72.mongodb.net/?retryWrites=true&w=majority'`

	No olvide reemplazar "&lt;password&gt;" por la contraseña que habia guardado en un archivo de texto.


7. Ver la base de datos

	Una vez que hayas establecido la conexión, puedes acceder a la vista de monitoreo del clúster. Dirígete a "View Monitoring" y luego selecciona "Collections". Aquí deberías poder ver los registros de los usuarios que se loguean en tu aplicación.



## Pasos para ejecutar el proyecto

1. Iniciar el servidor

	En la terminal del directorio server, ejecuta el siguiente comando para iniciar el servidor:

	```nodemon server.js```


2. Iniciar la aplicación frontend (client)

	En la terminal del directorio client, ejecuta el siguiente comando para iniciar la aplicación frontend:

	```npm start```


## Guía de uso

1. Registro e inicio de sesión

	Regístrate con una nueva cuenta y luego inicia sesión. Observe en su base de datos que queda registrado el usuario y el momento en que inicia sesión.

