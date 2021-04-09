var express = require('express');
const app = express();
const path = require('path');
var { createCustomer,
    listCustomer,
    updateCustomer,
    deleteCustomer } =  require('../controller/UserController');
const router = express.Router();
app.use(express.static(path.join(__dirname, 'views')));

router.post('/register', createCustomer);

router.get('/list-users', listCustomer);

router.get('/find-users/:user_name', updateCustomer);

router.get('/delete/:email', deleteCustomer);

router.get('/login', function(req, res){
    res.sendFile('index.html', { root: '.' });
});

module.exports = router;