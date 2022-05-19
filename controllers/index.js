function indexController(req,res){
    res.status(200)
    res.render('index');
}

module.exports = {
    indexController
}