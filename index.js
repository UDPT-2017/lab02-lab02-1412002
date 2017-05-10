var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');

app.use('/components', express.static('bower_components'));
app.use('/app', express.static('app'));


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
    actHome:'active',
    breadcrumb:'Home'
  })
})

app.get('/message',function(req,res){
  res.render('message',{
    title:'Message',
    message:'Message Pages',
    actMessage:'active',
    breadcrumb:'Message'
  })
})

app.get('/users',function(req,res){
  res.render('users',{
    title:'Message',
    message:'Users Pages',
    actUsers:'active',
    breadcrumb:'User'

  })
})
app.get('/users/register', function(req,res){
  res.render('register',{
    title:'Register',
    message:"register page",
    actUsers:'active',
    breadcrumb:'User'
  })
})

app.get('/about',function(req,res){
  res.render('about',{
    title:'Message',
    message:'About Pages',
    actAbout:'active',
    breadcrumb:'About'
  })
})
var port = 3000;
app.listen(port, function() {
  console.log('start server');
})
