var db = require("../models/db");

var addFriend = {
  add: function (req,res) {
    sess=req.session;
    var userb = req.param('q');
    var time =new Date().toISOString()
    db.query("insert into friend (usera,userb,time) values($1,$2,$3)",[sess.user.username,userb,time],function (err){
      if(err){
        console.log("database error");
      }else{
        console.log("success");
      }
    })
  }
}
module.exports = addFriend;
