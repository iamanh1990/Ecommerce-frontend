(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[7],{44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));var c=n(18);n(75);c.a.apps.length||c.a.initializeApp({apiKey:"AIzaSyDEIwNd9kHHYmeF1P9CFW19RFxixkjO1jo",authDomain:"e-commerce-8a624.firebaseapp.com",projectId:"e-commerce-8a624",storageBucket:"e-commerce-8a624.appspot.com",messagingSenderId:"39425740559",appId:"1:39425740559:web:8d38a6a1c67483ff32b87a"});var a=c.a.auth(),r=new c.a.auth.GoogleAuthProvider,o=new c.a.auth.FacebookAuthProvider},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var c=n(13),a=n.n(c),r=n(14),o=n(25),u=n.n(o),l=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/create-or-update-user"),{},{headers:{authtoken:t}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat("https://mern-ecommerce-server-anh.herokuapp.com/api","/current-user"),{},{headers:{authtoken:t}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return i}));var c="LOGGED_IN_USER",a="LOGOUT",r="SEARCH_QUERY",o="ADD_TO_CART",u="SET_VISIBLE",l="COUPON_APPLIED",i="CASH_ON_DELIVERY"},74:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(15),r=n.n(a),o=n(28),u=(n(69),n(17)),l=n(23),i=n(60),s=n(61),p=n(13),d=n.n(p),b=n(14),h=n(4),j=n(41),m=(n(73),n(74),n(44)),f=n(6),O=n(45),x=n(99),y=n(2),v=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(20),n.e(43)]).then(n.bind(null,1146))})),g=Object(c.lazy)((function(){return n.e(36).then(n.bind(null,1147))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,1163))})),w=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(18)]).then(n.bind(null,1162))})),P=Object(c.lazy)((function(){return n.e(37).then(n.bind(null,1148))})),k=Object(c.lazy)((function(){return n.e(35).then(n.bind(null,1149))})),E=Object(c.lazy)((function(){return Promise.all([n.e(6),n.e(9),n.e(23)]).then(n.bind(null,1168))})),_=Object(c.lazy)((function(){return n.e(33).then(n.bind(null,1150))})),I=Object(c.lazy)((function(){return n.e(32).then(n.bind(null,1151))})),S=Object(c.lazy)((function(){return n.e(27).then(n.bind(null,1152))})),A=Object(c.lazy)((function(){return n.e(31).then(n.bind(null,1153))})),C=Object(c.lazy)((function(){return n.e(24).then(n.bind(null,1167))})),D=Object(c.lazy)((function(){return n.e(22).then(n.bind(null,1154))})),R=Object(c.lazy)((function(){return n.e(26).then(n.bind(null,1155))})),T=Object(c.lazy)((function(){return n.e(21).then(n.bind(null,1156))})),N=Object(c.lazy)((function(){return n.e(25).then(n.bind(null,1157))})),L=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(29)]).then(n.bind(null,1169))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(28)]).then(n.bind(null,1170))})),G=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(30)]).then(n.bind(null,1171))})),H=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,1164))})),U=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,1158))})),B=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,1159))})),J=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,1166))})),Y=Object(c.lazy)((function(){return Promise.all([n.e(38),n.e(39)]).then(n.bind(null,1172))})),V=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(19),n.e(40)]).then(n.bind(null,1160))})),W=Object(c.lazy)((function(){return Promise.all([n.e(6),n.e(10),n.e(42)]).then(n.bind(null,1161))})),K=Object(c.lazy)((function(){return Promise.all([n.e(12),n.e(41)]).then(n.bind(null,1173))})),M=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(34)]).then(n.bind(null,1165))})),Q=function(){var e=Object(l.b)();return Object(c.useEffect)((function(){var t=m.a.onAuthStateChanged(function(){var t=Object(b.a)(d.a.mark((function t(n){var c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=14;break}return t.prev=1,t.next=4,n.getIdTokenResult();case 4:return c=t.sent,t.next=7,Object(O.b)(c.token);case 7:a=t.sent,e({type:f.d,payload:{name:a.data.name,email:a.data.email,token:c.token,role:a.data.role,_id:a.data._id}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}());return function(){return t()}}),[e]),Object(y.jsxs)(c.Suspense,{fallback:Object(y.jsxs)("div",{className:"col text-center p-5",children:["__ECAREACT",Object(y.jsx)(x.a,{}),"__"]}),children:[Object(y.jsx)(w,{}),Object(y.jsx)(j.a,{}),Object(y.jsx)(V,{}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:"/",component:z}),Object(y.jsx)(h.a,{exact:!0,path:"/login",component:v}),Object(y.jsx)(h.a,{exact:!0,path:"/register",component:g}),Object(y.jsx)(h.a,{exact:!0,path:"/register/complete",component:P}),Object(y.jsx)(h.a,{exact:!0,path:"/forgot/password",component:k}),Object(y.jsx)(h.a,{exact:!0,path:"/product/:slug",component:H}),Object(y.jsx)(h.a,{exact:!0,path:"/category/:slug",component:U}),Object(y.jsx)(h.a,{exact:!0,path:"/sub/:slug",component:B}),Object(y.jsx)(h.a,{exact:!0,path:"/shop",component:J}),Object(y.jsx)(h.a,{exact:!0,path:"/cart",component:Y}),Object(y.jsx)(h.a,{exact:!0,path:"/checkout",component:W}),Object(y.jsx)(h.a,{exact:!0,path:"/payment",component:M}),Object(y.jsx)(_,{exact:!0,path:"/user/history",component:E}),Object(y.jsx)(_,{exact:!0,path:"/user/password",component:A}),Object(y.jsx)(_,{exact:!0,path:"/user/wishlist",component:S}),Object(y.jsx)(I,{exact:!0,path:"/admin/dashboard",component:C}),Object(y.jsx)(I,{exact:!0,path:"/admin/category",component:D}),Object(y.jsx)(I,{exact:!0,path:"/admin/category/:slug",component:R}),Object(y.jsx)(I,{exact:!0,path:"/admin/sub",component:T}),Object(y.jsx)(I,{exact:!0,path:"/admin/sub/:slug",component:N}),Object(y.jsx)(I,{exact:!0,path:"/admin/product",component:L}),Object(y.jsx)(I,{exact:!0,path:"/admin/products",component:F}),Object(y.jsx)(I,{exact:!0,path:"/admin/product/:slug",component:G}),Object(y.jsx)(I,{exact:!0,path:"/admin/coupon",component:K})]})]})},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f.d:case f.e:return c;default:return e}},X=n(31),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{text:""},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f.f:return Object(X.a)(Object(X.a)({},e),c);default:return e}},$=[];"undefined"!==typeof window&&localStorage.getItem("cart")&&($=JSON.parse(localStorage.getItem("cart")));var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f.a:return c;default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f.g:return c;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f.c:return c;default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f.b:return c;default:return e}},ae=Object(u.combineReducers)({user:q,search:Z,cart:ee,drawer:te,coupon:ne,COD:ce}),re=[s.a],oe=Object(u.createStore)(ae,{},Object(i.composeWithDevTools)(u.applyMiddleware.apply(void 0,re)));r.a.render(Object(y.jsx)(l.a,{store:oe,children:Object(y.jsx)(o.a,{basename:"/Ecommerce-frontend",children:Object(y.jsx)(Q,{})})}),document.getElementById("root"))}},[[96,8,11]]]);
//# sourceMappingURL=main.09d29b33.chunk.js.map