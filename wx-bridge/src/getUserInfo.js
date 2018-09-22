export default options => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      ...options,
      success: resolve,
      fail: reject
    })
  })
}
