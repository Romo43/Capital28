const newsCtrollr = {};

newsCtrollr.renderNewsForm = (req, res) =>{
    res.send('News add');
};

newsCtrollr.createNewNews = (req, res) =>{
    res.send('New news');
};

newsCtrollr.renderNews = (req, res) =>{
    res.send('render news');
};

newsCtrollr.renderEditForm = (req, res) =>{
    res.send('edit news');
};

newsCtrollr.updateNews = (req, res) =>{
    res.send('Update news');
};

newsCtrollr.deleteNews = (req, res) =>{
    res.send('Deleting news');
};
module.exports = newsCtrollr;