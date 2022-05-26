(()=>{"use strict";var n={982:(n,t,e)=>{e.d(t,{Z:()=>u});var r=e(81),a=e.n(r),o=e(645),i=e.n(o),c=e(667),s=e.n(c),l=new URL(e(532),e.b),p=i()(a());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var d=s()(l);p.push([n.id,":root{\n  --text:#f5f5f5;\n  --black: #293047;\n}\n\nhtml,body,p{\n  padding: 0;\n  margin: 0;\n}\n\nbody{\n  font-family: Roboto, sans-serif;\n  min-height: 100vh;\n  background-image: url("+d+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  color: var(--text);\n}\n\n.top{\n  display: flex;\n  justify-content: space-between;\n  padding: 60px 100px;\n  gap: 100px;\n}\n\n.left{\n  font-weight: bold;\n}\n\n#time{\n  font-size: 100px;\n}\n\n#time>span{\n  font-size: 20px;\n}\n\n#date{\n  font-size: 20px;\n  text-align: center;\n  letter-spacing: 2px;\n}\n\n.hourly-data{\n  margin-top: 50px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap:40px 20px;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n.hourly-data div p{\n  background-color: var(--black);\n  text-align: center;\n  border-radius: 10px;\n  margin: 0 5px;\n  padding: 2px 0;\n}\n\n.right{\n  padding-top: 40px;\n  text-align: right;\n}\n\n#location{\n  font-size: 50px;\n\n}\n\n#country{\n  margin-top: 10px;\n  font-size: 23px;\n  font-weight: 300;\n}\n\n.right div{\n  padding-top: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap:10px;\n}\n\n.right div img{\n  width: 25px;\n  height: auto;\n  cursor: pointer;\n  filter: invert(100%);\n}\n\n#city{\n  font-family: inherit;\n  color: inherit;\n  background:none;\n  padding: 5px 15px;\n  border: 1px solid var(--text);\n  border-radius: 30px;\n}\n\n#city::placeholder{\n  letter-spacing: 2px;\n}\n\n#error{\n  font-weight: 300;\n  font-size: 13px;\n  text-align: right;\n  padding-top: 10px;\n}\n\n/* BOTTOM */\n\n.bottom{\n  flex-grow: 1;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n}\n\n.large-icon{\n  width: 100px;\n  height: 100px;\n}\n\n.today{\n  display: flex;\n  padding: 20px 100px;\n  gap:30px;\n}\n\n.today div{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.today div p:first-child{\n  background-color: var(--black);\n  text-align: center;\n  border-radius: 10px;\n  width: 70px;\n  padding: 5px 0;\n  font-size: 13px;\n}\n\n.today div p:last-child{\n  font-size: 50px;\n  font-weight: lighter;\n}\n\n.small-icon{\n  width: 60px;\n  height: 60px;\n}\n\n.daily{\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: repeat(6,1fr);\n}\n\n.daily-data{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap:25px;\n}\n\n.daily-data p:first-child{\n  background-color: var(--black);\n  text-align: center;\n  border-radius: 10px;\n  width: 40px;\n  padding: 5px 0;\n  font-size: 13px;\n}\n\n.daily-data p:last-child{\n  font-size: 30px;\n  font-weight: 300;\n}\n",""]);const u=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=e(o[i]);t[c].references--}for(var s=r(n,a),l=0;l<o.length;l++){var p=e(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},532:(n,t,e)=>{n.exports=e.p+"9dbbad49f02ba711f488.png"}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),a=e.n(r),o=e(569),i=e.n(o),c=e(565),s=e.n(c),l=e(216),p=e.n(l),d=e(589),u=e.n(d),f=e(982),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class h{static async start(n){const t=await h.requestInitialData(n);if(!t)return;const e=t.coord.lon,r=t.coord.lat,a=await h.requestDetailData(e,r);console.log(a)}static makeDetailRequestUrl(n,t){return`https://api.openweathermap.org/data/2.5/onecall?lat=${t}&lon=${n}&exclude=alerts&appid=1bd3a1f212c7d6849195a18bd92cac18`}static async requestDetailData(n,t){const e=h.makeDetailRequestUrl(n,t);try{const n=await fetch(e,{mode:"cors"});return await n.json()}catch(n){m.handleError("Sorry, our API is having technical problems.")}}static makeInitialRequestUrl(n){return`https://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=1bd3a1f212c7d6849195a18bd92cac18`}static async requestInitialData(n){const t=h.makeInitialRequestUrl(n);try{const n=await fetch(t,{mode:"cors"}),e=await n.json();return 200!==e.cod?(m.handleError("Sorry, the name of the city is not found."),null):(m.cleanUpInput(),e)}catch(n){m.handleError("Sorry, our API is having technical problems.")}}}class m{static loadPage(){m.setBtn()}static getInput(){const n=document.getElementById("city");h.start(n.value)}static setBtn(){const n=document.getElementById("search-btn"),t=document.getElementById("city");n.addEventListener("click",m.getInput),t.addEventListener("keypress",(n=>{"Enter"===event.key&&(event.preventDefault(),m.getInput())}))}static handleError(n){document.getElementById("error").textContent=n}static cleanUpInput(){const n=document.getElementById("city"),t=document.getElementById("error");n.value="",t.textContent=""}static updateLocation(){}}m.loadPage()})()})();