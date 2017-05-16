var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function(app, sess) {
  app.use(session({
    secret: 'truongan1060'
  }));

  app.use('/components', express.static('bower_components'));
  app.use('/app', express.static('app'));
  app.use(bodyParser.urlencoded({
    extended: false
  }))

  var controllers = require('../app/controllers');
  //var isEmpty = function(input) {
  //return input.email || input.email.trim() || input.email.length == 0 || input.password || input.password.trim() || input.password.length == 0 || input.username || input.username.trim() || input.username.length == 0 || input.mobile || input.mobile.trim() || input.mobile.length == 0;
  //}

  app.get('/', controllers.home.index);

  app.get('/message', controllers.message.index);

  app.get('/users', controllers.users.index);

  app.get('/users/register', controllers.register.index);
  app.post('/users/addAccount', controllers.addAccount.create);
  app.post('/users/login', controllers.login.signin);
  app.get('/users/logout', controllers.logout.index);

  app.get('/about', controllers.about.index);

  app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'application',
    layoutsDir: path.resolve('app/views/layouts/'),
    partialsDir: path.resolve('app/views/partials/')
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.resolve('app/views'));

}
