var exphbs = require('express-handlebars');
var path = require('path');

module.exports = function(app) {
  app.use('/components', express.static('bower_components'));
  app.use('/app', express.static('app'));


  var controllers = require('../app/controllers');


  app.get('/', controllers.home.index);

  app.get('/message', controllers.message.index);

  app.get('/users', controllers.users.index);

  app.get('/users/register', controllers.register.index);

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
