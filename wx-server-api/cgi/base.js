const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken () {
      const { appId, secret } = config.MP || config.OA
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/cgi-bin/token',
        params: {
          grant_type: 'client_credential',
          appid: appId,
          secret
        }
      })

      return data
    }
  }
}
