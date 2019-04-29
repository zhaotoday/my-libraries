module.exports = config => ({
  corp: require('./corp')(config),
  sns: require('./sns')(config)
})
