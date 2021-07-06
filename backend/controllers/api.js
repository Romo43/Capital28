const News = require('../models/News');

module.exports = class API {

    // Versions

    // Fetch all versions
    static async fetchAllVersions(req, res){
        try {
            const versions = await News.find();
            res.status(200).json(versions);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Fetch version by id
    static async fetchVersionByID(req, res){
        const id = req.params.id;
        try {
            const version = await News.findById(id);
            res.status(200).json(version);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Create version
    static async createVersion(req, res){
        const version = req.body;
        try {
            await News.create(version);
            res.status(200).json({ message: 'Version created successfully'});
        } catch (err) {
            res.status(400).json({ message: err.message});
        }
    }
    // Update version
    static async updateVersion(req, res){
        const id = req.params.id;
        const version = req.body;
        try {
            await News.findOneAndUpdate(id, version);
            res.status(200).json({ message: 'Version updated successfully'});
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    // Delete version
    static async deleteVersion(req, res){
        const id = req.params.id;
        try {
            await News.findByIdAndRemove(id);
            res.status(200).json({ message: 'Version deleted successfully'});
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    } 


    // News

    // Fetch news by id
    static async fetchNewsByID(req, res){
        const version = req.params.version;
        const id = req.params.id;
        try {
            const news = await News.findOneAndUpdate(id);
            res.status(200).json(version);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Push news
    static async createNews(req, res){
        res.send('push');
    }

    // Update news by id
    static async updateNews(req, res){
        res.send('News updated');
    }

    // Delete news
    static async deleteNews(req, res){
        res.send('pop');
    }
};