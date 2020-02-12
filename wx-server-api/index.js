module.exports = config => ({
  utils: require('./utils')(config),
  sns: require('./sns')(config),
  wxa: require('./wxa')(config),
  cgi: require('./cgi')(config)
})
