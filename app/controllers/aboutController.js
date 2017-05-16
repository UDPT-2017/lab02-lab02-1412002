var aboutController = {
  index: function(req, res) {
    sess=req.session,

    res.render('about', {
      title: 'Message',
      message: 'About Pages',
      actAbout: 'active',
      breadcrumb: 'About',
      logged:sess.logged,
      email: sess.email,

    })
  }
}

module.exports = aboutController;
