const {user_game} = require('../models');


function addDataControllerTampil(req,res){
    res.status(200).render('addData');
}



function tambahDataController(req,res){
    user_game.create({
        nama: req.body.nama,
        pekerjaan: req.body.pekerjaan,
        hobby : req.body.hobby
    })
    .then(()=>{
        res.send("user_game berhasil dibuat <h4><a href='/dashboard'>kembali ke dashboard</a></h4>");
    })
}


module.exports = {
    addDataControllerTampil,
    tambahDataController
}