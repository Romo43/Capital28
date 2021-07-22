const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        app: String,
        currentVersion: Number,
        status: Boolean,
        versions:[{
            version: {
                type: Number
            }
        }],
        news:[{
            version: Number,
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