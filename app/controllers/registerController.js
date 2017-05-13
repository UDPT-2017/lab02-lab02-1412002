var registerController = {
  index: function(req, res) {
    res.render('users/register', {
      title: 'Register',
      message: "register page",
      actUsers: 'active',
      breadcrumb: 'User'
    })
  }
}
module.exports = registerController;
