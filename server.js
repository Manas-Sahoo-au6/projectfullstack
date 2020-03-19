

const express = require('express');
const app = express()
const expreeLayouts = require('express-ejs-layouts');

var dotenv = require("dotenv")
dotenv.config();

require("./db");






const indexRouter = require('./routes/index')


app.set('view engine' , 'ejs');
app.set('views' , __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expreeLayouts)
app.use(express.static('public'))


app.use('/', indexRouter);





app.listen(  process.env.PORT || 3000 );


