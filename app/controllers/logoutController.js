var logoutController = {
  index: function(req, res) {
    sess = req.session;
    sess.email = '0';
    sess.logged = false;
    res.render('users/logout', {
      title: 'Logout Success',
      message: 'Logout Success',
      logged: sess.logged,
      email: sess.email,
    })
  }
}
module.exports = logoutController;
