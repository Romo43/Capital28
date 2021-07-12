const News = require('../models/News');
module.exports = class API {




    // Apps
        // create app
        static async createApp(req, res){
            const app = req.body;
            try {
                const createApp = await News.create(app);
                res.status(200).json(createApp);
            } catch (err) {
                res.status(404).json( {message: err.message });
            }
        }
        //  All apps
        static async allApps(req, res){
            try {
                const apps = await News.find();
                res.status(200).json(apps);
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
                const versions = await News.findById(id);
                res.status(200).json(versions);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
        }
        // Create version
        static async createVersion(req, res){
            const id = req.params.id;
            const {version, publishedAt } = req.body;
            try {
                await News.findOneAndUpdate({"_id": id}, {$push:{versions:{ version: version, publishedAt: publishedAt}}});
                res.status(200).json({message: 'Version created successfully'});
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Update version
        static async updateVersion(req, res){
            const id = req.params.id;
            const versionID = req.params.version;
            const {version, status, publishedAt} = req.body;
            try {
                await News.findOneAndUpdate({"_id":id, "versions.version":versionID}, {$set: {version: version, status: status, publishedAt: publishedAt}});
                res.status(200).json({ message: 'Version updated successfully'});
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
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
                const news = await News.find({"_id": id},{versions: {$elemMatch: {version:version}}});
                res.status(200).json(news);
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