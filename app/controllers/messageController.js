var messageController = {
  index: function(req, res) {
    sess=req.session,
    res.render('message/index', {
      title: 'Message',
      message: 'Message Pages',
      actMessage: 'active',
      breadcrumb: 'Message',
      logged:sess.logged,
      email: sess.email,
    })
  }
}

module.exports = messageController;
