var registerController = {
  index: function(req, res) {
    sess:req.session,
    res.render('users/register', {
      title: 'Register',
      message: "register page",
      actUsers: 'active',
      breadcrumb: 'User'
    })
  }
}

module.exports = registerController;
