"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{600:function(n,t,e){e.d(t,{BG:function(){return f},Hx:function(){return d},LI:function(){return p},_k:function(){return s},uV:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3",i="7578f42464aa1bf410194c3f5bd12bea",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},544:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),i=e(600),s=e(87),p=e(323),f=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],v=(0,o.useState)(!0),d=(0,a.Z)(v,2),l=d[0],h=d[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i._k)();case 3:t=n.sent,e=t.results,c(e),h(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),h(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsx)(f.Fragment,{children:l?(0,f.jsx)(p.a,{}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)("ul",{children:e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})})}}}]);
//# sourceMappingURL=544.f0959bc2.chunk.js.map