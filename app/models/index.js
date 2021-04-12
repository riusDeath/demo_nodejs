const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.logs = require("./logs");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;