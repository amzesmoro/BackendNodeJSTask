const fetchOmdbApi = require('../../fetch/omdb-api/omdb-api');

const getMovie = (req, res, next) => {
    return fetchOmdbApi.getMovie(req)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
}

module.exports = {
    getMovie
}