var userController = {
  index: function(req, res) {
    sess=req.session;
    if (sess.user) {
      res.render('users', {
        title: 'User',
        message: 'User Pages',
        actUsers: 'active',
        breadcrumb: 'User',
        logged: true,
        email: sess.user.username,
      })
    } else {
      res.render('users', {
        title: 'User',
        message: 'Please login or signup to continue!',
        actUsers: 'active',
        breadcrumb: 'User',
        logged: false,
      })
    }
  }
}

module.exports = userController;
