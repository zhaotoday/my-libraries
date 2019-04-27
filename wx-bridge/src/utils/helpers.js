export default {
  promisify (fn, options) {
    return new Promise((resolve, reject) => {
      wx[fn](Object.assign({}, options, {
        success: resolve,
        fail: reject
      }))
    })
  },
  qy: {
    promisify (fn, options) {
      return new Promise((resolve, reject) => {
        wx.qy[fn](Object.assign({}, options, {
          success: resolve,
          fail: reject
        }))
      })
    }
  }
}
