const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Applications
router.get('/apps', API.allApps);
router.get('/app/:id', API.App);
router.post('/app/create', API.createApp);
router.put('/app/update/:id', API.updateAppByID);

// Versions
router.put('/version/create/:id', API.createVersion);
router.put('/version/update/:id', API.updateVersion);
router.put('/version/delete/:id', API.deleteVersion);

// News
router.put('/news/create/:id', API.createNews);
router.put('/news/update/:id', API.updateNews);
router.put('/news/delete/:id', API.deleteNews);
module.exports = router;