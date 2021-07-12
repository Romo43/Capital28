const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Applications
router.get('/', API.fetchAllApps);
router.get('/:id', API.fetchAppByID);
router.put('/:id', API.updateAppByID);

// Versions
router.get('/:id/:version', API.fetchAllVersions);
router.get('/:version', API.fetchVersion);
router.post('/:version', API.createVersion);
router.put('/:version', API.updateVersion);
router.delete('/:version', API.deleteVersion);

// News
router.get('/:version/:id', API.fetchNews);
router.put('/:version/:id', API.createNews);
router.put('/:version/:id', API.updateNews);
router.put('/:version/:id', API.deleteNews);
module.exports = router;