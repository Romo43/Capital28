const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        app: String,
        statusApp: {
            type: Boolean,
            default: false
        },
        versions:[{
            status: {
                type: Boolean,
                default: false
            },
            version: String,
            publishedAt: 
            {
                type: Date, 
                default: null
            },
            news:[{
                title: String,
                description: String,
                URL: String,
                URLtoMedia: String,
                roles: [String]
            }]
        }]
    }
);

module.exports = mongoose.model('News', newsSchema);