"use strict";function __$styleInject(e,t){if("undefined"==typeof document)return t;e=e||"";var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");return o.type="text/css",n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),t}var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),SomeModule=function(){function e(){classCallCheck(this,e)}return createClass(e,[{key:"someFunction",value:function(){console.log("Something.")}}]),e}();module.exports=SomeModule;
//# sourceMappingURL=index.js.map
