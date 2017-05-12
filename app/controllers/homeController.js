var indexController = {
  index: function(req, res) {
    res.render('index', {
      title: 'iSend',
      message: 'Index page',
      actHome: 'active',
      breadcrumb: 'Home'
    })
  }
}

module.exports = indexController;
