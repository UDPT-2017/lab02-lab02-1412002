var express = require('express');

var app = express();

var sess;
require('./config')(app,sess);

var port = 4000;
app.listen(port, function() {
  console.log('start server');
})
