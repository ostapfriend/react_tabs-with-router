(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=c(4),i=c(1),r=(c(13),c(14),c(2)),j=function(){return Object(r.jsx)("h1",{children:"Home Page"})},b=function(e){var t=e.tabs,c=Object(i.g)(),n=t.find((function(e){return e.id===c.id}));return Object(r.jsx)("p",{className:"subtitle is-3",children:null===n||void 0===n?void 0:n.content})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(e){var t=e.tabs;return Object(r.jsx)("ul",{className:"tabs is-toggle TabsPage",children:t.map((function(e){return Object(r.jsx)(a.b,{to:"/tabs/".concat(e.id),children:Object(r.jsx)("li",{children:e.title})},e.id)}))})},o=(c(0),c(16),function(){return Object(r.jsxs)("div",{className:"Loader",children:[Object(r.jsx)("h1",{className:"title is-3 has-text-dark",children:"Page not found"}),Object(r.jsx)("div",{className:"Loader__content"})]})}),x=function(){var e=function(e){var t=e.isActive;return{color:t?"#fff":"#545e6f",background:t?"#7600dc":"#f0f0f0"}};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App__header",children:Object(r.jsxs)("nav",{className:"tabs is-large App__nav",children:[Object(r.jsx)(a.b,{to:"/",style:e,children:"Home"}),Object(r.jsx)(a.b,{to:"/tabs",style:e,children:"Tabs"})]})}),Object(r.jsx)("div",{className:"App__container",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/",children:Object(r.jsx)(i.a,{index:!0,element:Object(r.jsx)(j,{})})}),Object(r.jsxs)(i.a,{path:"tabs",children:[Object(r.jsx)(i.a,{index:!0,element:Object(r.jsx)(d,{tabs:l})}),Object(r.jsx)(i.a,{path:":id",element:Object(r.jsx)(b,{tabs:l})})]}),Object(r.jsx)(i.a,{path:"*",element:Object(r.jsx)(o,{})})]})})]})};s.a.render(Object(r.jsx)(a.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.68bce2ec.chunk.js.map