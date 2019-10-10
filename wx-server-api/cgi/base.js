const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken () {
      const { APP_ID, SECRET } = config.MP || config.OA
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/cgi-bin/token',
        params: {
          grant_type: 'client_credential',
          appid: APP_ID,
          secret: SECRET
        }
      })

      return data
    }
  }
}
