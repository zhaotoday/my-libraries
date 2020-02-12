const axios = require('axios')

module.exports = config => {
  return {
    async send (
      {
        accessToken,
        touser,
        template_id,
        url = '',
        topcolor = '#FF0000',
        data
      }
    ) {
      const res = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/message/template/send',
        params: { access_token: accessToken },
        data: {
          touser,
          template_id,
          url,
          topcolor,
          data
        }
      })

      return res.data
    }
  }
}
