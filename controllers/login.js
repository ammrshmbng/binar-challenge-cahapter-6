function loginController(req,res){
    res.status(200);
    res.render('login');
}

module.exports = {
    loginController
}