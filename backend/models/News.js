const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        app: String,
        currentVersion:{
            version: Number,
            status: Boolean
        },
        versions:[{
            _id: false,
            version: {
                type: Number, unique: true
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