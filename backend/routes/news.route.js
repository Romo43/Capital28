const express = require('express');
const router = express.Router();
const API = require('../controllers/news.controller');

// App
router.get('/apps', API.allApps);
router.get('/app/:id', API.findApp);

// Versions
router.put('/version/create/:id', API.createVersion);
router.put('/version/update/:id', API.updateVersion);
router.put('/version/delete/:id', API.deleteVersion);

// Current Version
router.put('/CV-status/update/:id', API.updateCurrentStatus);
router.put('/CV-version/update/:id', API.updateCurrentVersion);

// News
router.put('/news/create/:id', API.createNews);
router.put('/news/update/:id', API.updateNews);
router.put('/news/delete/:id', API.deleteNews);

module.exports = router;