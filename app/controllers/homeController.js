var indexController = {
  index: function(req, res) {
    sess=req.session;
    if (sess.user) {
      res.render('home', {
        title: 'Home',
        message: 'You are logged!',
        actHome: 'active',
        breadcrumb: 'Home',
        logged: true,
        email: sess.user.username,
      })
    } else {
      res.render('home', {
        title: 'home',
        message: 'Please login or signup to continue!',
        actHome: 'active',
        breadcrumb: 'home',
        logged: false,
      })
    }
  }
}

module.exports = indexController;
