const querystring = require('querystring')
const crypto = require('crypto')

module.exports = config => {
  return {
    signature (args = {}) {
      const { secretId, secretKey } = config

      // 确定签名的当前时间和失效时间
      const current = parseInt((new Date()).getTime() / 1000)
      // 签名有效期：1天
      const expired = current + 86400

      // 计算签名
      const original = querystring.stringify({
        secretId: secretId,
        currentTimeStamp: current,
        expireTime: expired,
        random: Math.round(Math.random() * Math.pow(2, 32)),
        ...args
      })
      const originalBuffer = new Buffer(original, 'utf8')

      const hmac = crypto.createHmac('sha1', secretKey)
      const hmac_buffer = hmac.update(originalBuffer).digest()

      return Buffer.concat([hmac_buffer, originalBuffer]).toString('base64')
    }
  }
}
