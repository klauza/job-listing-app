(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,a){e.exports=a(71)},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),c=function(){return l.a.createElement("div",null,"ABOUT ROUTE")},i=a(28),s=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",background:"#d4d4d4",padding:"10px 0"}},l.a.createElement(i.b,{to:"/"},"Home"),l.a.createElement(i.b,{to:"/about"},"About"))},u=a(7),m=(a(67),a(39)),d=a.n(m),p=a(26),E=a(47),f=(a(69),a(105)),b=a(104),v=a(103),h=a(101),g=a(102),j=a(100),y=a(107),k=l.a.forwardRef((function(e,t){return l.a.createElement(y.a,Object.assign({direction:"up",ref:t},e))}));function w(e){var t=e.job,a=e.open,n=e.handleClose;return t.title?l.a.createElement("div",null,l.a.createElement(b.a,{open:a,TransitionComponent:k,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(j.a,{id:"alert-dialog-slide-title"},t.title," -",t.company,l.a.createElement("img",{alt:"",className:"detail-logo",src:t.company_logo})),l.a.createElement(h.a,null,l.a.createElement(g.a,{id:"alert-dialog-slide-description",dangerouslySetInnerHTML:{__html:t.description}})),l.a.createElement(v.a,null,l.a.createElement(f.a,{onClick:n,color:"primary"},"Disagree"),l.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(f.a,{color:"primary"},"Apply"))))):l.a.createElement("div",null)}var C=a(53),x=a(106),O=a(52),S=a.n(O),B=a(51),N=a.n(B),_=a(98),A=function(e){var t=e.job,a=e.onClick;return l.a.createElement(_.a,{onClick:a,className:"job"},l.a.createElement("div",null,l.a.createElement(C.a,{variant:"h6"},t.title),l.a.createElement(C.a,{variant:"h5"},t.company),l.a.createElement(C.a,null,t.location)),l.a.createElement("div",null,l.a.createElement(C.a,null,t.created_at.split(" ").slice(0,3).join(" "))))},M=function(e){var t=e.jobs,a=t.length,n=Math.ceil(a/50),r=l.a.useState(0),o=Object(p.a)(r,2),c=o[0],i=o[1],s=t.slice(50*c,50*c+50),u=l.a.useState(!1),m=Object(p.a)(u,2),d=m[0],E=m[1],b=l.a.useState({}),v=Object(p.a)(b,2),h=v[0],g=v[1];return console.log("job is ",t[0]),l.a.createElement("div",{className:"jobs"},l.a.createElement(w,{open:d,job:h,handleClose:function(){E(!1)}}),l.a.createElement(C.a,{variant:"h4",component:"h1"},"    ","Entry level Software jobs"),l.a.createElement(C.a,{variant:"h6",component:"h1"},"Found ",a," jobs"),s.map((function(e,t){return l.a.createElement(A,{key:t,job:e,onClick:function(){E(!0),g(e)}})})),l.a.createElement("div",null,"Page ",c+1," of ",n),l.a.createElement(x.a,{variant:"progress",steps:n,position:"static",activeStep:c,nextButton:l.a.createElement(f.a,{size:"small",onClick:function(){i((function(e){return e+1}))},disabled:5===c},"Next",l.a.createElement(N.a,null)),backButton:l.a.createElement(f.a,{size:"small",onClick:function(){i((function(e){return e-1}))},disabled:0===c},l.a.createElement(S.a,null),"Back")}))};function T(){return(T=Object(E.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/jobs");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t(n),console.log({json:n});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(){var e=l.a.useState([]),t=Object(p.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){!function(e){T.apply(this,arguments)}(n)}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(M,{jobs:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(s,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:z}),l.a.createElement(u.a,{exact:!0,path:"/about",component:c})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.83877255.chunk.js.map