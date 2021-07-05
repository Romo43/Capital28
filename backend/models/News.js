const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        status: {
            type: Boolean,
            default: false
        },
        version: {type: String, unique: true},
        publishedAt: {
            type: Date, 
            default: null
        },
        news:[{
            title: String,
            description: String,
            URL: String,
            URLtoMedia: String,
            tags: [String]
        }]
    },{
        timestamps: true,
    });

module.exports = mongoose.model('news', newsSchema);