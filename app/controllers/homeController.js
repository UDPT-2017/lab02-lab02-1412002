var indexController = {
  index: function(req, res) {
    sess=req.session,
    res.render('home/index', {
      title: 'iSend',
      message: 'Index page',
      actHome: 'active',
      breadcrumb: 'Home',
      logged:sess.logged,
      email: sess.email,
    })
  }
}

module.exports = indexController;
