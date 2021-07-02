const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

router.get('/', API.fetchAllVersions);
router.get('/:id', API.fetchVersionByID);
router.post('/', API.createVersion);
router.patch('/:id', API.updateVersion);
router.delete('/:id', API.deleteVersion);

module.exports = router;