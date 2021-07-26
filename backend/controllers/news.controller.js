const News = require('../models/News');
const fs = require('fs');
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
        const data = req.body;
        const imagename = req.file.filename;
        data.media = imagename;
        try {
            await News.create(data);
            res.status(201).json({ message: "News created successfully"});
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    //  Update News
    static async updateNews(req, res){
        const id = req.params.id;
        let new_media = "";
        if(req.file){
            new_media = req.file.filename;
            try {
                fs.unlinkSync("./uploads/" + req.body.old_media);
            } catch (err) {
                console.log(err)
            }
        }else{
            new_media = req.body.old_media;
        }
        const data = req.body;
        data.media = new_media;
        try {
            await News.findByIdAndUpdate(id, data);
            res.status(200).json({ message: "News updated successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Update Status
    static async updateStatus(req, res){
        const id = req.params.id;
        const status = req.body;
        try {
            await News.findByIdAndUpdate(id, status);
            res.status(200).json({ message: "Status updated successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //  Delete News
    static async deleteNews(req, res){
        const id = req.params.id;
        try {
            const data = await News.findByIdAndDelete(id);
            if(data.media != ''){
                try {
                    fs.unlinkSync('./uploads'+data.media);
                } catch (err) {
                    console.log(err)
                }
            }
            res.status(200).json({ message: "News deleted successfully"});
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};