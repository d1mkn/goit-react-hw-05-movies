"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{866:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),u=n(791),a=n(689),c=n(357),s=n(19),i="Reviews_reviewList__RQHzo",o="Reviews_reviewItem__beLBz",p=n(184),h=function(){var e=(0,u.useState)({}),t=(0,r.Z)(e,2),n=t[0],h=t[1],l=(0,u.useState)(s.Z.IDLE),f=(0,r.Z)(l,2),v=f[0],d=f[1],m=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.tx)(m).then((function(e){e.results.length<=0?d(s.Z.REJECTED):(h(e.results),d(s.Z.RESOLVED))}))}),[m]),(0,p.jsxs)(p.Fragment,{children:[v===s.Z.PENDING&&(0,p.jsx)("div",{children:"Loading..."}),v===s.Z.REJECTED&&(0,p.jsx)("p",{children:"No one has left a review yet."}),(0,p.jsx)("ul",{className:i,children:v===s.Z.RESOLVED&&n.length>0&&n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,p.jsxs)("li",{className:o,children:[(0,p.jsx)("p",{children:t}),(0,p.jsx)("p",{children:n})]},r)}))})]})}},357:function(e,t,n){function r(e,t,n,r,u,a,c){try{var s=e[a](c),i=s.value}catch(o){return void n(o)}s.done?t(i):Promise.resolve(i).then(r,u)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(u,a){var c=e.apply(t,n);function s(e){r(c,u,a,s,i,"next",e)}function i(e){r(c,u,a,s,i,"throw",e)}s(void 0)}))}}n.d(t,{M1:function(){return l},TP:function(){return p},tx:function(){return v},Df:function(){return i},eW:function(){return m}});var a=n(757),c=n.n(a),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzc5YjU0M2FkZmRiNTI3NTRmNTM0Zjg4NzQwZWVhOSIsInN1YiI6IjY0NzM5NzZmZGQ3MzFiMmQ3YjY1ZDJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6h-bjtxgs4nr94NSLdnPuJU9g--17ZpHDO_f_Ba8yfA"}};function i(){return o.apply(this,arguments)}function o(){return(o=u(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",s);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=u(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),s);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=u(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US&page=1"),s);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=u(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),s);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=u(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1'"),s);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}},19:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=866.69ed70a4.chunk.js.map