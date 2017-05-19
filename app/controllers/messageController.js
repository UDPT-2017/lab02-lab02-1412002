var db = require("../models/db");
var friend = require('../models/message/getFriend.js');
var findAll = require('../models/message/getAllUsers.js');
var remove = require('../models/message/removeFriendInListOther.js');

var list = [];
var allUsers=[];
var messageController = {
  index: function(req, res) {
      sess=req.session;
  //  console.log("id");

      //console.log(sess.user.username);
      if (sess.user){
        friend.find(sess.user.username,function (result) {
          //console.log(result);
          var i;
          var j=0;
          list.splice(0,list.length);
          for(i=0;i<result.rows.length;i++){
            list[j]=result.rows[i].userb;
            j++;
          }
        });
        findAll.getAll(sess.user.username,function(result){
          var i;
          var j=0;
          allUsers.splice(0,allUsers.length);
          for(i=0;i<result.rows.length;i++){
            allUsers[j]=result.rows[i].username;
            j++;
          }
          console.log(allUsers);
          console.log("////////////");

          remove.del(list,allUsers,function(listUsers){
            allUsers=listUsers;
          });

          console.log(allUsers);
        });


        res.render('message/index', {
          title: 'Message',
          message: 'Message Pages',
          actMessage: 'active',
          breadcrumb: 'Message',
          logged:true,
          email: sess.user.username,
          friendList:list,
          allUser:allUsers,

        })
      } else{
        res.render('message/index', {
          title: 'Message',
          message: 'Please login or signup to continue!',
          actMessage: 'active',
          breadcrumb: 'Message',
          logged:false,
        })
      }


  }
}

module.exports = messageController;
