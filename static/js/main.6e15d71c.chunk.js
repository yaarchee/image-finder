(this["webpackJsonphooks-image-finder"]=this["webpackJsonphooks-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(7),u=a(2);function i(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],l=c[1];return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(o)}},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:o,placeholder:"Search images and photos",onChange:function(e){var t=e.target;return l(t.value)}})))}function s(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return r.a.createElement("li",{"data-attribute":"SRL",id:t,className:"ImageGalleryItem"},r.a.createElement("img",{src:a,alt:"",className:"ImageGalleryItem-image","data-index":n}))}var m=a(6),g=(a(16),a(9)),f=a.n(g);function h(e){var t=e.images;return r.a.createElement(m.a,null,r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e,t){return r.a.createElement(s,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,key:t})}))),r.a.createElement(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}))}var b={key:"18291614-3687f9869972091b65dd4882c",perPage:12,crateFetchFind:function(e,t){return console.log(t),fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=\n        ".concat(e,"&page=").concat(t,"&per_page=").concat(this.perPage,"&key=").concat(this.key)).then((function(e){return e.json()})).then((function(e){return{hits:e.hits,totalHits:e.totalHits}}))}},d={rootMargin:"50px"};function p(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),g=s[0],f=s[1],p=Object(n.useState)(1),E=Object(u.a)(p,2),v=E[0],S=E[1],y=Object(n.useState)(null),j=Object(u.a)(y,2),O=j[0],F=j[1];Object(n.useEffect)((function(){if(g)return k(),function(){console.log("\u0434\u0438\u0441\u043a\u043e\u043d\u0435\u043a\u0442"),I.current.disconnect()}}),[g,v]);var I=Object(n.useRef)(new IntersectionObserver((function(e,t){return a=t,n=S,void e.forEach((function(e){e.isIntersecting&&(console.log("\u0437\u0430\u0448\u043b\u0438 onEntry"),a.unobserve(e.target),n((function(e){return e+1})))}));var a,n}),d)),k=function(){if(O===a.length)return console.log("\u0434\u0438\u0441\u043a\u043e\u043d\u0435\u043a\u0442"),void I.current.disconnect();b.crateFetchFind(g,v).then((function(e){var t=e.hits,a=e.totalHits;c((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),console.log(t.length),0!==t.length&&(F(a),console.log(a),function(e){console.log("\u0437\u0430\u0448\u043b\u0438 lazyLoadImg");var t=document.querySelectorAll(".ImageGalleryItem");e.observe(t[t.length-1])}(I.current))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,null,r.a.createElement(i,{onSubmit:function(e){e!==g&&(c([]),S(1),f(e),I.current.disconnect())}}),a.length>0&&r.a.createElement(h,{images:a})))}a(38);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6e15d71c.chunk.js.map