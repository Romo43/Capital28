const mongoose = require('mongoose');
const newsSchema = mongoose.Schema(
    {
        app: String,
        status: {
            type: Boolean,
            default: false
        },
        version: Number,
        title: String,
        description: String,
        media: String,
        publishedAt: Date
    }
);

module.exports = mongoose.model('News', newsSchema);