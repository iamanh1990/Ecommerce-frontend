(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[41],{1173:function(e,t,n){"use strict";n.r(t);var c=n(363),r=n(13),a=n.n(r),s=n(14),o=n(108),i=n(0),u=n(23),l=n(41),j=n(1085),d=n.n(j),b=(n(1084),n(275)),m=n(25),h=n.n(m),p=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/coupons"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/coupon/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/coupon"),{coupon:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=n(131),f=n(2);t.default=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],j=Object(i.useState)(new Date),m=Object(o.a)(j,2),h=m[0],N=m[1],k=Object(i.useState)(""),w=Object(o.a)(k,2),g=w[0],y=w[1],C=Object(i.useState)([]),D=Object(o.a)(C,2),S=D[0],q=D[1],E=Object(i.useState)(!1),F=Object(o.a)(E,2),P=F[0],J=F[1],L=Object(u.c)((function(e){return e.user}));Object(i.useEffect)((function(){_()}),[]);var _=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,q(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(a.a.mark((function e(t){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,J(!0),e.next=5,O({name:n,expiry:h,discount:g},L.token);case 5:s=e.sent,r(""),y(""),N(new Date),q([s.data].concat(Object(c.a)(S))),J(!1),l.b.success("".concat(s.data.name," coupon is created")),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),l.b.error(e.t0.response.data.err),console.log("From create coupon",e.t0.response);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete The Coupon?")){e.next=15;break}return e.prev=1,J(!0),e.next=5,x(t,L.token);case 5:return n=e.sent,e.next=8,_();case 8:J(!1),l.b.error("Coupon ".concat(n.data.name," deleted")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("From handle remove coupon",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-2",children:Object(f.jsx)(v.a,{})}),Object(f.jsxs)("div",{className:"col-md-10",children:[P?Object(f.jsx)("h4",{className:"text-danger",children:"Loading..."}):Object(f.jsx)("h4",{children:"Coupons"}),Object(f.jsxs)("form",{onSubmit:A,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-muted",children:"Name"}),Object(f.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return r(e.target.value)},value:n,autoFocus:!0,required:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-muted",children:"Discount %"}),Object(f.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return y(e.target.value)},value:g,required:!0})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-muted",children:"Expiry"}),Object(f.jsx)("br",{}),Object(f.jsx)(d.a,{className:"form-control",selected:h,value:h,onChange:function(e){return N(e)},required:!0})]}),Object(f.jsx)("button",{className:"btn btn-outline-primary",children:"Save"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("h4",{children:[S.length," Coupons"]}),Object(f.jsxs)("table",{className:"table table-bordered",children:[Object(f.jsx)("thead",{className:"thead-light",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Name"}),Object(f.jsx)("th",{scope:"col",children:"Expiry"}),Object(f.jsx)("th",{scope:"col",children:"Discount"}),Object(f.jsx)("th",{scope:"col",children:"Action"})]})}),Object(f.jsx)("tbody",{children:S.length>0&&S.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:new Date(e.expiry).toLocaleDateString()}),Object(f.jsx)("td",{children:e.discount}),Object(f.jsx)("td",{children:Object(f.jsx)(b.a,{className:"text-danger",style:{cursor:"pointer"},onClick:function(){return T(e._id)}})})]},e._id)}))})]})]})]})})}},131:function(e,t,n){"use strict";n(0);var c=n(28),r=n(2);t.a=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"nav flex-column",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/dashboard",children:"Dashboard"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/product",children:"Product"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/products",children:"Products"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/category",children:"Categories"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/sub",children:"Sub Category"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/coupon",children:"Coupon"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/user/password",children:"Password"})})]})})}}}]);
//# sourceMappingURL=41.b2294643.chunk.js.map