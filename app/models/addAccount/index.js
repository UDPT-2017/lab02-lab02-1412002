var pg = require("pg");
var toMD5 = require('../../../config/toMD5');


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


var account = {
  addAccount: function(input, callback) {
    console.log(input.mail);
    var passw = toMD5.md5(input.pass);//ma hoa mat khau
    pool.query(" insert into account (email,username,mobile,passw) values ($1,$2,$3,$4)", [input.mail, input.username, input.mobile,passw],
      function(err, result) {
        callback(err);
      });
  }
};

module.exports = account;
