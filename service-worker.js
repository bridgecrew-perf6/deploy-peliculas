if(!self.define){let n,s={};const i=(i,e)=>(i=new URL(i+".js",e).href,s[i]||new Promise((s=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=s,document.head.appendChild(n)}else n=i,importScripts(i),s()})).then((()=>{let n=s[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(e,l)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=n=>i(n,r),f={module:{uri:r},exports:o,require:c};s[r]=Promise.all(e.map((n=>f[n]||c(n)))).then((n=>(l(...n),o)))}}define(["./workbox-cb3ce6c3"],(function(n){"use strict";n.setCacheNameDetails({prefix:"tienda"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"api/productos.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/225.6dcc685d.css",revision:null},{url:"css/282.206e747a.css",revision:null},{url:"css/434.3bf1bbbb.css",revision:null},{url:"css/489.3bf1bbbb.css",revision:null},{url:"css/603.10aff692.css",revision:null},{url:"css/761.5b62505a.css",revision:null},{url:"css/884.e5f584d1.css",revision:null},{url:"css/app.8c5b220b.css",revision:null},{url:"css/vendor.d5309633.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.81048c6d.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.12730e02.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"9e8b803a7ba03ba7eaa1e4d1be32d45e"},{url:"js/193.12daaee3.js",revision:null},{url:"js/225.235c06b8.js",revision:null},{url:"js/282.9309dfa5.js",revision:null},{url:"js/33.dec3bad5.js",revision:null},{url:"js/434.a6dce505.js",revision:null},{url:"js/489.ecdb1c09.js",revision:null},{url:"js/603.6b6b14cd.js",revision:null},{url:"js/614.38c9f922.js",revision:null},{url:"js/761.e1e65160.js",revision:null},{url:"js/884.1e933cd2.js",revision:null},{url:"js/app.11f1f5dc.js",revision:null},{url:"manifest.json",revision:"23307a21bf1825ad9c7e84de341ce9f1"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
//# sourceMappingURL=service-worker.js.map
