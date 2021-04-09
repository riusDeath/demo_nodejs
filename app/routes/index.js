var express = require('express');
var { createCustomer,
    listCustomer,
    updateCustomer,
    deleteCustomer } =  require('../controller/UserController');

var login = require('../controller/LoginController');

const router = express.Router();

router.post('/register', createCustomer);

router.get('/list-users', listCustomer);

router.get('/find-users/:user_name', updateCustomer);

router.get('/delete/:email', deleteCustomer);

route.get('/login', login);


module.exports = router;