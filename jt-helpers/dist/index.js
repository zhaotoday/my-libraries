"use strict";var index={isEmpty:function(n){return null==n||""===n.trim()},keyMirror:function(n){var e={},r=void 0;for(r in n)n.hasOwnProperty(r)&&(e[r]=r);return e},loadScript:function(n){var e=new window.XMLHttpRequest;e.open("GET",n,!0),e.send(null)},sleep:function(e){return new Promise(function(n){setTimeout(n,e)})}};module.exports=index;
//# sourceMappingURL=index.js.map
