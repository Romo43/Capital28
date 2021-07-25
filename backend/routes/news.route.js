const express = require('express');
const router = express.Router();
const API = require('../controllers/news.controller');

// News
router.get('/news', API.allNews);
router.get('/news/:id', API.findNews);
router.post('/news/create', API.createNews);
router.put('/news/update/:id', API.updateNews);
router.put('/news/update-status/:id', API.updateStatus);
router.delete('/news/delete/:id', API.deleteNews);

module.exports = router;