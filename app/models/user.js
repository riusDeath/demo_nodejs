var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const User = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_name: String,
    email: {type: String, require: true},
    password: {type: String, require: true},
    status: {type: Number, default: 0},
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', User);