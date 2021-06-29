const {Schema, model} = requiere("mongoose");

const NewsSchema = new Schema({
    status: Boolean,
    version: String,
    title: String,
    description: String,
    URLtoside:String,
    URLtomedia: String,
    tags: [String],
    publishedat: String
}, {
    timestamps: true
});

module.exports = model('News', NewsSchema);
