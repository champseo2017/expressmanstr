const express = require('express');
const pug = require('pug');
const app = express();
const osmosis = require('osmosis');

const index = require('./routes/index');
const webboard = require('./routes/webboard');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', index);
app.use('/Webboard', webboard);


osmosis
.get('')
.find('div.mb-5')
.set({
    div: 'div div div div div'
  }) 
.data(function(listing) {
   console.log(listing);
   
})
.log(console.log)
.error(console.log)
.debug(console.log)


app.listen(8080, function(){
    console.log('Express running on port 8080');
    
})