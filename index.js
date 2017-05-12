var express = require('express');
var app = express();

require('./config')(app);

var port = 3000;
app.listen(port, function() {
  console.log('start server');
})
