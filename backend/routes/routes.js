const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

// Versions
router.get('/', API.fetchAllVersions);
router.get('/:id', API.fetchVersionByID);
router.post('/', API.createVersion);
router.put('/:id', API.updateVersion);
router.delete('/:id', API.deleteVersion);

// News
router.get('/admin/:version/news/:id', API.fetchNewsByID);
router.put('/admin/:version/news/create/:id', API.createNews);
router.put('/admin/:version/news/update/:id', API.updateNews);
router.put('/admin/:version/news/delete/:id', API.deleteNews);
module.exports = router;