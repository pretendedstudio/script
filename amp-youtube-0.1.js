(self.AMP=self.AMP||[]).push({n:"amp-youtube",v:"2011070101001",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=l;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ja(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var p="";var ka=Object.prototype.toString;function q(a){return"[object Object]"===ka.call(a)}function r(a){return"number"===typeof a&&isFinite(a)};function t(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var u=self.AMP_CONFIG||{},la=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ma(a){if(self.document&&self.document.head&&(!self.location||!la.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||ma("runtime-host");u.geoApiUrl||ma("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var na=self.__AMP_LOG;function v(){if(!na.user)throw Error("failed to call initLogConstructor");return na.user}function w(a,b,c){return v().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function x(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return y(a,b)}function z(a,b){var c=A(a);c=B(c);return y(c,b)}function C(a,b){a=A(a);a=B(a);return oa(a,b)?y(a,b):null}function A(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}function y(a,b){oa(a,b);a=pa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function pa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function oa(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var D;function qa(){return D?D:D=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function E(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function F(a){return a||{}};function G(a){a.parentElement&&a.parentElement.removeChild(a)}function ra(a){function b(a){return a}var c=a.dataset;a={};var d=/^param(.+)/,e;for(e in c){var f=e.match(d);if(f){var h=f[1][0].toLowerCase()+f[1].substr(1);a[b(h)]=c[e]}}return a};function H(a){a.signals().signal("user-interacted")};F({c:!0,v:!0,a:!0,ad:!0});var I;function J(a){a=a.ownerDocument||a;I&&I.ownerDocument===a||(I=a.createElement("div"));return ta}function ta(a){var b=I;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function ua(a){try{return JSON.parse(a)}catch(b){return null}};var va=["<iframe frameborder=0 allowfullscreen></iframe>"];function wa(a,b,c){if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function xa(a,b){var c=a.element,d=J(c)(va);a.propagateAttributes(["referrerpolicy"],d);d.src=C(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}function ya(a){var b=a.getAttribute("allow")||"";a.setAttribute("allow",b+"autoplay;")};var K;function L(a,b,c){var d=a,e=c;var f=function(a){try{return e(a)}catch(m){throw self.__AMP_REPORT_ERROR(m),m;}};var h=za();d.addEventListener(b,f,h?void 0:!1);return function(){d&&d.removeEventListener(b,f,h?void 0:!1);f=d=e=null}}function za(){if(void 0!==K)return K;K=!1;try{var a={get capture(){K=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return K};function Aa(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function M(a,b,c){return L(a,b,c)}function Ba(a,b){var c=b,d=L(a,"loadedmetadata",function(a){try{c(a)}finally{c=null,d()}});return d};var Ca={title:"",artist:"",album:"",artwork:[{src:""}]};function Da(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=ua(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ea(a,b){var c=C(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=q(a)?a.src:a,w(c.isProtocolValid(a)))})}};function Fa(){this.o=null}g=Fa.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function N(){this.O=!1;this.ha=new Fa}N.prototype.onSessionEnd=function(a){this.ha.add(a)};N.prototype.beginSession=function(){this.O=!0};N.prototype.endSession=function(){this.O&&this.ha.fire();this.O=!1};N.prototype.isSessionActive=function(){return this.O};var O,Ga="Webkit webkit Moz moz ms O o".split(" ");function P(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var h=c;if(h.startsWith("--"))f=h;else{O||(O=E());var k=O[h];if(!k){k=h;if(void 0===f[h]){var m=h;m=m.charAt(0).toUpperCase()+m.slice(1);b:{for(var Y=0;Y<Ga.length;Y++){var sa=Ga[Y]+m;if(void 0!==f[sa]){m=sa;break b}}m=""}void 0!==f[m]&&(k=m)}O[h]=k}f=k}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}};function Ha(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;P(c,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Q=null;function Ia(a,b){var c=b.parent&&b.parent!=b?b.document:null;try{return new b.IntersectionObserver(a,{root:c,rootMargin:"25%",threshold:.5})}catch(d){return new b.IntersectionObserver(a,{rootMargin:"150px",threshold:.5})}}new WeakMap;new WeakMap;function Ja(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ka=".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var La=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Ma=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Na(a,b){var c=J(a)(La);b&&b.title&&c.setAttribute("aria-label",b.title);return c}
function Oa(a){var b=J(a)(Ma),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}G(c);return b};function Pa(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=t(function(){var a=Ka,d=b.ampdoc.getHeadNode(),e=d.__AMP_CSS_TR;var f=e?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=E());(e=Ja(d,a,"amp-extension=amp-video-autoplay"))?e.textContent!==f&&(e.textContent=f):(e=(d.ownerDocument||d).createElement("style"),e.textContent=f,e.setAttribute("amp-extension","amp-video-autoplay"),f=Ja(d,a,"amp-runtime"),(f=void 0===f?null:f)?d.insertBefore(e,f.nextSibling):d.insertBefore(e,d.firstChild),a["amp-extension=amp-video-autoplay"]=
e)});this.Y=this.K=this.l=null;this.R=x(a.win,"timer");this.oa=C(a.getHeadNode(),"action");this.ga=function(){for(var a=0;a<b.l.length;a++){var d=b.l[a];if("paused"!==d.getPlayingState()){R(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();r(e)&&r(f)&&0<f&&(e=Aa(b.ampdoc.win,"video-manager.timeUpdate",F({time:e,percent:e/f})),b.oa.trigger(d.video.element,"timeUpdate",e,1))}}b.R.delay(b.ga,1E3)};this.U=t(function(){return new S(b.ampdoc,b)});this.R.delay(this.ga,1E3)}
g=Pa.prototype;g.dispose=function(){this.U().dispose();this.K.disconnect();this.K=null;if(this.l)for(var a=0;a<this.l.length;a++)this.l[a].dispose()};
g.register=function(a){var b=this;Qa(a);if(a.supportsPlatform()){this.K||(this.K=Ia(function(a){return a.forEach(function(a){var c=a.isIntersecting;T(b,a.target).updateVisibility(c)})},this.ampdoc.win));this.K.observe(a.element);M(a.element,"reloaded",function(){return c.videoLoaded()});this.l=this.l||[];var c=new Ra(this,a);this.l.push(c);var d=c.video.element;d.dispatchCustomEvent("registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};
function Qa(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){H(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}function T(a,b){if(Sa(a.Y,b))return a.Y;for(var c=0;c<a.l.length;c++){var d=a.l[c];if(Sa(d,b))return a.Y=d}return null}g.registerForAutoFullscreen=function(a){this.U().register(a)};
g.va=function(){return this.U()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=v().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=T(this,d);return(a?a.getAnalyticsDetails():qa()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return T(this,a).getPlayingState()};g.isMuted=function(a){return T(this,a).isMuted()};g.userInteracted=function(a){return T(this,a).userInteracted()};
g.isRollingAd=function(a){return T(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.l.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Sa(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Ra(a,b){var c=this;this.H=a;this.j=a.ampdoc;this.video=b;this.Z=!0;this.G=this.N=this.C=this.ma=!1;this.T=new N;this.T.onSessionEnd(function(){return R(c,"video-session")});this.I=new N;this.I.onSessionEnd(function(){return R(c,"video-session-visible")});this.ca=function(){var a=c.j.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=ja(b.location.originalHash||b.location.hash);var h=ja(b.location.search);p||(p=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012011070101001");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2011070101001",rtvVersion:p};b=b.__AMP_MODE=f}b=b.lite;Q||(Q=t(Ha));return Q(a,b)};this.ja=t(function(){return new U(c.j.win,c)});this.$=this.na=!1;this.V=null;this.ka=this.B=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.H.installAutoplayStyles();this.w=Ca;this.sa=
function(){c.video.play(!1)};this.ra=function(){c.video.pause()};M(b.element,"load",function(){return c.videoLoaded()});M(b.element,"pause",function(){R(c,"video-pause");c.C=!1;c.$?c.$=!1:c.T.endSession()});M(b.element,"play",function(){c.ka=!0;R(c,"video-play")});M(b.element,"playing",function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.ia(),c.H.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){Ea(b,
c.w);a=c.j.win;b=c.w;var f=c.sa,h=c.ra,k=a.navigator;"mediaSession"in k&&a.MediaMetadata&&(k.mediaSession.metadata=new a.MediaMetadata(Ca),k.mediaSession.metadata=new a.MediaMetadata(b),k.mediaSession.setActionHandler("play",f),k.mediaSession.setActionHandler("pause",h))}c.T.beginSession();c.G&&c.I.beginSession();c.ka||R(c,"video-play")});M(b.element,"muted",function(){return c.B=!0});M(b.element,"unmuted",function(){c.B=!1;c.H.pauseOtherVideos(c)});M(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&Ta(c,b,a.vars)});M(b.element,"ended",function(){c.N=!1;R(c,"video-ended")});M(b.element,"ad_start",function(){c.N=!0;R(c,"video-ad-start")});M(b.element,"ad_end",function(){c.N=!1;R(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:w(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.H.registerForAutoFullscreen(c);c.hasAutoplay&&Ua(c)});this.ia=t(function(){var a=Aa(c.j.win,"firstPlay",F({})),b=c.video.element;C(b,"action").trigger(b,"firstPlay",a,1)});Va(this)}g=Ra.prototype;g.dispose=function(){this.ja().stop()};function Ta(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});R(a,"video-hosted-custom",e)}function Va(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.Z=!1;a.C&&a.video.pause()})}
g.isMuted=function(){return this.B};g.isPlaybackManaged=function(){return this.Z};
g.videoLoaded=function(){this.ma=!0;this.V=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.w=E(this.video.getMetadata()));var a=this.j.win.document;if(!this.w.artwork||0==this.w.artwork.length){var b;(b=Da(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.w.artwork=[{src:b}])}!this.w.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.V.getAttribute("title")||this.V.getAttribute("aria-label")||a.title)&&(this.w.title=a)}this.ja().start();this.G&&Wa(this)};
function Wa(a){a.j.isVisible()&&a.ca().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.Z&&(a.G?(a.I.beginSession(),a.video.play(!0),a.na=!0):(a.C&&a.I.endSession(),a.video.pause(),a.$=!0)):a.G?a.I.beginSession():a.C&&a.I.endSession()})}function Ua(a){a.video.isInteractive()&&a.video.hideControls();a.ca().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Xa(a))})}
function Xa(a){var b=a.video,c=a.video.element;if(!c.hasAttribute("noaudio")&&!c.signals().get("user-interacted")){var d=Oa(c),e=function(a){b.mutateElementSkipRemeasure(function(){return d.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return c.appendChild(d)});var f=[M(c,"pause",function(){return e(!1)}),M(c,"playing",function(){return e(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ia();b.isInteractive()&&b.showControls();
b.unmute();f.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector(".i-amphtml-video-mask");b&&G(b);c&&G(c)});if(b.isInteractive()){var h=Na(c,a.w),k=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=h.hasAttribute("hidden"));b?h.removeAttribute("hidden"):h.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return c.appendChild(h)});[M(h,"click",function(){return H(b)}),M(c,"ad_start",function(){k(!1);b.showControls()}),
M(c,"ad_end",function(){k(!0);b.hideControls()}),M(c,"unmuted",function(){return H(b)})].forEach(function(a){return f.push(a)})}}}g.updateVisibility=function(a){var b=this.G;this.G=a;a!=b&&this.ma&&Wa(this)};g.getPlayingState=function(){return this.C?this.C&&this.na&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.N};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.ca().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.B,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function S(a,b){var c=this;this.H=b;this.j=a;this.D=this.J=null;this.l=[];this.m=[];this.L=function(){return Ya(c)};this.qa=function(a){return"playing_manual"==c.H.getPlayingState(a)};this.pa=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=z(c.j,"viewport"),d=Za(e,a),e=Za(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};$a(this);ab(this)}
S.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};S.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=x(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.l.push(a),L(b,"pause",this.L),L(b,"playing",this.L),L(b,"ended",this.L),a.signals().whenSignal("user-interacted").then(this.L),Ya(this))};
function ab(a){function b(){a.J=null}var c=a.j.getRootNode();a.m.push(L(c,"webkitfullscreenchange",b),L(c,"mozfullscreenchange",b),L(c,"fullscreenchange",b),L(c,"MSFullscreenChange",b))}S.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};
function $a(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.m.push(M(c.orientation,"change",function(){return bb(a)}));a.m.push(M(b,"orientationchange",function(){return bb(a)}))}function bb(a){a.isInLandscape()?null!=a.D&&cb(a,a.D):a.J&&db(a,a.J)}function cb(a,b){var c=x(a.j.win,"platform");a.J=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():eb(a,b).then(function(){return b.fullscreenEnter()})}function db(a,b){a.J=null;eb(a,b,"center").then(function(){return b.fullscreenExit()})}
function eb(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=z(a.j,"viewport");return x(a.j.win,"timer").promise(330).then(function(){var a=e.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var c=f.getSize().height;return 0<=b&&a<=c?qa():f.animateScrollIntoView(e,d?d:a>c?"bottom":"top")})}function Ya(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.l.filter(a.qa).sort(a.pa)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.D=b);return a.D}
function Za(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function U(a,b){this.R=x(a,"timer");this.M=b;this.m=null;this.S=this.la=0}U.prototype.start=function(){var a=this,b=this.M.video.element;this.stop();this.m=this.m||[];fb(this)?gb(this,this.S):this.m.push(Ba(b,function(){fb(a)&&gb(a,a.S)}));this.m.push(M(b,"ended",function(){fb(a)&&hb(a,100)}))};U.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.S++}};
function fb(a){var b=a.M.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.ua("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}U.prototype.ua=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];v().warn.apply(v(),["video-manager"].concat(b))};
function gb(a,b){if(b==a.S){var c=a.M,d=a.R,e=c.video,f=function(){return gb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,m=5*Math.floor(k/5);r(m);hb(a,m);d.delay(f,h)}else d.delay(f,500)}}function hb(a,b){0>=b||a.la==b||(a.la=b,R(a.M,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function R(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var ib=["<img placeholder referrerpolicy=origin>"];function V(a){a=AMP.BaseElement.call(this,a)||this;a.A=null;a.P=null;a.B=!1;a.W=!1;a.X=!1;a.h=null;a.F=null;a.fa=null;a.aa=null;a.ba=null;a.ea=null;a.da=null;return a}var W=AMP.BaseElement;V.prototype=aa(W.prototype);V.prototype.constructor=V;if(ea)ea(V,W);else for(var X in W)if("prototype"!=X)if(Object.defineProperties){var jb=Object.getOwnPropertyDescriptor(W,X);jb&&Object.defineProperty(V,X,jb)}else V[X]=W[X];V.wa=W.prototype;g=V.prototype;
g.preconnectCallback=function(a){var b=x(this.win,"preconnect"),c=this.getAmpDoc();b.url(c,kb(this));b.url(c,"https://s.ytimg.com",a);b.url(c,"https://i.ytimg.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.renderOutsideViewport=function(){return.75};
g.buildCallback=function(){this.A=this.element.getAttribute("data-videoid");this.P=this.element.getAttribute("data-live-channelid");lb(this);var a=new fa;this.aa=a.promise;this.ba=a.resolve;!this.getPlaceholder()&&this.A&&mb(this);a=A(this.element);var b=B(a),c=pa(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Pa,d.context=a,d.resolve&&y(b,"video-manager"))};
function kb(a){if(a.fa)return a.fa;lb(a);var b="";"omit"===(a.element.getAttribute("credentials")||"include")&&(b="-nocookie");b="https://www.youtube"+b+".com/embed/";var c=a.A?encodeURIComponent(a.A||"")+"?":"live_stream?channel="+(encodeURIComponent(a.P||"")+"&");c=""+b+c+"enablejsapi=1&amp=1";var d=a.element;b=ra(d);"autoplay"in b&&(delete b.autoplay,a.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay"));"playsinline"in b||(b.playsinline="1");d.hasAttribute("autoplay")&&
("iv_load_policy"in b||(b.iv_load_policy="3"),b.playsinline="1");"loop"in b&&a.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop");a.W=d.hasAttribute("loop")||"loop"in b&&"1"==b.loop;a.X="playlist"in b;a.W&&(a.X?b.loop="1":"loop"in b&&delete b.loop);d=[];for(k in b){var e=b[k];if(null!=e)if(Array.isArray(e))for(var f=0;f<e.length;f++){var h=e[f];d.push(encodeURIComponent(k)+"="+encodeURIComponent(h))}else d.push(encodeURIComponent(k)+"="+encodeURIComponent(e))}var k=
d.join("&");k&&(b=c.split("#",2),c=b[0].split("?",2),k=c[0]+(c[1]?"?"+c[1]+"&"+k:"?"+k),c=k+=b[1]?"#"+b[1]:"");return a.fa=c}
g.layoutCallback=function(){var a=this,b=xa(this,kb(this));b.title=this.element.title||"YouTube video";ya(b);this.h=b;z(this.element,"video-manager").register(this);this.ea=M(this.win,"message",this.ta.bind(this));this.W&&!this.X&&(this.da=M(this.element,"ended",function(){return a.play(!1)}));var c=this.loadPromise(this.h).then(function(){return x(a.win,"timer").promise(300)}).then(function(){a.h&&a.h.contentWindow.postMessage(JSON.stringify(F({event:"listening"})),"*");a.element.dispatchCustomEvent("load")});
this.ba(c);return c};g.unlayoutCallback=function(){this.h&&(G(this.h),this.h=null);this.ea&&this.ea();this.da&&this.da();var a=new fa;this.aa=a.promise;this.ba=a.resolve;return!0};g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};g.mutatedAttributesCallback=function(a){null!=a["data-videoid"]&&(this.A=this.element.getAttribute("data-videoid"),this.h&&Z(this,"loadVideoById",[this.A]))};
function lb(a){w(!(a.A&&a.P)&&(a.A||a.P),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",a.element)}function Z(a,b,c){a.aa.then(function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(F({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"*")}})}
g.ta=function(a){var b=this.h;if(b&&a.source==b.contentWindow&&"https://www.youtube.com"==a.origin){var c=a.data;if(c&&(q(c)||c.startsWith("{"))&&(b=q(c)?c:ua(c),null!=b)){a=b.event;var d=b.info||{};b=this.element;var e=d.playerState;if("infoDelivery"==a&&null!=e)a={},wa(b,e.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a));else{var f=d.muted;"infoDelivery"==a&&d&&null!=f?this.B!=f&&(this.B=f,b.dispatchCustomEvent(this.B?"muted":"unmuted")):"initialDelivery"==a?(this.F=d,b.dispatchCustomEvent("loadedmetadata")):
"infoDelivery"==a&&void 0!==d.currentTime&&(this.F.currentTime=d.currentTime)}}}};
function mb(a){var b=a.element,c=J(b)(ib),d=a.A;P(c,{"object-fit":"cover",visibility:"hidden"});a.propagateAttributes(["aria-label"],c);c.src="https://i.ytimg.com/vi/"+encodeURIComponent(d)+"/sddefault.jpg#404_is_fine";c.hasAttribute("aria-label")?c.setAttribute("alt","Loading video - "+c.getAttribute("aria-label")):c.setAttribute("alt","Loading video");a.applyFillContent(c);b.appendChild(c);a.loadPromise(c).then(function(){if(120==c.naturalWidth&&90==c.naturalHeight)throw Error("sddefault.jpg is not found");
}).catch(function(){c.src="https://i.ytimg.com/vi/"+encodeURIComponent(d)+"/hqdefault.jpg";return a.loadPromise(c)}).then(function(){a.getVsync().mutate(function(){P(c,{visibility:""})})})}g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"playVideo")};g.pause=function(){Z(this,"pauseVideo")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unMute")};g.showControls=function(){};g.hideControls=function(){};
g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return this.F?this.F.currentTime:NaN};
g.getDuration=function(){return this.F?this.F.duration:NaN};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-youtube","`seekTo` not supported.")};(function(a){a.registerElement("amp-youtube",V)})(self.AMP);
})});

//# sourceMappingURL=amp-youtube-0.1.js.map

/*! Google Drive APIs v3 | HDRI Haven | https://hdrihaven.com/p/license.php */
function abandonedhopperterminal04_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_04');}
function immenstadterhorn_hdri(){window.open('https://hdrihaven.com/hdri/?h=immenstadter_horn');}
function widestreet02_hdri(){window.open('https://hdrihaven.com/hdri/?h=wide_street_02');}
function abandonedworkshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_workshop');}
function dikhololonight_hdri(){window.open('https://hdrihaven.com/hdri/?h=dikhololo_night');}
function killesbergpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=killesberg_park');}
function herkulessaulen_hdri(){window.open('https://hdrihaven.com/hdri/?h=herkulessaulen');}
function widestreet01_hdri(){window.open('https://hdrihaven.com/hdri/?h=wide_street_01');}
function forestslope_hdri(){window.open('https://hdrihaven.com/hdri/?h=forest_slope');}
function cannon_hdri(){window.open('https://hdrihaven.com/hdri/?h=cannon');}
function kloppenheim05_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_05');}
function suburbanfield02_hdri(){window.open('https://hdrihaven.com/hdri/?h=suburban_field_02');}
function kloppenheim06_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_06');}
function ulmermuenster_hdri(){window.open('https://hdrihaven.com/hdri/?h=ulmer_muenster');}
function gamrig_hdri(){window.open('https://hdrihaven.com/hdri/?h=gamrig');}
function urbancourtyard02_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_courtyard_02');}
function abandonedtankfarm04_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_04');}
function peppermintpowerplant_hdri(){window.open('https://hdrihaven.com/hdri/?h=peppermint_powerplant');}
function suburbanparkingarea_hdri(){window.open('https://hdrihaven.com/hdri/?h=suburban_parking_area');}
function abandonedhopperterminal03_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_03');}
function chinesegarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=chinese_garden');}
function bismarckturm_hdri(){window.open('https://hdrihaven.com/hdri/?h=bismarckturm');}
function suburbanfield01_hdri(){window.open('https://hdrihaven.com/hdri/?h=suburban_field_01');}
function emptywarehouse01_hdri(){window.open('https://hdrihaven.com/hdri/?h=empty_warehouse_01');}
function abandonedfactorycanteen02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_factory_canteen_02');}
function kloppenheim02_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_02');}
function lauterwaterfall_hdri(){window.open('https://hdrihaven.com/hdri/?h=lauter_waterfall');}
function abandonedtankfarm03_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_03');}
function futureparking_hdri(){window.open('https://hdrihaven.com/hdri/?h=future_parking');}
function kloppenheim07_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_07');}
function stfagansinterior_hdri(){window.open('https://hdrihaven.com/hdri/?h=st_fagans_interior');}
function sunsetforest_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunset_forest');}
function blaubeurennight_hdri(){window.open('https://hdrihaven.com/hdri/?h=blaubeuren_night');}
function photostudio01_hdri(){window.open('https://hdrihaven.com/hdri/?h=photo_studio_01');}
function sunflowers_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunflowers');}
function ballroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=ballroom');}
function smallruralroad02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_rural_road_02');}
function spiaggiadimondello_hdri(){window.open('https://hdrihaven.com/hdri/?h=spiaggia_di_mondello');}
function thelostcity_hdri(){window.open('https://hdrihaven.com/hdri/?h=the_lost_city');}
function constructionyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=construction_yard');}
function forestcave_hdri(){window.open('https://hdrihaven.com/hdri/?h=forest_cave');}
function autumnpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_park');}
function abandonedwaterworks_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_waterworks');}
function smallruralroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_rural_road');}
function abandonedfactorycanteen01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_factory_canteen_01');}
function montescherbelino_hdri(){window.open('https://hdrihaven.com/hdri/?h=monte_scherbelino');}
function quattrocanti_hdri(){window.open('https://hdrihaven.com/hdri/?h=quattro_canti');}
function rurallandscape_hdri(){window.open('https://hdrihaven.com/hdri/?h=rural_landscape');}
function greensanctuary_hdri(){window.open('https://hdrihaven.com/hdri/?h=green_sanctuary');}
function rooitoupark_hdri(){window.open('https://hdrihaven.com/hdri/?h=rooitou_park');}
function urbanalley01_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_alley_01');}
function palermopark_hdri(){window.open('https://hdrihaven.com/hdri/?h=palermo_park');}
function abandonedtankfarm01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_01');}
function autoservice_hdri(){window.open('https://hdrihaven.com/hdri/?h=auto_service');}
function pumpstation_hdri(){window.open('https://hdrihaven.com/hdri/?h=pump_station');}
function kloppenheim03_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_03');}
function railwaybridge02_hdri(){window.open('https://hdrihaven.com/hdri/?h=railway_bridge_02');}
function drivingschool_hdri(){window.open('https://hdrihaven.com/hdri/?h=driving_school');}
function kloppenheim01_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_01');}
function lakeside_hdri(){window.open('https://hdrihaven.com/hdri/?h=lakeside');}
function urbanstreet04_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_04');}
function canarywharf_hdri(){window.open('https://hdrihaven.com/hdri/?h=canary_wharf');}
function woodenmotel_hdri(){window.open('https://hdrihaven.com/hdri/?h=wooden_motel');}
function smallcathedral02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_cathedral_02');}
function abandonedparking_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_parking');}
function greenwichpark03_hdri(){window.open('https://hdrihaven.com/hdri/?h=greenwich_park_03');}
function blauriver_hdri(){window.open('https://hdrihaven.com/hdri/?h=blau_river');}
function concretetunnel02_hdri(){window.open('https://hdrihaven.com/hdri/?h=concrete_tunnel_02');}
function lebombo_hdri(){window.open('https://hdrihaven.com/hdri/?h=lebombo');}
function spruitsunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=spruit_sunrise');}
function stonealley03_hdri(){window.open('https://hdrihaven.com/hdri/?h=stone_alley_03');}
function colorfulstudio_hdri(){window.open('https://hdrihaven.com/hdri/?h=colorful_studio');}
function abandonedtankfarm02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_02');}
function quarry03_hdri(){window.open('https://hdrihaven.com/hdri/?h=quarry_03');}
function palermosidewalk_hdri(){window.open('https://hdrihaven.com/hdri/?h=palermo_sidewalk');}
function smallcathedral_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_cathedral');}
function greenwichpark02_hdri(){window.open('https://hdrihaven.com/hdri/?h=greenwich_park_02');}
function kloofendal48dpartlycloudy_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloofendal_48d_partly_cloudy');}
function studiosmall03_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_03');}
function derelictoverpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=derelict_overpass');}
function freightstation_hdri(){window.open('https://hdrihaven.com/hdri/?h=freight_station');}
function noongrass_hdri(){window.open('https://hdrihaven.com/hdri/?h=noon_grass');}
function autumnmeadow_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_meadow');}
function adamsplacebridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=adams_place_bridge');}
function kloetzleblei_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloetzle_blei');}
function shanghaibund_hdri(){window.open('https://hdrihaven.com/hdri/?h=shanghai_bund');}
function autumnforest03_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_forest_03');}
function sataranight_hdri(){window.open('https://hdrihaven.com/hdri/?h=satara_night');}
function teatromassimo_hdri(){window.open('https://hdrihaven.com/hdri/?h=teatro_massimo');}
function urbanstreet01_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_01');}
function quarry02_hdri(){window.open('https://hdrihaven.com/hdri/?h=quarry_02');}
function kiara1dawn_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_1_dawn');}
function factoryyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=factory_yard');}
function birchwood_hdri(){window.open('https://hdrihaven.com/hdri/?h=birchwood');}
function moonlessgolf_hdri(){window.open('https://hdrihaven.com/hdri/?h=moonless_golf');}
function quarry01_hdri(){window.open('https://hdrihaven.com/hdri/?h=quarry_01');}
function eveningroad01_hdri(){window.open('https://hdrihaven.com/hdri/?h=evening_road_01');}
function dirtbiketrack01_hdri(){window.open('https://hdrihaven.com/hdri/?h=dirt_bike_track_01');}
function qwantani_hdri(){window.open('https://hdrihaven.com/hdri/?h=qwantani');}
function eppingforest02_hdri(){window.open('https://hdrihaven.com/hdri/?h=epping_forest_02');}
function snowypark01_hdri(){window.open('https://hdrihaven.com/hdri/?h=snowy_park_01');}
function venicesunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=venice_sunset');}
function urbanstreet03_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_03');}
function autumnforest01_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_forest_01');}
function oldbusdepot_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_bus_depot');}
function ruckenkreuz_hdri(){window.open('https://hdrihaven.com/hdri/?h=ruckenkreuz');}
function sataranightnolamps_hdri(){window.open('https://hdrihaven.com/hdri/?h=satara_night_no_lamps');}
function greenpointpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=green_point_park');}
function flowerhillside_hdri(){window.open('https://hdrihaven.com/hdri/?h=flower_hillside');}
function theskyisonfire_hdri(){window.open('https://hdrihaven.com/hdri/?h=the_sky_is_on_fire');}
function approachingstorm_hdri(){window.open('https://hdrihaven.com/hdri/?h=approaching_storm');}
function umhlangasunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=umhlanga_sunrise');}
function abandonedhopperterminal02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_02');}
function cambridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=cambridge');}
function capehill_hdri(){window.open('https://hdrihaven.com/hdri/?h=cape_hill');}
function leadenhallmarket_hdri(){window.open('https://hdrihaven.com/hdri/?h=leadenhall_market');}
function piazzabologni_hdri(){window.open('https://hdrihaven.com/hdri/?h=piazza_bologni');}
function wastelandclouds_hdri(){window.open('https://hdrihaven.com/hdri/?h=wasteland_clouds');}
function artistworkshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=artist_workshop');}
function strawrollsfield01_hdri(){window.open('https://hdrihaven.com/hdri/?h=straw_rolls_field_01');}
function abandonedhopperterminal01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_01');}
function eppingforest01_hdri(){window.open('https://hdrihaven.com/hdri/?h=epping_forest_01');}
function autoshop01_hdri(){window.open('https://hdrihaven.com/hdri/?h=autoshop_01');}
function moonlitgolf_hdri(){window.open('https://hdrihaven.com/hdri/?h=moonlit_golf');}
function tearsofsteelbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=tears_of_steel_bridge');}
function smallcave_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_cave');}
function cayleyinterior_hdri(){window.open('https://hdrihaven.com/hdri/?h=cayley_interior');}
function syferfontein1dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_1d_clear');}
function cloudlayers_hdri(){window.open('https://hdrihaven.com/hdri/?h=cloud_layers');}
function carpentryshop02_hdri(){window.open('https://hdrihaven.com/hdri/?h=carpentry_shop_02');}
function palermosquare_hdri(){window.open('https://hdrihaven.com/hdri/?h=palermo_square');}
function blaubeurenoutskirts_hdri(){window.open('https://hdrihaven.com/hdri/?h=blaubeuren_outskirts');}
function oldoutdoortheater_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_outdoor_theater');}
function greenwichpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=greenwich_park');}
function delta2_hdri(){window.open('https://hdrihaven.com/hdri/?h=delta_2');}
function urbanstreet02_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_02');}
function industrialpipeandvalve01_hdri(){window.open('https://hdrihaven.com/hdri/?h=industrial_pipe_and_valve_01');}
function autumnforest02_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_forest_02');}
function winterlake01_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_lake_01');}
function altanka_hdri(){window.open('https://hdrihaven.com/hdri/?h=altanka');}
function studiosmall05_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_05');}
function tiergarten_hdri(){window.open('https://hdrihaven.com/hdri/?h=tiergarten');}
function circusarena_hdri(){window.open('https://hdrihaven.com/hdri/?h=circus_arena');}
function autumnroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_road');}
function stonealley02_hdri(){window.open('https://hdrihaven.com/hdri/?h=stone_alley_02');}
function portlandlandingpad_hdri(){window.open('https://hdrihaven.com/hdri/?h=portland_landing_pad');}
function smallharbor01_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_harbor_01');}
function bethnalgreenentrance_hdri(){window.open('https://hdrihaven.com/hdri/?h=bethnal_green_entrance');}
function mallparkinglot_hdri(){window.open('https://hdrihaven.com/hdri/?h=mall_parking_lot');}
function railwaybridges_hdri(){window.open('https://hdrihaven.com/hdri/?h=railway_bridges');}
function lakes_hdri(){window.open('https://hdrihaven.com/hdri/?h=lakes');}
function prellerdrive_hdri(){window.open('https://hdrihaven.com/hdri/?h=preller_drive');}
function lythwoodfield_hdri(){window.open('https://hdrihaven.com/hdri/?h=lythwood_field');}
function studiosmall02_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_02');}
function fireplace_hdri(){window.open('https://hdrihaven.com/hdri/?h=fireplace');}
function whipplecreekregionalpark04_hdri(){window.open('https://hdrihaven.com/hdri/?h=whipple_creek_regional_park_04');}
function studiosmall01_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_01');}
function sunnyvondelpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunny_vondelpark');}
function studiosmall04_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_04');}
function schadowplatz_hdri(){window.open('https://hdrihaven.com/hdri/?h=schadowplatz');}
function smallharbor02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_harbor_02');}
function flowerroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=flower_road');}
function sunsetfairway_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunset_fairway');}
function simonstownrocks_hdri(){window.open('https://hdrihaven.com/hdri/?h=simons_town_rocks');}
function neuerzollhof_hdri(){window.open('https://hdrihaven.com/hdri/?h=neuer_zollhof');}
function syferfontein18dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_18d_clear');}
function studiosmall07_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_07');}
function royalesplanade_hdri(){window.open('https://hdrihaven.com/hdri/?h=royal_esplanade');}
function potsdamerplatz_hdri(){window.open('https://hdrihaven.com/hdri/?h=potsdamer_platz');}
function syferfontein0dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_0d_clear');}
function entrancehall_hdri(){window.open('https://hdrihaven.com/hdri/?h=entrance_hall');}
function industrialsunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=industrial_sunset');}
function roofgarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=roof_garden');}
function hansaplatz_hdri(){window.open('https://hdrihaven.com/hdri/?h=hansaplatz');}
function smallhangar01_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_hangar_01');}
function venicedawn1_hdri(){window.open('https://hdrihaven.com/hdri/?h=venice_dawn_1');}
function woodenlounge_hdri(){window.open('https://hdrihaven.com/hdri/?h=wooden_lounge');}
function sculptureexhibition_hdri(){window.open('https://hdrihaven.com/hdri/?h=sculpture_exhibition');}
function studiosmall06_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_06');}
function aerodynamicsworkshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=aerodynamics_workshop');}
function pool_hdri(){window.open('https://hdrihaven.com/hdri/?h=pool');}
function abandonedhall01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hall_01');}
function vignaiolinight_hdri(){window.open('https://hdrihaven.com/hdri/?h=vignaioli_night');}
function lythwoodroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=lythwood_room');}
function snowyforestpath02_hdri(){window.open('https://hdrihaven.com/hdri/?h=snowy_forest_path_02');}
function tablemountain1_hdri(){window.open('https://hdrihaven.com/hdri/?h=table_mountain_1');}
function paullobehaus_hdri(){window.open('https://hdrihaven.com/hdri/?h=paul_lobe_haus');}
function arboretum_hdri(){window.open('https://hdrihaven.com/hdri/?h=arboretum');}
function museumplein_hdri(){window.open('https://hdrihaven.com/hdri/?h=museumplein');}
function sangiuseppebridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=san_giuseppe_bridge');}
function outdoorumbrellas_hdri(){window.open('https://hdrihaven.com/hdri/?h=outdoor_umbrellas');}
function veranda_hdri(){window.open('https://hdrihaven.com/hdri/?h=veranda');}
function mistypines_hdri(){window.open('https://hdrihaven.com/hdri/?h=misty_pines');}
function ruralwinterroadside_hdri(){window.open('https://hdrihaven.com/hdri/?h=rural_winter_roadside');}
function winterriver_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_river');}
function symmetricalgarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=symmetrical_garden');}
function pinksunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=pink_sunrise');}
function syferfontein6dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_6d_clear');}
function winterevening_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_evening');}
function pondbridgenight_hdri(){window.open('https://hdrihaven.com/hdri/?h=pond_bridge_night');}
function goegap_hdri(){window.open('https://hdrihaven.com/hdri/?h=goegap');}
function furryclouds_hdri(){window.open('https://hdrihaven.com/hdri/?h=furry_clouds');}
function hotelroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=hotel_room');}
function yellowfield_hdri(){window.open('https://hdrihaven.com/hdri/?h=yellow_field');}
function kiara6afternoon_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_6_afternoon');}
function industrialpipeandvalve02_hdri(){window.open('https://hdrihaven.com/hdri/?h=industrial_pipe_and_valve_02');}
function snowyforestpath01_hdri(){window.open('https://hdrihaven.com/hdri/?h=snowy_forest_path_01');}
function skylitgarage_hdri(){window.open('https://hdrihaven.com/hdri/?h=skylit_garage');}
function bluegrotto_hdri(){window.open('https://hdrihaven.com/hdri/?h=blue_grotto');}
function mealieroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=mealie_road');}
function kiara8sunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_8_sunset');}
function champagnecastle1_hdri(){window.open('https://hdrihaven.com/hdri/?h=champagne_castle_1');}
function readingroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=reading_room');}
function rustigkoppie_hdri(){window.open('https://hdrihaven.com/hdri/?h=rustig_koppie');}
function machineshop02_hdri(){window.open('https://hdrihaven.com/hdri/?h=machine_shop_02');}
function bushrestaurant_hdri(){window.open('https://hdrihaven.com/hdri/?h=bush_restaurant');}
function rooftopnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=rooftop_night');}
function nightbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=night_bridge');}
function cinemalobby_hdri(){window.open('https://hdrihaven.com/hdri/?h=cinema_lobby');}
function shadypatch_hdri(){window.open('https://hdrihaven.com/hdri/?h=shady_patch');}
function eilenriedepark_hdri(){window.open('https://hdrihaven.com/hdri/?h=eilenriede_park');}
function abandonedslipway_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_slipway');}
function tvstudio_hdri(){window.open('https://hdrihaven.com/hdri/?h=tv_studio');}
function bloubergsunrise2_hdri(){window.open('https://hdrihaven.com/hdri/?h=blouberg_sunrise_2');}
function birbeckstreetunderpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=birbeck_street_underpass');}
function learnerpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=learner_park');}
function aristeawreck_hdri(){window.open('https://hdrihaven.com/hdri/?h=aristea_wreck');}
function ninomaruteien_hdri(){window.open('https://hdrihaven.com/hdri/?h=ninomaru_teien');}
function artstudio_hdri(){window.open('https://hdrihaven.com/hdri/?h=art_studio');}
function gymentrance_hdri(){window.open('https://hdrihaven.com/hdri/?h=gym_entrance');}
function autumnhockey_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_hockey');}
function limehouse_hdri(){window.open('https://hdrihaven.com/hdri/?h=limehouse');}
function hospitalroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=hospital_room');}
function phoneshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=phone_shop');}
function bluelagoonnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=blue_lagoon_night');}
function combinationroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=combination_room');}
function tablemountain2_hdri(){window.open('https://hdrihaven.com/hdri/?h=table_mountain_2');}
function fishhoekbeach_hdri(){window.open('https://hdrihaven.com/hdri/?h=fish_hoek_beach');}
function whipplecreekgazebo_hdri(){window.open('https://hdrihaven.com/hdri/?h=whipple_creek_gazebo');}
function dikhololosunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=dikhololo_sunset');}
function venetiancrossroads_hdri(){window.open('https://hdrihaven.com/hdri/?h=venetian_crossroads');}
function machineshop03_hdri(){window.open('https://hdrihaven.com/hdri/?h=machine_shop_03');}
function oldtreeincitypark_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_tree_in_city_park');}
function piazzamartinlutero_hdri(){window.open('https://hdrihaven.com/hdri/?h=piazza_martin_lutero');}
function mossyforest_hdri(){window.open('https://hdrihaven.com/hdri/?h=mossy_forest');}
function aftlounge_hdri(){window.open('https://hdrihaven.com/hdri/?h=aft_lounge');}
function georgentor_hdri(){window.open('https://hdrihaven.com/hdri/?h=georgentor');}
function bellparkpier_hdri(){window.open('https://hdrihaven.com/hdri/?h=bell_park_pier');}
function whiteclifftop_hdri(){window.open('https://hdrihaven.com/hdri/?h=white_cliff_top');}
function circusmaximus2_hdri(){window.open('https://hdrihaven.com/hdri/?h=circus_maximus_2');}
function vialegiuseppegaribaldi_hdri(){window.open('https://hdrihaven.com/hdri/?h=viale_giuseppe_garibaldi');}
function lenong2_hdri(){window.open('https://hdrihaven.com/hdri/?h=lenong_2');}
