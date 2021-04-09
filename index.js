// import dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const mainRoutes = require('./app/routes/index');

// set up dependencies
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'));

// set up mongoose
const uri = "mongodb://localhost:27017/system_report"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

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
app.use('/api/', mainRoutes);