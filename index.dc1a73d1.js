function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t=document.querySelector("#tree");!function e(n,a){var o=document.createElement("ul"),l=!0,i=!1,u=void 0;try{for(var c,f=Object.entries(a)[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var y,d=(y=c.value,function(r){if(Array.isArray(r))return r}(y)||function(r,t){var e,n,a=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=a){var o=[],l=!0,i=!1;try{for(a=a.call(r);!(l=(e=a.next()).done)&&(o.push(e.value),2!==o.length);l=!0);}catch(r){i=!0,n=r}finally{try{l||null==a.return||a.return()}finally{if(i)throw n}}return o}}(y,2)||function(t,e){if(t){if("string"==typeof t)return r(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,2)}}(y,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=d[0],m=d[1],h=document.createElement("li"),s=e(o,m);h.textContent=p,s.textContent&&h.appendChild(s),o.append(h)}}catch(r){i=!0,u=r}finally{try{l||null==f.return||f.return()}finally{if(i)throw u}}return t.append(o),o}(t,{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.dc1a73d1.js.map
