function gotoPin(t){var e=$(".wrapper .pin");e.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):U[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return N.call(t,function(t){return null!=t})}function u(t){return t.length>0?C.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[c(t)]?e:e+"px"}function p(t){var e,n;return k[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function h(t){return"children"in t?T.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?C(t):C(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)x(t.childNodes[n],e)}var w,E,C,$,j,P,S=[],T=S.slice,N=S.filter,O=window.document,k={},L={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,_=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],F=O.createElement("table"),I=O.createElement("tr"),H={tr:O.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:I,th:I,"*":O.createElement("div")},V=/complete|loaded|interactive/,B=/^[\w-]*$/,U={},J=U.toString,W={},X=O.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=X).appendChild(t),r=~W.qsa(i,e).indexOf(t),o&&X.removeChild(t),r},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var r,i,s;return q.test(t)&&(r=C(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(D,"<$1></$2>")),e===w&&(e=A.test(t)&&RegExp.$1),e in H||(e="*"),s=H[e],s.innerHTML=""+t,r=C.each(T.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(i=C(r),C.each(n,function(t,e){z.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return t=t||[],t.__proto__=C.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var r;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&A.test(t))r=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return C(n).find(t);r=W.qsa(O,t)}else{if(e(t))return C(O).ready(t);if(W.isZ(t))return t;if(Y(t))r=a(t);else if(i(t))r=[t],t=null;else if(A.test(t))r=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return C(n).find(t);r=W.qsa(O,t)}}return W.Z(r,t)},C=function(t,e){return W.init(t,e)},C.extend=function(t){var e,n=T.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},W.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],s=i||o?e.slice(1):e,a=B.test(s);return r(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:T.call(a&&!i?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=t,C.isFunction=e,C.isWindow=n,C.isArray=Y,C.isPlainObject=o,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},C.camelCase=j,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},C.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},C.grep=function(t,e){return N.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){U["[object "+e+"]"]=e.toLowerCase()}),C.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(T.apply(this,arguments))},ready:function(t){return V.test(O.readyState)&&O.body?t(C):O.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===w?T.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(N.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return C(P(this.concat(C(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?T.call(t):C(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return C(n)},has:function(t){return this.filter(function(){return i(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return S.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):C()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=C(t));n&&!(i?i.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(P(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return T.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return N.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=C(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=C(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)v(this,E,t[E]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?b(r):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=C(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[j(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return C.each(e,function(t,e){o[e]=i.style[j(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?s+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){$=[];var n=y(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||$.push(t)},this),$.length&&y(this,n+(n?" ":"")+$.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");$=y(this),g(this,t,e,$).split(/\s+/g).forEach(function(t){$=$.replace(l(t)," ")}),y(this,$.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=C(this),i=g(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,r.top+=parseFloat(C(e[0]).css("border-top-width"))||0,r.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!Z.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(i){var o,s=this[0];return i===w?n(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=C(this),s.css(t,g(this,i,e,s[t]()))})}}),R.forEach(function(e,n){var r=n%2;C.fn[e]=function(){var e,i,o=C.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=C.contains(O.documentElement,i);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return C(t).remove();i.insertBefore(t,e),a&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return C(t)[e](this),this}}),W.Z.prototype=C.fn,W.uniq=P,W.deserializeValue=b,C.zepto=W,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,o,s){if(n=r(n),n.ns)var a=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function s(t){return x[t]||y&&b[t]||t}function a(n,i,a,u,l,p,h){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var i=r(e);i.fn=a,i.sel=l,i.e in x&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=p;var d=p||a;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(s(i.e),i.proxy,o(i,h))})}function u(t,r,i,a,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,a).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each($,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)C.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,p=1,h=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,r){var i=2 in arguments&&h.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(h.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,$={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var s,c,p=this;return e&&!m(e)?(t.each(e,function(t,e){p.on(t,n,r,e,o)}),p):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=E),p.each(function(f,p){o&&(s=function(t){return u(p,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,p).get(0);return o&&o!==p?(r=t.extend(l(e),{currentTarget:o,liveFired:p}),(s||i).apply(o,[r].concat(h.call(arguments,1)))):void 0}),a(p,e,i,r,n,c||s)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(s,a){i=l(m(e)?t.Event(e):e),i._args=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function s(t,e,r,i){var o=r.context,s="success";r.success.call(o,t,s,e),i&&i.resolveWith(o,[t,s,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(s,e,r)}function a(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function h(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,g,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",C="text/html",$=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],p=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?s(r[0],h,e,n):a(null,u||"error",h,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(h,e)===!1?(p("abort"),h):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),p(i);var h=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(h="jsonp"),i.cache!==!1&&(e&&e.cache===!0||"script"!=h&&"jsonp"!=h)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==h)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),t.ajaxJSONP(i,u);var v,b=i.accepts[h],x={},w=function(t,e){x[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,C=i.xhr(),P=C.setRequestHeader;if(u&&u.promise(C),i.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",b||"*/*"),(b=i.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(b)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&w("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(g in i.headers)w(g,i.headers[g]);if(C.setRequestHeader=w,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=c,clearTimeout(v);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==E){h=h||l(i.mimeType||C.getResponseHeader("content-type")),e=C.responseText;try{"script"==h?(1,eval)(e):"xml"==h?e=C.responseXML:"json"==h&&(e=$.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?a(n,"parsererror",C,i,u):s(e,C,i,u)}else a(C.statusText||null,C.status?"error":"abort",C,i,u)}},o(C,i)===!1)return C.abort(),a(null,"abort",C,i,u),C;if(i.xhrFields)for(g in i.xhrFields)C[g]=i.xhrFields[g];var S="async"in i?i.async:!0;C.open(i.type,i.url,S,i.username,i.password);for(g in x)P.apply(C,x[g]);return i.timeout>0&&(v=setTimeout(function(){C.onreadystatechange=c,C.abort(),a(null,"timeout",C,i,u)},i.timeout)),C.send(i.data?i.data:null),C},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,s=e.split(/\s/),a=h(e,n,r),u=a.success;return s.length>1&&(a.url=s[0],i=s[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(a),this};var P=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(P(e)+"="+P(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){"use strict";function t(t,e){var n=[],r=this.options;return r.onProgress&&t&&r.onProgress.call(this,t,e,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(n.push(this.completed),this.errors.length&&n.push(this.errors),r.onComplete.apply(this,n)),this}var e="addEventListener"in new Image,n=function(t,e){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},e&&"object"==typeof e&&this.setOptions(e),this.addQueue(t),this.queue.length&&this.options.auto&&this.processQueue()};n.prototype.setOptions=function(t){var e,n=this.options;for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return this},n.prototype.addQueue=function(t){return this.queue=t.slice(),this},n.prototype.reset=function(){return this.completed=[],this.errors=[],this},n.prototype.addEvents=function(n,r,i){var o=this,s=this.options,a=function(){e?(this.removeEventListener("error",u),this.removeEventListener("abort",u),this.removeEventListener("load",c)):this.onerror=this.onabort=this.onload=null},u=function(){a.call(this),o.errors.push(r),s.onError&&s.onError.call(o,r),t.call(o,r),s.pipeline&&o.loadNext(i)},c=function(){a.call(this),o.completed.push(r),t.call(o,r,this),s.pipeline&&o.loadNext(i)};e?(n.addEventListener("error",u,!1),n.addEventListener("abort",u,!1),n.addEventListener("load",c,!1)):(n.onerror=n.onabort=u,n.onload=c)},n.prototype.load=function(t,e){var n=new Image;return this.addEvents(n,t,e),n.src=t,this},n.prototype.loadNext=function(t){return t++,this.queue[t]&&this.load(this.queue[t],t),this},n.prototype.processQueue=function(){var t=0,e=this.queue,n=e.length;if(this.reset(),this.options.pipeline)this.load(e[0],0);else for(;n>t;++t)this.load(e[t],t);return this},"function"==typeof define&&define.amd?define(function(){return n}):this.preLoader=n}.call(this),function(t,e){var n=t.documentElement,r="orientationchange"in window?"orientationchange":"resize",i=function(){var t=n.clientWidth,e=window.innerHeight;t&&(t/e>750/1116?n.style.fontSize=50*(e/558)+"px":n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(r,i,!1),i())}(document,window),function(){"use strict";var t=function(){this.curPage=0,this.selectedColor=""};t.prototype={init:function(){var t=this;$(".loading-wrap").addClass("show");var e="",n=[e+"/images/logo.png",e+"/images/bg-1.png",e+"/images/btn-get.png",e+"/images/btn-getkeycode.png",e+"/images/btn-open.png",e+"/images/btn-share.png",e+"/images/btn-submit2.png",e+"/images/c-2.png",e+"/images/c-bg2.png",e+"/images/c-txt.png",e+"/images/coupon-bg.png",e+"/images/coupon-logo.png",e+"/images/input-border.png",e+"/images/logo.png",e+"/images/min-30.png",e+"/images/money-list.png",e+"/images/p2-bg.png",e+"/images/p2-logo.png",e+"/images/p2-pop-text.png",e+"/images/p2-private.png",e+"/images/p2-search.png",e+"/images/p3-3.png",e+"/images/p3-bg.png",e+"/images/p3-logo.png",e+"/images/p3-pop-text.png",e+"/images/qrcode.png",e+"/images/redpacket-no.png",e+"/images/redpacket-yes.png",e+"/images/redpacket.png",e+"/images/share-overlay.png",e+"/images/t1.png",e+"/images/tips-text.png",e+"/images/tips.png"];new preLoader(n,{onProgress:function(){},onComplete:function(){$(".preloading").remove(1e3),gotoPin(1),t.formValidate(),$(".btn-tips").on("click",function(t){$(this).hasClass("btn-tips-yes")?($(".tips-pop").addClass("hide"),gotoPin(0)):window.location.reload()}),$(".btn-open").on("click",function(){gotoPin(1),t.formValidate()})}})},formValidate:function(){var t=this;$(".btn-getkeycode").on("click",function(e){if(e.preventDefault(),!($(".countdown").length>0)&&t.formMobile()){console.log("validate phone number");var n=$(".input-phone").val();$.ajax({type:"POST",url:"/api/check",data:{mobile:n},dataType:"json",success:function(t){console.log(t),1==t.status?console.log("短信发送成功"):alert(t.msg)}});t.countDown()}});var e=!0;$(".pin-2 .btn-submit").on("click",function(){if(t.formKeycode()){if(!e)return;e=!1;var n=$(".input-phone").val(),r=$(".input-keycode").val();console.log(n+"phonenumber"+r);$.ajax({type:"POST",url:"/api/submit",data:{mobile:n,code:r},dataType:"json",success:function(t){console.log(t),e=!0,1==t.status?(console.log("有红包"),gotoPin(2)):2==t.status?(console.log("红包领完了"),$(".pin-3").html(""),$(".qrcode-pop").removeClass("hide"),$(".qt-no").removeClass("hide"),$(".qt-yes").addClass("hide"),gotoPin(2)):alert(t.msg)}})}}),$(".privacy-term").on("click",function(){$(".term-pop").removeClass("hide").addClass("animate fade")}),t.closePop(),t.toMoneyPage()},countDown:function(){var t=9,e=setInterval(function(){t--,$(".btn-getkeycode").addClass("countdown").html(t),0>=t&&(clearInterval(e),$(".btn-getkeycode").removeClass("countdown").html(""))},1e3)},closePop:function(){$(".btn-close").on("click",function(){$(this).parent().addClass("hide")})},toMoneyPage:function(){var t=this;t.closePop(),$(".btn-get").on("click",function(){$(".qrcode-pop").removeClass("hide").addClass("animate fade")}),$(".btn-share").on("click",function(){$(".share-pop").removeClass("hide").addClass("animate fade")})},formMobile:function(){var t=!0;if($(".input-phone").val()){var e=/^1\d{10}$/;e.test($(".input-phone").val())?Common.errorMsg.remove($(".input-phone").parent()):(t=!1,Common.errorMsg.add($(".input-phone").parent(),"手机号格式错误，请重新输入"))}else Common.errorMsg.add($(".input-phone").parent(),"手机号码不能为空"),t=!1;return t?!0:!1},formKeycode:function(){var t=!0;if($(".input-phone").val()){var e=/^1\d{10}$/;e.test($(".input-phone").val())?Common.errorMsg.remove($(".input-phone").parent()):(t=!1,Common.errorMsg.add($(".input-phone").parent(),"手机号格式错误，请重新输入"))}else Common.errorMsg.add($(".input-phone").parent(),"手机号码不能为空"),t=!1;return $(".input-keycode").val()?Common.errorMsg.remove($(".input-keycode").parent()):(Common.errorMsg.add($(".input-keycode").parent(),"验证码不能为空"),t=!1),t?!0:!1}},"function"==typeof define&&define.amd?define(function(){return t}):this.controller=t}.call(this),$(document).ready(function(t){var e=new controller;e.init()}),function(){var t=navigator.userAgent.toLowerCase(),e={isWx:function(){return/micromessenger/.test(t)?!0:!1},errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}};this.Common=e}.call(this);var Form={phoneNum:function(){}};