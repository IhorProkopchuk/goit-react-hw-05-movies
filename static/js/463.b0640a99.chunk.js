"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{600:function(e,n,t){t.d(n,{BG:function(){return p},Hx:function(){return v},LI:function(){return f},_k:function(){return s},uV:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org/3",i="7578f42464aa1bf410194c3f5bd12bea",s=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},126:function(e,n,t){var r=t(87),a=t(184);n.Z=function(e){var n=e.movies;return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:n.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})})}},475:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),i=t(87),s=t(600),f="Search_searchContainer__duLUl",p="Search_searchInput__Qk-44",l="Search_searchButton__8Jp1t",v=t(184),h=function(e){var n=e.onSubmit;return(0,v.jsx)("div",{className:f,children:(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value;t||window.alert("Please enter a movie to search"),n(t),e.target.reset()},children:[(0,v.jsx)("input",{className:p,name:"query",type:"text",placeholder:"Search for a movie"}),(0,v.jsx)("button",{className:l,type:"submit",children:"Search"})]})})},d=t(126),m=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],f=(0,i.lr)(),p=(0,a.Z)(f,2),l=p[0],m=p[1];(0,o.useEffect)((function(){var e,n=null!==(e=l.get("query"))&&void 0!==e?e:"";if(n){var t=function(){var e=(0,r.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.LI)(n);case 3:t=e.sent,0===(r=t.results).length?window.alert("Movie not found"):c(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),c([]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t()}}),[l]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{onSubmit:function(e){m({query:e})}}),(0,v.jsx)("ul",{children:(0,v.jsx)(d.Z,{movies:t})})]})}}}]);
//# sourceMappingURL=463.b0640a99.chunk.js.map