parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uGUE":[function(require,module,exports) {
var e=[],t=function(t){t?n(t):e=document.querySelectorAll(".balance-text"),i();var l=r(function(){i()},100);window.addEventListener("resize",l)},n=function(t){selectorArray=t.split(",");for(var n=0;n<selectorArray.length;n+=1)for(var r=document.querySelectorAll(selectorArray[n].trim()),i=0;i<r.length;i+=1){var l=r[i];e.push(l)}},r=function(e,t,n){var r;return function(){var i=this,l=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,l)},t),o&&e.apply(i,l)}},i=function(){var t,n;for(n=0;n<e.length;n+=1)t=e[n],o(t)&&(t.style.maxWidth="",l(t,t.clientHeight,0,t.clientWidth))},l=function(e,t,n,r){var i;n>=r?e.style.maxWidth=r+"px":(i=(n+r)/2,e.style.maxWidth=i+"px",e.clientHeight>t?l(e,t,i+1,r):l(e,t,n+1,i))},o=function(e){var t,n,r,i,l;return l=e.innerHTML,10,r=e.innerHTML.split(" "),(i=document.createElement("span")).id="element-first-word",i.innerHTML=r[0],r=r.slice(1),e.innerHTML="",e.appendChild(i),e.innerHTML+=" "+r.join(" "),t=(i=document.getElementById("element-first-word")).offsetHeight,n=e.offsetHeight,e.innerHTML=l,n-10>t};exports.balanceText=t;
},{}],"EHrm":[function(require,module,exports) {
module.exports={name:"compost-culture",version:"0.0.0",private:!0,scripts:{start:"parcel src/index.html --global script",build:"parcel build src/index.html --global script --public-url https://spectator-static-assets.s3.amazonaws.com/compost-culture --no-content-hash",postinstall:"patch-package"},devDependencies:{cssnano:"^4.1.10",eslint:"^7.0.0","parcel-bundler":"^1.12.3","patch-package":"^6.2.2","posthtml-expressions":"^1.9.0","posthtml-include":"^1.7.4",sass:"^1.26.5"},dependencies:{"intersection-observer":"^0.10.0","text-balancer":"^1.0.5"},browserslist:["defaults"],prettier:{singleQuote:!0,trailingComma:"all",arrowParens:"avoid"},spectate:{USE_NEWS_NAV:!1,USE_EYE_NAV:!1,USE_COVER_HED:!1,IS_EMBED:!1,DOC_URL:"https://docs.google.com/document/d/1sQsZ1hRJ8r-v_ek14yNrqDILDFnvw60ahAHnYfs5QUw/edit"}};
},{}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"cHld":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=w;var e=require("../../package.json");function r(e){return i(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function i(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(){document.querySelector(".g-artboard[data-min-width]")&&require("_bundle_loader")(require.resolve("./ai2html-resizer")).then(function(e){return e.default()})}var l="div#fusion-app",c="div#fusion-app > div > div";function s(){var e=document.querySelector(l),t=document.querySelector(c);e.parentNode.replaceChild(t,e);var n=t.firstElementChild;r(n.children).some(function(e){return["META","LINK"].includes(e.tagName)})&&(n.style.margin=0),u()}var d=3e3,m=null;function f(e){document.body?document.querySelector(l)?s():u():e-(m||(m=e))<d?window.requestAnimationFrame(f):(console.log("Gave up replacing %s with article after %dms. Using window.onload.",l,d),window.onload=s)}var y="www.columbiaspectator.com"===window.location.host,p=0===window.location.pathname.indexOf("/contributors");function w(){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype||require("_bundle_loader")(require.resolve("intersection-observer")).then(),!y||p||e.spectate.IS_EMBED?u():window.requestAnimationFrame(f)}if(y&&p){document.querySelectorAll(".story-summary > .twolines > link").forEach(function(e){return e.disabled=!0});var v=document.createElement("style");v.type="text/css",v.innerText=".story-summary > .twolines { display: none; }",document.head.appendChild(v)}
},{"../../package.json":"EHrm","_bundle_loader":"TUK3","./ai2html-resizer":[["ai2html-resizer.156db1cd.js","bSCl"],"ai2html-resizer.156db1cd.js.map","bSCl"],"intersection-observer":[["intersection-observer.f8cf3ea1.js","GkNt"],"intersection-observer.f8cf3ea1.js.map","GkNt"]}],"IOwx":[function(require,module,exports) {
"use strict";function t(t,n){return i(t)||o(t,n)||e(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],l=!0,u=!1;try{for(e=e.call(t);!(l=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);l=!0);}catch(a){u=!0,o=a}finally{try{l||null==e.return||e.return()}finally{if(u)throw o}}return i}}function i(t){if(Array.isArray(t))return t}function l(r){var e=r.node,n=r.onEnter,o=r.onExit;new IntersectionObserver(function(r){var e=t(r,1)[0],i=e.isIntersecting,l=e.boundingClientRect.top;!i&&l<0?n():i&&l<window.innerHeight/2&&o()},{threshold:1}).observe(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.intersectTop=l;
},{}],"jtOP":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/ceramic-01.2195230f.svg";
},{}],"xAtB":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/compost_bin-01.461dfe16.svg";
},{}],"oq66":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/compostable-01.99b474b5.svg";
},{}],"lIhs":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/eco-tray-01.74a4174c.svg";
},{}],"x8Tr":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/conveyor-01.70f322ba.svg";
},{}],"U95x":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/paper-01.485cb6b8.svg";
},{}],"AR2I":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/platters-01.4326b979.svg";
},{}],"sUr6":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/plastic_v2-01.1e3759a7.svg";
},{}],"AHZJ":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/recycling_bin-01.d1cd40eb.svg";
},{}],"zy80":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/trash_bin-01.eeb3c9eb.svg";
},{}],"IV74":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/togo-container-01.8eda122f.svg";
},{}],"AMYm":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/plastic-01.9a665ea4.svg";
},{}],"PJ9O":[function(require,module,exports) {
module.exports={"ceramic-01":require("./ceramic-01.svg"),"compost_bin-01":require("./compost_bin-01.svg"),"compostable-01":require("./compostable-01.svg"),"eco-tray-01":require("./eco-tray-01.svg"),"conveyor-01":require("./conveyor-01.svg"),"paper-01":require("./paper-01.svg"),"platters-01":require("./platters-01.svg"),"plastic_v2-01":require("./plastic_v2-01.svg"),"recycling_bin-01":require("./recycling_bin-01.svg"),"trash_bin-01":require("./trash_bin-01.svg"),"togo-container-01":require("./togo-container-01.svg"),"plastic-01":require("./plastic-01.svg")};
},{"./ceramic-01.svg":"jtOP","./compost_bin-01.svg":"xAtB","./compostable-01.svg":"oq66","./eco-tray-01.svg":"lIhs","./conveyor-01.svg":"x8Tr","./paper-01.svg":"U95x","./platters-01.svg":"AR2I","./plastic_v2-01.svg":"sUr6","./recycling_bin-01.svg":"AHZJ","./trash_bin-01.svg":"zy80","./togo-container-01.svg":"IV74","./plastic-01.svg":"AMYm"}],"codS":[function(require,module,exports) {
"use strict";var e=t(require("../../assets/*.svg"));function t(e){return e&&e.__esModule?e:{default:e}}console.log(e.default),mapboxgl.accessToken="pk.eyJ1IjoiYXBhcmsyMDIwIiwiYSI6ImNreWYxaHJmaTA4aXkyb25hNm5hOW03d3EifQ.B4hdg3BWPvgkXvd802O2Ng";var o="ceramic-01",c="togo-container-01",r="compost_bin-01",a="conveyor-01",i="eco-tray-01",s="paper-01",n="plastic_v2-01",l="platters-01",y="recycling_bin-01",p="trash_bin-01",m=new mapboxgl.Map({container:"map",style:"mapbox://styles/apark2020/cl2nufawr001y14od9j9gawm7",center:[-73.961588,40.807885],zoom:15.98});m.on("click",function(t){console.log("click");var u=m.queryRenderedFeatures(t.point,{layers:["dininghalllocations"]});if(u.length){var d=u[0];(new mapboxgl.Popup).setLngLat(d.geometry.coordinates).setHTML('\n              <div class=throw>\n              <p style="margin-top:2%;margin-bottom:1%;">Disposal options</p>\n              <img class=icons id=trash src=\''.concat(e.default[p],"'></img>\n              <img class=icons id=recycle src='").concat(e.default[y],"'></img>\n              <img class=icons id=bin src='").concat(e.default[r],"'></img>\n              <img class=icons id=platter src='").concat(e.default[l],"'></img>\n              <img class=icons id=conveyor src='").concat(e.default[a],'\'></img>\n                </div>\n              <div class=plate style="margin-bottom:2%;">\n              <p style="margin-top:0%;margin-bottom:2%;">Container options</p>\n              <img class=icons id=ceramic src=\'').concat(e.default[o],"'></img>\n              <img class=icons id=eco src='").concat(e.default[i],"'></img>\n              <img class=icons id=togo src='").concat(e.default[c],"'></img>\n              <img class=icons id=paper src='").concat(e.default[s],"'></img>\n              <img class=icons id=plastic src='").concat(e.default[n],"'></img>\n                </div>")).addTo(m);"N"===d.properties.Ceramic?document.querySelector("#ceramic").style.opacity="30%":document.querySelector("#ceramic").style.opacity="100%","N"===d.properties.Compost?document.querySelector("#bin").style.opacity="30%":document.querySelector("#bin").style.opacity="100%","N"===d.properties["Conveyor Belt"]?document.querySelector("#conveyor").style.opacity="30%":document.querySelector("#conveyor").style.opacity="100%","N"===d.properties["Eco-Tray"]?document.querySelector("#eco").style.opacity="30%":document.querySelector("#eco").style.opacity="100%","N"===d.properties["Paper trays"]?document.querySelector("#paper").style.opacity="30%":document.querySelector("#paper").style.opacity="100%","N"===d.properties["Plastic cups/utensils"]?document.querySelector("#plastic").style.opacity="30%":document.querySelector("#plastic").style.opacity="100%","N"===d.properties["Recycling/mixed paper"]?document.querySelector("#recycle").style.opacity="30%":document.querySelector("#recycle").style.opacity="100%","N"===d.properties.Trash?document.querySelector("#trash").style.opacity="30%":document.querySelector("#trash").style.opacity="100%","N"===d.properties.Server?document.querySelector("#platter").style.opacity="30%":document.querySelector("#platter").style.opacity="100%","N"===d.properties["To-go tray"]?document.querySelector("#togo").style.opacity="30%":document.querySelector("#togo").style.opacity="100%"}}),m.on("mouseenter","dininghalllocations",function(){m.getCanvas().style.cursor="pointer"}),m.on("mouseleave","dininghalllocations",function(){m.getCanvas().style.cursor=""}),m.scrollZoom.disable(),m.dragRotate.disable(),m.touchZoomRotate.disableRotation();
},{"../../assets/*.svg":"PJ9O"}],"mpVp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hamburgerTrigger=l;var e=n(require("text-balancer")),t=n(require("./scripts/page")),s=require("./scripts/utils");require("./scripts/compostmap.js");var a=require("../package.json");function n(e){return e&&e.__esModule?e:{default:e}}(0,t.default)();var r=document.getElementById("navbar"),i=a.spectate.USE_NEWS_NAV,o=a.spectate.USE_EYE_NAV,c=a.spectate.USE_COVER_HED;function l(){r.classList.toggle("show-nav-links")}(i||o||c)&&(0,s.intersectTop)({node:document.getElementById("headline"),onEnter:function(){r.classList.remove("only-eye-logo"),r.classList.remove("hide-news-navbar")},onExit:function(){r.classList.remove("show-nav-links"),r.classList.add("only-eye-logo"),r.classList.add("hide-news-navbar")}}),window.innerWidth<=460&&e.default.balanceText("#headline, .deck, .image-caption-text");
},{"text-balancer":"uGUE","./scripts/page":"cHld","./scripts/utils":"IOwx","./scripts/compostmap.js":"codS","../package.json":"EHrm"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("js",require("Yi9z"));
},{}]},{},[0,"mpVp"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/compost-culture/script.75da7f30.js.map