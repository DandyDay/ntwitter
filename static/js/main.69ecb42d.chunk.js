(this.webpackJsonpntwitter=this.webpackJsonpntwitter||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(49),s=n.n(r),i=n(39),o=n(11),j=n(34),l=n(15),u=n(0),b=n.n(u),O=n(1),d=n(50),p=n(17),x=n(21),m=n(28);Object(d.a)({apiKey:"AIzaSyDYihXBT_nbAp1gOhnKljwlz5QNP2GCEkw",authDomain:"ntwitter-3733b.firebaseapp.com",projectId:"ntwitter-3733b",storageBucket:"ntwitter-3733b.appspot.com",messagingSenderId:"606270478871",appId:"1:606270478871:web:5b4755d508f89fe3a8da52"});var f=Object(p.d)(),h=Object(x.e)(),g=Object(m.c)(),v=n(27),N=n(35),w=n(6),y=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)(""),u=Object(o.a)(l,2),d=u[0],x=u[1],m=Object(c.useState)(!1),h=Object(o.a)(m,2),g=h[0],v=h[1],N=Object(c.useState)(""),y=Object(o.a)(N,2),C=y[0],k=y[1],S=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n?j(c):"name"===n&&x(c)},U=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=7;break}return e.next=5,Object(p.c)(f,n,i).then((function(e){var t=e.user;Object(p.i)(t,{displayName:d})}));case 5:e.next=9;break;case 7:return e.next=9,Object(p.f)(f,n,i);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),k(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{className:"loginForm",onSubmit:U,children:[Object(w.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:S,className:"loginText"}),Object(w.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:S,className:"loginText"}),g&&Object(w.jsx)("input",{name:"name",type:"text",placeholder:"Name",required:!0,onChange:S,className:"loginText"}),Object(w.jsx)("input",{className:"loginText loginBtn",type:"submit",value:g?"Create Account":"Log In"}),Object(w.jsx)("span",{className:"errorMessage",children:C})]}),Object(w.jsxs)("span",{className:"toggle",onClick:function(){return v((function(e){return!e}))},children:[" ",g?"Log In":"Create Account"]})]})},C=function(){var e=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new p.b:"github"===n&&(c=new p.a),e.next=4,Object(p.g)(f,c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"AuthBody",children:[Object(w.jsx)(v.a,{icon:N.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(w.jsx)(y,{}),Object(w.jsxs)("div",{className:"auth",children:[Object(w.jsxs)("button",{className:"socialButton",name:"google",onClick:e,children:["Continue with Google ",Object(w.jsx)(v.a,{icon:N.b})]}),Object(w.jsxs)("button",{className:"socialButton",name:"github",onClick:e,children:["Continue with Github ",Object(w.jsx)(v.a,{icon:N.a})]})]})]})},k=n(37),S=function(e){var t=e.ntweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1],j=Object(c.useState)(t.text),l=Object(o.a)(j,2),u=l[0],b=l[1],O=function(){return i((function(e){return!e}))};return Object(w.jsx)("div",{className:"ntweet",children:s?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{className:"editNtweetForm",onSubmit:function(e){e.preventDefault(),Object(x.i)(Object(x.d)(h,"ntweets/".concat(t.id)),"text",u),i(!1)},children:[Object(w.jsx)("input",{className:"editText",value:u,type:"text",placeholder:"Edit your ntweet",onChange:function(e){var t=e.target.value;b(t)},required:!0}),Object(w.jsx)("input",{className:"editUpdate",type:"submit",value:"Update Ntweet"})]}),Object(w.jsx)("button",{className:"editCancel",onClick:O,children:"Cancel"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("span",{className:"ntweetContent",children:t.text}),t.photoUrl&&Object(w.jsx)("img",{src:t.photoUrl,alt:t.id,className:"ntweetPhoto"}),Object(w.jsx)("span",{className:"createAt",children:function(e){var t=new Date(e);return t.getFullYear()+". "+(t.getMonth()+1)+". "+t.getDate()+". "+t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}(t.createdAt)}),Object(w.jsxs)("span",{className:"creatorName",children:["by ",t.creatorName]}),n&&Object(w.jsxs)("div",{className:"ntweetBtns",children:[Object(w.jsx)("button",{className:"deleteBtn",onClick:function(){window.confirm("Delete?")&&(Object(x.c)(Object(x.d)(h,"ntweets/".concat(t.id))),""!==t.photoUrl&&Object(m.a)(Object(m.d)(g,t.photoUrl)))},children:Object(w.jsx)(v.a,{icon:k.b})}),Object(w.jsx)("button",{className:"editBtn",onClick:O,children:Object(w.jsx)(v.a,{icon:k.a})})]})]})})},U=n(70),F=function(e){var t=e.userObj,n=Object(c.useRef)(),a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],j=Object(c.useState)(""),l=Object(o.a)(j,2),u=l[0],d=l[1],p=function(){var e=Object(O.a)(b.a.mark((function e(n){var c,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",""===u){e.next=10;break}return a=Object(m.d)(g,"".concat(t.uid,"/").concat(Object(U.a)())),e.next=6,Object(m.e)(a,u,"data_url");case 6:return r=e.sent,e.next=9,Object(m.b)(r.ref);case 9:c=e.sent;case 10:return e.next=12,Object(x.a)(Object(x.b)(h,"ntweets"),{text:s,createdAt:Date.now(),creatorId:t.uid,creatorName:t.displayName,photoUrl:c});case 12:i(""),d("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("form",{className:"factoryContainer",onSubmit:p,children:[Object(w.jsxs)("div",{className:"factoryInputs",children:[Object(w.jsx)("input",{type:"text",placeholder:"What's on your mind?",maxLength:120,value:s,onChange:function(e){var t=e.target.value;i(t)},className:"ntweetText"}),Object(w.jsx)("input",{className:"submitBtn",type:"submit",value:"\u2192"})]}),Object(w.jsx)("label",{className:"photoUploadBtn",for:"input-file",children:"Upload Photo"}),Object(w.jsx)("input",{id:"input-file",className:"photoUploader",type:"file",ref:n,accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)};try{n.readAsDataURL(t)}catch(c){}}}),u&&Object(w.jsxs)("div",{className:"uploadPhotoContainer",children:[Object(w.jsx)("img",{src:u,alt:"uploadedPhoto",className:"ntweetUploadPhoto"}),Object(w.jsx)("span",{className:"photoClear",onClick:function(){d(""),n.current.value=""},children:"Clear"})]})]})},A=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=Object(x.f)(Object(x.h)(Object(x.b)(h,"ntweets"),Object(x.g)("createdAt","desc")),(function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));s(t)}));return function(){return e()}}),[]),Object(w.jsxs)("div",{style:{marginBottom:"100px"},children:[Object(w.jsx)(F,{userObj:t}),Object(w.jsx)("div",{className:"ntweets_container",children:r.map((function(e){return Object(w.jsx)(S,{ntweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},I=function(e){var t,n=e.userObj,a=e.refreshUser,r=Object(l.g)(),s=Object(c.useState)((null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.length)?n.displayName:""),i=Object(o.a)(s,2),j=i[0],u=i[1],d=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.displayName===j){e.next=4;break}return e.next=4,Object(p.i)(n,{displayName:j});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{className:"modifyProfile",onSubmit:d,children:[Object(w.jsx)("input",{className:"editProfile",type:"text",placeholder:"Display Name",onChange:function(e){var t=e.target.value;u(t)},value:j}),Object(w.jsx)("input",{className:"updateProfile",type:"submit",value:"Update Profile"})]}),Object(w.jsx)("button",{className:"logOut",onClick:function(){Object(p.h)(f),r.push("/")},children:"Log Out"})]})},B=function(e){var t,n=e.userObj;return Object(w.jsx)("nav",{style:{marginTop:"100px"},children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsxs)(j.b,{to:"/",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontsize:12},children:[Object(w.jsx)(v.a,{icon:N.c,color:"#04AAFF",size:"2x"}),Object(w.jsx)("span",{className:"profileText",children:"\xa0"})]})}),Object(w.jsx)("li",{children:Object(w.jsxs)(j.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontsize:12},children:[Object(w.jsx)(v.a,{icon:k.c,color:"#04AAFF",size:"2x"}),Object(w.jsx)("span",{className:"profileText",children:(null===n||void 0===n||null===(t=n.displayName)||void 0===t?void 0:t.length)?"".concat(n.displayName,"'s Profile"):"Profile"})]})})]})})},D=function(e){var t=e.isLoggedIn,n=e.userObj,c=e.refreshUser;return Object(w.jsxs)(j.a,{children:[t&&Object(w.jsx)(B,{userObj:n}),Object(w.jsx)(l.d,{children:t?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(l.b,{exact:!0,path:"/",children:Object(w.jsx)(A,{userObj:n})}),Object(w.jsx)(l.b,{exact:!0,path:"/profile",children:Object(w.jsx)(I,{userObj:n,refreshUser:c})}),Object(w.jsx)(l.a,{from:"*",to:"/"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(l.b,{exact:!0,path:"/",children:Object(w.jsx)(C,{})}),Object(w.jsx)(l.a,{from:"*",to:"/"})]})})]})};n(66),n(67);var P=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),j=s[0],l=s[1],u=Object(c.useState)(null),b=Object(o.a)(u,2),O=b[0],d=b[1];return Object(c.useEffect)((function(){Object(p.e)(f,(function(e){e?(l(!0),d(e)):l(!1),a(!0)}))}),[]),Object(w.jsx)(w.Fragment,{children:n?Object(w.jsx)(D,{isLoggedIn:j,userObj:O,refreshUser:function(){d(Object(i.a)({},f.currentUser)),d(f.currentUser)}}):"Initializing..."})};s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.69ecb42d.chunk.js.map