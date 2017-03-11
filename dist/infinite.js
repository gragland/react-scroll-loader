!function(i,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.Infinite=e(require("react")):i.Infinite=e(i.React)}(this,function(i){return function(i){function e(n){if(t[n])return t[n].exports;var I=t[n]={exports:{},id:n,loaded:!1};return i[n].call(I.exports,I,I.exports,e),I.loaded=!0,I.exports}var t={};return e.m=i,e.c=t,e.p="",e(0)}([function(i,e,t){"use strict";function n(i){return i&&i.__esModule?i:{default:i}}function I(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function o(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?i:e}function r(i,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)}function l(i,e){j!==!1&&(e?console.log("[INFINITE] "+i,e):console.log("[INFINITE] "+i))}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function i(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),u=t(1),a=n(u),d=t(2),m=n(d),p=t(15),f=n(p),j=!0,b=function(i){function e(i){I(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return t.addScrollListener=t.addScrollListener.bind(t),t.checkScroll=t.checkScroll.bind(t),t.scrollListenerThrottled=(0,m.default)(t.checkScroll.bind(t),500),t}return r(e,i),c(e,[{key:"componentDidMount",value:function(){var i=this;this.addScrollListener(),setTimeout(function(){return i.checkScroll()},50)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListenerThrottled)}},{key:"addScrollListener",value:function(){window.addEventListener("scroll",this.scrollListenerThrottled)}},{key:"componentDidUpdate",value:function(i){this.checkScroll()}},{key:"checkScroll",value:function(i){var e=this.props,t=e.atEnd,n=e.requestHandler,I=50,o=document.body,r=document.documentElement,c=Math.max(o.scrollHeight,o.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight),u=window.innerHeight||document.documentElement.clientHeight,a=document.body.scrollTop||document.documentElement.scrollTop,d=a+u,m=c-d;l("Total height: "+c),l("Client height: "+u),l("Scroll top: "+a),l("Distance from bottom: "+m);var p=m<I;t?l("No more pages"):p&&(l("Requesting next page"),n())}},{key:"render",value:function(){var i=this.props,e=i.atEnd,t=i.children,n=i.loadingIcon,I={display:"block",width:"3em",margin:"2em auto 2em auto"};return a.default.createElement("div",null,!e&&n&&a.default.createElement("img",{src:n,style:I}),!e&&t&&a.default.createElement("span",null,t))}}]),e}(a.default.PureComponent);b.defaultProps={atEnd:!1,loadingIcon:f.default},b.propTypes={requestHandler:a.default.PropTypes.func,atEnd:a.default.PropTypes.bool,children:a.default.PropTypes.node},e.default=b},function(e,t){e.exports=i},function(i,e,t){function n(i,e,t){var n=!0,l=!0;if("function"!=typeof i)throw new TypeError(r);return o(t)&&(n="leading"in t?!!t.leading:n,l="trailing"in t?!!t.trailing:l),I(i,e,{leading:n,maxWait:e,trailing:l})}var I=t(3),o=t(4),r="Expected a function";i.exports=n},function(i,e,t){function n(i,e,t){function n(e){var t=y,n=M;return y=M=void 0,Y=e,Z=i.apply(n,t)}function a(i){return Y=i,S=setTimeout(p,e),h?n(i):Z}function d(i){var t=i-N,n=i-Y,I=e-t;return G?u(I,g-n):I}function m(i){var t=i-N,n=i-Y;return void 0===N||t>=e||t<0||G&&n>=g}function p(){var i=o();return m(i)?f(i):void(S=setTimeout(p,d(i)))}function f(i){return S=void 0,H&&y?n(i):(y=M=void 0,Z)}function j(){void 0!==S&&clearTimeout(S),Y=0,y=N=M=S=void 0}function b(){return void 0===S?Z:f(o())}function s(){var i=o(),t=m(i);if(y=arguments,M=this,N=i,t){if(void 0===S)return a(N);if(G)return S=setTimeout(p,e),n(N)}return void 0===S&&(S=setTimeout(p,e)),Z}var y,M,g,Z,S,N,Y=0,h=!1,G=!1,H=!0;if("function"!=typeof i)throw new TypeError(l);return e=r(e)||0,I(t)&&(h=!!t.leading,G="maxWait"in t,g=G?c(r(t.maxWait)||0,e):g,H="trailing"in t?!!t.trailing:H),s.cancel=j,s.flush=b,s}var I=t(4),o=t(5),r=t(8),l="Expected a function",c=Math.max,u=Math.min;i.exports=n},function(i,e){function t(i){var e=typeof i;return null!=i&&("object"==e||"function"==e)}i.exports=t},function(i,e,t){var n=t(6),I=function(){return n.Date.now()};i.exports=I},function(i,e,t){var n=t(7),I="object"==typeof self&&self&&self.Object===Object&&self,o=n||I||Function("return this")();i.exports=o},function(i,e){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;i.exports=t}).call(e,function(){return this}())},function(i,e,t){function n(i){if("number"==typeof i)return i;if(o(i))return r;if(I(i)){var e="function"==typeof i.valueOf?i.valueOf():i;i=I(e)?e+"":e}if("string"!=typeof i)return 0===i?i:+i;i=i.replace(l,"");var t=u.test(i);return t||a.test(i)?d(i.slice(2),t?2:8):c.test(i)?r:+i}var I=t(4),o=t(9),r=NaN,l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,d=parseInt;i.exports=n},function(i,e,t){function n(i){return"symbol"==typeof i||o(i)&&I(i)==r}var I=t(10),o=t(14),r="[object Symbol]";i.exports=n},function(i,e,t){function n(i){return null==i?void 0===i?c:l:u&&u in Object(i)?o(i):r(i)}var I=t(11),o=t(12),r=t(13),l="[object Null]",c="[object Undefined]",u=I?I.toStringTag:void 0;i.exports=n},function(i,e,t){var n=t(6),I=n.Symbol;i.exports=I},function(i,e,t){function n(i){var e=r.call(i,c),t=i[c];try{i[c]=void 0;var n=!0}catch(i){}var I=l.call(i);return n&&(e?i[c]=t:delete i[c]),I}var I=t(11),o=Object.prototype,r=o.hasOwnProperty,l=o.toString,c=I?I.toStringTag:void 0;i.exports=n},function(i,e){function t(i){return I.call(i)}var n=Object.prototype,I=n.toString;i.exports=t},function(i,e){function t(i){return null!=i&&"object"==typeof i}i.exports=t},function(i,e){i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtZGVmYXVsdCI+PHBhdGggZmlsbD0ibm9uZSIgY2xhc3M9ImJrIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzApIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTA1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjE2NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDkwIDY1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1OC42NiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1NC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0xNTAgNDUuOTggNjUpIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNTgzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMjQyNDI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIwIDQxLjM0IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC02MCAyNC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC44MzMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC45MTY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PC9zdmc+"}])});