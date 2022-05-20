const {user_game} = require('../models');

function updataDataControllerTampil(req,res){
    user_game.findOne({
        where: { id: req.params.id }
      })
        .then(data => {
          res.render('update', { 
            data
          })
        })
}

function updataDataControllerUbah(req,res){
  user_game.update({
    nama: req.body.nama,
    pekerjaan: req.body.pekerjaan,
    hobby : req.body.hobby
  }, {
    where: { id: req.params.id }
  })
    .then(()=> {
      res.send("Article berhasil diupdate <h4><a href='/dashboard'>Kembali ke dashboard</a></h4>")
    })
}

module.exports = {
    updataDataControllerTampil,
    updataDataControllerUbah
}