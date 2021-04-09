var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const config = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    node_id: {
        type: String,
        require : true
    },
    
})