const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        status: {
            type: Boolean,
            default: false
        },
        version: String,
        publishedAt: {
            type:Date, 
            default: null
        },
        news:[{
            title: String,
            description: String,
            URL: String,
            URLtoMedia: String,
            tags: {enum:['Free', 'Premium', 'Ultimate']}
        }]
    });

module.exports = mongoose.model('news', newsSchema);