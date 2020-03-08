const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/:movieId', (req, res) => {
   console.log('movie id in details router:', req.params);
   //sequel query that returns necessary info for the movie id that was sent over
   let queryText = `SELECT movies.title, movies.poster, movies.description, genres.name FROM movies JOIN genre_reference_table ON genre_reference_table.movie_id = ${req.params.movieId} JOIN genres ON genre_reference_table.genre_id = genres.id WHERE movies.id = ${req.params.movieId};`
    pool.query(queryText).then(results => {
        console.log('logging movie to display', results.rows);
        res.send(results.rows);
        

    }).catch(error => {
        console.log('error getting movie', error);
        res.sendStatus(500);
    })

});


module.exports = router;
