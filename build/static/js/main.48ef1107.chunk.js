(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),l=n.n(u),c=n(2),o=n(3),i=n.n(o),m="/api/persons",s=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e,t){return i.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var t=e.persons,n=e.newName,a=e.newNumber,u=e.setPersons,l=e.setNewName,c=e.setNewNumber,o=e.handleNumberInput,i=e.handlePersonInput,m=e.setSuccessMessage;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Entry"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===n})).length>0&&0!==a.length){if(window.confirm("".concat(n," is already in the phonebook. Would you like to replace the old number?"))){var r={name:n,number:a},o=t.filter((function(e){return e.name===n})).map((function(e){return e.id}));f(o,r).then((function(e){u(t.map((function(t){return t.name!==n?t:e})))})),l(""),c(""),m("Number successfully replaced"),setTimeout((function(){m(null)}),3e3)}}else if(t.filter((function(e){return e.name===n})).length>0)alert("".concat(n," is already in the phonebook. You can replace the number with a new one by using the form"));else{d({name:n,number:a}).then((function(e){u(t.concat(e))})),l(""),c(""),m("Contact successfully added"),setTimeout((function(){m(null)}),3e3)}}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:i})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},b=function(e){var t=e.searchName,n=e.handleSearchName;return r.a.createElement("div",null,"Filter shown: ",r.a.createElement("input",{value:t,onChange:n}))},v=function(e){var t=e.persons,n=e.showAll,a=e.searchName,u=e.removeEntry,l=n?t:t.filter((function(e){return-1!==e.name.toString().toLowerCase().indexOf(a.toLowerCase())}));return r.a.createElement("div",null,l.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("ul",{key:e.name},"ID: ",e.id,r.a.createElement("br",null)," Name: ",e.name,r.a.createElement("br",null)," Number: ",e.number," ",r.a.createElement("button",{key:e.id,onClick:function(){return u(e.id)}},"Delete"))," ")})))},p=function(e){var t=e.persons,n=e.setPersons,a=e.editName,u=e.setEditName,l=e.editNumber,c=e.setEditNumber,o=e.handleNumberEdit,i=e.handleNameEdit,m=e.setToggleForm,s=e.toggleForm,d=e.showForm,h=e.editById,E=e.handleIdEdit,b=e.setEditById,v=e.setErrorMessage;return r.a.createElement("div",null,r.a.createElement("h2",null,"Update Existing Entry By ID:"),s?r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={id:h,name:a,number:l};f(h,r).catch((function(e){v("That contact was already removed from server"),setTimeout((function(){v(null)}),5e3)})).then(n(t.map((function(e){return e.id!==h?e:r})))),u(""),c(""),b(""),m(!1)}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:a,onChange:i,placeholder:"New name"})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:l,onChange:o,placeholder:"New number"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"Go Back"),r.a.createElement("button",{type:"submit"},"Submit Update"))):r.a.createElement("div",null,r.a.createElement("input",{value:h,onChange:E,placeholder:"Enter ID"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"Submit ID"))))},N=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"success"},r.a.createElement("h1",null,t))},g=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},r.a.createElement("h1",{style:{color:"red"}},t))},w=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),o=Object(c.a)(l,2),i=o[0],m=o[1],d=Object(a.useState)(""),f=Object(c.a)(d,2),w=f[0],y=f[1],O=Object(a.useState)(""),j=Object(c.a)(O,2),S=j[0],k=j[1],I=Object(a.useState)(!0),C=Object(c.a)(I,2),T=C[0],P=C[1],B=Object(a.useState)(""),D=Object(c.a)(B,2),F=D[0],M=D[1],A=Object(a.useState)(""),x=Object(c.a)(A,2),J=x[0],L=x[1],U=Object(a.useState)(!1),G=Object(c.a)(U,2),W=G[0],Y=G[1],q=Object(a.useState)(""),z=Object(c.a)(q,2),H=z[0],K=z[1],Q=Object(a.useState)(""),R=Object(c.a)(Q,2),V=R[0],X=R[1],Z=Object(a.useState)(""),$=Object(c.a)(Z,2),_=$[0],ee=$[1];Object(a.useEffect)((function(){s().then((function(e){u(e)})),console.log("useEffect running")}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(N,{message:_}),r.a.createElement(g,{message:V}),r.a.createElement(b,{searchName:S,handleSearchName:function(e){e.target.value.length>0?(P(!1),k(e.target.value)):(P(!0),k(e.target.value))}}),r.a.createElement(E,{persons:n,setPersons:u,newName:i,setNewName:m,handlePersonInput:function(e){m(e.target.value)},handleNumberInput:function(e){y(e.target.value)},newNumber:w,setNewNumber:y,setSuccessMessage:ee}),r.a.createElement(p,{persons:n,setPersons:u,editName:F,setEditName:M,handleNameEdit:function(e){M(e.target.value)},handleNumberEdit:function(e){L(e.target.value)},editNumber:J,setEditNumber:L,toggleForm:W,setToggleForm:Y,showForm:function(){Y(!W)},editById:H,setEditById:K,handleIdEdit:function(e){K(e.target.value)},setErrorMessage:X,setSuccessMessage:ee}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{setPersons:u,persons:n,showAll:T,searchName:S,removeEntry:function(e){window.confirm("Are you sure you want to delete ".concat(n.filter((function(t){return t.id===e})).map((function(e){return e.name})),"?"))&&(h(e).then(u(n.filter((function(t){return t.id!==e})))).catch((function(e){X("That contact was already removed from server"),setTimeout((function(){X(null)}),5e3)})),ee("Contact successfully deleted"),setTimeout((function(){ee(null)}),3e3))}}))};n(36);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.48ef1107.chunk.js.map