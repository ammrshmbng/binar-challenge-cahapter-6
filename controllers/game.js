function gameController(req,res){
    res.status(200);
    res.render('game');
}   

module.exports = {
    gameController
}