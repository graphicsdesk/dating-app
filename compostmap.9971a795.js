parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oq66":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/compostable-01.99b474b5.svg";
},{}],"jtOP":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/ceramic-01.2195230f.svg";
},{}],"xAtB":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/compost_bin-01.461dfe16.svg";
},{}],"x8Tr":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/conveyor-01.70f322ba.svg";
},{}],"lIhs":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/eco-tray-01.74a4174c.svg";
},{}],"U95x":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/paper-01.485cb6b8.svg";
},{}],"AMYm":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/plastic-01.9a665ea4.svg";
},{}],"sUr6":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/plastic_v2-01.1e3759a7.svg";
},{}],"AHZJ":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/recycling_bin-01.d1cd40eb.svg";
},{}],"AR2I":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/platters-01.4326b979.svg";
},{}],"IV74":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/togo-container-01.8eda122f.svg";
},{}],"zy80":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/compost-culture/trash_bin-01.eeb3c9eb.svg";
},{}],"PJ9O":[function(require,module,exports) {
module.exports={"compostable-01":require("./compostable-01.svg"),"ceramic-01":require("./ceramic-01.svg"),"compost_bin-01":require("./compost_bin-01.svg"),"conveyor-01":require("./conveyor-01.svg"),"eco-tray-01":require("./eco-tray-01.svg"),"paper-01":require("./paper-01.svg"),"plastic-01":require("./plastic-01.svg"),"plastic_v2-01":require("./plastic_v2-01.svg"),"recycling_bin-01":require("./recycling_bin-01.svg"),"platters-01":require("./platters-01.svg"),"togo-container-01":require("./togo-container-01.svg"),"trash_bin-01":require("./trash_bin-01.svg")};
},{"./compostable-01.svg":"oq66","./ceramic-01.svg":"jtOP","./compost_bin-01.svg":"xAtB","./conveyor-01.svg":"x8Tr","./eco-tray-01.svg":"lIhs","./paper-01.svg":"U95x","./plastic-01.svg":"AMYm","./plastic_v2-01.svg":"sUr6","./recycling_bin-01.svg":"AHZJ","./platters-01.svg":"AR2I","./togo-container-01.svg":"IV74","./trash_bin-01.svg":"zy80"}],"codS":[function(require,module,exports) {
"use strict";var e=t(require("../../assets/*.svg"));function t(e){return e&&e.__esModule?e:{default:e}}console.log(e.default),mapboxgl.accessToken="pk.eyJ1IjoiYXBhcmsyMDIwIiwiYSI6ImNreWYxaHJmaTA4aXkyb25hNm5hOW03d3EifQ.B4hdg3BWPvgkXvd802O2Ng";var o="ceramic-01",c="togo-container-01",r="compost_bin-01",a="conveyor-01",i="eco-tray-01",s="paper-01",n="plastic_v2-01",l="platters-01",y="recycling_bin-01",p="trash_bin-01",m=new mapboxgl.Map({container:"map",style:"mapbox://styles/apark2020/cl2nufawr001y14od9j9gawm7",center:[-73.961588,40.807885],zoom:15.98});m.on("click",function(t){console.log("click");var u=m.queryRenderedFeatures(t.point,{layers:["dininghalllocations"]});if(u.length){var d=u[0];(new mapboxgl.Popup).setLngLat(d.geometry.coordinates).setHTML('\n              <div class=throw>\n              <p style="margin-top:2%;margin-bottom:1%;">Disposal options</p>\n              <img class=icons id=trash src=\''.concat(e.default[p],"'></img>\n              <img class=icons id=recycle src='").concat(e.default[y],"'></img>\n              <img class=icons id=bin src='").concat(e.default[r],"'></img>\n              <img class=icons id=platter src='").concat(e.default[l],"'></img>\n              <img class=icons id=conveyor src='").concat(e.default[a],'\'></img>\n                </div>\n              <div class=plate style="margin-bottom:2%;">\n              <p style="margin-top:0%;margin-bottom:2%;">Container options</p>\n              <img class=icons id=ceramic src=\'').concat(e.default[o],"'></img>\n              <img class=icons id=eco src='").concat(e.default[i],"'></img>\n              <img class=icons id=togo src='").concat(e.default[c],"'></img>\n              <img class=icons id=paper src='").concat(e.default[s],"'></img>\n              <img class=icons id=plastic src='").concat(e.default[n],"'></img>\n                </div>")).addTo(m);"N"===d.properties.Ceramic?document.querySelector("#ceramic").style.opacity="30%":document.querySelector("#ceramic").style.opacity="100%","N"===d.properties.Compost?document.querySelector("#bin").style.opacity="30%":document.querySelector("#bin").style.opacity="100%","N"===d.properties["Conveyor Belt"]?document.querySelector("#conveyor").style.opacity="30%":document.querySelector("#conveyor").style.opacity="100%","N"===d.properties["Eco-Tray"]?document.querySelector("#eco").style.opacity="30%":document.querySelector("#eco").style.opacity="100%","N"===d.properties["Paper trays"]?document.querySelector("#paper").style.opacity="30%":document.querySelector("#paper").style.opacity="100%","N"===d.properties["Plastic cups/utensils"]?document.querySelector("#plastic").style.opacity="30%":document.querySelector("#plastic").style.opacity="100%","N"===d.properties["Recycling/mixed paper"]?document.querySelector("#recycle").style.opacity="30%":document.querySelector("#recycle").style.opacity="100%","N"===d.properties.Trash?document.querySelector("#trash").style.opacity="30%":document.querySelector("#trash").style.opacity="100%","N"===d.properties.Server?document.querySelector("#platter").style.opacity="30%":document.querySelector("#platter").style.opacity="100%","N"===d.properties["To-go tray"]?document.querySelector("#togo").style.opacity="30%":document.querySelector("#togo").style.opacity="100%"}}),m.on("mouseenter","dininghalllocations",function(){m.getCanvas().style.cursor="pointer"}),m.on("mouseleave","dininghalllocations",function(){m.getCanvas().style.cursor=""}),m.scrollZoom.disable(),m.dragRotate.disable(),m.touchZoomRotate.disableRotation();
},{"../../assets/*.svg":"PJ9O"}]},{},["codS"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/compost-culture/compostmap.9971a795.js.map