# README - Proyecto de Login

Este proyecto es una aplicación de login desarrollada con tecnologías MERN (MongoDB, Express, React, Node.js). La aplicación permite a los usuarios registrarse, iniciar sesión, y cerrar sesión, registrando la hora de inicio de sesión en la base de datos.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

* Node.js:  [Descargar e instalar Node.js](https://nodejs.org/es)

## Configuraciones para la base de datos en MongoDB Cloud

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

	Haz clic en "Connect" en la página del clúster. Luego, en la sección "Connect to your application", selecciona "Drivers". Aquí encontrarás la cadena de conexión para conectar tu backend en Node.js con Mongoose. Copia esa cadena y agrégala al archivo ".env" de tu proyecto, será algo como:
`MONGO_URL='mongodb+srv://<nombreusuario>:<password>@mycluster.bsniy72.mongodb.net/?retryWrites=true&w=majority'`


7. Ver la base de datos

	Una vez que hayas establecido la conexión, puedes acceder a la vista de monitoreo del clúster. Dirígete a "View Monitoring" y luego selecciona "Collections". Aquí deberías poder ver los registros de los usuarios que se loguean en tu aplicación.


## Pasos para ejecutar el proyecto

1. Clonar el repositorio

	```git clone https://github.com/GeronimoTilleria/Pasantia-Login.git```

2. Instalar dependencias

	En la raíz de las carpetas client y server, ejecuta los siguientes comandos para instalar las dependencias tanto en el backend como en el frontend desde dos terminales diferentes:
	* Terminal client:
		
		```cd client```

		```npm install```
	
	* Terminal server:
		
		```cd server```

		```npm install```

3. Instala nodemon globalmente (si aún no lo tienes instalado):

	```npm install -g nodemon```


4. Configurar variables de entorno

	En el directorio backend, renombra el archivo .env copy a .env para que las variables de entorno se carguen correctamente.

	Luego, abre el archivo .env y asegúrate de que contenga tu cadena de conexión:
	
	```MONGO_URL='mongodb+srv://<nombreusuario>:<password>@mycluster.bsniy72.mongodb.net/?retryWrites=true&w=majority' ```
	


5. Iniciar el servidor backend

	En el directorio backend, ejecuta el siguiente comando para iniciar el servidor:

	```nodemon server.js```


6. Iniciar la aplicación frontend

	En el directorio frontend, ejecuta el siguiente comando para iniciar la aplicación frontend:

	```npm start```


## Guía de uso

1. Registro e inicio de sesión

	Regístrate con una nueva cuenta y luego inicia sesión:


## Creditos

Este proyecto fue creado por Geronimo Tilleria ([GitHub](https://github.com/GeronimoTilleria)).