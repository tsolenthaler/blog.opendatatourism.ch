var osmAuth=(function(){var Se=Object.create;var q=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var Ae=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty;var d=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},je=function(e,t){for(var r in t)q(e,r,{get:t[r],enumerable:!0})},U=function(e,t,r,a){if(t&&typeof t=="object"||typeof t=="function")for(var i=Oe(t),o=0,l=i.length,u;o<l;o++)u=i[o],!Pe.call(e,u)&&u!==r&&q(e,u,{get:function(n){return t[n]}.bind(null,u),enumerable:!(a=ye(t,u))||a.enumerable});return e};var Fe=function(e,t,r){return r=e!=null?Se(Ae(e)):{},U(t||!e||!e.__esModule?q(r,"default",{value:e,enumerable:!0}):r,e)},qe=function(e){return U(q({},"__esModule",{value:!0}),e)};var _=d(function(Gt,$){var T=Je(),ke=Ne(),Ee=Ce(),Te=typeof window!="undefined"?window:global;$.exports={assign:T,create:ke,trim:Ee,bind:Ie,slice:J,each:D,map:Ge,pluck:N,isList:C,isFunction:Re,isObject:Me,Global:Te};function Je(){return Object.assign?Object.assign:function(t,r,a,i){for(var o=1;o<arguments.length;o++)D(Object(arguments[o]),function(l,u){t[u]=l});return t}}function Ne(){if(Object.create)return function(r,a,i,o){var l=J(arguments,1);return T.apply(this,[Object.create(r)].concat(l))};var t=function(){},e=t;return function(a,i,o,l){var u=J(arguments,1);return t.prototype=a,T.apply(this,[new t].concat(u))}}function Ce(){return String.prototype.trim?function(t){return String.prototype.trim.call(t)}:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function Ie(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function J(e,t){return Array.prototype.slice.call(e,t||0)}function D(e,t){N(e,function(r,a){return t(r,a),!1})}function Ge(e,t){var r=C(e)?[]:{};return N(e,function(a,i){return r[i]=t(a,i),!1}),r}function N(e,t){if(C(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var a in e)if(e.hasOwnProperty(a)&&t(e[a],a))return e[a]}function C(e){return e!=null&&typeof e!="function"&&typeof e.length=="number"}function Re(e){return e&&{}.toString.call(e)==="[object Function]"}function Me(e){return e&&{}.toString.call(e)==="[object Object]"}});var B=d(function(Rt,X){var h=_(),Le=h.slice,ze=h.pluck,x=h.each,Ue=h.bind,De=h.create,I=h.isList,G=h.isFunction,$e=h.isObject;X.exports={createStore:R};var Xe={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return t===void 0?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(r,a){e.call(t,t._deserialize(r),(a||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return R.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return R(this.storage,this.plugins,e)}};function Be(){var e=typeof console=="undefined"?null:console;if(!!e){var t=e.warn?e.warn:e.log;t.apply(e,arguments)}}function R(e,t,r){r||(r=""),e&&!I(e)&&(e=[e]),t&&!I(t)&&(t=[t]);var a=r?"__storejs_"+r+"_":"",i=r?new RegExp("^"+a):null,o=/^[a-zA-Z0-9_\-]*$/;if(!o.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var l={_namespacePrefix:a,_namespaceRegexp:i,_testStorage:function(n){try{var c="__storejs__test__";n.write(c,c);var s=n.read(c)===c;return n.remove(c),s}catch(v){return!1}},_assignPluginFnProp:function(n,c){var s=this[c];this[c]=function(){var p=Le(arguments,0),g=this;function m(){if(!!s)return x(arguments,function(be,xe){p[xe]=be}),s.apply(g,p)}var E=[m].concat(p);return n.apply(g,E)}},_serialize:function(n){return JSON.stringify(n)},_deserialize:function(n,c){if(!n)return c;var s="";try{s=JSON.parse(n)}catch(v){s=n}return s!==void 0?s:c},_addStorage:function(n){this.enabled||this._testStorage(n)&&(this.storage=n,this.enabled=!0)},_addPlugin:function(n){var c=this;if(I(n)){x(n,function(p){c._addPlugin(p)});return}var s=ze(this.plugins,function(p){return n===p});if(!s){if(this.plugins.push(n),!G(n))throw new Error("Plugins must be function values that return objects");var v=n.call(this);if(!$e(v))throw new Error("Plugins must return an object of function properties");x(v,function(p,g){if(!G(p))throw new Error("Bad plugin property: "+g+" from plugin "+n.name+". Plugins should only return functions.");c._assignPluginFnProp(p,g)})}},addStorage:function(n){Be("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(n)}},u=De(l,Xe,{plugins:[]});return u.raw={},x(u,function(n,c){G(n)&&(u.raw[c]=Ue(u,n))}),x(e,function(n){u._addStorage(n)}),x(t,function(n){u._addPlugin(n)}),u}});var H=d(function(Mt,K){var We=_(),Ke=We.Global;K.exports={name:"localStorage",read:W,write:He,each:Qe,remove:Ze,clearAll:Ye};function S(){return Ke.localStorage}function W(e){return S().getItem(e)}function He(e,t){return S().setItem(e,t)}function Qe(e){for(var t=S().length-1;t>=0;t--){var r=S().key(t);e(W(r),r)}}function Ze(e){return S().removeItem(e)}function Ye(){return S().clear()}});var Y=d(function(Lt,Z){var Ve=_(),et=Ve.Global;Z.exports={name:"oldFF-globalStorage",read:tt,write:rt,each:Q,remove:nt,clearAll:it};var w=et.globalStorage;function tt(e){return w[e]}function rt(e,t){w[e]=t}function Q(e){for(var t=w.length-1;t>=0;t--){var r=w.key(t);e(w[r],r)}}function nt(e){return w.removeItem(e)}function it(){Q(function(e,t){delete w[e]})}});var te=d(function(zt,ee){var at=_(),M=at.Global;ee.exports={name:"oldIE-userDataStorage",write:ot,read:ut,each:ct,remove:st,clearAll:ft};var A="storejs",O=M.document,P=pt(),V=(M.navigator?M.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function ot(e,t){if(!V){var r=L(e);P(function(a){a.setAttribute(r,t),a.save(A)})}}function ut(e){if(!V){var t=L(e),r=null;return P(function(a){r=a.getAttribute(t)}),r}}function ct(e){P(function(t){for(var r=t.XMLDocument.documentElement.attributes,a=r.length-1;a>=0;a--){var i=r[a];e(t.getAttribute(i.name),i.name)}})}function st(e){var t=L(e);P(function(r){r.removeAttribute(t),r.save(A)})}function ft(){P(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(A);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(A)})}var lt=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function L(e){return e.replace(/^\d/,"___$&").replace(lt,"___")}function pt(){if(!O||!O.documentElement||!O.documentElement.addBehavior)return null;var e="script",t,r,a;try{r=new ActiveXObject("htmlfile"),r.open(),r.write("<"+e+">document.w=window</"+e+'><iframe src="/favicon.ico"></iframe>'),r.close(),t=r.w.frames[0].document,a=t.createElement("div")}catch(i){a=O.createElement("div"),t=O.body}return function(i){var o=[].slice.call(arguments,0);o.unshift(a),t.appendChild(a),a.addBehavior("#default#userData"),a.load(A),i.apply(this,o),t.removeChild(a)}}});var ue=d(function(Ut,oe){var re=_(),gt=re.Global,dt=re.trim;oe.exports={name:"cookieStorage",read:vt,write:ht,each:ne,remove:ie,clearAll:mt};var F=gt.document;function vt(e){if(!e||!ae(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(F.cookie.replace(new RegExp(t),"$1"))}function ne(e){for(var t=F.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(!!dt(t[r])){var a=t[r].split("="),i=unescape(a[0]),o=unescape(a[1]);e(o,i)}}function ht(e,t){!e||(F.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function ie(e){!e||!ae(e)||(F.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function mt(){ne(function(e,t){ie(t)})}function ae(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(F.cookie)}});var fe=d(function(Dt,se){var _t=_(),wt=_t.Global;se.exports={name:"sessionStorage",read:ce,write:bt,each:xt,remove:St,clearAll:yt};function y(){return wt.sessionStorage}function ce(e){return y().getItem(e)}function bt(e,t){return y().setItem(e,t)}function xt(e){for(var t=y().length-1;t>=0;t--){var r=y().key(t);e(ce(r),r)}}function St(e){return y().removeItem(e)}function yt(){return y().clear()}});var pe=d(function($t,le){le.exports={name:"memoryStorage",read:Ot,write:At,each:Pt,remove:jt,clearAll:Ft};var b={};function Ot(e){return b[e]}function At(e,t){b[e]=t}function Pt(e){for(var t in b)b.hasOwnProperty(t)&&e(b[t],t)}function jt(e){delete b[e]}function Ft(e){b={}}});var de=d(function(Xt,ge){ge.exports=[H(),Y(),te(),ue(),fe(),pe()]});var ve=d(function(exports,module){typeof JSON!="object"&&(JSON={});(function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(t){var r=meta[t];return typeof r=="string"?r:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,a,i,o,l=gap,u,n=t[e];switch(n&&typeof n=="object"&&typeof n.toJSON=="function"&&(n=n.toJSON(e)),typeof rep=="function"&&(n=rep.call(t,e,n)),typeof n){case"string":return quote(n);case"number":return isFinite(n)?String(n):"null";case"boolean":case"null":return String(n);case"object":if(!n)return"null";if(gap+=indent,u=[],Object.prototype.toString.apply(n)==="[object Array]"){for(o=n.length,r=0;r<o;r+=1)u[r]=str(r,n)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+l+"]":"["+u.join(",")+"]",gap=l,i}if(rep&&typeof rep=="object")for(o=rep.length,r=0;r<o;r+=1)typeof rep[r]=="string"&&(a=rep[r],i=str(a,n),i&&u.push(quote(a)+(gap?": ":":")+i));else for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i=str(a,n),i&&u.push(quote(a)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+l+"}":"{"+u.join(",")+"}",gap=l,i}}typeof JSON.stringify!="function"&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var a;if(gap="",indent="",typeof r=="number")for(a=0;a<r;a+=1)indent+=" ";else typeof r=="string"&&(indent=r);if(rep=t,t&&typeof t!="function"&&(typeof t!="object"||typeof t.length!="number"))throw new Error("JSON.stringify");return str("",{"":e})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var r,a,i=e[t];if(i&&typeof i=="object")for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a=walk(i,r),a!==void 0?i[r]=a:delete i[r]);return reviver.call(e,t,i)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})})()});var me=d(function(Bt,he){he.exports=qt;function qt(){return ve(),{}}});var we=d(function(Wt,_e){var kt=B(),Et=de(),Tt=[me()];_e.exports=kt.createStore(Et,Tt)});var Ct={};je(Ct,{osmAuth:function(){return Jt}});var k=Fe(we(),1);function Jt(e){var t={};t.authenticated=function(){return!!r("oauth2_access_token")},t.logout=function(){return r("oauth2_access_token",""),r("oauth_token",""),r("oauth_token_secret",""),r("oauth_request_token_secret",""),t},t.authenticate=function(i){if(t.authenticated()){i(null,t);return}t.logout();var o=e.url+"/oauth2/authorize?"+z({client_id:e.client_id,redirect_uri:e.redirect_uri,response_type:"code",scope:e.scope});if(!e.singlepage){var l=600,u=550,n=[["width",l],["height",u],["left",window.screen.width/2-l/2],["top",window.screen.height/2-u/2]].map(function(g){return g.join("=")}).join(","),c=window.open("about:blank","oauth_window",n);if(t.popupWindow=c,c.location=o,!c){var s=new Error("Popup was blocked");throw s.status="popup-blocked",s}}window.authComplete=function(g){var m=Nt(g.split("?")[1]);v(m.code),delete window.authComplete};function v(g){var m=e.url+"/oauth2/token?"+z({client_id:e.client_id,grant_type:"authorization_code",code:g,redirect_uri:e.redirect_uri,client_secret:e.client_secret});t.rawxhr("POST",m,null,null,null,p),e.loading()}function p(g,m){if(e.done(),g){i(g);return}var E=JSON.parse(m.response);r("oauth2_access_token",E.access_token),i(null,t)}},t.bringPopupWindowToFront=function(){var i=!1;try{t.popupWindow&&!t.popupWindow.closed&&(t.popupWindow.focus(),i=!0)}catch(o){}return i},t.bootstrapToken=function(i,o){function l(n){var c=e.url+"/oauth2/token?"+z({client_id:e.client_id,grant_type:"authorization_code",code:n,redirect_uri:e.redirect_uri,client_secret:e.client_secret});t.rawxhr("POST",c,null,null,null,u),e.loading()}function u(n,c){if(e.done(),n){o(n);return}var s=JSON.parse(c.response);r("oauth2_access_token",s.access_token),o(null,t)}l(i)},t.xhr=function(i,o){if(t.authenticated())return l();if(e.auto){t.authenticate(l);return}else{o("not authenticated",null);return}function l(){var n=i.prefix!==!1?e.url+i.path:i.path;return t.rawxhr(i.method,n,r("oauth2_access_token"),i.content,i.headers,u)}function u(n,c){n?o(n):c.responseXML?o(n,c.responseXML):o(n,c.response)}},t.rawxhr=function(i,o,l,u,n,c){n=n||{"Content-Type":"application/x-www-form-urlencoded"},l&&(n.Authorization="Bearer "+l);var s=new XMLHttpRequest;s.onreadystatechange=function(){s.readyState===4&&s.status!==0&&(/^20\d$/.test(s.status)?c(null,s):c(s,null))},s.onerror=function(p){c(p,null)},s.open(i,o,!0);for(var v in n)s.setRequestHeader(v,n[v]);return s.send(u),s},t.preauth=function(i){return i&&i.access_token&&r("oauth2_access_token",i.access_token),t},t.options=function(i){return arguments.length?(e=i,e.url=e.url||"https://www.openstreetmap.org",e.auto=e.auto||!1,e.singlepage=e.singlepage||!1,e.loading=e.loading||function(){},e.done=e.done||function(){},t.preauth(e)):e};var r;if(k.default.enabled)r=function(i,o){if(arguments.length===1)return k.default.get(e.url+i);if(arguments.length===2)return k.default.set(e.url+i,o)};else{var a={};r=function(i,o){if(arguments.length===1)return a[e.url+i];if(arguments.length===2)return a[e.url+i]=o}}return t.options(e),t}function z(e){return Object.keys(e).sort().map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}function Nt(e){for(var t=0;t<e.length&&(e[t]==="?"||e[t]==="#");)t++;return e=e.slice(t),e.split("&").reduce(function(r,a){var i=a.split("=");return i.length===2&&(r[i[0]]=decodeURIComponent(i[1])),r},{})}return qe(Ct);})();
//# sourceMappingURL=osm-auth.iife.js.map