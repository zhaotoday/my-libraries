export default options => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      ...options,
      success: resolve,
      fail: reject
    })
  })
}
