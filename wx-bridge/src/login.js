export default options => {
  return new Promise((resolve, reject) => {
    wx.login({
      ...options,
      success: resolve,
      fail: reject
    })
  })
}
