const axios = require("axios");

module.exports = (config) => {
  return {
    async getAccessToken() {
      const { appId, secret } = config.mp || config.oa;
      const { data } = await axios.request({
        method: "GET",
        url: "https://api.weixin.qq.com/cgi-bin/token",
        params: {
          grant_type: "client_credential",
          appid: appId,
          secret,
        },
      });

      return data;
    },
    async showQrCode({ ticket }) {
      const { data } = await axios.request({
        method: "GET",
        url: "https://mp.weixin.qq.com/cgi-bin/showqrcode",
        params: {
          ticket,
        },
      });

      return data;
    },
  };
};
