(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i=t(2),u=t.n(i),c=t(17),o=t.n(c),r=(t(22),t(8)),a=t(3),s=t(5),l=t.n(s),d=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,"/api/persons"),j=function(n){return l.a.get(d).then((function(e){n(e.data)}))},h=function(n){return l.a.post(d,n).then((function(n){return n.data}))},f=function(n,e,t){return l.a.delete("".concat(d,"/").concat(n)).then((function(n){e()})).catch((function(n){return t()}))},b=function(n){return l.a.put("".concat(d,"/").concat(n.id),n)},m=t(0),O=function(n){var e=n.message;return null===e?null:Object(m.jsx)("div",{className:"error",children:e})},v=function(n){var e=n.message;return null===e?null:Object(m.jsx)("div",{className:"success",children:e})},x=function(n){return Object(m.jsx)("button",{onClick:n.handleDeleteButton,value:n.id,children:"Poista"})},g=function(n){return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Suodata n\xe4ytetyt nimet: "}),Object(m.jsx)("p",{children:Object(m.jsx)("input",{onChange:n.handleFilterChange})})]})},p=function(n){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:n.addEntry,children:["Nimi: ",Object(m.jsx)("input",{onChange:n.handleNameChange}),Object(m.jsxs)("div",{children:["Puhelinnumero: ",Object(m.jsx)("input",{onChange:n.handleNumberChange})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"Lis\xe4\xe4"})})]})})},C=function(n){return Object(m.jsx)("div",{children:n.shownNames.map((function(e){return Object(m.jsxs)("p",{children:[e.name," ",e.number,Object(m.jsx)(x,{handleDeleteButton:n.handleDeleteButton,id:e.id})]},e.name)}))})},S=function(){var n=Object(i.useState)([{name:"Hard Coded",number:"040-123456"}]),e=Object(a.a)(n,2),t=e[0],u=e[1],c=Object(i.useState)(""),o=Object(a.a)(c,2),s=o[0],l=o[1],d=Object(i.useState)(""),x=Object(a.a)(d,2),S=x[0],P=x[1],T=Object(i.useState)(t),N=Object(a.a)(T,2),E=N[0],w=N[1],D=Object(i.useState)(null),_=Object(a.a)(D,2),F=_[0],L=_[1],k=Object(i.useState)(null),B=Object(a.a)(k,2),y=B[0],R=B[1];Object(i.useEffect)((function(){j((function(n){u(n),w(n)})).catch((function(n){return console.log(n)}))}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Puhelinluettelo"}),Object(m.jsx)(v,{message:F}),Object(m.jsx)(O,{message:y}),Object(m.jsx)(g,{handleFilterChange:function(n){var e=n.target.value.toLowerCase();if(""!==e){var i=t.filter((function(n){return n.name.toLowerCase().includes(e)}));w(i)}else w(t)}}),Object(m.jsx)("h3",{children:"Lis\xe4\xe4 numero"}),Object(m.jsx)(p,{handleNameChange:function(n){l(n.target.value)},handleNumberChange:function(n){P(n.target.value)},addEntry:function(n){if(n.preventDefault(),t.filter((function(n){return n.name===s})).length>0){if(!window.confirm("Muutetaanko henkil\xf6n ".concat(s," puhelinnumeroa?")))return;var e=t.find((function(n){return n.name===s})).id,i={name:s,number:S,id:e};b(i).then((function(n){L("Puhelinnumero p\xe4ivitettiin onnistuneesti"),setTimeout((function(){L(null)}),5e3)})).catch((function(n){R("Puhelinnumero on aiemmin poistettu tietokannasta"),setTimeout((function(){R(null)}),5e3)}));var c=t.filter((function(n){return n.id!=e})).concat(i);return u(c),void w(c)}var o={name:s,number:S},a=[].concat(Object(r.a)(t),[o]);u(a),w([].concat(Object(r.a)(t),[o])),h(o).then((function(n){var e=t.concat(n);u(e),w(e),L("Puhelinnumero lis\xe4ttiin onnistuneesti"),setTimeout((function(){L(null)}),5e3)})).catch((function(n){R("Puhelinnumeron lis\xe4\xe4minen ei onnistunut"),setTimeout((function(){R(null)}),5e3)}))}}),Object(m.jsx)("h3",{children:"Numerot"}),Object(m.jsx)(C,{shownNames:E,handleDeleteButton:function(n){var e=n.target.value;window.confirm("Poistetaanko "+t.find((function(n){return n.id===e})))&&f(e,(function(){var n=t.filter((function(n){return n.id!==e}));u(n),w(n),L("Puhelinnumero poistettiin onnistuneesti"),setTimeout((function(){L(null)}),5e3)}),(function(){R("Puhelinnumero on jo aiemmin poistettu"),setTimeout((function(){R(null)}),5e3)}))}})]})},P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,i=e.getFID,u=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),i(n),u(n),c(n),o(n)}))};o.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),P()}},[[42,1,2]]]);
//# sourceMappingURL=main.28a11f3b.chunk.js.map