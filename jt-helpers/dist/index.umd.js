!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.helpers=r()}(this,function(){"use strict";var t,r=(function(N){!function(t){var c,r=Object.prototype,s=r.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",i=e.toStringTag||"@@toStringTag",a=t.regeneratorRuntime;if(a)N.exports=a;else{(a=t.regeneratorRuntime=N.exports).wrap=m;var h="suspendedStart",l="suspendedYield",p="executing",y="completed",v={},u={};u[o]=function(){return this};var f=Object.getPrototypeOf,d=f&&f(f(R([])));d&&d!==r&&s.call(d,o)&&(u=d);var g=E.prototype=x.prototype=Object.create(u);L.prototype=g.constructor=E,E.constructor=L,E[i]=L.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===L||"GeneratorFunction"===(r.displayName||r.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(g),t},a.awrap=function(t){return{__await:t}},b(O.prototype),O.prototype[n]=function(){return this},a.AsyncIterator=O,a.async=function(t,r,e,n){var o=new O(m(t,r,e,n));return a.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},b(g),g[i]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},a.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},a.values=R,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=c),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),u=s.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:R(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=c),v}}}function m(t,r,e,n){var i,a,u,c,o=r&&r.prototype instanceof x?r:x,s=Object.create(o.prototype),f=new k(n||[]);return s._invoke=(i=t,a=e,u=f,c=h,function(t,r){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw r;return G()}for(u.method=t,u.arg=r;;){var e=u.delegate;if(e){var n=_(e,u);if(n){if(n===v)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(c===h)throw c=y,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c=p;var o=w(i,a,u);if("normal"===o.type){if(c=u.done?y:l,o.arg===v)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c=y,u.method="throw",u.arg=o.arg)}}),s}function w(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function L(){}function E(){}function b(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function O(c){var r;this._invoke=function(e,n){function t(){return new Promise(function(t,r){!function r(t,e,n,o){var i=w(c[t],c,e);if("throw"!==i.type){var a=i.arg,u=a.value;return u&&"object"==typeof u&&s.call(u,"__await")?Promise.resolve(u.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):Promise.resolve(u).then(function(t){a.value=t,n(a)},o)}o(i.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function _(t,r){var e=t.iterator[r.method];if(e===c){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=c,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=w(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=c),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(r){if(r){var t=r[o];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,n=function t(){for(;++e<r.length;)if(s.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=c,t.done=!0,t};return n.next=n}}return{next:G}}function G(){return{value:c,done:!0}}}(function(){return this}()||Function("return this")())}(t={exports:{}},t.exports),t.exports),e=function(){return this}()||Function("return this")(),n=e.regeneratorRuntime&&0<=Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime"),o=n&&e.regeneratorRuntime;e.regeneratorRuntime=void 0;var i=r;if(n)e.regeneratorRuntime=o;else try{delete e.regeneratorRuntime}catch(t){e.regeneratorRuntime=void 0}var c=i;return{isEmpty:function(t){return null==t||""===t.trim()},keyMirror:function(t){var r={},e=void 0;for(e in t)t.hasOwnProperty(e)&&(r[e]=e);return r},loadScript:function(t){var r=new window.XMLHttpRequest;r.open("GET",t,!0),r.send(null)},sleep:function(r){return new Promise(function(t){setTimeout(t,r)})},intercept:function(n){var t,r,o=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.beforeCall,a=e.req,u=e.res;return t=c.mark(function t(r){var e;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a?a(r):r,t.t0=i,!t.t0){t.next=5;break}return t.next=5,i(e);case 5:return t.abrupt("return",u?u(n(e)):n(e));case 6:case"end":return t.stop()}},t,o)}),r=function(){var u=t.apply(this,arguments);return new Promise(function(i,a){return function r(t,e){try{var n=u[t](e),o=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});i(o)}("next")})},function(t){return r.apply(this,arguments)}}}});
//# sourceMappingURL=index.umd.js.map
