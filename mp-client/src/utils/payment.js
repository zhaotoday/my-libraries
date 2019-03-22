import md5 from 'MD5'

export default {
  sign (params) {
    const querystring = Object.keys(params)
      .filter(key => !!params[key] && key !== 'key')
      .sort()
      .map(key => `${key}=${params[key]}`)
      .join('&') + '&key=' + params.key
    return md5(querystring).toUpperCase()
  }
}
