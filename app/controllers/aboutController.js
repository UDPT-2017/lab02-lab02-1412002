var aboutController = {
  index: function(req, res) {
    sess = req.session;

    if (sess.user) {
      res.render('about', {
        title: 'Message',
        message: 'About Pages',
        actAbout: 'active',
        breadcrumb: 'About',
        logged: true,
        email: sess.user.username,
      })
    } else {
      res.render('about', {
        title: 'Message',
        message: 'About Pages',
        actAbout: 'active',
        breadcrumb: 'About',
        logged: false,
      })
    }

  }
}

module.exports = aboutController;
