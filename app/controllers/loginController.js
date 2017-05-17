var login = require('../models/login');

var loginController = {
  signin: function(req, res) {
    sess = req.session,
    //sess.user.logged = false;
    login.signin(req.body, function(result) {
      if (!result.rows[0].logged) {
        res.render('users/login', {
          title: "Login Failed",
          message: "Please sign in again!"
        });
      } else {
        sess.user=result.rows[0];
        //console.log(result.rows[0]);
      //  console.log('logged:');
        //console.log(sess.user.logged);
        res.render('users/login', {
          title: "Login Success",
          message: "Hello " + sess.user.email + ". Go to Homepage in 3 seconds!",
          logged: sess.user.logged,
          email: sess.user.email,
        });
      }
      //  console.log(sess.email);
    })
  }
}

module.exports = loginController;
