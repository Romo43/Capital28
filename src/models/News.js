const {Schema, model} = requiere("mongoose");

const NewsSchema = new Schema({
    status: Boolean,
    version: String,
    publishedat: Date,
    news:[{
        title: String,
        description: String,
        URLtoside:String,
        URLtomedia: String,
        badge: [String]
    }]
}, {
    timestamps: true
});

module.exports = model('News', NewsSchema);
