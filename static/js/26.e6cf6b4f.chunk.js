(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[26],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(111);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(112);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},112:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},1155:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),c=n(14),s=n(108),o=n(0),u=n(41),i=n(23),l=n(4),m=n(128),p=n(131),d=n(190),b=n(2);t.default=function(e){var t=e.history,n=Object(o.useState)(""),r=Object(s.a)(n,2),f=r[0],h=r[1],j=Object(o.useState)(!1),v=Object(s.a)(j,2),O=v[0],x=v[1],y=Object(i.c)((function(e){return e.user})),g=Object(l.g)().slug;Object(o.useEffect)((function(){Object(m.c)(g).then((function(e){return h(e.data.name)})).catch((function(e){return console.log("Error from category update",e.response)}))}),[g]);var k=function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),x(!0),e.prev=2,e.next=5,Object(m.f)(g,f,y.token);case 5:x(!1),h(""),u.b.success("Category is updated"),t.push("/admin/category"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Error from update category submit",e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-2",children:Object(b.jsx)(p.a,{})}),Object(b.jsxs)("div",{className:"col-md-10",children:[O?Object(b.jsx)("h4",{className:"text-danger",children:"Loading..."}):Object(b.jsx)("h4",{children:"Update Category"}),Object(b.jsx)(d.a,{handleSubmit:k,name:f,setName:h}),Object(b.jsx)("hr",{})]})]})})}},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(13),a=n.n(r),c=n(14),s=n(25),o=n.n(s),u=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/categories"),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/category/").concat(t),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/category/subs/").concat(t),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/category/").concat(t),{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/category/").concat(t),{name:n},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/category"),{name:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},131:function(e,t,n){"use strict";n(0);var r=n(28),a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"nav flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/admin/dashboard",children:"Dashboard"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/admin/product",children:"Product"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/admin/products",children:"Products"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/admin/category",children:"Categories"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/admin/sub",children:"Sub Category"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/admin/coupon",children:"Coupon"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{className:"nav-link",to:"/user/password",children:"Password"})})]})})}},190:function(e,t,n){"use strict";n(0);var r=n(2);t.a=function(e){var t=e.handleSubmit,n=e.name,a=e.setName;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(e){return a(e.target.value)},autoFocus:!0,required:!0})]}),Object(r.jsx)("button",{className:"btn btn-outline-primary",children:"Save"})]})}}}]);
//# sourceMappingURL=26.e6cf6b4f.chunk.js.map