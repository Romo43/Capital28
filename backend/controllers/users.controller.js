const User = require('../models/User');
module.exports = class API {
// Users
    // All Users
    static async allUsers(req, res){
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // Create User
    static async createUser(req, res){
        const { username, password, role } = req.body;
        try {
            const user = await User.findOne({username: username});
            if(user){
                res.json({ message: "This User already exists" })
            } else{
                const data = new User({ username, password, role });
                await User.create(data);
                res.status(200).json({ message: "User created successfully"});
            }
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    //Delete User
    static async deleteUser(req, res){
        const id = req.params.id;
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}