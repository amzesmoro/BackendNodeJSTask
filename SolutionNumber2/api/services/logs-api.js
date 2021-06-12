const { LogsApi } = require('../../sequelize');
const paginator = require('../helper/pagination');

const getAllLogs = (req) => {
    const pagination = paginator(req.query.page, 10); // set 1 page = 10 length data (results)
    const limit = pagination.limit;
    const offset = pagination.offset;
    return LogsApi.findAndCountAll({
        limit, 
        offset,
        order: [['created_at', 'DESC']]
    })
    .then(docs => {
        return {
            data: docs,
            pagination: pagination
        }
    });
}

const createLog = (dataInsert) => {
    return LogsApi.create(dataInsert);
}


module.exports = {
    getAllLogs,
    createLog,
}