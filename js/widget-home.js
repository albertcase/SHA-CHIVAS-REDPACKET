function gotoPin(t){var e=$(".wrapper .pin");e.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):B[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return T.call(t,function(t){return null!=t})}function c(t){return t.length>0?C.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in O?O[t]:O[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function p(t,e){return"number"!=typeof e||M[u(t)]?e:e+"px"}function f(t){var e,n;return N[t]||(e=_.createElement(t),_.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),N[t]=n),N[t]}function h(t){return"children"in t?S.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?C(t):C(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var w,E,C,$,j,k,P=[],S=P.slice,T=P.filter,_=window.document,N={},O={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,A=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,z=/([A-Z])/g,Z=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],F=_.createElement("table"),V=_.createElement("tr"),I={tr:_.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:V,th:V,"*":_.createElement("div")},H=/complete|loaded|interactive/,U=/^[\w-]*$/,B={},J=B.toString,W={},X=_.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=X).appendChild(t),i=~W.qsa(r,e).indexOf(t),o&&X.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},k=function(t){return T.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var i,r,s;return q.test(t)&&(i=C(_.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(A,"<$1></$2>")),e===w&&(e=L.test(t)&&RegExp.$1),e in I||(e="*"),s=I[e],s.innerHTML=""+t,i=C.each(S.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(r=C(i),C.each(n,function(t,e){Z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},W.Z=function(t,e){return t=t||[],t.__proto__=C.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var i;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&L.test(t))i=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return C(n).find(t);i=W.qsa(_,t)}else{if(e(t))return C(_).ready(t);if(W.isZ(t))return t;if(Y(t))i=a(t);else if(r(t))i=[t],t=null;else if(L.test(t))i=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return C(n).find(t);i=W.qsa(_,t)}}return W.Z(i,t)},C=function(t,e){return W.init(t,e)},C.extend=function(t){var e,n=S.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},W.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],s=r||o?e.slice(1):e,a=U.test(s);return i(t)&&a&&r?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:S.call(a&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=_.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=t,C.isFunction=e,C.isWindow=n,C.isArray=Y,C.isPlainObject=o,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},C.camelCase=j,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},C.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,e){return T.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),C.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(S.apply(this,arguments))},ready:function(t){return H.test(_.readyState)&&_.body?t(C):_.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===w?S.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(T.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return C(k(this.concat(C(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?S.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return C(n)},has:function(t){return this.filter(function(){return r(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return P.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):C()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=C(t));n&&!(r?r.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(k(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return S.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return T.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=C(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=C(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)v(this,E,t[E]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=C(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[j(e)]||i.getPropertyValue(e);if(Y(e)){var o={};return C.each(e,function(t,e){o[e]=r.style[j(e)]||i.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=u(e)+":"+p(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?s+=u(E)+":"+p(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){$=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||$.push(t)},this),$.length&&y(this,n+(n?" ":"")+$.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");$=y(this),g(this,t,e,$).split(/\s+/g).forEach(function(t){$=$.replace(l(t)," ")}),y(this,$.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=C(this),r=g(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(e[0]).css("border-top-width"))||0,i.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||_.body;t&&!D.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(r){var o,s=this[0];return r===w?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=C(this),s.css(t,g(this,r,e,s[t]()))})}}),R.forEach(function(e,n){var i=n%2;C.fn[e]=function(){var e,r,o=C.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=C.contains(_.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();r.insertBefore(t,e),a&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return C(t)[e](this),this}}),W.Z.prototype=C.fn,W.uniq=k,W.deserializeValue=b,C.zepto=W,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=f++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function s(t){return x[t]||y&&b[t]||t}function a(n,r,a,c,l,f,h){var d=e(n),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=l,r.e in x&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=f;var d=f||a;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==p?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(s(r.e),r.proxy,o(r,h))})}function c(t,i,r,a,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each($,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==p?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)C.test(e)||t[e]===p||(n[e]=t[e]);return u(n,t)}var p,f=1,h=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:c},t.proxy=function(n,i){var r=2 in arguments&&h.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(h.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},E=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,$={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var s,u,f=this;return e&&!m(e)?(t.each(e,function(t,e){f.on(t,n,i,e,o)}),f):(m(n)||d(r)||r===!1||(r=i,i=n,n=p),(d(i)||i===!1)&&(r=i,i=p),r===!1&&(r=E),f.each(function(p,f){o&&(s=function(t){return c(f,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,f).get(0);return o&&o!==f?(i=t.extend(l(e),{currentTarget:o,liveFired:f}),(s||r).apply(o,[i].concat(h.call(arguments,1)))):void 0}),a(f,e,r,i,n,u||s)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=p),i===!1&&(i=E),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l(m(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function s(t,e,i,r){var o=i.context,s="success";i.success.call(o,t,s,e),r&&r.resolveWith(o,[t,s,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(s,e,i)}function a(t,e,i,r,o){var s=r.context;r.error.call(s,i,e,t),o&&o.rejectWith(s,[i,e,t]),n(r,s,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=p(e.url,e.data),e.data=void 0)}function h(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(c.name,c.value):"array"==o||!i&&"object"==o?d(e,c,i,n):e.add(n,c)})}var m,g,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",C="text/html",$=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++v,l=y.createElement("script"),p=window[u],f=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:f};return n&&n.promise(h),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?s(i[0],h,e,n):a(null,c||"error",h,e,n),window[u]=p,i&&t.isFunction(p)&&p(i[0]),p=i=void 0}),o(h,e)===!1?(f("abort"),h):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){f("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===r[m]&&(r[m]=t.ajaxSettings[m]);i(r),r.crossDomain||(n=y.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),f(r);var h=r.dataType,d=/\?.+=\?/.test(r.url);if(d&&(h="jsonp"),r.cache!==!1&&(e&&e.cache===!0||"script"!=h&&"jsonp"!=h)||(r.url=p(r.url,"_="+Date.now())),"jsonp"==h)return d||(r.url=p(r.url,r.jsonp?r.jsonp+"=?":r.jsonp===!1?"":"callback=?")),t.ajaxJSONP(r,c);var v,b=r.accepts[h],x={},w=function(t,e){x[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,C=r.xhr(),k=C.setRequestHeader;if(c&&c.promise(C),r.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",b||"*/*"),(b=r.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(b)),(r.contentType||r.contentType!==!1&&r.data&&"GET"!=r.type.toUpperCase())&&w("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(g in r.headers)w(g,r.headers[g]);if(C.setRequestHeader=w,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=u,clearTimeout(v);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==E){h=h||l(r.mimeType||C.getResponseHeader("content-type")),e=C.responseText;try{"script"==h?(1,eval)(e):"xml"==h?e=C.responseXML:"json"==h&&(e=$.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?a(n,"parsererror",C,r,c):s(e,C,r,c)}else a(C.statusText||null,C.status?"error":"abort",C,r,c)}},o(C,r)===!1)return C.abort(),a(null,"abort",C,r,c),C;if(r.xhrFields)for(g in r.xhrFields)C[g]=r.xhrFields[g];var P="async"in r?r.async:!0;C.open(r.type,r.url,P,r.username,r.password);for(g in x)k.apply(C,x[g]);return r.timeout>0&&(v=setTimeout(function(){C.onreadystatechange=u,C.abort(),a(null,"timeout",C,r,c)},r.timeout)),C.send(r.data?r.data:null),C},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=h(e,n,i),c=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(a),this};var k=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(k(e)+"="+k(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){"use strict";function t(t,e){var n=[],i=this.options;return i.onProgress&&t&&i.onProgress.call(this,t,e,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(n.push(this.completed),this.errors.length&&n.push(this.errors),i.onComplete.apply(this,n)),this}var e="addEventListener"in new Image,n=function(t,e){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},e&&"object"==typeof e&&this.setOptions(e),this.addQueue(t),this.queue.length&&this.options.auto&&this.processQueue()};n.prototype.setOptions=function(t){var e,n=this.options;for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return this},n.prototype.addQueue=function(t){return this.queue=t.slice(),this},n.prototype.reset=function(){return this.completed=[],this.errors=[],this},n.prototype.addEvents=function(n,i,r){var o=this,s=this.options,a=function(){e?(this.removeEventListener("error",c),this.removeEventListener("abort",c),this.removeEventListener("load",u)):this.onerror=this.onabort=this.onload=null},c=function(){a.call(this),o.errors.push(i),s.onError&&s.onError.call(o,i),t.call(o,i),s.pipeline&&o.loadNext(r)},u=function(){a.call(this),o.completed.push(i),t.call(o,i,this),s.pipeline&&o.loadNext(r)};e?(n.addEventListener("error",c,!1),n.addEventListener("abort",c,!1),n.addEventListener("load",u,!1)):(n.onerror=n.onabort=c,n.onload=u)},n.prototype.load=function(t,e){var n=new Image;return this.addEvents(n,t,e),n.src=t,this},n.prototype.loadNext=function(t){return t++,this.queue[t]&&this.load(this.queue[t],t),this},n.prototype.processQueue=function(){var t=0,e=this.queue,n=e.length;if(this.reset(),this.options.pipeline)this.load(e[0],0);else for(;n>t;++t)this.load(e[t],t);return this},"function"==typeof define&&define.amd?define(function(){return n}):this.preLoader=n}.call(this),function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var t=n.clientWidth,e=window.innerHeight;t&&(t/e>750/1334?n.style.fontSize=50*(e/667)+"px":n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(i,r,!1),r())}(document,window),function(){"use strict";var t=function(){this.curPage=0,this.selectedColor=""};t.prototype={init:function(){var t=this;$(".loading-wrap").addClass("show");var e="",n=[e+"/images/logo.png",e+"/images/bg-1.png",e+"/images/btn-get.png",e+"/images/btn-getkeycode.png",e+"/images/btn-open.png",e+"/images/btn-share.png",e+"/images/btn-submit2.png",e+"/images/c-2.png",e+"/images/c-bg2.png",e+"/images/c-txt.png",e+"/images/coupon-bg.png",e+"/images/coupon-logo.png",e+"/images/input-border.png",e+"/images/logo.png",e+"/images/min-30.png",e+"/images/money-list.png",e+"/images/p2-bg.png",e+"/images/p2-logo.png",e+"/images/p2-pop-text.png",e+"/images/p2-private.png",e+"/images/p2-search.png",e+"/images/p3-3.png",e+"/images/p3-bg.png",e+"/images/p3-logo.png",e+"/images/p3-pop-text.png",e+"/images/qrcode.png",e+"/images/redpacket-no.png",e+"/images/redpacket-yes.png",e+"/images/redpacket.png",e+"/images/share-overlay.png",e+"/images/t1.png",e+"/images/tips-text.png",e+"/images/tips.png"];new preLoader(n,{onProgress:function(){},onComplete:function(){$(".preloading").remove(1e3);$.ajax({type:"POST",url:"/api/status",dataType:"json",success:function(e){console.log(e),1==e.status?(212==e.msg?$(".p3-t1 .t2").addClass("money2"):188==e.msg&&$(".p3-t1 .t2").removeClass("money2"),gotoPin(2),t.toMoneyPage()):$(".tips-pop").removeClass("hide").addClass("fade animate")}});$(".btn-tips").on("click",function(t){$(this).hasClass("btn-tips-yes")?($(".tips-pop").addClass("hide"),gotoPin(0),_hmt.push(["_trackEvent","page","click","pv-1"])):window.location.reload()}),$(".btn-open").on("click",function(){gotoPin(1),_hmt.push(["_trackEvent","buttons","click","btn-open"]),_hmt.push(["_trackEvent","page","click","pv-2"]),t.formValidate()})}})},formValidate:function(){var t=this;$(".btn-getkeycode").on("click",function(e){if(e.preventDefault(),_hmt.push(["_trackEvent","buttons","click","sendmessage"]),!($(".countdown").length>0)&&t.formMobile()){console.log("validate phone number");var n=$(".input-phone").val();t.countDown();$.ajax({type:"POST",url:"/api/check",data:{mobile:n},dataType:"json",success:function(t){console.log(t),1==t.status?console.log("短信发送成功"):alert(t.msg)}})}});var e=!0;$(".pin-2 .btn-submit").on("click",function(){if(_hmt.push(["_trackEvent","buttons","click","Submit"]),t.formKeycode()){if(!e)return;e=!1;var n=$(".input-phone").val(),i=$(".input-keycode").val();console.log(n+"phonenumber"+i),Common.msgBox("loading...");$.ajax({type:"POST",url:"/api/submit",data:{mobile:n,code:i},dataType:"json",success:function(t){e=!0,$(".ajaxpop").remove(),1==t.status?(_hmt.push(["_trackEvent","buttons","click","PV-3"]),212==t.msg?$(".p3-t1 .t2").addClass("money2"):188==t.msg&&$(".p3-t1 .t2").removeClass("money2"),gotoPin(2)):6==t.status?(_hmt.push(["_trackEvent","buttons","click","PV-3"]),212==t.msg?$(".p3-t1 .t2").addClass("money2"):188==t.msg&&$(".p3-t1 .t2").removeClass("money2"),gotoPin(2)):2==t.status?(_hmt.push(["_trackEvent","buttons","click","PV-3"]),$(".pin-3").html(""),$(".qrcode-pop").removeClass("hide"),$(".qt-no").removeClass("hide"),$(".qt-yes").addClass("hide"),gotoPin(2)):alert(t.msg)}})}}),$(".privacy-term").on("click",function(){_hmt.push(["_trackEvent","buttons","click","Terms"]),$(".term-pop").removeClass("hide").addClass("animate fade")}),t.closePop(),t.toMoneyPage()},countDown:function(){var t=59,e=setInterval(function(){t--,$(".btn-getkeycode").addClass("countdown").html(t),0>=t&&(clearInterval(e),$(".btn-getkeycode").removeClass("countdown").html(""))},1e3)},closePop:function(){$(".btn-close").on("click",function(){$(this).parent().addClass("hide")})},toMoneyPage:function(){var t=this;t.closePop(),$(".btn-get").on("click",function(){_hmt.push(["_trackEvent","buttons","click","Redeem"]),_hmt.push(["_trackEvent","page","click","PV-4"]),$(".qrcode-pop").removeClass("hide").addClass("animate fade")}),$(".btn-share").on("click",function(){_hmt.push(["_trackEvent","buttons","click","Share"]),$(".share-pop").removeClass("hide").addClass("animate fade")})},formMobile:function(){var t=!0;if($(".input-phone").val()){var e=/^1\d{10}$/;e.test($(".input-phone").val())?Common.errorMsg.remove($(".input-phone").parent()):(t=!1,Common.errorMsg.add($(".input-phone").parent(),"手机号格式错误，请重新输入"))}else Common.errorMsg.add($(".input-phone").parent(),"手机号码不能为空"),t=!1;return t?!0:!1},formKeycode:function(){var t=!0;if($(".input-phone").val()){var e=/^1\d{10}$/;e.test($(".input-phone").val())?Common.errorMsg.remove($(".input-phone").parent()):(t=!1,Common.errorMsg.add($(".input-phone").parent(),"手机号格式错误，请重新输入"))}else Common.errorMsg.add($(".input-phone").parent(),"手机号码不能为空"),t=!1;return $(".input-keycode").val()?Common.errorMsg.remove($(".input-keycode").parent()):(Common.errorMsg.add($(".input-keycode").parent(),"验证码不能为空"),
t=!1),t?!0:!1}},"function"==typeof define&&define.amd?define(function(){return t}):this.controller=t}.call(this),$(document).ready(function(t){var e=new controller;e.init()}),$(document).ready(function(){wx.ready(function(){wx.onMenuShareTimeline({title:"来自苏格兰的慷(xian)慨(jin)问(hong)候(bao)",link:"http://extra.chivas.com.cn",imgUrl:"http://7vzs67.com1.z0.glb.clouddn.com/2120e9e6-5424-41c6-bdc3-7d6db4b3e6b8?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1",success:function(){_hmt.push(["_trackEvent","buttons","click","ShareToMoments"]),alert("timeline")},cancel:function(){}}),wx.onMenuShareAppMessage({title:_unescape("嘘寒问暖，不如现款"),desc:_unescape("拆了这个芝华士红包，感受来自苏格兰的慷慨"),link:"http://extra.chivas.com.cn",imgUrl:"http://7vzs67.com1.z0.glb.clouddn.com/21926ffe-1764-4fd1-82fd-5ddd151cf0e0?imageView2/1/w/200/h/200/format/jpg/q80/interlace/1",type:"",dataUrl:"",success:function(){_hmt.push(["_trackEvent","buttons","click","ShareToFriend"]),alert("friends")},cancel:function(){}})}),alert("test")}),function(){var t=navigator.userAgent.toLowerCase(),e={isWx:function(){return/micromessenger/.test(t)?!0:!1},msgBox:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}};this.Common=e}.call(this);var Form={phoneNum:function(){}};