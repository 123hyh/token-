const express = require('express');
const fs = require('fs');
const jwt = require('../jwt');
let Router = express.Router();


Router.post('/',(req,res)=>{
    
    let uname = req.body.uname, upwd = req.body.upwd;
    if(uname=='123hyh' && upwd=='123'){
        let uid = '1';
        let jwts = new jwt(uid);
        let token = jwts.generateToken();
        console.log(req.headers)
        res.json(token);
    }else{
        /* let files = fs.readFileSync('./config/pri.pem','utf-8');
        let cert = fs.readFileSync(path.join(__dirname, '../config/pri.pem'));//私钥
        console.log(cert)
        let tokes = generateToken({uid:1}) */
        res.json({msg:'登录失败,请返回登录',code:0})
    }
})
module.exports = Router