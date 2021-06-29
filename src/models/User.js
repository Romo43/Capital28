const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: String,
    email: String,
    role: String,
    password: String
}, {
    timestamps: true
});

UserSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = function(password){
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);