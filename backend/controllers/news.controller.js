const News = require('../models/News');
module.exports = class API {
// Apps
    //  All News
    static async allNews(req, res){
        try {
            const data = await News.find();
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Find News
    static async findNews(req, res){
        const id = req.params.id;
        try {
            const data = await News.findById(id);
            res.status(200).json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Create News
    static async createNews(req, res){
        const { app, version, title, description, URLtoMedia, publishedAt, roles} = req.body;
        try {
            const data = new News({ app, version, title, description, URLtoMedia, publishedAt, roles});
            await News.create(data);
            res.status(200).json({ message: "News created successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Update News
    static async updateNews(req, res){
        const id = req.params.id;
        const { app, version, title, description, URLtoMedia, publishedAt, roles } = req.body;
        try {
            await News.findByIdAndUpdate(id, { app, version, title, description, URLtoMedia, publishedAt, roles });
            res.status(200).json({ message: "News updated successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Update Status
    static async updateStatus(req, res){
        const id = req.params.id;
        const { status } = req.body;
        try {
            await News.findByIdAndUpdate(id, {status: status});
            res.status(200).json({ message: "Status updated successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Delete News
    static async deleteNews(req, res){
        const id = req.params.id;
        try {
            await News.findByIdAndDelete(id);
            res.status(200).json({ message: "News deleted successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};