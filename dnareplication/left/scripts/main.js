function k(b,a,c,d){b.i.pa(b.R,a,c,d,void 0)}function p(b,a,c,d){b.i.v?k(b,a,c,d):b.i.vb()._OnMessageFromDOM({type:"event",component:b.R,handler:a,dispatchOpts:d||null,data:c,responseId:null})}function q(b,a,c){b.i.h(b.R,a,c)}function r(b,a){for(const [c,d]of a)q(b,c,d)}window.ba=class{constructor(b,a){this.i=b;this.R=a}Ia(){}};window.mb=class{constructor(b){this.Ua=b;this.Hb=5;this.L=-1;this.ha=-Infinity;this.Mb=()=>{this.L=-1;this.ha=Date.now();this.S=!0;this.Ua();this.S=!1};this.Va=this.S=!1}};
"use strict";function aa(b,a){const c=a.elementId,d=b.Ka(c,a);b.s.set(c,d);d.style.boxSizing="border-box";a.isVisible||(d.style.display="none");d.addEventListener("focus",()=>{t(b,"elem-focused",c)});d.addEventListener("blur",()=>{t(b,"elem-blurred",c)});b.fa&&document.body.appendChild(d)}function u(b,a,c){q(b,a,d=>{const e=b.s.get(d.elementId);return c(e,d)})}function t(b,a,c,d){d||(d={});d.elementId=c;k(b,a,d)}function v(b,a,c){var d;d||(d={});d.elementId=c;p(b,a,d)}
window.fb=class extends self.ba{constructor(b){super(b,"text-input");this.s=new Map;this.fa=!0;r(this,[["create",a=>aa(this,a)],["destroy",a=>{a=a.elementId;const c=this.s.get(a);this.fa&&c.parentElement.removeChild(c);this.s.delete(a)}],["set-visible",a=>{this.fa&&(this.s.get(a.elementId).style.display=a.isVisible?"":"none")}],["update-position",a=>{if(this.fa){var c=this.s.get(a.elementId);c.style.left=a.left+"px";c.style.top=a.top+"px";c.style.width=a.width+"px";c.style.height=a.height+"px";a=
a.fontSize;null!==a&&(c.style.fontSize=a+"em")}}],["update-state",a=>{const c=this.s.get(a.elementId);this.qa(c,a)}],["focus",a=>this.ua(a)],["set-css-style",a=>{const c=this.s.get(a.elementId),d=a.prop;a=a.val;d.startsWith("--")?c.style.setProperty(d,a):c.style[d]=a}],["set-attribute",a=>{this.s.get(a.elementId).setAttribute(a.name,a.val)}],["remove-attribute",a=>{this.s.get(a.elementId).removeAttribute(a.name)}]]);u(this,"get-element",a=>a)}Ka(){throw Error("required override");}qa(){throw Error("required override");
}ua(b){var a=this.s.get(b.elementId);b.focus?a.focus():a.blur()}};"use strict";const w=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),x=/android/i.test(navigator.userAgent);let y=0;
function z(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Rb?new Promise(c=>{const d="c3_resolve_"+y;++y;self[d]=c;a.textContent=b.Vb+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((c,d)=>{a.onload=c;a.onerror=d;a.src=b;document.head.appendChild(a)})}let A=!1,ca=!1;function da(){if(!A){try{new Worker("blob://",{get type(){ca=!0}})}catch(b){}A=!0}return ca}let B=new Audio;
const ea={"audio/webm; codecs=opus":!!B.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!B.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!B.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!B.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!B.canPlayType("audio/mp4"),"audio/mpeg":!!B.canPlayType("audio/mpeg")};B=null;async function fa(b){b=await ha(b);return(new TextDecoder("utf-8")).decode(b)}
function ha(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsArrayBuffer(b)})}const C=[];let E=0;window.RealFile=window.File;const F=[],G=new Map,H=new Map;let ia=0;const ja=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");ja.push(b)};const ka=new Set(["cordova","playable-ad","instant-games"]);let la=!1;
window.D=class b{constructor(a){this.v=a.Xb;this.V=null;this.m="";this.J=a.Ub;this.$={};this.Ca=this.M=null;this.ga=[];this.j=this.Y=null;this.Za=!1;this.T=null;this.I=-1;this.Lb=()=>this.Cb();this.bb=[];this.g=a.cb;this.Aa="file"===location.protocol.substr(0,4);!this.v||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&da()||(this.v=!1);if("playable-ad"===this.g||"instant-games"===this.g)this.v=!1;if("cordova"===this.g&&this.v)if(x){const c=/Chrome\/(\d+)/i.exec(navigator.userAgent);
c&&90<=parseInt(c[1],10)||(this.v=!1)}else this.v=!1;this.ia=this.B=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("runtime","cordova-fetch-local-file",c=>this.yb(c));this.h("runtime","create-job-worker",()=>this.zb());"cordova"===this.g?document.addEventListener("deviceready",()=>this.Oa(a)):this.Oa(a)}jb(){return w&&
"cordova"===this.g}oa(){const a=navigator.userAgent;return w&&ka.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}hb(){return x}La(){return x&&ka.has(this.g)}async Oa(a){"macos-wkwebview"===this.g&&this.wa({type:"ready"});if("playable-ad"===this.g){this.B=self.c3_base64files;this.ia={};await this.rb();for(let d=0,e=a.N.length;d<e;++d){var c=a.N[d];this.ia.hasOwnProperty(c)?a.N[d]={Rb:!0,Vb:this.ia[c]}:this.B.hasOwnProperty(c)&&(a.N[d]=URL.createObjectURL(this.B[c]))}}a.Tb?this.m=
a.Tb:(c=location.origin,this.m=("null"===c?"file:///":c)+location.pathname,c=this.m.lastIndexOf("/"),-1!==c&&(this.m=this.m.substr(0,c+1)));a.Zb&&(this.$=a.Zb);c=new MessageChannel;this.V=c.port1;this.V.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Bb(d));this.T=new self.kb(this);await ma(this.T);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,
e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.v?await this.xb(a,c.port2):await this.wb(a,c.port2)}sa(a){a=this.$.hasOwnProperty(a)?this.$[a]:a.endsWith("/workermain.js")&&this.$.hasOwnProperty("workermain.js")?this.$["workermain.js"]:"playable-ad"===this.g&&this.B.hasOwnProperty(a)?this.B[a]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async na(a,c,d){if(a.startsWith("blob:"))return new Worker(a,d);if("cordova"===
this.g&&this.Aa)return a=await this.ma(d.Qb?a:this.J+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}A(){return Math.max(window.innerWidth,1)}u(){return Math.max(window.innerHeight,1)}Na(a){var c=this.m,d=location.href,e=this.A(),f=this.u(),g=window.devicePixelRatio,
h=b.O(),l=a.ec,m=window.cr_previewImageBlobs||this.B,n=window.cr_previewProjectFileBlobs,ya=window.cr_previewProjectFiles,za=window.cc||"";a=a.cb;var Aa=(new URLSearchParams(self.location.search)).has("debug"),K=this.T;return{runtimeBaseUrl:c,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:l,previewImageBlobs:m,previewProjectFileBlobs:n,previewProjectFileSWUrls:ya,swClientId:za,exportType:a,isDebug:Aa,ife:!!self.dc,jobScheduler:{inputPort:K.za,outputPort:K.Ea,
maxNumWorkers:K.Jb},supportedAudioFormats:ea,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.J+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.J+"opus.wasm.wasm",isFileProtocol:this.Aa,isiOSCordova:this.jb(),isiOSWebView:this.oa(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async xb(a,c){const d=this.sa(a.Yb);"preview"===this.g?(this.M=new Worker("previewworker.js",{type:"module",name:"Runtime"}),await new Promise((h,l)=>{const m=n=>{this.M.removeEventListener("message",
m);n.data&&"ok"===n.data.type?h():l()};this.M.addEventListener("message",m);this.M.postMessage({type:"construct-worker-init","import":(new URL(d,this.m)).toString()})})):this.M=await this.na(d,this.m,{type:"module",name:"Runtime",Qb:!0});this.j=document.createElement("canvas");this.j.style.display="none";const e=this.j.transferControlToOffscreen();document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let f=a.Ha||[],g=a.N;f=await Promise.all(f.map(h=>
this.G(h)));g=await Promise.all(g.map(h=>this.G(h)));if("cordova"===this.g)for(let h=0,l=a.la.length;h<l;++h){const m=a.la[h],n=m[0];if(n===a.Ga||"scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))m[1]=await this.G(n)}this.M.postMessage(Object.assign(this.Na(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:e,workerDependencyScripts:f,engineScripts:g,projectScripts:a.la,mainProjectScript:a.Ga,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,e,...na(this.T)]);this.ga=F.map(h=>
new h(this));this.Ma();oa(this.Y);self.c3_callFunction=(h,l)=>{var m=this.Y;return m.i.lb(m.R,{name:h,params:l})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.pa("runtime","go-to-last-error-script"))}async wb(a,c){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.ga=F.map(g=>new g(this));this.Ma();var d=a.N.map(g=>"string"===typeof g?(new URL(g,
this.m)).toString():g);Array.isArray(a.Ha)&&d.unshift(...a.Ha);d=await Promise.all(d.map(g=>this.G(g)));await Promise.all(d.map(g=>z(g)));d=self.C3_ProjectScriptsStatus;const e=a.Ga,f=a.la;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.G(h),await z(h),"preview"!==this.g||d[g]||this.Qa(g,"main script did not run to completion")}catch(l){this.Qa(g,l)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.G(h),await z(h);"preview"===this.g&&"object"!==typeof self.$b.ac?
(this.da(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Na(a),{isInWorker:!1,messagePort:c,canvas:this.j,runOnStartupFunctions:ja}),oa(this.Y),this.Pa(),this.Ca=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Ca,a))}Qa(a,c){this.da();console.error(`[Preview] Failed to load project main script (${a}): `,
c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Pa(){this.da()}da(){const a=window.Ob;a&&(a.parentElement.removeChild(a),window.Ob=null)}async zb(){const a=await pa(this.T);return{outputPort:a,transferables:[a]}}vb(){if(this.v)throw Error("not available in worker mode");return this.Ca}pa(a,c,d,e,f){this.V.postMessage({type:"event",component:a,handler:c,dispatchOpts:e||null,data:d,responseId:null},
f)}lb(a,c){const d=ia++,e=new Promise((f,g)=>{H.set(d,{resolve:f,reject:g})});this.V.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const c=a.type;if("event"===c)return this.Ab(a);if("result"===c)this.Db(a);else if("runtime-ready"===c)this.Eb();else if("alert-error"===c)this.da(),alert(a.message);else if("creating-runtime"===c)this.Pa();else throw Error(`unknown message '${c}'`);}Ab(a){const c=a.component,
d=a.handler,e=a.data,f=a.responseId;if(a=G.get(c))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${c}' handler '${d}':`,h);null!==f&&this.ca(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.ca(f,!0,h)).catch(h=>{console.error(`Rejection from '${c}' handler '${d}':`,h);this.ca(f,!1,""+h)}):this.ca(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}ca(a,c,d){let e;d&&d.transferables&&
(e=d.transferables);this.V.postMessage({type:"result",responseId:a,isOk:c,result:d},e)}Db(a){const c=a.responseId,d=a.isOk;a=a.result;const e=H.get(c);d?e.resolve(a):e.reject(a);H.delete(c)}h(a,c,d){let e=G.get(a);e||(e=new Map,G.set(a,e));if(e.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);e.set(c,d)}static aa(a){if(F.includes(a))throw Error("DOM handler already added");F.push(a)}Ma(){for(const a of this.ga)if("runtime"===a.R){this.Y=a;return}throw Error("cannot find runtime DOM handler");
}Bb(a){this.pa("debugger","message",a)}Eb(){for(const a of this.ga)a.Ia()}static O(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||la)}static ea(a){la=!!a}Ra(){-1===this.I&&this.bb.length&&(this.I=requestAnimationFrame(this.Lb))}pb(){-1!==this.I&&(cancelAnimationFrame(this.I),this.I=-1)}Cb(){this.I=-1;for(const a of this.bb)a();this.Ra()}va(){this.Y.va()}nb(){this.Za=!0}gb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===
a.substr(0,5)}ib(a){return!this.gb(a)}async G(a){return"cordova"===this.g&&(a.startsWith("file:")||this.Aa&&this.ib(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),a=await this.ma(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async yb(a){const c=a.filename;switch(a.as){case "text":return await this.eb(c);case "buffer":return await this.ma(c);default:throw Error("unsupported type");}}Ja(a){const c=window.cordova.file.applicationDirectory+"www/"+a;return new Promise((d,
e)=>{window.resolveLocalFileSystemURL(c,f=>{f.file(d,e)},e)})}async eb(a){a=await this.Ja(a);return await fa(a)}ra(){if(C.length&&!(8<=E)){E++;var a=C.shift();this.sb(a.filename,a.Wb,a.Pb)}}ma(a){return new Promise((c,d)=>{C.push({filename:a,Wb:e=>{E--;this.ra();c(e)},Pb:e=>{E--;this.ra();d(e)}});this.ra()})}async sb(a,c,d){try{const e=await this.Ja(a),f=await ha(e);c(f)}catch(e){d(e)}}wa(a){if("windows-webview2"===this.g)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===
this.g)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async rb(){const a=[];for(const [c,d]of Object.entries(this.B))a.push(this.qb(c,d));await Promise.all(a)}async qb(a,c){if("object"===typeof c)this.B[a]=new Blob([c.str],{type:c.type}),this.ia[a]=c.str;else{let d=await this.ub(c);d||(d=this.tb(c));this.B[a]=d}}async ub(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}tb(a){a=this.Fb(a);return this.ob(a.data,a.Sb)}Fb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const e=c[2];d="base64"===c[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Sb:a,data:d}}ob(a,c){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,l;for(l=h=0;h<e;++h)g[h]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;for(d&=
3;d--;)f[l]=a.charCodeAt(l),++l;return new Blob([f],{type:c})}};"use strict";const I=self.D;function qa(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const ra=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),J={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},sa={dispatchUserScriptEvent:!0},L={dispatchRuntimeEvent:!0};
function ta(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>c(e);d.rel="stylesheet";d.href=b;document.head.appendChild(d)})}function ua(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>c(e);d.src=b})}async function M(b){b=URL.createObjectURL(b);try{return await ua(b)}finally{URL.revokeObjectURL(b)}}
function va(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsText(b)})}
async function wa(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await M(b);var d=await va(b);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await M(b)}e.setAttribute("width",a+"px");e.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await M(b)}
function N(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const xa=new Set(["input","textarea","datalist","select"]),Ba=new Set(["canvas","body","html"]);function O(b){Ba.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function Ca(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await M(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,c,d,e){b=await wa(b,a,c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(b,0,0,a,c);return f};
let P=!1;document.addEventListener("pause",()=>P=!0);document.addEventListener("resume",()=>P=!1);function oa(b){b.Xa=!0;b.Ba=b.i.A();b.U=b.i.u()}async function Da(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function Ea(b){return await self.C3_GetSvgImageSize(b.blob)}
function Fa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}function Ga(b){self.setTimeout(()=>{b.Wa=!0},1E3);"cordova"===b.i.g?(document.addEventListener("pause",()=>Q(b,!0)),document.addEventListener("resume",()=>Q(b,!1))):document.addEventListener("visibilitychange",()=>Q(b,document.hidden));return{isSuspended:!(!document.hidden&&!P)}}
function Ha(b){b.Ta||(b.Ta=!0,window.addEventListener("deviceorientation",a=>{b.l||k(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},J)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||k(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},J)}))}
function Ia(b){b.Sa||(b.Sa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var c=null,d=a.acceleration;d&&(c={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});k(b,"devicemotion",{acceleration:c,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},J)}}))}async function Ja(b){await ta(b.url)}
function Ka(b,a){b.Ya=a.message;-1===b.ya&&(b.ya=setTimeout(()=>{b.ya=-1;const c=document.getElementById("exportToVideoMessage");c&&(c.textContent=b.Ya)},250))}function R(b){if(!b.l){var a=I.O();a&&"any"!==b.Fa&&La(b);k(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.A(),innerHeight:b.u()})}}function S(b,a){console.warn("[Construct] Fullscreen request failed: ",a);k(b,"fullscreenerror",{isFullscreen:I.O(),innerWidth:b.A(),innerHeight:b.u()})}
function Q(b,a){a?b.i.pb():b.i.Ra();k(b,"visibilitychange",{hidden:a})}function Ma(b,a,c){"Backspace"===c.key&&O(c);if(!b.l){var d=ra.get(c.code)||c.code;p(b,a,{code:d,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},J)}}
function T(b,a,c,d){b.l||qa(c)||p(b,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY+b.o,pageX:c.pageX,pageY:c.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},d)}function U(b){window!==window.top&&window.focus();Na(b.target)&&document.activeElement&&!Na(document.activeElement)&&document.activeElement.blur()}
function V(b,a,c){if(!b.l){if(b.X&&"pointermove"!==a){var d=b.X;d.S||(-1!==d.L&&(self.clearTimeout(d.L),d.L=-1),d.ha=Date.now())}d=0;"mouse"===c.pointerType&&(d=b.W);p(b,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.o,pageX:c.pageX,pageY:c.pageY+b.o,movementX:(c.movementX||0)+b.ja,movementY:(c.movementY||0)+b.ka,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||
0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},J);b.ja=0;b.ka=0;"mouse"===c.pointerType&&(d="mousemove","pointerdown"===a?d="mousedown":"pointerup"===a&&(d="mouseup"),T(b,d,c,sa),b.W=c.buttons)}}
function W(b,a,c){if(!b.l&&!qa(c)){var d=b.W;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");p(b,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.o,pageX:c.pageX,pageY:c.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},J);b.W=c.buttons;T(b,c.type,c,sa)}}
function X(b,a,c){if(!b.l)for(let d=0,e=c.changedTouches.length;d<e;++d){const f=c.changedTouches[d];p(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.o,pageX:f.pageX,pageY:f.pageY+b.o,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:c.timeStamp},
J)}}function Y(b,a,c){document.body.style.transform="";b.o=0;if(0<c){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-c)/2,a>c&&(a=c),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.o=a))}}function Oa(b,a,c,d){const e=b.A(),f=b.u();b.K=-1;e!=a||f!=c?k(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:I.O()}):10>d&&Pa(b,e,f,d+1)}
function Pa(b,a,c,d){-1!==b.K&&clearTimeout(b.K);b.K=setTimeout(()=>Oa(b,a,c,d),48)}
function La(b){b=b.Fa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Na(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
I.aa(class extends self.ba{constructor(b){super(b,"runtime");this.$a=!0;this.Xa=!1;this.K=-1;this.Fa="any";this.Sa=this.Ta=!1;this.F=null;this.l=!1;this.Ya="";this.ya=-1;this.H=this.X=null;this.ka=this.ja=0;this.Wa=!1;this.Ba=b.A();this.U=b.u();this.o=this.Z=0;b.h("canvas","update-size",d=>{var e=this.i;e.Za||(e=e.j,e.style.width=d.styleWidth+"px",e.style.height=d.styleHeight+"px",e.style.marginLeft=d.marginLeft+"px",e.style.marginTop=d.marginTop+"px",document.documentElement.style.setProperty("--construct-scale",
d.displayScale),this.$a&&(e.style.display="",this.$a=!1))});b.h("runtime","invoke-download",d=>{const e=d.url;d=d.filename;const f=document.createElement("a"),g=document.body;f.textContent=d;f.href=e;f.download=d;g.appendChild(f);f.click();g.removeChild(f)});b.h("runtime","raster-svg-image",d=>Da(d));b.h("runtime","get-svg-image-size",d=>Ea(d));b.h("runtime","set-target-orientation",d=>{this.Fa=d.targetOrientation});b.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.h("runtime",
"post-to-debugger",d=>Fa(d));b.h("runtime","go-to-script",d=>Fa(d));b.h("runtime","before-start-ticking",()=>Ga(this));b.h("runtime","debug-highlight",d=>{if(d.show){this.F||(this.F=document.createElement("div"),this.F.id="inspectOutline",document.body.appendChild(this.F));var e=this.F;e.style.display="";e.style.left=d.left-1+"px";e.style.top=d.top-1+"px";e.style.width=d.width+2+"px";e.style.height=d.height+2+"px";e.textContent=d.name}else this.F&&(this.F.style.display="none")});b.h("runtime","enable-device-orientation",
()=>Ha(this));b.h("runtime","enable-device-motion",()=>Ia(this));b.h("runtime","add-stylesheet",d=>Ja(d));b.h("runtime","script-create-worker",d=>{const e=d.port2;(new Worker(d.url,d.opts)).postMessage({type:"construct-worker-init",port2:e},[e])});b.h("runtime","alert",d=>this.ta(d));b.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.h("runtime","set-exporting-to-video",d=>{this.l=!0;const e=document.createElement("h1");
e.id="exportToVideoMessage";e.textContent=d.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.nb()});b.h("runtime","export-to-video-progress",d=>Ka(this,d));b.h("runtime","exported-to-video",d=>{window.Nb({type:"exported-video",blob:d.blob,time:d.time})});b.h("runtime","exported-to-image-sequence",d=>{window.Nb({type:"exported-image-sequence",blobArr:d.blobArr,time:d.time,gif:d.gif})});const a=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",d=>{const e=d.target;a.has(e.tagName.toLowerCase())||N(e)||d.preventDefault()});const c=b.j;window.addEventListener("selectstart",O);window.addEventListener("gesturehold",O);c.addEventListener("selectstart",O);c.addEventListener("gesturehold",O);window.addEventListener("touchstart",O,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",O,{passive:!1}),c.addEventListener("pointerdown",O)):c.addEventListener("touchstart",O);this.W=
0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",Ca,{passive:!1});window.addEventListener("wheel",Ca,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l&&this.Xa){var d=this.A();var e=this.u();if(this.i.La()){if(this.Wa){if(this.Ba===d&&e<this.U){this.Z=this.U-e;Y(this,this.U,this.Z);d=void 0;break a}0<this.Z&&(this.Z=0,Y(this,e,this.Z))}this.Ba=d;this.U=e}k(this,"window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,
isFullscreen:I.O()});this.i.oa()&&(-1!==this.K&&clearTimeout(this.K),Oa(this,d,e,0))}d=void 0}return d});window.addEventListener("fullscreenchange",()=>R(this));window.addEventListener("webkitfullscreenchange",()=>R(this));window.addEventListener("mozfullscreenchange",()=>R(this));window.addEventListener("fullscreenerror",d=>S(this,d));window.addEventListener("webkitfullscreenerror",d=>S(this,d));window.addEventListener("mozfullscreenerror",d=>S(this,d));if(b.oa())if(window.visualViewport){let d=
Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>d&&(document.scrollingElement.scrollTop=0);d=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var d=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?e.has(f.type.toLowerCase()||"text"):N(f)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>{"entered-fullscreen"===
d?(I.ea(!0),R(this)):"exited-fullscreen"===d?(I.ea(!1),R(this)):console.warn("Unknown wrapper message: ",d)};this.Da=new Set;this.Kb=new WeakSet;this.Ib=!1}Ia(){window.addEventListener("focus",()=>{k(this,"window-focus",null,L)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(c){a=!1}k(this,"window-blur",{parentHasFocus:a},L);this.W=0});window.addEventListener("focusin",a=>{a=a.target;(xa.has(a.tagName.toLowerCase())||N(a))&&k(this,"keyboard-blur",
null,L)});window.addEventListener("keydown",a=>Ma(this,"keydown",a));window.addEventListener("keyup",a=>Ma(this,"keyup",a));window.addEventListener("dblclick",a=>T(this,"dblclick",a,J));window.addEventListener("wheel",a=>{this.l||k(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.o,pageX:a.pageX,pageY:a.pageY+this.o,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},J)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{U(a);
V(this,"pointerdown",a)}),this.i.v&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.X=new self.mb(()=>{V(this,"pointermove",this.H);this.H=null}),this.X.Va=!0,window.addEventListener("pointerrawupdate",a=>{this.H&&(this.ja+=this.H.movementX||0,this.ka+=this.H.movementY||0);this.H=a;a=this.X;if(-1===a.L){var c=Date.now(),d=c-a.ha,e=a.Hb;d>=e&&a.Va?(a.ha=c,a.S=!0,a.Ua(),a.S=!1):a.L=self.setTimeout(a.Mb,Math.max(e-d,4))}})):window.addEventListener("pointermove",a=>V(this,"pointermove",
a)),window.addEventListener("pointerup",a=>V(this,"pointerup",a)),window.addEventListener("pointercancel",a=>V(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{U(a);W(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>W(this,"pointermove",a)),window.addEventListener("mouseup",a=>W(this,"pointerup",a)),window.addEventListener("touchstart",a=>{U(a);X(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>X(this,"pointermove",a)),window.addEventListener("touchend",
a=>X(this,"pointerup",a)),window.addEventListener("touchcancel",a=>X(this,"pointercancel",a)));const b=()=>this.va();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.hb()&&!this.i.La()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Y(this,this.u(),
navigator.virtualKeyboard.boundingRect.height)}))}A(){return this.i.A()}u(){return this.i.u()}va(){var b=[...this.Da];this.Da.clear();if(!this.Ib)for(const a of b)(b=a.play())&&b.catch(()=>{this.Kb.has(a)||this.Da.add(a)})}ta(b){alert(b.message)}});"use strict";
async function ma(b){if(b.Gb)throw Error("already initialised");b.Gb=!0;var a=b.C.sa(("playable-ad"===b.C.g?b.C.J:"")+"dispatchworker.js");b.xa=await b.C.na(a,b.P,{name:"DispatchWorker"});a=new MessageChannel;b.za=a.port1;b.xa.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.Ea=await pa(b)}function na(b){return[b.za,b.Ea]}
async function pa(b){const a=b.ab.length;var c=b.C.sa(("playable-ad"===b.C.g?b.C.J:"")+"jobworker.js");c=await b.C.na(c,b.P,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;b.xa.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);c.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);b.ab.push(c);return e.port1}
self.kb=class{constructor(b){this.C=b;this.P=b.m;this.P="preview"===b.g?this.P+"workers/":this.P+b.J;this.Jb=Math.min(navigator.hardwareConcurrency||2,16);this.xa=null;this.ab=[];this.Ea=this.za=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.D({Xb:!1,Yb:"workermain.js",N:["scripts/c3runtime.js"],la:[],Ga:"",Ub:"scripts/",Ha:[],cb:"html5"}));"use strict";
async function Qa(b,a){a=a.type;let c=!0;0===a?c=await Ra():1===a&&(c=await Sa());k(b,"permission-result",{type:a,result:c})}async function Ra(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}
async function Sa(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}self.D.aa(class extends self.ba{constructor(b){super(b,"touch");q(this,"request-permission",a=>Qa(this,a))}});"use strict";function Ta(){}
function Ua(b){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(a=>k(b,"sw-message",a.data))}
function Va(b){b=b.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}
self.D.aa(class extends self.ba{constructor(b){super(b,"browser");this.g="";r(this,[["get-initial-state",a=>{this.g=a.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>
Ua(this)],["alert",a=>this.ta(a)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",a=>this.ua(a)],["vibrate",a=>{navigator.vibrate&&navigator.vibrate(a.pattern)}],["lock-orientation",a=>Va(a)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?
screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(a){}}],["navigate",a=>{var c=a.type;if("back"===c)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===c)window.history.forward();else if("reload"===c)location.reload();else if("url"===c){c=a.url;const d=a.target;a=a.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,
"_system"):"preview"===a||"windows-webview2"===a?window.open(c,"_blank"):this.bc||(2===d?window.top.location=c:1===d?window.parent.location=c:window.location=c)}else"new-window"===c&&(c=a.url,a=a.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):window.open(c,a))}],["request-fullscreen",a=>{if("windows-webview2"===this.g||"macos-wkwebview"===this.g)self.D.ea(!0),this.i.wa({type:"set-fullscreen",fullscreen:!0});else{const c={navigationUI:"auto"};a=a.navUI;1===
a?c.navigationUI="hide":2===a&&(c.navigationUI="show");a=document.documentElement;let d;a.requestFullscreen?d=a.requestFullscreen(c):a.mozRequestFullScreen?d=a.mozRequestFullScreen(c):a.msRequestFullscreen?d=a.msRequestFullscreen(c):a.webkitRequestFullScreen&&(d="undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen());d instanceof Promise&&d.catch(Ta)}}],["exit-fullscreen",()=>{if("windows-webview2"===this.g||"macos-wkwebview"===
this.g)self.D.ea(!1),this.i.wa({type:"set-fullscreen",fullscreen:!1});else{let a;document.exitFullscreen?a=document.exitFullscreen():document.mozCancelFullScreen?a=document.mozCancelFullScreen():document.msExitFullscreen?a=document.msExitFullscreen():document.webkitCancelFullScreen&&(a=document.webkitCancelFullScreen());a instanceof Promise&&a.catch(Ta)}}],["set-hash",a=>{location.hash=a.hash}],["set-document-css-style",a=>{const c=a.prop,d=a.value;var e=a.selector;a=a["is-all"];try{if(e)if(a)var f=
Array.from(document.querySelectorAll(e));else{var g=document.querySelector(e);f=g?[g]:[]}else f=[document.documentElement];e=f;for(const h of e)c.startsWith("--")?h.style.setProperty(c,d):h.style[c]=d}catch(h){console.warn("[Browser] Failed to set style: ",h)}}],["get-document-css-style",a=>{{const d=a.prop;a=a.selector;try{const e=document.querySelector(a);var c=e?{isOk:!0,result:window.getComputedStyle(e).getPropertyValue(d)}:{isOk:!1}}catch(e){console.warn("[Browser] Failed to get style: ",e),
c={isOk:!1}}}return c}]]);window.addEventListener("online",()=>{k(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{k(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{k(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{k(this,"backbutton")})}ta(b){alert(b.message)}ua(b){b=b.isFocus;if("nwjs"===this.g){const a="nwjs"===this.g?nw.Window.get():null;b?a.focus():a.blur()}else b?window.focus():window.blur()}});
"use strict";function Z(b){b.stopPropagation()}function Wa(b){13!==b.which&&27!==b.which&&b.stopPropagation()}
self.D.aa(class extends self.fb{constructor(b){super(b);u(this,"scroll-to-bottom",a=>{a.scrollTop=a.scrollHeight})}Ka(b,a){let c;const d=a.type;"textarea"===d?(c=document.createElement("textarea"),c.style.resize="none"):(c=document.createElement("input"),c.type=d);c.style.position="absolute";c.autocomplete="off";c.addEventListener("pointerdown",Z);c.addEventListener("pointermove",Z);c.addEventListener("pointerrawupdate",Z);c.addEventListener("pointerup",Z);c.addEventListener("mousedown",Z);c.addEventListener("mouseup",
Z);c.addEventListener("keydown",Wa);c.addEventListener("keyup",Wa);c.addEventListener("click",e=>{e.stopPropagation();v(this,"click",b)});c.addEventListener("dblclick",e=>{e.stopPropagation();v(this,"dblclick",b)});c.addEventListener("input",()=>t(this,"change",b,{text:c.value}));a.id&&(c.id=a.id);a.className&&(c.className=a.className);this.qa(c,a);return c}qa(b,a){b.value=a.text;b.placeholder=a.placeholder;b.title=a.title;b.disabled=!a.isEnabled;b.readOnly=a.isReadOnly;b.spellcheck=a.spellCheck;
a=a.maxLength;0>a?b.removeAttribute("maxlength"):b.setAttribute("maxlength",a)}});