(this.webpackJsonpsearch=this.webpackJsonpsearch||[]).push([[0],{101:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),s=n.n(i),r=n(33),o=n(32),l=n(156),j=n(157),u=n(158),d=n(162),b=n(38),h=n(150),O=n(163),m=n(155),p=n(72),f=n.n(p),g=(n(95),n(6)),x=function(e){var t=e.largeImageURL,n=e.tags,c=e.user,i=a.a.useState(!1),s=Object(b.a)(i,2),r=s[0],o=s[1],l=function(){o(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{onClick:function(){o(!0)},className:"img-item",children:[Object(g.jsx)("img",{src:t,style:{width:"100%"},alt:""}),Object(g.jsx)(h.a,{title:n,subtitle:Object(g.jsxs)("span",{children:["by: ",c]})})]}),Object(g.jsxs)(O.a,{open:r,onClose:l,children:[Object(g.jsx)("img",{src:t,alt:""}),Object(g.jsx)(m.a,{onClick:l,id:"img-close",children:Object(g.jsx)(f.a,{})})]})]})},v=(n(101),function(){var e=Object(o.c)((function(e){return e.images})),t=Object(o.c)((function(e){return e.isLoading}));return console.log("render"),Object(g.jsxs)(g.Fragment,{children:[!!t&&Object(g.jsx)("div",{className:"circle",children:Object(g.jsx)(l.a,{})}),Object(g.jsx)(d.a,{in:!t,timeout:500,className:"slide-up",children:Object(g.jsx)(j.a,{cellHeight:130,cols:2,className:"images-block",children:e.length&&e.map((function(e){return Object(g.jsx)(u.a,{children:Object(g.jsx)(x,Object(r.a)({},e),e.id)},e.id)}))})})]})}),y=n(159),k=n(164),C=n(160),N=n(165),I=n(73),S=n.n(I),L=function(e,t){return function(n){S.a.get("https://pixabay.com/api/?key=".concat("14514672-c2dd62e4bfea0db355ae654da","&q=").concat(e,"&image_type=photo&per_page=").concat(t,"&safesearch=true")).then((function(e){var t=e.data;return n(A(t.hits))})).then((function(){return setTimeout((function(){return n(E(!1))}),300)}))}},E=function(e){return{type:"LOADING",payload:e}},A=function(e){return{type:"SET_IMAGES",payload:e}},w=n(74),G=(n(123),function(){var e=Object(o.b)(),t=a.a.useState(""),n=Object(b.a)(t,2),c=n[0],i=n[1],s=a.a.useState(7),r=Object(b.a)(s,2),l=r[0],j=r[1],u=a.a.useState(!1),d=Object(b.a)(u,2),h=d[0],O=d[1];a.a.useEffect((function(){c.length&&(e(L(c,l)),e(E(!0)))}),[c,l]);return Object(g.jsxs)("div",{className:"search-block",children:[Object(g.jsx)(w.DebounceInput,{className:"search-input",minLength:2,value:c,debounceTimeout:450,onChange:function(e){i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(g.jsxs)(y.a,{children:[Object(g.jsx)(k.a,{id:"demo-controlled-open-select-label",children:"Amount"}),Object(g.jsxs)(C.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:h,onClose:function(){O(!1)},onOpen:function(){O(!0)},value:l,onChange:function(e){j(e.target.value)},children:[Object(g.jsx)(N.a,{value:7,children:"7"}),Object(g.jsx)(N.a,{value:10,children:"10"}),Object(g.jsx)(N.a,{value:15,children:"15"})]})]}),Object(g.jsx)(m.a,{onClick:function(){c.length&&(e(L(c,l)),e(E(!0)))},size:"small",variant:"contained",color:"primary",id:"search-btn",children:"Find"}),Object(g.jsx)(m.a,{onClick:function(){e(A([]))},size:"small",variant:"contained",id:"search-btn",children:"Clear"})]})}),T=function(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(G,{}),Object(g.jsx)(v,{})]})},_=n(40),D=n(75),F={images:[],isLoading:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGES":return Object(r.a)(Object(r.a)({},e),{},{images:t.payload});case"LOADING":return Object(r.a)(Object(r.a)({},e),{},{isLoading:t.payload});default:return e}},J=Object(_.c)(z,Object(_.a)(D.a));s.a.render(Object(g.jsx)(o.a,{store:J,children:Object(g.jsx)(T,{})}),document.getElementById("root"))},95:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.430e8575.chunk.js.map