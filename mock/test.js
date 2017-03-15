module.exports = {
  api: '/api/mock/banner',
  response: function (req, res) {
    res.json({
      success: true,
      data: {
        name: 'test',
        logo: '1'
      }
    })
  }
}
