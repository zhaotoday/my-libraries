module.exports = (config) => ({
  ...require("./base")(config),
  business: require("./business")(config),
});
