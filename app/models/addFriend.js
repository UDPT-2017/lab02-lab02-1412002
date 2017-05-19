function addFriend(str,user) {
  var xhttp;
  document.getElementById("add"+user).style.display = "none";

  document.getElementById("rem"+user).style.display = "inline";

    xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/users/addFriend?q="+user, true);
  xhttp.send();



}

function remFriend(str,user) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/users/removeFriend?q="+user, true);
  xhttp.send();
  document.getElementById("rem"+user).style.display = "none";

  document.getElementById("add"+user).style.display = "inline";






}
function showRemoveButton(user) {
  document.getElementById("rem"+user).style.display = "inline";

}
function hideRemoveButton(user) {
  document.getElementById("rem"+user).style.display = "none";

}

function remFriend2(str,user) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/users/removeFriend?q="+user, true);
  xhttp.send();


}
