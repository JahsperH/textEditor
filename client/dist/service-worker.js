if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let f={};const l=e=>n(e,t),o={module:{uri:t},exports:f,require:l};i[t]=Promise.all(s.map((e=>o[e]||l(e)))).then((e=>(r(...e),f)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"4bafed224e44ad656a0a8008aa7ae2b0"},{url:"install.bundle.js",revision:"1c1416c7befae3fa7bafb769454cf770"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"92498f7281d9bdc62aa816650e25c261"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.css",revision:"55000d38b02080fb4cbf975ce66bb3a4"}],{})}));
