var messageController = {
  index: function(req, res) {
    res.render('message', {
      title: 'Message',
      message: 'Message Pages',
      actMessage: 'active',
      breadcrumb: 'Message'
    })
  }
}

module.exports = messageController;
