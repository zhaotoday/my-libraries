const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken ({ code }) {
      const { APP_ID, SECRET } = config
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        params: {
          appid: APP_ID,
          secret: SECRET,
          code,
          grant_type: 'authorization_code'
        }
      })

      return data
    }
  }
}
