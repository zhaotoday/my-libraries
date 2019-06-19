const axios = require('axios')

module.exports = config => {
  return {
    async getWXACodeUnLimit (
      {
        scene,
        page,
        width = 430,
        auto_color = false,
        line_color = {
          'r': 0,
          'g': 0,
          'b': 0
        },
        is_hyaline = false
      } = {}
    ) {
      const cgi = require('../cgi/base')(config)
      const { access_token } = await cgi.getAccessToken()

      const { data } = await axios.request({
        method: 'POST',
        responseType: 'arraybuffer',
        url: `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`,
        data: {
          scene,
          page,
          width,
          auto_color,
          line_color,
          is_hyaline
        }
      })

      return data
    }
  }
}
