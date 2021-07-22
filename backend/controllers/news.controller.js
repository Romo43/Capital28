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
    //  Find App
    static async findApp(req, res){
        const id = req.params.id;
        try {
            const app = await News.findById(id);
            res.status(200).json(app);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }




// Versions
    // Find Version
    static async findVersion(req, res){
        const id = req.params.id;
        const versionID = req.params.versionID;
        try {
            const version = await News.find({"id":id,"versions._id":versionID});
            
                res.status(200).json(version);
            
            
        } catch (err) {
            res.status(404).json(data);
        }
    }
    // Create Version
    static async createVersion(req, res){
        const id = req.params.id;
        const { version } = req.body;
        try {
            const data = await News.findOneAndUpdate({ "_id": id }, { $push: { versions: { version: version }}});
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Update Version
    static async updateVersion(req, res){
        const id = req.params.id;
        const { version } = req.body;
        try {
            await News.updateOne({ "versions._id": id }, { $set: { "versions.$.version": version }});
            res.status(200).json({message: "Version updated successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Delete Version
    static async deleteVersion(req, res){
        const id = req.params.id;
        try {
            const data = await News.updateOne({ "versions._id": id }, { $pull: { versions: { "_id":id }}}, { new: true });
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }




// Current Version
    // Update current status app
    static async updateCurrentStatus(req, res){
        const id = req.params.id;
        const { status } = req.body;
        try {
            const app = await News.findByIdAndUpdate(id, status);
            res.status(200).json(app);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Update current version app
    static async updateCurrentVersion(req, res){
        const id = req.params.id;
        const { version } = req.body;
        try {
            const app = await News.findByIdAndUpdate(id, version);
            res.status(200).json(app);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }




// News
    // Find News
    static async findNews(req, res){
        const id = req.params.id;
        const NewsID = req.params.NewsID
        try {
            const data = await News.find({"_id": id},{news: {$elemMatch: {_id: NewsID}}});
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json(data);
        }
    }
    // Create News
    static async createNews(req, res){
        const id = req.params.id;
        const { version, title, description, URL, URLtoMedia, roles, publishedAt } = req.body;
        try {
            const data = await News.findOneAndUpdate({ "_id": id }, { $push: { news: { version: version, title: title, description: description, URL: URL, URLtoMedia: URLtoMedia, roles:[roles], publishedAt: publishedAt }}});
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Update News
    static async updateNews(req, res){
        const id = req.params.id;
        const { version, title, description, URL, URLtoMedia, roles, publishedAt } = req.body;
        try {
            const data = await News.updateOne({ "news._id": id }, { $inc: { "news.$.version": version, "news.$.title": title, "news.$.description": description, "news.$.URL": URL, "news.$.URLtoMedia": URLtoMedia, "news.$.roles": [roles], "news.$.publishedAt": publishedAt }});
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Delete News
    static async deleteNews(req, res){
        const id = req.params.id;
        try {
            const data = await News.updateOne({ "news._id": id }, { $pull: { news: { "_id":id }}}, { new: true });
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};