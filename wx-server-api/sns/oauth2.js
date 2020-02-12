const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken ({ code }) {
      const { appId, secret } = config.oa
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        params: {
          appid: appId,
          secret,
          code,
          grant_type: 'authorization_code'
        }
      })

      return data
    }
  }
}
