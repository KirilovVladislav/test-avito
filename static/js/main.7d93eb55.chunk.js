(this["webpackJsonptest-avito"]=this["webpackJsonptest-avito"]||[]).push([[0],{30:function(e,t,n){e.exports={card:"Comment_card__B2R2M",btn:"Comment_btn__1QWQt",text:"Comment_text__1-ryg"}},37:function(e,t,n){e.exports={container:"Comments_container__2gEP4",counter:"Comments_counter__AvQSJ"}},54:function(e,t,n){e.exports={newsInfo:"NewsInfo_newsInfo__10hh7"}},55:function(e,t,n){e.exports={title:"NewsItem_title__2B4D3"}},73:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(17),s=n.n(r),i=n(10),o=n(16),u=(n(72),n(73),n(5)),j=n(8),d=n(53),l=n(9),b=n(95),f=n(96),O=n(97),h=n(56),m=n(25),x=n.n(m),p=n(34),w=n(38),v=n(21),g=Object(v.b)({name:"news",initialState:{newsIdList:[],news:[],activeNews:{},comments:[]},reducers:{setNewsIdList:function(e,t){e.newsIdList=t.payload},setNewsItem:function(e,t){e.news=[].concat(Object(w.a)(e.news),[t.payload]),e.news.sort((function(e,t){return t.id-e.id}))},clearNews:function(e){e.news=[]},setActiveNews:function(e,t){e.activeNews=t.payload},setComment:function(e,t){e.comments=[].concat(Object(w.a)(e.comments),[t.payload])}}}),I=g.actions,N=I.setNewsIdList,y=(I.setNewsItem,I.clearNews),_=(I.setActiveNews,I.setComment,function(){return function(){var e=Object(p.a)(x.a.mark((function e(t,n,c){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/newstories.json");case 2:a=e.sent,t(N(a.data.slice(0,100)));case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()}),k=function(e,t,n){return function(){var c=Object(p.a)(x.a.mark((function c(a,r,s){var i;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.get("/item/".concat(e,".json"));case 2:if(!(i=c.sent)||!i.data){c.next=8;break}if(!i.data.deleted){c.next=6;break}return c.abrupt("return");case 6:a(g.actions[t](i.data)),n&&n(i.data);case 8:case"end":return c.stop()}}),c)})));return function(e,t,n){return c.apply(this,arguments)}}()},S=g.reducer,E=n(19),C=n(54),L=n.n(C),M=function(e){var t=Math.floor((new Date-1e3*e)/1e3),n=Math.floor(t/31536e3);return n>1?"".concat(n," years"):(n=Math.floor(t/2592e3))>1?"".concat(n," months"):(n=Math.floor(t/86400))>1?"".concat(n," days"):(n=Math.floor(t/3600))>1?"".concat(n," hours"):(n=Math.floor(t/60),"".concat(n," minutes"))},A=function(e){var t=e.time,n=e.children,r=Object(a.useState)(M(t)),s=Object(j.a)(r,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return o(M(t))}),6e4);return function(){return clearInterval(e)}}),[]),Object(c.jsxs)("span",{children:["".concat(i),n]})},U=function(e){var t=e.score,n=e.by,a=e.time;return Object(c.jsxs)("p",{className:L.a.newsInfo,children:[Object(c.jsx)("span",{children:"".concat(t," point")}),Object(c.jsx)("span",{children:"by ".concat(n)}),Object(c.jsx)(A,{time:a,children:" ago"})]})},B=n(55),T=n.n(B),z=Object(a.memo)((function(e){var t=e.id,n=e.loading,r=e.setLoading,s=Object(i.b)(),u=Object(i.c)((function(e){return e.news})).newsIdList,d=Object(a.useState)({}),l=Object(j.a)(d,2),b=l[0],f=l[1];return Object(a.useEffect)((function(){s(k(t,"setNewsItem",f))}),[]),Object(a.useEffect)((function(){b.title&&u[u.length-1]===t&&r(!1)}),[b]),Object(c.jsx)(c.Fragment,{children:!n&&b.title&&Object(c.jsxs)(O.a.Item,{children:[Object(c.jsx)(o.b,{to:"/item/".concat(t),children:Object(c.jsx)("h3",{className:T.a.title,children:"".concat(b.title)})}),Object(c.jsx)(U,Object(E.a)({},b))]},t)})})),F=n(94),H=function(e){var t=e.handleUpdate,n=e.children;return Object(c.jsx)(F.a,{onClick:t,children:n})},J=function(e){return Object(u.f)((function(t){var n=Object(i.b)(),r=Object(i.c)((function(e){return e.news})),s=r.activeNews,o=r.newsIdList,u=t.match.params.itemId,d=Object(a.useState)({}),l=Object(j.a)(d,2),b=l[0],f=l[1],O=Object(a.useState)(!0),h=Object(j.a)(O,2),m=h[0],x=h[1],p=Object(a.useState)(!1),w=Object(j.a)(p,2),v=w[0],g=w[1],I=Object(a.useState)(null),N=Object(j.a)(I,2),y=N[0],S=N[1],C=Object(a.useState)(null),L=Object(j.a)(C,2),M=L[0],A=L[1],U=Object(a.useState)(null),B=Object(j.a)(U,2),T=B[0],z=B[1],F={getNewsIdList:_,getItem:k};Object(a.useEffect)((function(){m&&M&&(n(F[M](u,T)),x(!1))}),[M,m]),Object(a.useEffect)((function(){var e=setInterval((function(){x(!0)}),6e4);return function(){return clearInterval(e)}}),[]),Object(a.useEffect)((function(){s.descendants!==b.descendants?(f(s),S(null)):v&&S(!0)}),[s]),Object(a.useEffect)((function(){o[0]!==b[0]?(f(o),S(null)):v&&S(!0)}),[o]),Object(a.useEffect)((function(){if(v){var e=setTimeout((function(){S(null),g(!1)}),5e3);return function(){return clearTimeout(e)}}}),[v]);return Object(c.jsx)(e,Object(E.a)({setAction:z,setCallback:A,data:b,handleUpdate:function(){g(!0),x(!0)},alertMessage:y},t))}))};function Q(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"]);return Q=function(){return e},e}var D=h.a.header(Q()),R=Object(l.d)(J,a.memo)((function(e){var t=e.setCallback,n=e.data,r=void 0===n?[]:n,s=e.handleUpdate,o=e.alertMessage,u=Object(i.b)(),d=Object(a.useState)(!0),l=Object(j.a)(d,2),h=l[0],m=l[1];return Object(a.useEffect)((function(){return t("getNewsIdList"),function(){return u(y())}}),[]),Object(c.jsxs)(b.a,{children:[Object(c.jsxs)(D,{children:[Object(c.jsx)("h2",{children:"Hacker News"}),Object(c.jsx)(H,{handleUpdate:s,children:"update news"})]}),o&&Object(c.jsx)(f.a,{variant:"primary",children:"there is no latest news in the feed"}),h&&Object(c.jsx)(f.a,{children:"loading news"}),Object(c.jsx)(O.a,{children:r[0]&&r.map((function(e){return Object(c.jsx)(z,{loading:h,setLoading:m,id:e},e)}))})]})})),K=n(98),P=n(30),V=n.n(P),W=function e(t){var n=t.id,r=Object(i.b)(),s=Object(a.useState)({}),o=Object(j.a)(s,2),u=o[0],d=o[1],l=Object(a.useState)(!1),f=Object(j.a)(l,2),O=f[0],h=f[1];Object(a.useEffect)((function(){r(k(n,"setComment",d))}),[]);return Object(c.jsx)(c.Fragment,{children:u.text&&Object(c.jsx)(K.a,{className:V.a.card,children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(K.a.Title,{children:"".concat(u.by)}),Object(c.jsx)(K.a.Body,{className:V.a.text,dangerouslySetInnerHTML:{__html:"".concat(u.text)}}),u.kids&&Object(c.jsx)(F.a,{onClick:function(){h((function(e){return!e}))},className:V.a.btn,variant:O?"dark":"outline-dark",children:O?"Hide comments":"Show more comments"}),u.kids&&O&&u.kids.map((function(t){return Object(c.jsx)(e,{id:t},t)}))]})})})},q=n(37),G=n.n(q),X=function(e){var t=e.kids,n=void 0===t?[]:t,a=e.descendants,r=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsxs)(b.a,{className:G.a.container,children:[Object(c.jsxs)("h4",{children:["Comments",Object(c.jsx)("span",{className:G.a.counter,children:"".concat(a)})]}),r]}),n.map((function(e){return Object(c.jsx)(W,{id:e},e)}))]})},Y=Object(l.d)(J,a.memo)((function(e){var t=e.setAction,n=e.setCallback,r=e.data,s=void 0===r?{}:r,u=e.handleUpdate,j=e.alertMessage,d=void 0!==j&&j,l=Object(i.b)();return Object(a.useEffect)((function(){n("getItem"),t("setActiveNews"),l(y())}),[]),Object(c.jsx)(b.a,{children:s.title?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)(F.a,{variant:"outline-primary",children:"Back to news list"})}),Object(c.jsx)("a",{href:"".concat(s.url),target:"_blank",children:Object(c.jsx)("h3",{children:"".concat(s.title)})}),Object(c.jsx)(U,Object(E.a)({},s)),d&&Object(c.jsx)(f.a,{variant:"primary",children:"there are no latest comments in the feed"}),Object(c.jsx)(X,Object(E.a)(Object(E.a)({},s),{},{children:Object(c.jsx)(H,{handleUpdate:u,children:"update comments"})}))]}):Object(c.jsx)("div",{children:"load"})})})),Z=function(){return Object(c.jsx)("main",{style:{padding:"10px"},children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(c.jsx)(R,{})}}),Object(c.jsx)(u.a,{path:"/item/:itemId",exact:!0,render:function(){return Object(c.jsx)(Y,{})}})]})})},$=Object(v.b)({name:"app",initialState:{initialized:!1,error:null},reducers:{setInitialized:function(e,t){e.initialized=t.payload},setError:function(e,t){e.error=t.payload}}}),ee=$.actions,te=(ee.setInitialized,ee.setError),ne=$.reducer,ce=n(62),ae=function(e){var t=ce.create({baseURL:"https://hacker-news.firebaseio.com/v0/",credentials:!0,origin:"http://localhost:3000"});return t.interceptors.response.use((function(e){return e}),(function(t){e(te(t.statusText))})),t}((function(){return re.dispatch.apply(re,arguments)})),re=Object(v.a)({reducer:{app:ne,news:S},middleware:function(e){return e({thunk:{extraArgument:ae}})}}),se=re;s.a.render(Object(c.jsx)(o.a,{basename:"https://KirilovVladislav.github.io/test-avito",children:Object(c.jsx)(i.a,{store:se,children:Object(c.jsx)(Z,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.7d93eb55.chunk.js.map