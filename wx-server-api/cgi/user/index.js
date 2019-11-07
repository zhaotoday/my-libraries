const axios = require('axios')

module.exports = config => {
  return {
    async getInfo ({ code, openId }) {
      const sns = require('../../sns')(config)
      const { access_token } = await sns.oauth2.getAccessToken({ code })
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/cgi-bin/user/info',
        params: {
          access_token,
          openId,
          lang: 'zh_CN'
        }
      })

      return data
    }
  }
}
