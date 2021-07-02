const News = require('../models/News');

module.exports = class API {
    // fetch all versions
    static async fetchAllVersions(req, res){
        try {
            const versions = await News.find();
            res.status(200).json(versions);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // fetch version by id
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
        res.send('Create Version');
    }
    // Update version
    static async updateVersion(req, res){
        res.send('Update Version');
    }
    // Delete version
    static async deleteVersion(req, res){
        res.send('Delete Version');
    }
};