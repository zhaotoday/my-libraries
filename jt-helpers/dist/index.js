"use strict";function createCommonjsModule(t,r){return t(r={exports:{}},r.exports),r.exports}var runtime=createCommonjsModule(function(t){function i(t,r,e,n){var o,i,a,u,r=r&&r.prototype instanceof s?r:s,r=Object.create(r.prototype),n=new f(n||[]);return r._invoke=(o=t,i=e,a=n,u=m,function(t,r){if(u===g)throw new Error("Generator is already running");if(u===v){if("throw"===t)throw r;return l()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=y,t(r,e),"throw"===e.method))return w;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var n=c(n,r.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,w;n=n.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w;{if(!n.done)return n;e[r.resultName]=n.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y)}e.delegate=null;return w}(e,a);if(n){if(n===w)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===m)throw u=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=g;n=c(o,i,a);if("normal"===n.type){if(u=a.done?v:d,n.arg!==w)return{value:n.arg,done:a.done}}else"throw"===n.type&&(u=v,a.method="throw",a.arg=n.arg)}}),r}function c(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function s(){}function r(){}function e(){}function n(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function a(a){var r;this._invoke=function(e,n){function t(){return new Promise(function(t,r){!function r(t,e,n,o){t=c(a[t],a,e);if("throw"!==t.type){var i=t.arg;return(e=i.value)&&"object"==typeof e&&b.call(e,"__await")?Promise.resolve(e.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):Promise.resolve(e).then(function(t){i.value=t,n(i)},o)}o(t.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function o(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function u(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(o,this),this.reset(!0)}function h(r){if(r){var t=r[O];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,t=function t(){for(;++e<r.length;)if(b.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=y,t.done=!0,t};return t.next=t}}return{next:l}}function l(){return{value:y,done:!0}}var p,y,m,d,g,v,w,x,L,b,E,O,R,_,j;p=function(){return this}()||Function("return this")(),L=Object.prototype,b=L.hasOwnProperty,E="function"==typeof Symbol?Symbol:{},O=E.iterator||"@@iterator",R=E.asyncIterator||"@@asyncIterator",_=E.toStringTag||"@@toStringTag",(j=p.regeneratorRuntime)?t.exports=j:((j=p.regeneratorRuntime=t.exports).wrap=i,m="suspendedStart",d="suspendedYield",g="executing",v="completed",w={},(E={})[O]=function(){return this},(p=(p=Object.getPrototypeOf)&&p(p(h([]))))&&p!==L&&b.call(p,O)&&(E=p),x=e.prototype=s.prototype=Object.create(E),(r.prototype=x.constructor=e).constructor=r,e[_]=r.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===r||"GeneratorFunction"===(t.displayName||t.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,e):(t.__proto__=e,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(x),t},j.awrap=function(t){return{__await:t}},n(a.prototype),a.prototype[R]=function(){return this},j.AsyncIterator=a,j.async=function(t,r,e,n){var o=new a(i(t,r,e,n));return j.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},n(x),x[_]="Generator",x[O]=function(){return this},x.toString=function(){return"[object Generator]"},j.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},j.values=h,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(u),!t)for(var r in this)"t"===r.charAt(0)&&b.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=y),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),u=b.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),w},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),u(e),w}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n,o=e.completion;return"throw"===o.type&&(n=o.arg,u(e)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:h(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=y),w}})}),g=function(){return this}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&0<=Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime"),oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=void 0;var runtimeModule=runtime;if(hadRuntime)g.regeneratorRuntime=oldRuntime;else try{delete g.regeneratorRuntime}catch(t){g.regeneratorRuntime=void 0}var regenerator=runtimeModule,asyncToGenerator=function(t){return function(){var u=t.apply(this,arguments);return new Promise(function(i,a){return function r(t,e){try{var n=u[t](e),o=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});i(o)}("next")})}},toConsumableArray=function(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)},index={isEmpty:function(t){return null==t||""===t.trim()},keyMirror:function(t){var r={},e=void 0;for(e in t)t.hasOwnProperty(e)&&(r[e]=e);return r},loadScript:function(t){var r=new window.XMLHttpRequest;r.open("GET",t,!0),r.send(null)},sleep:function(r){return new Promise(function(t){setTimeout(t,r)})},intercept:function(n){var r,o=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=t.beforeCall,a=t.req,u=t.res;return r=asyncToGenerator(regenerator.mark(function t(r){var e;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a?a(r):r,t.t0=i,t.t0)return t.next=5,i(e);t.next=5;break;case 5:return t.abrupt("return",u?u(n(e)):n(e));case 6:case"end":return t.stop()}},t,o)})),function(t){return r.apply(this,arguments)}},getItem:function(t,r,e){return t&&t.length&&t.find(function(t){return t[r]===e})||{}},encryptPhoneNumber:function(t){return t?t.substring(0,3)+"****"+t.substring(7,11):""},deepCopy:function(t){return JSON.parse(JSON.stringify(t))},formatNumber:function(t){return parseFloat((t||0).toFixed(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2))},toLowerCamelCase:function(t){return t.replace(/-([a-z])/g,function(t,r){return r.toUpperCase()})},formatHtml:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").replace(/\<img/gi,'<img style="max-width: 100%; height: auto" ').replace(/\<iframe/gi,'<iframe style="width: 100%; min-height: 200px" ')},page:function(t,r){for(var e=t.length,n=[],o=Math.ceil(e/r),i=0;i<o;){var a=t.slice(i*r,i*r+(r<=e-i*r?r:e-i*r));n.push(a),i++}return n},addArrayItem:function(t,r){return[].concat(toConsumableArray(t),[r])},deleteArrayItem:function(t,r){r=t.indexOf(r),t=[].concat(toConsumableArray(t));return-1!==r&&t.splice(r,1),t},download:function(t){var r=document.createElement("iframe");r.src=t,r.style.display="none",document.body.appendChild(r)}};module.exports=index;
//# sourceMappingURL=index.js.map
