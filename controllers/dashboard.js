const {user_game} = require('../models');

function dashboardController(req,res){
    user_game.findAll()
    .then(data=>{
        res.render('dashboard',{data});
     
    })
    
}

module.exports = {
    dashboardController
}