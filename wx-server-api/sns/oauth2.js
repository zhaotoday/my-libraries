const axios = require('axios')

module.exports = config => {
  return {
    async getAccessToken () {
      const { data } = await axios.request({
        method: 'GET',
        url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
        params: {
          corpid: this.corpid,
          corpsecret: this.corpsecret
        }
      })

      return data
    }
  }
}
