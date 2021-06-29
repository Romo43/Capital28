const { Router } = require('express');
const router = Router();
const { 
    renderNewsForm, 
    createNewNews, 
    renderNews, 
    renderEditForm, 
    updateNews, 
    deleteNews
} = require('../controllers/news.controller');

// New news
router.get('/news/add', renderNewsForm);
router.post('/news/new-news', createNewNews);

// Get All Versions
router.get('/news', renderNews);

// Get All News
router.get('/news/');

// Edit News
router.get('/news/edit/:id', renderEditForm);
router.put('/news/edit/:id', updateNews);

// Delete News
router.delete('/news/delete/:id', deleteNews);

module.exports = router;