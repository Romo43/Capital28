const express = require('express');
const router = express.Router();
const API = require('../controllers/news.controller');

// News
router.get('/', API.allNews);
router.get('/:id', API.findNews);
router.post('/' , API.createNews);
router.put('/:id', API.updateNews);
router.put('/status/:id', API.updateStatus);
router.delete('/:id', API.deleteNews);

module.exports = router;