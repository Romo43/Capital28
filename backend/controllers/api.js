const News = require('../models/News');
module.exports = class API {




    // Apps
        //  All apps
        static async allApps(req, res){
            try {
                const apps = await News.find();
                res.status(200).json(apps);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        //  App
        static async App(req, res){
            const id = req.params.id;
            try {
                const app = await News.findById(id);
                res.status(200).json(app);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // create app
        static async createApp(req, res){
            const app = req.body;
            try {
                const createApp = await News.create(app);
                res.status(200).json(createApp);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Update status app by ID
        static async updateAppByID(req, res){
            const id = req.params.id;
            const statusApp = req.body;
            try {
                const app = await News.findByIdAndUpdate(id, statusApp);
                res.status(200).json(app);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }




    // Versions
        // Create version
        static async createVersion(req, res){
            const id = req.params.id;
            const { version, publishedAt } = req.body;
            try {
                const data = await News.findOneAndUpdate({ "_id": id }, { $push: { versions: { version: version, publishedAt: publishedAt }}});
                res.status(200).json(data);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Update version
        static async updateVersion(req, res){
            const id = req.params.id;
            const { version, status, publishedAt } = req.body;
            try {
                const data = await News.updateOne({ "versions._id": id }, { $set: { "versions.$.version": version, "versions.$.status": status, "versions.$.publishedAt": publishedAt }});
                res.status(200).json(data);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Delete version
        static async deleteVersion(req, res){
            const id = req.params.id;
            try {
                const data = await News.updateOne({ "versions._id": id }, { $pull: { versions: { "_id":id }}}, { new: true });
                res.status(200).json(data);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        } 




    // News
        // Create news
        static async createNews(req, res){
            const id = req.params.id;
            const { title, description, URL, URLtoMedia, roles } = req.body;
            try {
                const data = await News.findOneAndUpdate({"versions._id": id }, { $push:{ news: { title: title, description: description, URL: URL, URLtoMedia: URLtoMedia, roles:[roles] }}});
                res.status(200).json(data);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Update news
        static async updateNews(req, res){
            const id = req.params.id;
            const { title, description, URL, URLtoMedia, roles } = req.body;
            try {
                const data = await News.updateOne({ "news._id": id }, { $set: { "news.$.title": title, "news.$.description": description, "news.$.URL": URL, "news.$.URLtoMedia": URLtoMedia, "news.$.roles":[roles] }});
                res.status(200).json(data);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
        // Delete news
        static async deleteNews(req, res){
            const id = req.params.id;
            try {
                const data = await News.updateOne({ "news._id": id }, { $pull: { news: { "_id": id }}}, { new: true });
                res.status(200).json(data);
            } catch (err) {
                res.status(404).json({ message: err.message });
            }
        }
};