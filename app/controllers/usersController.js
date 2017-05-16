var userController = {
  index: function(req, res) {
    sess=req.session,

    res.render('users/index', {
      title: 'Message',
      message: 'Users Pages',
      actUsers: 'active',
      breadcrumb: 'User',
      logged:sess.logged,
      email: sess.email,
    })
  }
}

module.exports = userController;
