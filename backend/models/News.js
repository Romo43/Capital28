const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        app: String,
        currentVersion:{
            version: String,
            status: Boolean
        },
        versions:[String],
        news:[{
            version: String,
            title: String,
            description: String,
            URL: String,
            URLtoMedia: String,
            publishedAt: Date,
            roles: [String]
        }]
    }
);

module.exports = mongoose.model('News', newsSchema);