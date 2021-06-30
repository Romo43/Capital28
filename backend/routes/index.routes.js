const { Router } = require('express');
const router = Router();
const { Login } = require('../controllers/index.controller');

router.get('/login', Login);

module.exports = router;