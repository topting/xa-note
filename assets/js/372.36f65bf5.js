"use strict";(self.webpackChunkxa_note_code=self.webpackChunkxa_note_code||[]).push([[372],{9372:(t,a,s)=>{s.r(a),s.d(a,{default:()=>d});var i=s(6252),n=s(3577);const o={class:"categories-container"},e={class:"category-list"},c={class:"text"},l={class:"num"};var r=s(2119),u=s(7270),f=s(3260),g=s(7550),P=s(4554),p=s(3473);const m=(0,i.aZ)({components:{Common:P.Z,PostList:g.Z,Pagation:p.Z},setup(){const{classificationPosts:t,classificationSummary:a}=(0,u.Vi)(),s=(0,r.tv)();return{classificationList:(0,i.Fl)((()=>{let s=[];const i=t.value.currentClassificationKey;if(i){const{items:t=[]}=a.value[i];s=Object.values(t)}return s})),classificationPosts:t,handlePagation:a=>{const{currentClassificationKey:i,currentClassificationValue:n}=t.value;s.push(`/${i}/${n}/${a}/`)},convertToPinyin:f.JF}}}),d=(0,s(3744).Z)(m,[["render",function(t,a,s,r,u,f){const g=(0,i.up)("RouterLink"),P=(0,i.up)("PostList"),p=(0,i.up)("Pagation"),m=(0,i.up)("Common");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i._)("ul",e,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.classificationList,(({label:a,length:s},o)=>((0,i.wg)(),(0,i.iD)("li",{key:o,class:(0,n.C_)(["category-item",{active:t.classificationPosts.currentClassificationValue===t.convertToPinyin(a)}])},[(0,i.Wm)(g,{class:"category-link",to:`/${t.classificationPosts.currentClassificationKey}/${t.convertToPinyin(a)}/1/`},{default:(0,i.w5)((()=>[(0,i._)("span",c,(0,n.zw)(a),1),(0,i._)("span",l,(0,n.zw)(s),1)])),_:2},1032,["to"])],2)))),128))]),(0,i.Wm)(P,{data:t.classificationPosts.pages,total:t.classificationPosts.total,"page-size":t.classificationPosts.pageSize,"current-page":t.classificationPosts.currentPage},null,8,["data","total","page-size","current-page"]),t.classificationPosts.total>10?((0,i.wg)(),(0,i.j4)(p,{key:0,currentPage:t.classificationPosts.currentPage,total:t.classificationPosts.total,onChange:t.handlePagation},null,8,["currentPage","total","onChange"])):(0,i.kq)("",!0)])),_:1})])}]])}}]);