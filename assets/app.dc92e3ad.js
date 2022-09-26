import{u as w,w as D,a as j,E as Ge,v as ue,g as Xe,_ as Qe,i as U,p as ye,c as Je,b as Ze,R as Ke,d as et,e as tt,C as nt,s as st}from"./Page.f4fdd8ff.js";import{w as ke,_ as b,d as m,o as l,c as h,u as r,a as $,b as F,t as f,e as p,f as c,g as xe,h as A,m as we,p as N,i as M,r as T,j as X,n as S,F as P,k as B,l as g,q as E,s as I,v as Q,x as q,y as z,z as W,A as ot,B as R,C as O,D as de,E as at}from"./plugin-vue_export-helper.18425321.js";const rt="modulepreload",_e={},ct="/",J=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${ct}${s}`,s in _e)return;_e[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":rt,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((_,d)=>{i.addEventListener("load",_),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function it(t,e){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const i=[],_=Math.min(n.length,a.length);for(let d=0;d<_;d++){let u=n[d];const[k,v,x=""]=a[d];if(u.tagName.toLocaleLowerCase()===k){for(const y in v)u.getAttribute(y)!==v[y]&&u.setAttribute(y,v[y]);for(let y=0;y<u.attributes.length;y++){const C=u.attributes[y].name;C in v||u.removeAttribute(C)}u.innerHTML!==x&&(u.innerHTML=x)}else document.head.removeChild(u),u=he(a[d]),document.head.append(u);i.push(u)}n.slice(_).forEach(d=>document.head.removeChild(d)),a.slice(_).forEach(d=>{const u=he(d);document.head.appendChild(u),i.push(u)}),n=i};ke(()=>{const a=t.data,i=e.value,_=a&&a.title,d=a&&a.description,u=a&&a.frontmatter.head;document.title=(_?_+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",d||i.description),o([...u?ut(u):[]])})}function he([t,e,n]){const s=document.createElement(t);for(const o in e)s.setAttribute(o,e[o]);return n&&(s.innerHTML=n),s}function lt(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function ut(t){return t.filter(e=>!lt(e))}const dt=/#.*$/,_t=/(index)?\.(md|html)$/,Y=/\/$/,ht=/^[a-z]+:/i;function ne(t){return Array.isArray(t)}function se(t){return ht.test(t)}function vt(t,e){if(e===void 0)return!1;const n=ve(`/${t.data.relativePath}`),s=ve(e);return n===s}function ve(t){return decodeURI(t).replace(dt,"").replace(_t,"")}function pt(t,e){const n=t.endsWith("/"),s=e.startsWith("/");return n&&s?t.slice(0,-1)+e:!n&&!s?`${t}/${e}`:t+e}function te(t){return/^\//.test(t)?t:`/${t}`}function Le(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function ft(t){return t===!1||t==="auto"||ne(t)}function mt(t){return t.children!==void 0}function gt(t){return ne(t)?t.length===0:!t}function oe(t,e){if(ft(t))return t;e=te(e);for(const n in t)if(e.startsWith(te(n)))return t[n];return"auto"}function Ce(t){return t.reduce((e,n)=>(n.link&&e.push({text:n.text,link:Le(n.link)}),mt(n)&&(e=[...e,...Ce(n.children)]),e),[])}const $t=["href","aria-label"],bt=["src"],yt=m({__name:"NavBarTitle",setup(t){const{site:e,theme:n,localePath:s}=w();return(o,a)=>(l(),h("a",{class:"nav-bar-title",href:r(s),"aria-label":`${r(e).title}, back to home`},[r(n).logo?(l(),h("img",{key:0,class:"logo",src:r(D)(r(n).logo),alt:"Logo"},null,8,bt)):$("",!0),F(" "+f(r(e).title),1)],8,$t))}});var kt=b(yt,[["__scopeId","data-v-7ac13a1e"]]);function xt(){const{site:t,localePath:e,theme:n}=w();return p(()=>{const s=t.value.langs,o=Object.keys(s);if(o.length<2)return null;const i=j().path.replace(e.value,""),_=o.map(u=>({text:s[u].label,link:`${u}${i}`}));return{text:n.value.selectText||"Languages",items:_}})}const wt=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function Lt(){const{site:t}=w();return p(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;if(!n)return null;const s=Ct(n);return{text:Et(s,e.repoLabel),link:s}})}function Ct(t){return Ge.test(t)?t:`https://github.com/${t}`}function Et(t,e){if(e)return e;const n=t.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=wt.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function Ee(t){const e=j(),n=se(t.value.link);return{props:p(()=>{const o=pe(`/${e.data.relativePath}`);let a=!1;if(t.value.activeMatch)a=new RegExp(t.value.activeMatch).test(o);else{const i=pe(t.value.link);a=i==="/"?i===o:o.startsWith(i)}return{class:{active:a,isExternal:n},href:n?t.value.link:D(t.value.link),target:t.value.target||(n?"_blank":null),rel:t.value.rel||(n?"noopener noreferrer":null),"aria-label":t.value.ariaLabel}}),isExternal:n}}function pe(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const At={},Pt={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},St=c("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Tt=c("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),It=[St,Tt];function Ft(t,e){return l(),h("svg",Pt,It)}var ae=b(At,[["render",Ft]]);const Bt={class:"nav-link"},Nt=m({__name:"NavLink",props:{item:null},setup(t){const n=xe(t),{props:s,isExternal:o}=Ee(n.item);return(a,i)=>(l(),h("div",Bt,[c("a",we({class:"item"},r(s)),[F(f(t.item.text)+" ",1),r(o)?(l(),A(ae,{key:0})):$("",!0)],16)]))}});var fe=b(Nt,[["__scopeId","data-v-49fe041d"]]);const Mt=t=>(N("data-v-07381bdb"),t=t(),M(),t),Dt={class:"nav-dropdown-link-item"},Rt=Mt(()=>c("span",{class:"arrow"},null,-1)),Ht={class:"text"},Ot={class:"icon"},jt=m({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const n=xe(t),{props:s,isExternal:o}=Ee(n.item);return(a,i)=>(l(),h("div",Dt,[c("a",we({class:"item"},r(s)),[Rt,c("span",Ht,f(t.item.text),1),c("span",Ot,[r(o)?(l(),A(ae,{key:0})):$("",!0)])],16)]))}});var Ut=b(jt,[["__scopeId","data-v-07381bdb"]]);const zt=["aria-label"],qt={class:"button-text"},Vt={class:"dialog"},Wt=m({__name:"NavDropdownLink",props:{item:null},setup(t){const e=j(),n=T(!1);X(()=>e.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(l(),h("div",{class:S(["nav-dropdown-link",{open:n.value}])},[c("button",{class:"button","aria-label":t.item.ariaLabel,onClick:s},[c("span",qt,f(t.item.text),1),c("span",{class:S(["button-arrow",n.value?"down":"right"])},null,2)],8,zt),c("ul",Vt,[(l(!0),h(P,null,B(t.item.items,i=>(l(),h("li",{key:i.text,class:"dialog-item"},[g(Ut,{item:i},null,8,["item"])]))),128))])],2))}});var me=b(Wt,[["__scopeId","data-v-18d75f62"]]);const Yt={key:0,class:"nav-links"},Gt={key:1,class:"item"},Xt={key:2,class:"item"},Qt=m({__name:"NavLinks",setup(t){const{theme:e}=w(),n=xt(),s=Lt(),o=p(()=>e.value.nav||s.value||n.value);return(a,i)=>r(o)?(l(),h("nav",Yt,[r(e).nav?(l(!0),h(P,{key:0},B(r(e).nav,_=>(l(),h("div",{key:_.text,class:"item"},[_.items?(l(),A(me,{key:0,item:_},null,8,["item"])):(l(),A(fe,{key:1,item:_},null,8,["item"]))]))),128)):$("",!0),r(n)?(l(),h("div",Gt,[g(me,{item:r(n)},null,8,["item"])])):$("",!0),r(s)?(l(),h("div",Xt,[g(fe,{item:r(s)},null,8,["item"])])):$("",!0)])):$("",!0)}});var Ae=b(Qt,[["__scopeId","data-v-35b91e7e"]]);const Jt={emits:["toggle"]},Zt=c("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[c("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Kt=[Zt];function en(t,e,n,s,o,a){return l(),h("div",{class:"sidebar-button",onClick:e[0]||(e[0]=i=>t.$emit("toggle"))},Kt)}var tn=b(Jt,[["render",en]]);const nn=t=>(N("data-v-40587210"),t=t(),M(),t),sn={class:"nav-bar"},on=nn(()=>c("div",{class:"flex-grow"},null,-1)),an={class:"nav"},rn=m({__name:"NavBar",emits:["toggle"],setup(t){return(e,n)=>(l(),h("header",sn,[g(tn,{onToggle:n[0]||(n[0]=s=>e.$emit("toggle"))}),g(kt),on,c("div",an,[g(Ae)]),E(e.$slots,"search",{},void 0,!0)]))}});var cn=b(rn,[["__scopeId","data-v-40587210"]]);function ln(){let t=null,e=null;const n=vn(s,300);function s(){const i=un(),_=dn(i);for(let d=0;d<_.length;d++){const u=_[d],k=_[d+1],[v,x]=hn(d,u,k);if(v){history.replaceState(null,document.title,x||" "),o(x);return}}}function o(i){if(a(e),a(t),e=document.querySelector(`.sidebar a[href="${i}"]`),!e)return;e.classList.add("active");const _=e.closest(".sidebar-links > ul > li");_&&_!==e.parentElement?(t=_.querySelector("a"),t&&t.classList.add("active")):t=null}function a(i){i&&i.classList.remove("active")}I(()=>{s(),window.addEventListener("scroll",n)}),Q(()=>{o(decodeURIComponent(location.hash))}),q(()=>{window.removeEventListener("scroll",n)})}function un(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function dn(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>t.some(n=>n.hash===e.hash))}function _n(){return document.querySelector(".nav-bar").offsetHeight}function ge(t){const e=_n();return t.parentElement.offsetTop-e-15}function hn(t,e,n){const s=window.scrollY;return t===0&&s===0?[!0,null]:s<ge(e)?[!1,null]:!n||s<ge(n)?[!0,decodeURIComponent(e.hash)]:[!1,null]}function vn(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),s=!0,setTimeout(()=>{s=!1},e))}}function pn(){const t=j(),{site:e}=w();return ln(),p(()=>{const n=t.data.headers,s=t.data.frontmatter.sidebar,o=t.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return $e(n,o);const a=oe(e.value.themeConfig.sidebar,t.data.relativePath);return a===!1?[]:a==="auto"?$e(n,o):a})}function $e(t,e){const n=[];if(t===void 0)return[];let s;return t.forEach(({level:o,title:a,slug:i})=>{if(o-1>e)return;const _={text:a,link:`#${i}`};o===2?(s=_,n.push(_)):s&&(s.children||(s.children=[])).push(_)}),n}const Pe=t=>{const e=j(),{site:n,frontmatter:s}=w(),o=t.depth||1,a=s.value.sidebarDepth||1/0,i=e.data.headers,_=t.item.text,d=fn(n.value.base,t.item.link),u=t.item.children,k=vt(e,t.item.link),v=o<a?Se(k,u,i,o+1):null;return z("li",{class:"sidebar-link"},[z(d?"a":"p",{class:{"sidebar-link-item":!0,active:k},href:d},_),v])};function fn(t,e){return e===void 0||e.startsWith("#")?e:pt(t,e)}function Se(t,e,n,s=1){return e&&e.length>0?z("ul",{class:"sidebar-links"},e.map(o=>z(Pe,{item:o,depth:s}))):t&&n?Se(!1,mn(n),void 0,s):null}function mn(t){return Te(gn(t))}function gn(t){t=t.map(n=>Object.assign({},n));let e;return t.forEach(n=>{n.level===2?e=n:e&&(e.children||(e.children=[])).push(n)}),t.filter(n=>n.level===2)}function Te(t){return t.map(e=>({text:e.title,link:`#${e.slug}`,children:e.children?Te(e.children):void 0}))}const $n={key:0,class:"sidebar-links"},bn=m({__name:"SideBarLinks",setup(t){const e=pn();return(n,s)=>r(e).length>0?(l(),h("ul",$n,[(l(!0),h(P,null,B(r(e),o=>(l(),A(r(Pe),{item:o},null,8,["item"]))),256))])):$("",!0)}});const yn=m({__name:"SideBar",props:{open:{type:Boolean}},setup(t){return(e,n)=>(l(),h("aside",{class:S(["sidebar",{open:t.open}])},[g(Ae,{class:"nav"}),E(e.$slots,"sidebar-top",{},void 0,!0),g(bn),E(e.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var kn=b(yn,[["__scopeId","data-v-17c48e2f"]]);const xn=/bitbucket.org/;function wn(){const{page:t,theme:e,frontmatter:n}=w(),s=p(()=>{const{repo:a,docsDir:i="",docsBranch:_="master",docsRepo:d=a,editLinks:u}=e.value,k=n.value.editLink!=null?n.value.editLink:u,{relativePath:v}=t.value;return!k||!v||!a?null:Ln(a,d,i,_,v)}),o=p(()=>e.value.editLinkText||"Edit this page");return{url:s,text:o}}function Ln(t,e,n,s,o){return xn.test(t)?En(t,e,n,s,o):Cn(t,e,n,s,o)}function Cn(t,e,n,s,o){return(se(e)?e:`https://github.com/${e}`).replace(Y,"")+`/edit/${s}/`+(n?n.replace(Y,"")+"/":"")+o}function En(t,e,n,s,o){return(se(e)?e:t).replace(Y,"")+`/src/${s}/`+(n?n.replace(Y,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const An={class:"edit-link"},Pn=["href"],Sn=m({__name:"EditLink",setup(t){const{url:e,text:n}=wn();return(s,o)=>(l(),h("div",An,[r(e)?(l(),h("a",{key:0,class:"link",href:r(e),target:"_blank",rel:"noopener noreferrer"},[F(f(r(n))+" ",1),g(ae,{class:"icon"})],8,Pn)):$("",!0)]))}});var Tn=b(Sn,[["__scopeId","data-v-55695e90"]]);const In={key:0,class:"last-updated"},Fn={class:"prefix"},Bn={class:"datetime"},Nn=m({__name:"LastUpdated",setup(t){const{theme:e,page:n}=w(),s=p(()=>{const i=e.value.lastUpdated;return i!==void 0&&i!==!1}),o=p(()=>{const i=e.value.lastUpdated;return i===!0?"Last Updated":i}),a=T("");return I(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(i,_)=>r(s)?(l(),h("p",In,[c("span",Fn,f(r(o))+":",1),c("span",Bn,f(a.value),1)])):$("",!0)}});var Mn=b(Nn,[["__scopeId","data-v-30c3cbb4"]]);const Dn={class:"page-footer"},Rn={class:"edit"},Hn={class:"updated"},On=m({__name:"PageFooter",setup(t){return(e,n)=>(l(),h("footer",Dn,[c("div",Rn,[g(Tn)]),c("div",Hn,[g(Mn)])]))}});var jn=b(On,[["__scopeId","data-v-5c96fb00"]]);function Un(){const{page:t,theme:e}=w(),n=p(()=>Le(te(t.value.relativePath))),s=p(()=>{const d=oe(e.value.sidebar,n.value);return ne(d)?Ce(d):[]}),o=p(()=>s.value.findIndex(d=>d.link===n.value)),a=p(()=>{if(e.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),i=p(()=>{if(e.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),_=p(()=>!!a.value||!!i.value);return{next:a,prev:i,hasLinks:_}}const zn={},qn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Vn=c("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Wn=[Vn];function Yn(t,e){return l(),h("svg",qn,Wn)}var Gn=b(zn,[["render",Yn]]);const Xn={},Qn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Jn=c("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Zn=[Jn];function Kn(t,e){return l(),h("svg",Qn,Zn)}var es=b(Xn,[["render",Kn]]);const ts={key:0,class:"next-and-prev-link"},ns={class:"container"},ss={class:"prev"},os=["href"],as={class:"text"},rs={class:"next"},cs=["href"],is={class:"text"},ls=m({__name:"NextAndPrevLinks",setup(t){const{hasLinks:e,prev:n,next:s}=Un();return(o,a)=>r(e)?(l(),h("div",ts,[c("div",ns,[c("div",ss,[r(n)?(l(),h("a",{key:0,class:"link",href:r(D)(r(n).link)},[g(Gn,{class:"icon icon-prev"}),c("span",as,f(r(n).text),1)],8,os)):$("",!0)]),c("div",rs,[r(s)?(l(),h("a",{key:0,class:"link",href:r(D)(r(s).link)},[c("span",is,f(r(s).text),1),g(es,{class:"icon icon-next"})],8,cs)):$("",!0)])])])):$("",!0)}});var us=b(ls,[["__scopeId","data-v-e65a9748"]]);const ds={class:"page"},_s={class:"container"},hs=m({__name:"Page",setup(t){return(e,n)=>{const s=W("Content");return l(),h("main",ds,[c("div",_s,[E(e.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(jn),g(us),E(e.$slots,"bottom",{},void 0,!0)])])}}});var vs=b(hs,[["__scopeId","data-v-8fcebc32"]]);const ps={key:0,id:"ads-container"},fs=m({__name:"Layout",setup(t){const e=ot(()=>J(()=>import("./Home.1b9e550b.js"),["assets/Home.1b9e550b.js","assets/Page.f4fdd8ff.js","assets/plugin-vue_export-helper.18425321.js"])),n=()=>null,s=n,o=n,a=n,i=j(),{site:_,page:d,theme:u,frontmatter:k}=w(),v=p(()=>!!k.value.customLayout),x=p(()=>!!k.value.home),y=p(()=>Object.keys(_.value.langs).length>1),C=p(()=>{const L=u.value;return k.value.navbar===!1||L.navbar===!1?!1:_.value.title||L.logo||L.repo||L.nav}),H=T(!1),ze=p(()=>k.value.home||k.value.sidebar===!1?!1:!gt(oe(u.value.sidebar,i.data.relativePath))),K=L=>{H.value=typeof L=="boolean"?L:!H.value},qe=K.bind(null,!1);X(i,qe);const Ve=p(()=>[{"no-navbar":!C.value,"sidebar-open":H.value,"no-sidebar":!ze.value}]);return(L,le)=>{const We=W("Content"),Ye=W("Debug");return l(),h(P,null,[c("div",{class:S(["theme",r(Ve)])},[r(C)?(l(),A(cn,{key:0,onToggle:K},{search:R(()=>[E(L.$slots,"navbar-search",{},()=>[r(u).algolia?(l(),A(r(a),{key:0,options:r(u).algolia,multilang:r(y)},null,8,["options","multilang"])):$("",!0)])]),_:3})):$("",!0),g(kn,{open:H.value},{"sidebar-top":R(()=>[E(L.$slots,"sidebar-top")]),"sidebar-bottom":R(()=>[E(L.$slots,"sidebar-bottom")]),_:3},8,["open"]),c("div",{class:"sidebar-mask",onClick:le[0]||(le[0]=Ya=>K(!1))}),r(v)?(l(),A(We,{key:1})):r(x)?E(L.$slots,"home",{key:2},()=>[g(r(e),null,{hero:R(()=>[E(L.$slots,"home-hero")]),features:R(()=>[E(L.$slots,"home-features")]),footer:R(()=>[E(L.$slots,"home-footer")]),_:3})]):(l(),A(vs,{key:3},{top:R(()=>[E(L.$slots,"page-top-ads",{},()=>[r(u).carbonAds&&r(u).carbonAds.carbon?(l(),h("div",ps,[(l(),A(r(s),{key:"carbon"+r(d).relativePath,code:r(u).carbonAds.carbon,placement:r(u).carbonAds.placement},null,8,["code","placement"]))])):$("",!0)]),E(L.$slots,"page-top")]),bottom:R(()=>[E(L.$slots,"page-bottom"),E(L.$slots,"page-bottom-ads",{},()=>[r(u).carbonAds&&r(u).carbonAds.custom?(l(),A(r(o),{key:"custom"+r(d).relativePath,code:r(u).carbonAds.custom,placement:r(u).carbonAds.placement},null,8,["code","placement"])):$("",!0)])]),_:3}))],2),g(Ye)],64)}}}),ms={class:"theme"},gs=c("h1",null,"404",-1),$s=["href"],bs=m({__name:"NotFound",setup(t){const{site:e}=w(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(l(),h("div",ms,[gs,c("blockquote",null,f(s()),1),c("a",{href:r(e).base,"aria-label":"go to home"},"Take me home.",8,$s)]))}}),ys={Layout:fs,NotFound:bs};class ks{constructor(){this.x=50,this.y=50,this.vx=Math.random()*2+2,this.vy=Math.random()*2,this.color="#fff",this.shadowBlur=Math.random()*3,this.shadowX=Math.random()*2-1,this.shadowY=Math.random()*2-1,this.radiusX=Math.random()*3,this.radiusY=Math.random()*3,this.rotation=Math.PI*Math.floor(Math.random()*2)}}class re{constructor(e){this.width=300,this.height=300,this.dustQuantity=50,this.dustArr=[];const n=document.getElementById(e);if(n)this.canvas=n,this.ctx=n.getContext("2d"),this.build(),window.addEventListener("resize",()=>this.resize());else throw new Error("canvasID \u65E0\u6548")}build(){if(this.resize(),this.ctx){const e=re.getPoint(this.dustQuantity);for(let n of e){const s=new ks;this.buildDust(n[0],n[1],s),this.dustArr.push(s)}setInterval(()=>{this.play()},40)}}play(){var n;const e=this.dustArr;(n=this.ctx)==null||n.clearRect(0,0,this.width,this.height);for(let s of e)if(s.x<0||s.y<0){const o=this.width,a=Math.floor(Math.random()*window.innerHeight);s.x=o,s.y=a,this.buildDust(o,a,s)}else{const o=s.x-s.vx,a=s.y-s.vy;this.buildDust(o,a,s)}}buildDust(e,n,s){const o=this.ctx;e&&(s.x=e),n&&(s.y=n),o&&(o.beginPath(),o.shadowBlur=s.shadowBlur,o.shadowColor=s.color,o.shadowOffsetX=s.shadowX,o.shadowOffsetY=s.shadowY,o.ellipse(s.x,s.y,s.radiusX,s.radiusY,s.rotation,0,Math.PI*2),o.closePath(),o.fillStyle=s.color,o.fill())}resize(){const e=this.canvas,n=window.innerWidth,s=window.innerHeight;this.width=n,this.height=s,this.dustQuantity=Math.floor((n+s)/38),e!==void 0&&(e.width=n,e.height=s)}static getPoint(e=1){let n=[];for(let s=0;s<e;s++){const o=Math.floor(Math.random()*window.innerWidth),a=Math.floor(Math.random()*window.innerHeight);n.push([o,a])}return n}}const xs={class:"menu-list"},ws=["href"],Ls=["title"],Cs=m({__name:"index",setup(t){const{theme:e,page:n}=w(),s=e.value.nav,o=p(()=>`/${n.value.relativePath.split(".")[0]}`);return(a,i)=>(l(),h("header",null,[c("nav",null,[c("div",xs,[(l(!0),h(P,null,B(r(s),_=>(l(),h("a",{href:_.link,key:_.link,class:S(_.link===r(o)?"active":"")},[c("i",{class:S(`fa fa-${_.icon}`),title:_.text},null,10,Ls)],10,ws))),128))])])]))}});var Es=b(Cs,[["__scopeId","data-v-4729bdee"]]);function Ie(t){const e={};for(let n=0;n<t.length;n++){const s=t[n],o=s.frontMatter.tags;o&&o.forEach(a=>{e[a]||(e[a]=[]),e[a].push(s)})}return e}function Fe(t){const e={};for(let n=0;n<t.length;n++){const s=t[n],o=s.frontMatter.category;o&&o.forEach(a=>{e[a]||(e[a]=[]),e[a].push(s)})}return e}function Be(t){const e=[];let n="0",s=-1;for(let o=0;o<t.length;o++){const a=t[o];if(a.frontMatter.date){const i=a.frontMatter.date.split("-")[0];i===n?e[s].push(a):(s++,e[s]=[],e[s].push(a),n=i)}}return e}function be(t,e,n){const s=[];for(let o=0;o<t.length;o++){const a=t[o],i=a.frontMatter[n];i&&i.includes(e)&&s.push(a)}return Be(s)}const As={key:0,class:"social-links"},Ps=["href"],Ss=["title"],Ts=m({__name:"SocialLinks",setup(t){const{theme:e}=w();return(n,s)=>r(e).socialLinks.length?(l(),h("div",As,[(l(!0),h(P,null,B(r(e).socialLinks,o=>(l(),h("a",{key:o.link,href:o.link,target:"_blank"},[c("i",{class:S(`fa fa-${o.icon}`),title:o.icon},null,10,Ss)],8,Ps))),128))])):$("",!0)}});var Is=b(Ts,[["__scopeId","data-v-78d89ee0"]]);const ce=t=>(N("data-v-77475d0e"),t=t(),M(),t),Fs={key:0,class:"aside-wrapper"},Bs={href:"/",class:"logo"},Ns=["src"],Ms={class:"center dr"},Ds={href:"/"},Rs={class:"total"},Hs=["href"],Os=ce(()=>c("span",{class:"total-title"},"Archives Total",-1)),js={class:"total-number"},Us={class:"total-tags"},zs=ce(()=>c("span",{class:"total-title"},"Tags:",-1)),qs={class:"total-number"},Vs={class:"total-categories"},Ws=ce(()=>c("span",{class:"total-title"},"Categories:",-1)),Ys={class:"total-number"},Gs=m({__name:"index",setup(t){const{site:e,theme:n,frontmatter:s}=w(),o=e.value.title,a=n.value.logo,i=n.value.posts.length,_=p(()=>s.value.sidebar),d=p(()=>Object.keys(Ie(n.value.posts)).length),u=p(()=>Object.keys(Fe(n.value.posts)).length);return(k,v)=>r(_)?(l(),h("div",Fs,[c("aside",null,[c("div",null,[c("a",Bs,[c("img",{src:r(D)(r(a)),alt:"Logo"},null,8,Ns)]),c("h1",Ms,[c("a",Ds,"Dr."+f(r(o)),1)]),c("section",Rs,[c("a",{class:"total-archives",href:r(D)("/pages/archives")},[Os,c("span",js,f(r(i)),1)],8,Hs),c("div",Us,[zs,c("span",qs,f(r(d)),1)]),c("div",Vs,[Ws,c("span",Ys,f(r(u)),1)])]),g(Is)])])])):$("",!0)}});var Xs=b(Gs,[["__scopeId","data-v-77475d0e"]]);class Qs{constructor(){this.codeEles=document.getElementsByTagName("pre"),Array.from(this.codeEles).forEach(async n=>{const o=(await J(()=>import("./message.c045b3c0.js"),["assets/message.c045b3c0.js","assets/plugin-vue_export-helper.18425321.js","assets/Page.f4fdd8ff.js"])).default,a=document.createElement("i");a.setAttribute("class","btn-copy fa fa-clipboard"),n.appendChild(a),a.addEventListener("click",function(){const i=document.createElement("textarea"),_=a.previousElementSibling;i.value=_.innerText,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),o.success("Copied")})})}}const Js=t=>(N("data-v-059f3759"),t=t(),M(),t),Zs={class:"post-header"},Ks={class:"title"},eo={class:"info"},to={class:"item date",datetime:"2022-01-25T19:21:35.000Z"},no=Js(()=>c("div",{class:"divider"},null,-1)),so=m({__name:"PostHeader",setup(t){const{frontmatter:e}=w();let n=p(()=>e.value.title),s=p(()=>{const o=e.value.date;return(o?new Date(o).toJSON().split("T")[0]:"").split("-")});return(o,a)=>(l(),h("div",Zs,[c("h1",Ks,f(r(n)),1),c("div",eo,[c("span",to,f(r(s)[2])+" / "+f(r(s)[1])+" / "+f(r(s)[0]),1)]),no]))}});var oo=b(so,[["__scopeId","data-v-059f3759"]]);const ie=t=>(N("data-v-6a48459c"),t=t(),M(),t),ao={class:"post-footer"},ro=ie(()=>c("span",null,"\u672C\u6587\u4F5C\u8005\uFF1A",-1)),co=["href"],io=ie(()=>c("span",null,"\u672C\u6587\u94FE\u63A5\uFF1A",-1)),lo=["href"],uo=ie(()=>c("li",null,[c("span",null,"\u7248\u6743\u58F0\u660E\uFF1A"),F(" \u672C\u535A\u5BA2\u6240\u6709\u6587\u7AE0\u9664\u7279\u522B\u58F0\u660E\u5916\uFF0C\u5747\u91C7\u7528 "),c("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"},"CC BY-NC-SA 4.0"),F(" \u8BB8\u53EF\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002 ")],-1)),_o=m({__name:"PostFooter",setup(t){const{page:e,site:n,frontmatter:s}=w();let o=p(()=>{const a=`${e.value.relativePath.split(".")[0]}.html`;return`${n.value.themeConfig.website}/${a}`});return p(()=>s.value.postFooter),(a,i)=>(l(),h("div",ao,[c("ul",null,[c("li",null,[ro,c("a",{href:r(n).themeConfig.website,target:"_blank"},f(r(n).title),9,co)]),c("li",null,[io,c("a",{href:r(o),target:"_blank"},f(r(o)),9,lo)]),uo])]))}});var ho=b(_o,[["__scopeId","data-v-6a48459c"]]);const Ne=t=>(N("data-v-2ea4cd0e"),t=t(),M(),t),vo={class:"prev-next"},po=Ne(()=>c("hr",null,null,-1)),fo=["href"],mo={key:1},go=["href"],$o={key:1},bo=Ne(()=>c("hr",null,null,-1)),yo=m({__name:"PrevNext",setup(t){const{theme:e,page:n}=w(),s=p(()=>e.value.posts),o=p(()=>n.value.frontmatter.title);let a=O({regularPath:"",frontMatter:{title:""}}),i=O({regularPath:"",frontMatter:{title:""}});const _=(d,u)=>{u?(d.regularPath=u.regularPath,d.frontMatter.title=u.frontMatter.title):(d.regularPath="",d.frontMatter.title="")};return ke(()=>{const d=s.value.findIndex(u=>u.frontMatter.title===o.value);if(d>-1){const u=s.value[d-1],k=s.value[d+1];_(a,u),_(i,k)}}),(d,u)=>{var k,v,x,y,C,H;return l(),h("div",vo,[po,c("div",null,[de(c("a",{class:"prev",href:r(D)((k=r(a))==null?void 0:k.regularPath)},[r(e).docFooter.prev.icon?(l(),h("i",{key:0,class:S(`fa fa-${r(e).docFooter.prev.icon}`)},null,2)):$("",!0),r(e).docFooter.prev.text?(l(),h("span",mo,f(r(e).docFooter.prev.text),1)):$("",!0),F(" "+f((x=(v=r(a))==null?void 0:v.frontMatter)==null?void 0:x.title),1)],8,fo),[[ue,r(a).regularPath]]),de(c("a",{class:"next",href:r(D)((y=r(i))==null?void 0:y.regularPath)},[F(f((H=(C=r(i))==null?void 0:C.frontMatter)==null?void 0:H.title)+" ",1),r(e).docFooter.next.icon?(l(),h("i",{key:0,class:S(`fa fa-${r(e).docFooter.next.icon}`)},null,2)):$("",!0),r(e).docFooter.next.text?(l(),h("span",$o,f(r(e).docFooter.next.text),1)):$("",!0)],8,go),[[ue,r(i).regularPath]])]),bo])}}});var ko=b(yo,[["__scopeId","data-v-2ea4cd0e"]]);function xo(t){let e=t[0];for(let n=1;n<t.length;n++){const s=t[n];s.length>e.length&&(e=s)}return e}function Me(t,e){return Array.from(t).filter(s=>e.test(s.nodeName))}function De(t,e){let n,s,o=0;return function(){n=this,s=arguments;let a=new Date().valueOf();a-o>e&&(t.apply(n,s),o=a)}}const Re=t=>(N("data-v-46ebd702"),t=t(),M(),t),wo=Re(()=>c("i",{class:"fa fa-caret-up"},null,-1)),Lo=Re(()=>c("p",null,"TOP",-1)),Co=[wo,Lo],Eo=m({__name:"BackTop",setup(t){const e=T(0),n=p(()=>e.value>300?"block":"none");I(()=>{window.addEventListener("scroll",o)}),q(()=>{window.removeEventListener("scroll",o)});const s=()=>{e.value=document.documentElement.scrollTop},o=De.bind(this,s,1e3)(),a=()=>{const i=document.documentElement.scrollTop/6,_=setInterval(()=>{document.documentElement.scrollTop=document.documentElement.scrollTop-i,e.value=document.documentElement.scrollTop,e.value<=0&&clearInterval(_)},50)};return(i,_)=>(l(),h("div",{class:"back-top",style:at({display:r(n)}),onClick:a},Co,4))}});var Ao=b(Eo,[["__scopeId","data-v-46ebd702"]]);const Z=t=>(N("data-v-6f889226"),t=t(),M(),t),Po=Z(()=>c("i",{class:"fa fa-heartbeat mr4"},null,-1)),So=Z(()=>c("p",null,[F(" Power With "),c("a",{href:"https://vitejs.cn/vitepress/",target:"_blank"},"VitePress"),F(" & "),c("a",{href:"https://github.com/Yue-plus/hexo-theme-arknights",target:"_blank"},"Arknights")],-1)),To=Z(()=>c("div",null,[c("span",null,"\xA9"),c("span",null,"2021 to 2022")],-1)),Io=Z(()=>c("div",null,[c("span",null,"ICP"),c("span",null,"\u2014 RHODEISLAND \u2014")],-1)),Fo=m({__name:"Footer",setup(t){const{theme:e}=w(),n=T();let s=O({day:0,hour:0,minute:0,second:0}),o=null;I(()=>{e.value.footer.runtime.enable&&(o=setInterval(a,1e3))}),q(()=>{o&&clearInterval(o)});const a=()=>{const i=Xe();s.day=i.day,s.hour=i.hour,s.minute=i.minute,s.second=i.second};return(i,_)=>(l(),h("footer",null,[r(e).footer.runtime.enable?(l(),h("p",{key:0,ref_key:"runtimeRef",ref:n},[Po,F(" "+f(r(s).day)+" days "+f(r(s).hour)+" hours "+f(r(s).minute)+" minutes and "+f(r(s).second)+" seconds ",1)],512)):$("",!0),So,r(e).footer.copyright?(l(),h(P,{key:1},[To,Io],64)):$("",!0)]))}});var Bo=b(Fo,[["__scopeId","data-v-6f889226"]]);const No=m({__name:"index",setup(t){const{frontmatter:e}=w(),n=p(()=>e.value.page);I(()=>{s()}),Q(()=>{s()});const s=()=>{n.value||new Qs};return(o,a)=>{const i=W("Content");return l(),h("div",{class:S(["content",r(n)?"":"post-content"]),id:"postContent"},[r(n)?$("",!0):(l(),A(oo,{key:0})),g(i,{id:"content"}),r(n)?$("",!0):(l(),h(P,{key:1},[g(ho),g(ko),g(Ao)],64)),g(Bo)],2)}}}),He=/^H[1-6]{1,}$/ig,Mo=t=>{const e=t.childNodes,n=Me(e,He);return Do(n)};function Do(t){const e=[];for(let n=0;n<t.length;n++){const s=t[n],o=/^(_\d)+(-\d)*/ig,a=s.id.match(o)[0];e.push({nodeName:s.nodeName,text:s.innerText.slice(0,s.innerText.length-1),id:s.id,level:a})}return Ro(e)}function Ro(t){const e=[],n={};t.forEach(s=>{n[s.level]=s});for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const o=n[s];if(/^(_\d)+$/ig.test(s))e.push(o);else{const _=Object.keys(n).filter(u=>u!==s&&s.includes(u)),d=xo(_);n[d].child?n[d].child.push(o):n[d].child=[o]}}return e}const Ho=["href","name","title","onClick"],Oo=m({__name:"CataList",props:{tree:Array},setup(t){const e=n=>{n.open=!n.open,n.active=!0};return(n,s)=>(l(),h("ul",null,[(l(!0),h(P,null,B(t.tree,o=>{var a;return l(),h("li",{key:o.id},[c("a",{href:`#${o.id}`,name:o.id,title:o.text,class:S([[o.nodeName,o.active?"active":""],"link"]),onClick:i=>e(o)},f(o.text),11,Ho),((a=o.child)==null?void 0:a.length)&&o.open?(l(),A(Oe,{key:0,tree:o.child},null,8,["tree"])):$("",!0)])}),128))]))}});var Oe=b(Oo,[["__scopeId","data-v-542bc79c"]]);const jo={key:0,class:"catalog"},Uo=m({__name:"index",setup(t){const e=O([]),n=T(0),s=O([]),o=O([]);I(()=>{a(),window.addEventListener("scroll",_)}),Q(()=>{a()}),q(()=>{window.removeEventListener("scroll",_)});const a=()=>{var y;const v=(y=document.getElementById("content"))==null?void 0:y.childNodes[0];e.length=0;const x=Mo(v);e.push(...x),d(v)},i=()=>{n.value=document.documentElement.scrollTop;for(let v=o.length-1;v>0;v--){const x=o[v];if(n.value>x.top-180){k(e),u(e,x.id);return}}},_=De.bind(this,i,1e3)(),d=v=>{const x=v.childNodes;s.push(...Me(x,He));const y=s.map(C=>({id:C.id,top:C.getBoundingClientRect().bottom}));o.push(...y)},u=(v,x)=>{for(let y=0;y<v.length;y++){const C=v[y];if(C.id===x){C.active=!0,C.open=!0;return}C.child&&u(C.child,x)}},k=v=>{for(let x=0;x<v.length;x++){const y=v[x];y.active&&(y.active=!1),y.child&&k(y.child)}};return(v,x)=>e.length?(l(),h("div",jo,[g(Oe,{tree:e},null,8,["tree"])])):$("",!0)}});var zo=b(Uo,[["__scopeId","data-v-2fa10eb7"]]);const qo=()=>z("script",{src:"https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"});const Vo={class:"layout"},Wo={ref:"canvasRef",id:"canvas-dust",width:"1036",height:"228"},Yo=m({__name:"NewLayout",setup(t){const{theme:e,frontmatter:n}=w();return I(()=>{new re("canvas-dust")}),(s,o)=>(l(),h(P,null,[c("main",Vo,[g(Xs,{class:"aside"}),g(No,{class:"content"}),g(Es,{class:"navbar"})]),r(n).page?$("",!0):(l(),A(zo,{key:0})),r(e).live2d?(l(),A(r(qo),{key:1})):$("",!0),c("canvas",Wo,null,512)],64))}});var Go=b(Yo,[["__scopeId","data-v-0ad01684"]]);const Xo={class:"categories"},Qo=c("h1",null,"categories",-1),Jo={class:"list"},Zo=["onClick"],Ko={class:"link",href:"#"},ea={class:"count"},ta=m({__name:"Categories",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const s=T(t.selected),o=a=>{s.value=a,e("toggle",a)};return(a,i)=>(l(),h("div",Xo,[Qo,c("ul",Jo,[(l(!0),h(P,null,B(t.list,(_,d)=>(l(),h("li",{onClick:u=>o(d),class:S(["item",s.value==d?"active":""])},[c("a",Ko,"# "+f(d)+" #",1),c("span",ea,f(t.list[d].length),1)],10,Zo))),256))])]))}});const na=t=>(N("data-v-21fa307c"),t=t(),M(),t),sa={class:"tags"},oa=na(()=>c("h1",null,"tags",-1)),aa={class:"list",itemprop:"keywords"},ra=["onClick"],ca={class:"link",href:"#",rel:"tag"},ia={class:"count"},la=m({__name:"Tags",props:{list:Object,selected:String},emits:["toggle"],setup(t,{emit:e}){const s=T(t.selected),o=a=>{s.value=a,e("toggle",a)};return(a,i)=>(l(),h("div",sa,[oa,c("ul",aa,[(l(!0),h(P,null,B(t.list,(_,d)=>(l(),h("li",{onClick:u=>o(d),class:S(["item",s.value==d?"active":""])},[c("a",ca,f(d),1),c("span",ia,f(t.list[d].length),1)],10,ra))),256))])]))}});var ua=b(la,[["__scopeId","data-v-21fa307c"]]);const da={class:"archive-list"},_a=c("h1",null,"archives",-1),ha={class:"bg"},va=["href"],pa=m({__name:"ArchiveList",props:{list:Object},setup(t){return(e,n)=>(l(),h("div",da,[_a,t.list.length?(l(!0),h(P,{key:0},B(t.list,s=>(l(),h("div",ha,[c("h2",null,f(s[0].frontMatter.date.split("-")[0]),1),(l(!0),h(P,null,B(s,(o,a)=>(l(),h("div",{key:a,class:"article-item"},[c("time",null,f(o.frontMatter.date.slice(5)),1),c("a",{href:r(D)(o.regularPath)},f(o.frontMatter.title),9,va)]))),128))]))),256)):$("",!0)]))}});const fa={class:"archive-wrapper"},ma={class:"aside"},ga=m({__name:"index",setup(t){const{theme:e}=w(),n=p(()=>Ie(e.value.posts)),s=p(()=>Fe(e.value.posts));let o=O({list:Be(e.value.posts)}),a=T(""),i=T("");const _=u=>{a.value=u,i.value="",o.list=be(e.value.posts,u,"tags")},d=u=>{i.value=u,a.value="",o.list=be(e.value.posts,u,"category")};return I(()=>{const u=document.location.hash;if(u){const k=u.substring(1).split("-")[0],v=u.substring(1).split("-")[1];k==="tag"?a.value=v:i.value=v}}),(u,k)=>(l(),h("div",fa,[g(pa,{list:r(o).list,class:"item"},null,8,["list"]),c("div",ma,[g(ta,{list:r(s),onToggle:d,class:"item"},null,8,["list"]),g(ua,{list:r(n),onToggle:_,class:"item"},null,8,["list"])])]))}}),$a={key:0,id:"comment"},ba=m({__name:"Comment",setup(t){const{theme:e,frontmatter:n}=w(),s=p(()=>n.value.comment);let o=e.value.valine,a=T();I(async()=>{let _=await J(()=>import("./Valine.min.ad08ee52.js").then(function(d){return d.V}),[]);a.value=_.default,i()}),Q(()=>{i()});const i=()=>{s&&new a.value({el:"#comment",...o})};return(_,d)=>r(s)?(l(),h("div",$a)):$("",!0)}});const je=t=>(N("data-v-090025bd"),t=t(),M(),t),ya={class:"feedback"},ka={class:"tc"},xa=F("Feedback "),wa=["id"],La=je(()=>c("i",{class:"fa fa-eye mr4"},null,-1)),Ca=je(()=>c("i",{class:"leancloud-visitors-count"},"0",-1)),Ea=[La,Ca],Aa=m({__name:"Feedback",setup(t){const{page:e}=w();return(n,s)=>(l(),h("div",ya,[c("h1",ka,[xa,c("div",{id:`/${r(e).relativePath.replace(".md",".html")}`,class:"leancloud_visitors","data-flag-title":"Your Article Title"},Ea,8,wa)]),g(ba)]))}});var Pa=b(Aa,[["__scopeId","data-v-090025bd"]]);const Sa={},Ta={class:"loading-wrap hover",width:"100",height:"100",viewBox:"0 0 40 60"},Ia=c("polygon",{class:"triangulo",fill:"none",stroke:"#fff","stroke-width":"1",points:"16,1 32,32 1,32"},null,-1),Fa=c("text",{class:"loading-text",x:"0",y:"45",fill:"#fff"},"Loading...",-1),Ba=[Ia,Fa];function Na(t,e){return l(),h("svg",Ta,Ba)}var Ma=b(Sa,[["render",Na]]);var G={...ys,Layout:Go,enhanceApp({app:t}){t.component("Archives",ga),t.component("Page",Qe),t.component("Feedback",Pa),t.component("Loading",Ma)}};const ee=new Set,Ue=()=>document.createElement("link"),Da=t=>{const e=Ue();e.rel="prefetch",e.href=t,document.head.appendChild(e)},Ra=t=>{const e=new XMLHttpRequest;e.open("GET",t,e.withCredentials=!0),e.send()};let V;const Ha=U&&(V=Ue())&&V.relList&&V.relList.supports&&V.relList.supports("prefetch")?Da:Ra;function Oa(){if(!U||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const e=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const _=i.target;n.unobserve(_);const{pathname:d}=_;if(!ee.has(d)){ee.add(d);const u=ye(d);Ha(u)}}})}),e(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:i,hostname:_,pathname:d}=a,u=d.match(/\.\w+$/);u&&u[0]!==".html"||i!=="_blank"&&_===location.hostname&&(d!==location.pathname?n.observe(a):ee.add(d))})})};I(s);const o=j();X(()=>o.path,s),q(()=>{n&&n.disconnect()})}const ja=m({setup(t,{slots:e}){const n=T(!1);return I(()=>{n.value=!0}),()=>n.value&&e.default?e.default():null}}),Ua=G.NotFound||(()=>"404 Not Found"),za={name:"VitePressApp",setup(){const{site:t}=w();return I(()=>{X(()=>t.value.lang,e=>{document.documentElement.lang=e},{immediate:!0})}),Oa(),()=>z(G.Layout)}};function qa(){const t=Wa(),e=Va();e.provide(Ke,t);const n=et(t.route);return e.provide(tt,n),U&&it(t.route,n.site),e.component("Content",nt),e.component("ClientOnly",ja),e.component("Debug",()=>null),Object.defineProperty(e.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),G.enhanceApp&&G.enhanceApp({app:e,router:t,siteData:st}),{app:e,router:t}}function Va(){return Ze(za)}function Wa(){let t=U,e;return Je(n=>{let s=ye(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),U?(t=!1,J(()=>import(s),[])):require(s)},Ua)}if(U){const{app:t,router:e}=qa();e.go().then(()=>{t.mount("#app")})}export{fe as N,qa as createApp};
