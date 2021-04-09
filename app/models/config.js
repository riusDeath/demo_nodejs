var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const config = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: [{
        _id: mongoose.Schema.Types.ObjectId,
        
    }],
})