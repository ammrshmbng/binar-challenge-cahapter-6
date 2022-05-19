// import module
const express = require('express');
const route = require('./route');
const errorPageNotFound = require('./middlewares/error');

// import model
const {user_game} = require('./models');
const { user } = require('pg/lib/defaults');

const app = express();

const port = 4000;

// set view engine
app.set('view engine','ejs');

// serving static files
app.use(express.static('public'));

// reading request body middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routing
app.post('/ubahdata',(req,res)=>{
    user_game.create({
        nama: req.body.nama,
        perkerjaan: req.body.pekerjaan,
        hobby : req.body.hobby
    })
    .then(data=>{
        res.send("user_game berhasil dibuat <h4><a href='/dashboard'>kembali ke dashboard</a></h4>");
    })
})

app.get('/dashboard',(req,res)=>{
    user_game.findAll()
    .then(data=>{
        res.render('dashboard',{data});
     
    })
})
// update
app.get('/user_game/update/:id',(req,res)=>{
    user_game.findOne({
        where: { id: req.params.id }
      })
        .then(data => {
          res.render('update', { 
            data
          })
        })
})

app.post('/user_game/update/:id', (req, res) => {
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
   })
// delete
app.get('/user_game/delete/:id',(req,res)=>{
    user_game.destroy({
        where: { id: req.params.id }
        })
        .then(data => {
        res.status(200).send("user game  terhapus <h4><a href='/dashboard'>Kembali ke dashboard</a></h4> ")
        }).catch(err => {
        res.status(422).send("Tidak bisa menghapus user_game")
     })
})
app.use('/',route);



//error notfound middleware
app.use(errorPageNotFound.errorMiddleWares);



app.listen(port,()=>{console.log('server is running on port'+port)});