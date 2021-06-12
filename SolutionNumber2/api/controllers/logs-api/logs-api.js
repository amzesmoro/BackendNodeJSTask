const LogsApiServices = require('../../services/logs-api');

const getAllLogs =  (req, res, next) => {
    LogsApiServices.getAllLogs(req)
    .then(docs => {
        const response = {
            message: "Get All Logs",
            total: docs.data.count,
            nextPage: docs.pagination.nextPage,
            prevPage: docs.pagination.prevPage,
            results: docs.data.rows.map(doc => {
                return {
                    id: doc.id,
                    url: doc.url,
                    api_endpoint: doc.api_endpoint,
                    parameters: doc.parameters,
                    created_at: doc.created_at
                }
            }),
            request: {
                type: 'GET',
                url: '/get-logs'
            }
        };

        if (response.results.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(400).json({
                message: 'No records found'
            });
        }
    })
    .catch(err => {
        console.log(err);
        next();
    });
}

module.exports = {
    getAllLogs
}