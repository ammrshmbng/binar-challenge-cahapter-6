const user = require('../db/users.json');


function loginController(req,res){
    res.status(200);
    res.render('login');
}

function loginProsesController(req,res){
    const username = req.body.uname;
    const password = req.body.psw;

    // cek vaidasi
    const usernameData =  user[0].username;
    const passwordData = user[0].password;
    
    if(username == usernameData && password == passwordData ){
        res.json({message: "login berhasil"});
    }else{
        res.json({message: "mungkin salah username atau pasword"});
    }
}

module.exports = {
    loginController,
    loginProsesController
}