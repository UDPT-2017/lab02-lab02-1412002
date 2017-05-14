var Account = require('../models/addAccount');

var addAccountController = {
    create: function(req, res) {
      var input = req.body;
      Account.addAccount(input, function(err) {
          if (err) {
            res.render('users/addAccount', {
              title: "Add Account Failed",
              message: "Home field was wrong. Please sign up again!"
            });
          } else {
            res.render('users/addAccount', {
              title: "Add Account Success",
              message: "Your account have created. Go to Homepage in 3 seconds!",
            });
          }
        })
      }
    }

    module.exports = addAccountController;
