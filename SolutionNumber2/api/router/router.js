const express = require('express');
const router = express.Router();

const OmdbController = require('../controllers/omdb-api/omdb-api');
const { getAllLogs } = require('../controllers/logs-api/logs-api');

router.get('/search', OmdbController.getMovie);
router.get('/detail', OmdbController.getMovie);

router.get('/get-logs', getAllLogs);

module.exports = router;