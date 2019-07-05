const axios = require('axios')

module.exports = config => {
  return {
    async send (
      {
        touser,
        template_id,
        page,
        from_id,
        data,
        emphasis_keyword
      }
    ) {
      const cgi = require('../../../base')(config)
      const { access_token } = await cgi.getAccessToken()
      const res = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send',
        params: { access_token },
        data: {
          touser,
          template_id,
          page,
          from_id,
          data,
          emphasis_keyword
        }
      })

      return res.data
    }
  }
}
