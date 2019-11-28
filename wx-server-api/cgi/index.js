module.exports = config => ({
  ...require('./base')(config),
  message: {
    subscribe: require('./message/subscribe')(config),
    template: require('./message/template')(config),
    wxopen: {
      template: require('./message/wxopen/template')(config)
    }
  },
  ticket: require('./ticket')(config),
  user: require('./user')(config)
})
