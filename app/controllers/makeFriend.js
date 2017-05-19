var db = require("../models/db");

var addFriend = {
  add: function (req,res) {
    sess=req.session;
    if(sess.user.logged){
      var userb = req.param('q');
      var time =new Date().toISOString()
      db.query("insert into friend (usera,userb,time) values($1,$2,$3)",[sess.user.username,userb,time],function (err){
        if(err){
          console.log("database error");
        }else{
          console.log("success");
        }
      })
    }else{
      console.log("database error");

    }

  }
}
module.exports = addFriend;
