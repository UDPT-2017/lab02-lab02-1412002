var db =require('../db');

var getFriend = {
  find: function(username,callback){
    //console.log(username);
      db.query('select userb from friend where usera=$1',[username],function (err,result) {
    if(err) {
      console.log('Database error!');
    }else{
      console.log(result);
      callback(result);
    }
  })
}
};
module.exports = getFriend;
