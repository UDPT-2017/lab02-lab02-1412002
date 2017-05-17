var logoutController = {
  index: function(req, res) {
    req.session.destroy();
    //sess = req.session;
    //sess.user = '0';
    //sess.user.logged = false;
    res.render('users/logout', {
      title: 'Logout Success',
      message: 'Logout Success',
      logged: false,
    //  email: sess.user.username,
    })
  }
}
module.exports = logoutController;
