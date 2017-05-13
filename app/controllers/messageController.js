var messageController = {
  index: function(req, res) {
    res.render('message/index', {
      title: 'Message',
      message: 'Message Pages',
      actMessage: 'active',
      breadcrumb: 'Message'
    })
  }
}

module.exports = messageController;
