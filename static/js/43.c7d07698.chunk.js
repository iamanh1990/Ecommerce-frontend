(this["webpackJsonpecommerce-client"]=this["webpackJsonpecommerce-client"]||[]).push([[43],{1146:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a.n(n),s=a(14),c=a(108),o=a(0),i=a(28),l=a(23),u=a(41),d=a(192),p=a.n(d),m=a(1174),b=a(1175),h=a(1176),j=a(4),f=a(44),x=a(6),g=a(45),k=a(2);t.default=function(e){var t=e.location,a=Object(o.useState)(""),n=Object(c.a)(a,2),d=n[0],O=n[1],v=Object(o.useState)(""),w=Object(c.a)(v,2),y=w[0],N=w[1],I=Object(o.useState)(!1),_=Object(c.a)(I,2),C=_[0],E=_[1],P=Object(l.b)(),L=Object(j.f)(),S=function(e){var a=t.state;a?L.push(a.from):"admin"===e.data.role?L.push("/admin/dashboard"):L.push("/user/history")},W=Object(l.c)((function(e){return e.user}));Object(o.useEffect)((function(){W&&W.token&&L.push("/")}),[W,L]);var F=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.prev=2,e.next=5,f.a.signInWithEmailAndPassword(d,y);case 5:return a=e.sent,n=a.user,e.next=9,n.getIdTokenResult();case 9:return s=e.sent,e.next=12,Object(g.a)(s.token);case 12:c=e.sent,P({type:x.d,payload:{name:c.data.name,email:c.data.email,token:s.token,role:c.data.role,_id:c.data._id}}),S(c),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),u.b.error(e.t0.message),E(!1);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.signInWithPopup(f.c);case 3:return t=e.sent,a=t.user,e.next=7,a.getIdTokenResult();case 7:return n=e.sent,e.next=10,Object(g.a)(n.token);case 10:s=e.sent,P({type:x.d,payload:{name:s.data.name,email:s.data.email,token:n.token,role:s.data.role,_id:s.data._id}}),S(s),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),u.b.error(e.t0.message),E(!1);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,s,c,o,i,l,d,p,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.signInWithPopup(f.b);case 3:return t=e.sent,a=t.user,e.next=7,a.getIdTokenResult();case 7:return n=e.sent,e.next=10,Object(g.a)(n.token);case 10:s=e.sent,P({type:x.d,payload:{name:s.data.name,email:s.data.email,token:n.token,role:s.data.role,_id:s.data._id}}),L.push("/"),e.next=51;break;case 15:if(e.prev=15,e.t0=e.catch(0),"auth/account-exists-with-different-credential"!==e.t0.code){e.next=48;break}return c=e.t0.credential,o=e.t0.email,e.next=22,f.a.fetchSignInMethodsForEmail(o);case 22:if("password"!==e.sent[0]){e.next=48;break}return e.prev=24,i=prompt("Enter your password"),e.next=28,f.a.signInWithEmailAndPassword(o,i);case 28:return l=e.sent,e.next=31,l.user.linkWithCredential(c);case 31:return d=l.user,e.next=34,d.getIdTokenResult();case 34:return p=e.sent,e.next=37,Object(g.a)(p.token);case 37:return m=e.sent,P({type:x.d,payload:{name:m.data.name,email:m.data.email,token:p.token,role:m.data.role,_id:m.data._id}}),S(m),e.abrupt("return");case 43:e.prev=43,e.t1=e.catch(24),console.log(e.t1),u.b.error(e.t1.message),E(!1);case 48:console.log(e.t0),u.b.error(e.t0.message),E(!1);case 51:case"end":return e.stop()}}),e,null,[[0,15],[24,43]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"container p-5",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-md-6 offset-md-3",children:[C?Object(k.jsx)("h4",{className:"text-danger",children:"Loading..."}):Object(k.jsx)("h4",{children:"Login"}),Object(k.jsxs)("form",{onSubmit:F,children:[Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"email",className:"form-control",placeholder:"Your email address",value:d,onChange:function(e){return O(e.target.value)},autoFocus:!0})}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("input",{type:"password",className:"form-control",placeholder:"Your password",value:y,onChange:function(e){return N(e.target.value)}})}),Object(k.jsx)(p.a,{onClick:F,type:"primary",className:"mb-3",block:!0,shape:"round",icon:Object(k.jsx)(m.a,{}),size:"large",disabled:!d||y.length<6,children:"Login with Email/Password"})]}),Object(k.jsx)(p.a,{onClick:R,type:"danger",className:"mb-3",block:!0,shape:"round",icon:Object(k.jsx)(b.a,{}),size:"large",children:"Login with Google"}),Object(k.jsx)(p.a,{onClick:T,type:"primary",className:"mb-3",block:!0,shape:"round",icon:Object(k.jsx)(h.a,{}),size:"large",children:"Login with Facebook"}),Object(k.jsx)(i.b,{to:"/forgot/password",className:"float-right text-danger",children:"Forgot Password"})]})})})}}}]);
//# sourceMappingURL=43.c7d07698.chunk.js.map