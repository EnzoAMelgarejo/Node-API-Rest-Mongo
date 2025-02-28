# CRUD de Películas - Node.js + MongoDB

Este proyecto es un servidor simple en Node.js que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar información sobre películas. Utiliza MongoDB como base de datos y Express para manejar las rutas y peticiones HTTP.

## Tecnologías utilizadas

- **Node.js**: Plataforma de ejecución de JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de rutas y manejo de peticiones HTTP.
- **MongoDB**: Base de datos NoSQL donde se almacenan los datos de las películas.
- **Mongoose**: Biblioteca de modelado de datos de MongoDB para Node.js.
- **dotenv**: Manejo de variables de entorno, como la URL de la base de datos y el puerto del servidor.
- **body-parser**: Middleware para parsear el cuerpo de las solicitudes HTTP.
- **Postman**: Herramienta utilizada para probar y hacer solicitudes HTTP a la API de manera fácil y eficiente.
- **Docker**: Contenerización del proyecto para una fácil configuración y despliegue, asegurando que el entorno de desarrollo sea consistente.

## Funcionalidades

El servidor permite las siguientes operaciones sobre las películas:

- **Obtener todas las películas**: Devuelve todas las películas almacenadas en la base de datos.
- **Obtener una película por ID**: Devuelve la información de una película específica.
- **Crear una nueva película**: Permite agregar una nueva película con los campos `title`, `duration`, `genre`, `category`, `premierDate`.
- **Actualizar una película por ID**: Permite modificar los campos de una película existente.
- **Actualizar parcialmente una película por ID**: Permite modificar parcialmente los campos de una película existente (solo los campos enviados).
- **Eliminar una película por ID**: Elimina una película de la base de datos.


## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/EnzoAMelgarejo/Node-API-Rest-Mongo

2. Navega a la carpeta del proyecto:
    ```bash
    cd crud-peliculas

3. Instalar las dependencias necesarias:
    ```bash
    npm install

4. Crea un archivo .env con las siguientes variables:
    
    MONGO_URL=tu_url_de_mongodb
    MONGO_DB_NAME=nombre_de_tu_base_de_datos
    PORT=3000

5. Inicia el servidor:
    ```bash
    npm start

## Rutas de la API
    GET /movies
    Obtiene todas las peliculas

[
  {
    "title": "Inception",
    "duration": "148 min",
    "genre": "Sci-Fi",
    "category": "Action",
    "premierDate": "2010-07-16"
  },
  ...
]

    Get /movies/:id
    Obtiene una pelicula por ID

{
  "title": "Inception",
  "duration": "148 min",
  "genre": "Sci-Fi",
  "category": "Action",
  "premierDate": "2010-07-16"
}

    POST /movies
    Crea una nueva pelicula

**Cuerpo de la solicutud**
{
  "title": "Inception",
  "duration": "148 min",
  "genre": "Sci-Fi",
  "category": "Action",
  "premierDate": "2010-07-16"
}
**Respuesta**
{
  "_id": "60e9f8e89fbd2b1b89c45d2c",
  "title": "Inception",
  "duration": "148 min",
  "genre": "Sci-Fi",
  "category": "Action",
  "premierDate": "2010-07-16"
}

    PUT /movies/:id
    Actualiza la informacion de una pelicula por su ID

**Cuerpo de la solicitud**
{
  "title": "Inception",
  "duration": "150 min",
  "genre": "Sci-Fi",
  "category": "Action",
  "premierDate": "2010-07-16"
}
**Respuesta**
{
  "_id": "60e9f8e89fbd2b1b89c45d2c",
  "title": "Inception",
  "duration": "150 min",
  "genre": "Sci-Fi",
  "category": "Action",
  "premierDate": "2010-07-16"
}

    PATCH /movies
    Actualiza parcialmente una pelicula por su ID

**Cuerpo de la solicitud**
{
  "duration": "150 min"
}
**Respuesta**
{
  "_id": "60e9f8e89fbd2b1b89c45d2c",
  "title": "Inception",
  "duration": "150 min",
  "genre": "Sci-Fi",
  "category": "Action",
  "premierDate": "2010-07-16"
}

    DELETE /movies/:id
    Elimina una pelicula por su ID

**Respuesta**
{
  "message": "La película Inception ha sido eliminada con éxito"
}

