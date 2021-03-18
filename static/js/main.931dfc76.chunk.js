(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),i=n.n(a),s=n(17),o=n.n(s),l=n(15),d=n(10),j=n(3),u=n(36),b=n(12),h=n(14),p=n.n(h),O=n(19),f=n(11),x=n(35),m=n.n(x).a.create({baseURL:"https://breakingbadapi.com/api",headers:{"Content-type":"application/json; charset=UTF-8"}}),v=function(e){var t=e.id;return m.get("characters/".concat(t))},g=Object(f.b)("fetch/characters",Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/characters");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),y=Object(f.c)({name:"charactersSlice",initialState:{loading:!1,error:!1,response:null,initialResponse:null},reducers:{filterResponse:function(e,t){switch(t.payload.filterBy){case"name":var n,c=null===(n=e.response)||void 0===n?void 0:n.slice().sort((function(e,t){return e.name<t.name?-1:Number(e.name>t.name)}));e.response=c;break;case"none":e.response=e.initialResponse}}},extraReducers:(c={},Object(b.a)(c,g.pending.type,(function(e,t){e.loading=!0,e.error=t})),Object(b.a)(c,g.rejected.type,(function(e,t){e.loading=!1,e.error=t})),Object(b.a)(c,g.fulfilled.type,(function(e,t){e.loading=!1,e.response=t.payload,e.initialResponse=t.payload})),c)}),k=function(e){return e.characters},N=y.actions.filterResponse,C=y.reducer,R=(n(64),n(1)),w=function(e){var t=e.id,n=e.name,c=e.img,r=e.portrayed,a=e.onClick;return Object(R.jsx)("div",{className:"card",children:Object(R.jsxs)("a",{onClick:a,tabIndex:t,onKeyPress:a,role:"button","data-testid":"click-character",children:[Object(R.jsx)("img",{src:c,height:400,alt:n}),Object(R.jsx)("div",{className:"card-container",children:Object(R.jsxs)("div",{className:"card-title-container",children:[Object(R.jsx)("h3",{children:n}),Object(R.jsx)("p",{children:r})]})})]})})},B=(n(66),function(){return Object(R.jsx)("div",{className:"container",children:Object(R.jsx)("p",{children:"Loading.."})})}),S=(n(67),n(68),function(e){var t=e.value,n=e.onChange;return Object(R.jsxs)("label",{htmlFor:"filter-select",children:["Filter by"," ",Object(R.jsxs)("span",{children:[" ",Object(R.jsxs)("select",{id:"filter-select",className:"filter",onChange:n,value:t,defaultChecked:!0,children:[Object(R.jsx)("br",{}),Object(R.jsx)("option",{value:"none",children:"None"}),Object(R.jsx)("option",{value:"name",children:"Name"})]})]})]})}),E=function(){var e=Object(d.b)(),t=Object(j.f)(),n=Object(a.useState)("none"),c=Object(u.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){e(g())}),[e]);var s=Object(d.c)(k),o=s.response,l=s.loading;Object(a.useEffect)((function(){e(N({filterBy:r}))}),[r,e]);var b=Object(a.useCallback)((function(e){t.push("/details/".concat(e))}),[t]),h=Object(a.useCallback)((function(e){i(e.target.value)}),[]);return l?Object(R.jsx)(B,{}):Object(R.jsxs)("div",{children:[Object(R.jsx)(S,{onChange:h,value:r}),Object(R.jsx)("div",{className:"grid-container",children:null===o||void 0===o?void 0:o.map((function(e){var t=e.char_id,n=e.name,c=e.img,r=e.portrayed;return Object(R.jsx)(w,{id:t,name:n,img:c,portrayed:r,onClick:function(){return b(t)}},t)}))})]})},F=Object(f.b)("fetch/characters",function(){var e=Object(O.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.prev=1,e.next=4,v({id:n});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),I=Object(f.c)({name:"characterSlice",initialState:{loading:!1,error:!1,response:null},reducers:{},extraReducers:(r={},Object(b.a)(r,F.pending.type,(function(e,t){e.loading=!0,e.error=t})),Object(b.a)(r,F.rejected.type,(function(e,t){e.loading=!1,e.error=t})),Object(b.a)(r,F.fulfilled.type,(function(e,t){e.loading=!1,e.response=t.payload})),r)}),J=function(e){return e.character},L=I.reducer,P=(n(70),function(e){var t=e.img,n=e.name,c=e.nickname,r=e.birthday,a=e.portrayed,i=e.category;return Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"content-container",children:Object(R.jsx)("img",{src:t,height:400,alt:n})}),Object(R.jsxs)("div",{className:"content-container",children:[Object(R.jsxs)("p",{children:["Name: ",Object(R.jsx)("strong",{children:n})]}),Object(R.jsxs)("p",{children:["Nickname: ",Object(R.jsx)("strong",{children:c})]}),Object(R.jsxs)("p",{children:["Birthday: ",Object(R.jsx)("strong",{children:r})]}),Object(R.jsxs)("p",{children:["Portrayed by: ",Object(R.jsx)("strong",{children:a})]}),Object(R.jsxs)("p",{children:["Category: ",Object(R.jsx)("strong",{children:i})]})]})]})}),U=(n(71),function(e){var t=e.match.params.slug,n=Object(d.b)(),c=Object(j.f)();Object(a.useEffect)((function(){t&&n(F({id:t}))}),[n,t]);var r=Object(d.c)(J),i=r.response;return r.loading?Object(R.jsx)(B,{}):Object(R.jsxs)("div",{style:{flex:1},children:[Object(R.jsx)("button",{type:"button",onClick:function(){c.replace("/")},children:"Back"}),Object(R.jsx)("div",{className:"content",children:null===i||void 0===i?void 0:i.map((function(e){var t=e.char_id,n=e.img,c=e.name,r=e.nickname,a=e.birthday,i=e.portrayed,s=e.category;return Object(R.jsx)(P,{img:n,name:c,nickname:r,birthday:a,portrayed:i,category:s},t)}))})]})}),_=(n(72),function(){return Object(R.jsx)("header",{className:"header",children:Object(R.jsx)("h1",{className:"header-title",children:"Breaking Bad Characters"})})}),K=(n(73),function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(_,{}),Object(R.jsx)("div",{className:"content",children:Object(R.jsxs)(j.c,{children:[Object(R.jsx)(j.a,{exact:!0,path:"/",component:E}),Object(R.jsx)(j.a,{path:"/details/:slug",component:U})]})})]})}),M=n(6),T=Object(M.c)({characters:C,character:L}),q=Object(f.a)({reducer:T});n(74);o.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(d.a,{store:q,children:Object(R.jsx)(l.a,{children:Object(R.jsx)(K,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.931dfc76.chunk.js.map