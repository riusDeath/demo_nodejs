const express = require("express");
const path_config = '../models/config.json';

const fs = require('fs');
const { features } = require("process");


fs.readFile(path_config, (err, data) => {
    if (err) throw err;
    let config = JSON.parse(data);
    let features = config.features;
    features.forEach(element => {
        for (const [key, value] of Object.entries(element)) {
            console.log(`${key}: ${value.parent_id}`);
        }
    });
    
});


