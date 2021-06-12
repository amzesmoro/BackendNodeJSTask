const express = require('express');
const router = express.Router();

const OmdbController = require('../controllers/omdb-api/omdb-api');

router.get('/search', OmdbController.getMovie);
router.get('/detail', OmdbController.getMovie);

module.exports = router;