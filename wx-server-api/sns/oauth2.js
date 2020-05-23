const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken ({ type, code }) {
      const { appId, secret } = (type === 'App' ? config.app : config.oa)
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
