const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Versions
router.get('/admin/versions', API.fetchAllVersions);
router.get('/admin/version/:id', API.fetchVersionByID);
router.post('/admin/create', API.createVersion);
router.put('/admin/update/:id', API.updateVersion);
router.delete('/admin/delete/:id', API.deleteVersion);

// News
router.get('/admin/:version/news/:id', API.fetchNewsByID);
router.put('/admin/:version/news/create/:id', API.createNews);
router.put('/admin/:version/news/update/:id', API.updateNews);
router.put('/admin/:version/news/delete/:id', API.deleteNews);
module.exports = router;