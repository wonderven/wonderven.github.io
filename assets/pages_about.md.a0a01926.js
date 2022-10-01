import{_ as Be}from"./preload-helper.1c052cf7.js";import{_ as he}from"./plugin-vue_export-helper.21dcd24c.js";import{p as B,q as v,r as w,z as T,I as L,J as me,L as je,H as z,x as ke,F as ve,V as qe,U as De,B as N,a1 as Ie,R as Fe,K as ye,S as He,a2 as Me,u as Je,s as re}from"./framework.57f0ea09.js";const Ve={class:"tab"},ze=["onClick"],We=B({__name:"Tab",props:{data:{type:Array,required:!0},active:{type:String,required:!0}},emits:["update:active"],setup(t,{emit:e}){const r=a=>{e("update:active",a)};return(a,n)=>(v(),w(L,null,[T("ul",Ve,[(v(!0),w(L,null,me(t.data,s=>(v(),w("li",{key:s,class:z(s===t.active?"active":""),onClick:o=>r(s)},ke(s),11,ze))),128))]),je(a.$slots,"default",{},void 0,!0)],64))}});var Ge=he(We,[["__scopeId","data-v-b77aeff4"]]),X={exports:{}},be=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}},Xe=be,E=Object.prototype.toString;function K(t){return Array.isArray(t)}function W(t){return typeof t=="undefined"}function Ke(t){return t!==null&&!W(t)&&t.constructor!==null&&!W(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function _e(t){return E.call(t)==="[object ArrayBuffer]"}function Ye(t){return E.call(t)==="[object FormData]"}function Ze(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_e(t.buffer),e}function Qe(t){return typeof t=="string"}function et(t){return typeof t=="number"}function we(t){return t!==null&&typeof t=="object"}function P(t){if(E.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function tt(t){return E.call(t)==="[object Date]"}function rt(t){return E.call(t)==="[object File]"}function nt(t){return E.call(t)==="[object Blob]"}function Ee(t){return E.call(t)==="[object Function]"}function at(t){return we(t)&&Ee(t.pipe)}function st(t){return E.call(t)==="[object URLSearchParams]"}function it(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function ot(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Y(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),K(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function G(){var t={};function e(n,s){P(t[s])&&P(n)?t[s]=G(t[s],n):P(n)?t[s]=G({},n):K(n)?t[s]=n.slice():t[s]=n}for(var r=0,a=arguments.length;r<a;r++)Y(arguments[r],e);return t}function ut(t,e,r){return Y(e,function(n,s){r&&typeof n=="function"?t[s]=Xe(n,r):t[s]=n}),t}function lt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var p={isArray:K,isArrayBuffer:_e,isBuffer:Ke,isFormData:Ye,isArrayBufferView:Ze,isString:Qe,isNumber:et,isObject:we,isPlainObject:P,isUndefined:W,isDate:tt,isFile:rt,isBlob:nt,isFunction:Ee,isStream:at,isURLSearchParams:st,isStandardBrowserEnv:ot,forEach:Y,merge:G,extend:ut,trim:it,stripBOM:lt},C=p;function ne(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ge=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(C.isURLSearchParams(r))n=r.toString();else{var s=[];C.forEach(r,function(l,m){l===null||typeof l=="undefined"||(C.isArray(l)?m=m+"[]":l=[l],C.forEach(l,function(c){C.isDate(c)?c=c.toISOString():C.isObject(c)&&(c=JSON.stringify(c)),s.push(ne(m)+"="+ne(c))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},ct=p;function j(){this.handlers=[]}j.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){ct.forEach(this.handlers,function(a){a!==null&&e(a)})};var ft=j,dt=p,pt=function(e,r){dt.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})},Se=function(e,r,a,n,s){return e.config=r,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},ht=Se,Ce=function(e,r,a,n,s){var o=new Error(e);return ht(o,r,a,n,s)},mt=Ce,vt=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(mt("Request failed with status code "+a.status,a.config,null,a.request,a))},R=p,yt=R.isStandardBrowserEnv()?function(){return{write:function(r,a,n,s,o,u){var l=[];l.push(r+"="+encodeURIComponent(a)),R.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),R.isString(s)&&l.push("path="+s),R.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),bt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},_t=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},wt=bt,Et=_t,gt=function(e,r){return e&&!wt(r)?Et(e,r):r},H=p,St=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ct=function(e){var r={},a,n,s;return e&&H.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=H.trim(u.substr(0,s)).toLowerCase(),n=H.trim(u.substr(s+1)),a){if(r[a]&&St.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},ae=p,xt=ae.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(s){var o=s;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(o){var u=ae.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function Z(t){this.message=t}Z.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Z.prototype.__CANCEL__=!0;var k=Z,A=p,$t=vt,Ot=yt,Rt=ge,At=gt,Tt=Ct,Nt=xt,M=Ce,Pt=D,Ut=k,se=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}A.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(c+":"+b)}var d=At(e.baseURL,e.url);i.open(e.method.toUpperCase(),Rt(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function ee(){if(!!i){var y="getAllResponseHeaders"in i?Tt(i.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?i.responseText:i.response,g={data:S,status:i.status,statusText:i.statusText,headers:y,config:e,request:i};$t(function(F){a(F),m()},function(F){n(F),m()},g),i=null}}if("onloadend"in i?i.onloadend=ee:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(ee)},i.onabort=function(){!i||(n(M("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(M("Network Error",e,null,i)),i=null},i.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",g=e.transitional||Pt.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(M(S,e,g.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},A.isStandardBrowserEnv()){var te=(e.withCredentials||Nt(d))&&e.xsrfCookieName?Ot.read(e.xsrfCookieName):void 0;te&&(o[e.xsrfHeaderName]=te)}"setRequestHeader"in i&&A.forEach(o,function(S,g){typeof s=="undefined"&&g.toLowerCase()==="content-type"?delete o[g]:i.setRequestHeader(g,S)}),A.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!i||(n(!y||y&&y.type?new Ut("canceled"):y),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),i.send(s)})},f=p,ie=pt,Lt=Se,Bt={"Content-Type":"application/x-www-form-urlencoded"};function oe(t,e){!f.isUndefined(t)&&f.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function jt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=se),t}function kt(t,e,r){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var q={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:jt(),transformRequest:[function(e,r){return ie(r,"Accept"),ie(r,"Content-Type"),f.isFormData(e)||f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e)?e:f.isArrayBufferView(e)?e.buffer:f.isURLSearchParams(e)?(oe(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):f.isObject(e)||r&&r["Content-Type"]==="application/json"?(oe(r,"application/json"),kt(e)):e}],transformResponse:[function(e){var r=this.transitional||q.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&f.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?Lt(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(e){q.headers[e]={}});f.forEach(["post","put","patch"],function(e){q.headers[e]=f.merge(Bt)});var D=q,qt=p,Dt=D,It=function(e,r,a){var n=this||Dt;return qt.forEach(a,function(o){e=o.call(n,e,r)}),e},xe=function(e){return!!(e&&e.__CANCEL__)},ue=p,J=It,Ft=xe,Ht=D,Mt=k;function V(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Mt("canceled")}var Jt=function(e){V(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=ue.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ue.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Ht.adapter;return r(e).then(function(n){return V(e),n.data=J.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Ft(n)||(V(e),n&&n.response&&(n.response.data=J.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},h=p,$e=function(e,r){r=r||{};var a={};function n(i,c){return h.isPlainObject(i)&&h.isPlainObject(c)?h.merge(i,c):h.isPlainObject(c)?h.merge({},c):h.isArray(c)?c.slice():c}function s(i){if(h.isUndefined(r[i])){if(!h.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function o(i){if(!h.isUndefined(r[i]))return n(void 0,r[i])}function u(i){if(h.isUndefined(r[i])){if(!h.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function l(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return h.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var b=m[c]||s,d=b(c);h.isUndefined(d)&&b!==l||(a[c]=d)}),a},Oe={version:"0.25.0"},Vt=Oe.version,Q={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Q[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var le={};Q.transitional=function(e,r,a){function n(s,o){return"[Axios v"+Vt+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(r?" in "+r:"")));return r&&!le[o]&&(le[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,o,u):!0}};function zt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=t[s],l=u===void 0||o(u,s,t);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+s)}}var Wt={assertOptions:zt,validators:Q},Re=p,Gt=ge,ce=ft,fe=Jt,I=$e,Ae=Wt,x=Ae.validators;function O(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}O.prototype.request=function(e,r){if(typeof e=="string"?(r=r||{},r.url=e):r=e||{},!r.url)throw new Error("Provided config url is not valid");r=I(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&Ae.assertOptions(a,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(s=s&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!s){var l=[fe,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var m=r;n.length;){var i=n.shift(),c=n.shift();try{m=i(m)}catch(b){c(b);break}}try{u=fe(m)}catch(b){return Promise.reject(b)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};O.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=I(this.defaults,e),Gt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Re.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(r,a){return this.request(I(a||{},{method:e,url:r,data:(a||{}).data}))}});Re.forEach(["post","put","patch"],function(e){O.prototype[e]=function(r,a,n){return this.request(I(n||{},{method:e,url:r,data:a}))}});var Xt=O,Kt=k;function $(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,s=r._listeners.length;for(n=0;n<s;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){r.subscribe(o),n=o}).then(a);return s.cancel=function(){r.unsubscribe(n)},s},t(function(n){r.reason||(r.reason=new Kt(n),e(r.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};$.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};$.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};$.source=function(){var e,r=new $(function(n){e=n});return{token:r,cancel:e}};var Yt=$,Zt=function(e){return function(a){return e.apply(null,a)}},Qt=p,er=function(e){return Qt.isObject(e)&&e.isAxiosError===!0},de=p,tr=be,U=Xt,rr=$e,nr=D;function Te(t){var e=new U(t),r=tr(U.prototype.request,e);return de.extend(r,U.prototype,e),de.extend(r,e),r.create=function(n){return Te(rr(t,n))},r}var _=Te(nr);_.Axios=U;_.Cancel=k;_.CancelToken=Yt;_.isCancel=xe;_.VERSION=Oe.version;_.all=function(e){return Promise.all(e)};_.spread=Zt;_.isAxiosError=er;X.exports=_;X.exports.default=_;var ar=X.exports;function pe(t){return new Promise(e=>{ar({...t}).then(r=>{r.status===200?e(r.data):(console.log("none status"),e(r))})})}const Ne={get(t,e){return pe({method:"GET",url:t,params:e})},post(t,e){return pe({method:"POST",url:t,data:e})}},Pe="https://www.hualigs.cn/api/",Ue="06cb7cf8d438e5a599441bd3a0630d76";async function yr(){const t={token:Ue,folder:2150,limit:100};return await Ne.get(`${Pe}imageList`,t)}async function sr(){const t={token:Ue,folder:2153,limit:100};return await Ne.get(`${Pe}imageList`,t)}const ir=["title"],or=["src","alt"],ur=B({__name:"ImgList",props:{data:{type:Array,defualt:()=>[]}},setup(t){const e=ve(!1),r=()=>{e.value=!e.value};return(a,n)=>(v(),w(L,null,[T("i",{class:z(`fa fa-${e.value?"th-large":"list"} toggle-btn`),onClick:r},null,2),T("ul",{class:z(`img-list ${e.value?"":"small"}`)},[(v(!0),w(L,null,me(t.data,s=>(v(),w("li",{key:s.url.majorhua,title:s.filename},[T("img",{lazy:"",src:`https://s1.xptou.com/${s.url.majorhua}`,alt:s.filename},null,8,or)],8,ir))),128))],2)],64))}});var lr=he(ur,[["__scopeId","data-v-2802c4d6"]]);const cr=B({__name:"Seals",setup(t){const e=qe({data:[]}),{appContext:r}=Ie();return De(async()=>{r.config.globalProperties.loading.show();const a=await sr();a.code===200?(r.config.globalProperties.loading.hide(),e.data=a.data):console.log("img loade error")}),(a,n)=>(v(),N(lr,{data:e.data},null,8,["data"]))}}),fr={class:"about"},dr=B({__name:"index",setup(t){const e=Fe(()=>Be(()=>import("./Arknights.56f1ce90.js"),["assets/Arknights.56f1ce90.js","assets/framework.57f0ea09.js","assets/preload-helper.1c052cf7.js","assets/plugin-vue_export-helper.21dcd24c.js"])),r=["Seals","Collect"],a=ve(r[1]);return(n,s)=>(v(),w("div",fr,[(v(),N(Me,{include:["Arknights","Seals"]},[ye(Ge,{data:r,active:a.value,"onUpdate:active":s[0]||(s[0]=o=>a.value=o)},{default:He(()=>[a.value==="Collect"?(v(),N(Je(e),{key:0})):re("",!0),a.value==="Seals"?(v(),N(cr,{key:1})):re("",!0)]),_:1},8,["active"])],1024))]))}}),br='{"title":"Game","description":"Game","frontmatter":{"title":"Game","description":"Game","date":"2022-09-23T00:00:00.000Z","page":true,"sidebar":true,"header":true,"comment":true,"postInfo":false,"postFooter":false},"relativePath":"pages/about.md","lastUpdated":1664642379925}',pr={},_r=Object.assign(pr,{__name:"about",setup(t){return(e,r)=>(v(),w("div",null,[ye(dr)]))}});export{lr as I,br as __pageData,_r as default,yr as g};
