(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i=t(2),u=t.n(i),c=t(17),o=t.n(c),r=(t(22),t(8)),a=t(3),s=t(5),l=t.n(s),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||3001,j="http://localhost:".concat(d,"/api/persons"),h=function(n){return l.a.get(j).then((function(e){n(e.data)}))},f=function(n){return l.a.post(j,n).then((function(n){return n.data}))},b=function(n,e,t){return l.a.delete("".concat(j,"/").concat(n)).then((function(n){e()})).catch((function(n){return t()}))},m=function(n){return l.a.put("".concat(j,"/").concat(n.id),n)},O=t(0),v=function(n){var e=n.message;return null===e?null:Object(O.jsx)("div",{className:"error",children:e})},x=function(n){var e=n.message;return null===e?null:Object(O.jsx)("div",{className:"success",children:e})},g=function(n){return Object(O.jsx)("button",{onClick:n.handleDeleteButton,value:n.id,children:"Poista"})},p=function(n){return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Suodata n\xe4ytetyt nimet: "}),Object(O.jsx)("p",{children:Object(O.jsx)("input",{onChange:n.handleFilterChange})})]})},C=function(n){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:n.addEntry,children:["Nimi: ",Object(O.jsx)("input",{onChange:n.handleNameChange}),Object(O.jsxs)("div",{children:["Puhelinnumero: ",Object(O.jsx)("input",{onChange:n.handleNumberChange})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"Lis\xe4\xe4"})})]})})},S=function(n){return Object(O.jsx)("div",{children:n.shownNames.map((function(e){return Object(O.jsxs)("p",{children:[e.name," ",e.number,Object(O.jsx)(g,{handleDeleteButton:n.handleDeleteButton,id:e.id})]},e.name)}))})},P=function(){var n=Object(i.useState)([{name:"Hard Coded",number:"040-123456"}]),e=Object(a.a)(n,2),t=e[0],u=e[1],c=Object(i.useState)(""),o=Object(a.a)(c,2),s=o[0],l=o[1],d=Object(i.useState)(""),j=Object(a.a)(d,2),g=j[0],P=j[1],T=Object(i.useState)(t),N=Object(a.a)(T,2),E=N[0],w=N[1],D=Object(i.useState)(null),_=Object(a.a)(D,2),F=_[0],L=_[1],k=Object(i.useState)(null),B=Object(a.a)(k,2),y=B[0],R=B[1];Object(i.useEffect)((function(){h((function(n){u(n),w(n)})).catch((function(n){return console.log(n)}))}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Puhelinluettelo"}),Object(O.jsx)(x,{message:F}),Object(O.jsx)(v,{message:y}),Object(O.jsx)(p,{handleFilterChange:function(n){var e=n.target.value.toLowerCase();if(""!==e){var i=t.filter((function(n){return n.name.toLowerCase().includes(e)}));w(i)}else w(t)}}),Object(O.jsx)("h3",{children:"Lis\xe4\xe4 numero"}),Object(O.jsx)(C,{handleNameChange:function(n){l(n.target.value)},handleNumberChange:function(n){P(n.target.value)},addEntry:function(n){if(n.preventDefault(),t.filter((function(n){return n.name===s})).length>0){if(!window.confirm("Muutetaanko henkil\xf6n ".concat(s," puhelinnumeroa?")))return;var e=t.find((function(n){return n.name===s})).id,i={name:s,number:g,id:e};m(i).then((function(n){L("Puhelinnumero p\xe4ivitettiin onnistuneesti"),setTimeout((function(){L(null)}),5e3)})).catch((function(n){R("Puhelinnumero on aiemmin poistettu tietokannasta"),setTimeout((function(){R(null)}),5e3)}));var c=t.filter((function(n){return n.id!=e})).concat(i);return u(c),void w(c)}var o={name:s,number:g},a=[].concat(Object(r.a)(t),[o]);u(a),w([].concat(Object(r.a)(t),[o])),f(o).then((function(n){var e=t.concat(n);u(e),w(e),L("Puhelinnumero lis\xe4ttiin onnistuneesti"),setTimeout((function(){L(null)}),5e3)})).catch((function(n){R("Puhelinnumeron lis\xe4\xe4minen ei onnistunut"),setTimeout((function(){R(null)}),5e3)}))}}),Object(O.jsx)("h3",{children:"Numerot"}),Object(O.jsx)(S,{shownNames:E,handleDeleteButton:function(n){var e=n.target.value;window.confirm("Poistetaanko "+t.find((function(n){return n.id===e})))&&b(e,(function(){var n=t.filter((function(n){return n.id!==e}));u(n),w(n),L("Puhelinnumero poistettiin onnistuneesti"),setTimeout((function(){L(null)}),5e3)}),(function(){R("Puhelinnumero on jo aiemmin poistettu"),setTimeout((function(){R(null)}),5e3)}))}})]})},T=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,i=e.getFID,u=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),i(n),u(n),c(n),o(n)}))};o.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),T()}},[[42,1,2]]]);
//# sourceMappingURL=main.f7d171ab.chunk.js.map