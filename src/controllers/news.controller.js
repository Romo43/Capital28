const newsCtrollr = {};

newsCtrollr.renderVersionForm = (req, res) =>{
    res.render('news/new-news');
};

newsCtrollr.createNewVersion = (req, res) =>{
    res.send('New news');
};

newsCtrollr.renderVersion = (req, res) =>{
    res.send('render news');
};

newsCtrollr.renderEditForm = (req, res) =>{
    res.send('edit news');
};

newsCtrollr.updateVersion = (req, res) =>{
    res.send('Update news');
};

newsCtrollr.deleteVersion = (req, res) =>{
    res.send('Deleting news');
};
module.exports = newsCtrollr;