'use strict';function p(k,d,e,l){k.h.Z(k.B,d,e,l,void 0)}function w(k,d,e,l){k.h.j?p(k,d,e,l):k.h.ob()._OnMessageFromDOM({type:"event",component:k.B,handler:d,dispatchOpts:l||null,data:e,responseId:null})}function B(k,d,e){k.h.a(k.B,d,e)}function F(k,d){for(const [e,l]of d)B(k,e,l)}window.K=class{constructor(k,d){this.h=k;this.B=d}va(){}};
window.cb=class{constructor(k,d){this.Na=k;this.Ub=d;this.s=-1;this.U=-Infinity;this.Zb=()=>{this.s=-1;this.U=Date.now();this.C=!0;this.Na();this.C=!1};this.Oa=this.C=!1}};"use strict";function G(k,d){const e=d.elementId,l=k.ya(e,d);k.g.set(e,l);d.isVisible||(l.style.display="none");l.addEventListener("focus",()=>{H(k,"elem-focused",e)});l.addEventListener("blur",()=>{H(k,"elem-blurred",e)});k.S&&document.body.appendChild(l)}
function I(k,d){B(k,"get-element",e=>{const l=k.g.get(e.elementId);return d(l,e)})}function H(k,d,e,l){l||(l={});l.elementId=e;p(k,d,l)}
window.Xa=class extends self.K{constructor(k,d){super(k,d);this.g=new Map;this.S=!0;F(this,[["create",e=>G(this,e)],["destroy",e=>{{e=e.elementId;const l=this.g.get(e);this.S&&l.parentElement.removeChild(l);this.g.delete(e)}}],["set-visible",e=>{this.S&&(this.g.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.S){var l=this.g.get(e.elementId);l.style.left=e.left+"px";l.style.top=e.top+"px";l.style.width=e.width+"px";l.style.height=e.height+"px";e=e.fontSize;null!==
e&&(l.style.fontSize=e+"em")}}],["update-state",e=>{{const l=this.g.get(e.elementId);this.$(l,e)}}],["focus",e=>this.ia(e)],["set-css-style",e=>{this.g.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.g.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.g.get(e.elementId).removeAttribute(e.name)}]]);I(this,e=>e)}ya(){throw Error("required override");}$(){throw Error("required override");}ia(k){var d=this.g.get(k.elementId);k.focus?d.focus():d.blur()}};"use strict";
{const k=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function d(q){if(q.bc){const c=document.createElement("script");c.async=!1;c.textContent=q.ec;document.head.appendChild(c)}else return new Promise((c,g)=>{const a=document.createElement("script");a.onload=c;a.onerror=g;a.async=!1;a.src=q;document.head.appendChild(a)})}let e=new Audio;const l={"audio/webm; codecs=opus":!!e.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!e.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!e.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!e.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!e.canPlayType("audio/mp4"),"audio/mpeg":!!e.canPlayType("audio/mpeg")};e=null;async function r(q){q=await C(q);return(new TextDecoder("utf-8")).decode(q)}function C(q){return new Promise((c,g)=>{const a=new FileReader;a.onload=b=>c(b.target.result);a.onerror=b=>g(b);a.readAsArrayBuffer(q)})}const y=[];let x=0;window.RealFile=window.File;const u=
[],z=new Map,A=new Map;let D=0;const E=[];self.qc=function(q){if("function"!==typeof q)throw Error("runOnStartup called without a function");E.push(q)};const t=new Set(["cordova","playable-ad","instant-games"]);window.v=class q{constructor(c){this.j=c.hc;this.F=null;this.c="";this.sa=c.dc;this.I={};this.oa=this.Ta=null;this.T=[];this.D=this.f=this.ra=null;this.m=-1;this.Yb=()=>this.Hb();this.Ra=[];this.b=c.Ua;!this.j||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation||(this.j=!1);t.has(this.b)&&
this.j&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.j=!1);this.Sa=!1;this.V=this.i=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",g=>this.ub(g));this.a("runtime",
"create-job-worker",()=>this.vb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ea(c)):this.Ea(c)}za(){return k&&"cordova"===this.b}L(){return k&&t.has(this.b)||navigator.standalone}async Ea(c){if("playable-ad"===this.b){this.i=self.c3_base64files;this.V={};await this.jb();for(let a=0,b=c.u.length;a<b;++a){var g=c.u[a].toLowerCase();this.V.hasOwnProperty(g)?c.u[a]={bc:!0,ec:this.V[g]}:this.i.hasOwnProperty(g)&&(c.u[a]=URL.createObjectURL(this.i[g]))}}c.$b?this.c=c.$b:(g=location.origin,
this.c=("null"===g?"file:///":g)+location.pathname,g=this.c.lastIndexOf("/"),-1!==g&&(this.c=this.c.substr(0,g+1)));if(c.jc)for(const [a,b]of Object.entries(c.jc))this.I[a]=URL.createObjectURL(b);g=new MessageChannel;this.F=g.port1;this.F.onmessage=a=>this._OnMessageFromRuntime(a.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(a=>this.Eb(a));this.D=new self.ab(this);await this.D.$a();this.Aa();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&
window.AndroidFullScreen.immersiveMode();await this.Rb();this.j?await this.qb(c,g.port2):await this.pb(c,g.port2)}ba(c){return this.I.hasOwnProperty(c)?this.I[c]:c.endsWith("/workermain.js")&&this.I.hasOwnProperty("workermain.js")?this.I["workermain.js"]:"playable-ad"===this.b&&this.i.hasOwnProperty(c.toLowerCase())?URL.createObjectURL(this.i[c.toLowerCase()]):c}async X(c,g,a){if(c.startsWith("blob:"))return new Worker(c,a);if(this.za()&&"file:"===location.protocol)return c=await this.xa(this.sa+
c),new Worker(URL.createObjectURL(new Blob([c],{type:"application/javascript"})),a);c=new URL(c,g);if(location.origin!==c.origin){c=await fetch(c);if(!c.ok)throw Error("failed to fetch worker script");c=await c.blob();return new Worker(URL.createObjectURL(c),a)}return new Worker(c,a)}Aa(){if(this.L()){const c=document.documentElement.style,g=document.body.style,a=window.innerWidth<window.innerHeight,b=a?window.screen.width:window.screen.height;g.height=c.height=(a?window.screen.height:window.screen.width)+
"px";g.width=c.width=b+"px"}}Da(c){return{baseUrl:this.c,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:q.Y(),projectData:c.pc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:c.Ua,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.oc,jobScheduler:this.D.Ya(),supportedAudioFormats:l,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.sa+
"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.sa+"opus.wasm.wasm",isiOSCordova:this.za(),isiOSWebView:this.L(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(c,g){var a=this.ba(c.ic);this.Ta=await this.X(a,this.c,{name:"Runtime"});this.f=document.createElement("canvas");this.f.style.display="none";a=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Ta.postMessage(Object.assign(this.Da(c),{type:"init-runtime",
isInWorker:!0,messagePort:g,canvas:a,workerDependencyScripts:c.ua||[],engineScripts:c.u,projectScripts:window.nc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[g,a,...this.D.Za()]);this.T=u.map(b=>new b(this));this.Ca();self.c3_callFunction=(b,f)=>this.ra.rb(b,f);"preview"===this.b&&(self.goToLastErrorScript=()=>this.Z("runtime","go-to-last-error-script"))}async pb(c,g){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);window.c3canvas=this.f;
this.T=u.map(b=>new b(this));this.Ca();const a=c.u.map(b=>"string"===typeof b?(new URL(b,this.c)).toString():b);Array.isArray(c.ua)&&a.unshift(...c.ua);await Promise.all(a.map(b=>d(b)));if(c.Va&&0<c.Va.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(c.Va.map(f=>d(f[1]))),Object.values(b).some(f=>!f)){self.setTimeout(()=>this.Ja(b),100);return}}catch(f){console.error("[Preview] Error loading project scripts: ",f);self.setTimeout(()=>this.Ja(b),100);return}}"preview"===this.b&&
"object"!==typeof self.kc.lc?(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(c=Object.assign(this.Da(c),{isInWorker:!1,messagePort:g,canvas:this.f,runOnStartupFunctions:E}),this.oa=self.C3_CreateRuntime(c),await self.C3_InitRuntime(this.oa,c))}Ja(c){c=`Failed to load project script '${Object.entries(c).filter(g=>!g[1]).map(g=>
g[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+c);alert(c)}async vb(){const c=await this.D.Ba();return{outputPort:c,transferables:[c]}}ob(){if(this.j)throw Error("not available in worker mode");return this.oa}Z(c,g,a,b,f){this.F.postMessage({type:"event",component:c,handler:g,dispatchOpts:b||null,data:a,responseId:null},this.Sa?void 0:f)}bb(c,g){const a=D++,b=new Promise((f,h)=>{A.set(a,{resolve:f,reject:h})});this.F.postMessage({type:"event",component:c,
handler:"js-invoke-function",dispatchOpts:null,data:g,responseId:a},void 0);return b}["_OnMessageFromRuntime"](c){const g=c.type;if("event"===g)return this.Ab(c);if("result"===g)this.Kb(c);else if("runtime-ready"===g)this.Lb();else if("alert"===g)alert(c.message);else throw Error(`unknown message '${g}'`);}Ab(c){const g=c.component,a=c.handler,b=c.data,f=c.responseId;if(c=z.get(g))if(c=c.get(a)){var h=null;try{h=c(b)}catch(m){console.error(`Exception in '${g}' handler '${a}':`,m);null!==f&&this.P(f,
!1,""+m);return}if(null===f)return h;h&&h.then?h.then(m=>this.P(f,!0,m)).catch(m=>{console.error(`Rejection from '${g}' handler '${a}':`,m);this.P(f,!1,""+m)}):this.P(f,!0,h)}else console.warn(`[DOM] No handler '${a}' for component '${g}'`);else console.warn(`[DOM] No event handlers for component '${g}'`)}P(c,g,a){let b;a&&a.transferables&&(b=a.transferables);this.F.postMessage({type:"result",responseId:c,isOk:g,result:a},b)}Kb(c){const g=c.responseId,a=c.isOk;c=c.result;const b=A.get(g);a?b.resolve(c):
b.reject(c);A.delete(g)}a(c,g,a){let b=z.get(c);b||(b=new Map,z.set(c,b));if(b.has(g))throw Error(`[DOM] Component '${c}' already has handler '${g}'`);b.set(g,a)}static J(c){if(u.includes(c))throw Error("DOM handler already added");u.push(c)}Ca(){for(const c of this.T)if("runtime"===c.B){this.ra=c;return}throw Error("cannot find runtime DOM handler");}Eb(c){this.Z("debugger","message",c)}Lb(){for(const c of this.T)c.va()}static Y(){return!!(document.fullscreenElement||document.webkitFullscreenElement||
document.mozFullScreenElement)}Ka(){-1===this.m&&this.Ra.length&&(this.m=requestAnimationFrame(this.Yb))}hb(){-1!==this.m&&(cancelAnimationFrame(this.m),this.m=-1)}Hb(){this.m=-1;for(const c of this.Ra)c();this.Ka()}ka(){this.ra.ka()}async ub(c){const g=c.filename;switch(c.as){case "text":return await this.Wa(g);case "buffer":return await this.xa(g);default:throw Error("unsupported type");}}wa(c){const g=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((a,b)=>{window.resolveLocalFileSystemURL(g,
f=>{f.file(a,b)},b)})}async Wa(c){c=await this.wa(c);return await r(c)}aa(){if(y.length&&!(8<=x)){x++;var c=y.shift();this.kb(c.filename,c.fc,c.ac)}}xa(c){return new Promise((g,a)=>{y.push({filename:c,fc:b=>{x--;this.aa();g(b)},ac:b=>{x--;this.aa();a(b)}});this.aa()})}async kb(c,g,a){try{const b=await this.wa(c),f=await C(b);g(f)}catch(b){a(b)}}async jb(){const c=[];for(const [g,a]of Object.entries(this.i))c.push(this.ib(g,a));await Promise.all(c)}async ib(c,g){if("object"===typeof g)this.i[c]=new Blob([g.str],
{type:g.type}),this.V[c]=g.str;else{let a=await this.nb(g);a||(a=this.lb(g));this.i[c]=a}}async nb(c){try{return await (await fetch(c)).blob()}catch(g){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",g),null}}lb(c){c=this.Pb(c);return this.gb(c.data,c.cc)}Pb(c){var g=c.indexOf(",");if(0>g)throw new URIError("expected comma in data: uri");
var a=c.substring(g+1);g=c.substring(5,g).split(";");c=g[0]||"";const b=g[2];a="base64"===g[1]||"base64"===b?atob(a):decodeURIComponent(a);return{cc:c,data:a}}gb(c,g){var a=c.length;let b=a>>2,f=new Uint8Array(a),h=new Uint32Array(f.buffer,0,b),m,n;for(n=m=0;m<b;++m)h[m]=c.charCodeAt(n++)|c.charCodeAt(n++)<<8|c.charCodeAt(n++)<<16|c.charCodeAt(n++)<<24;for(a&=3;a--;)f[n]=c.charCodeAt(n),++n;return new Blob([f],{type:g})}Rb(){let c=null;const g=new Promise(f=>c=f),a=new ArrayBuffer(1),b=new MessageChannel;
b.port2.onmessage=f=>{f.data&&f.data.arrayBuffer||(this.Sa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));c()};b.port1.postMessage({arrayBuffer:a},[a]);return g}}}"use strict";
{const k=self.v;function d(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents}const e=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},r={dispatchUserScriptEvent:!0},C={dispatchRuntimeEvent:!0};function y(a){return new Promise((b,f)=>{const h=document.createElement("link");h.onload=()=>b(h);h.onerror=m=>f(m);h.rel=
"stylesheet";h.href=a;document.head.appendChild(h)})}function x(a){return new Promise((b,f)=>{const h=new Image;h.onload=()=>b(h);h.onerror=m=>f(m);h.src=a})}async function u(a){a=URL.createObjectURL(a);try{return await x(a)}finally{URL.revokeObjectURL(a)}}function z(a){return new Promise((b,f)=>{let h=new FileReader;h.onload=m=>b(m.target.result);h.onerror=m=>f(m);h.readAsText(a)})}async function A(a,b,f){if(!/firefox/i.test(navigator.userAgent))return await u(a);var h=await z(a);h=(new DOMParser).parseFromString(h,
"image/svg+xml");const m=h.documentElement;if(m.hasAttribute("width")&&m.hasAttribute("height")){const n=m.getAttribute("width"),J=m.getAttribute("height");if(!n.includes("%")&&!J.includes("%"))return await u(a)}m.setAttribute("width",b+"px");m.setAttribute("height",f+"px");h=(new XMLSerializer).serializeToString(h);a=new Blob([h],{type:"image/svg+xml"});return await u(a)}function D(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;a=a.parentNode}while(a);return!1}const E=new Set(["canvas",
"body","html"]);function t(a){E.has(a.target.tagName.toLowerCase())&&a.preventDefault()}function q(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()}self.C3_GetSvgImageSize=async function(a){a=await u(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const b=a.getBoundingClientRect();document.body.removeChild(a);return[b.width,b.height]}};self.C3_RasterSvgImageBlob=async function(a,
b,f,h,m){a=await A(a,b,f);const n=document.createElement("canvas");n.width=h;n.height=m;n.getContext("2d").drawImage(a,0,0,b,f);return n};let c=!1;document.addEventListener("pause",()=>c=!0);document.addEventListener("resume",()=>c=!1);function g(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}}k.J(class extends self.K{constructor(a){super(a,"runtime");this.Pa=!0;this.o=-1;this.ta="any";this.La=this.Ma=!1;this.na=this.H=this.l=null;a.a("canvas","update-size",h=>this.Nb(h));
a.a("runtime","invoke-download",h=>this.Db(h));a.a("runtime","raster-svg-image",h=>this.Ib(h));a.a("runtime","get-svg-image-size",h=>this.Bb(h));a.a("runtime","set-target-orientation",h=>this.Mb(h));a.a("runtime","register-sw",()=>this.Jb());a.a("runtime","post-to-debugger",h=>this.Ha(h));a.a("runtime","go-to-script",h=>this.Ha(h));a.a("runtime","before-start-ticking",()=>this.tb());a.a("runtime","debug-highlight",h=>this.wb(h));a.a("runtime","enable-device-orientation",()=>this.fb());a.a("runtime",
"enable-device-motion",()=>this.eb());a.a("runtime","add-stylesheet",h=>this.sb(h));a.a("runtime","alert",h=>this.da(h));a.a("runtime","hide-cordova-splash",()=>this.Cb());const b=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",h=>{const m=h.target;b.has(m.tagName.toLowerCase())||D(m)||h.preventDefault()});const f=a.f;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);f.addEventListener("selectstart",t);f.addEventListener("gesturehold",
t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),f.addEventListener("pointerdown",t)):f.addEventListener("touchstart",t);this.G=0;window.addEventListener("mousedown",h=>{1===h.button&&h.preventDefault()});window.addEventListener("mousewheel",q,{passive:!1});window.addEventListener("wheel",q,{passive:!1});window.addEventListener("resize",()=>this.Ob());a.L()&&window.addEventListener("focusout",()=>{{const n=
document.activeElement;if(n){var h=n.tagName.toLowerCase();var m=new Set("email number password search tel text url".split(" "));h="textarea"===h?!0:"input"===h?m.has(n.type.toLowerCase()||"text"):D(n)}else h=!1}h||(document.scrollingElement.scrollTop=0)});this.pa=new Set;this.Xb=new WeakSet;this.Vb=!1}tb(){"cordova"===this.h.b?(document.addEventListener("pause",()=>this.ja(!0)),document.addEventListener("resume",()=>this.ja(!1))):document.addEventListener("visibilitychange",()=>this.ja(document.hidden));
return{isSuspended:!(!document.hidden&&!c)}}va(){window.addEventListener("focus",()=>this.R("window-focus"));window.addEventListener("blur",()=>{this.R("window-blur",{parentHasFocus:g()});this.G=0});window.addEventListener("fullscreenchange",()=>this.ea());window.addEventListener("webkitfullscreenchange",()=>this.ea());window.addEventListener("mozfullscreenchange",()=>this.ea());window.addEventListener("fullscreenerror",b=>this.fa(b));window.addEventListener("webkitfullscreenerror",b=>this.fa(b));
window.addEventListener("mozfullscreenerror",b=>this.fa(b));window.addEventListener("keydown",b=>this.Ga("keydown",b));window.addEventListener("keyup",b=>this.Ga("keyup",b));window.addEventListener("dblclick",b=>this.ga("dblclick",b,l));window.addEventListener("wheel",b=>this.Fb(b));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",b=>{this.ca(b);this.A("pointerdown",b)}),this.h.j&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.H=new self.cb(()=>this.mb(),
5),this.H.Oa=!0,window.addEventListener("pointerrawupdate",b=>this.Gb(b))):window.addEventListener("pointermove",b=>this.A("pointermove",b)),window.addEventListener("pointerup",b=>this.A("pointerup",b)),window.addEventListener("pointercancel",b=>this.A("pointercancel",b))):(window.addEventListener("mousedown",b=>{this.ca(b);this.ha("pointerdown",b)}),window.addEventListener("mousemove",b=>this.ha("pointermove",b)),window.addEventListener("mouseup",b=>this.ha("pointerup",b)),window.addEventListener("touchstart",
b=>{this.ca(b);this.O("pointerdown",b)}),window.addEventListener("touchmove",b=>this.O("pointermove",b)),window.addEventListener("touchend",b=>this.O("pointerup",b)),window.addEventListener("touchcancel",b=>this.O("pointercancel",b)));const a=()=>this.ka();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}R(a,b){p(this,a,b||null,C)}N(){return Math.max(window.innerWidth,
1)}M(){return Math.max(window.innerHeight,1)}Ob(){const a=this.N(),b=this.M();this.R("window-resize",{innerWidth:a,innerHeight:b,devicePixelRatio:window.devicePixelRatio});this.h.L()&&(-1!==this.o&&clearTimeout(this.o),this.Ia(a,b,0))}Qb(a,b,f){-1!==this.o&&clearTimeout(this.o);this.o=setTimeout(()=>this.Ia(a,b,f),48)}Ia(a,b,f){const h=this.N(),m=this.M();this.o=-1;h!=a||m!=b?this.R("window-resize",{innerWidth:h,innerHeight:m,devicePixelRatio:window.devicePixelRatio}):10>f&&this.Qb(h,m,f+1)}Mb(a){this.ta=
a.targetOrientation}Sb(){const a=this.ta;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(a):screen.webkitLockOrientation?b=screen.webkitLockOrientation(a):screen.mozLockOrientation?b=screen.mozLockOrientation(a):screen.msLockOrientation&&(b=screen.msLockOrientation(a));b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",
b)}}ea(){const a=k.Y();a&&"any"!==this.ta&&this.Sb();p(this,"fullscreenchange",{isFullscreen:a,innerWidth:this.N(),innerHeight:this.M()})}fa(a){console.warn("[Construct 3] Fullscreen request failed: ",a);p(this,"fullscreenerror",{isFullscreen:k.Y(),innerWidth:this.N(),innerHeight:this.M()})}ja(a){a?this.h.hb():this.h.Ka();p(this,"visibilitychange",{hidden:a})}Ga(a,b){"Backspace"===b.key&&t(b);const f=e.get(b.code)||b.code;w(this,a,{code:f,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,
metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},l)}Fb(a){p(this,"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},l)}ga(a,b,f){d(b)||w(this,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},f)}ha(a,b){if(!d(b)){var f=this.G;"pointerdown"===a&&0!==f?a="pointermove":"pointerup"===a&&0!==b.buttons&&(a=
"pointermove");w(this,a,{pointerId:1,pointerType:"mouse",button:b.button,buttons:b.buttons,lastButtons:f,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:b.timeStamp},l);this.G=b.buttons;this.ga(b.type,b,r)}}A(a,b){if(this.H&&"pointermove"!==a){var f=this.H;f.C||(-1!==f.s&&(self.clearTimeout(f.s),f.s=-1),f.U=Date.now())}f=0;"mouse"===b.pointerType&&(f=this.G);w(this,a,{pointerId:b.pointerId,pointerType:b.pointerType,
button:b.button,buttons:b.buttons,lastButtons:f,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},l);"mouse"===b.pointerType&&(f="mousemove","pointerdown"===a?f="mousedown":"pointerup"===a&&(f="pointerup"),this.ga(f,b,r),this.G=b.buttons)}Gb(a){this.na=a;a=this.H;if(-1===a.s){var b=Date.now(),f=b-a.U,h=a.Ub;f>=
h&&a.Oa?(a.U=b,a.C=!0,a.Na(),a.C=!1):a.s=self.setTimeout(a.Zb,Math.max(h-f,4))}}mb(){this.A("pointermove",this.na);this.na=null}O(a,b){for(let f=0,h=b.changedTouches.length;f<h;++f){const m=b.changedTouches[f];w(this,a,{pointerId:m.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:m.clientX,clientY:m.clientY,pageX:m.pageX,pageY:m.pageY,width:2*(m.radiusX||m.webkitRadiusX||0),height:2*(m.radiusY||m.webkitRadiusY||0),pressure:m.force||m.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:m.rotationAngle||0,timeStamp:b.timeStamp},l)}}ca(a){window!==window.top&&window.focus();this.Fa(a.target)&&document.activeElement&&!this.Fa(document.activeElement)&&document.activeElement.blur()}Fa(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}fb(){this.Ma||(this.Ma=!0,window.addEventListener("deviceorientation",a=>this.yb(a)),window.addEventListener("deviceorientationabsolute",a=>this.zb(a)))}eb(){this.La||(this.La=!0,window.addEventListener("devicemotion",
a=>this.xb(a)))}yb(a){p(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},l)}zb(a){p(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},l)}xb(a){let b=null;var f=a.acceleration;f&&(b={x:f.x||0,y:f.y||0,z:f.z||0});f=null;var h=a.accelerationIncludingGravity;h&&(f={x:h.x||
0,y:h.y||0,z:h.z||0});h=null;const m=a.rotationRate;m&&(h={alpha:m.alpha||0,beta:m.beta||0,gamma:m.gamma||0});p(this,"devicemotion",{acceleration:b,accelerationIncludingGravity:f,rotationRate:h,interval:a.interval,timeStamp:a.timeStamp},l)}Nb(a){const b=this.h,f=b.f;f.style.width=a.styleWidth+"px";f.style.height=a.styleHeight+"px";f.style.marginLeft=a.marginLeft+"px";f.style.marginTop=a.marginTop+"px";b.Aa();this.Pa&&(f.style.display="",this.Pa=!1)}Db(a){const b=a.url;a=a.filename;const f=document.createElement("a"),
h=document.body;f.textContent=a;f.href=b;f.download=a;h.appendChild(f);f.click();h.removeChild(f)}async Ib(a){var b=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);b=b?await createImageBitmap(a,b):await createImageBitmap(a);return{imageBitmap:b,transferables:[b]}}async Bb(a){return await self.C3_GetSvgImageSize(a.blob)}async sb(a){await y(a.url)}ka(){var a=[...this.pa];this.pa.clear();if(!this.Vb)for(const b of a)(a=b.play())&&
a.catch(()=>{this.Xb.has(b)||this.pa.add(b)})}Cb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}wb(a){if(a.show){this.l||(this.l=document.createElement("div"),this.l.id="inspectOutline",document.body.appendChild(this.l));var b=this.l;b.style.display="";b.style.left=a.left-1+"px";b.style.top=a.top-1+"px";b.style.width=a.width+2+"px";b.style.height=a.height+2+"px";b.textContent=a.name}else this.l&&(this.l.style.display="none")}Jb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ha(a){window.c3_postToMessagePort&&
(a.from="runtime",window.c3_postToMessagePort(a))}rb(a,b){return this.h.bb(this.B,{name:a,params:b})}da(a){alert(a.message)}})}"use strict";
{const k=document.currentScript.src;self.ab=class{constructor(d){this.W=d;this.c=k?k.substr(0,k.lastIndexOf("/")+1):d.c;this.Wb=Math.min(navigator.hardwareConcurrency||2,16);this.la=null;this.Qa=[];this.qa=this.ma=null}async $a(){if(this.Tb)throw Error("already initialised");this.Tb=!0;var d=this.W.ba("dispatchworker.js");this.la=await this.W.X(d,this.c,{name:"DispatchWorker"});d=new MessageChannel;this.ma=d.port1;this.la.postMessage({type:"_init","in-port":d.port2},[d.port2]);this.qa=await this.Ba()}async Ba(){const d=
this.Qa.length;var e=this.W.ba("jobworker.js");e=await this.W.X(e,this.c,{name:"JobWorker"+d});const l=new MessageChannel,r=new MessageChannel;this.la.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);e.postMessage({type:"init",number:d,"dispatch-port":l.port2,"output-port":r.port2},[l.port2,r.port2]);this.Qa.push(e);return r.port1}Ya(){return{inputPort:this.ma,outputPort:this.qa,maxNumWorkers:this.Wb}}Za(){return[this.ma,this.qa]}}}"use strict";
window.C3_IsSupported&&(window.c3_runtimeInterface=new self.v({hc:!0,ic:"workermain.js",u:["scripts/c3runtime.js"],dc:"scripts/",ua:[],Ua:"html5"}));"use strict";
{function k(d){d.stopPropagation()}self.v.J(class extends self.Xa{constructor(d){super(d,"sliderbar")}ya(d,e){const l=document.createElement("input");l.type="range";l.style.position="absolute";l.style.userSelect="none";l.style.webkitUserSelect="none";l.addEventListener("touchstart",k);l.addEventListener("touchmove",k);l.addEventListener("touchend",k);l.addEventListener("mousedown",k);l.addEventListener("mouseup",k);l.addEventListener("keydown",k);l.addEventListener("keyup",k);l.addEventListener("click",
()=>{var r;r||(r={});r.elementId=d;w(this,"click",r)});l.addEventListener("change",()=>H(this,"change",d,{value:parseFloat(l.value)}));l.addEventListener("input",()=>H(this,"input",d,{value:parseFloat(l.value)}));e.id&&(l.id=e.id);this.$(l,e);return l}$(d,e){d.max=e.max;d.min=e.min;d.step=e.step;d.value=e.value;d.disabled=!e.isEnabled;d.title=e.title}})}"use strict";async function L(k,d){d=d.type;let e=!0;0===d?e=await M():1===d&&(e=await N());p(k,"permission-result",{type:d,result:e})}
async function M(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(k){return console.warn("[Touch] Failed to request orientation permission: ",k),!1}}
async function N(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(k){return console.warn("[Touch] Failed to request motion permission: ",k),!1}}self.v.J(class extends self.K{constructor(k){super(k,"touch");B(this,"request-permission",d=>L(this,d))}});"use strict";
function O(k){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(d=>p(k,"sw-message",d.data))}
function P(k){k=k.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(k).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(k):screen.webkitLockOrientation?d=screen.webkitLockOrientation(k):screen.mozLockOrientation?d=screen.mozLockOrientation(k):screen.msLockOrientation&&(d=screen.msLockOrientation(k));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",
d)}}
self.v.J(class extends self.K{constructor(k){super(k,"browser");this.b="";F(this,[["get-initial-state",d=>{this.b=d.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>O(this)],
["alert",d=>this.da(d)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",d=>this.ia(d)],["vibrate",d=>{navigator.vibrate&&navigator.vibrate(d.pattern)}],["lock-orientation",d=>P(d)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(d){}}],["navigate",d=>{var e=d.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===e)window.forward();else if("home"===e)window.home();else if("reload"===e)location.reload();else if("url"===e){e=d.url;var l=d.target;d=d.exportType;"windows-uwp"===d&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===d?window.open(e,"_blank"):this.mc||(2===l?window.top.location=e:1===l?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=d.url,l=d.tag,"windows-uwp"===d.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,l))}],["request-fullscreen",
d=>{{const e={navigationUI:"auto"};d=d.navUI;1===d?e.navigationUI="hide":2===d&&(e.navigationUI="show");d=document.documentElement;d.requestFullscreen?d.requestFullscreen(e):d.mozRequestFullScreen?d.mozRequestFullScreen(e):d.msRequestFullscreen?d.msRequestFullscreen(e):d.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):d.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",d=>{location.hash=d.hash}]]);window.addEventListener("online",()=>{p(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{p(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{p(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{p(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",d=>{d.handled=!0;p(this,"backbutton")})}da(k){alert(k.message)}ia(k){k=k.isFocus;if("nwjs"===this.b){const d="nwjs"===this.b?nw.Window.get():null;k?d.focus():d.blur()}else k?window.focus():window.blur()}});