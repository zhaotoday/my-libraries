export default {
  promisify (fn, options) {
    return new Promise((resolve, reject) => {
      wx[fn]({
        ...options,
        success: resolve,
        fail: reject
      })
    })
  }
}
