(self.AMP=self.AMP||[]).push({n:"amp-iframe",v:"2011200012001",f:(function(AMP,_){
'use strict';var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],d=0;d<b.length;++d){var c=b[d];if(c&&c.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var q;a:{var ca={a:!0},r={};try{r.__proto__=ca;q=r.a;break a}catch(a){}q=!1}m=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m,v;function w(){return v?v:v=Promise.resolve(void 0)};function x(a,b){var d=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return d}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var y=self.AMP_CONFIG||{},z=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function A(a){if(!self.document||!self.document.head||self.location&&z.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var ea={thirdParty:y.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:y.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof y.thirdPartyFrameRegex?new RegExp(y.thirdPartyFrameRegex):y.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:y.cdnUrl||A("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:z,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:y.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:y.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:y.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:y.geoApiUrl||A("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var B=self.__AMP_LOG;function C(){if(!B.user)throw Error("failed to call initLogConstructor");return B.user}function D(){if(B.dev)return B.dev;throw Error("failed to call initLogConstructor");}function E(a,b,d,c,e){C().assert(a,b,d,c,e,void 0,void 0,void 0,void 0,void 0,void 0)};function F(a){return a||{}};var G;function fa(a,b){var d=a,c=b;var e=function(g){try{return c(g)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}};var f=ha();d.addEventListener("message",e,f?void 0:!1);return function(){d&&d.removeEventListener("message",e,f?void 0:!1);e=d=c=null}}function ha(){if(void 0!==G)return G;G=!1;try{var a={get capture(){G=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return G};function ia(){var a,b;this.promise=new Promise(function(d,c){a=d;b=c});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ja(a,b){var d=a.length-b.length;return 0<=d&&a.indexOf(b,d)==d};function ka(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function la(a){return a.closest?a.closest(".i-amphtml-overlay"):ka(a,function(b){var d=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector;return d?d.call(b,".i-amphtml-overlay"):!1})};function ma(a,b){try{return JSON.parse(a)}catch(d){return b&&b(d),null}};function na(a){if(!oa(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(d){return D().error("MESSAGING","Failed to parse message: "+a,d),null}}function oa(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function pa(a,b){return fa(a,b)};function H(){this.U=100;this.J=this.N=0;this.A=Object.create(null)}H.prototype.has=function(a){return!!this.A[a]};H.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.J,b.payload};H.prototype.put=function(a,b){this.has(a)||this.N++;this.A[a]={payload:b,access:this.J};if(!(this.N<=this.U)){D().warn("lru-cache","Trimming LRU cache");a=this.A;var d=this.J+1,c;for(c in a){var e=a[c].access;if(e<d){d=e;var f=c}}void 0!==f&&(delete a[f],this.N--)}};F({c:!0,v:!0,a:!0,ad:!0});var I,qa;
function ra(a){I||(I=self.document.createElement("a"),qa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new H));var b=qa,d=I;if(b&&b.has(a))a=b.get(a);else{d.href=a;d.protocol||(d.href=d.href);var c={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=c.hostname;c.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;b&&b.put(a,c);a=c}return a};function sa(a,b){for(var d=[],c=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?d.push(f):(c<e&&(a[c]=f),c++)}c<a.length&&(a.length=c)};var J,ta="Webkit webkit Moz moz ms O o".split(" ");function ua(a,b){var d=a.style;if("zIndex".startsWith("--"))d="zIndex";else{J||(J=Object.create(null));var c=J.zIndex;if(!c){c="zIndex";if(void 0===d.zIndex){var e;b:{for(e=0;e<ta.length;e++){var f=ta[e]+"ZIndex";if(void 0!==d[f]){e=f;break b}}e=""}void 0!==d[e]&&(c=e)}J.zIndex=c}d=c}d&&(d.startsWith("--")?a.style.setProperty(d,b):a.style[d]=b)};function va(a,b,d){var c=a.listeningFors;!c&&d&&(c=a.listeningFors=Object.create(null));a=c||null;if(!a)return a;var e=a[b];!e&&d&&(e=a[b]=[]);return e||null}function wa(a,b,d){var c=d?b.getAttribute("data-amp-3p-sentinel"):"amp";a=va(a,c,!0);for(c=0;c<a.length;c++){var e=a[c];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function xa(a){for(var b=F({sentinel:"unlisten"}),d=a.length-1;0<=d;d--){var c=a[d];if(!c.frame.contentWindow){a.splice(d,1);var e=c.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(g){g(b)})}}}
function ya(a){a.listeningFors||a.addEventListener("message",function(b){if(b.data){var d=za(b.data);if(d&&d.sentinel){var c=b.source;var e=va(a,d.sentinel);if(e){for(var f,g=0;g<e.length;g++){var k=e[g],n=k.frame.contentWindow;if(n){var h;if(!(h=c==n))b:{for(h=c;h&&h!=h.parent;h=h.parent)if(h==n){h=!0;break b}h=!1}if(h){f=k;break}}else setTimeout(xa,0,e)}c=f?f.events:null}else c=e;var u=c;if(u){var p=u[d.type];if(p)for(p=p.slice(),c=0;c<p.length;c++)(0,p[c])(d,b.source,b.origin,b)}}}})}
function K(a,b,d,c,e,f){function g(p,L,M,Ia){if("amp"==p.sentinel){if(L!=a.contentWindow)return;var Ja="null"==M&&f;if(n!=M&&!Ja)return}if(e||L==a.contentWindow)"unlisten"==p.sentinel?u():d(p,L,M,Ia)}var k=a.ownerDocument.defaultView;ya(k);c=wa(k,a,c);var n=ra(a.src).origin,h=c[b]||(c[b]=[]),u;h.push(g);return u=function(){if(g){var p=h.indexOf(g);-1<p&&h.splice(p,1);d=h=g=null}}}
function Aa(a,b,d,c,e){if(a.contentWindow)for(c.type=d,c.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=c,e&&(a="amp-"+JSON.stringify(c)),c=0;c<b.length;c++)e=b[c],e.win.postMessage(a,e.origin)}function za(a){"string"==typeof a&&(a="{"==a.charAt(0)?ma(a,function(b){D().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",b)})||null:oa(a)?na(a):null);return a}
function N(a,b){var d=this;this.h=a;this.L=!1;this.m=[];this.V=K(this.h,"send-intersections",function(c,e,f){d.m.some(function(g){return g.win==e})||d.m.push({win:e,origin:f});b(c,e,f)},this.L,this.L)}N.prototype.send=function(a,b){sa(this.m,function(d){return!d.win.parent});Aa(this.h,this.m,a,b,this.L)};N.prototype.destroy=function(){this.V();this.m.length=0};var O=[[300,250],[320,50],[300,50],[320,100]];function Ba(a,b,d){if(!(0==b&&0==d||0==a.width&&0==a.height)){b=a.left+b;d=a.top+d;var c=a.width;a=a.height;a={left:b,top:d,width:c,height:a,bottom:d+a,right:b+c,x:b,y:d}}return a};var Ca=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];Date.now();function Da(a,b){var d=this;this.T=a;this.D=null;this.O=new N(b,function(){d.D.observe(d.T.element)});this.D=new IntersectionObserver(function(c){d.O.send("intersection",F({changes:c.map(Ea)}))},{threshold:Ca})}Da.prototype.destroy=function(){this.D.disconnect();this.D=null;this.O.destroy();this.O=null};
function Ea(a){return{time:a.time,rootBounds:a.rootBounds,boundingClientRect:a.boundingClientRect,intersectionRect:a.intersectionRect,intersectionRatio:a.intersectionRatio}};function P(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Q(a,b)}function R(a,b){a=S(a);a=T(a);return Fa(a,b)?Q(a,b):null}function S(a){return a.nodeType?P((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function T(a){a=S(a);return a.isSingleDoc()?a.win:a}function Q(a,b){Fa(a,b);a=U(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function Ga(a){var b=U(a).consentPolicyManager;if(b){if(b.promise)return b.promise;Q(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function U(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Fa(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function Ha(){var a=new ia,b=a.promise,d=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:d,reject:a,context:null,ctor:null}};function Ka(a){if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var c=a.AMP_CONFIG[d];"number"===typeof c&&0<=c&&1>=c&&(b[d]=Math.random()<c)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],c=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){c=
c.getAttribute("content").split(",");for(var e=0;e<c.length;e++)-1!=d.indexOf(c[e])&&(b[c[e]]=!0)}Object.assign(b,La(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];c=a.location.originalHash||a.location.hash;a=Object.create(null);if(c)for(var f;f=da.exec(c);)e=x(f[1],f[1]),f=f[2]?x(f[2].replace(/\+/g," "),f[2]):"",a[e]=f;for(c=0;c<d.length;c++)e=a["e-"+d[c]],"1"==e&&(b[d[c]]=!0),"0"==e&&(b[d[c]]=!1)}}return!!b["iframe-messaging"]}
function La(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){D().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var d=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var c=0;c<d.length;c++)0!=d[c].length&&("-"==d[c][0]?a[d[c].substr(1)]=!1:a[d[c]]=!0);return a};function V(a){var b=Ga(T(a));if(b)return b;var d=S(a);return d.waitForBodyOpen().then(function(){var c=d.win;var e=d.win.document.head;if(e){var f={};e=e.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<e.length;g++){var k=e[g];k=k.getAttribute("custom-element")||k.getAttribute("custom-template");f[k]=!0}f=Object.keys(f)}else f=[];return f.includes("amp-consent")?P(c,"extensions").waitForExtension(c,"amp-consent"):w()}).then(function(){var c=d.win;if(c.__AMP_EXTENDED_ELEMENTS&&
c.__AMP_EXTENDED_ELEMENTS["amp-consent"]){c=T(a);var e=Ga(c);e?c=e:(c=U(c),c.consentPolicyManager=Ha(),c=c.consentPolicyManager.promise)}else c=null;return c})};function Ma(a,b){var d=b=void 0===b?"default":b;return V(a).then(function(c){return c?c.whenPolicyResolved(d):null})}function Na(a,b){var d=void 0===b?"default":b;return V(a).then(function(c){return c?c.getConsentStringInfo(d):null})}function Oa(a,b){var d=void 0===b?"default":b;return V(a).then(function(c){return c?c.getConsentMetadataInfo(d):null})};var Pa={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};var Qa="allowfullscreen allowpaymentrequest allowtransparency allow frameborder referrerpolicy scrolling tabindex title".split(" "),Ra=0;function W(a){a=AMP.BaseElement.call(this,a)||this;a.H=null;a.F=!1;a.M=!1;a.o=!1;a.S=!1;a.K=null;a.h=null;a.G=!1;a.C=null;a.l="";a.I=null;a.iframeSrc=null;a.B=null;a.j=null;a.R=!1;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;
if(t)t(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Sa=Object.getOwnPropertyDescriptor(X,Y);Sa&&Object.defineProperty(W,Y,Sa)}else W[Y]=X[Y];W.X=X.prototype;l=W.prototype;l.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
function Ta(a,b,d){var c=window.location.href,e=d=void 0===d?"":d;a=a.element;var f=R(a,"url"),g=f.parse(b),k=g.hostname,n=g.protocol;g=g.origin;E(f.isSecure(b)||"data:"==n,"Invalid <amp-iframe> src. Must start with https://. Found %s",a);var h=f.parse(c);E(!/\sallow-same-origin\s/i.test(" "+e+" ")||g!=h.origin&&"data:"!=n,"Origin of <amp-iframe> must not be equal to container %s if allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",
a);E(!(ja(k,"."+ea.thirdPartyFrameHost)||ja(k,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",b);return b}
function Ua(a){var b=a.element.getLayoutBox(),d=Math.min(600,.75*a.getViewport().getSize().height);E(b.top>=d,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/master/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",a.element,b.top,d)}
function Va(a,b){if(b){a=R(a.element,"url").parse(b);var d=a.hash;"data:"==a.protocol||d&&"#"!=d||(a=b.indexOf("#"),b=(-1==a?b:b.substring(0,a))+"#amp=1");return b}}l.preconnectCallback=function(a){this.iframeSrc&&P(this.win,"preconnect").url(this.getAmpDoc(),this.iframeSrc,a)};
l.buildCallback=function(){this.l=this.element.getAttribute("sandbox");var a;if(!(a=Va(this,this.element.getAttribute("src"))))if(a=this.element.getAttribute("srcdoc")){E(!(" "+this.l+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element);if("undefined"!==typeof TextEncoder)var b=(new TextEncoder("utf-8")).encode(a);else{a=unescape(encodeURIComponent(a));b=new Uint8Array(a.length);for(var d=0;d<a.length;d++){var c=a.charCodeAt(d);b[d]=
c}}a=btoa;d=Array(b.length);for(c=0;c<b.length;c++)d[c]=String.fromCharCode(b[c]);b=d.join("");a="data:text/html;charset=utf-8;base64,"+a(b)}else a=void 0;this.iframeSrc=Ta(this,a,this.l);this.H=this.getPlaceholder();this.F=!!this.H;(this.G=this.element.hasAttribute("resizable"))&&this.element.setAttribute("scrolling","no");this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0");a=this.element;"no"!=a.getAttribute("scrolling")&&(b=a.ownerDocument.createElement("i-amphtml-scroll-container"),
a.appendChild(b),a=b);this.B=a;Wa(this)};
l.onLayoutMeasure=function(){Xa(this);var a=this.element;a:{var b=a.getLayoutBox();var d=b.height;b=b.width;for(var c=0;c<O.length;c++){var e=O[c][0],f=O[c][1];if(!(f>d||e>b)&&20>=d-f&&20>=b-e){d=!0;break a}}d=!1}this.M=d;d=this.element;b=d.getLayoutBox();this.o=10<b.width||10<b.height?!1:!la(d);if(d=this.M){d=this.win;b=!1;c=0;do Pa[a.tagName]?(c++,b=!1):(e=(d.getComputedStyle(a)||Object.create(null)).position,"fixed"!=e&&"sticky"!=e||(b=!0)),a=a.parentElement;while(a&&"BODY"!=a.tagName);d=!(!b&&
1>=c)}this.S=d};function Xa(a){if(a.h){var b=a.getViewport().getLayoutRect(a.h),d=a.getLayoutBox();a.K=Ba(b,-d.left,-d.top)}}l.getIntersectionElementLayoutBox=function(){if(!this.h)return AMP.BaseElement.prototype.getIntersectionElementLayoutBox.call(this);var a=this.getLayoutBox();this.K||Xa(this);return Ba(this.K,a.left,a.top)};
l.layoutCallback=function(){var a=this;E(!this.S,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead.");this.F||Ua(this);this.G&&E(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element);if(!this.iframeSrc)return w();if(this.o&&!this.getAmpDoc().registerSingleton(1))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new"),
w();var b=this.element.ownerDocument.createElement("iframe");this.h=b;this.applyFillContent(b);b.name="amp_iframe"+Ra++;this.F&&ua(b,-1);this.propagateAttributes(Qa,b);var d=b.getAttribute("allow")||"";d=d.replace("autoplay","autoplay-disabled");b.setAttribute("allow",d);b.setAttribute("sandbox",this.l||"");b.src=this.iframeSrc;this.o||(this.C=new Da(this,b));b.onload=function(){b.readyState="complete";a.P();a.o&&(a.iframeSrc=null,P(a.win,"timer").promise(5E3).then(function(){b.parentElement&&b.parentElement.removeChild(b);
a.element.setAttribute("amp-removed","");a.h=null}))};K(b,"embed-size",function(c){Z(a,c.height,c.width)},void 0,void 0,!0);this.I=pa(this.win,function(c){if(a.h&&c.source===a.h.contentWindow&&(c=c.data,"string"===typeof c&&c.startsWith("pym"))){var e=c.split(/xPYMx/);"height"===e[2]?Z(a,parseInt(e[3],10),void 0):"width"===e[2]?Z(a,void 0,parseInt(e[3],10)):C().warn("amp-iframe","Unsupported Pym.js message: "+c)}});this.F&&K(b,"embed-ready",this.P.bind(this));K(b,"send-consent-data",function(c,e,
f){Ya(a,e,f)});this.B.appendChild(b);return this.loadPromise(b).then(function(){a.B!=a.element&&P(a.win,"timer").delay(function(){a.mutateElement(function(){a.B.classList.add("amp-active")})},1E3)})};function Ya(a,b,d){var c=AMP.BaseElement.prototype.getConsentPolicy.call(a)||"default",e=Za(a,c),f=$a(a,c),g=ab(a,c);Promise.all([f,e,g]).then(function(k){var n=F({sentinel:"amp",type:"consent-data",consentMetadata:k[0],consentString:k[1],consentPolicyState:k[2]});b.postMessage(n,d)})}
function Za(a,b){return Na(a.element,void 0===b?"default":b)}function $a(a,b){return Oa(a.element,void 0===b?"default":b)}function ab(a,b){return Ma(a.element,void 0===b?"default":b)}l.unlayoutOnPause=function(){return!0};l.unlayoutCallback=function(){this.I&&(this.I(),this.I=null);if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.H&&this.togglePlaceholder(!0);this.h=null;this.C&&(this.C.destroy(),this.C=null)}return!0};
l.getLayoutPriority=function(){return this.M?2:this.o?1:AMP.BaseElement.prototype.getLayoutPriority.call(this)};l.mutatedAttributesCallback=function(a){var b=a.src;void 0!==b&&(this.iframeSrc=Va(this,b),this.h&&(this.h.src=Ta(this,this.iframeSrc,this.l)));this.h&&a.title&&this.propagateAttributes(["title"],this.h)};l.P=function(){var a=this;this.H&&this.getVsync().mutate(function(){a.h&&(ua(a.h,0),a.togglePlaceholder(!1))})};l.firstLayoutCompleted=function(){};
l.throwIfCannotNavigate=function(){if(!/\sallow-top-navigation\s/i.test(" "+this.l+" "))throw C().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".');};
function Z(a,b,d){if(a.G)if(100>b)a.user().error("amp-iframe","Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",a.element);else{var c,e;b=parseInt(b,10);isNaN(b)||(c=Math.max(b+(a.element.offsetHeight-a.h.offsetHeight),b));d=parseInt(d,10);isNaN(d)||(e=Math.max(d+(a.element.offsetWidth-a.h.offsetWidth),d));void 0!==c||void 0!==e?a.attemptChangeSize(c,e).then(function(){void 0!==c&&a.element.setAttribute("height",
c);void 0!==e&&a.element.setAttribute("width",e);a.element.overflowCallback(!1,c,e)},function(){}):a.user().error("amp-iframe","Ignoring embed-size request because no width or height value is provided",a.element)}else a.R||(a.user().error("amp-iframe","Ignoring embed-size request because this iframe is not resizable",a.element),a.R=!0)}
function Wa(a){if(Ka(a.win)){var b=a.element,d=b.getAttribute("src");d&&(a.j=R(b,"url").parse(d).origin);a.registerAction("postMessage",function(f){a.j?a.h.contentWindow.postMessage(f.args,a.j):C().error("amp-iframe",'"postMessage" action is only allowed with "src"attribute with an origin.')});if(a.j){var c=0,e=function(f){if(f.source===a.h.contentWindow)if(f.origin!==a.j)C().error("amp-iframe",'"message" received from unexpected origin: '+f.origin+". Only allowed from: "+a.j);else{if(a.getAmpDoc().getRootNode().activeElement!==
a.h)var g=!1;else g=a.win.document.createElement("audio"),g.play(),g=g.paused?!1:!0;if(g){var k=f.data;try{var n=JSON.parse(JSON.stringify(k))}catch(u){C().error("amp-iframe",'Data from "message" event must be JSON.');return}var h=a.win;f=F({data:n});g={detail:f};Object.assign(g,void 0);"function"==typeof h.CustomEvent?f=new h.CustomEvent("amp-iframe:message",g):(h=h.document.createEvent("CustomEvent"),h.initCustomEvent("amp-iframe:message",!!g.bubbles,!!g.cancelable,f),f=h);R(a.element,"action").trigger(a.element,
"message",f,3)}else c++,C().error("amp-iframe",'"message" event may only be triggered from a user gesture.'),10<=c&&(C().error("amp-iframe",'Too many non-gesture-triggered "message" events; detaching event listener.'),a.win.removeEventListener("message",e))}};a.win.addEventListener("message",e)}}}l.W=function(a){this.j=a};(function(a){a.registerElement("amp-iframe",W)})(self.AMP);
})});

//# sourceMappingURL=amp-iframe-0.1.js.map


/*! Google Drive APIs v3 | HDRI Haven | https://hdrihaven.com/p/license.php */
function mudroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=mud_road');}
function modernbuildingsnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=modern_buildings_night');}
function rathaus_hdri(){window.open('https://hdrihaven.com/hdri/?h=rathaus');}
function bathroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=bathroom');}
function anniversarylounge_hdri(){window.open('https://hdrihaven.com/hdri/?h=anniversary_lounge');}
function redhillcurve_hdri(){window.open('https://hdrihaven.com/hdri/?h=red_hill_curve');}
function waterbucktrail_hdri(){window.open('https://hdrihaven.com/hdri/?h=waterbuck_trail');}
function kiara5noon_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_5_noon');}
function modernbuildings_hdri(){window.open('https://hdrihaven.com/hdri/?h=modern_buildings');}
function kiarainterior_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_interior');}
function lythwoodterrace_hdri(){window.open('https://hdrihaven.com/hdri/?h=lythwood_terrace');}
function musichall02_hdri(){window.open('https://hdrihaven.com/hdri/?h=music_hall_02');}
function derelicthighwaynoon_hdri(){window.open('https://hdrihaven.com/hdri/?h=derelict_highway_noon');}
function ostrichroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=ostrich_road');}
function streetlamp_hdri(){window.open('https://hdrihaven.com/hdri/?h=street_lamp');}
function indoorpool_hdri(){window.open('https://hdrihaven.com/hdri/?h=indoor_pool');}
function nagoyawallpath_hdri(){window.open('https://hdrihaven.com/hdri/?h=nagoya_wall_path');}
function vintagemeasuringlab_hdri(){window.open('https://hdrihaven.com/hdri/?h=vintage_measuring_lab');}
function mpumalangaveld_hdri(){window.open('https://hdrihaven.com/hdri/?h=mpumalanga_veld');}
function riverwalk1_hdri(){window.open('https://hdrihaven.com/hdri/?h=river_walk_1');}
function missilelaunchfacility03_hdri(){window.open('https://hdrihaven.com/hdri/?h=missile_launch_facility_03');}
function dryfield_hdri(){window.open('https://hdrihaven.com/hdri/?h=dry_field');}
function zhengyanggate_hdri(){window.open('https://hdrihaven.com/hdri/?h=zhengyang_gate');}
function olddepot_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_depot');}
function machineshop01_hdri(){window.open('https://hdrihaven.com/hdri/?h=machine_shop_01');}
function venicesunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=venice_sunrise');}
function dresdenstationnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=dresden_station_night');}
function lenong3_hdri(){window.open('https://hdrihaven.com/hdri/?h=lenong_3');}
function abandonedchurch_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_church');}
function signalhillsunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=signal_hill_sunrise');}
function aircraftworkshop01_hdri(){window.open('https://hdrihaven.com/hdri/?h=aircraft_workshop_01');}
function hamburghbf_hdri(){window.open('https://hdrihaven.com/hdri/?h=hamburg_hbf');}
function museumofhistory_hdri(){window.open('https://hdrihaven.com/hdri/?h=museum_of_history');}
function rockyridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=rocky_ridge');}
function museumofethnography_hdri(){window.open('https://hdrihaven.com/hdri/?h=museum_of_ethnography');}
function spruitdawn_hdri(){window.open('https://hdrihaven.com/hdri/?h=spruit_dawn');}
function bellparkdawn_hdri(){window.open('https://hdrihaven.com/hdri/?h=bell_park_dawn');}
function vaticanroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=vatican_road');}
function mutianyu_hdri(){window.open('https://hdrihaven.com/hdri/?h=mutianyu');}
function dusseldorfbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=dusseldorf_bridge');}
function courtyardnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=courtyard_night');}
function parkinggarage_hdri(){window.open('https://hdrihaven.com/hdri/?h=parking_garage');}
function kiara9dusk_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_9_dusk');}
function lythwoodlounge_hdri(){window.open('https://hdrihaven.com/hdri/?h=lythwood_lounge');}
function reichstag1_hdri(){window.open('https://hdrihaven.com/hdri/?h=reichstag_1');}
function bluelagoon_hdri(){window.open('https://hdrihaven.com/hdri/?h=blue_lagoon');}
function zwingernight_hdri(){window.open('https://hdrihaven.com/hdri/?h=zwinger_night');}
function cavewall_hdri(){window.open('https://hdrihaven.com/hdri/?h=cave_wall');}
function stadium01_hdri(){window.open('https://hdrihaven.com/hdri/?h=stadium_01');}
function tiberisland_hdri(){window.open('https://hdrihaven.com/hdri/?h=tiber_island');}
function dresdensquare_hdri(){window.open('https://hdrihaven.com/hdri/?h=dresden_square');}
function stonealley_hdri(){window.open('https://hdrihaven.com/hdri/?h=stone_alley');}
function bloubergsunrise1_hdri(){window.open('https://hdrihaven.com/hdri/?h=blouberg_sunrise_1');}
function carpentryshop01_hdri(){window.open('https://hdrihaven.com/hdri/?h=carpentry_shop_01');}
function bergen_hdri(){window.open('https://hdrihaven.com/hdri/?h=bergen');}
function versveldpas_hdri(){window.open('https://hdrihaven.com/hdri/?h=versveldpas');}
function circusmaximus1_hdri(){window.open('https://hdrihaven.com/hdri/?h=circus_maximus_1');}
function beachparking_hdri(){window.open('https://hdrihaven.com/hdri/?h=beach_parking');}
function boilerroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=boiler_room');}
function glasspassage_hdri(){window.open('https://hdrihaven.com/hdri/?h=glass_passage');}
function stonepines_hdri(){window.open('https://hdrihaven.com/hdri/?h=stone_pines');}
function whipplecreekregionalpark01_hdri(){window.open('https://hdrihaven.com/hdri/?h=whipple_creek_regional_park_01');}
function konigsallee_hdri(){window.open('https://hdrihaven.com/hdri/?h=konigsallee');}
function subwayentrance_hdri(){window.open('https://hdrihaven.com/hdri/?h=subway_entrance');}
function autumnground_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_ground');}
function cedarbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=cedar_bridge');}
function pedestrianoverpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=pedestrian_overpass');}
function kiara4mid-morning_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_4_mid-morning');}
function piazzasanmarco_hdri(){window.open('https://hdrihaven.com/hdri/?h=piazza_san_marco');}
function musichall01_hdri(){window.open('https://hdrihaven.com/hdri/?h=music_hall_01');}
function secludedbeach_hdri(){window.open('https://hdrihaven.com/hdri/?h=secluded_beach');}
function urbancourtyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_courtyard');}
function smallemptyhouse_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_empty_house');}
function kiara2sunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_2_sunrise');}
function pillars_hdri(){window.open('https://hdrihaven.com/hdri/?h=pillars');}
function graypier_hdri(){window.open('https://hdrihaven.com/hdri/?h=gray_pier');}
function childrenshospital_hdri(){window.open('https://hdrihaven.com/hdri/?h=childrens_hospital');}
function gym01_hdri(){window.open('https://hdrihaven.com/hdri/?h=gym_01');}
function lenong1_hdri(){window.open('https://hdrihaven.com/hdri/?h=lenong_1');}
function venicedawn2_hdri(){window.open('https://hdrihaven.com/hdri/?h=venice_dawn_2');}
function parkbench_hdri(){window.open('https://hdrihaven.com/hdri/?h=park_bench');}
function wintersky_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_sky');}
function pumphouse_hdri(){window.open('https://hdrihaven.com/hdri/?h=pump_house');}
function halloffinfish_hdri(){window.open('https://hdrihaven.com/hdri/?h=hall_of_finfish');}
function teufelsberginner_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_inner');}
function hilltopconstruction_hdri(){window.open('https://hdrihaven.com/hdri/?h=hilltop_construction');}
function cloudyvondelpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=cloudy_vondelpark');}
function blinds_hdri(){window.open('https://hdrihaven.com/hdri/?h=blinds');}
function simonstownharbour_hdri(){window.open('https://hdrihaven.com/hdri/?h=simons_town_harbour');}
function kiara3morning_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_3_morning');}
function kiara7late-afternoon_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_7_late-afternoon');}
function abandonedgamesroom01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_games_room_01');}
function signalhilldawn_hdri(){window.open('https://hdrihaven.com/hdri/?h=signal_hill_dawn');}
function harties_hdri(){window.open('https://hdrihaven.com/hdri/?h=harties');}
function missilelaunchfacility02_hdri(){window.open('https://hdrihaven.com/hdri/?h=missile_launch_facility_02');}
function graffitishelter_hdri(){window.open('https://hdrihaven.com/hdri/?h=graffiti_shelter');}
function oldapartmentswalkway_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_apartments_walkway');}
function cinemahall_hdri(){window.open('https://hdrihaven.com/hdri/?h=cinema_hall');}
function crystalfalls_hdri(){window.open('https://hdrihaven.com/hdri/?h=crystal_falls');}
function vignaioli_hdri(){window.open('https://hdrihaven.com/hdri/?h=vignaioli');}
function teufelsberglookout_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_lookout');}
function noga_hdri(){window.open('https://hdrihaven.com/hdri/?h=noga');}
function dresdenmoat_hdri(){window.open('https://hdrihaven.com/hdri/?h=dresden_moat');}
function ensuite_hdri(){window.open('https://hdrihaven.com/hdri/?h=en_suite');}
function lapa_hdri(){window.open('https://hdrihaven.com/hdri/?h=lapa');}
function monksforest_hdri(){window.open('https://hdrihaven.com/hdri/?h=monks_forest');}
function cloudycliffsideroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=cloudy_cliffside_road');}
function rooftopday_hdri(){window.open('https://hdrihaven.com/hdri/?h=rooftop_day');}
function moultonfallstraintunneleast_hdri(){window.open('https://hdrihaven.com/hdri/?h=moulton_falls_train_tunnel_east');}
function lot01_hdri(){window.open('https://hdrihaven.com/hdri/?h=lot_01');}
function mosaictunnel_hdri(){window.open('https://hdrihaven.com/hdri/?h=mosaic_tunnel');}
function shorttunnel_hdri(){window.open('https://hdrihaven.com/hdri/?h=short_tunnel');}
function cayleylookout_hdri(){window.open('https://hdrihaven.com/hdri/?h=cayley_lookout');}
function garage_hdri(){window.open('https://hdrihaven.com/hdri/?h=garage');}
function sisulu_hdri(){window.open('https://hdrihaven.com/hdri/?h=sisulu');}
function yarisinteriorgarage_hdri(){window.open('https://hdrihaven.com/hdri/?h=yaris_interior_garage');}
function tiber2_hdri(){window.open('https://hdrihaven.com/hdri/?h=tiber_2');}
function hallofmammals_hdri(){window.open('https://hdrihaven.com/hdri/?h=hall_of_mammals');}
function theater02_hdri(){window.open('https://hdrihaven.com/hdri/?h=theater_02');}
function theater01_hdri(){window.open('https://hdrihaven.com/hdri/?h=theater_01');}
function rhodesmemorial_hdri(){window.open('https://hdrihaven.com/hdri/?h=rhodes_memorial');}
function belvedere_hdri(){window.open('https://hdrihaven.com/hdri/?h=belvedere');}
function mistydawn_hdri(){window.open('https://hdrihaven.com/hdri/?h=misty_dawn');}
function xiequyuan_hdri(){window.open('https://hdrihaven.com/hdri/?h=xiequ_yuan');}
function missilelaunchfacility01_hdri(){window.open('https://hdrihaven.com/hdri/?h=missile_launch_facility_01');}
function pond_hdri(){window.open('https://hdrihaven.com/hdri/?h=pond');}
function floraltent_hdri(){window.open('https://hdrihaven.com/hdri/?h=floral_tent');}
function cliffside_hdri(){window.open('https://hdrihaven.com/hdri/?h=cliffside');}
function chapmansdrive_hdri(){window.open('https://hdrihaven.com/hdri/?h=chapmans_drive');}
function cabin_hdri(){window.open('https://hdrihaven.com/hdri/?h=cabin');}
function _hdri(){window.open('https://hdrihaven.com/hdri/?h=');}
