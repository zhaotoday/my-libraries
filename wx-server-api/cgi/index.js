module.exports = config => ({
  ...require('./base')(config),
  message: {
    template: require('./message/template/index')(config),
    wxopen: {
      template: require('./message/wxopen/template')(config)
    }
  }
})
