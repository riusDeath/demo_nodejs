var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const chat = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {type: String, require: true},
    types: {type: String, require: true},
    chat_message: String,
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Chat', chat);