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

module.exports = mongoose.model('movies', movieSchema)