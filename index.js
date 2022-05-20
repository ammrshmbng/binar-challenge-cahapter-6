// import module
const express = require('express');
const app = express();
const route = require('./route');
const errorPageNotFound = require('./middlewares/error');

// import model
const {user_game} = require('./models');

const port = 4000;

// set view engine
app.set('view engine','ejs');

// serving static files
app.use(express.static('public'));

// reading request body middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routing
app.use('/',route);

//error notfound middleware
app.use(errorPageNotFound.errorMiddleWares);

app.listen(port,()=>{console.log('server is running on port'+port)});