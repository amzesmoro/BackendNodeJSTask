const config = require('./config/config');
const Sequelize = require('sequelize');
const LogsApiModel = require('./api/model/logs-api');

const sequelize = new Sequelize(config.dbConnectionString, {
    logging: false,
});

const LogsApi = LogsApiModel(sequelize, Sequelize);

module.exports = {
    LogsApi
};