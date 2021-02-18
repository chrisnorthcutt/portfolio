(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(18),i=c.n(n),r=(c(24),c.p,c(25),c(7)),l=c(15),o=(c(17),c(10)),d=c(1);function j(e){var t=e.label,c=e.link,a=e.click,s=e.active;return Object(d.jsx)(o.b,{to:"/".concat(c),children:Object(d.jsx)("li",{onClick:a,className:"font-semibold dark:hover:text-green-400 hover:text-green-600 p-2 rounded-lg ".concat(s===t?"  text-green-600 dark:text-green-400":"dark:text-gray-300"),children:t})})}function x(){var e=s.a.useState("Work"),t=Object(l.a)(e,2),c=t[0],a=t[1],n=s.a.useState(!1),i=Object(l.a)(n,2),o=i[0],x=i[1],b=function(e){return{label:e,active:c,click:function(){a(e)}}};return Object(d.jsxs)("header",{className:"pt-6 w-full flex-col sm:flex-row gap-8 sm:gap-0 flex items-center justify-between",children:[Object(d.jsx)("div",{style:{height:60,width:60},children:Object(d.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("rect",{x:"2",y:"2",width:"56",height:"56",stroke:"rgba(16, 185, 129, 1)","stroke-width":"4"}),Object(d.jsx)("path",{d:"M37.1155 21.0457H33.4422V32.023H33.2888L25.7547 21.0457H22.5161V38.5002H26.2064V27.5144H26.3343L33.928 38.5002H37.1155V21.0457Z",fill:"rgba(16, 185, 129, 1)"})]})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"flex content-center gap-8 sm:gap-16 justify-center",children:[Object(d.jsx)(j,Object(r.a)(Object(r.a)({},b("Work")),{},{link:""})),Object(d.jsx)(j,Object(r.a)(Object(r.a)({},b("Experiments")),{},{link:"experiments"})),Object(d.jsx)(j,Object(r.a)(Object(r.a)({},b("About")),{},{link:"about"})),Object(d.jsx)(j,Object(r.a)(Object(r.a)({},b("Resume")),{},{link:"resume"}))]})}),Object(d.jsx)("button",{className:"bg-green-400 p-2",onClick:function(){var e=document.getElementsByTagName("body")[0];e.classList.toggle("dark"),e.classList.contains("bg-gray-900")&&!e.classList.contains("dark")?(e.classList.add("bg-gray-100"),e.classList.remove("bg-gray-900"),x(!o)):(e.classList.add("bg-gray-900"),e.classList.remove("bg-gray-100"),x(!o))},children:o?"Dark":"Light"})]})}function b(){return Object(d.jsx)("div",{className:"py-8 dark:text-gray-400 font-semibold",children:"Made with Tailwind + React"})}function g(){return Object(d.jsx)("h1",{className:"text-white",children:"About"})}function h(){return Object(d.jsx)("h1",{className:"text-white",children:"Experiments"})}function m(){return Object(d.jsx)("h1",{className:"text-white",children:"Resume"})}function u(e){var t=e.title,c=e.description,a=e.link;e.gradient;return Object(d.jsxs)("section",{className:" py-16 mb-12 flex gap-16 flex-col-reverse md:flex-row dark:text-white text-gray-700",style:{maxWidth:960},children:[Object(d.jsxs)("div",{className:"text-left flex-col flex gap-16 self-auto justify-center",style:{maxWidth:300},children:[Object(d.jsxs)("div",{className:"flex gap-4 flex-col",children:[Object(d.jsx)("h3",{className:"font-bold text-4xl",children:t}),Object(d.jsx)("p",{className:"text-base font-regular opacity-75",children:c})]}),Object(d.jsx)("a",{href:a,className:"text-green-500 dark: text-green-200 font-semibold text-lg",children:"View Project"})]}),Object(d.jsx)("div",{style:{height:400},className:"md:flex-1 bg-blue-100"})]})}function f(){return Object(d.jsxs)("main",{children:[Object(d.jsxs)("div",{className:"flex flex-col gap-8  mb-20 mt-40 text-left",children:[Object(d.jsxs)("div",{className:"flex flex-col gap-4 ",children:[Object(d.jsx)("h4",{className:"text-xl dark:text-gray-200 font-semibold text-green-500",children:"UX Designer & Developer"}),Object(d.jsx)("h1",{className:"text-7xl font-bold text-gray-700 dark:text-white",children:"Chris Northcutt"})]}),Object(d.jsxs)("p",{className:"text-2xl font-semibold dark:text-gray-200 text-gray-500",children:["I\u2019m a product designer, podcaster, and writer, living in San Francisco.",Object(d.jsx)("br",{}),"I\u2019m currently building native mobile apps at GitHub."]})]}),Object(d.jsx)(u,{title:"MyMedicalLocker",link:"mymedicallocker"}),Object(d.jsx)(u,{title:"OfficeEMR Mobile",gradient:"linear-gradient(104.77deg, #CA9C42 -7.17%, #FBC255 96.95%)",link:"anywherecare"}),Object(d.jsx)(u,{title:"AnywhereCare",gradient:"linear-gradient(104.77deg, #8BB3C5 -7.17%, #4CD9D1 96.95%)",link:"anywherecare"})]})}u.defaultProps={title:"Title",description:"MyMedicalLocker is a secure patient portal that allows patients to access their medical records 24/7. ",link:"./",gradient:"linear-gradient(104.77deg, #3B7ABC -7.17%, #55B5FB 96.95%)"};var O=c(2);var p=function(){return s.a.useEffect((function(){document.getElementsByTagName("body")[0].classList.add("dark","bg-gray-900")})),Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"px-8",style:{maxWidth:960,margin:"0 auto"},children:[Object(d.jsx)(x,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/",exact:!0,component:f}),Object(d.jsx)(O.a,{path:"/resume",component:m}),Object(d.jsx)(O.a,{path:"/about",component:g}),Object(d.jsx)(O.a,{path:"/experiments",component:h})]}),Object(d.jsx)(b,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.39eb30cc.chunk.js.map