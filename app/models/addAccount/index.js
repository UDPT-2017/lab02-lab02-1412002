var db = require('../db');
var toMD5 = require('../../../config/toMD5');



var account = {
  addAccount: function(input, callback) {
    console.log(input.mail);
    var passw = toMD5.md5(input.pass);//ma hoa mat khau
    db.query(" insert into account (email,username,mobile,passw) values ($1,$2,$3,$4)", [input.mail, input.username, input.mobile,passw],
      function(err, result) {
        callback(err);
      });
  }
};

module.exports = account;
