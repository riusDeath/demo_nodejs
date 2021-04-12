var mongoose = require("mongoose");

const Logs = mongoose.model(
    "Log",
    new mongoose.Schema({
        user_id: String,
        action_id: String,
        feature_id: String,
        channel_id: String,
        channel_sub_id: String,
        created_at: Date,
    })
);

module.exports = Logs;