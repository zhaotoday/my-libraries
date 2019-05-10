module.exports = config => ({
  ...require('./base')(config),
  oauth2: require('./oauth2')(config)
})
