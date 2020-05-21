(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),l=n.n(u),c=n(2),o=n(14),s=n(3),i=n.n(s),m="/api/persons",d=function(){return i.a.get(m).then((function(e){return e.data}))},h=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e,t){return i.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var t=e.persons,n=e.newName,a=e.newNumber,u=e.setPersons,l=e.setNewName,c=e.setNewNumber,s=e.handleNumberInput,i=e.handlePersonInput,m=e.setSuccessMessage,d=e.setErrorMessage;e.errorMessage;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Entry"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===n})).length>0&&a.length>=8){if(window.confirm("".concat(n," is already in the phonebook. Would you like to replace the old number?"))){var r={name:n,number:a},s=t.filter((function(e){return e.name===n})).map((function(e){return e.id}));f(s,r).catch((function(e){d(e.response.data),setTimeout((function(){d(null)}),5e3)})).then((function(e){u(t.map((function(e){return e.name!==n?e:Object(o.a)({person:e},r)})))})),l(""),c(""),m("Number successfully replaced"),setTimeout((function(){m(null)}),3e3)}}else if(t.filter((function(e){return e.name===n})).length>0)alert("".concat(n," is already in the phonebook. You can replace the number with a new one by using the form. Enter the name, and enter a new number at least 8 digits long"));else{h({name:n,number:a}).catch((function(e){console.log(e),d("Something went wrong. Make sure the name is at least 3 characters long and the phone number is at least 8 digits long"),setTimeout((function(){d(null)}),7e3)})).then((function(e){void 0!==e.id&&(u(t.concat(e)),l(""),c(""),m("Contact successfully added"),setTimeout((function(){m(null)}),3e3))}))}}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:i})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:a,onChange:s})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},g=function(e){var t=e.searchName,n=e.handleSearchName;return r.a.createElement("div",null,"Filter shown: ",r.a.createElement("input",{value:t,onChange:n}))},p=function(e){var t=e.persons,n=e.showAll,a=e.searchName,u=e.removeEntry,l=n?t:t.filter((function(e){return-1!==e.name.toString().toLowerCase().indexOf(a.toLowerCase())}));return r.a.createElement("div",null,l.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("ul",{key:e.name},"ID: ",e.id,r.a.createElement("br",null)," Name: ",e.name,r.a.createElement("br",null)," Number: ",e.number," ",r.a.createElement("button",{key:e.id,onClick:function(){return u(e.id)}},"Delete"))," ")})))},v=function(e){var t=e.persons,n=e.setPersons,a=e.editName,u=e.setEditName,l=e.editNumber,c=e.setEditNumber,o=e.handleNumberEdit,s=e.handleNameEdit,i=e.setToggleForm,m=e.toggleForm,d=e.showForm,h=e.editById,b=e.handleIdEdit,E=e.setEditById,g=e.setErrorMessage;return r.a.createElement("div",null,r.a.createElement("h2",null,"Update Existing Entry By ID:"),m?r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={id:h,name:a,number:l};f(h,r).catch((function(e){return g("Something went wrong.  Make sure the name is 3 character or longer, and the phone number is at least 8 digits"),setTimeout((function(){g(null)}),5e3),n(t.map((function(e){return e})))})).then(n(t.map((function(e){return e.id!==h?e:r})))),u(""),c(""),E(""),i(!1)}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:a,onChange:s,placeholder:"New name"})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:l,onChange:o,placeholder:"New number"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"Go Back"),r.a.createElement("button",{type:"submit"},"Submit Update"))):r.a.createElement("div",null,r.a.createElement("input",{value:h,onChange:b,placeholder:"Enter ID"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"Submit ID"))))},N=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"success"},r.a.createElement("h1",null,t))},w=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},r.a.createElement("h1",{style:{color:"red"}},t))},y=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),o=Object(c.a)(l,2),s=o[0],i=o[1],m=Object(a.useState)(""),h=Object(c.a)(m,2),f=h[0],y=h[1],O=Object(a.useState)(""),j=Object(c.a)(O,2),S=j[0],k=j[1],I=Object(a.useState)(!0),C=Object(c.a)(I,2),M=C[0],T=C[1],P=Object(a.useState)(""),B=Object(c.a)(P,2),D=B[0],F=B[1],A=Object(a.useState)(""),x=Object(c.a)(A,2),J=x[0],L=x[1],U=Object(a.useState)(!1),G=Object(c.a)(U,2),W=G[0],Y=G[1],q=Object(a.useState)(""),z=Object(c.a)(q,2),H=z[0],K=z[1],Q=Object(a.useState)(""),R=Object(c.a)(Q,2),V=R[0],X=R[1],Z=Object(a.useState)(""),$=Object(c.a)(Z,2),_=$[0],ee=$[1];Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(N,{message:_}),r.a.createElement(w,{message:V}),r.a.createElement(g,{searchName:S,handleSearchName:function(e){e.target.value.length>0?(T(!1),k(e.target.value)):(T(!0),k(e.target.value))}}),r.a.createElement(E,{persons:n,setPersons:u,newName:s,setNewName:i,handlePersonInput:function(e){i(e.target.value)},handleNumberInput:function(e){y(e.target.value)},newNumber:f,setNewNumber:y,setSuccessMessage:ee,errorMessage:V,setErrorMessage:X}),r.a.createElement(v,{persons:n,setPersons:u,editName:D,setEditName:F,handleNameEdit:function(e){F(e.target.value)},handleNumberEdit:function(e){L(e.target.value)},editNumber:J,setEditNumber:L,toggleForm:W,setToggleForm:Y,showForm:function(){Y(!W)},editById:H,setEditById:K,handleIdEdit:function(e){K(e.target.value)},setErrorMessage:X,setSuccessMessage:ee}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{setPersons:u,persons:n,showAll:M,searchName:S,removeEntry:function(e){window.confirm("Are you sure you want to delete ".concat(n.filter((function(t){return t.id===e})).map((function(e){return e.name})),"?"))&&(b(e).then(u(n.filter((function(t){return t.id!==e})))).catch((function(e){X("That contact was already removed from server"),setTimeout((function(){X(null)}),5e3)})),ee("Contact successfully deleted"),setTimeout((function(){ee(null)}),3e3))}}))};n(37);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a5f1b3a4.chunk.js.map