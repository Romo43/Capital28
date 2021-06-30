import {Schema, model} from "mongoose";

const NewsSchema = new Schema({
    status: Boolean,
    version: String,
    publishedAt: Date,
    news:[{
        title: String,
        description: String,
        urlToSide:String,
        urlToMedia: String,
        tags: [String]
    }]
}, {
    timestamps: true
});

module.exports = model('News', NewsSchema);
