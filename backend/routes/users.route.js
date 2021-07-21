const express = require('express');
const router = express.Router();
const API = require('../controllers/users.controller');

// Users
router.get('/users', API.allUsers);
router.post('/user/create', API.createUser);
router.delete('/user/delete/:id', API.deleteUser);

module.exports = router;