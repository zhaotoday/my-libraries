const axios = require("axios");

module.exports = () => {
  return {
    async create({ accessToken, expire_seconds, action_name, scene_str }) {
      const res = await axios.request({
        method: "POST",
        url: "https://api.weixin.qq.com/cgi-bin/qrcode/create",
        params: { access_token: accessToken },
        data: {
          expire_seconds: expire_seconds || 2592000,
          action_name: action_name || "QR_STR_SCENE",
          action_info: { scene: { scene_str } },
        },
      });

      return res.data;
    },
  };
};
