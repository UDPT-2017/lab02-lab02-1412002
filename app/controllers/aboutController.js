var aboutController = {
  index: function(req, res) {
    res.render('about', {
      title: 'Message',
      message: 'About Pages',
      actAbout: 'active',
      breadcrumb: 'About'
    })
  }
}

module.exports = aboutController;
