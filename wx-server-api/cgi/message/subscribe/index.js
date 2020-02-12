const axios = require('axios')

module.exports = () => {
  return {
    async send (
      {
        accessToken,
        touser,
        template_id,
        page = '',
        data
      }
    ) {
      const res = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send',
        params: { access_token: accessToken },
        data: {
          touser,
          template_id,
          page,
          data
        }
      })

      return res.data
    }
  }
}
