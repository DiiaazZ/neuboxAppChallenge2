## NEUBOX CHALLENGE APP

Este proyecto fue creado para el reto de neubox challenge 2, el mismo ha sido desarrollado en el lenguaje de PHP y JS, utilizando las tecnologías, framework Laravel 9 + Vue.js 3 + Bootstrap 5.

### Documentación usada.

- **[PHP](https://www.php.net/docs.php)**
- **[Larabel 9](https://laravel.com/docs/9.x)**
- **[Vue.js 3](https://vuejs.org/guide/essentials/application.html)**
- **[Vue Router 4](https://router.vuejs.org/guide/)**
- **[Bootstrap 5](https://getbootstrap.com/docs/5.2/getting-started/introduction/)**
- **[Fontawesome](https://fontawesome.com/)**

## Antes de usar

Antes de ejecutar este proyecto, son necesarios algunos requisitos previos.

1.- Este proyecto consume datos de una API proporcionada para el reto, es necesario seguir las instrucciones e instalar la API del siguiente repositorio https://github.com/fakereto/emprend-api ; Una vez finalizada la instalación, continua la configuración de este repositorio.

2.- Es necesario tener instalado Composer (package manager de PHP)(https://getcomposer.org/).

3.- Es necesario tener instalado Node.js (package manager de JS)(https://nodejs.org/es/).

4.- Es necesario tener instalado Docker (software para el manejo de contenedores)(https://www.docker.com/get-started/).

Nota: La API proporcionada para el reto está pensada para sistemas MAC o Linux, si tu sistema es Windows y tienes errores en la instalación, sigue las instrucciones de la sección de "API con Windows". 

## API con Windows

### Para poder ejecutar la API proporcionada para el reto, sin errores, es necesario configurar el archivo "docker-compose.yml".

1.- Deberás configurar los puertos para cada servicio, permitiendo el acceso desde fuera de los contenedores.

2.- Ejecuta nuevamente el comando.

    docker-compose up -d

### Error - docker no ejecuta el servicio para la API en el puerto especificado (8000).

1.- Para poder utilizar la API deberás ejecutar el contenido de la carpeta "src".

2.- Configura el archivo ".env" en el valor DB_HOST, cambiar el valor actual por la IP especificada anteriormente para el servicio de MySQL.

3.- Instalar dependencias

    composer install

4.- Instalar dependencias 2

    npm install

5.- Ejecuta el servidor con el comando.

    php artisan serve

## Instalación Previo de la APP.

Antes de ejecutar la APP deberás descargar las dependencias.

1.- Comando 1

    composer install

2.- Comando 2

    npm install

## Configura el archivo ".env".

Para configurar tu archivo ".env" puedes utilizar el archivo ".env.example" como base. Debes configurar los siguientes valores:

- **[DB_CONNECTION][Tipo de conexion a la base de datos]**
- **[DB_HOST][Dirección de tu API]**
- **[DB_PORT][Puerto de la base de datos]**
- **[DB_DATABASE][Nombre de la base de datos]**
- **[DB_USERNAME][Usuario]**
- **[DB_PASSWORD][Contraseña]**

Una vez instaladas las dependencias puedes ejecutar la aplicación correctamente.

    php artisan serve

### Por favor, si encuentras vulnerabilidades, fallos o posibles mejoras en el código, favor de informarme mandando un new issues.