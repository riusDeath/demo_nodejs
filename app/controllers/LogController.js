const express = require("express");
const path_config = '../models/config.json';
var mongoose = require('mongoose');
const log = require('../models/log');

const fs = require('fs');

fs.readFile(path_config, (err, data) => {
    if (err) throw err;
    let config = JSON.parse(data);
    var features = Object.keys(config.features).map(function(key) {
        return config.features[key];
      });
      
    var features_sub = Object.keys(config.features_sub).map(function(key) {
        return config.features_sub[key];
    });

    var actions = Object.keys(config.actions).map(function(key) {
        return config.actions[key];
    });
    features.forEach(feature => {
        features_sub.forEach(feature_sub => {
            if (feature_sub.features_id == feature.id) {
                const Log = new log({
                    _id: mongoose.Types.ObjectId(),
                    node_id: feature.id,
                    action: feature_sub.id,
                    });
                Log.save((err, Log) => {
                    if (err) {
                      console.log(err)
                      return;
                    };
                });
            }
        });
    });
});


