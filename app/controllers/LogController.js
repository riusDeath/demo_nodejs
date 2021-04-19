const db = require('../models/index');
const path_config = process.cwd()+'/app/models/config.json';

const fs = require('fs');
const Logs = db.logs;

module.exports = {
    readFile : function(req) {
        fs.readFile(path_config, (err, data) => {
            if (err) throw err;
            let config = JSON.parse(data);
            var action = [];
            for (var key in config.action) {
                action[key] = config.action[key];
            }
    
            const channel_id = action[req.body.action_id].channel_id;
            const channel_sub_id = action[req.body.action_id].channel_sub_id;
            const feature_id = action[req.body.action_id].feature_id;
    
            var Log = new Logs({
                user_id: req.body.user_id,
                action_id: req.body.action_id,
                feature_id: feature_id,
                channel_sub_id: channel_sub_id,
                channel_id: channel_id,
                created_at: Date.now()
            });
            Log.save((err, Log) => {
                console.log(Log)
            });
        })
    },
    logAction : function(req, res) {
        var Log = new Logs({
            user_id: req.body.user_id,
            action_id: req.body.action_id,
            feature_id: req.body.feature_id,
            channel_sub_id: req.body.channel_sub_id,
            channel_id: req.body.channel_id,
            created_at: Date.now()
        });
        Log.save((err, Log) => {
            if (err) {
                data = {
                    status: 500,
                    err: err
                }
            } else {
                data = {
                    status: 200,
                    data: Log
                }
            }
            res.send(data);
        });
    }
}


