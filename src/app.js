const express = require('express')
const {config} = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

config()

const moviesRoutes = require('./routes/movies.routes')

//Usamos express para los MIDLEWAREs 
const app = express()
app.use(bodyparser.json()) //esto es un parseador de body

//Aca se contecta la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/movies', moviesRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`escuchando desde el puerto ${port}`)
})