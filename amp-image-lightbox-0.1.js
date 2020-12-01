(self.AMP=self.AMP||[]).push({n:"amp-image-lightbox",v:"2011070101001",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},da={};try{da.__proto__=ca;m=da.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=l;
function p(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.rb=b.prototype}var r;function t(){return r?r:r=Promise.resolve(void 0)};function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var u=self.AMP_CONFIG||{},ha=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ia(a){if(self.document&&self.document.head&&(!self.location||!ha.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||ia("runtime-host");u.geoApiUrl||ia("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");}function x(a,b,c){if(!v.user)throw Error("failed to call initLogConstructor");return v.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var y;function ja(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ka(a){return a.closest?a.closest("figure"):ja(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"figure"):!1})};var z,la="Webkit webkit Moz moz ms O o".split(" ");function ma(a,b,c){var d=a.style;if(!b.startsWith("--")){z||(z=Object.create(null));var e=z[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<la.length;h++){var k=la[h]+f;if(void 0!==d[k]){f=k;break b}}f=""}void 0!==d[f]&&(e=f)}z[b]=e}b=e}b&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}function A(a,b){for(var c in b)ma(a,c,b[c])}
function na(a){var b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function B(a,b,c,d){var e=new oa(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function oa(a,b,c,d){this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.y3=this.x3=1}g=oa.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var c=0,d=1,e=0,f=0;8>f;f++){e=this.getPointX(b);var h=(this.getPointX(b+1E-6)-e)/1E-6;if(1E-6>Math.abs(e-a))return b;if(1E-6>Math.abs(h))break;else e<a?c=b:d=b,b-=(e-a)/h}for(f=0;1E-6<Math.abs(e-a)&&8>f;f++)e<a?(c=b,b=(b+d)/2):(d=b,b=(b+c)/2),e=this.getPointX(b);return b};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.lerp=function(a,b,c){return a+c*(b-a)};
var pa=B(.25,.1,.25,1),qa=B(.42,0,1,1),ra=B(0,0,.58,1),sa=B(.42,0,.58,1),ta={linear:function(a){return a},ease:pa,"ease-in":qa,"ease-out":ra,"ease-in-out":sa};function ua(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return B(b[0],b[1],b[2],b[3])}return null}return ta[a]}return a};function va(a){var b=void 0===b?" ":b;return function(c,d){for(var e=[],f=0;f<a.length;f++){var h=(0,a[f])(c,d);"string"==typeof h&&e.push(h)}return e.join(b)}}function C(a,b){return function(c,d){for(var e in b){var f=e;"display"===f&&w().error("STYLE","`display` style detected. You must use toggle instead.");ma(a,f,b[e](c,d))}}}function D(a,b){return function(c){return a+(b-a)*c}}
function wa(a,b){return function(c){var d=a(c);"number"==typeof d&&(d+="px");if(!b)return"translate("+d+")";c=b(c);"number"==typeof c&&(c+="px");return"translate("+d+","+c+")"}}function xa(a){return function(b){return"scale("+a(b)+")"}};function E(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function ya(a){var b=za(a);b=Aa(b);return F(b,"history")}function za(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Aa(a){a=za(a);return a.isSingleDoc()?a.win:a}function F(a,b){Ba(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function Ba(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};function Ca(){}function G(a){this.W=a;this.Z=E(self,"vsync");this.Ra=null;this.G=[]}function Da(a,b,c){var d=Ea;return(new G(a)).setCurve(d).add(0,b,1).start(c)}G.prototype.setCurve=function(a){a&&(this.Ra=ua(a));return this};G.prototype.add=function(a,b,c,d){this.G.push({delay:a,func:b,duration:c,curve:ua(d)});return this};G.prototype.start=function(a){return new H(this.Z,this.W,this.G,this.Ra,a)};
function H(a,b,c,d,e){this.Z=a;this.W=b;this.G=[];for(b=0;b<c.length;b++){var f=c[b];this.G.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.fb=e;this.sa=Date.now();this.Y=!0;this.Wa={};c=new fa;this.ja=c.promise;this.La=c.resolve;this.Ka=c.reject;this.Ya=this.Z.createAnimTask(this.W,{mutate:this.pb.bind(this)});this.Z.canAnimate(this.W)?this.Ya(this.Wa):(w().warn("Animation","cannot animate"),I(this,!1,0))}
H.prototype.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};H.prototype.thenAlways=function(a){a=a||Ca;return this.then(a,a)};H.prototype.halt=function(a){I(this,!1,a||0)};function I(a,b,c){if(a.Y){a.Y=!1;if(0!=c){1<a.G.length&&a.G.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.G.length;c++)a.G[c].func(1,!0);else for(var d=a.G.length-1;0<=d;d--)a.G[d].func(0,!1)}catch(e){w().error("Animation","completion failed: "+e,e),b=!1}}b?a.La():a.Ka()}}
H.prototype.pb=function(){if(this.Y){for(var a=Date.now(),b=Math.min((a-this.sa)/this.fb,1),c=0;c<this.G.length;c++){var d=this.G[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.G.length;c++)if(d=this.G[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(h){w().error("Animation","step curve failed: "+h,h);I(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(h){w().error("Animation",
"step mutate failed: "+h,h),I(this,!1,0)}}1==b?I(this,!0,0):this.Z.canAnimate(this.W)?this.Ya(this.Wa):(w().warn("Animation","cancel animation"),I(this,!1,0))}};function Fa(){this.L=null}g=Fa.prototype;g.add=function(a){var b=this;this.L||(this.L=[]);this.L.push(a);return function(){b.remove(a)}};g.remove=function(a){this.L&&(a=this.L.indexOf(a),-1<a&&this.L.splice(a,1))};g.removeAll=function(){this.L&&(this.L.length=0)};g.fire=function(a){if(this.L)for(var b=this.L,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.L?this.L.length:0};function J(a,b){var c=this;this.Za=E(a,"timer");this.gb=b;this.eb=0;this.ka=-1;this.Ia=0;this.Y=!1;this.bb=function(){c.qa()}}J.prototype.isPending=function(){return-1!=this.ka};J.prototype.schedule=function(a){a=a||this.eb;this.Y&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Ia?(this.cancel(),this.Ia=b,this.ka=this.Za.delay(this.bb,a),!0):!1};J.prototype.qa=function(){this.ka=-1;this.Ia=0;this.Y=!0;this.gb();this.Y=!1};
J.prototype.cancel=function(){this.isPending()&&(this.Za.cancel(this.ka),this.ka=-1)};function Ga(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};var K;function Ha(a){if(void 0!==K)return K;K=!1;try{var b={get passive(){K=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return K};function Ia(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function Ja(a,b,c){this.T=a;this.w=[];this.da=[];this.O=[];this.A=[];this.o=null;this.mb=b;this.nb=c;this.va=!1;this.qa=new J(a.ownerDocument.defaultView,this.Sa.bind(this));this.Va=new Fa;this.ia=Object.create(null);this.Qa=this.lb.bind(this);this.Oa=this.jb.bind(this);this.Pa=this.kb.bind(this);this.Na=this.ib.bind(this);var d=Ha(a.ownerDocument.defaultView);this.T.addEventListener("touchstart",this.Qa,d?{passive:!0}:!1);this.T.addEventListener("touchend",this.Oa);this.T.addEventListener("touchmove",
this.Pa,d?{passive:!0}:!1);this.T.addEventListener("touchcancel",this.Na);this.Ja=!1}function Ka(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new Ja(a,b,c),a.__AMP_Gestures=d);return d}g=Ja.prototype;g.cleanup=function(){this.T.removeEventListener("touchstart",this.Qa);this.T.removeEventListener("touchend",this.Oa);this.T.removeEventListener("touchmove",this.Pa);this.T.removeEventListener("touchcancel",this.Na);delete this.T.__AMP_Gestures;this.qa.cancel()};
g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ia[d];e||(this.w.push(c),e=new Fa,this.ia[d]=e);return e.add(b)};g.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ia[b]){a.removeAll();a=Ga(this.w,function(a){return a.getType()==b});if(0>a)return!1;this.w.splice(a,1);this.O.splice(a,1);this.A.splice(a,1);this.da.splice(a,1);delete this.ia[b];return!0}return!1};g.onPointerDown=function(a){return this.Va.add(a)};
g.lb=function(a){var b=Date.now();this.va=!1;this.Va.fire(a);for(var c=0;c<this.w.length;c++)if(!this.O[c]&&(this.A[c]&&this.A[c]<b&&L(this,c),this.w[c].onTouchStart(a))){var d=c;this.da[d]=!0;this.A[d]=0}M(this,a)};g.kb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.da[c]&&(this.A[c]&&this.A[c]<b?L(this,c):this.w[c].onTouchMove(a)||L(this,c));M(this,a)};
g.jb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)if(this.da[c])if(this.A[c]&&this.A[c]<b)L(this,c);else{this.w[c].onTouchEnd(a);var d=!this.A[c],e=this.A[c]<b;this.o!=this.w[c]&&(d||e)&&L(this,c)}M(this,a)};g.ib=function(a){for(var b=0;b<this.w.length;b++){var c=b;this.O[c]=0;L(this,c)}M(this,a)};
function M(a,b){var c=!!a.o||a.va;a.va=!1;if(!c)for(var d=Date.now(),e=0;e<a.w.length;e++)if(a.O[e]||a.A[e]&&a.A[e]>=d){c=!0;break}c?(b.stopPropagation(),a.mb||b.preventDefault()):a.nb&&b.stopPropagation();a.Ja&&(a.Ja=!1,a.Sa())}
g.Sa=function(){for(var a=Date.now(),b=-1,c=0;c<this.w.length;c++)if(!this.O[c])this.A[c]&&this.A[c]<a&&L(this,c);else if(-1==b||this.O[c]>this.O[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.w.length;c++)!this.O[c]&&this.da[c]&&(d=Math.max(d,this.A[c]-a));if(2>d){a=b;c=this.w[a];for(var e=0;e<this.w.length;e++)if(e!=a){var f=e;this.O[f]=0;L(this,f)}this.O[a]=0;this.A[a]=0;this.o=c;c.acceptStart()}else this.qa.schedule(d)}};function L(a,b){a.da[b]=!1;a.A[b]=0;a.O[b]||a.w[b].acceptCancel()}
function N(a,b){this.qb=a;this.oa=b}g=N.prototype;g.getType=function(){return this.qb};g.signalReady=function(a){var b=this.oa;if(b.o)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.O[d]=c+a,b.A[d]=0);b.Ja=!0}};g.signalPending=function(a){var b=this.oa;if(b.o)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.A[d]=c+a)};g.signalEnd=function(){var a=this.oa;a.o==this&&(a.o=null,a.va=!0)};
g.signalEmit=function(a,b){var c=this.oa.ia[this.getType()];c&&c.fire(new Ia(this.getType(),a,Date.now(),b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function La(){}var Ma=Math.round(-16.67/Math.log(.95));function O(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function Na(a,b,c,d,e,f){return(new Oa(a,b,c,d,e,f)).start()}function Oa(a,b,c,d,e,f){this.Z=E(self,"vsync");this.W=a;this.wa=f;this.c=b;this.h=c;this.Ba=d;this.Ca=e;this.K=this.J=0;a=new fa;this.ja=a.promise;this.La=a.resolve;this.Ka=a.reject;this.fa=!1}g=Oa.prototype;
g.start=function(){this.fa=!0;if(.02>=Math.abs(this.Ba)&&.02>=Math.abs(this.Ca))this.wa(this.c,this.h),this.xa(!0);else{this.J=this.Ba;this.K=this.Ca;var a=this.ob.bind(this),b=this.xa.bind(this,!0);this.Z.runAnimMutateSeries(this.W,a,5E3).then(b,b)}return this};g.halt=function(){this.fa&&this.xa(!1)};g.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};g.thenAlways=function(a){a=a||La;return this.then(a,a)};
g.ob=function(a,b){if(!this.fa)return!1;this.c+=b*this.J;this.h+=b*this.K;if(!this.wa(this.c,this.h))return!1;var c=Math.exp(-a/Ma);this.J=this.Ba*c;this.K=this.Ca*c;return.02<Math.abs(this.J)||.02<Math.abs(this.K)};g.xa=function(a){this.fa&&(this.fa=!1,this.wa(this.c,this.h),a?this.La():this.Ka())};function P(a){N.call(this,"tap",a);this.h=this.c=this.j=this.m=0;this.Xa=null}p(P,N);P.prototype.onTouchStart=function(a){var b=a.touches;this.Xa=a.target;return b&&1==b.length?(this.m=b[0].clientX,this.j=b[0].clientY,!0):!1};P.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.c=a[0].clientX,this.h=a[0].clientY,a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a)?!1:!0};P.prototype.onTouchEnd=function(){this.signalReady(0)};
P.prototype.acceptStart=function(){this.signalEmit({clientX:this.c,clientY:this.h,target:this.Xa},null);this.signalEnd()};function Pa(a){N.call(this,"doubletap",a);this.P=this.h=this.c=this.j=this.m=0;this.Ta=null}p(Pa,N);g=Pa.prototype;g.onTouchStart=function(a){return 1<this.P?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.j=a[0].clientY,this.c=a[0].clientX,this.h=a[0].clientY,!0):!1};
g.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.c=a[0].clientX,this.h=a[0].clientY,a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a?(this.acceptCancel(),!1):!0):!1};g.onTouchEnd=function(a){this.P++;2>this.P?this.signalPending(200):(this.Ta=a,this.signalReady(0))};g.acceptStart=function(){this.P=0;this.signalEmit({clientX:this.c,clientY:this.h},this.Ta);this.signalEnd()};g.acceptCancel=function(){this.P=0};
function Q(a,b,c,d){N.call(this,a,b);this.Ua=c;this.$a=d;this.o=!1;this.K=this.J=this.V=this.R=this.sa=this.aa=this.$=this.h=this.c=this.j=this.m=0}p(Q,N);g=Q.prototype;g.onTouchStart=function(a){a=a.touches;return this.o&&a&&1<a.length?!0:a&&1==a.length?(this.sa=Date.now(),this.m=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.c=b;this.h=c;if(this.o)this.X(!1,!1,a);else if(a=Math.abs(b-this.m),b=Math.abs(c-this.j),this.Ua&&this.$a)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Ua)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.$a)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};g.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.ya(a)};
g.acceptStart=function(){this.o=!0;this.$=this.m;this.aa=this.j;this.V=this.sa;this.m=this.c;this.j=this.h;this.X(!0,!1,null)};g.acceptCancel=function(){this.o=!1};
g.X=function(a,b,c){this.R=Date.now();var d=this.R-this.V;if(!b&&4<d||b&&16<d){var e=O(this.c-this.$,d,this.J),f=O(this.h-this.aa,d,this.K);if(!b||32<d||0!=e||0!=f)this.J=1E-4<Math.abs(e)?e:0,this.K=1E-4<Math.abs(f)?f:0;this.$=this.c;this.aa=this.h;this.V=this.R}this.signalEmit({first:a,last:b,time:this.R,deltaX:this.c-this.m,deltaY:this.h-this.j,startX:this.m,startY:this.j,lastX:this.c,lastY:this.h,velocityX:this.J,velocityY:this.K},c)};g.ya=function(a){this.o&&(this.o=!1,this.X(!1,!0,a),this.signalEnd())};
function Qa(a){Q.call(this,"swipe-xy",a,!0,!0)}p(Qa,Q);function Ra(a){N.call(this,"tapzoom",a);this.o=!1;this.K=this.J=this.V=this.R=this.aa=this.$=this.P=this.h=this.c=this.j=this.m=0}p(Ra,N);g=Ra.prototype;g.onTouchStart=function(a){return this.o?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.c=b[0].clientX;this.h=b[0].clientY;if(this.o)this.X(!1,!1,a);else if(a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a){if(0==this.P)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};g.onTouchEnd=function(a){this.o?this.ya(a):(this.P++,1==this.P?this.signalPending(400):this.acceptCancel())};g.acceptStart=function(){this.P=0;this.o=!0;this.X(!0,!1,null)};g.acceptCancel=function(){this.P=0;this.o=!1};
g.X=function(a,b,c){this.R=Date.now();a?this.J=this.K=0:2<this.R-this.V&&(this.J=O(this.c-this.$,this.R-this.V,this.J),this.K=O(this.h-this.aa,this.R-this.V,this.K));this.$=this.c;this.aa=this.h;this.V=this.R;this.signalEmit({first:a,last:b,centerClientX:this.m,centerClientY:this.j,deltaX:this.c-this.m,deltaY:this.h-this.j,velocityX:this.J,velocityY:this.K},c)};g.ya=function(a){this.o&&(this.o=!1,this.X(!1,!0,a),this.signalEnd())};function R(a,b,c){return Math.min(Math.max(a,b),c)}function Sa(a,b){return Math.sqrt(a*a+b*b)};function Ta(a){var b;(b=a.complete||"complete"==a.readyState)||(b=("AUDIO"===a.tagName||"VIDEO"===a.tagName)&&0<a.readyState);return!!(b||a.document&&"complete"==a.document.readyState)};function S(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function Ua(a){return S(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};var Va=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Wa(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=Va.exec(b);){var d=c[1],e=void 0,f=void 0;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)f=parseFloat(c[2]);else continue}else f=1;a.push({url:d,width:e,dpr:f})}return new T(a)}var k=x(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new T([{url:k,width:void 0,dpr:1}])}
function T(a){x(0<a.length,"Srcset must have at least one source");this.ma=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}x(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?Xa:Ya);this.ab=b}
T.prototype.select=function(a,b){if(this.ab){b*=a;a=this.ma;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var h=a[f].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=f,d=k,e=h;else break}b=c}else{a=this.ma;c=0;d=Infinity;for(e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c}return this.ma[b].url};T.prototype.getUrls=function(){return this.ma.map(function(a){return a.url})};
T.prototype.stringify=function(a){for(var b=[],c=this.ma,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.ab?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function Xa(a,b){x(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function Ya(a,b){x(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};var Za={"amp-img":!0,"amp-anim":!0},$a=["aria-label","aria-describedby","aria-labelledby"],ab=B(.4,0,.2,1),U=B(.4,0,.2,1),Ea=B(.4,0,.2,1.4);
function bb(a,b,c){this.Aa=a;this.win=b;this.hb=c;this.ua=a.element.ownerDocument.createElement("div");this.ua.classList.add("i-amphtml-image-lightbox-viewer");this.C=a.element.ownerDocument.createElement("img");this.C.classList.add("i-amphtml-image-lightbox-viewer-image");this.ua.appendChild(this.C);this.ra=null;this.ba=this.ca=0;this.B=S(0,0,0,0);this.M=S(0,0,0,0);this.Fa=this.pa=this.na=this.l=1;this.ha=2;this.Ea=this.Da=this.Ha=this.Ga=this.D=this.F=this.j=this.m=0;this.U=null;cb(this)}g=bb.prototype;
g.getElement=function(){return this.ua};g.getImage=function(){return this.C};g.getViewerBox=function(){return this.B};g.getImageBox=function(){return this.M};g.getImageBoxWithOffset=function(){if(0==this.F&&0==this.D)var a=this.M;else{a=this.M;var b=this.F,c=this.D;a=0==b&&0==c||0==a.width&&0==a.height?a:S(a.left+b,a.top+c,a.width,a.height)}return a};
g.reset=function(){var a=this;this.C.setAttribute("src","");$a.forEach(function(b){a.C.removeAttribute(b)});this.C.removeAttribute("aria-describedby");this.ra=null;this.M=S(0,0,0,0);this.ba=this.ca=0;this.na=this.l=this.pa=1;this.ha=2;this.Ea=this.Da=this.Ha=this.Ga=this.D=this.F=this.j=this.m=0;this.U&&this.U.halt();this.U=null};function db(a,b,c){c?(a.ca=c.naturalWidth||b.offsetWidth,a.ba=c.naturalHeight||b.offsetHeight):(a.ca=b.offsetWidth,a.ba=b.offsetHeight)}
g.init=function(a,b){var c=this;db(this,a,b);this.ra=Wa(a);a.getImpl().then(function(a){a.propagateAttributes($a,c.C)});b&&Ta(b)&&b.src&&this.C.setAttribute("src",b.src)};
g.measure=function(){this.B=Ua(this.ua.getBoundingClientRect());var a=this.ca/this.ba,b=Math.min(this.B.width/a,this.B.height),c=Math.min(this.B.height*a,this.B.width);16>=Math.abs(c-this.ca)&&16>=Math.abs(b-this.ba)&&(c=this.ca,b=this.ba);this.M=S(Math.round((this.B.width-c)/2),Math.round((this.B.height-b)/2),Math.round(c),Math.round(b));A(this.C,{top:this.M.top+"px",left:this.M.left+"px",width:this.M.width+"px",height:this.M.height+"px"});var d=this.B.width/this.B.height;this.ha=Math.max(2,Math.max(d/
a,a/d));this.na=this.l=1;this.j=this.D=this.m=this.F=0;eb(this,this.l);V(this);return fb(this)};function fb(a){if(!a.ra)return t();a.pa=Math.max(a.pa,a.l);var b=a.ra.select(a.M.width*a.pa,self.devicePixelRatio||1);return b==a.C.getAttribute("src")?t():E(a.win,"timer").promise(1).then(function(){a.C.setAttribute("src",b);return a.hb(a.C)})}
function cb(a){var b=Ka(a.C);b.onGesture(P,function(){a.Aa.toggleViewMode()});b.onGesture(Qa,function(b){var c=b.data.deltaY,e=W(a,a.m+b.data.deltaX,!0);c=X(a,a.j+c,!0);Y(a,a.l,e,c,!1);b.data.last&&gb(a,b.data.velocityX,b.data.velocityY)});b.onPointerDown(function(){a.U&&a.U.halt()});b.onGesture(Pa,function(b){hb(a,1==a.l?a.ha:a.Fa,a.B.width/2-b.data.clientX,a.B.height/2-b.data.clientY,!0).then(function(){return ib(a,0,0,0,0,0,0)})});b.onGesture(Ra,function(b){jb(a,b.data.centerClientX,b.data.centerClientY,
b.data.deltaX,b.data.deltaY);b.data.last&&ib(a,b.data.centerClientX,b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.velocityY,b.data.velocityY)})}function W(a,b,c){c=c&&1<a.l?.25*a.B.width:0;return R(b,a.Ga-c,a.Da+c)}function X(a,b,c){c=c?.25*a.B.height:0;return R(b,a.Ha-c,a.Ea+c)}function eb(a,b){var c=0,d=0,e=a.B.height-a.M.height*b;0<=e?d=c=0:(d=e/2,c=-d);var f=0,h=0;b=a.B.width-a.M.width*b;0<=b?h=f=0:(h=b/2,f=-h);a.Ga=h;a.Ha=d;a.Da=f;a.Ea=c}
function V(a){var b=a.C;var c=a.F;var d=a.D;"number"==typeof c&&(c+="px");void 0===d?c="translate("+c+")":("number"==typeof d&&(d+="px"),c="translate("+c+", "+d+")");A(b,{transform:c+" scale("+(a.l+")")});1!=a.l&&a.Aa.toggleViewMode(!0)}function gb(a,b,c){var d=a.D-a.j;1==a.l&&10<Math.abs(d)?a.Aa.close():(a.U=Na(a.C,a.F,a.D,b,c,function(b,c){b=W(a,b,!0);c=X(a,c,!0);if(1>Math.abs(b-a.F)&&1>Math.abs(c-a.D))return!1;Y(a,a.l,b,c,!1);return!0}),a.U.thenAlways(function(){a.U=null;return kb(a)}))}
function jb(a,b,c,d,e){var f=Sa(d,e),h=Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d);if(0!=h){var k=a.na*(1+h*f/100),n=a.B.width/2-b,q=a.B.height/2-c;d=Math.min(n,f/100*n);e=Math.min(q,f/100*q);hb(a,k,d,e,!1)}}function hb(a,b,c,d,e){b=R(b,a.Fa-.25,a.ha+.25);if(b!=a.l)return eb(a,b),c=W(a,a.m+c*b,!1),d=X(a,a.j+d*b,!1),Y(a,b,c,d,e)}
function ib(a,b,c,d,e,f,h){d=0==f&&0==h?t():Na(a.C,d,e,f,h,function(d,e){jb(a,b,c,d,e);return!0}).thenAlways();var k=a.l>a.na;return d.then(function(){return kb(a)}).then(function(){k&&fb(a)})}
function Y(a,b,c,d,e){var f=b-a.l,h=Sa(c-a.F,d-a.D),k=0;e&&(k=Math.min(250,Math.max(2.5*h,250*Math.abs(f))));if(16<k&&e){var n=D(a.l,b),q=D(a.F,c),mb=D(a.D,d);e=Da(a.C,function(b){a.l=n(b);a.F=q(b);a.D=mb(b);V(a)},k).thenAlways(function(){a.l=b;a.F=c;a.D=d;V(a)})}else a.l=b,a.F=c,a.D=d,V(a),e=e?t():void 0;return e}function kb(a){var b=R(a.l,a.Fa-0,a.ha+0);b!=a.l&&eb(a,b);var c=W(a,a.F/a.l*b,!1),d=X(a,a.D/a.l*b,!1);return Y(a,b,c,d,!0).then(function(){a.na=a.l;a.m=a.F;a.j=a.D})}
function Z(a){var b=AMP.BaseElement.call(this,a)||this;b.za=-1;b.ea=!1;b.ga=!1;b.la=null;b.H=null;b.ta=null;b.I=null;b.N=null;b.S=null;b.Ma=b.cb.bind(b);b.registerDefaultAction(function(a){return lb(b,a)},"open");return b}p(Z,AMP.BaseElement);Z.prototype.buildCallback=function(){var a=za(this.element);a=Aa(a);(Ba(a,"action")?F(a,"action"):null).addToAllowlist("AMP-IMAGE-LIGHTBOX","open",["email"])};
function nb(a){if(!a.I){a.I=a.element.ownerDocument.createElement("div");a.I.classList.add("i-amphtml-image-lightbox-container");a.element.appendChild(a.I);a.N=new bb(a,a.win,a.loadPromise.bind(a));a.I.appendChild(a.N.getElement());a.S=a.element.ownerDocument.createElement("div");a.S.setAttribute("id",a.element.getAttribute("id")+"-caption");a.S.classList.add("amp-image-lightbox-caption");a.S.classList.add("i-amphtml-image-lightbox-caption");a.I.appendChild(a.S);var b=a.element.ownerDocument.createElement("button"),
c=a.element.getAttribute("data-close-button-aria-label")||"Close the lightbox";b.textContent=c;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",function(){a.close()});a.element.appendChild(b);var d=Ka(a.element);a.element.addEventListener("click",function(b){a.ga||a.N.getImage().contains(b.target)||a.close()});d.onGesture(P,function(){a.ga||a.close()});d.onGesture(Qa,function(){})}}
function lb(a,b){a.ea||(nb(a),b=b.caller,x(b&&Za[b.tagName.toLowerCase()],"Unsupported element: %s",b.tagName),a.ea=!0,ob(a),pb(a,b),a.win.document.documentElement.addEventListener("keydown",a.Ma),a.getViewport().enterLightboxMode(),qb(a),a.ta=a.getViewport().onChanged(function(){a.ea&&(E(a.win,"platform").getIosVersionString().startsWith("10.3")?E(a.win,"timer").delay(function(){a.N.measure()},500):a.N.measure())}),ya(a.getAmpDoc()).push(a.close.bind(a)).then(function(b){a.za=b}))}
Z.prototype.cb=function(a){"Escape"==a.key&&(a.preventDefault(),this.close())};Z.prototype.close=function(){if(this.ea&&(this.ga=this.ea=!1,rb(this),this.ta&&(this.ta(),this.ta=null),this.getViewport().leaveLightboxMode(),-1!=this.za&&ya(this.getAmpDoc()).pop(this.za),this.win.document.documentElement.removeEventListener("keydown",this.Ma),this.la))try{this.la.focus()}catch(a){}};Z.prototype.toggleViewMode=function(a){void 0!==a?this.I.classList.toggle("i-amphtml-image-lightbox-view-mode",a):this.I.classList.toggle("i-amphtml-image-lightbox-view-mode")};
function pb(a,b){a.la=b;/^[\w-]+$/.test("img");if(void 0!==y)var c=y;else{try{var d=b.ownerDocument,e=d.createElement("div"),f=d.createElement("div");e.appendChild(f);c=e.querySelector(":scope div")===f}catch(q){c=!1}c=y=c}c?c=b.querySelector("> img".replace(/^|,/g,"$&:scope ")):(b.classList.add("i-amphtml-scoped"),c="> img".replace(/^|,/g,"$&.i-amphtml-scoped "),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);a.H=c;a.N.init(a.la,a.H);var h=null,k=ka(b);k&&
(/^[\w-]+$/.test("figcaption"),h=k.querySelector("figcaption"));if(!h){var n=b.getAttribute("aria-describedby");h=a.element.ownerDocument.getElementById(n)}if(h){d=h;b=a.S;c=b.ownerDocument.createDocumentFragment();for(d=d.firstChild;d;d=d.nextSibling)c.appendChild(d.cloneNode(!0));b.appendChild(c);a.N.getImage().setAttribute("aria-describedby",a.S.getAttribute("id"))}a.S.classList.toggle("i-amphtml-empty",!h)}
function ob(a){a.N.reset();for(var b=a.S;b.firstChild;)b.removeChild(b.firstChild);a.la=null;a.H=null;a.toggleViewMode(!1)}
function qb(a){a.ga=!0;na(a.element);A(a.element,{opacity:0});a.N.measure();var b=new G(a.element);b.add(0,C(a.element,{opacity:D(0,1)}),.6,ab);var c=null;if(a.H&&Ta(a.H)&&a.H.src){c=a.element.ownerDocument.createElement("div");c.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(c);var d=Ua(a.H.getBoundingClientRect()),e=a.N.getImageBox(),f=a.H.cloneNode(!0);f.className="";A(f,{position:"absolute",top:d.top+"px",left:d.left+"px",width:d.width+"px",height:d.height+
"px",transformOrigin:"top left",willChange:"transform"});c.appendChild(f);a.H.classList.add("i-amphtml-ghost");var h=e.left-d.left,k=e.top-d.top,n=0!=d.width?e.width/d.width:1,q=R(Math.abs(k)/250*.8,.2,.8);b.add(0,C(f,{transform:va([wa(D(0,h),D(0,k)),xa(D(1,n))])}),q,ab);A(a.I,{opacity:0});b.add(.8,C(a.I,{opacity:D(0,1)}),.1,ab);b.add(.9,C(c,{opacity:D(1,.01)}),.1,U)}b.start(500).thenAlways(function(){a.ga=!1;A(a.element,{opacity:""});A(a.I,{opacity:""});c&&a.getAmpDoc().getBody().removeChild(c)})}
function rb(a){var b=a.N.getImage(),c=a.N.getImageBoxWithOffset(),d=new G(a.element),e=500;d.add(0,C(a.element,{opacity:D(1,0)}),.9,U);var f=null;if(Ta(b)&&b.src&&a.H){f=a.element.ownerDocument.createElement("div");f.classList.add("i-amphtml-image-lightbox-trans");a.getAmpDoc().getBody().appendChild(f);var h=Ua(a.H.getBoundingClientRect()),k=b.cloneNode(!0);A(k,{position:"absolute",top:c.top+"px",left:c.left+"px",width:c.width+"px",height:c.height+"px",transform:"",transformOrigin:"top left",willChange:"transform"});
f.appendChild(k);d.add(0,C(a.I,{opacity:D(1,0)}),.1,U);b=h.top-c.top;var n=0!=c.width?h.width/c.width:1,q=C(k,{transform:va([wa(D(0,h.left-c.left),D(0,b)),xa(D(1,n))])});c=R(Math.abs(b)/250*.8,.2,.8);d.add(Math.min(.8-c,.2),function(b,c){q(b);c&&a.H.classList.remove("i-amphtml-ghost")},c,U);d.add(.8,C(f,{opacity:D(1,.01)}),.2,U);e=R(Math.abs(b)/250*e,300,e)}d.start(e).thenAlways(function(){a.H&&a.H.classList.remove("i-amphtml-ghost");a.collapse();A(a.element,{opacity:""});A(a.I,{opacity:""});f&&a.getAmpDoc().getBody().removeChild(f);
ob(a)})}(function(a){a.registerElement("amp-image-lightbox",Z,"amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-image-lightbox-0.1.js.map

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
function lot02_hdri(){window.open('https://hdrihaven.com/hdri/?h=lot_02');}
function smallhangar02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_hangar_02');}
function concretetunnel_hdri(){window.open('https://hdrihaven.com/hdri/?h=concrete_tunnel');}
function redhillstraight_hdri(){window.open('https://hdrihaven.com/hdri/?h=red_hill_straight');}
function whaleskeleton_hdri(){window.open('https://hdrihaven.com/hdri/?h=whale_skeleton');}
function colosseum_hdri(){window.open('https://hdrihaven.com/hdri/?h=colosseum');}
function balcony_hdri(){window.open('https://hdrihaven.com/hdri/?h=balcony');}
function tuckerwreck_hdri(){window.open('https://hdrihaven.com/hdri/?h=tucker_wreck');}
function hikerscave_hdri(){window.open('https://hdrihaven.com/hdri/?h=hikers_cave');}
function teufelsbergground2_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_ground_2');}
function debalie_hdri(){window.open('https://hdrihaven.com/hdri/?h=de_balie');}
function lookout_hdri(){window.open('https://hdrihaven.com/hdri/?h=lookout');}
function konzerthaus_hdri(){window.open('https://hdrihaven.com/hdri/?h=konzerthaus');}
function riverrocks_hdri(){window.open('https://hdrihaven.com/hdri/?h=river_rocks');}
function vulturehide_hdri(){window.open('https://hdrihaven.com/hdri/?h=vulture_hide');}
function veldfire_hdri(){window.open('https://hdrihaven.com/hdri/?h=veld_fire');}
function blenderinstitute_hdri(){window.open('https://hdrihaven.com/hdri/?h=blender_institute');}
function redwall_hdri(){window.open('https://hdrihaven.com/hdri/?h=red_wall');}
function emmarentia_hdri(){window.open('https://hdrihaven.com/hdri/?h=emmarentia');}
function stream_hdri(){window.open('https://hdrihaven.com/hdri/?h=stream');}
function ahornsteig_hdri(){window.open('https://hdrihaven.com/hdri/?h=ahornsteig');}
function storeroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=storeroom');}
function pylons_hdri(){window.open('https://hdrihaven.com/hdri/?h=pylons');}
function binnenalster_hdri(){window.open('https://hdrihaven.com/hdri/?h=binnenalster');}
function derelictunderpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=derelict_underpass');}
function residentialgarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=residential_garden');}
function abandonedgamesroom02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_games_room_02');}
function eilenriedelabyrinth_hdri(){window.open('https://hdrihaven.com/hdri/?h=eilenriede_labyrinth');}
function summerstage02_hdri(){window.open('https://hdrihaven.com/hdri/?h=summer_stage_02');}
function tiber1_hdri(){window.open('https://hdrihaven.com/hdri/?h=tiber_1');}
function hamburgcanal_hdri(){window.open('https://hdrihaven.com/hdri/?h=hamburg_canal');}
function autumncrossing_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_crossing');}
function woods_hdri(){window.open('https://hdrihaven.com/hdri/?h=woods');}
function teufelsbergroof_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_roof');}
function fisheaglehill_hdri(){window.open('https://hdrihaven.com/hdri/?h=fish_eagle_hill');}
function skatepark_hdri(){window.open('https://hdrihaven.com/hdri/?h=skate_park');}
function moultonstationtraintunnelwest_hdri(){window.open('https://hdrihaven.com/hdri/?h=moulton_station_train_tunnel_west');}
function northcliff_hdri(){window.open('https://hdrihaven.com/hdri/?h=northcliff');}
function damroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=dam_road');}
function wobblybridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=wobbly_bridge');}
function partialeclipse_hdri(){window.open('https://hdrihaven.com/hdri/?h=partial_eclipse');}
function teufelsbergground1_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_ground_1');}
function riverwalk2_hdri(){window.open('https://hdrihaven.com/hdri/?h=river_walk_2');}
function nkuhlu_hdri(){window.open('https://hdrihaven.com/hdri/?h=nkuhlu');}
function skukuzagolf_hdri(){window.open('https://hdrihaven.com/hdri/?h=skukuza_golf');}
function underbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=under_bridge');}
function courtyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=courtyard');}
function betweenbridges_hdri(){window.open('https://hdrihaven.com/hdri/?h=between_bridges');}
function summerstage01_hdri(){window.open('https://hdrihaven.com/hdri/?h=summer_stage_01');}
function rooflessruins_hdri(){window.open('https://hdrihaven.com/hdri/?h=roofless_ruins');}
function sterkspruitfalls_hdri(){window.open('https://hdrihaven.com/hdri/?h=sterkspruit_falls');}
function sabietent_hdri(){window.open('https://hdrihaven.com/hdri/?h=sabie_tent');}
function _hdri(){window.open('https://hdrihaven.com/hdri/?h=');}
