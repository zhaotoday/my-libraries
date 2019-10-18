// 参考：https://segmentfault.com/a/1190000009549288

const crypto = require('crypto')

function sha1 (str) {
  let shasum = crypto.createHash('sha1')
  shasum.update(str)
  str = shasum.digest('hex')
  return str
}

function createTimestamp () {
  return parseInt(new Date().getTime() / 1000) + ''
}

function createNonceStr () {
  return Math.random().toString(36).substr(2, 15)
}

function raw (args) {
  var keys = Object.keys(args)
  keys = keys.sort()
  var newArgs = {}
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key]
  })

  var string = ''
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k]
  }
  string = string.substr(1)
  return string
}

module.exports = ({ appid, jsapi_ticket, url }) => {
  var ret = {
    jsapi_ticket: jsapi_ticket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: url
  }
  var string = raw(ret)
  ret.signature = sha1(string)
  ret.appId = appid
  return ret
}
