(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports=t(39)},19:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),s=(t(19),t(2)),o=t(13),m=t.n(o),i=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)((function(){try{var e=localStorage.getItem("baseUrl");return c(!0),e||""}catch(a){return console.log(a),""}})),o=Object(s.a)(r,2),i=o[0],u=o[1],b=Object(n.useState)(null),p=Object(s.a)(b,2),d=p[0],f=p[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),v=g[0],h=g[1],N=Object(n.useState)(!1),S=Object(s.a)(N,2),j=S[0],O=S[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},l.a.createElement("div",{className:"navbar-brand"}," file upload ")),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row justify-content-start p-3 m-4 shadow-sm bg-white"},l.a.createElement("div",{className:"col-md-8"},v?l.a.createElement("div",{className:"pb-2 mb-4 border-bottom"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:v},v)):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("input",{type:"text",className:"form-control",value:i||"",placeholder:"Server Base URL? ex: http://localhost:3000",onChange:function(e){u(e.target.value),c(!1)}}),l.a.createElement("button",{className:"btn btn-success",onClick:function(){localStorage.setItem("baseUrl",i),c(!0)},disabled:!i},"Save")),l.a.createElement("p",{className:"text-muted pb-2 mb-2 border-bottom"},"Sending files to ",i+"/files"," |"," ",t?l.a.createElement("span",{className:"text-success"},"Saved"):l.a.createElement("span",{className:"text-danger"},"Not saved")),i&&t?l.a.createElement("div",null,l.a.createElement("div",{className:"pt-3 input-group"},j?l.a.createElement("p",null,"Uploading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{type:"file",className:"custom-file-input",name:"file",onChange:function(e){f(e.target.files[0])}}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},d?d.name:"Choose File")),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-primary",disabled:!d,onClick:function(){O(!0);var e=new FormData;e.append("file",d),m.a.post("".concat(i,"/files"),e).then((function(e){console.log(e),O(!1),h(i+e.data.path)})).catch((function(e){console.log(e),O(!1),h("#there-was-an-error-pls-check-console")})),f(null)}},"Upload"))))):l.a.createElement(l.a.Fragment,null)))))};t(37),t(38);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.26495eda.chunk.js.map