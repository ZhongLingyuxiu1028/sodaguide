import{u as I,f as Z,g as ee,h as U,i as se,j as te,t as ae,k as re,l as E,m as D,n as le,p as M,q as t,s as F,v as O,R as _,x as oe,y as ie,z as ue,A as ne,B as ce,C as he,D as me,E as de,O as ve,F as ye,G as P,H as pe,I as ge,P as we,J as ke}from"./app-DxdSI7hf.js";const fe=["/","/about/","/about/contribution.html","/about/history.html","/about/links.html","/concerts/","/members/","/news/20yike.html","/news/","/news/perform.html","/resources/","/resources/music.html","/start/","/wiki/","/works/","/works/air.html","/works/english.html","/concerts/answer/20yike-hk-tp.html","/concerts/answer/","/concerts/answer/myrdxqs.html","/concerts/answer/yqww.html","/concerts/guide/","/concerts/guide/photo.html","/concerts/guide/scalped-ticket.html","/concerts/guide/song-interact.html","/concerts/guide/song-request.html","/concerts/sodagreen/","/members/partner/","/members/partner/shiboyuan.html","/members/partner/zhongchengyang.html","/members/sodagreen/","/members/sodagreen/gongyuqi.html","/members/sodagreen/hejingyang.html","/members/sodagreen/liujiakai.html","/members/sodagreen/shijunwei.html","/members/sodagreen/wuqingfeng.html","/members/sodagreen/xiexinyi.html","/members/team/","/members/team/huangjiewei.html","/resources/sodazine/","/resources/sodazine/sodaguide.html","/resources/sodazine/sodazine1.html","/resources/sodazine/sodazine2.html","/resources/sodazine/sodazine3.html","/resources/sodazine/sodazine4.html","/resources/sodazine/sodazine5.html","/resources/sodazine/sodazine6.html","/resources/sodazine/sodazine7.html","/resources/sodazine/sodazine8.html","/resources/sodazine/sodazine9.html","/resources/story-and-text/","/resources/story-and-text/concert-notes.html","/resources/story-and-text/lyric-evaluation.html","/resources/story-and-text/lyric-imagery.html","/start/sodagreen/","/start/sodagreen/agent.html","/start/sodagreen/copyright.html","/start/sodagreen/oaeen.html","/start/sodagreen/trademark.html","/start/wuqingfeng/","/wiki/fans/","/wiki/fans/club.html","/wiki/fans/fans.html","/wiki/works/GMA.html","/wiki/works/","/wiki/works/favorite.html","/wiki/works/haowuqing.html","/wiki/works/vivaldi.html","/404.html"],be="SEARCH_PRO_QUERY_HISTORY",v=I(be,[]),He=()=>{const{queryHistoryCount:a}=P,r=a>0;return{enabled:r,queryHistory:v,addQueryHistory:l=>{r&&(v.value.length<a?v.value=Array.from(new Set([l,...v.value])):v.value=Array.from(new Set([l,...v.value.slice(0,a-1)])))},removeQueryHistory:l=>{v.value=[...v.value.slice(0,l),...v.value.slice(l+1)]}}},j=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:L}=P,y=I(xe,[]),ze=()=>{const a=L>0;return{enabled:a,resultHistory:y,addResultHistory:r=>{if(a){const l={link:j(r),display:r.display};"header"in r&&(l.header=r.header),y.value.length<L?y.value=[l,...y.value]:y.value=[l,...y.value.slice(0,L-1)]}},removeResultHistory:r=>{y.value=[...y.value.slice(0,r),...y.value.slice(r+1)]}}},Re=a=>{const r=ce(),l=U(),Q=he(),i=E(!1),g=me([]);return de(()=>{const{search:b,terminate:p}=ve(),H=()=>{g.value=[],i.value=!1},w=ye(m=>{i.value=!0,m?b(m,l.value,r.value).then(d=>{var x,k;return((k=(x=r.value).searchFilter)==null?void 0:k.call(x,d,m,l.value,Q.value))??d}).then(d=>{g.value=d,i.value=!1}).catch(d=>{console.error(d),H()}):H()},P.searchDelay);M([a,l],()=>w(a.value),{immediate:!0}),pe(()=>{p()})}),{searching:i,results:g}};var qe=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:r}){const l=ee(),Q=U(),i=se(te),{enabled:g,addQueryHistory:b,queryHistory:p,removeQueryHistory:H}=He(),{enabled:w,resultHistory:m,addResultHistory:d,removeResultHistory:x}=ze(),k=g||w,q=ae(a,"query"),{results:f,searching:B}=Re(q),o=re({isQuery:!0,index:0}),c=E(0),h=E(0),T=D(()=>k&&(p.value.length>0||m.value.length>0)),C=D(()=>f.value.length>0),S=D(()=>f.value[c.value]||null),G=()=>{const{isQuery:e,index:s}=o;s===0?(o.isQuery=!e,o.index=e?m.value.length-1:p.value.length-1):o.index=s-1},Y=()=>{const{isQuery:e,index:s}=o;s===(e?p.value.length-1:m.value.length-1)?(o.isQuery=!e,o.index=0):o.index=s+1},J=()=>{c.value=c.value>0?c.value-1:f.value.length-1,h.value=S.value.contents.length-1},V=()=>{c.value=c.value<f.value.length-1?c.value+1:0,h.value=0},K=()=>{h.value<S.value.contents.length-1?h.value+=1:V()},N=()=>{h.value>0?h.value-=1:J()},A=e=>e.map(s=>ge(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=we[e.index]||"$content",[u,R=""]=ke(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",A([u,...n,R])))}return e.display.map(s=>t("div",A(s)))},z=()=>{c.value=0,h.value=0,r("updateQuery",""),r("close")};return le("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=S.value.contents[h.value];b(a.query),d(s),l.push(j(s)),z()}}else if(w){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:s}=o;o.isQuery?(r("updateQuery",p.value[s]),e.preventDefault()):(l.push(m.value[s].link),z())}}}}),M([c,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:q.value?!C.value:!T.value}],id:"search-pro-results"},q.value===""?k?T.value?[g?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),p.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===s}],onClick:()=>{r("updateQuery",e)}},[t(F,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:u=>{u.preventDefault(),u.stopPropagation(),H(s)}})]))])):null,w?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),m.value.map((e,s)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===s}],onClick:()=>{z()}},()=>[t(F,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(u=>A(u)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:u=>{u.preventDefault(),u.stopPropagation(),x(s)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult:B.value?t(oe,{hint:i.value.searching}):C.value?t("ul",{class:"search-pro-result-list"},f.value.map(({title:e,contents:s},u)=>{const R=c.value===u;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,X)=>{const $=R&&h.value===X;return t(_,{to:j(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{b(a.query),d(n),z()}},()=>[n.type==="text"?null:t(n.type==="title"?ie:n.type==="heading"?ue:ne,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult)}});export{qe as default};
