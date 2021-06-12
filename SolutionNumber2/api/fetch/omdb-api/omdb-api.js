const fetch = require('node-fetch');
const config = require('../.../../../../config/config');

const getMovie = (req) => {
    let queryParams = new URLSearchParams(req.query).toString();
    // return fetch(`${config.API_URL}?apikey=${config.API_KEY}&${queryParams}`, { // Option 1 --> GET API KEY from config
    return fetch(`${config.API_URL}?${queryParams}`, { // Option 2 --> GET API KEY from query
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Accept-Charset': 'UTF-8'
        }
    })
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        return responseJson;
    });
};

module.exports = {
    getMovie
}