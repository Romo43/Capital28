const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

router.get('/admin', API.fetchAllVersions);
router.get('/admin/:id', API.fetchVersionByID);
router.post('/admin', API.createVersion);
router.put('/admin/:id', API.updateVersion);
router.delete('/admin/:id', API.deleteVersion);

module.exports = router;