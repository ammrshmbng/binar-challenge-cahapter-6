const {user_game} = require('../models');

function deleteDataController(req,res){
    user_game.destroy({
        where: { id: req.params.id }
        })
        .then(data => {
        res.status(200).send("user game  terhapus <h4><a href='/dashboard'>Kembali ke dashboard</a></h4> ")
        }).catch(err => {
        res.status(422).send("Tidak bisa menghapus user_game")
     })
}

module.exports = {
    deleteDataController,
}