(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{29:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),u=n(5),i=n(6);function d(){var t=Object(u.a)(["\n  width: 100%;\n  height: 2rem;\n  border-radius: 50px;\n  padding: 0.2rem 1rem;\n"]);return d=function(){return t},t}var o=i.b.input(d()),c=n(7),p=function(t){var e=Object(r.useState)(t),n=Object(c.a)(e,2),a=n[0],u=n[1];return{value:a,setValue:u,reset:function(){return u("")},bind:{value:a,onChange:function(t){u(t.target.value)}}}};function s(){var t=Object(u.a)(["\n  width: 100%;\n  height: 2rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n"]);return s=function(){return t},t}var b=i.b.input(s());function f(){var t=Object(u.a)(["\n  margin: 10px auto;\n  width: 90%;\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: 6fr 1fr;\n"]);return f=function(){return t},t}var l=i.b.form(f()),m=n(8);e.default=function(t){var e=p(""),n=e.value,u=e.bind,i=e.reset,d=Object(r.useContext)(m.a);return a.a.createElement(l,{onSubmit:function(t){t.preventDefault(),d({type:"addTodo",payload:n}),i()}},a.a.createElement(o,Object.assign({"data-testid":"inputName",type:"text"},u,{placeholder:"Add your To Do",autoFocus:!0})),a.a.createElement(b,{"data-testid":"submitRefButton",type:"submit",value:"Add",disabled:!n}))}}}]);
//# sourceMappingURL=4.e0f8463a.chunk.js.map