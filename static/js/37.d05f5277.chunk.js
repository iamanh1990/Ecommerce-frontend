(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[37],{108:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(111);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(112);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},112:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},1148:function(e,t,r){"use strict";r.r(t);var n=r(13),a=r.n(n),o=r(14),c=r(108),i=r(0),s=r(44),u=r(41),l=r(23),b=r(6),d=r(45),f=r(2);t.default=function(e){var t=e.history,r=Object(i.useState)(""),n=Object(c.a)(r,2),m=n[0],p=n[1],j=Object(i.useState)(""),h=Object(c.a)(j,2),v=h[0],y=h[1],O=Object(l.b)();Object(i.useEffect)((function(){p(window.localStorage.getItem("emailForRegistration"))}),[]);var g=function(){var e=Object(o.a)(a.a.mark((function e(r){var n,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),m&&v){e.next=4;break}return u.b.error("Email and password required"),e.abrupt("return");case 4:if(!(v.length<6)){e.next=7;break}return u.b.error("Password must be at least 6 characters long"),e.abrupt("return");case 7:return e.prev=7,e.next=10,s.a.signInWithEmailLink(m,window.location.href);case 10:if(!e.sent.user.emailVerified){e.next=24;break}return window.localStorage.removeItem("emailForRegistration"),n=s.a.currentUser,e.next=16,n.updatePassword(v);case 16:return e.next=18,n.getIdTokenResult();case 18:return o=e.sent,e.next=21,Object(d.a)(o.token);case 21:c=e.sent,O({type:b.d,payload:{name:c.data.name,email:c.data.email,token:o.token,role:c.data.role,_id:c.data._id}}),t.push("/");case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(7),u.b.error(e.t0.message),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[7,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"container p-5",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(f.jsx)("h4",{children:"Register"}),Object(f.jsxs)("form",{onSubmit:g,children:[Object(f.jsx)("input",{type:"email",className:"form-control",value:m,disabled:!0}),Object(f.jsx)("input",{type:"password",className:"form-control",value:v,onChange:function(e){return y(e.target.value)},placeholder:"Enter password",autoFocus:!0}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",className:"btn btn-raised",children:"Complete Registration"})]})]})})})}}}]);
//# sourceMappingURL=37.d05f5277.chunk.js.map