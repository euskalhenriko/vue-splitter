!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSplitter=t():e.VueSplitter=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{margin:{type:Number,default:10}},data:function(){return{active:!1,percent:50,hasMoved:!1}},computed:{userSelect:function(){return this.active?"none":""},cursor:function(){return this.active?"ew-resize":""}},methods:{onClick:function(){this.hasMoved||(this.percent=50,this.$emit("resize"))},onDown:function(e){this.active=!0,this.hasMoved=!1},onUp:function(){this.active=!1},onMove:function(e){if(this.active){for(var t=0,n=e.currentTarget;n;)t+=n.offsetLeft,n=n.offsetParent;var r=Math.floor((e.pageX-t)/e.currentTarget.offsetWidth*1e4)/100;r>this.margin&&r<100-this.margin&&(this.percent=r),this.$emit("resize"),this.hasMoved=!0}},onMouseMove:function(e){0!==e.buttons&&0!==e.which||(this.active=!1),this.onMove(e)}}}},function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var a=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];a[e]=function(){return t}})}return{esModule:o,exports:i,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-splitter",style:{cursor:e.cursor,userSelect:e.userSelect},on:{mouseup:e.onUp,mousemove:e.onMouseMove,touchmove:e.onMove,touchend:e.onUp}},[n("div",{staticClass:"left-pane splitter-pane",style:{width:e.percent+"%"}},[e._t("left-pane")],2),e._v(" "),n("div",{staticClass:"splitter",class:{active:e.active},on:{mousedown:e.onDown,click:e.onClick,touchstart:function(t){t.preventDefault(),e.onDown(t)}}}),e._v(" "),n("div",{staticClass:"right-pane splitter-pane",style:{width:100-e.percent+"%"}},[e._t("right-pane")],2)])},staticRenderFns:[]}},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(7)("1eb1e764",r,!0)},function(e,t,n){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){"use strict";e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],u=i[1],a=i[2],c=i[3],p={id:e+":"+o,css:u,media:a,sourceMap:c};r[s]?r[s].parts.push(p):n.push(r[s]={id:s,parts:[p]})}return n}},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".vue-splitter{display:flex}.vue-splitter,.vue-splitter .splitter-pane{height:inherit}.vue-splitter .splitter{width:5px;background-color:#9e9e9e;cursor:ew-resize}",""])},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=p[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));p[n.id]={id:n.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],u=i[1],a=i[2],c=i[3],p={css:u,media:a,sourceMap:c};r[s]?(p.id=e+":"+r[s].parts.length,r[s].parts.push(p)):(p.id=e+":0",n.push(r[s]={id:s,parts:[p]}))}return n}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),o=null!=r;if(o&&h)return v;if(m){var s=d++;r=l||(l=i()),t=u.bind(null,r,s,!1),n=u.bind(null,r,s,!0)}else r=r||i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return o||t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(5),p={},f=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=o(e,t);return r(i),function(t){for(var n=[],s=0;s<i.length;s++){var u=i[s],a=p[u.id];a.refs--,n.push(a)}t?(i=o(e,t),r(i)):i=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete p[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){n(3);var r=n(1)(n(0),n(2),null,null);e.exports=r.exports}])});