!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return r[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var l=Object.prototype.toString;t.toString=l;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=c},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,a=void 0,i=void 0,s=void 0,l=void 0;n&&(a=n.start.line,i=n.end.line,s=n.start.column,l=n.end.column,e+=" - "+a+":"+s);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=s,this.endColumn=l))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){var r=n(12);e.exports=(r.default||r).template({1:function(e,t,n,r,o){var a=e.lambda,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <div class="photo-card">\n    <img src='+i(a(null!=t?s(t,"webformatURL"):t,t))+" alt="+i(a(null!=t?s(t,"tags"):t,t))+'/>\n    <div class="stats">\n      <p class="stats-item">\n        <i class="material-icons">thumb_up</i>\n        <span>'+i(a(null!=t?s(t,"likes"):t,t))+'</span>\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">visibility</i>\n        <span>'+i(a(null!=t?s(t,"views"):t,t))+'</span>\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">comment</i>\n        <span>'+i(a(null!=t?s(t,"comments"):t,t))+'</span>\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">cloud_download</i>\n        <span>'+i(a(null!=t?s(t,"downloads"):t,t))+"</span>\n      </p>\n    </div>\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a;return(null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?a:"")+"\n\n\n"},useData:!0})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=n(0),a=r(n(1)),i=n(4),s=n(21),l=r(n(6)),u=n(7);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},i.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var d=l.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=l.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),s.default(e),l.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var o=r(n(14)),a=r(n(15)),i=r(n(16)),s=r(n(17)),l=r(n(18)),u=r(n(19)),c=r(n(20))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return i("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var r=n(23),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6)),a=Object.create(null);function i(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var r=n(10),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var d=s(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:c,updater:A(p,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function A(e,t){var n,r,o;if(t.singleton){var a=m++;n=h||(h=u(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var c=s(n[u]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(8),o=n.n(r)()(!0);o.push([e.i,".form-input{font-size:1em;padding:.8em;width:90%;margin-bottom:30px;border-radius:6px;border:1px solid #cacaca}@media screen and (min-width: 530px){.form-input{width:400px}}.photo-card{width:100%;justify-self:center;border:1px solid #cecece;border-radius:6px;box-shadow:0 2px 6px #bbb}@media screen and (min-width: 530px){.photo-card{width:430px}}@media screen and (min-width: 920px){.photo-card{width:400px}}@media screen and (min-width: 1280px){.photo-card{width:370px}}.photo-card img{width:100%;border-top-left-radius:6px;border-top-right-radius:6px}@media screen and (min-width: 530px){.photo-card img{height:270px}}@media screen and (min-width: 920px){.photo-card img{height:250px}}@media screen and (min-width: 1280px){.photo-card img{height:230px}}#god{border:2px solid #1e90ff}.stats{display:flex;justify-content:space-around}.stats-item{display:flex;align-items:center}.stats-item .material-icons:not(:last-child){margin-right:7px;color:#cacaca}body{background-color:#fefefe;padding:30px}.gallery{display:grid;justify-content:center;grid-template-columns:repeat(1, 1fr);grid-gap:15px 15px}@media screen and (min-width: 920px){.gallery{grid-template-columns:repeat(2, 1fr)}}@media screen and (min-width: 1280px){.gallery{grid-template-columns:repeat(3, 1fr)}}","",{version:3,sources:["webpack://scss/_form.scss","webpack://scss/_cards.scss","webpack://scss/main.scss","webpack://scss/_variables.scss"],names:[],mappings:"AAAA,YACE,aAAA,CACA,YAAA,CACA,SAAA,CAIA,kBAAA,CACA,iBAAA,CACA,wBAAA,CALA,qCAJF,YAKI,WAAA,CAAA,CCLJ,YACE,UAAA,CAUA,mBAAA,CACA,wBAAA,CACA,iBAAA,CACA,yBAAA,CAZA,qCAFF,YAGI,WAAA,CAAA,CAEF,qCALF,YAMI,WAAA,CAAA,CAEF,sCARF,YASI,WAAA,CAAA,CAMF,gBACE,UAAA,CAWA,0BAAA,CACA,2BAAA,CAVA,qCAHF,gBAII,YAAA,CAAA,CAEF,qCANF,gBAOI,YAAA,CAAA,CAEF,sCATF,gBAUI,YAAA,CAAA,CAMN,KACE,wBAAA,CAEF,OACE,YAAA,CACA,4BAAA,CACA,YACE,YAAA,CACA,kBAAA,CACA,6CACE,gBAAA,CACA,aAAA,CC/BN,KACE,wBCZS,CDaT,YAAA,CAEF,SACE,YAAA,CACA,sBAAA,CACA,oCAAA,CACA,kBAAA,CACA,qCALF,SAMI,oCAAA,CAAA,CAEF,sCARF,SASI,oCAAA,CAAA",sourcesContent:[".form-input {\n  font-size: 1em;\n  padding: 0.8em;\n  width: 90%;\n  @media screen and(min-width: 530px){\n    width: 400px;\n  }\n  margin-bottom: 30px;\n  border-radius: 6px;\n  border: 1px solid #cacaca;\n}",".photo-card {\n  width: 100%;\n  @media screen and(min-width: 530px) { \n    width: 430px;\n  }\n  @media screen and(min-width: 920px) { \n    width: 400px;\n  }\n  @media screen and(min-width: 1280px) { \n    width: 370px;\n  }\n  justify-self: center;\n  border: 1px solid #cecece;\n  border-radius: 6px;\n  box-shadow: 0 2px 6px #bbbbbb;\n  img {\n    width: 100%;\n    // height: 100%;\n    @media screen and(min-width: 530px) { \n      height: 270px;\n    }\n    @media screen and(min-width: 920px) { \n      height: 250px;\n    }\n    @media screen and(min-width: 1280px) { \n      height: 230px;\n    }\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n  }\n}\n#god {\n  border: 2px solid dodgerblue;\n}\n.stats {\n  display: flex;\n  justify-content: space-around;\n  &-item {\n    display: flex;\n    align-items: center;\n    .material-icons:not(:last-child){\n      margin-right: 7px;\n      color: #cacaca;\n    }\n  }\n}",'@import "./variables"; \r\n@import "./form";\r\n@import "./cards";\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  // outline: 1px dotted indigo;\r\n}\r\n\r\n\r\nbody {\r\n  background-color: $bg-color;\r\n  padding: 30px;\r\n}\r\n.gallery {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  grid-gap: 15px 15px;\r\n  @media screen and (min-width: 920px){\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  @media screen and (min-width: 1280px){\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n',"$bg-color: #fefefe;"],sourceRoot:""}]),t.default=o},function(e,t,n){e.exports=n(13).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var a=o(n(3)),i=r(n(24)),s=r(n(1)),l=o(n(0)),u=o(n(25)),c=r(n(27));function d(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var p=d();p.create=d,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var o=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return a(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var o,a=n(0),i=n(1),s=(o=i)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new s.default("Must pass iterator to #each");var n,o=t.fn,i=t.inverse,l=0,u="",c=void 0,d=void 0;function p(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,d&&(c.contextPath=d+t)),u+=o(e[t],{data:c,blockParams:a.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var f=e.length;l<f;l++)l in e&&p(l,l,l===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var h=[],m=e[r.Symbol.iterator](),A=m.next();!A.done;A=m.next())h.push(A.value);for(f=(e=h).length;l<f;l++)p(l,l,l===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&p(n,l-1),n=e,l++})),void 0!==n&&p(n,l-1,!0);return 0===l&&(u=i(this)),u}))},e.exports=t.default}).call(this,n(5))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),a=n(1),i=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var n=t.fn;if(o.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:o.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var r,o=n(22),a=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=n.partials;n.partials=r.extend({},i,t.partials);var s=e(o,a);return n.partials=i,s}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(t))};var r=n(0)},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=s.COMPILER_REVISION;if(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)return;if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var r=s.REVISION_CHANGES[n],o=s.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(n,r,a){a.hash&&(r=o.extend({},r,a.hash),a.ids&&(a.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,a);var s=o.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,n,r,s);if(null==l&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),l=a.partials[a.name](r,s)),null!=l){if(a.indent){for(var u=l.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=a.indent+u[c];l=u.join("\n")}return l}throw new i.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var a=this.programs[e],i=this.fn(e);return t||o||r||n?a=d(this,e,i,t,n,r,o):a||(a=this.programs[e]=d(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=o.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;a._setup(n),!n.partial&&e.useData&&(o=f(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;function l(t){return""+e.main(r,t,r.helpers,r.partials,o,s,i)}return e.useDepths&&(i=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(l=h(e.main,l,r,n.depths||[],o,s))(t,n)}return a.isTop=!0,a._setup=function(a){if(a.partial)r.protoAccessControl=a.protoAccessControl,r.helpers=a.helpers,r.partials=a.partials,r.decorators=a.decorators,r.hooks=a.hooks;else{var i=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return u.wrapHelper(e,(function(e){return o.extend({lookupProperty:n},e)}))}(r,t)}))}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=o.extend({},t.decorators,a.decorators)),r.hooks={},r.protoAccessControl=c.createProtoAccessControl(a);var s=a.allowCallsToHelperMissing||n;l.moveHelperToHooks(r,"helperMissing",s),l.moveHelperToHooks(r,"blockHelperMissing",s)}},a._child=function(t,n,o,a){if(e.useBlockParams&&!o)throw new i.default("must pass block params");if(e.useDepths&&!a)throw new i.default("must pass parent depths");return d(r,t,e[t],n,0,o,a)},a},t.wrapProgram=d,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;n.fn&&n.fn!==p&&function(){n.data=s.createFrame(n.data);var e=n.fn;a=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=o.extend({},n.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new i.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=p;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},s=n(3),l=n(4),u=n(26),c=n(7);function d(e,t,n,r,o,a,i){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(s=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),s)}return(s=h(n,s,e,i,r,a)).program=t,s.depth=i?i.length:0,s.blockParams=o||0,s}function p(){return""}function f(e,t){return t&&"root"in t||((t=t?s.createFrame(t):{}).root=e),t}function h(e,t,n,r,a,i){if(e.decorator){var s={};t=e.decorator(t,s,n,r&&r[0],a,i,r),o.extend(t,s)}return t}},function(e,t,n){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(5))},function(e,t,n){"use strict";n.r(t);n(9);var r=function(e,t){return fetch(`https://pixabay.com/api/?key=18979440-a7a6e8d5b4453f8671b44f46a&q=${e}&page=${t}&per_page=12&image_type=photo&orientation=horizontal`)},o=n(2),a=n.n(o);const i={app:document.querySelector("#app"),dataIn:document.querySelector("#dataIn"),dataOut:document.querySelector("#dataOut")},s={page:1,value:"",lastChild:"",falseStart:!1},l=new IntersectionObserver((function(e,t){s.falseStart?(t.disconnect(),r(s.value,s.page).then(e=>e.json()).then(({hits:e})=>i.dataOut.insertAdjacentHTML("beforeend",a()(e))).then(()=>{s.lastChild=i.dataOut.lastElementChild,t.observe(s.lastChild)}),s.falseStart=!1):s.falseStart=!0,s.page++}),{root:null,rootMargin:"0px",threshold:.5});i.dataIn.addEventListener("submit",(function(e){e.preventDefault(),s.page=1,s.value=e.target["main-input"].value,r(s.value,s.page).then(e=>e.json()).then(({hits:e})=>i.dataOut.innerHTML=a()(e)).then(()=>{s.lastChild=i.dataOut.lastElementChild,l.observe(s.lastChild)}),s.page++}))}]);
//# sourceMappingURL=main.bundle.js.map