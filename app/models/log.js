var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const log = mongoose.model(
    "log",
    new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    node_id: {
        type: String,
        require : true
    },
    action: {
        type: String,
        require : true
    },
    created_at: {
        type: Date,
        default:  Date.now
    }
    
}));
module.exports = log;