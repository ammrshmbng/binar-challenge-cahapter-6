function errorMiddleWares(req,res){
    res.status(200)
    res.render('404');
}

module.exports = {
    errorMiddleWares
}