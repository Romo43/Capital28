const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        status: Boolean,
        version: String,
        publishedAt: Date,
        news:[{
            title: String,
            description: String,
            URL: String,
            URLtoMedia: String,
            tags: [String]
        }]
    });

module.exports = mongoose.model('news', newsSchema);