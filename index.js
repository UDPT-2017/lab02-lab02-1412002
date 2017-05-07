var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');

app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'application',
  layoutsDir:path.resolve('app/views/layouts/'),
  partialsDir:path.resolve('app/views/partials/')
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('app/views'));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'iSend',
    message: 'Index page',
  })
})

var port = 3000;
app.listen(port, function() {
  console.log('start server');
})
