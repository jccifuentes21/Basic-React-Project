(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3OMd6",modal:"ErrorModal_modal__2fNBS",header:"ErrorModal_header__3SMln",content:"ErrorModal_content__1tCe1",actions:"ErrorModal_actions__2J9Jm"}},,,,,,,function(e,t,n){e.exports={card:"Card_card__3wVhn"}},function(e,t,n){e.exports={button:"Button_button__2dd75"}},function(e,t,n){e.exports={input:"AddUser_input__1Zgr3"}},function(e,t,n){e.exports={users:"UsersList_users__1Dy8n"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(8),a=n.n(c),s=(n(21),n(13)),o=n(6),i=n(9),l=n.n(i),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(10),m=n.n(j),b=function(e){return Object(d.jsx)("button",{className:m.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(4),O=n.n(h),f=n(2),x=n.n(f),p=function(e){return Object(d.jsx)("div",{onClick:e.onConfirm,className:x.a.backdrop})},_=function(e){return Object(d.jsxs)(u,{className:x.a.modal,children:[Object(d.jsx)("header",{className:x.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:x.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:x.a.actions,children:Object(d.jsx)(b,{onClick:e.onConfirm,children:"Okay"})})]})},g=function(e){return Object(d.jsxs)(d.Fragment,{children:[O.a.createPortal(Object(d.jsx)(p,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root")),O.a.createPortal(Object(d.jsx)(_,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})},v=n(11),y=n.n(v),C=function(e){return e.children},k=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(),a=Object(o.a)(c,2),s=a[0],i=a[1];return Object(d.jsxs)(C,{children:[s&&Object(d.jsx)(g,{onConfirm:function(){i(null)},title:s.title,message:s.message}),Object(d.jsx)(u,{className:y.a.input,children:Object(d.jsxs)("form",{onSubmit:function(r){r.preventDefault();var c=t.current.value,a=n.current.value;0!==c.trim().length&&0!==a.trim().length?+a<1?i({title:"Invalid age",message:"Please enter a valid age (> 0)."}):(e.onAddUser(c,a),t.current.value="",n.current.value=""):i({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",ref:t}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (years)"}),Object(d.jsx)("input",{id:"age",type:"number",ref:n}),Object(d.jsx)(b,{type:"submit",children:"Add User"})]})})]})},N=n(12),E=n.n(N),M=function(e){return Object(d.jsx)(u,{className:E.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var S=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{onAddUser:function(e,t){c((function(n){return[].concat(Object(s.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(M,{users:n})]})};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(S,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.c8011e02.chunk.js.map