(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{17:function(t,e,s){},18:function(t,e,s){},25:function(t,e,s){},26:function(t,e,s){},27:function(t,e,s){},28:function(t,e,s){"use strict";s.r(e);var n=s(12),c=s.n(n),a=s(11),i=s(8),o=s(2),r=(s(17),s(18),s(5)),u=s(4),d=s(0),j=function(t){var e=!0===t.status?"task__description task__description--done":"task__description";return Object(d.jsxs)("div",{className:"task",children:[Object(d.jsx)("button",{className:e,children:t.description}),Object(d.jsxs)("div",{className:"task__panel",children:[Object(d.jsx)("button",{className:"task__panel--edit",children:Object(d.jsx)(u.a,{icon:r.a})}),Object(d.jsx)("button",{className:"task__panel--remove",onClick:function(e){console.log(t.key)},children:Object(d.jsx)(u.a,{icon:r.c})})]})]})},l=function(t){return Object(d.jsxs)("div",{className:"tasks",children:[Object(d.jsx)("div",{className:"tasks__heading",children:"Your todo list"}),Object(d.jsx)("div",{className:"tasks__separator"}),Object(d.jsx)("div",{className:"tasks__list",children:t.items.map((function(t){return Object(d.jsx)(j,{description:t.description,status:t.status},t.id)}))})]})},b=(s(25),function(t){var e=Object(o.useState)(""),s=Object(i.a)(e,2),n=s[0],c=s[1];return Object(d.jsxs)("form",{className:"new-task",onSubmit:function(e){e.preventDefault();var s={id:Math.random(),description:n};t.onSaveData(s),c("")},children:[Object(d.jsx)("input",{className:"new-task__input",type:"text",placeholder:"What you need to do?",value:n,onChange:function(t){c(t.target.value)}}),Object(d.jsx)("button",{className:"new-task__button",type:"submit",children:Object(d.jsx)(u.a,{icon:r.b})})]})}),p=(s(26),[{id:1,description:"Wyrzuci\u0107 \u015bmieci",status:!1},{id:2,description:"Wytrze\u0107 naczynia",status:!0},{id:3,description:"Zrobi\u0107 zakupy",status:!1},{id:4,description:"Skosi\u0107 trawe",status:!0}]);var O=function(){var t=Object(o.useState)(p),e=Object(i.a)(t,3),s=e[0],n=e[1],c=e[2];return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{items:s,onRemoveTask:function(t){c((function(e){return Object(a.a)(e).remove[t]}))}}),Object(d.jsx)(b,{onSaveData:function(t){n((function(e){return[t].concat(Object(a.a)(e))}))}})]})};s(27);c.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.cc63b75b.chunk.js.map