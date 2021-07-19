const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// App
router.get('/apps', API.allApps);
router.get('/app/:id', API.App);
// Versions
router.put('/version/create/:id', API.createVersion);
router.put('/version/update/:id', API.updateVersion);
router.put('/version/delete/:id', API.deleteVersion);
// Current Version
router.put('/current-version/update/:id', API.updateCurrentStatus);
router.put('/current-version/update/:id', API.updateCurrentVersion);
// News
router.put('/news/:id', API.findNews);
router.put('/news/create/:id', API.createNews);
router.put('/news/update/:id', API.updateNews);
router.put('/news/delete/:id', API.deleteNews);

module.exports = router;