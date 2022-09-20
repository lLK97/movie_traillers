const express = require('express');
const routerMovie = express.Router();

const controllerMovie = require('../controller/controller')


routerMovie.get('/trending/all/:token', controllerMovie.movieTrending);
routerMovie.get('/rating/:token', controllerMovie.movieRating);
routerMovie.get('/category/:category/:token', controllerMovie.movieCategory);
routerMovie.get('/search/:token', controllerMovie.search);

exports.routerMovie = routerMovie;  