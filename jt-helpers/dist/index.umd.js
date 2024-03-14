!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.helpers=e()}(this,function(){"use strict";(function(t){function i(t,e,r,n){var o,i,a,u,e=e&&e.prototype instanceof f?e:f,e=Object.create(e.prototype),n=new s(n||[]);return e._invoke=(o=t,i=r,a=n,u=d,function(t,e){if(u===g)throw new Error("Generator is already running");if(u===v){if("throw"===t)throw e;return l()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(n===y){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=y,t(e,r),"throw"===r.method))return w;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}n=c(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,w;n=n.arg;if(!n)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w;{if(!n.done)return n;r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=y)}r.delegate=null;return w}(r,a);if(r){if(r===w)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===d)throw u=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=g;r=c(o,i,a);if("normal"===r.type){if(u=a.done?v:m,r.arg!==w)return{value:r.arg,done:a.done}}else"throw"===r.type&&(u=v,a.method="throw",a.arg=r.arg)}}),e}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function f(){}function e(){}function r(){}function n(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function a(a){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){t=c(a[t],a,r);if("throw"===t.type)o(t.arg);else{var i=t.arg;if((r=i.value)&&"object"==typeof r&&b.call(r,"__await"))return Promise.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)});Promise.resolve(r).then(function(t){i.value=t,n(i)},o)}}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function o(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function u(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function s(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(o,this),this.reset(!0)}function h(e){if(e){var r,t=e[O];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(b.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t}).next=t}return{next:l}}function l(){return{value:y,done:!0}}var p,y,d,m,g,v,w,x,L,b,E,O,_,N,P;p=function(){return this}()||Function("return this")(),L=Object.prototype,b=L.hasOwnProperty,E="function"==typeof Symbol?Symbol:{},O=E.iterator||"@@iterator",_=E.asyncIterator||"@@asyncIterator",N=E.toStringTag||"@@toStringTag",(P=p.regeneratorRuntime)?t.exports=P:((P=p.regeneratorRuntime=t.exports).wrap=i,d="suspendedStart",m="suspendedYield",g="executing",v="completed",w={},(E={})[O]=function(){return this},(p=(p=Object.getPrototypeOf)&&p(p(h([]))))&&p!==L&&b.call(p,O)&&(E=p),x=r.prototype=f.prototype=Object.create(E),(e.prototype=x.constructor=r).constructor=e,r[N]=e.displayName="GeneratorFunction",P.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===e||"GeneratorFunction"===(t.displayName||t.name))},P.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,r):(t.__proto__=r,N in t||(t[N]="GeneratorFunction")),t.prototype=Object.create(x),t},P.awrap=function(t){return{__await:t}},n(a.prototype),a.prototype[_]=function(){return this},P.AsyncIterator=a,P.async=function(t,e,r,n){var o=new a(i(t,e,r,n));return P.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},n(x),x[N]="Generator",x[O]=function(){return this},x.toString=function(){return"[object Generator]"},P.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},P.values=h,s.prototype={constructor:s,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(u),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=y),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),u=b.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),u(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,u(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=y),w}})})(t={exports:{}});var t=t.exports,e=function(){return this}()||Function("return this")(),r=e.regeneratorRuntime&&0<=Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime"),n=r&&e.regeneratorRuntime;e.regeneratorRuntime=void 0;if(r)e.regeneratorRuntime=n;else try{delete e.regeneratorRuntime}catch(t){e.regeneratorRuntime=void 0}function c(t){return function(){var u=t.apply(this,arguments);return new Promise(function(i,a){return function e(t,r){try{var n=u[t](r),o=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});i(o)}("next")})}}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var f=t;return{to:function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t,null]})},isEmpty:function(t){return null==t||""===t.trim()},keyMirror:function(t){var e={},r=void 0;for(r in t)t.hasOwnProperty(r)&&(e[r]=r);return e},loadScript:function(t){var e=new window.XMLHttpRequest;e.open("GET",t,!0),e.send(null)},sleep:function(e){return new Promise(function(t){setTimeout(t,e)})},intercept:function(n){var e,o=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=t.beforeCall,a=t.req,u=t.res;return e=c(f.mark(function t(e){var r;return f.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a?a(e):e,t.t0=i,t.t0)return t.next=5,i(r);t.next=5;break;case 5:return t.abrupt("return",u?u(n(r)):n(r));case 6:case"end":return t.stop()}},t,o)})),function(t){return e.apply(this,arguments)}},getItem:function(t,e,r){return t&&t.length&&t.find(function(t){return t[e]===r})||{}},encryptPhoneNumber:function(t){return t?t.substring(0,3)+"****"+t.substring(7,11):""},deepCopy:function(t){return JSON.parse(JSON.stringify(t))},formatNumber:function(t){return parseFloat((t||0).toFixed(1<arguments.length&&void 0!==arguments[1]?arguments[1]:2))},toLowerCamelCase:function(t){return t.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()})},formatHtml:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").replace('style=""',"").replace(/\<img/gi,'<img style="max-width: 100%; height: auto" ').replace(/\<iframe/gi,'<iframe style="width: 100%; min-height: 200px" ')},page:function(t,e){for(var r=t.length,n=[],o=Math.ceil(r/e),i=0;i<o;){var a=t.slice(i*e,i*e+(e<=r-i*e?e:r-i*e));n.push(a),i++}return n},addArrayItem:function(t,e){return[].concat(o(t),[e])},deleteArrayItem:function(t,e){e=t.indexOf(e),t=[].concat(o(t));return-1!==e&&t.splice(e,1),t},download:function(t){var e=document.createElement("iframe");e.src=t,e.style.display="none",document.body.appendChild(e)}}});
//# sourceMappingURL=index.umd.js.map
