(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var i=t(2),u=t.n(i),c=t(14),r=t.n(c),o=(t(19),t(3)),a=t(4),s=t.n(a),l="/api/persons",d={getAll:function(e){return s.a.get(l).then((function(n){e(n.data)}))},create:function(e){return s.a.post(l,e).then((function(e){return e.data}))},deletePerson:function(e,n,t){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){n()})).catch((function(e){return t}))},update:function(e){return s.a.put("".concat(l,"/").concat(e.id),e)}},j=t(0),h=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{className:"error",children:n})},f=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{className:"success",children:n})},b=function(e){return Object(j.jsx)("button",{onClick:e.handleDeleteButton,value:e.id,children:"Poista"})},m=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Suodata n\xe4ytetyt nimet: "}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{onChange:e.handleFilterChange})})]})},O=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:e.addEntry,children:["Nimi: ",Object(j.jsx)("input",{onChange:e.handleNameChange}),Object(j.jsxs)("div",{children:["Puhelinnumero: ",Object(j.jsx)("input",{onChange:e.handleNumberChange})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Lis\xe4\xe4"})})]})})},g=function(e){return Object(j.jsx)("div",{children:e.shownNames.map((function(n){return Object(j.jsxs)("p",{children:[n.name," ",n.number,Object(j.jsx)(b,{handleDeleteButton:e.handleDeleteButton,id:n.id})]},n.id)}))})},v=function(){var e=Object(i.useState)([{name:"Hard Coded",number:"040-123456",id:"1"}]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(i.useState)(""),r=Object(o.a)(c,2),a=r[0],s=r[1],l=Object(i.useState)(""),b=Object(o.a)(l,2),v=b[0],x=b[1],p=Object(i.useState)(t),C=Object(o.a)(p,2),P=C[0],w=C[1],N=Object(i.useState)(null),S=Object(o.a)(N,2),T=S[0],k=S[1],y=Object(i.useState)(null),B=Object(o.a)(y,2),D=B[0],F=B[1];Object(i.useEffect)((function(){d.getAll((function(e){u(e),w(e)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Puhelinluettelo"}),Object(j.jsx)(f,{message:T}),Object(j.jsx)(h,{message:D}),Object(j.jsx)(m,{handleFilterChange:function(e){var n=e.target.value.toLowerCase();if(""!==n){var i=t.filter((function(e){return e.name.toLowerCase().includes(n)}));w(i)}else w(t)}}),Object(j.jsx)("h3",{children:"Lis\xe4\xe4 numero"}),Object(j.jsx)(O,{handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){x(e.target.value)},addEntry:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===a})).length>0){if(!window.confirm("Muutetaanko henkil\xf6n ".concat(a," puhelinnumeroa?")))return;var n=t.find((function(e){return e.name===a})).id,i={name:a,number:v,id:n};d.update(i).then((function(e){k("Puhelinnumero p\xe4ivitettiin onnistuneesti!"),setTimeout((function(){k(null)}),5e3)})).catch((function(e){F(e.response.data),setTimeout((function(){F(null)}),5e3)}));var c=t.filter((function(e){return e.id!==n})).concat(i);return u(c),void w(c)}var r={name:a,number:v};d.create(r).then((function(e){var n=t.concat(e);u(n),w(n),k("Puhelinnumero lis\xe4ttiin onnistuneesti"),setTimeout((function(){k(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),F(e.response.data.error),setTimeout((function(){F(null)}),5e3)}))}}),Object(j.jsx)("h3",{children:"Numerot"}),Object(j.jsx)(g,{shownNames:P,handleDeleteButton:function(e){var n=e.target.value;window.confirm("Poistetaanko "+t.find((function(e){return e.id===n})))&&d.deletePerson(n,(function(){var e=t.filter((function(e){return e.id!==n}));u(e),w(e),k("Puhelinnumero poistettiin onnistuneesti"),setTimeout((function(){k(null)}),5e3)}),(function(){F("Puhelinnumero on jo aiemmin poistettu"),setTimeout((function(){F(null)}),5e3)}))}})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,i=n.getFID,u=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),u(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(u.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[39,1,2]]]);
//# sourceMappingURL=main.650c154c.chunk.js.map