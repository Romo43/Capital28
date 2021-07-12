const News = require('../models/News');
module.exports = class API {




    // Apps
        //  All apps
        static async allApps(req, res){
            try {
                const app = await News.find();
                res.status(200).json(app);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Update status app by ID
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
        // All versions
        static async allVersions(req, res){
            const id = req.params.id;
            try {
                const app = await News.findById(id);
                res.status(200).json(app);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
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
        // All news
        static async allNews(req, res){
            const id = req.params.id;
            const version = req.params.version;
            try {
                const versions = await News.find({"_id": id},{versions: {$elemMatch: {version:version}}});
                res.status(200).json(versions);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
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