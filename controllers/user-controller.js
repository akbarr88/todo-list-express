const { User } = require("../models/user");

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.findAll 
        res.json({
            message: "berhasil mendapatkan data users",
            data: users,
        });
    },

    getUserById: async (req, res) => {
        const {id} = req.params
        const user = await User.findOne ({
            where:{id:id},

        })
        res.json({
            message: "berhasil mendapatkan data userById",
            data: user,
        });
    },

    getUserTodo: (req, res) => {

    }
    
}