var Account = require('../models/addAccount');

var addAccountController = {
    create: function(req, res) {
      sess=req.session,
      Account.addAccount(req.body, function(err) {
          if (err) {
            res.render('users/addAccount', {
              title: "Add Account Failed",
              message: "Home field was wrong. Please sign up again!",
              logged:sess.logged,
              email: sess.email,

            });
          } else {
            res.render('users/addAccount', {
              title: "Add Account Success",
              message: "Your account have created. Go to Homepage in 3 seconds!",
              logged:sess.logged,
              email: sess.email,
            });
          }
        })
      }
    }

    module.exports = addAccountController;
