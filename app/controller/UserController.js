var mongoose = require('mongoose');
var User = require('../models/node/user');

module.exports = {
  createUser: function(req, res){
  const cus = new User({
    _id: mongoose.Types.ObjectId(),
    user_name: req.body.user_name,
    email: req.body.email,
    password: bcrypt.hash(req.body.password),
    status: 1
    });

    return cus
      .save()
      .then((cus) => {
      return res.status(201).json({
        success: true,
        message: 'New cause created successfully',
        cus: cus,
      });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
      });
  },
  listUser: function(req, res){
    User.find()
      .select('_id user_name email')
      .then((Users) => {
          return res.status(200).json({
              success: true,
              message: 'A list of all User',
              Users: Users,
      });
    }).catch((err) => {
      res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
      });
    });
  },
  updateUser: function(req, res){
    User.update()
    .select('_id user_name email')
    .then((Users) => {
        return res.status(200).json({
            success: true,
            message: 'A list of all User',
            Users: Users,
    });
    }).catch((err) => {
      res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
      });
    });
  },
  deleteUser: function(req, res){
    User.deleteOne({ 'email': req.params.email})
        .then(() => {
          return res.status(200).json({
              success: true
          });
        })
        .catch((err) => {
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: err.message,
        });
      });
  }
}