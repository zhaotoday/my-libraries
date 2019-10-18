module.exports = config => ({
  ...require('./base')(config),
  message: {
    template: require('./message/template')(config),
    wxopen: {
      template: require('./message/wxopen/template')(config)
    }
  },
  ticket: require('./ticket')(config)
})
