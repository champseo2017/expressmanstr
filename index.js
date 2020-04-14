var express = require('express');
var pug = require('pug');
var app = express();

var index = require('./routes/index');
var webboard = require('./routes/webboard');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', index);
app.use('/Webboard', webboard);

app.listen(3000, function(){
    console.log('Express running on port 3000');
    
})