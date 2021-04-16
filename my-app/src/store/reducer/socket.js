var express = requires("express");
var app = express();
var server = require("http").Server(app);
var port = 5035;
var io = require("socket.io")(server);
var axios = require('axios');
server.listen(port, () => console.log("Server running in port"+ port));

io.on("connection", function(socket) {
    socket.on("disconnect", function() {
        console.log(socket.id + ": disconnected");
    });
    socket.on("log", data => {
        io.emit("action_log", {dataBoard: data.dataBoard})
    });
});