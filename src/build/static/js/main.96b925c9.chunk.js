(this["webpackJsonpdashboard-kazakhstan"]=this["webpackJsonpdashboard-kazakhstan"]||[]).push([[0],{11:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),l=a.n(r),i=a(1),c=a.n(i),o=a(2),m=a(6),u=a(7),d=a(10),h=a(9),f=a(3),p=function(){return s.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-white py-6 px-6 md:px-16 shadow-sm"},s.a.createElement("div",{className:"flex items-center flex-shrink-0 text-gray-600 mr-6"},s.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"KAZAKHSTAN DASHBOARD")),s.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},s.a.createElement("div",{className:"text-sm lg:flex-grow"}),s.a.createElement("div",null,s.a.createElement("a",{href:"https://datahub.io/anuveyatsu",target:"_blank",className:"block mt-4 lg:ml-6 lg:inline-block lg:mt-0 text-sm text-gray-700 hover:text-black"},"DATAHUB"),s.a.createElement("a",{href:"https://github.com/anuveyatsu",target:"_blank",className:"block mt-4 lg:ml-6 lg:inline-block lg:mt-0 text-sm text-gray-700 hover:text-black"},"GITHUB"))))},x=function(e){var t=e.totalCases,a=e.totalDeaths,n=e.deathRate,r=e.newCases,l=e.newCaseRate;return s.a.createElement("div",{className:"grid sm:grid-cols-1 lg:grid-cols-5 gap-8 mt-4 mb-4 font-bold text-3xl"},s.a.createElement("div",{className:"border text-center py-16"},t,s.a.createElement("div",{className:"text-xs text-gray-600 font-light"},"Cases in Kazakhstan")),s.a.createElement("div",{className:"border text-center py-16"},a,s.a.createElement("div",{className:"text-xs text-gray-600 font-light"},"Deaths in Kazakhstan")),s.a.createElement("div",{className:"border text-center py-16"},n," %",s.a.createElement("div",{className:"text-xs text-gray-600 font-light"},"Death rate")),s.a.createElement("div",{className:"border text-center py-16"},r,s.a.createElement("div",{className:"text-xs text-gray-600 font-light"},"New cases last 24h")),s.a.createElement("div",{className:"border text-center py-16"},l," %",s.a.createElement("div",{className:"text-xs text-gray-600 font-light"},"New cases rate")))},g=a(8),v=a.n(g),y=function(e){return s.a.createElement(v.a,{className:"w-full h-graph",data:e.data,layout:{title:e.title,yaxis:{type:e.scale},colorway:["black","gray","orange"]},config:{responsive:!0,displayModeBar:!1}})},N=(a(24),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={population:[],covid19:[],isLoading:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t="https://raw.githubusercontent.com/anuveyatsu/demographics-kz/master/data/regions-total.csv",a="https://raw.githubusercontent.com/anuveyatsu/covid-19-kz/master/data/kz.csv",n={isLoading:!1},e.next=6,Promise.all([t,a].map(function(){var e=Object(o.a)(c.a.mark((function e(s){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s);case 2:if(r=e.sent,s!==t){e.next=12;break}return e.t0=f.parse,e.next=7,r.text();case 7:e.t1=e.sent,e.t2={header:!0},n.population=(0,e.t0)(e.t1,e.t2).data,e.next=19;break;case 12:if(s!==a){e.next=19;break}return e.t3=f.parse,e.next=16,r.text();case 16:e.t4=e.sent,e.t5={header:!0},n.covid19=(0,e.t3)(e.t4,e.t5).data;case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:this.setState(n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getActiveCases",value:function(){var e=this.state.covid19,t={x:[],y:[],type:"scatter",name:"Active cases (Almaty)",mode:"lines+markers"},a={x:[],y:[],type:"scatter",name:"Active cases (Astana)",mode:"lines+markers"},n={x:[],y:[],type:"scatter",name:"Active cases (Kazakhstan)",mode:"lines+markers"},s={x:[],y:[],type:"bar",name:"New cases rate (Almaty)"},r={x:[],y:[],type:"bar",name:"New cases rate (Astana)"},l={x:[],y:[],type:"bar",name:"New cases rate (Kazakhstan)"},i=null,c=null,o=null;return e.forEach((function(e){var m=new Date(e.Date).getHours();if([0,3,6,9,12,15,18,21].includes(m)){var u=e.Date.slice(0,19),d=parseInt(e.Confirmed)-parseInt(e.Recovered)-parseInt(e.Deaths);if("\u041d\u0443\u0440-\u0421\u0443\u043b\u0442\u0430\u043d"===e.Region){a.x.push(u),a.y.push(d);var h=c?e.Confirmed-c.Confirmed:null,f=h?h/c.Confirmed*100:null;r.x.push(u),r.y.push(f),c=JSON.parse(JSON.stringify(e))}else if("\u0410\u043b\u043c\u0430\u0442\u044b"===e.Region){t.x.push(u),t.y.push(d);var p=i?e.Confirmed-i.Confirmed:null,x=p?p/i.Confirmed*100:null;s.x.push(u),s.y.push(x),i=JSON.parse(JSON.stringify(e))}else if("\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"===e.Region){n.x.push(u),n.y.push(d);var g=o?e.Confirmed-o.Confirmed:null,v=g?g/o.Confirmed*100:null;l.x.push(u),l.y.push(v),o=JSON.parse(JSON.stringify(e))}}})),[t,a,n]}},{key:"getNewCasesRate",value:function(){var e=this.state.covid19,t={x:[],y:[],type:"bar",name:"New cases rate (Almaty)"},a={x:[],y:[],type:"bar",name:"New cases rate (Astana)"},n={x:[],y:[],type:"bar",name:"New cases rate (Kazakhstan)"},s=null,r=null,l=null;e.forEach((function(e){if(6===new Date(e.Date).getHours()){var i=e.Date.slice(0,19);if("\u041d\u0443\u0440-\u0421\u0443\u043b\u0442\u0430\u043d"===e.Region){a.x.push(i);var c=r?e.Confirmed-r.Confirmed:null,o=c?c/r.Confirmed*100:null;a.y.push(o),r=JSON.parse(JSON.stringify(e))}else if("\u0410\u043b\u043c\u0430\u0442\u044b"===e.Region){t.x.push(i);var m=s?e.Confirmed-s.Confirmed:null,u=m?m/s.Confirmed*100:null;t.y.push(u),s=JSON.parse(JSON.stringify(e))}else if("\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"===e.Region){n.x.push(i);var d=l?e.Confirmed-l.Confirmed:null,h=d?d/l.Confirmed*100:null;n.y.push(h),l=JSON.parse(JSON.stringify(e))}}}));var i=[t.x[0],t.x[t.x.length-1]];return[t,a,n,{x:i,y:[5,5],type:"scatter",name:"5% level",mode:"lines",line:{color:"red",dash:"dot",width:1}},{x:i,y:[2,2],type:"scatter",name:"2% level",mode:"lines",line:{color:"blue",dash:"dot",width:1}}]}},{key:"render",value:function(){var e,t,a,n,r,l,i,c,o,m=this.state,u=m.covid19;return m.isLoading?s.a.createElement("div",{className:"flex h-screen"},s.a.createElement("p",{className:"m-auto"},"Loading ...")):(u.length>0&&(e=u.slice(u.length-19),t=u.slice(u.length-469,u.length-451),e.pop(),e.forEach((function(e){return e.id=e.Region})),a=e[0].Confirmed,r=((n=e[0].Deaths)/a*100).toFixed(2),i=((l=a-t[0].Confirmed)/t[0].Confirmed*100).toFixed(2),c=this.getActiveCases(),o=this.getNewCasesRate()),s.a.createElement("div",{className:"h-screen"},s.a.createElement(p,null),s.a.createElement("div",{className:"px-6 md:px-16 h-full"},s.a.createElement(x,{totalCases:a,totalDeaths:n,deathRate:r,newCases:l,newCaseRate:i}),s.a.createElement("div",{className:"grid grid-cols-1 mt-4 mb-4 w-full h-screen-800px"},s.a.createElement(y,{data:c,scale:"log",title:"Active cases (confirmed - recovered - deaths)"}),s.a.createElement(y,{data:o,scale:"linear",title:"New cases rate"})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.96b925c9.chunk.js.map