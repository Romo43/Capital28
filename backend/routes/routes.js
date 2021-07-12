const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Applications
router.get('/', API.allApps);
router.put('/:id', API.updateAppByID);

// Versions
router.get('/:id', API.allVersions);
router.put(':id/:version', API.createVersion);
router.put('/:id/:version', API.updateVersion);
router.put('/:id/:version', API.deleteVersion);

// News
router.get('/:id/:version', API.allNews);
router.put('/:id/:version/:new', API.createNews);
router.put('/:id/:version/:new', API.updateNews);
router.put('/:id/:version/:new', API.deleteNews);
module.exports = router;