import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{p as _,q as a,r,z as n,I as o,J as d,L as f,H as i,x,F as m,B as v,K as g,S as h,s as y}from"./framework.d7d875d2.js";const b={class:"tab"},k=["onClick"],F=_({__name:"Tab",props:{data:{type:Array,required:!0},active:{type:String,required:!0}},emits:["update:active"],setup(u,{emit:t}){const s=l=>{t("update:active",l)};return(l,c)=>(a(),r(o,null,[n("ul",b,[(a(!0),r(o,null,d(u.data,e=>(a(),r("li",{key:e,class:i(e===u.active?"active":""),onClick:G=>s(e)},x(e),11,k))),128))]),f(l.$slots,"default",{},void 0,!0)],64))}});var $=p(F,[["__scopeId","data-v-a90b4ea8"]]);const B=["title"],C=["src","alt"],A=_({__name:"ImgList",props:{data:{type:Array,defualt:()=>[]}},setup(u){const t=m(!1),s=()=>{t.value=!t.value};return(l,c)=>(a(),r(o,null,[n("i",{class:i(`fa fa-${t.value?"th":"list"} toggle-btn`),onClick:s},null,2),n("ul",{class:i(`img-list ${t.value?"":"small"}`)},[(a(!0),r(o,null,d(u.data,e=>(a(),r("li",{key:e.url,title:e.text},[n("img",{src:e.url,alt:e.text},null,8,C)],8,B))),128))],2)],64))}});var I=p(A,[["__scopeId","data-v-5648b56d"]]);const L=_({__name:"Arknights",setup(u){const t=[{url:"https://s1.xptou.com/2022/09/29/633501799dfa8.jpg",text:"\u7AEF\u5348-2022"},{url:"https://s1.xptou.com/2022/09/29/6335017932a9d.jpg",text:"\u65B0\u6625\u795D\u798F-\u963F\u7C73\u5A05"},{url:"https://s1.xptou.com/2022/09/29/6335017965b49.jpg",text:"\u65B0\u6625\u795D\u798F-\u51EF\u5C14\u897F"},{url:"https://s1.xptou.com/2022/09/29/63350179671fc.jpg",text:"\u65B0\u6625\u795D\u798F-\u514B\u6D1B\u65AF"}];return(s,l)=>(a(),v(I,{data:t}))}}),T={class:"collect"},D=_({__name:"index",setup(u){const t=["Arknights"],s=m(t[0]);return(l,c)=>(a(),r("div",T,[g($,{data:t,active:s.value,"onUpdate:active":c[0]||(c[0]=e=>s.value=e)},{default:h(()=>[s.value==="Arknights"?(a(),v(L,{key:0})):y("",!0)]),_:1},8,["active"])]))}}),E='{"title":"Game","description":"Game","frontmatter":{"title":"Game","description":"Game","date":"2022-09-23T00:00:00.000Z","page":true,"sidebar":true,"header":true,"comment":true,"postInfo":false,"postFooter":false},"relativePath":"pages/collect.md","lastUpdated":1664423902962}',j={},N=Object.assign(j,{__name:"collect",setup(u){return(t,s)=>(a(),r("div",null,[g(D)]))}});export{E as __pageData,N as default};
