var pg = require("pg");
var toMD5 = require('../../../config/toMD5');

var sess;
var config = {
  user: 'postgres', //env var: PGUSER
  database: 'iChats', //env var: PGDATABASE
  password: 'daglmgjak', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var pool = new pg.Pool(config);


var login = {
  signin: function(input, callback) {
    var err;
    var passw = toMD5.md5(input.passw);
    pool.query("select email, passw from account where email=$1", [input.maillogin], function(err, result) {
      if (err) {
        throw (err);
        console.log("Database error!");
      } else {
        if (result.rowCount != 0) {
          var email = JSON.parse(JSON.stringify(result.rows[0])).email;
          var password = JSON.parse(JSON.stringify(result.rows[0])).passw;


          if (input.maillogin == email && passw == password) {
            console.log(email+" Signin Success!");
            err = false;
          } else {
            console.log("Signin Unsuccess!");
            err = true;
          }
        } else {
          console.log("Signin Unsuccess!");
          err = true;
        }
      }
      callback(email);
    })

  }
};
module.exports = login;
