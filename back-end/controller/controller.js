const dataMovie = require('../models/movie');
const dataVideo = require('../models/videoList');
const util = require('../utils/paging');
const auth = require('../middleware/middleware');

const numberOfPage = 20;

exports.movieTrending = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        let data = dataMovie.movie.trending();
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paging(data, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: data.length
            });
        } catch (err) {
            res.send(400, err);
        }
        res.end();
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}
exports.movieRating = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        let data = dataMovie.movie.rating();
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paging(data, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: data.length
            });
        } catch (err) {
            res.status(400).message('Not found film_id parram');
        }
        res.end();
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}
exports.movieCategory = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        let category = req.params.category == 'all' ? '' : req.params.category;
        let idCategory = category == '' ? 0 : dataMovie.movie.idOFCategory(category);
        let data = idCategory == 0 ? dataMovie.movie.all() : dataMovie.movie.movieCategory(idCategory);
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paging(data, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: data.length,
                genre_ids: category
            });
        } catch (err) {
            res.status(400).message('Not found film_id parram');
        }
        res.end();
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}
exports.videoList = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        let idVideo = req.query.id;
        let videoList = dataVideo.videoList.trailler(idVideo);
        try {
            res.status(200);
            res.send(videoList);
        } catch (err) {
            res.status(400).message('Not found film_id parram');
            res.status(404).message('Not found video')
        }
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}
exports.search = (req, res, next) => {
    let token = req.params.token;
    if (auth.auth(token)) {
        let search = req.query.search;
        let dataSearch = dataMovie.movie.search(search);
        let page = req.query.page == undefined ? 0 : req.query.page;
        let itemOfPage = util.paging(dataSearch, page, numberOfPage);
        try {
            res.status(200);
            res.send({
                results: itemOfPage,
                page: page,
                total_pages: dataSearch.length
            });
        } catch (err) {
            res.status(400).message('Not found keyword parram');
        }
        res.end();
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
}
