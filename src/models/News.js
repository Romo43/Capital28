const {Schema, model} = requiere("mongoose");

const NewsSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    URLtoside:{
        type: String,
        required: true
    },
    URLtomedia: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    publishedat: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('News', NewsSchema);
