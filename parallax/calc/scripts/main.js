function k(b,a,c,d){b.i.oa(b.R,a,c,d,void 0)}function m(b,a,c,d){b.i.u?k(b,a,c,d):b.i.wb()._OnMessageFromDOM({type:"event",component:b.R,handler:a,dispatchOpts:d||null,data:c,responseId:null})}function n(b,a,c){b.i.h(b.R,a,c)}function p(b,a){for(const [c,d]of a)n(b,c,d)}window.N=class{constructor(b,a){this.i=b;this.R=a}Ia(){}};window.nb=class{constructor(b){this.Ua=b;this.Ib=5;this.K=-1;this.da=-Infinity;this.Nb=()=>{this.K=-1;this.da=Date.now();this.S=!0;this.Ua();this.S=!1};this.Va=this.S=!1}};
"use strict";function aa(b,a){const c=a.elementId,d=b.Ka(c,a);b.o.set(c,d);d.style.boxSizing="border-box";a.isVisible||(d.style.display="none");d.addEventListener("focus",()=>{q(b,"elem-focused",c)});d.addEventListener("blur",()=>{q(b,"elem-blurred",c)});b.ba&&document.body.appendChild(d)}function r(b,a,c){n(b,a,d=>{const e=b.o.get(d.elementId);return c(e,d)})}function q(b,a,c,d){d||(d={});d.elementId=c;k(b,a,d)}function u(b,a,c){var d;d||(d={});d.elementId=c;m(b,a,d)}
window.gb=class extends self.N{constructor(b){super(b,"text-input");this.o=new Map;this.ba=!0;p(this,[["create",a=>aa(this,a)],["destroy",a=>{a=a.elementId;const c=this.o.get(a);this.ba&&c.parentElement.removeChild(c);this.o.delete(a)}],["set-visible",a=>{this.ba&&(this.o.get(a.elementId).style.display=a.isVisible?"":"none")}],["update-position",a=>{if(this.ba){var c=this.o.get(a.elementId);c.style.left=a.left+"px";c.style.top=a.top+"px";c.style.width=a.width+"px";c.style.height=a.height+"px";a=a.fontSize;
null!==a&&(c.style.fontSize=a+"em")}}],["update-state",a=>{const c=this.o.get(a.elementId);this.pa(c,a)}],["focus",a=>this.ua(a)],["set-css-style",a=>{this.o.get(a.elementId).style[a.prop]=a.val}],["set-attribute",a=>{this.o.get(a.elementId).setAttribute(a.name,a.val)}],["remove-attribute",a=>{this.o.get(a.elementId).removeAttribute(a.name)}]]);r(this,"get-element",a=>a)}Ka(){throw Error("required override");}pa(){throw Error("required override");}ua(b){var a=this.o.get(b.elementId);b.focus?a.focus():
a.blur()}};"use strict";const v=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),w=/android/i.test(navigator.userAgent);let x=0;function y(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Sb?new Promise(c=>{const d="c3_resolve_"+x;++x;self[d]=c;a.textContent=b.Wb+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((c,d)=>{a.onload=c;a.onerror=d;a.src=b;document.head.appendChild(a)})}let z=!1,ba=!1;
function ca(){if(!z){try{new Worker("blob://",{get type(){ba=!0}})}catch(b){}z=!0}return ba}let A=new Audio;const da={"audio/webm; codecs=opus":!!A.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!A.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!A.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!A.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!A.canPlayType("audio/mp4"),"audio/mpeg":!!A.canPlayType("audio/mpeg")};A=null;
async function ea(b){b=await fa(b);return(new TextDecoder("utf-8")).decode(b)}function fa(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsArrayBuffer(b)})}const C=[];let D=0;window.RealFile=window.File;const E=[],F=new Map,G=new Map;let ha=0;const ia=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");ia.push(b)};const ja=new Set(["cordova","playable-ad","instant-games"]);
let ka=!1;
window.B=class b{constructor(a){this.u=a.Yb;this.U=null;this.s="";this.ja=a.Vb;this.Y={};this.Ba=this.cb=null;this.ca=[];this.j=this.Ea=null;this.Ya=!1;this.T=null;this.I=-1;this.Mb=()=>this.Db();this.bb=[];this.g=a.eb;this.Aa="file"===location.protocol.substr(0,4);!this.u||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ca()||(this.u=!1);if("playable-ad"===this.g||"instant-games"===this.g)this.u=!1;if("cordova"===this.g&&this.u)if(w){const c=/Chrome\/(\d+)/i.exec(navigator.userAgent);c&&
90<=parseInt(c[1],10)||(this.u=!1)}else this.u=!1;this.fa=this.A=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("runtime","cordova-fetch-local-file",c=>this.zb(c));this.h("runtime","create-job-worker",()=>this.Ab());"cordova"===this.g?document.addEventListener("deviceready",()=>this.Oa(a)):this.Oa(a)}kb(){return v&&
"cordova"===this.g}na(){const a=navigator.userAgent;return v&&ja.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}ib(){return w}La(){return w&&ja.has(this.g)}async Oa(a){"macos-wkwebview"===this.g&&this.wa({type:"ready"});if("playable-ad"===this.g){this.A=self.c3_base64files;this.fa={};await this.sb();for(let d=0,e=a.L.length;d<e;++d){var c=a.L[d].toLowerCase();this.fa.hasOwnProperty(c)?a.L[d]={Sb:!0,Wb:this.fa[c]}:this.A.hasOwnProperty(c)&&(a.L[d]=URL.createObjectURL(this.A[c]))}}a.Ub?
this.s=a.Ub:(c=location.origin,this.s=("null"===c?"file:///":c)+location.pathname,c=this.s.lastIndexOf("/"),-1!==c&&(this.s=this.s.substr(0,c+1)));a.$b&&(this.Y=a.$b);c=new MessageChannel;this.U=c.port1;this.U.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Cb(d));this.T=new self.lb(this);await la(this.T);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,
e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.u?await this.yb(a,c.port2):await this.xb(a,c.port2)}ra(a){a=this.Y.hasOwnProperty(a)?this.Y[a]:a.endsWith("/workermain.js")&&this.Y.hasOwnProperty("workermain.js")?this.Y["workermain.js"]:"playable-ad"===this.g&&this.A.hasOwnProperty(a.toLowerCase())?this.A[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ma(a,c,d){if(a.startsWith("blob:"))return new Worker(a,
d);if("cordova"===this.g&&this.Aa)return a=await this.la(d.Rb?a:this.ja+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}C(){return Math.max(window.innerWidth,1)}v(){return Math.max(window.innerHeight,1)}Na(a){var c=this.s,d=location.href,e=this.C(),f=this.v(),g=window.devicePixelRatio,
h=b.O(),l=a.fc,t=window.cr_previewImageBlobs||this.A,wa=window.cr_previewProjectFileBlobs,xa=window.cr_previewProjectFiles,ya=window.dc||"";a=a.eb;var za=(new URLSearchParams(self.location.search)).has("debug"),K=this.T;return{runtimeBaseUrl:c,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:l,previewImageBlobs:t,previewProjectFileBlobs:wa,previewProjectFileSWUrls:xa,swClientId:ya,exportType:a,isDebug:za,ife:!!self.ec,jobScheduler:{inputPort:K.za,outputPort:K.Da,
maxNumWorkers:K.Kb},supportedAudioFormats:da,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ja+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ja+"opus.wasm.wasm",isFileProtocol:this.Aa,isiOSCordova:this.kb(),isiOSWebView:this.na(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async yb(a,c){var d=this.ra(a.Zb);this.cb=await this.ma(d,this.s,{type:"module",name:"Runtime",Rb:!0});this.j=document.createElement("canvas");this.j.style.display="none";d=this.j.transferControlToOffscreen();
document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let e=a.Ha||[],f=a.L;e=await Promise.all(e.map(g=>this.G(g)));f=await Promise.all(f.map(g=>this.G(g)));if("cordova"===this.g)for(let g=0,h=a.ka.length;g<h;++g){const l=a.ka[g],t=l[0];if(t===a.Ga||"scriptsInEvents.js"===t||t.endsWith("/scriptsInEvents.js"))l[1]=await this.G(t)}this.cb.postMessage(Object.assign(this.Na(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:d,
workerDependencyScripts:e,engineScripts:f,projectScripts:a.ka,mainProjectScript:a.Ga,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,d,...ma(this.T)]);this.ca=E.map(g=>new g(this));this.Ma();self.c3_callFunction=(g,h)=>{var l=this.Ea;return l.i.mb(l.R,{name:g,params:h})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.oa("runtime","go-to-last-error-script"))}async xb(a,c){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.ca=E.map(g=>new g(this));this.Ma();var d=a.L.map(g=>"string"===typeof g?(new URL(g,this.s)).toString():g);Array.isArray(a.Ha)&&d.unshift(...a.Ha);d=await Promise.all(d.map(g=>this.G(g)));await Promise.all(d.map(g=>y(g)));d=self.C3_ProjectScriptsStatus;const e=a.Ga,f=a.ka;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.G(h),await y(h),"preview"!==this.g||d[g]||this.Qa(g,"main script did not run to completion")}catch(l){this.Qa(g,
l)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.G(h),await y(h);"preview"===this.g&&"object"!==typeof self.ac.bc?(this.$(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Na(a),{isInWorker:!1,messagePort:c,canvas:this.j,runOnStartupFunctions:ia}),this.Pa(),this.Ba=
self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Ba,a))}Qa(a,c){this.$();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Pa(){this.$()}$(){const a=window.Pb;a&&(a.parentElement.removeChild(a),window.Pb=null)}async Ab(){const a=await na(this.T);return{outputPort:a,transferables:[a]}}wb(){if(this.u)throw Error("not available in worker mode");
return this.Ba}oa(a,c,d,e,f){this.U.postMessage({type:"event",component:a,handler:c,dispatchOpts:e||null,data:d,responseId:null},f)}mb(a,c){const d=ha++,e=new Promise((f,g)=>{G.set(d,{resolve:f,reject:g})});this.U.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const c=a.type;if("event"===c)return this.Bb(a);if("result"===c)this.Eb(a);else if("runtime-ready"===c)this.Fb();else if("alert-error"===c)this.$(),
alert(a.message);else if("creating-runtime"===c)this.Pa();else throw Error(`unknown message '${c}'`);}Bb(a){const c=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=F.get(c))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${c}' handler '${d}':`,h);null!==f&&this.Z(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.Z(f,!0,h)).catch(h=>{console.error(`Rejection from '${c}' handler '${d}':`,h);this.Z(f,!1,""+h)}):this.Z(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);
else console.warn(`[DOM] No event handlers for component '${c}'`)}Z(a,c,d){let e;d&&d.transferables&&(e=d.transferables);this.U.postMessage({type:"result",responseId:a,isOk:c,result:d},e)}Eb(a){const c=a.responseId,d=a.isOk;a=a.result;const e=G.get(c);d?e.resolve(a):e.reject(a);G.delete(c)}h(a,c,d){let e=F.get(a);e||(e=new Map,F.set(a,e));if(e.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);e.set(c,d)}static M(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Ma(){for(const a of this.ca)if("runtime"===
a.R){this.Ea=a;return}throw Error("cannot find runtime DOM handler");}Cb(a){this.oa("debugger","message",a)}Fb(){for(const a of this.ca)a.Ia()}static O(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||ka)}static aa(a){ka=!!a}Ra(){-1===this.I&&this.bb.length&&(this.I=requestAnimationFrame(this.Mb))}qb(){-1!==this.I&&(cancelAnimationFrame(this.I),this.I=-1)}Db(){this.I=-1;for(const a of this.bb)a();this.Ra()}va(){this.Ea.va()}ob(){this.Ya=!0}hb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}jb(a){return!this.hb(a)}async G(a){return"cordova"===this.g&&(a.startsWith("file:")||this.Aa&&this.jb(a))?(a.startsWith(this.s)&&(a=a.substr(this.s.length)),a=await this.la(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async zb(a){const c=a.filename;switch(a.as){case "text":return await this.fb(c);case "buffer":return await this.la(c);default:throw Error("unsupported type");}}Ja(a){const c=window.cordova.file.applicationDirectory+
"www/"+a.toLowerCase();return new Promise((d,e)=>{window.resolveLocalFileSystemURL(c,f=>{f.file(d,e)},e)})}async fb(a){a=await this.Ja(a);return await ea(a)}qa(){if(C.length&&!(8<=D)){D++;var a=C.shift();this.tb(a.filename,a.Xb,a.Qb)}}la(a){return new Promise((c,d)=>{C.push({filename:a,Xb:e=>{D--;this.qa();c(e)},Qb:e=>{D--;this.qa();d(e)}});this.qa()})}async tb(a,c,d){try{const e=await this.Ja(a),f=await fa(e);c(f)}catch(e){d(e)}}wa(a){if("windows-webview2"===this.g)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.g)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async sb(){const a=[];for(const [c,d]of Object.entries(this.A))a.push(this.rb(c,d));await Promise.all(a)}async rb(a,c){if("object"===typeof c)this.A[a]=new Blob([c.str],{type:c.type}),this.fa[a]=c.str;else{let d=await this.vb(c);d||(d=this.ub(c));this.A[a]=d}}async vb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}ub(a){a=this.Gb(a);return this.pb(a.data,a.Tb)}Gb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const e=c[2];d="base64"===c[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Tb:a,data:d}}pb(a,c){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,l;for(l=h=0;h<e;++h)g[h]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;for(d&=
3;d--;)f[l]=a.charCodeAt(l),++l;return new Blob([f],{type:c})}};"use strict";const H=self.B;function oa(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const pa=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),I={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},qa={dispatchUserScriptEvent:!0},J={dispatchRuntimeEvent:!0};
function ra(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>c(e);d.rel="stylesheet";d.href=b;document.head.appendChild(d)})}function sa(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>c(e);d.src=b})}async function L(b){b=URL.createObjectURL(b);try{return await sa(b)}finally{URL.revokeObjectURL(b)}}
function ta(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsText(b)})}
async function ua(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await L(b);var d=await ta(b);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await L(b)}e.setAttribute("width",a+"px");e.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await L(b)}
function M(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const va=new Set(["input","textarea","datalist","select"]),Aa=new Set(["canvas","body","html"]);function O(b){Aa.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function Ba(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await L(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,c,d,e){b=await ua(b,a,c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(b,0,0,a,c);return f};
let P=!1;document.addEventListener("pause",()=>P=!0);document.addEventListener("resume",()=>P=!1);async function Ca(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function Da(b){return await self.C3_GetSvgImageSize(b.blob)}
function Ea(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}function Fa(b){self.setTimeout(()=>{b.Wa=!0},1E3);"cordova"===b.i.g?(document.addEventListener("pause",()=>Q(b,!0)),document.addEventListener("resume",()=>Q(b,!1))):document.addEventListener("visibilitychange",()=>Q(b,document.hidden));return{isSuspended:!(!document.hidden&&!P)}}
function Ga(b){b.Ta||(b.Ta=!0,window.addEventListener("deviceorientation",a=>{b.l||k(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},I)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||k(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},I)}))}
function Ha(b){b.Sa||(b.Sa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var c=null,d=a.acceleration;d&&(c={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});k(b,"devicemotion",{acceleration:c,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},I)}}))}async function Ia(b){await ra(b.url)}
function Ja(b,a){b.Xa=a.message;-1===b.ya&&(b.ya=setTimeout(()=>{b.ya=-1;const c=document.getElementById("exportToVideoMessage");c&&(c.textContent=b.Xa)},250))}function R(b){if(!b.l){var a=H.O();a&&"any"!==b.Fa&&Ka(b);k(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.C(),innerHeight:b.v()})}}function S(b,a){console.warn("[Construct] Fullscreen request failed: ",a);k(b,"fullscreenerror",{isFullscreen:H.O(),innerWidth:b.C(),innerHeight:b.v()})}
function Q(b,a){a?b.i.qb():b.i.Ra();k(b,"visibilitychange",{hidden:a})}function La(b,a,c){"Backspace"===c.key&&O(c);if(!b.l){var d=pa.get(c.code)||c.code;m(b,a,{code:d,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},I)}}
function T(b,a,c,d){b.l||oa(c)||m(b,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY+b.m,pageX:c.pageX,pageY:c.pageY+b.m,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},d)}function U(b){window!==window.top&&window.focus();Ma(b.target)&&document.activeElement&&!Ma(document.activeElement)&&document.activeElement.blur()}
function V(b,a,c){if(!b.l){if(b.W&&"pointermove"!==a){var d=b.W;d.S||(-1!==d.K&&(self.clearTimeout(d.K),d.K=-1),d.da=Date.now())}d=0;"mouse"===c.pointerType&&(d=b.V);m(b,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.m,pageX:c.pageX,pageY:c.pageY+b.m,movementX:(c.movementX||0)+b.ga,movementY:(c.movementY||0)+b.ha,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||
0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},I);b.ga=0;b.ha=0;"mouse"===c.pointerType&&(d="mousemove","pointerdown"===a?d="mousedown":"pointerup"===a&&(d="mouseup"),T(b,d,c,qa),b.V=c.buttons)}}
function W(b,a,c){if(!b.l&&!oa(c)){var d=b.V;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");m(b,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.m,pageX:c.pageX,pageY:c.pageY+b.m,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},I);b.V=c.buttons;T(b,c.type,c,qa)}}
function X(b,a,c){if(!b.l)for(let d=0,e=c.changedTouches.length;d<e;++d){const f=c.changedTouches[d];m(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.m,pageX:f.pageX,pageY:f.pageY+b.m,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:c.timeStamp},
I)}}function Y(b,a,c){document.body.style.transform="";b.m=0;if(0<c){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-c)/2,a>c&&(a=c),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.m=a))}}function Na(b,a,c,d){const e=b.C(),f=b.v();b.J=-1;e!=a||f!=c?k(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:H.O()}):10>d&&Oa(b,e,f,d+1)}
function Oa(b,a,c,d){-1!==b.J&&clearTimeout(b.J);b.J=setTimeout(()=>Na(b,a,c,d),48)}
function Ka(b){b=b.Fa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Ma(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
H.M(class extends self.N{constructor(b){super(b,"runtime");this.Za=!0;this.J=-1;this.Fa="any";this.Sa=this.Ta=!1;this.D=null;this.l=!1;this.Xa="";this.ya=-1;this.H=this.W=null;this.ha=this.ga=0;this.Wa=!1;this.ab=b.C();this.ea=b.v();this.m=this.X=0;b.h("canvas","update-size",d=>{var e=this.i;e.Ya||(e=e.j,e.style.width=d.styleWidth+"px",e.style.height=d.styleHeight+"px",e.style.marginLeft=d.marginLeft+"px",e.style.marginTop=d.marginTop+"px",this.Za&&(e.style.display="",this.Za=!1))});b.h("runtime",
"invoke-download",d=>{const e=d.url;d=d.filename;const f=document.createElement("a"),g=document.body;f.textContent=d;f.href=e;f.download=d;g.appendChild(f);f.click();g.removeChild(f)});b.h("runtime","raster-svg-image",d=>Ca(d));b.h("runtime","get-svg-image-size",d=>Da(d));b.h("runtime","set-target-orientation",d=>{this.Fa=d.targetOrientation});b.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.h("runtime","post-to-debugger",d=>Ea(d));b.h("runtime","go-to-script",d=>
Ea(d));b.h("runtime","before-start-ticking",()=>Fa(this));b.h("runtime","debug-highlight",d=>{if(d.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var e=this.D;e.style.display="";e.style.left=d.left-1+"px";e.style.top=d.top-1+"px";e.style.width=d.width+2+"px";e.style.height=d.height+2+"px";e.textContent=d.name}else this.D&&(this.D.style.display="none")});b.h("runtime","enable-device-orientation",()=>Ga(this));b.h("runtime","enable-device-motion",
()=>Ha(this));b.h("runtime","add-stylesheet",d=>Ia(d));b.h("runtime","alert",d=>this.sa(d));b.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.h("runtime","set-exporting-to-video",d=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=d.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.ob()});b.h("runtime","export-to-video-progress",
d=>Ja(this,d));b.h("runtime","exported-to-video",d=>{window.Ob({type:"exported-video",blob:d.blob,time:d.time})});b.h("runtime","exported-to-image-sequence",d=>{window.Ob({type:"exported-image-sequence",blobArr:d.blobArr,time:d.time,gif:d.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const e=d.target;a.has(e.tagName.toLowerCase())||M(e)||d.preventDefault()});const c=b.j;window.addEventListener("selectstart",O);window.addEventListener("gesturehold",
O);c.addEventListener("selectstart",O);c.addEventListener("gesturehold",O);window.addEventListener("touchstart",O,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",O,{passive:!1}),c.addEventListener("pointerdown",O)):c.addEventListener("touchstart",O);this.V=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",Ba,{passive:!1});window.addEventListener("wheel",Ba,{passive:!1});window.addEventListener("resize",
()=>{a:{if(!this.l){var d=this.C();var e=this.v();if(this.i.La()){if(this.Wa){if(this.ab===d&&e<this.ea){this.X=this.ea-e;Y(this,this.ea,this.X);d=void 0;break a}0<this.X&&(this.X=0,Y(this,e,this.X))}this.ab=d;this.ea=e}k(this,"window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:H.O()});this.i.na()&&(-1!==this.J&&clearTimeout(this.J),Na(this,d,e,0))}d=void 0}return d});window.addEventListener("fullscreenchange",()=>R(this));window.addEventListener("webkitfullscreenchange",
()=>R(this));window.addEventListener("mozfullscreenchange",()=>R(this));window.addEventListener("fullscreenerror",d=>S(this,d));window.addEventListener("webkitfullscreenerror",d=>S(this,d));window.addEventListener("mozfullscreenerror",d=>S(this,d));if(b.na())if(window.visualViewport){let d=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>d&&(document.scrollingElement.scrollTop=0);d=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;
if(f){var d=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?e.has(f.type.toLowerCase()||"text"):M(f)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>{"entered-fullscreen"===d?(H.aa(!0),R(this)):"exited-fullscreen"===d?(H.aa(!1),R(this)):console.warn("Unknown wrapper message: ",d)};this.Ca=new Set;this.Lb=new WeakSet;this.Jb=!1}Ia(){window.addEventListener("focus",()=>{k(this,"window-focus",
null,J)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(c){a=!1}k(this,"window-blur",{parentHasFocus:a},J);this.V=0});window.addEventListener("focusin",a=>{a=a.target;(va.has(a.tagName.toLowerCase())||M(a))&&k(this,"keyboard-blur",null,J)});window.addEventListener("keydown",a=>La(this,"keydown",a));window.addEventListener("keyup",a=>La(this,"keyup",a));window.addEventListener("dblclick",a=>T(this,"dblclick",a,I));window.addEventListener("wheel",
a=>{this.l||k(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.m,pageX:a.pageX,pageY:a.pageY+this.m,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},I)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{U(a);V(this,"pointerdown",a)}),this.i.u&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.W=new self.nb(()=>{V(this,"pointermove",this.H);this.H=null}),this.W.Va=!0,window.addEventListener("pointerrawupdate",
a=>{this.H&&(this.ga+=this.H.movementX||0,this.ha+=this.H.movementY||0);this.H=a;a=this.W;if(-1===a.K){var c=Date.now(),d=c-a.da,e=a.Ib;d>=e&&a.Va?(a.da=c,a.S=!0,a.Ua(),a.S=!1):a.K=self.setTimeout(a.Nb,Math.max(e-d,4))}})):window.addEventListener("pointermove",a=>V(this,"pointermove",a)),window.addEventListener("pointerup",a=>V(this,"pointerup",a)),window.addEventListener("pointercancel",a=>V(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{U(a);W(this,"pointerdown",a)}),window.addEventListener("mousemove",
a=>W(this,"pointermove",a)),window.addEventListener("mouseup",a=>W(this,"pointerup",a)),window.addEventListener("touchstart",a=>{U(a);X(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>X(this,"pointermove",a)),window.addEventListener("touchend",a=>X(this,"pointerup",a)),window.addEventListener("touchcancel",a=>X(this,"pointercancel",a)));const b=()=>this.va();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",
b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.ib()&&!this.i.La()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Y(this,this.v(),navigator.virtualKeyboard.boundingRect.height)}))}C(){return this.i.C()}v(){return this.i.v()}va(){var b=[...this.Ca];this.Ca.clear();if(!this.Jb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Lb.has(a)||this.Ca.add(a)})}sa(b){alert(b.message)}});"use strict";
async function la(b){if(b.Hb)throw Error("already initialised");b.Hb=!0;var a=b.ia.ra("dispatchworker.js");b.xa=await b.ia.ma(a,b.P,{name:"DispatchWorker"});a=new MessageChannel;b.za=a.port1;b.xa.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.Da=await na(b)}function ma(b){return[b.za,b.Da]}
async function na(b){const a=b.$a.length;var c=b.ia.ra("jobworker.js");c=await b.ia.ma(c,b.P,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;b.xa.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);c.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);b.$a.push(c);return e.port1}
self.lb=class{constructor(b){this.ia=b;this.P=b.s;this.P="preview"===b.g?this.P+"workers/":this.P+b.ja;this.Kb=Math.min(navigator.hardwareConcurrency||2,16);this.xa=null;this.$a=[];this.Da=this.za=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.B({Yb:!1,Zb:"workermain.js",L:["scripts/c3runtime.js"],ka:[],Ga:"",Vb:"scripts/",Ha:[],eb:"html5"}));"use strict";
async function Pa(b,a){a=a.type;let c=!0;0===a?c=await Qa():1===a&&(c=await Ra());k(b,"permission-result",{type:a,result:c})}async function Qa(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}
async function Ra(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}self.B.M(class extends self.N{constructor(b){super(b,"touch");n(this,"request-permission",a=>Pa(this,a))}});"use strict";
function Sa(b){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(a=>k(b,"sw-message",a.data))}
function Ta(b){b=b.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}
self.B.M(class extends self.N{constructor(b){super(b,"browser");this.g="";p(this,[["get-initial-state",a=>this.ta(a)],["ready-for-sw-messages",()=>Sa(this)],["alert",a=>this.sa(a)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",a=>this.ua(a)],["vibrate",a=>{navigator.vibrate&&navigator.vibrate(a.pattern)}],["lock-orientation",a=>Ta(a)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(a){}}],["navigate",a=>{var c=a.type;if("back"===c)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===c)window.history.forward();else if("reload"===c)location.reload();else if("url"===
c){c=a.url;const d=a.target;a=a.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):"preview"===a||"windows-webview2"===a?window.open(c,"_blank"):this.cc||(2===d?window.top.location=c:1===d?window.parent.location=c:window.location=c)}else"new-window"===c&&(c=a.url,a=a.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):window.open(c,a))}],["request-fullscreen",a=>{if("windows-webview2"===this.g||"macos-wkwebview"===this.g)self.B.aa(!0),
this.i.wa({type:"set-fullscreen",fullscreen:!0});else{const c={navigationUI:"auto"};a=a.navUI;1===a?c.navigationUI="hide":2===a&&(c.navigationUI="show");a=document.documentElement;a.requestFullscreen?a.requestFullscreen(c):a.mozRequestFullScreen?a.mozRequestFullScreen(c):a.msRequestFullscreen?a.msRequestFullscreen(c):a.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.g||"macos-wkwebview"===this.g?(self.B.aa(!1),this.i.wa({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",a=>{location.hash=a.hash}]]);window.addEventListener("online",()=>{k(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{k(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{k(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{k(this,"backbutton")})}ta(b){this.g=b.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}sa(b){alert(b.message)}ua(b){b=b.isFocus;if("nwjs"===this.g){const a="nwjs"===this.g?nw.Window.get():null;b?a.focus():a.blur()}else b?window.focus():window.blur()}});"use strict";
async function Ua(b){if(!b.F)try{b.F=await navigator.wakeLock.request("screen"),b.F.addEventListener("release",()=>{console.log("[Construct] Screen wake lock released");b.F=null;k(b,"wake-lock-released")}),console.log("[Construct] Screen wake lock acquired"),k(b,"wake-lock-acquired")}catch(a){console.warn("[Construct] Failed to acquire screen wake lock: ",a),k(b,"wake-lock-error")}}
function Va(){var b=document.body;const a=b.style;a.setProperty("--temp-sai-top","env(safe-area-inset-top)");a.setProperty("--temp-sai-right","env(safe-area-inset-right)");a.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");a.setProperty("--temp-sai-left","env(safe-area-inset-left)");b=getComputedStyle(b);b=[b.getPropertyValue("--temp-sai-top"),b.getPropertyValue("--temp-sai-right"),b.getPropertyValue("--temp-sai-bottom"),b.getPropertyValue("--temp-sai-left")].map(c=>{c=parseInt(c,10);
return isFinite(c)?c:0});a.removeProperty("--temp-sai-top");a.removeProperty("--temp-sai-right");a.removeProperty("--temp-sai-bottom");a.removeProperty("--temp-sai-left");return b}
self.B.M(class extends self.N{constructor(b){super(b,"platform-info");p(this,[["get-initial-state",()=>this.ta()],["request-wake-lock",()=>Ua(this)],["release-wake-lock",()=>{this.F&&(this.F.release(),this.F=null)}]]);window.addEventListener("resize",()=>{k(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:Va()})});this.F=null}ta(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:Va(),supportsWakeLock:!!navigator.wakeLock}}});"use strict";function Z(b){b.stopPropagation()}function Wa(b){13!==b.which&&27!==b.which&&b.stopPropagation()}
self.B.M(class extends self.gb{constructor(b){super(b);r(this,"scroll-to-bottom",a=>{a.scrollTop=a.scrollHeight})}Ka(b,a){let c;const d=a.type;"textarea"===d?(c=document.createElement("textarea"),c.style.resize="none"):(c=document.createElement("input"),c.type=d);c.style.position="absolute";c.autocomplete="off";c.addEventListener("pointerdown",Z);c.addEventListener("pointermove",Z);c.addEventListener("pointerrawupdate",Z);c.addEventListener("pointerup",Z);c.addEventListener("mousedown",Z);c.addEventListener("mouseup",
Z);c.addEventListener("keydown",Wa);c.addEventListener("keyup",Wa);c.addEventListener("click",e=>{e.stopPropagation();u(this,"click",b)});c.addEventListener("dblclick",e=>{e.stopPropagation();u(this,"dblclick",b)});c.addEventListener("input",()=>q(this,"change",b,{text:c.value}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.pa(c,a);return c}pa(b,a){b.value=a.text;b.placeholder=a.placeholder;b.title=a.title;b.disabled=!a.isEnabled;b.readOnly=a.isReadOnly;b.spellcheck=a.spellCheck;
a=a.maxLength;0>a?b.removeAttribute("maxlength"):b.setAttribute("maxlength",a)}});