const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Applications
router.post('/app', API.createApp);
router.get('/apps', API.allApps);
router.put('/app/:id', API.updateAppByID);

// Versions
router.get('/version/:id', API.allVersions);
router.put('/version/create/:id', API.createVersion);
router.put('/version/update/:id/:id', API.updateVersion);
router.put('/version/delete/:id/:id', API.deleteVersion);

// News
router.get('/news/:id', API.allNews);
router.put('/news/create/:id/:id', API.createNews);
router.put('/news/update/:id/:id/:id', API.updateNews);
router.put('/news/delete/:id/:id/:id', API.deleteNews);
module.exports = router;