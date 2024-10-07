const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.model.js');

// MIDDLEWARE

const getMovie = async (req, res, next) => {
    let movie;
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ message: 'El id no es valido' });
    }

    try {
        movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'La película no fue encontrada' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }

    res.movie = movie;
    next();
};

// Obtener todas las películas
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        console.log('GET ALL', movies);

        if (movies.length === 0) {
            return res.status(204).json([]);
        }

        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear una nueva película (recurso)
router.post('/', async (req, res) => {
    const { title, duration, genre, category, premierDate } = req.body;

    if (!title || !duration || !genre || !category || !premierDate) {
        return res.status(400).json({ message: 'Los campos a completar son obligatorios' });
    }

    const movie = new Movie({
        title,
        duration,
        genre,
        category,
        premierDate
    });

    try {
        const newMovie = await movie.save();
        console.log('Nueva película creada:', newMovie);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', getMovie, async(req, res) => {
    res.json(res.movie)
})

router.put('/:id', getMovie, async (req, res) => {
    try{
        const movie = res.movie
        movie.title = req.body.title || movie.title
        movie.duration = req.body.duration || movie.duration
        movie.genre = req.body.genre || movie.genre
        movie.category = req.body.category || movie.category
        movie.premierDate = req.body.premierDate || movie.premierDate

        const updatedMovie = await movie.save()
        res.json(updatedMovie)
    
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

router.patch('/:id', getMovie, async (req, res) => {

    if(!req.body.title && !req.body.duration && !req.body.genre && !req.body.category && !req.body.premierDate) {
        res.status(400).json({message:"Al menos uno de estos campos debe de ser enviado: title, duration, genre, category, premierDate"})
    }

    try{
        const movie = res.movie
        movie.title = req.body.title || movie.title
        movie.duration = req.body.duration || movie.duration
        movie.genre = req.body.genre || movie.genre
        movie.category = req.body.category || movie.category
        movie.premierDate = req.body.premierDate || movie.premierDate

        const updatedMovie = await movie.save()
        res.json(updatedMovie)
    
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

router.delete('/:id', getMovie, async (req, res) => {
    try{
        const movie = res.movie
        await movie.deleteOne({_id: movie._id})
        res.json({message: `La pelicula ${movie.title} ha sido eliminada con exito`})
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router