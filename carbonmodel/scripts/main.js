'use strict';function t(f,d,e,q){f.h.$(f.F,d,e,q,void 0)}function x(f,d,e,q){f.h.v?t(f,d,e,q):f.h.qb()._OnMessageFromDOM({type:"event",component:f.F,handler:d,dispatchOpts:q||null,data:e,responseId:null})}function A(f,d,e){f.h.a(f.F,d,e)}function D(f,d){for(const [e,q]of d)A(f,e,q)}window.C=class{constructor(f,d){this.h=f;this.F=d}xa(){}};
window.fb=class{constructor(f,d){this.Pa=f;this.Vb=d;this.u=-1;this.V=-Infinity;this.$b=()=>{this.u=-1;this.V=Date.now();this.G=!0;this.Pa();this.G=!1};this.Qa=this.G=!1}};"use strict";function E(f,d){const e=d.elementId,q=f.Aa(e,d);f.g.set(e,q);d.isVisible||(q.style.display="none");q.addEventListener("focus",()=>{F(f,"elem-focused",e)});q.addEventListener("blur",()=>{F(f,"elem-blurred",e)});f.T&&document.body.appendChild(q)}
function G(f,d,e){A(f,d,q=>{const u=f.g.get(q.elementId);return e(u,q)})}function F(f,d,e,q){q||(q={});q.elementId=e;t(f,d,q)}function H(f,d,e){var q;q||(q={});q.elementId=e;x(f,d,q)}
window.Za=class extends self.C{constructor(f,d){super(f,d);this.g=new Map;this.T=!0;D(this,[["create",e=>E(this,e)],["destroy",e=>{{e=e.elementId;const q=this.g.get(e);this.T&&q.parentElement.removeChild(q);this.g.delete(e)}}],["set-visible",e=>{this.T&&(this.g.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.T){var q=this.g.get(e.elementId);q.style.left=e.left+"px";q.style.top=e.top+"px";q.style.width=e.width+"px";q.style.height=e.height+"px";e=e.fontSize;null!==
e&&(q.style.fontSize=e+"em")}}],["update-state",e=>{{const q=this.g.get(e.elementId);this.aa(q,e)}}],["focus",e=>this.ka(e)],["set-css-style",e=>{this.g.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.g.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.g.get(e.elementId).removeAttribute(e.name)}]]);G(this,"get-element",e=>e)}Aa(){throw Error("required override");}aa(){throw Error("required override");}ka(f){const d=this.g.get(f.elementId);f.focus?d.focus():
d.blur()}};"use strict";
{var I=function(p){return l.has(p)},J=function(p){return new Promise((b,g)=>{const h=new FileReader;h.onload=n=>b(n.target.result);h.onerror=n=>g(n);h.readAsArrayBuffer(p)})},K=async function(p){p=await J(p);return(new TextDecoder("utf-8")).decode(p)},L=function(p){if(p.cc){const b=document.createElement("script");b.async=!1;b.textContent=p.fc;document.head.appendChild(b)}else return new Promise((b,g)=>{const h=document.createElement("script");h.onload=b;h.onerror=g;h.async=!1;h.src=p;document.head.appendChild(h)})};
const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let d=new Audio;const e={"audio/webm; codecs=opus":!!d.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!d.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!d.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!d.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!d.canPlayType("audio/mp4"),"audio/mpeg":!!d.canPlayType("audio/mpeg")};d=null;const q=[];let u=0;window.RealFile=
window.File;const B=[],z=new Map,a=new Map;let c=0;const k=[];self.rc=function(p){if("function"!==typeof p)throw Error("runOnStartup called without a function");k.push(p)};const l=new Set(["cordova","playable-ad","instant-games"]);window.m=class p{constructor(b){this.v=b.ic;this.I=null;this.c="";this.ua=b.ec;this.L={};this.qa=this.Va=null;this.U=[];this.H=this.f=this.ta=null;this.o=-1;this.Zb=()=>this.Ib();this.Ta=[];this.b=b.Wa;I(this.b)&&this.v&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),
this.v=!1);this.Ua=!1;this.W=this.i=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",g=>this.wb(g));this.a("runtime","create-job-worker",()=>this.xb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ga(b)):this.Ga(b)}Ba(){return f&&"cordova"===
this.b}M(){return f&&I(this.b)||navigator.standalone}async Ga(b){if("playable-ad"===this.b){this.i=self.c3_base64files;this.W={};await this.lb();for(let h=0,n=b.A.length;h<n;++h){var g=b.A[h].toLowerCase();this.W.hasOwnProperty(g)?b.A[h]={cc:!0,fc:this.W[g]}:this.i.hasOwnProperty(g)&&(b.A[h]=URL.createObjectURL(this.i[g]))}}b.ac?this.c=b.ac:(g=location.origin,this.c=("null"===g?"file:///":g)+location.pathname,g=this.c.lastIndexOf("/"),-1!==g&&(this.c=this.c.substr(0,g+1)));if(b.kc)for(const [h,n]of Object.entries(b.kc))this.L[h]=
URL.createObjectURL(n);g=new MessageChannel;this.I=g.port1;this.I.onmessage=h=>this._OnMessageFromRuntime(h.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(h=>this.Fb(h));this.H=new self.cb(this);await this.H.bb();this.Ca();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();await this.Sb();this.v?await this.sb(b,g.port2):await this.rb(b,g.port2)}ca(b){return this.L.hasOwnProperty(b)?
this.L[b]:b.endsWith("/workermain.js")&&this.L.hasOwnProperty("workermain.js")?this.L["workermain.js"]:"playable-ad"===this.b&&this.i.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.i[b.toLowerCase()]):b}async Y(b,g,h){if(b.startsWith("blob:"))return new Worker(b,h);if(this.Ba()&&"file:"===location.protocol)return b=await this.za(this.ua+b),new Worker(URL.createObjectURL(new Blob([b],{type:"application/javascript"})),h);b=new URL(b,g);if(location.origin!==b.origin){b=await fetch(b);if(!b.ok)throw Error("failed to fetch worker script");
b=await b.blob();return new Worker(URL.createObjectURL(b),h)}return new Worker(b,h)}Ca(){if(this.M()){const b=document.documentElement.style,g=document.body.style,h=window.innerWidth<window.innerHeight,n=h?window.screen.width:window.screen.height;g.height=b.height=(h?window.screen.height:window.screen.width)+"px";g.width=b.width=n+"px"}}Fa(b){return{baseUrl:this.c,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:p.Z(),projectData:b.qc,
previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.Wa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.pc,jobScheduler:this.H.$a(),supportedAudioFormats:e,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ua+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ua+"opus.wasm.wasm",isiOSCordova:this.Ba(),isiOSWebView:this.M(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async sb(b,g){var h=
this.ca(b.jc);this.Va=await this.Y(h,this.c,{name:"Runtime"});this.f=document.createElement("canvas");this.f.style.display="none";h=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Va.postMessage(Object.assign(this.Fa(b),{type:"init-runtime",isInWorker:!0,messagePort:g,canvas:h,workerDependencyScripts:b.wa||[],engineScripts:b.A,projectScripts:window.oc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[g,h,...this.H.ab()]);this.U=B.map(n=>new n(this));
this.Ea();self.c3_callFunction=(n,r)=>this.ta.tb(n,r);"preview"===this.b&&(self.goToLastErrorScript=()=>this.$("runtime","go-to-last-error-script"))}async rb(b,g){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);window.c3canvas=this.f;this.U=B.map(n=>new n(this));this.Ea();const h=b.A.map(n=>"string"===typeof n?(new URL(n,this.c)).toString():n);Array.isArray(b.wa)&&h.unshift(...b.wa);await Promise.all(h.map(n=>L(n)));if(b.Xa&&0<b.Xa.length){const n=
self.C3_ProjectScriptsStatus;try{if(await Promise.all(b.Xa.map(r=>L(r[1]))),Object.values(n).some(r=>!r)){self.setTimeout(()=>this.La(n),100);return}}catch(r){console.error("[Preview] Error loading project scripts: ",r);self.setTimeout(()=>this.La(n),100);return}}"preview"===this.b&&"object"!==typeof self.lc.mc?(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):
(b=Object.assign(this.Fa(b),{isInWorker:!1,messagePort:g,canvas:this.f,runOnStartupFunctions:k}),this.qa=self.C3_CreateRuntime(b),await self.C3_InitRuntime(this.qa,b))}La(b){b=`Failed to load project script '${Object.entries(b).filter(g=>!g[1]).map(g=>g[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b);alert(b)}async xb(){const b=await this.H.Da();return{outputPort:b,transferables:[b]}}qb(){if(this.v)throw Error("not available in worker mode");return this.qa}$(b,
g,h,n,r){this.I.postMessage({type:"event",component:b,handler:g,dispatchOpts:n||null,data:h,responseId:null},this.Ua?void 0:r)}eb(b,g){const h=c++,n=new Promise((r,w)=>{a.set(h,{resolve:r,reject:w})});this.I.postMessage({type:"event",component:b,handler:"js-invoke-function",dispatchOpts:null,data:g,responseId:h},void 0);return n}["_OnMessageFromRuntime"](b){const g=b.type;if("event"===g)return this.Cb(b);if("result"===g)this.Lb(b);else if("runtime-ready"===g)this.Mb();else if("alert"===g)alert(b.message);
else throw Error(`unknown message '${g}'`);}Cb(b){const g=b.component,h=b.handler,n=b.data,r=b.responseId;if(b=z.get(g))if(b=b.get(h)){var w=null;try{w=b(n)}catch(v){console.error(`Exception in '${g}' handler '${h}':`,v);null!==r&&this.R(r,!1,""+v);return}if(null===r)return w;w&&w.then?w.then(v=>this.R(r,!0,v)).catch(v=>{console.error(`Rejection from '${g}' handler '${h}':`,v);this.R(r,!1,""+v)}):this.R(r,!0,w)}else console.warn(`[DOM] No handler '${h}' for component '${g}'`);else console.warn(`[DOM] No event handlers for component '${g}'`)}R(b,
g,h){let n;h&&h.transferables&&(n=h.transferables);this.I.postMessage({type:"result",responseId:b,isOk:g,result:h},n)}Lb(b){const g=b.responseId,h=b.isOk;b=b.result;const n=a.get(g);h?n.resolve(b):n.reject(b);a.delete(g)}a(b,g,h){let n=z.get(b);n||(n=new Map,z.set(b,n));if(n.has(g))throw Error(`[DOM] Component '${b}' already has handler '${g}'`);n.set(g,h)}static B(b){if(B.includes(b))throw Error("DOM handler already added");B.push(b)}Ea(){for(const b of this.U)if("runtime"===b.F){this.ta=b;return}throw Error("cannot find runtime DOM handler");
}Fb(b){this.$("debugger","message",b)}Mb(){for(const b of this.U)b.xa()}static Z(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ma(){-1===this.o&&this.Ta.length&&(this.o=requestAnimationFrame(this.Zb))}jb(){-1!==this.o&&(cancelAnimationFrame(this.o),this.o=-1)}Ib(){this.o=-1;for(const b of this.Ta)b();this.Ma()}ma(){this.ta.ma()}async wb(b){const g=b.filename;switch(b.as){case "text":return await this.Ya(g);case "buffer":return await this.za(g);
default:throw Error("unsupported type");}}ya(b){const g=window.cordova.file.applicationDirectory+"www/"+b.toLowerCase();return new Promise((h,n)=>{window.resolveLocalFileSystemURL(g,r=>{r.file(h,n)},n)})}async Ya(b){b=await this.ya(b);return await K(b)}ba(){if(q.length&&!(8<=u)){u++;var b=q.shift();this.mb(b.filename,b.hc,b.bc)}}za(b){return new Promise((g,h)=>{q.push({filename:b,hc:n=>{u--;this.ba();g(n)},bc:n=>{u--;this.ba();h(n)}});this.ba()})}async mb(b,g,h){try{const n=await this.ya(b),r=await J(n);
g(r)}catch(n){h(n)}}async lb(){const b=[];for(const [g,h]of Object.entries(this.i))b.push(this.kb(g,h));await Promise.all(b)}async kb(b,g){if("object"===typeof g)this.i[b]=new Blob([g.str],{type:g.type}),this.W[b]=g.str;else{let h=await this.pb(g);h||(h=this.nb(g));this.i[b]=h}}async pb(b){try{return await (await fetch(b)).blob()}catch(g){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
g),null}}nb(b){b=this.Qb(b);return this.ib(b.data,b.dc)}Qb(b){var g=b.indexOf(",");if(0>g)throw new URIError("expected comma in data: uri");var h=b.substring(g+1);g=b.substring(5,g).split(";");b=g[0]||"";const n=g[2];h="base64"===g[1]||"base64"===n?atob(h):decodeURIComponent(h);return{dc:b,data:h}}ib(b,g){var h=b.length;let n=h>>2,r=new Uint8Array(h),w=new Uint32Array(r.buffer,0,n),v,y;for(y=v=0;v<n;++v)w[v]=b.charCodeAt(y++)|b.charCodeAt(y++)<<8|b.charCodeAt(y++)<<16|b.charCodeAt(y++)<<24;for(h&=
3;h--;)r[y]=b.charCodeAt(y),++y;return new Blob([r],{type:g})}Sb(){let b=null;const g=new Promise(r=>b=r),h=new ArrayBuffer(1),n=new MessageChannel;n.port2.onmessage=r=>{r.data&&r.data.arrayBuffer||(this.Ua=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));b()};n.port1.postMessage({arrayBuffer:h},[h]);return g}}}"use strict";
{var N=function(){const a=document.activeElement;if(!a)return!1;const c=a.tagName.toLowerCase(),k=new Set("email number password search tel text url".split(" "));return"textarea"===c?!0:"input"===c?k.has(a.type.toLowerCase()||"text"):M(a)},O=function(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}},P=function(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()},Q=function(a){B.has(a.target.tagName.toLowerCase())&&a.preventDefault()},M=function(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;
a=a.parentNode}while(a);return!1},T=async function(a,c,k){if(!/firefox/i.test(navigator.userAgent))return await R(a);var l=await S(a);l=(new DOMParser).parseFromString(l,"image/svg+xml");const p=l.documentElement;if(p.hasAttribute("width")&&p.hasAttribute("height")){const b=p.getAttribute("width"),g=p.getAttribute("height");if(!b.includes("%")&&!g.includes("%"))return await R(a)}p.setAttribute("width",c+"px");p.setAttribute("height",k+"px");l=(new XMLSerializer).serializeToString(l);a=new Blob([l],
{type:"image/svg+xml"});return await R(a)},S=function(a){return new Promise((c,k)=>{let l=new FileReader;l.onload=p=>c(p.target.result);l.onerror=p=>k(p);l.readAsText(a)})},R=async function(a){a=URL.createObjectURL(a);try{return await U(a)}finally{URL.revokeObjectURL(a)}},U=function(a){return new Promise((c,k)=>{const l=new Image;l.onload=()=>c(l);l.onerror=p=>k(p);l.src=a})},V=function(a){return new Promise((c,k)=>{const l=document.createElement("link");l.onload=()=>c(l);l.onerror=p=>k(p);l.rel=
"stylesheet";l.href=a;document.head.appendChild(l)})},W=function(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents};const f=self.m,d=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),e={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},q={dispatchUserScriptEvent:!0},u={dispatchRuntimeEvent:!0},B=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(a){a=
await R(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const c=a.getBoundingClientRect();document.body.removeChild(a);return[c.width,c.height]}};self.C3_RasterSvgImageBlob=async function(a,c,k,l,p){a=await T(a,c,k);const b=document.createElement("canvas");b.width=l;b.height=p;b.getContext("2d").drawImage(a,0,0,c,k);return b};let z=!1;document.addEventListener("pause",()=>
z=!0);document.addEventListener("resume",()=>z=!1);f.B(class extends self.C{constructor(a){super(a,"runtime");this.Ra=!0;this.s=-1;this.va="any";this.Na=this.Oa=!1;this.pa=this.K=this.j=null;a.a("canvas","update-size",l=>this.Ob(l));a.a("runtime","invoke-download",l=>this.Eb(l));a.a("runtime","raster-svg-image",l=>this.Jb(l));a.a("runtime","get-svg-image-size",l=>this.Db(l));a.a("runtime","set-target-orientation",l=>this.Nb(l));a.a("runtime","register-sw",()=>this.Kb());a.a("runtime","post-to-debugger",
l=>this.Ja(l));a.a("runtime","go-to-script",l=>this.Ja(l));a.a("runtime","before-start-ticking",()=>this.vb());a.a("runtime","debug-highlight",l=>this.yb(l));a.a("runtime","enable-device-orientation",()=>this.hb());a.a("runtime","enable-device-motion",()=>this.gb());a.a("runtime","add-stylesheet",l=>this.ub(l));a.a("runtime","alert",l=>this.ea(l));const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",l=>{const p=l.target;c.has(p.tagName.toLowerCase())||M(p)||l.preventDefault()});
const k=a.f;window.addEventListener("selectstart",Q);window.addEventListener("gesturehold",Q);k.addEventListener("selectstart",Q);k.addEventListener("gesturehold",Q);window.addEventListener("touchstart",Q,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",Q,{passive:!1}),k.addEventListener("pointerdown",Q)):k.addEventListener("touchstart",Q);this.J=0;window.addEventListener("mousedown",l=>{1===l.button&&l.preventDefault()});window.addEventListener("mousewheel",
P,{passive:!1});window.addEventListener("wheel",P,{passive:!1});window.addEventListener("resize",()=>this.Pb());a.M()&&window.addEventListener("focusout",()=>{N()||(document.scrollingElement.scrollTop=0)});this.ra=new Set;this.Yb=new WeakSet;this.Wb=!1}vb(){"cordova"===this.h.b?(document.addEventListener("pause",()=>this.la(!0)),document.addEventListener("resume",()=>this.la(!1))):document.addEventListener("visibilitychange",()=>this.la(document.hidden));return{isSuspended:!(!document.hidden&&!z)}}xa(){window.addEventListener("focus",
()=>this.S("window-focus"));window.addEventListener("blur",()=>{this.S("window-blur",{parentHasFocus:O()});this.J=0});window.addEventListener("fullscreenchange",()=>this.fa());window.addEventListener("webkitfullscreenchange",()=>this.fa());window.addEventListener("mozfullscreenchange",()=>this.fa());window.addEventListener("fullscreenerror",c=>this.ga(c));window.addEventListener("webkitfullscreenerror",c=>this.ga(c));window.addEventListener("mozfullscreenerror",c=>this.ga(c));window.addEventListener("keydown",
c=>this.Ia("keydown",c));window.addEventListener("keyup",c=>this.Ia("keyup",c));window.addEventListener("dblclick",c=>this.ia("dblclick",c,e));window.addEventListener("wheel",c=>this.Gb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.da(c);this.D("pointerdown",c)}),this.h.v&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.K=new self.fb(()=>this.ob(),5),this.K.Qa=!0,window.addEventListener("pointerrawupdate",c=>this.Hb(c))):window.addEventListener("pointermove",
c=>this.D("pointermove",c)),window.addEventListener("pointerup",c=>this.D("pointerup",c)),window.addEventListener("pointercancel",c=>this.D("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.da(c);this.ja("pointerdown",c)}),window.addEventListener("mousemove",c=>this.ja("pointermove",c)),window.addEventListener("mouseup",c=>this.ja("pointerup",c)),window.addEventListener("touchstart",c=>{this.da(c);this.P("pointerdown",c)}),window.addEventListener("touchmove",c=>this.P("pointermove",
c)),window.addEventListener("touchend",c=>this.P("pointerup",c)),window.addEventListener("touchcancel",c=>this.P("pointercancel",c)));const a=()=>this.ma();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}S(a,c){t(this,a,c||null,u)}O(){return Math.max(window.innerWidth,1)}N(){return Math.max(window.innerHeight,1)}Pb(){const a=this.O(),c=this.N();
this.S("window-resize",{innerWidth:a,innerHeight:c,devicePixelRatio:window.devicePixelRatio});this.h.M()&&(-1!==this.s&&clearTimeout(this.s),this.Ka(a,c,0))}Rb(a,c,k){-1!==this.s&&clearTimeout(this.s);this.s=setTimeout(()=>this.Ka(a,c,k),48)}Ka(a,c,k){const l=this.O(),p=this.N();this.s=-1;l!=a||p!=c?this.S("window-resize",{innerWidth:l,innerHeight:p,devicePixelRatio:window.devicePixelRatio}):10>k&&this.Rb(l,p,k+1)}Nb(a){this.va=a.targetOrientation}Tb(){const a=this.va;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(c=>
console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(a):screen.webkitLockOrientation?c=screen.webkitLockOrientation(a):screen.mozLockOrientation?c=screen.mozLockOrientation(a):screen.msLockOrientation&&(c=screen.msLockOrientation(a));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}fa(){const a=f.Z();a&&"any"!==this.va&&this.Tb();t(this,"fullscreenchange",
{isFullscreen:a,innerWidth:this.O(),innerHeight:this.N()})}ga(a){console.warn("[Construct 3] Fullscreen request failed: ",a);t(this,"fullscreenerror",{isFullscreen:f.Z(),innerWidth:this.O(),innerHeight:this.N()})}la(a){a?this.h.jb():this.h.Ma();t(this,"visibilitychange",{hidden:a})}Ia(a,c){"Backspace"===c.key&&Q(c);const k=d.get(c.code)||c.code;x(this,a,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},e)}Gb(a){t(this,
"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},e)}ia(a,c,k){W(c)||x(this,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},k)}ja(a,c){if(!W(c)){var k=this.J;"pointerdown"===a&&0!==k?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");x(this,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,
lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},e);this.J=c.buttons;this.ia(c.type,c,q)}}D(a,c){if(this.K&&"pointermove"!==a){var k=this.K;k.G||(-1!==k.u&&(self.clearTimeout(k.u),k.u=-1),k.V=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.J);x(this,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,
pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},e);"mouse"===c.pointerType&&(k="mousemove","pointerdown"===a?k="mousedown":"pointerup"===a&&(k="pointerup"),this.ia(k,c,q),this.J=c.buttons)}Hb(a){this.pa=a;a=this.K;if(-1===a.u){var c=Date.now(),k=c-a.V,l=a.Vb;k>=l&&a.Qa?(a.V=c,a.G=!0,a.Pa(),a.G=!1):a.u=self.setTimeout(a.$b,Math.max(l-k,4))}}ob(){this.D("pointermove",
this.pa);this.pa=null}P(a,c){for(let k=0,l=c.changedTouches.length;k<l;++k){const p=c.changedTouches[k];x(this,a,{pointerId:p.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:p.clientX,clientY:p.clientY,pageX:p.pageX,pageY:p.pageY,width:2*(p.radiusX||p.webkitRadiusX||0),height:2*(p.radiusY||p.webkitRadiusY||0),pressure:p.force||p.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:p.rotationAngle||0,timeStamp:c.timeStamp},e)}}da(a){window!==window.top&&window.focus();
this.Ha(a.target)&&document.activeElement&&!this.Ha(document.activeElement)&&document.activeElement.blur()}Ha(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}hb(){this.Oa||(this.Oa=!0,window.addEventListener("deviceorientation",a=>this.Ab(a)),window.addEventListener("deviceorientationabsolute",a=>this.Bb(a)))}gb(){this.Na||(this.Na=!0,window.addEventListener("devicemotion",a=>this.zb(a)))}Ab(a){t(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||
0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},e)}Bb(a){t(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},e)}zb(a){let c=null;var k=a.acceleration;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});k=null;var l=a.accelerationIncludingGravity;l&&(k={x:l.x||0,y:l.y||0,z:l.z||0});l=null;const p=a.rotationRate;p&&(l={alpha:p.alpha||0,beta:p.beta||
0,gamma:p.gamma||0});t(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:l,interval:a.interval,timeStamp:a.timeStamp},e)}Ob(a){const c=this.h,k=c.f;k.style.width=a.styleWidth+"px";k.style.height=a.styleHeight+"px";k.style.marginLeft=a.marginLeft+"px";k.style.marginTop=a.marginTop+"px";c.Ca();this.Ra&&(k.style.display="",this.Ra=!1)}Eb(a){const c=a.url;a=a.filename;const k=document.createElement("a"),l=document.body;k.textContent=a;k.href=c;k.download=a;l.appendChild(k);
k.click();l.removeChild(k)}async Jb(a){var c=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);c=c?await createImageBitmap(a,c):await createImageBitmap(a);return{imageBitmap:c,transferables:[c]}}async Db(a){return await self.C3_GetSvgImageSize(a.blob)}async ub(a){await V(a.url)}ma(){var a=[...this.ra];this.ra.clear();if(!this.Wb)for(const c of a)(a=c.play())&&a.catch(()=>{this.Yb.has(c)||this.ra.add(c)})}yb(a){if(a.show){this.j||
(this.j=document.createElement("div"),this.j.id="inspectOutline",document.body.appendChild(this.j));var c=this.j;c.style.display="";c.style.left=a.left-1+"px";c.style.top=a.top-1+"px";c.style.width=a.width+2+"px";c.style.height=a.height+2+"px";c.textContent=a.name}else this.j&&(this.j.style.display="none")}Kb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ja(a){window.c3_postToMessagePort&&(a.from="runtime",window.c3_postToMessagePort(a))}tb(a,c){return this.h.eb(this.F,{name:a,params:c})}ea(a){alert(a.message)}})}"use strict";
{const f=document.currentScript.src;self.cb=class{constructor(d){this.X=d;this.c=f?f.substr(0,f.lastIndexOf("/")+1):d.c;this.Xb=Math.min(navigator.hardwareConcurrency||2,16);this.na=null;this.Sa=[];this.sa=this.oa=null}async bb(){if(this.Ub)throw Error("already initialised");this.Ub=!0;var d=this.X.ca("dispatchworker.js");this.na=await this.X.Y(d,this.c,{name:"DispatchWorker"});d=new MessageChannel;this.oa=d.port1;this.na.postMessage({type:"_init","in-port":d.port2},[d.port2]);this.sa=await this.Da()}async Da(){const d=
this.Sa.length;var e=this.X.ca("jobworker.js");e=await this.X.Y(e,this.c,{name:"JobWorker"+d});const q=new MessageChannel,u=new MessageChannel;this.na.postMessage({type:"_addJobWorker",port:q.port1},[q.port1]);e.postMessage({type:"init",number:d,"dispatch-port":q.port2,"output-port":u.port2},[q.port2,u.port2]);this.Sa.push(e);return u.port1}$a(){return{inputPort:this.oa,outputPort:this.sa,maxNumWorkers:this.Xb}}ab(){return[this.oa,this.sa]}}}"use strict";
window.C3_IsSupported&&(window.c3_runtimeInterface=new self.m({ic:"undefined"!==typeof OffscreenCanvas,jc:"workermain.js",A:["scripts/c3runtime.js"],ec:"scripts/",wa:[],Wa:"html5"}));"use strict";async function aa(f,d){d=d.type;let e=!0;0===d?e=await ba():1===d&&(e=await ca());t(f,"permission-result",{type:d,result:e})}
async function ba(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request orientation permission: ",f),!1}}
async function ca(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request motion permission: ",f),!1}}self.m.B(class extends self.C{constructor(f){super(f,"touch");A(this,"request-permission",d=>aa(this,d))}});"use strict";function X(f){13!==f.which&&27!==f.which&&f.stopPropagation()}function Y(f){f.stopPropagation()}
self.m.B(class extends self.Za{constructor(f){super(f,"text-input");G(this,"scroll-to-bottom",d=>{d.scrollTop=d.scrollHeight})}Aa(f,d){let e;const q=d.type;"textarea"===q?(e=document.createElement("textarea"),e.style.resize="none"):(e=document.createElement("input"),e.type=q);e.style.position="absolute";e.autocomplete="off";e.addEventListener("touchstart",Y);e.addEventListener("touchmove",Y);e.addEventListener("touchend",Y);e.addEventListener("mousedown",Y);e.addEventListener("mouseup",Y);e.addEventListener("keydown",
X);e.addEventListener("keyup",X);e.addEventListener("click",u=>{u.stopPropagation();H(this,"click",f)});e.addEventListener("dblclick",u=>{u.stopPropagation();H(this,"dblclick",f)});e.addEventListener("input",()=>F(this,"change",f,{text:e.value}));d.id&&(e.id=d.id);this.aa(e,d);return e}aa(f,d){f.value=d.text;f.placeholder=d.placeholder;f.title=d.title;f.disabled=!d.isEnabled;f.readOnly=d.isReadOnly;f.spellcheck=d.spellCheck;d=d.maxLength;0>d?f.removeAttribute("maxlength"):f.setAttribute("maxlength",
d)}});"use strict";async function da(f){if(!f.l)try{f.l=await navigator.wakeLock.request("screen"),f.l.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");f.l=null;t(f,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),t(f,"wake-lock-acquired")}catch(d){console.warn("[Construct 3] Failed to acquire screen wake lock: ",d),t(f,"wake-lock-error")}}
function Z(){var f=document.body;const d=f.style;d.setProperty("--temp-sai-top","env(safe-area-inset-top)");d.setProperty("--temp-sai-right","env(safe-area-inset-right)");d.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");d.setProperty("--temp-sai-left","env(safe-area-inset-left)");f=getComputedStyle(f);f=[f.getPropertyValue("--temp-sai-top"),f.getPropertyValue("--temp-sai-right"),f.getPropertyValue("--temp-sai-bottom"),f.getPropertyValue("--temp-sai-left")].map(e=>{e=parseInt(e,10);
return isFinite(e)?e:0});d.removeProperty("--temp-sai-top");d.removeProperty("--temp-sai-right");d.removeProperty("--temp-sai-bottom");d.removeProperty("--temp-sai-left");return f}
self.m.B(class extends self.C{constructor(f){super(f,"platform-info");D(this,[["get-initial-state",()=>this.ha()],["request-wake-lock",()=>da(this)],["release-wake-lock",()=>{this.l&&(this.l.release(),this.l=null)}]]);window.addEventListener("resize",()=>{t(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:Z()})});this.l=null}ha(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:Z(),supportsWakeLock:!!navigator.wakeLock}}});"use strict";function ea(f){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(d=>t(f,"sw-message",d.data))}
function fa(f){f=f.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(f).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(f):screen.webkitLockOrientation?d=screen.webkitLockOrientation(f):screen.mozLockOrientation?d=screen.mozLockOrientation(f):screen.msLockOrientation&&(d=screen.msLockOrientation(f));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",
d)}}
self.m.B(class extends self.C{constructor(f){super(f,"browser");this.b="";D(this,[["get-initial-state",d=>this.ha(d)],["ready-for-sw-messages",()=>ea(this)],["alert",d=>this.ea(d)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",d=>this.ka(d)],["vibrate",d=>{navigator.vibrate&&navigator.vibrate(d.pattern)}],["lock-orientation",d=>fa(d)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(d){}}],["navigate",d=>{var e=d.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===e)window.forward();else if("home"===e)window.home();else if("reload"===e)location.reload();
else if("url"===e){e=d.url;var q=d.target;d=d.exportType;"windows-uwp"===d&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===d?window.open(e,"_blank"):this.nc||(2===q?window.top.location=e:1===q?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=d.url,q=d.tag,"windows-uwp"===d.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,q))}],["request-fullscreen",d=>{{const e={navigationUI:"auto"};d=d.navUI;1===d?e.navigationUI="hide":2===d&&(e.navigationUI="show");d=document.documentElement;d.requestFullscreen?d.requestFullscreen(e):d.mozRequestFullScreen?d.mozRequestFullScreen(e):d.msRequestFullscreen?d.msRequestFullscreen(e):d.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):
d.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",d=>{location.hash=d.hash}]]);window.addEventListener("online",()=>{t(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{t(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",
()=>{t(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{t(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",d=>{d.handled=!0;t(this,"backbutton")})}ha(f){this.b=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,
windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}ea(f){alert(f.message)}ka(f){f=f.isFocus;if("nwjs"===this.b){const d="nwjs"===this.b?nw.Window.get():null;f?d.focus():d.blur()}else f?window.focus():window.blur()}});