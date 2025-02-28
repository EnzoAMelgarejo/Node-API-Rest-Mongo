// Este archivo define el esquema y modelo de datos para las películas en la base de datos MongoDB.
// El esquema 'movieSchema' contiene los campos 'title', 'duration', 'genre', 'category' y 'premierDate' 
// para almacenar la información de cada película. El modelo 'Movies' permite interactuar con la colección 
// de películas en la base de datos utilizando Mongoose.

const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
    {
        title: String,
        duration: String,
        genre: String,
        category: String,
        premierDate: String,
    }
)

module.exports = mongoose.model('Movies', movieSchema)