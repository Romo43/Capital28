const News = require('../models/News');

module.exports = class API {
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
        const version = req.body.version;
        try {
            await News.findByIdAndUpdate(id, );
        } catch (err) {
            
        }
    }
    // Delete version
    static async deleteVersion(req, res){
        res.send('Delete Version');
    }
};