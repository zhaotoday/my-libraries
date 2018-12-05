export default {
  promisify (fn, options) {
    return new Promise((resolve, reject) => {
      wx[fn](Object.assign({}, options, {
        success: resolve,
        fail: reject
      }))
    })
  }
}