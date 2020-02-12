const WXBizDataCrypt = require('../lib/WXBizDataCrypt')

module.exports = config => {
  return {
    getDecryptedData ({ sessionKey, encryptedData, iv }) {
      return new WXBizDataCrypt(config.mp.appId, sessionKey).decryptData(
        encryptedData, iv)
    }
  }
}
