const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken () {
      const { CORP_ID, SECRET } = config.CORP
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
        params: {
          corpid: CORP_ID,
          corpsecret: SECRET
        }
      })

      return data
    },
    async convertToUserId ({ openId }) {
      const { access_token } = await this.getAccessToken()
      const { data } = await axios.request({
        method: 'POST',
        url: 'https://qyapi.weixin.qq.com/cgi-bin/user/convert_to_userid',
        params: { access_token },
        data: { openid: openId }
      })

      return data
    },
    async getUserInfo ({ openId }) {
      const { access_token } = await this.getAccessToken()
      const { userid } = await this.convertToUserId({ openId })
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://qyapi.weixin.qq.com/cgi-bin/user/get',
        params: { access_token, userid }
      })

      return data
    }
  }
}
