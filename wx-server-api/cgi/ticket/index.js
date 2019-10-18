const axios = require('axios')

module.exports = config => {
  return {
    async getTicket () {
      const cgi = require('../base')(config)
      const { access_token } = await cgi.getAccessToken()
      const { data } = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
        params: {
          access_token,
          type: 'jsapi'
        }
      })

      return data
    }
  }
}
