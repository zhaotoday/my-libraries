const axios = require('axios')

module.exports = () => {
  return {
    async send (
      {
        accessToken,
        touser,
        template_id,
        page,
        form_id,
        data,
        emphasis_keyword
      }
    ) {
      const res = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send',
        params: { access_token: accessToken },
        data: {
          touser,
          template_id,
          page,
          form_id,
          data,
          emphasis_keyword
        }
      })

      return res.data
    }
  }
}
