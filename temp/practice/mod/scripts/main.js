'use strict';function n(f,g,e,k){f.f.ea(f.J,g,e,k,void 0)}function z(f,g,e,k){f.f.l?n(f,g,e,k):f.f.ub()._OnMessageFromDOM({type:"event",component:f.J,handler:g,dispatchOpts:k||null,data:e,responseId:null})}function H(f,g,e){f.f.a(f.J,g,e)}function I(f,g){for(const [e,k]of g)H(f,e,k)}window.G=class{constructor(f,g){this.f=f;this.J=g}Ca(){}};
window.jb=class{constructor(f,g){this.Ua=f;this.$b=g;this.C=-1;this.Y=-Infinity;this.ec=()=>{this.C=-1;this.Y=Date.now();this.K=!0;this.Ua();this.K=!1};this.Va=this.K=!1}};"use strict";function J(f,g){const e=g.elementId,k=f.Ea(e,g);f.h.set(e,k);g.isVisible||(k.style.display="none");k.addEventListener("focus",()=>{L(f,"elem-focused",e)});k.addEventListener("blur",()=>{L(f,"elem-blurred",e)});f.W&&document.body.appendChild(k)}
function M(f,g,e){H(f,g,k=>{const m=f.h.get(k.elementId);return e(m,k)})}function L(f,g,e,k){k||(k={});k.elementId=e;n(f,g,k)}function N(f,g,e){var k;k||(k={});k.elementId=e;z(f,g,k)}
window.eb=class extends self.G{constructor(f,g){super(f,g);this.h=new Map;this.W=!0;I(this,[["create",e=>J(this,e)],["destroy",e=>{{e=e.elementId;const k=this.h.get(e);this.W&&k.parentElement.removeChild(k);this.h.delete(e)}}],["set-visible",e=>{this.W&&(this.h.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.W){var k=this.h.get(e.elementId);k.style.left=e.left+"px";k.style.top=e.top+"px";k.style.width=e.width+"px";k.style.height=e.height+"px";e=e.fontSize;null!==
e&&(k.style.fontSize=e+"em")}}],["update-state",e=>{{const k=this.h.get(e.elementId);this.fa(k,e)}}],["focus",e=>this.qa(e)],["set-css-style",e=>{this.h.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.h.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.h.get(e.elementId).removeAttribute(e.name)}]]);M(this,"get-element",e=>e)}Ea(){throw Error("required override");}fa(){throw Error("required override");}qa(f){var g=this.h.get(f.elementId);f.focus?g.focus():
g.blur()}};"use strict";
{const f=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function g(b,a){const c=document.createElement("script");c.async=!1;"module"===a&&(c.type="module");if(b.jc)c.textContent=b.mc,document.head.appendChild(c);else return new Promise((d,h)=>{c.onload=d;c.onerror=h;c.src=b;document.head.appendChild(c)})}let e=!1,k=!1;function m(){if(!e){try{new Worker("blob://",{get type(){k=!0}})}catch(b){}e=!0}return k}let t=new Audio;const w={"audio/webm; codecs=opus":!!t.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!t.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!t.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!t.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!t.canPlayType("audio/mp4"),"audio/mpeg":!!t.canPlayType("audio/mpeg")};t=null;async function K(b){b=await x(b);return(new TextDecoder("utf-8")).decode(b)}function x(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=h=>a(h.target.result);d.onerror=h=>c(h);d.readAsArrayBuffer(b)})}const C=[];let A=0;window.RealFile=window.File;const y=
[],D=new Map,r=new Map;let E=0;const B=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");B.push(b)};const F=new Set(["cordova","playable-ad","instant-games"]);window.v=class b{constructor(a){this.l=a.oc;this.M=null;this.c="";this.aa=a.lc;this.i=a.bb;this.P={};this.wa=this.Za=null;this.X=[];this.L=this.g=this.za=null;this.A=-1;this.dc=()=>this.Nb();this.Ya=[];this.b=a.$a;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&
("module"!==this.i||m())||(this.l=!1);F.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.Z=this.j=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",
c=>this.Ab(c));this.a("runtime","create-job-worker",()=>this.Bb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ja(a)):this.Ja(a)}Fa(){return f&&"cordova"===this.b}S(){return f&&F.has(this.b)||navigator.standalone}async Ja(a){if("playable-ad"===this.b){this.j=self.c3_base64files;this.Z={};await this.pb();for(let d=0,h=a.D.length;d<h;++d){var c=a.D[d].toLowerCase();this.Z.hasOwnProperty(c)?a.D[d]={jc:!0,mc:this.Z[c]}:this.j.hasOwnProperty(c)&&(a.D[d]=URL.createObjectURL(this.j[c]))}}a.fc?
this.c=a.fc:(c=location.origin,this.c=("null"===c?"file:///":c)+location.pathname,c=this.c.lastIndexOf("/"),-1!==c&&(this.c=this.c.substr(0,c+1)));a.qc&&(this.P=a.qc);c=new MessageChannel;this.M=c.port1;this.M.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Kb(d));this.L=new self.hb(this);await O(this.L);this.Ga();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();
this.l?await this.wb(a,c.port2):await this.vb(a,c.port2)}ha(a){a=this.P.hasOwnProperty(a)?this.P[a]:a.endsWith("/workermain.js")&&this.P.hasOwnProperty("workermain.js")?this.P["workermain.js"]:"playable-ad"===this.b&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ca(a,c,d){if(a.startsWith("blob:"))return new Worker(a,d);if(this.Fa()&&"file:"===location.protocol)return a=await this.ba(this.aa+a),new Worker(URL.createObjectURL(new Blob([a],
{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Ga(){if(this.S()){const a=document.documentElement.style,c=document.body.style,d=window.innerWidth<window.innerHeight,h=d?window.screen.width:window.screen.height;c.height=a.height=
(d?window.screen.height:window.screen.width)+"px";c.width=a.width=h+"px"}}Ia(a){var c=this.L;return{baseUrl:this.c,windowInnerWidth:this.o(),windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,isFullscreen:b.da(),projectData:a.wc,scriptsType:a.bb,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileUrls:window.cr_previewProjectFiles,swClientId:window.uc||"",exportType:a.$a,isDebug:-1<self.location.search.indexOf("debug"),
ife:!!self.vc,jobScheduler:{inputPort:c.ua,outputPort:c.ya,maxNumWorkers:c.bc},supportedAudioFormats:w,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.aa+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.aa+"opus.wasm.wasm",isiOSCordova:this.Fa(),isiOSWebView:this.S(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async wb(a,c){var d=this.ha(a.pc);this.Za=await this.ca(d,this.c,{type:this.i,name:"Runtime"});this.g=document.createElement("canvas");this.g.style.display=
"none";d=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Za.postMessage(Object.assign(this.Ia(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:d,workerDependencyScripts:a.Ba||[],engineScripts:a.D,projectScripts:a.R,mainProjectScript:a.ab,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,d,...P(this.L)]);this.X=y.map(h=>new h(this));this.Ha();self.c3_callFunction=(h,l)=>this.za.xb(h,l);"preview"===this.b&&(self.goToLastErrorScript=()=>
this.ea("runtime","go-to-last-error-script"))}async vb(a,c){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.X=y.map(l=>new l(this));this.Ha();var d=a.D.map(l=>"string"===typeof l?(new URL(l,this.c)).toString():l);Array.isArray(a.Ba)&&d.unshift(...a.Ba);d=await Promise.all(d.map(l=>this.ja(l,this.i)));await Promise.all(d.map(l=>g(l,this.i)));const h=self.C3_ProjectScriptsStatus;if("module"===this.i){d=a.ab;const l=a.R;
for(let [q,p]of l)if(p||(p=q),q===d)try{p=await this.ja(p,this.i),await g(p,this.i),"preview"!==this.b||h[q]||this.Pa(q,"main script did not run to completion")}catch(u){this.Pa(q,u)}else if("scriptsInEvents.js"===q||q.endsWith("/scriptsInEvents.js"))p=await this.ja(p,this.i),await g(p,this.i)}else if(a.R&&0<a.R.length)try{if(await Promise.all(a.R.map(l=>g(l[1],this.i))),Object.values(h).some(l=>!l)){self.setTimeout(()=>this.Qa(h),100);return}}catch(l){console.error("[Preview] Error loading project scripts: ",
l);self.setTimeout(()=>this.Qa(h),100);return}"preview"===this.b&&"object"!==typeof self.rc.sc?(this.I(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ia(a),{isInWorker:!1,messagePort:c,canvas:this.g,runOnStartupFunctions:B}),this.La(),this.wa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.wa,
a))}Qa(a){this.I();a=`Failed to load project script '${Object.entries(a).filter(c=>!c[1]).map(c=>c[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+a);alert(a)}Pa(a,c){this.I();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}La(){this.I()}I(){const a=window.hc;a&&(a.parentElement.removeChild(a),
window.hc=null)}async Bb(){const a=await Q(this.L);return{outputPort:a,transferables:[a]}}ub(){if(this.l)throw Error("not available in worker mode");return this.wa}ea(a,c,d,h,l){this.M.postMessage({type:"event",component:a,handler:c,dispatchOpts:h||null,data:d,responseId:null},l)}ib(a,c){const d=E++,h=new Promise((l,q)=>{r.set(d,{resolve:l,reject:q})});this.M.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return h}["_OnMessageFromRuntime"](a){const c=
a.type;if("event"===c)return this.Gb(a);if("result"===c)this.Qb(a);else if("runtime-ready"===c)this.Rb();else if("alert-error"===c)this.I(),alert(a.message);else if("creating-runtime"===c)this.La();else throw Error(`unknown message '${c}'`);}Gb(a){const c=a.component,d=a.handler,h=a.data,l=a.responseId;if(a=D.get(c))if(a=a.get(d)){var q=null;try{q=a(h)}catch(p){console.error(`Exception in '${c}' handler '${d}':`,p);null!==l&&this.U(l,!1,""+p);return}if(null===l)return q;q&&q.then?q.then(p=>this.U(l,
!0,p)).catch(p=>{console.error(`Rejection from '${c}' handler '${d}':`,p);this.U(l,!1,""+p)}):this.U(l,!0,q)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}U(a,c,d){let h;d&&d.transferables&&(h=d.transferables);this.M.postMessage({type:"result",responseId:a,isOk:c,result:d},h)}Qb(a){const c=a.responseId,d=a.isOk;a=a.result;const h=r.get(c);d?h.resolve(a):h.reject(a);r.delete(c)}a(a,c,d){let h=D.get(a);h||(h=new Map,
D.set(a,h));if(h.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);h.set(c,d)}static F(a){if(y.includes(a))throw Error("DOM handler already added");y.push(a)}Ha(){for(const a of this.X)if("runtime"===a.J){this.za=a;return}throw Error("cannot find runtime DOM handler");}Kb(a){this.ea("debugger","message",a)}Rb(){for(const a of this.X)a.Ca()}static da(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ra(){-1===this.A&&this.Ya.length&&
(this.A=requestAnimationFrame(this.dc))}nb(){-1!==this.A&&(cancelAnimationFrame(this.A),this.A=-1)}Nb(){this.A=-1;for(const a of this.Ya)a();this.Ra()}sa(){this.za.sa()}fb(a){return/^(?:[a-z]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}gb(a){return!this.fb(a)}async ja(a,c){if("cordova"!==this.b||f||"module"!==c||!a.startsWith("file:")&&!this.gb(a))return a;a.startsWith(this.c)&&(a=a.substr(this.c.length));a=await this.ba(a);return URL.createObjectURL(new Blob([a],{type:"application/javascript"}))}async Ab(a){const c=
a.filename;switch(a.as){case "text":return await this.cb(c);case "buffer":return await this.ba(c);default:throw Error("unsupported type");}}Da(a){const c=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((d,h)=>{window.resolveLocalFileSystemURL(c,l=>{l.file(d,h)},h)})}async cb(a){a=await this.Da(a);return await K(a)}ga(){if(C.length&&!(8<=A)){A++;var a=C.shift();this.qb(a.filename,a.nc,a.ic)}}ba(a){return new Promise((c,d)=>{C.push({filename:a,nc:h=>{A--;this.ga();
c(h)},ic:h=>{A--;this.ga();d(h)}});this.ga()})}async qb(a,c,d){try{const h=await this.Da(a),l=await x(h);c(l)}catch(h){d(h)}}async pb(){const a=[];for(const [c,d]of Object.entries(this.j))a.push(this.ob(c,d));await Promise.all(a)}async ob(a,c){if("object"===typeof c)this.j[a]=new Blob([c.str],{type:c.type}),this.Z[a]=c.str;else{let d=await this.tb(c);d||(d=this.rb(c));this.j[a]=d}}async tb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}rb(a){a=this.Wb(a);return this.mb(a.data,a.kc)}Wb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const h=c[2];d="base64"===c[1]||"base64"===h?atob(d):decodeURIComponent(d);return{kc:a,data:d}}mb(a,c){var d=a.length;let h=d>>2,l=new Uint8Array(d),q=new Uint32Array(l.buffer,0,h),p,u;for(u=p=0;p<h;++p)q[p]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(d&=
3;d--;)l[u]=a.charCodeAt(u),++u;return new Blob([l],{type:c})}}}"use strict";
{const f=self.v;function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const e=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),k={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},m={dispatchUserScriptEvent:!0},t={dispatchRuntimeEvent:!0};function w(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=h=>c(h);d.rel=
"stylesheet";d.href=b;document.head.appendChild(d)})}function K(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=h=>c(h);d.src=b})}async function x(b){b=URL.createObjectURL(b);try{return await K(b)}finally{URL.revokeObjectURL(b)}}function C(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=h=>a(h.target.result);d.onerror=h=>c(h);d.readAsText(b)})}async function A(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await x(b);var d=await C(b);d=(new DOMParser).parseFromString(d,
"image/svg+xml");const h=d.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const l=h.getAttribute("width"),q=h.getAttribute("height");if(!l.includes("%")&&!q.includes("%"))return await x(b)}h.setAttribute("width",a+"px");h.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await x(b)}function y(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const D=new Set(["canvas",
"body","html"]);function r(b){D.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function E(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await x(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]}};self.C3_RasterSvgImageBlob=async function(b,
a,c,d,h){b=await A(b,a,c);const l=document.createElement("canvas");l.width=d;l.height=h;l.getContext("2d").drawImage(b,0,0,a,c);return l};let B=!1;document.addEventListener("pause",()=>B=!0);document.addEventListener("resume",()=>B=!1);function F(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}f.F(class extends self.G{constructor(b){super(b,"runtime");this.Wa=!0;this.B=-1;this.Aa="any";this.Sa=this.Ta=!1;this.va=this.O=this.s=null;b.a("canvas","update-size",d=>this.Ub(d));
b.a("runtime","invoke-download",d=>this.Jb(d));b.a("runtime","raster-svg-image",d=>this.Ob(d));b.a("runtime","get-svg-image-size",d=>this.Hb(d));b.a("runtime","set-target-orientation",d=>this.Tb(d));b.a("runtime","register-sw",()=>this.Pb());b.a("runtime","post-to-debugger",d=>this.Na(d));b.a("runtime","go-to-script",d=>this.Na(d));b.a("runtime","before-start-ticking",()=>this.zb());b.a("runtime","debug-highlight",d=>this.Cb(d));b.a("runtime","enable-device-orientation",()=>this.lb());b.a("runtime",
"enable-device-motion",()=>this.kb());b.a("runtime","add-stylesheet",d=>this.yb(d));b.a("runtime","alert",d=>this.ka(d));b.a("runtime","hide-cordova-splash",()=>this.Ib());const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const h=d.target;a.has(h.tagName.toLowerCase())||y(h)||d.preventDefault()});const c=b.g;window.addEventListener("selectstart",r);window.addEventListener("gesturehold",r);c.addEventListener("selectstart",r);c.addEventListener("gesturehold",
r);window.addEventListener("touchstart",r,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",r,{passive:!1}),c.addEventListener("pointerdown",r)):c.addEventListener("touchstart",r);this.N=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",E,{passive:!1});window.addEventListener("wheel",E,{passive:!1});window.addEventListener("resize",()=>this.Vb());b.S()&&window.addEventListener("focusout",()=>{{const l=
document.activeElement;if(l){var d=l.tagName.toLowerCase();var h=new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?h.has(l.type.toLowerCase()||"text"):y(l)}else d=!1}d||(document.scrollingElement.scrollTop=0)});this.xa=new Set;this.cc=new WeakSet;this.ac=!1}zb(){"cordova"===this.f.b?(document.addEventListener("pause",()=>this.ra(!0)),document.addEventListener("resume",()=>this.ra(!1))):document.addEventListener("visibilitychange",()=>this.ra(document.hidden));
return{isSuspended:!(!document.hidden&&!B)}}Ca(){window.addEventListener("focus",()=>this.V("window-focus"));window.addEventListener("blur",()=>{this.V("window-blur",{parentHasFocus:F()});this.N=0});window.addEventListener("fullscreenchange",()=>this.la());window.addEventListener("webkitfullscreenchange",()=>this.la());window.addEventListener("mozfullscreenchange",()=>this.la());window.addEventListener("fullscreenerror",a=>this.ma(a));window.addEventListener("webkitfullscreenerror",a=>this.ma(a));
window.addEventListener("mozfullscreenerror",a=>this.ma(a));window.addEventListener("keydown",a=>this.Ma("keydown",a));window.addEventListener("keyup",a=>this.Ma("keyup",a));window.addEventListener("dblclick",a=>this.oa("dblclick",a,k));window.addEventListener("wheel",a=>this.Lb(a));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{this.ia(a);this.H("pointerdown",a)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.O=new self.jb(()=>this.sb(),
5),this.O.Va=!0,window.addEventListener("pointerrawupdate",a=>this.Mb(a))):window.addEventListener("pointermove",a=>this.H("pointermove",a)),window.addEventListener("pointerup",a=>this.H("pointerup",a)),window.addEventListener("pointercancel",a=>this.H("pointercancel",a))):(window.addEventListener("mousedown",a=>{this.ia(a);this.pa("pointerdown",a)}),window.addEventListener("mousemove",a=>this.pa("pointermove",a)),window.addEventListener("mouseup",a=>this.pa("pointerup",a)),window.addEventListener("touchstart",
a=>{this.ia(a);this.T("pointerdown",a)}),window.addEventListener("touchmove",a=>this.T("pointermove",a)),window.addEventListener("touchend",a=>this.T("pointerup",a)),window.addEventListener("touchcancel",a=>this.T("pointercancel",a)));const b=()=>this.sa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}V(b,a){n(this,b,a||null,t)}o(){return this.f.o()}m(){return this.f.m()}Vb(){const b=
this.o(),a=this.m();this.V("window-resize",{innerWidth:b,innerHeight:a,devicePixelRatio:window.devicePixelRatio});this.f.S()&&(-1!==this.B&&clearTimeout(this.B),this.Oa(b,a,0))}Xb(b,a,c){-1!==this.B&&clearTimeout(this.B);this.B=setTimeout(()=>this.Oa(b,a,c),48)}Oa(b,a,c){const d=this.o(),h=this.m();this.B=-1;d!=b||h!=a?this.V("window-resize",{innerWidth:d,innerHeight:h,devicePixelRatio:window.devicePixelRatio}):10>c&&this.Xb(d,h,c+1)}Tb(b){this.Aa=b.targetOrientation}Yb(){const b=this.Aa;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct 3] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct 3] Failed to lock orientation")}catch(a){console.warn("[Construct 3] Failed to lock orientation: ",a)}}la(){const b=
f.da();b&&"any"!==this.Aa&&this.Yb();n(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}ma(b){console.warn("[Construct 3] Fullscreen request failed: ",b);n(this,"fullscreenerror",{isFullscreen:f.da(),innerWidth:this.o(),innerHeight:this.m()})}ra(b){b?this.f.nb():this.f.Ra();n(this,"visibilitychange",{hidden:b})}Ma(b,a){"Backspace"===a.key&&r(a);const c=e.get(a.code)||a.code;z(this,b,{code:c,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,
metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},k)}Lb(b){n(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},k)}oa(b,a,c){g(a)||z(this,b,{button:a.button,buttons:a.buttons,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,timeStamp:a.timeStamp},c)}pa(b,a){if(!g(a)){var c=this.N;"pointerdown"===b&&0!==c?b="pointermove":"pointerup"===b&&0!==a.buttons&&(b=
"pointermove");z(this,b,{pointerId:1,pointerType:"mouse",button:a.button,buttons:a.buttons,lastButtons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:a.timeStamp},k);this.N=a.buttons;this.oa(a.type,a,m)}}H(b,a){if(this.O&&"pointermove"!==b){var c=this.O;c.K||(-1!==c.C&&(self.clearTimeout(c.C),c.C=-1),c.Y=Date.now())}c=0;"mouse"===a.pointerType&&(c=this.N);z(this,b,{pointerId:a.pointerId,pointerType:a.pointerType,
button:a.button,buttons:a.buttons,lastButtons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},k);"mouse"===a.pointerType&&(c="mousemove","pointerdown"===b?c="mousedown":"pointerup"===b&&(c="mouseup"),this.oa(c,a,m),this.N=a.buttons)}Mb(b){this.va=b;b=this.O;if(-1===b.C){var a=Date.now(),c=a-b.Y,d=b.$b;c>=d&&
b.Va?(b.Y=a,b.K=!0,b.Ua(),b.K=!1):b.C=self.setTimeout(b.ec,Math.max(d-c,4))}}sb(){this.H("pointermove",this.va);this.va=null}T(b,a){for(let c=0,d=a.changedTouches.length;c<d;++c){const h=a.changedTouches[c];z(this,b,{pointerId:h.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:h.clientX,clientY:h.clientY,pageX:h.pageX,pageY:h.pageY,width:2*(h.radiusX||h.webkitRadiusX||0),height:2*(h.radiusY||h.webkitRadiusY||0),pressure:h.force||h.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:h.rotationAngle||0,timeStamp:a.timeStamp},k)}}ia(b){window!==window.top&&window.focus();this.Ka(b.target)&&document.activeElement&&!this.Ka(document.activeElement)&&document.activeElement.blur()}Ka(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}lb(){this.Ta||(this.Ta=!0,window.addEventListener("deviceorientation",b=>this.Eb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Fb(b)))}kb(){this.Sa||(this.Sa=!0,window.addEventListener("devicemotion",
b=>this.Db(b)))}Eb(b){n(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},k)}Fb(b){n(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},k)}Db(b){let a=null;var c=b.acceleration;c&&(a={x:c.x||0,y:c.y||0,z:c.z||0});c=null;var d=b.accelerationIncludingGravity;d&&(c={x:d.x||
0,y:d.y||0,z:d.z||0});d=null;const h=b.rotationRate;h&&(d={alpha:h.alpha||0,beta:h.beta||0,gamma:h.gamma||0});n(this,"devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:d,interval:b.interval,timeStamp:b.timeStamp},k)}Ub(b){const a=this.f,c=a.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";a.Ga();this.Wa&&(c.style.display="",this.Wa=!1)}Jb(b){const a=b.url;b=b.filename;const c=document.createElement("a"),
d=document.body;c.textContent=b;c.href=a;c.download=b;d.appendChild(c);c.click();d.removeChild(c)}async Ob(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async Hb(b){return await self.C3_GetSvgImageSize(b.blob)}async yb(b){await w(b.url)}sa(){var b=[...this.xa];this.xa.clear();if(!this.ac)for(const a of b)(b=a.play())&&
b.catch(()=>{this.cc.has(a)||this.xa.add(a)})}Ib(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Cb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var a=this.s;a.style.display="";a.style.left=b.left-1+"px";a.style.top=b.top-1+"px";a.style.width=b.width+2+"px";a.style.height=b.height+2+"px";a.textContent=b.name}else this.s&&(this.s.style.display="none")}Pb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Na(b){window.c3_postToMessagePort&&
(b.from="runtime",window.c3_postToMessagePort(b))}xb(b,a){return this.f.ib(this.J,{name:b,params:a})}ka(b){alert(b.message)}})}"use strict";async function O(f){if(f.Zb)throw Error("already initialised");f.Zb=!0;var g=f.$.ha("dispatchworker.js");f.ta=await f.$.ca(g,f.c,{name:"DispatchWorker"});g=new MessageChannel;f.ua=g.port1;f.ta.postMessage({type:"_init","in-port":g.port2},[g.port2]);f.ya=await Q(f)}function P(f){return[f.ua,f.ya]}
async function Q(f){const g=f.Xa.length;var e=f.$.ha("jobworker.js");e=await f.$.ca(e,f.c,{name:"JobWorker"+g});const k=new MessageChannel,m=new MessageChannel;f.ta.postMessage({type:"_addJobWorker",port:k.port1},[k.port1]);e.postMessage({type:"init",number:g,"dispatch-port":k.port2,"output-port":m.port2},[k.port2,m.port2]);f.Xa.push(e);return m.port1}
self.hb=class{constructor(f){this.$=f;this.c=f.c;this.c="preview"===f.b?this.c+"c3/workers/":this.c+f.aa;this.bc=Math.min(navigator.hardwareConcurrency||2,16);this.ta=null;this.Xa=[];this.ya=this.ua=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.v({oc:!0,pc:"workermain.js",D:["scripts/c3runtime.js"],R:[],ab:"",bb:"module",lc:"scripts/",Ba:[],$a:"html5"}));"use strict";
async function R(f,g){g=g.type;let e=!0;0===g?e=await S():1===g&&(e=await T());n(f,"permission-result",{type:g,result:e})}async function S(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request orientation permission: ",f),!1}}
async function T(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(f){return console.warn("[Touch] Failed to request motion permission: ",f),!1}}self.v.F(class extends self.G{constructor(f){super(f,"touch");H(this,"request-permission",g=>R(this,g))}});"use strict";
function U(f){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(g=>n(f,"sw-message",g.data))}
function V(f){f=f.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(f).catch(g=>console.warn("[Construct 3] Failed to lock orientation: ",g));else try{let g=!1;screen.lockOrientation?g=screen.lockOrientation(f):screen.webkitLockOrientation?g=screen.webkitLockOrientation(f):screen.mozLockOrientation?g=screen.mozLockOrientation(f):screen.msLockOrientation&&(g=screen.msLockOrientation(f));g||console.warn("[Construct 3] Failed to lock orientation")}catch(g){console.warn("[Construct 3] Failed to lock orientation: ",
g)}}
self.v.F(class extends self.G{constructor(f){super(f,"browser");this.b="";I(this,[["get-initial-state",g=>this.na(g)],["ready-for-sw-messages",()=>U(this)],["alert",g=>this.ka(g)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",g=>this.qa(g)],["vibrate",g=>{navigator.vibrate&&navigator.vibrate(g.pattern)}],["lock-orientation",g=>V(g)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(g){}}],["navigate",g=>{var e=g.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===e)window.forward();else if("home"===e)window.home();else if("reload"===e)location.reload();
else if("url"===e){e=g.url;var k=g.target;g=g.exportType;"windows-uwp"===g&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===g?window.open(e,"_blank"):this.tc||(2===k?window.top.location=e:1===k?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=g.url,k=g.tag,"windows-uwp"===g.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,k))}],["request-fullscreen",g=>{{const e={navigationUI:"auto"};g=g.navUI;1===g?e.navigationUI="hide":2===g&&(e.navigationUI="show");g=document.documentElement;g.requestFullscreen?g.requestFullscreen(e):g.mozRequestFullScreen?g.mozRequestFullScreen(e):g.msRequestFullscreen?g.msRequestFullscreen(e):g.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):
g.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",g=>{location.hash=g.hash}]]);window.addEventListener("online",()=>{n(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{n(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",
()=>{n(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{n(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",g=>{g.handled=!0;n(this,"backbutton")})}na(f){this.b=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,
windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}ka(f){alert(f.message)}qa(f){f=f.isFocus;if("nwjs"===this.b){const g="nwjs"===this.b?nw.Window.get():null;f?g.focus():g.blur()}else f?window.focus():window.blur()}});"use strict";
{function f(e){e.stopPropagation()}function g(e){13!==e.which&&27!==e.which&&e.stopPropagation()}self.v.F(class extends self.eb{constructor(e){super(e,"text-input");M(this,"scroll-to-bottom",k=>this.Sb(k))}Ea(e,k){let m;const t=k.type;"textarea"===t?(m=document.createElement("textarea"),m.style.resize="none"):(m=document.createElement("input"),m.type=t);m.style.position="absolute";m.autocomplete="off";m.addEventListener("touchstart",f);m.addEventListener("touchmove",f);m.addEventListener("touchend",
f);m.addEventListener("mousedown",f);m.addEventListener("mouseup",f);m.addEventListener("keydown",g);m.addEventListener("keyup",g);m.addEventListener("click",w=>{w.stopPropagation();N(this,"click",e)});m.addEventListener("dblclick",w=>{w.stopPropagation();N(this,"dblclick",e)});m.addEventListener("input",()=>L(this,"change",e,{text:m.value}));k.id&&(m.id=k.id);this.fa(m,k);return m}fa(e,k){e.value=k.text;e.placeholder=k.placeholder;e.title=k.title;e.disabled=!k.isEnabled;e.readOnly=k.isReadOnly;e.spellcheck=
k.spellCheck;k=k.maxLength;0>k?e.removeAttribute("maxlength"):e.setAttribute("maxlength",k)}Sb(e){e.scrollTop=e.scrollHeight}})}"use strict";
async function W(f){if(!f.u)try{f.u=await navigator.wakeLock.request("screen"),f.u.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");f.u=null;n(f,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),n(f,"wake-lock-acquired")}catch(g){console.warn("[Construct 3] Failed to acquire screen wake lock: ",g),n(f,"wake-lock-error")}}
function X(){var f=document.body;const g=f.style;g.setProperty("--temp-sai-top","env(safe-area-inset-top)");g.setProperty("--temp-sai-right","env(safe-area-inset-right)");g.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");g.setProperty("--temp-sai-left","env(safe-area-inset-left)");f=getComputedStyle(f);f=[f.getPropertyValue("--temp-sai-top"),f.getPropertyValue("--temp-sai-right"),f.getPropertyValue("--temp-sai-bottom"),f.getPropertyValue("--temp-sai-left")].map(e=>{e=parseInt(e,10);
return isFinite(e)?e:0});g.removeProperty("--temp-sai-top");g.removeProperty("--temp-sai-right");g.removeProperty("--temp-sai-bottom");g.removeProperty("--temp-sai-left");return f}
self.v.F(class extends self.G{constructor(f){super(f,"platform-info");I(this,[["get-initial-state",()=>this.na()],["request-wake-lock",()=>W(this)],["release-wake-lock",()=>{this.u&&(this.u.release(),this.u=null)}]]);window.addEventListener("resize",()=>{n(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:X()})});this.u=null}na(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:X(),supportsWakeLock:!!navigator.wakeLock}}});