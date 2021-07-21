const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        date: { type: Date, default: Date.now }
    }
);

module.exports = mongoose.model('Users', userSchema);