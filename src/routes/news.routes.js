const { Router } = require('express');
const router = Router();
const { 

    renderVersionForm, 
    createNewVersion, 
    renderVersion, 
    renderEditForm, 
    updateVersion, 
    deleteVersion
} = require('../controllers/news.controller');

// New news
router.get('/news/add', renderVersionForm);
router.post('/news/new-news', createNewVersion);

// Get All Versions
router.get('/news', renderVersion);

// Get All News
router.get('/news/');

// Edit News
router.get('/news/edit/:id', renderEditForm);
router.put('/news/edit/:id', updateVersion);

// Delete News
router.delete('/news/delete/:id', deleteVersion);

module.exports = router;