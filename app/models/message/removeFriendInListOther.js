
var remove = {
  del: function(list,allUser,callback){
    var i;
    for(i=0;i<list.length;i++){
      var j;
      for(j=0;j<allUser.length;j++){
        if(list[i]==allUser[j]){
          allUser.splice(j,1);
        }
      }
    }
    callback(allUser);
  }
}

module.exports = remove;
