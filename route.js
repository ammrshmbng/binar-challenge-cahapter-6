// import modules
const express = require('express');
const router = express.Router();

// import controller
const {indexController} = require('./controllers/index');
const {gameController} = require('./controllers/game');
const {loginController} =require('./controllers/login');
const {dashboardController} = require('./controllers/dashboard');
const {addDataControllerTampil,tambahDataController} =require('./controllers/addData');
const {updataDataControllerTampil, updataDataControllerUbah} = require('./controllers/update');
const {deleteDataController} =require('./controllers/delete');


// setting routing
router.get('/',indexController);
router.get('/game',gameController);
router.get('/login',loginController);
router.get('/dashboard',dashboardController);

router.get('/tambahdata',addDataControllerTampil);
router.post('/tambahdata',tambahDataController);

router.get('/user_game/update/:id',updataDataControllerTampil);
router.post('/user_game/update/:id',updataDataControllerUbah);

router.get('/user_game/delete/:id',deleteDataController);




module.exports = router;

