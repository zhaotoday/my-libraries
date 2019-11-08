const axios = require('axios')

module.exports = config => {
  return {
    async getInfo ({ accessToken, openId }) {
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/cgi-bin/user/info',
        params: {
          access_token: accessToken,
          openid: openId,
          lang: 'zh_CN'
        }
      })

      return data
    }
  }
}
