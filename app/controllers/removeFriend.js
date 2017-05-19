var db = require("../models/db");

var remFriend = {
  remove: function (req,res) {
    sess=req.session;
    if(sess.user.logged){
      var userb = req.param('q');
      db.query("DELETE FROM friend  WHERE usera=$1 and userb=$2",[sess.user.username,userb],function (err){
        if(err){
          console.log("database error");
        }else{
          console.log("remove success");
        }
      })
    }else{
      console.log("database error");

    }

  }
}
module.exports = remFriend;
