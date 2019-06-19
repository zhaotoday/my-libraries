const axios = require('axios')

module.exports = config => {
  return {
    async getWXACodeUnLimit (
      {
        scene,
        page,
        width = 430,
        auto_color = false,
        line_coloris_hyaline = {
          'r': 0,
          'g': 0,
          'b': 0
        }
      }
    ) {
      const cgi = require('../cgi/base')(config)
      const { access_token } = await cgi.getAccessToken()

      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',
        params: {
          access_token,
          scene,
          page,
          width,
          auto_color,
          line_coloris_hyaline
        }
      })

      return data
    }
  }
}
