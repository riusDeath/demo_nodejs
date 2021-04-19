// import dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

// set up dependencies
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(logger('dev'));
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions))


// set up mongoose
const uri = "mongodb://localhost:27017/system_report"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

require('./app/routes/auth')(app);
require('./app/routes/index')(app);
const cluster = require('cluster');
if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const port = 5035;
// set up route
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Project with Nodejs and MongoDB',
    });
  });
  app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
  });
}
cluster.on('fork', function(worker) {
  console.log('forked -> Worker %d', worker.id);
});
