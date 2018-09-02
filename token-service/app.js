const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRouter = require('./service-router/user')
let app = express();
app.listen(3000)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
    origin:'http://127.0.0.1:8080',
    credentials:true
}))
app.use('/user',UserRouter)