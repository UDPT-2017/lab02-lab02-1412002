var userController = {
  index: function(req, res) {
    res.render('users/index', {
      title: 'Message',
      message: 'Users Pages',
      actUsers: 'active',
      breadcrumb: 'User'
    })
  }
}

module.exports = userController;
