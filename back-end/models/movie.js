const fs = require('fs');
const path = require('path');

const pathJSON = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'movieList.json'
);
const pathGenreListJson = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'genreList.json'
);


const movie = {
    all: function () {
        return JSON.parse(fs.readFileSync(pathJSON, 'utf8'));
    },

    idOFCategory: function (category) {
        let listCategory = JSON.parse(fs.readFileSync(pathGenreListJson, 'utf8'));
        let item = listCategory.filter((item, index) => {
            if (item.name == category) {
                return item
            }
        });
        return item[0].id == undefined ? 0 : item[0].id
        // item[0].id
    },
    movieCategory: function (idcategory) {
        let product = movie.all();
        return product.filter(item => {
            item.genre_ids?.map(id => {
                if (id == idcategory) {
                    return item;
                }
            })
            if (item.genre_ids == idcategory) {
                return item;
            }

        })


    },
    trending: function () {
        let product = movie.all();
        return product.sort(function (a, b) {
            return a.popularity < b.popularity ? 1 : -1
        });
    },
    rating: function () {
        let product = movie.all();
        return product.sort(function (a, b) {
            return a.vote_average < b.vote_average ? 1 : -1
        });
    },
    search: function (search) {
        let product = movie.all();
        return product.filter(item => {
            if (item?.title?.includes(search) ||
                item?.name?.includes(search) ||
                item?.overview?.includes(search)) {
                return item;
            }
        })
    },

}

exports.movie = movie;