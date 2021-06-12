const fetchOmdbApi = require('../../fetch/omdb-api/omdb-api');
const LogsApiServices = require('../../services/logs-api');
const getCurrentDate = require('../../helper/current-date');

const getMovie = async (req, res, next) => {
    try {
        let date = getCurrentDate();
        let dataInsert = {
            url: req.headers.host,
            api_endpoint: req.route.path,
            parameters: req.query,
            created_at: date.dateAsiaJakarta
        }
        await LogsApiServices.createLog(dataInsert);        
    
        let response = await fetchOmdbApi.getMovie(req);

        return res.json(response);
    
    } catch(err) {
        return res.status(500).json({
            error: err,
        });
    }
}

module.exports = {
    getMovie
}