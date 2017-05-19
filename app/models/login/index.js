var db = require("../db");
var toMD5 = require('../../../config/toMD5');

var sess;

var login = {
  signin: function(input, callback) {
    var err;
    var passw = toMD5.md5(input.passw);
    db.query("select * from account where email=$1", [input.maillogin], function(err, result) {
      if (err) {
        throw (err);
        console.log("Database error!");
      } else {
        //console.log(result);
        if (result.rowCount != 0) {
        //  var userID = result.rows[0].ID;
          var email = JSON.parse(JSON.stringify(result.rows[0])).email;
          var password = JSON.parse(JSON.stringify(result.rows[0])).passw;
          if (input.maillogin == email && passw == password) {
            console.log(email + " Signin Success!");
            result.rows[0].logged = true;
          } else {
            console.log("Signin Unsuccess!");
            result.rows[0].logged = false;
          }
        } else {
          console.log("Signin Unsuccess!");
          result.rows[0]='0';
          result.rows[0].logged = false;
        }
      }
      callback(result);
      //  console.log(result);
    })

  }
};
module.exports = login;
