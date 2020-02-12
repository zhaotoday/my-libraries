const WXBizDataCrypt = require('../lib/WXBizDataCrypt')

module.exports = () => {
  return {
    getDecryptedData ({ sessionKey, encryptedData, iv }) {
      return new WXBizDataCrypt(this.appid, sessionKey).decryptData(
        encryptedData, iv)
    }
  }
}
