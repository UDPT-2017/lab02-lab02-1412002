function addFriend(str,user) {

  var xhttp;

    str.innerHTML = "Added";
    xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/users/addFriend?q="+user, true);
  xhttp.send();



}
