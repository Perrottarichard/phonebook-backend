(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(13),l=n.n(u),c=n(2),o=n(3),s=n.n(o),i="/api/persons",m=function(){return s.a.get(i).then((function(e){return e.data}))},d=function(e){return s.a.post(i,e).then((function(e){return e.data}))},h=function(e,t){return s.a.put("".concat(i,"/").concat(e),t).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var t=e.persons,n=e.newName,a=e.newNumber,u=e.setPersons,l=e.setNewName,c=e.setNewNumber,o=e.handleNumberInput,s=e.handlePersonInput,i=e.setSuccessMessage,m=e.setErrorMessage;e.errorMessage;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Entry"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),t.filter((function(e){return e.name===n})).length>0&&a.length>=8){if(window.confirm("".concat(n," is already in the phonebook. Would you like to replace the old number?"))){var r=t.filter((function(e){return e.name===n})).map((function(e){return e.id}));h(r,{name:n,number:a}).catch((function(e){m(e.response.data),setTimeout((function(){m(null)}),5e3)})).then((function(e){u(t.map((function(t){return t.name!==n?t:e}))),l(""),c(""),i("Number successfully replaced"),setTimeout((function(){i(null)}),3e3)}))}}else if(t.filter((function(e){return e.name===n})).length>0)alert("".concat(n," is already in the phonebook. You can replace the number with a new one by using the form. Enter the name, and enter a new number at least 8 digits long"));else{d({name:n,number:a}).catch((function(e){console.log(e),m("Something went wrong. Make sure the name is at least 3 characters long and the phone number is at least 8 digits long"),setTimeout((function(){m(null)}),7e3)})).then((function(e){void 0!==e.id&&(u(t.concat(e)),l(""),c(""),i("Contact successfully added"),setTimeout((function(){i(null)}),3e3))}))}}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:s})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},E=function(e){var t=e.searchName,n=e.handleSearchName;return r.a.createElement("div",null,"Filter shown: ",r.a.createElement("input",{value:t,onChange:n}))},g=function(e){var t=e.persons,n=e.showAll,a=e.searchName,u=e.removeEntry,l=n?t:t.filter((function(e){return-1!==e.name.toString().toLowerCase().indexOf(a.toLowerCase())}));return r.a.createElement("div",null,l.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("ul",{key:e.name},"ID: ",e.id,r.a.createElement("br",null)," Name: ",e.name,r.a.createElement("br",null)," Number: ",e.number," ",r.a.createElement("button",{key:e.id,onClick:function(){return u(e.id)}},"Delete"))," ")})))},p=function(e){var t=e.persons,n=e.setPersons,a=e.editName,u=e.setEditName,l=e.editNumber,c=e.setEditNumber,o=e.handleNumberEdit,s=e.handleNameEdit,i=e.setToggleForm,m=e.toggleForm,d=e.showForm,f=e.editById,b=e.handleIdEdit,E=e.setEditById,g=e.setErrorMessage;return r.a.createElement("div",null,r.a.createElement("h2",null,"Update Existing Entry By ID:"),m?r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={id:f,name:a,number:l};h(f,r).catch((function(e){return g("Something went wrong.  Make sure the name is 3 character or longer, and the phone number is at least 8 digits"),setTimeout((function(){g(null)}),5e3),n(t.map((function(e){return e})))})).then(n(t.map((function(e){return e.id!==f?e:r})))),u(""),c(""),E(""),i(!1)}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:a,onChange:s,placeholder:"New name"})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:l,onChange:o,placeholder:"New number"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"Go Back"),r.a.createElement("button",{type:"submit"},"Submit Update"))):r.a.createElement("div",null,r.a.createElement("input",{value:f,onChange:b,placeholder:"Enter ID"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"Submit ID"))))},v=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"success"},r.a.createElement("h1",null,t))},N=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},r.a.createElement("h1",{style:{color:"red"}},t))},w=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),o=Object(c.a)(l,2),s=o[0],i=o[1],d=Object(a.useState)(""),h=Object(c.a)(d,2),w=h[0],y=h[1],O=Object(a.useState)(""),S=Object(c.a)(O,2),j=S[0],k=S[1],I=Object(a.useState)(!0),C=Object(c.a)(I,2),M=C[0],T=C[1],P=Object(a.useState)(""),B=Object(c.a)(P,2),D=B[0],F=B[1],A=Object(a.useState)(""),x=Object(c.a)(A,2),J=x[0],L=x[1],U=Object(a.useState)(!1),G=Object(c.a)(U,2),W=G[0],Y=G[1],q=Object(a.useState)(""),z=Object(c.a)(q,2),H=z[0],K=z[1],Q=Object(a.useState)(""),R=Object(c.a)(Q,2),V=R[0],X=R[1],Z=Object(a.useState)(""),$=Object(c.a)(Z,2),_=$[0],ee=$[1];Object(a.useEffect)((function(){m().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:_}),r.a.createElement(N,{message:V}),r.a.createElement(E,{searchName:j,handleSearchName:function(e){e.target.value.length>0?(T(!1),k(e.target.value)):(T(!0),k(e.target.value))}}),r.a.createElement(b,{persons:n,setPersons:u,newName:s,setNewName:i,handlePersonInput:function(e){i(e.target.value)},handleNumberInput:function(e){y(e.target.value)},newNumber:w,setNewNumber:y,setSuccessMessage:ee,errorMessage:V,setErrorMessage:X}),r.a.createElement(p,{persons:n,setPersons:u,editName:D,setEditName:F,handleNameEdit:function(e){F(e.target.value)},handleNumberEdit:function(e){L(e.target.value)},editNumber:J,setEditNumber:L,toggleForm:W,setToggleForm:Y,showForm:function(){Y(!W)},editById:H,setEditById:K,handleIdEdit:function(e){K(e.target.value)},setErrorMessage:X,setSuccessMessage:ee}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{setPersons:u,persons:n,showAll:M,searchName:j,removeEntry:function(e){window.confirm("Are you sure you want to delete ".concat(n.filter((function(t){return t.id===e})).map((function(e){return e.name})),"?"))&&(f(e).then(u(n.filter((function(t){return t.id!==e})))).catch((function(e){X("That contact was already removed from server"),setTimeout((function(){X(null)}),5e3)})),ee("Contact successfully deleted"),setTimeout((function(){ee(null)}),3e3))}}))};n(36);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ea98145f.chunk.js.map