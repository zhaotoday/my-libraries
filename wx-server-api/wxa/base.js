const axios = require('axios')

module.exports = config => {
  return {
    async getWXACodeUnLimit (
      {
        accessToken,
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
      const { data } = await axios.request({
        method: 'POST',
        responseType: 'arraybuffer',
        url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',
        params: { access_token: accessToken },
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
    },
    async imgSecCheck ({ accessToken, media }) {
      const { data } = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/wxa/img_sec_check',
        params: { access_token: accessToken },
        data: { media }
      })

      return data
    },
    async msgSecCheck ({ accessToken, content }) {
      const { data } = await axios.request({
        method: 'POST',
        url: 'https://api.weixin.qq.com/wxa/msg_sec_check',
        params: { access_token: accessToken },
        data: { content }
      })

      return data
    }
  }
}
