module.exports = config => ({
  ...require('./base')(config),
  message: {
    wxopen: {
      template: require('./message/wxopen/template')(config)
    }
  }
})
