(function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"557b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),r("router-view")],1)},a=[],i=(r("5c0b"),r("2877")),c={},s=Object(i["a"])(c,o,a,!1,null,null,null),l=s.exports,u=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container mx-auto"},[r("h1",{staticClass:"text-5xl font-bold"},[t._v("Blog")]),r("div",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(t){return r("Post",{key:t.id,attrs:{item:t}})})),1)])},p=[],d=(r("96cf"),r("1da1")),v=r("bc3a"),h=r.n(v),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/2 p-6 m-6 bg-white shadow-md rounded-lg",class:t.grid},[r("img",{staticClass:"rounded-lg",attrs:{src:t.item.image}}),r("h1",{staticClass:"text-5xl font-bold"},[r("router-link",{attrs:{to:"/post/"+t.item.id}},[t._v(t._s(t.item.title))])],1),r("p",[t._v(t._s(t.item.content))]),r("div",{staticClass:"pt-12"},[r("p",{staticClass:"text-gray-600"},[t._v("By "+t._s(t.item.author))])])])},b=[],g={props:["grid","item"]},w=g,y=Object(i["a"])(w,m,b,!1,null,null,null),_=y.exports,x={name:"home",components:{Post:_},data:function(){return{articles:null}},created:function(){this.fetchArticles()},methods:{fetchArticles:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="http://127.0.0.1:5000/api/articles",e.next=3,h.a.get(r);case 3:n=e.sent,o=n.data,t.articles=o,console.log(t.articles);case 7:case"end":return e.stop()}}),e)})))()}}},O=x,j=Object(i["a"])(O,f,p,!1,null,null,null),P=j.exports;n["a"].use(u["a"]);var C=[{path:"/",name:"home",component:P}],k=new u["a"]({routes:C,mode:"history"});r("557b");n["a"].config.productionTip=!1,new n["a"]({router:k,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.e7aeec5c.js.map