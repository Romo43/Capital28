const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Applications
router.post('/app', API.createApp);
router.get('/apps', API.allApps);
router.put('/app/:id', API.updateAppByID);

// Versions
router.get('/versions/:id', API.allVersions);
router.put('/version/:id', API.createVersion);
router.put('/version/:id/:version', API.updateVersion);
router.put('/version/:id/:version', API.deleteVersion);

// News
router.get('/news/:id/:version', API.allNews);
router.put('/news/:id/:version', API.createNews);
router.put('/news/:id/:version/:new', API.updateNews);
router.put('/news/:id/:version/:new', API.deleteNews);
module.exports = router;