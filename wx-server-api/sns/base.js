const axios = require('axios')

module.exports = config => {
  return {
    async getUserInfo ({ accessToken, openId }) {
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/sns/userinfo',
        params: {
          access_token: accessToken,
          openid: openId,
          lang: 'zh_CN'
        }
      })

      return data
    },
    async codeToSession ({ code }) {
      const { appId, secret } = config
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/sns/jscode2session',
        params: {
          appid: appId,
          secret: secret,
          js_code: code,
          grant_type: 'authorization_code'
        }
      })

      return data
    }
  }
}
