(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[24],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(111);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(c=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);c=!0);}catch(o){r=!0,a=o}finally{try{c||null==i.return||i.return()}finally{if(r)throw a}}return n}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(112);function r(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(c.a)(e,t):void 0}}},112:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}n.d(t,"a",(function(){return c}))},1167:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),a=n(14),s=n(108),i=n(0),o=n(23),l=n(41),d=n(131),u=n(25),j=n.n(u),h=function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/admin/orders"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/admin/orders"),{orderId:n,orderStatus:c},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),p=n(544),m=n(545),O=n(341),x=n(2),f=function(e){var t=e.orders,n=e.handleChangeStatus,c=function(e){return Object(x.jsxs)("table",{className:"table table-bordered",children:[Object(x.jsx)("thead",{className:"thead-light",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Title"}),Object(x.jsx)("th",{scope:"col",children:"Price"}),Object(x.jsx)("th",{scope:"col",children:"Brand"}),Object(x.jsx)("th",{scope:"col",children:"Color"}),Object(x.jsx)("th",{scope:"col",children:"Count"}),Object(x.jsx)("th",{scope:"col",children:"Shipping"})]})}),Object(x.jsx)("tbody",{children:e.products.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("b",{children:e.product.title})}),Object(x.jsx)("td",{children:e.product.price}),Object(x.jsx)("td",{children:e.product.brand}),Object(x.jsx)("td",{children:e.color}),Object(x.jsx)("td",{children:e.count}),Object(x.jsx)("td",{children:"Yes"===e.product.shipping?Object(x.jsx)(p.a,{className:"text-success"}):Object(x.jsx)(m.a,{className:"text-danger"})})]},t)}))})]})};return Object(x.jsx)(i.Fragment,{children:t.map((function(e){return Object(x.jsxs)("div",{className:"row pb-5",children:[Object(x.jsxs)("div",{className:"btn btn-block bg-light",children:[Object(x.jsx)(O.a,{order:e,showStatus:!1}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-4",children:"Delivery Status"}),Object(x.jsx)("div",{className:"col-md-8",children:Object(x.jsxs)("select",{className:"form-control",defaultValue:e.orderStatus,onChange:function(t){return n(e._id,t.target.value)},children:[Object(x.jsx)("option",{value:"Not Processed",children:"Not Processed"}),Object(x.jsx)("option",{value:"Cash On Delivery",children:"Cash On Delivery"}),Object(x.jsx)("option",{value:"Processing",children:"Processing"}),Object(x.jsx)("option",{value:"Dispatched",children:"Dispatched"}),Object(x.jsx)("option",{value:"Canceled",children:"Canceled"}),Object(x.jsx)("option",{value:"Completed",children:"Completed"})]})})]})]}),c(e)]},e._id)}))})};t.default=function(){var e=Object(o.c)((function(e){return e.user})),t=Object(i.useState)([]),n=Object(s.a)(t,2),c=n[0],u=n[1],j=Object(i.useState)(!1),p=Object(s.a)(j,2),m=p[0],O=p[1];Object(i.useEffect)((function(){v()}),[e]);var v=function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,O(!0),t.next=4,h(e.token);case 4:n=t.sent,u(n.data),O(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("From load Orders",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(r.a.mark((function t(n,c){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,O(!0),t.next=4,b(e.token,n,c);case 4:return t.next=6,v();case 6:l.b.success("Status Updated"),O(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("From change order status",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-2",children:Object(x.jsx)(d.a,{})}),Object(x.jsxs)("div",{className:"col-md-10",children:[m?Object(x.jsx)("h4",{className:"text-danger",children:"Loading..."}):Object(x.jsx)("h4",{children:"Admin Dashboard"}),Object(x.jsx)(f,{orders:c,handleChangeStatus:y})]})]})})}},131:function(e,t,n){"use strict";n(0);var c=n(28),r=n(2);t.a=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"nav flex-column",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/dashboard",children:"Dashboard"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/product",children:"Product"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/products",children:"Products"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/category",children:"Categories"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/sub",children:"Sub Category"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/admin/coupon",children:"Coupon"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(c.b,{className:"nav-link",to:"/user/password",children:"Password"})})]})})}},341:function(e,t,n){"use strict";n(0);var c=n(2);t.a=function(e){var t=e.order,n=e.showStatus,r=void 0===n||n;return Object(c.jsx)("div",{className:"",children:Object(c.jsxs)("p",{children:[Object(c.jsxs)("span",{children:["Order Id: ",t.paymentIntent.id]})," / ",Object(c.jsxs)("span",{children:["Amount:"," ",(t.paymentIntent.amount/100).toLocaleString("en-US",{style:"currency",currency:"USD"})]})," ",Object(c.jsxs)("span",{children:["Currency: ",t.paymentIntent.currency.toUpperCase()]})," / ",Object(c.jsxs)("span",{children:["Method: ",t.paymentIntent.payment_method_types[0]]})," / ",Object(c.jsxs)("span",{children:["Payment: ",t.paymentIntent.status.toUpperCase()]})," / ",Object(c.jsxs)("span",{children:["Ordered on:"," / ",new Date(1e3*t.paymentIntent.created).toLocaleString()]})," / ",Object(c.jsx)("br",{}),r&&Object(c.jsxs)("span",{className:"bg-primary text-white",children:["STATUS: ",t.orderStatus]})]})})}},544:function(e,t,n){"use strict";var c=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},a=n(40),s=function(e,t){return c.createElement(a.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="CheckCircleOutlined";t.a=c.forwardRef(s)},545:function(e,t,n){"use strict";var c=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"},a=n(40),s=function(e,t){return c.createElement(a.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="CloseCircleOutlined";t.a=c.forwardRef(s)}}]);
//# sourceMappingURL=24.30f0a36b.chunk.js.map