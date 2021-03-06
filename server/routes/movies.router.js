const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all movies
router.get('/', (req, res) => {
  let queryText = 'SELECT movies.title, movies.poster, movies.description, genres."name", genre_reference_table.genre_id, genre_reference_table.movie_id FROM movies JOIN genre_reference_table ON genre_reference_table.movie_id = movies.id JOIN genres ON genre_reference_table.genre_id = genres.id;'
    
  pool.query(queryText).then(results => {
    res.send(results.rows);
    console.log('logging all movies', results.rows);

  }).catch(error => {
    console.log('error getting gifs', error);
    res.sendStatus(500);
  })

});

//update title and description of movies
router.put('/:movieId', (req, res)=>{
  console.log(req.body);
  let movie = req.body;
  let queryString = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = ${req.params.movieId}`;
  // "description" = ${movie.description}
  pool.query(queryString, [movie.title, movie.description]).then((results) => {
    res.sendStatus(200);
  }).catch((err) => {
    res.sendStatus(500);
    console.log(err);
  })
})


module.exports = router;
