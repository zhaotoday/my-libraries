import uc from './apis/uc'

const Bridge = window.Bridge

export default {
  hasBridge () {
    return !!Bridge
  },

  require (api) {
    return this.hasBridge()
      ? ({
        uc: Bridge.require('sdp.uc')
      })[api]
      : ({
        uc
      })[api]
  }
}
