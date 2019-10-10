const axios = require('axios')

module.exports = config => {
  return {
    async send (
      {
        touser,
        template_id,
        url = '',
        topcolor = '#FF0000',
        data
      }
    ) {
      const cgi = require('../../../base')(config)
      const { access_token } = await cgi.getAccessToken()
      const res = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/message/template/send',
        params: { access_token },
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
