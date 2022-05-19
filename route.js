// import modules
const express = require('express');
const router = express.Router();

// import controller
const {indexController} = require('./controllers/index');
const {gameController} = require('./controllers/game');
const {loginController} =require('./controllers/login');
const {dashboardController} = require('./controllers/dashboard');
const {addDataControllerTampil, addDataControllerUbah} = require('./controllers/addData');

// setting routing
router.get('/',indexController);
router.get('/game',gameController);
router.get('/login',loginController);
// router.get('/dashboard',dashboardController);
router.get('/tambahdata',addDataControllerTampil);



module.exports = router;

