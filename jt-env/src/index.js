const ENVs = {
  DEV: 'DEV',
  TEST: 'TEST',
  BETA: 'BETA',
  PROD: 'PROD'
}

export default {
  _get () {
    const hostname = window.location.hostname

    switch (hostname) {
      case '127.0.0.1':
      case 'localhost':
        return ENVs.DEV
      default:
        if (/\.dev\.liruan\.cn$/.test(hostname)) {
          return ENVs.DEV
        }
        if (/\.test\.liruan\.cn$/.test(hostname)) {
          return ENVs.TEST
        }
        if (/\.beta\.liruan\.cn$/.test(hostname)) {
          return ENVs.BETA
        }
        if (/\.prod\.liruan\.cn$/.test(hostname)) {
          return ENVs.PROD
        }
        return ENVs.PROD
    }
  },
  isDev () {
    return this._get() === ENVs.DEV
  },
  isTest () {
    return this._get() === ENVs.TEST
  },
  isBeta () {
    return this._get() === ENVs.BETA
  },
  isProd () {
    return this._get() === ENVs.PROD
  }
}
