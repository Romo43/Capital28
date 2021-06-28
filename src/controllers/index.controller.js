const indexCtrllr = {};

indexCtrllr.renderIndex = (req, res) =>{
    res.render('index');
};
indexCtrllr.renderAbout = (req, res) =>{
    res.render('about');
};

module.exports = indexCtrllr;