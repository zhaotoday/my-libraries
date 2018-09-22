export default options => {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      ...options,
      success: resolve,
      fail: reject
    })
  })
}
