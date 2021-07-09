const News = require('../models/News');

module.exports = class API {

    // Apps

    // Fetch all apps
    static async fetchAllApps(req, res){
        try {
            const app = await News.find();
            res.status(200).json(app);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Fetch app by ID
    static async fetchAppByID(req, res){
        const id = req.params.id;
        try {
            const app = await News.findById(id);
            res.status(200).json(app);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    // Update status by ID
    static async updateAppByID(req, res){
        const id = req.params.id;
        const statusApp = req.body;
        try {
            await News.findByIdAndUpdate(id, statusApp);
            res.status(200).json({ message: 'Status updated successfully'});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // Versions

    // Fetch all versions
    static async fetchAllVersions(req, res){
        
    }
    // Fetch version by id
    static async fetchVersion(req, res){
        
    }
    // Create version
    static async createVersion(req, res){
        
    }
    // Update version
    static async updateVersion(req, res){
        
    }
    // Delete version
    static async deleteVersion(req, res){
        
    } 


    // News

    // Fetch news by id
    static async fetchNews(req, res){
        
    }
    // Push news
    static async createNews(req, res){
        
    }
    // Update news by id
    static async updateNews(req, res){
        
    }
    // Delete news
    static async deleteNews(req, res){
        
    }
};