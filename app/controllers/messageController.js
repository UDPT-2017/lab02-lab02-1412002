var db = require("../models/db");
var friend = require('../models/message/getFriend.js');
var list = [];
var messageController = {
  index: function(req, res) {
      sess=req.session;
  //  console.log("id");

      //console.log(sess.user.username);
      if (sess.user){
        friend.find(sess.user.username,function (result) {
          console.log(result);
          var i;
          var j=0;
          //console.log(result.rows.length);

          for(i=0;i<result.rows.length;i++){
            //console.log(result.rows[i].userb);
            list[j]=result.rows[i].userb;
            j++;
            console.log(list);
          }
        });
        res.render('message/index', {
          title: 'Message',
          message: 'Message Pages',
          actMessage: 'active',
          breadcrumb: 'Message',
          logged:true,
          email: sess.user.username,
          friendList:list,

        })
        list.splice(0,list.length);
      } else{
        res.render('message/index', {
          title: 'Message',
          message: 'You are not logged!',
          actMessage: 'active',
          breadcrumb: 'Message',
          logged:false,
        })
      }


  }
}

module.exports = messageController;
