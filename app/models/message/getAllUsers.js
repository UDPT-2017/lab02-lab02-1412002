var db =require('../db');

var findAll = {
  getAll: function(username,callback){
    //console.log(username);
      db.query('select username from account where username !=$1',[username],function (err,result) {
    if(err) {
      console.log('Database error!');
    }else{
      //console.log(result);
      callback(result);
    }
  })
}
};
module.exports = findAll;
