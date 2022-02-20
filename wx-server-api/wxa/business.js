const axios = require("axios");

module.exports = () => {
  return {
    async getUserPhoneNumber({ accessToken }) {
      const { data } = await axios.request({
        method: "POST",
        url: "https://api.weixin.qq.com/wxa/business/getuserphonenumber",
        params: { access_token: accessToken },
      });

      return data;
    },
  };
};
