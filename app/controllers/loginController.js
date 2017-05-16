var login = require('../models/login');

var loginController = {
    signin: function(req, res) {
      sess=req.session,
    //  console.log(input);
    sess.email='0';
    sess.logged=false;


      login.signin(req.body, function(err) {
          if (err=='0') {

            sess.email='0';
            res.render('users/login', {
              title: "Login Failed",
              message: "Please sign in again!"
            });
          } else {
            sess.email=err;
            sess.logged=true;
            console.log(sess.email);
            console.log(sess.logged);
            res.render('users/login', {
              title: "Login Success",
              message: "Hello "+err +". Go to Homepage in 3 seconds!",
              logged:sess.logged,
              email:sess.email,
            });
          }
          console.log(sess.email);
        })
      }
    }

    module.exports = loginController;
