export default {
  encode (string) {
    return encodeURIComponent(string)
  },
  decode (string) {
    return decodeURIComponent(string)
  }
}
