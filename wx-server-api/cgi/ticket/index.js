const axios = require('axios')

module.exports = () => {
  return {
    async getTicket ({ accessToken }) {
      const { data } = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
        params: {
          access_token: accessToken,
          type: 'jsapi'
        }
      })

      return data
    }
  }
}
