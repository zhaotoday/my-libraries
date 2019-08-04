"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var axios=_interopDefault(require("axios")),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),REST=function(){function e(){var n=this;classCallCheck(this,e),this.baseURL="",this.version="",this.path="",this.headers={};["GET","POST","PATCH","PUT","DELETE"].forEach(function(t){n[t]=function(e){return n.request(t,e)}})}return createClass(e,[{key:"request",value:function(){var e=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"GET",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.id,a=void 0===n?"":n,r=t.query,s=void 0===r?null:r,o=t.body,u=void 0===o?null:o,h=t.timeout,c=void 0===h?5e3:h,l=this.version?"/"+this.version+"/"+this.path:"/"+this.path;return a&&(l=l+"/"+a),s&&(l=""+l+this.toURL(s)),"undefined"!=typeof wx&&wx.request?new Promise(function(t,n){wx.request({url:e.baseURL+l,header:e.headers,method:i,data:u,success:function(e){"2"===(e.statusCode+"").charAt(0)?t(e):n(e)},fail:n})}):axios({baseURL:this.baseURL,headers:this.headers,method:i,timeout:c,url:l,data:u})}},{key:"toURL",value:function(t){return t&&Object.keys(t).length?"?"+Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&"):""}},{key:"addPath",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return this.path=this.path+"/"+e,this}},{key:"addHeaders",value:function(e){return Object.assign(this.headers,e),this}},{key:"replace",value:function(){var t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).forEach(function(e){t.path=t.path.replace(new RegExp("{"+e+"}","img"),n[e])}),this}}]),e}();module.exports=REST;
//# sourceMappingURL=index.js.map
