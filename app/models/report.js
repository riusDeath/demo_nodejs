var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const log = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    node_id: {
        type: String,
        require : true
    },
    node_type: {
        type: String,
        require : true
    },
    date_report: {
        type: Date
    }
    
})