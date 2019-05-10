const axios = require('axios')

export default config => {
  return {
    async getUserInfo ({ code }) {
      const oauth2 = require('./oauth2')(config)
      const { access_token, openid } = oauth2.getAccessToken({ code })

      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/sns/userinfo',
        params: { access_token, openid, lang: 'zh_CN' }
      })

      return data
    }
  }
}
