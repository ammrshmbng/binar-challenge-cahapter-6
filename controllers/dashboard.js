function dashboardController(req,res){
    res.status(200)
    res.render('dashboard');
    
}

module.exports = {
    dashboardController
}