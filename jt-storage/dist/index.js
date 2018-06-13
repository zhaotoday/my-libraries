"use strict";var localStorage=window.localStorage,index={name:"storage",set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(localStorage.getItem(e))||null},remove:function(e){localStorage.removeItem(e)}};module.exports=index;
//# sourceMappingURL=index.js.map
