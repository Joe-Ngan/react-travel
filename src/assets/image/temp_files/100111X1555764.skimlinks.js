/*
 (c) Skimlinks 2009-2021
 Build time: Mon, 23 Aug 2021 09:41:55 GMT
 Version: "15.2.0-stackpath"
*/
(function(){function Zb(){var a=t.linksImpressions;a={phr:a.skimwords.urls,unl:a.unlinked.urls,slc:a.skimlinks.count,swc:a.skimwords.count,ulc:a.unlinked.count,jsl:(new Date).getTime()-t.loading_started,pref:k.referrer,uc:ba,t:1,jsf:"",jv:T};ca&&(a.xrf=1);return Va(a)}function Wa(a,b){b=b||Xa(a);if(!b)return!0;Ya(b);var c=f("skimlinks_keywee_pixel",null);var d=r(l.location.href,"utm_campaign=fbkw");c&&d&&Za(c);f("vglnk")&&da(b,"skimwords-link")&&(a&&a.stopPropagation?a.stopPropagation():(c=l.event,
c.cancelBubble=!0));return!0}function Ya(a,b){a&&a.nodeName&&"A"!==a.nodeName.toUpperCase()&&"AREA"!==a.nodeName.toUpperCase()&&(a=$a(a));if(a){var c=$b(a);var d=n.waypointDomain;if(c.length>=d.length&&c.substr(0,d.length)===d)return!0;if(-1!==c.indexOf(d))d=c;else{d=a;var e=da(d,"skimwords-link"),h=y(d,"data-skim-creative"),f=y(d,"data-skimlinks-tracking")||ba,g=xa?"&"+xa:"";c=u(ya(),{id:ab,isjs:1,jv:T,sref:l.location,url:c,xguid:k.cookie,xs:1,xtz:bb(),xuuid:k.uuid});h&&(c.xcreo=h);k.isAdblockUser&&
(c.abp=1);I&&(c.site=I);f&&(c.xcust=f);e&&(c.xs=2,c.xword=y(d,"data-skimwords-word")||"");e=z(d);e.icust&&(c.xjsf=e.icust);e.sourceApp&&(c.xs=e.sourceApp);e.clientClickId&&(c.cci=e.clientClickId,delete z(d).clientClickId);e.linkSwappingMatchId&&(c.ls=e.linkSwappingMatchId);d=n.waypointDomain+"/?"+U(c)+g}cb(a,d,b)}return!0}function $a(a){for(;a.parentNode;){a=a.parentNode;var b=a.nodeName.toUpperCase();if("A"===b||"AREA"===b)return a}return null}function db(a,b,c){a=J(l,["skimlinks_settings",a],l[a]);
return A(a)?b:q(c)?c(a,b):a}function f(a,b,c){if(K(a)){a:{void 0===a&&(a=[]);for(var d=0;d<a.length;d++){var e=db(a[d]);if(!A(e)){if(q(c)){b=c(e,b);break a}b=e;break a}}}return b}return db(a,b,c)}function eb(){return J(ea(),["runTimeInfo","isAdblockUser"])}function D(a){return a.replace(/^www\./i,"")}function za(){for(var a="",b=0;8>b;b++)a+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return a}function q(a){return"[object Function]"===Object.prototype.toString.call(a)}function E(a,
b,c){for(var d=0,e=null===a?0:a.length;d<e;)c=b(c,a[d],d,a),d+=1;return c}function fa(a){return"console"in window&&q(window.console[a])?window.console[a]:function(){}}function ha(a,b){return E(b,function(b,d){return b&&q(a[d])},!0)}function ac(){try{var a=JSON.stringify({a:1});return 1===JSON.parse(a).a}catch(b){return!1}}function v(a,b){var c=Error(b);c.name=a;fb(c,"getPrototypeOf"in Object?Object.getPrototypeOf(this):this.__proto__);Error.captureStackTrace&&Error.captureStackTrace(c,v);return c}
function fb(a,b){"setPrototypeOf"in Object?Object.setPrototypeOf(a,b):a.__proto__=b}function A(a){return"undefined"===typeof a||null===a}function K(a){return Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a)}function L(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(K(a))for(var c=0;c<a.length;c++)b(a[c],c,a);else for(c in a)L(a,c)&&b(a[c],c,a)}function u(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);A(a)&&(a={});w(b,function(b){A(b)&&
(b={});w(Object.keys(b),function(c){a[c]=b[c]})});return a}function ia(a,b){var c=[];w(a,function(d,e){b(d,e,a)&&c.push(d)});return c}function gb(a){void 0===a&&(a=[]);return ia(a,function(a){return!!a})}function Aa(a,b){if(!a)return[];if(!b)return[].concat(a);var c=[];w(a,function(d,e){c.push(b(d,e,a))});return c}function M(a){return A(a)?"":a.toString().replace(/^[\s\xA0]+|[\s\xA0]+$/g,"")}function ja(a){return"boolean"===typeof a}function F(a,b){return"undefined"===typeof a?b:a}function Ba(a,b,
c){a=F(a,"");b=F(b,"");c=F(c,0);return 0===a.slice(c).indexOf(b)}function ka(a,b,c){a=F(a,"");b=F(b,"");c=F(c,0);c=c<a.length?c|0:a.length;return a.substr(c-b.length,b.length)===b}function bc(a){return encodeURIComponent(a).replace(/[!'()*~]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function Ca(a,b){void 0===b&&(b=!0);var c=document.createElement("a");if(b)var d=a;else{d=void 0;void 0===d&&(d="http");var e="";/^https?:\/\//.test(a)||/^\/[^/]+/.test(a)||(e=/^\/\//.test(a)?
d+":":d+"://");d=""+e+a}c.href=d;try{return D(c.hostname)}catch(h){return""}}function U(a,b){var c=[];b=b||bc;w(a,function(a,e){c.push(e+"="+b(a))});return c.join("&")}function Da(a,b,c,d){function e(){if(q(d.onError)){var b=400<=m.status&&500>m.status,c=500<=m.status&&600>m.status;d.onError(new (0===m.status?cc:b?dc:c?ec:fc)(g+" "+a+" "+m.status))}}b=b||{};d=d||{};var h=d.data,f=d.headers||{},g=d.method||"GET",m=new XMLHttpRequest;d.withCredentials&&(m.withCredentials=!0);b=U(b);b.length&&(a=a+"?"+
b);m.open(g,a);w(f,function(a,b){m.setRequestHeader(b,a)});m.onload=function(){if(q(c))if(200<=m.status&&300>m.status){try{var a=JSON.parse(m.responseText)}catch(Hd){a=m.responseText}c(a)}else e()};m.onerror=e;m.send(h);return m}function J(a,b,c){if(!a||!b||!b.length)return c;for(var d=b.length,e=0;e<d;e++){var h=b[e];if(a&&h in a)a=a[h];else return c}return a}function ea(){return window.__SKIM_JS_GLOBAL__&&q(window.__SKIM_JS_GLOBAL__.getDebugInfo)?window.__SKIM_JS_GLOBAL__.getDebugInfo():{}}function gc(a){var b=
/(?::(\d+))?:(\d+)$/,c=/^([^ ]+)\s\((.*)\)$/,d={filename:a,"function":"?",lineno:null,colno:null,in_app:!0};c.test(a)&&(a=a.match(c).slice(1),c=a[1],d["function"]=a[0],d.filename=c);b.test(d.filename)&&(c=d.filename.match(b).slice(1),a=c[0],c=c[1],a&&c?(d.lineno=parseInt(a,10),d.colno=parseInt(c,10)):!a&&c&&(d.lineno=parseInt(c,10)),d.filename=d.filename.replace(b,""));return d}function hc(a){a=a.stack.replace(a.toString(),"").replace(/^\s+at\s+/gm,"").split("\n");a=Aa(a,function(a){return M(a)});
a=gb(a);a.reverse();return Aa(a,gc)}function la(a,b){if(a&&hb){ib.push(a);try{ic.sendError(a,b)}catch(d){if(d===a)jb.error(a);else{var c=new jc;c.__sentryExtraData__={logger_error_message:d.message,logger_error_stack:d.stack,initial_error_message:a.message,intial_error_stack:a.stack};throw c;}}}}function B(a){return q(a)?function(){try{a.apply(this,arguments)}catch(b){la(b)}}:a}function kb(a){var b=!1,c;return function(){if(b)return c;c=a.apply(this,arguments);b=!0;return c}}function lb(a,b){return K(a)?
a:b}function y(a,b,c){3<=arguments.length&&("undefined"!==typeof a.setAttribute?a.setAttribute(b,c):a[b]=c);try{var d=a[b];d||(d=a.getAttribute(b));return d}catch(e){return null}}function N(a,b){var c=Array.prototype.slice.call(arguments,2),d=B(a);return window.setTimeout.apply(window,[d,b].concat(c))}function kc(a,b){function c(){a.href=a.skimlinksOriginalHref;delete a.skimlinksOriginalHostname;delete a.skimlinksOriginalHref;delete a.skimlinksRestoreSwappedLink}b=b||mb;var d=N(c,b);a.skimlinksOriginalHostname=
a.hostname;a.skimlinksOriginalHref=a.href;a.skimlinksRestoreSwappedLink=function(){clearTimeout(d);c()}}function cb(a,b,c){if(a){"string"===typeof a.skimlinksOriginalHref||kc(a,c);c=null;var d=a.childNodes.length&&3===a.childNodes[0].nodeType;"msie"===k.detect.browser&&d&&(c=a.innerHTML);a.href=b;c&&c!==a.innerHTML&&(a.innerHTML=c)}}function Ea(a,b){var c=b?b.charAt(0).toUpperCase()+b.slice(1):"";return a["skimlinksOriginal"+c]||a[b]}function nb(a){var b=a.href;b=k.cookie?b.replace(/([&?])xguid=([a-fA-F0-9]{32})/,
"$1xguid="+k.cookie):b.replace(/([&?]xguid=[a-fA-F0-9]{32})/,"");b!==a.href&&cb(a,b);return b}function ob(a){a=a||document;a=a.body||a.getElementsByTagName("body")[0];if(!a)throw new pb;return a}function Za(a,b,c){if(!C){C=document.createElement("iframe");C.id="skimlinks-pixels-iframe";try{ob().appendChild(C)}catch(h){h instanceof pb&&document.documentElement.appendChild(C)}var d=C;d.width=0;d.height=0;d.style.display="none"}var e=C.contentDocument||C.contentWindow.document;d=ob(e);d||(d=document.createElement("body"),
e.appendChild(d));e=e.createElement("img");e.src=a;e.width=1;e.height=1;q(b)&&(e.onload=B(b));q(c)&&(e.onerror=B(c));d.appendChild(e)}function ya(){var a={};Fa&&(a.dnt=Fa);qb&&(a.fdnt=1);return a}function ma(a,b,c,d){var e=d||{};d=e.usePixel||!1;var h=e.useSendBeacon||!1;e=e.callback||function(){};c=u({},c,ya());h?rb(a,b,c,e):d?sb(a,b,c,e):Ga(a,b,c,e)}function rb(a,b,c,d){b=JSON.stringify(b);return navigator.sendBeacon&&(a=Ha(a,c),navigator.sendBeacon(a,b))?(d&&d(),!0):!1}function sb(a,b,c,d){c=u({},
c);c.rnd=Math.random();b&&(c.data=JSON.stringify(b));Za(Ha(a,c),d,d)}function Ga(a,b,c,d){b=JSON.stringify(b);tb.post(Ha(a,c),{},d,{headers:{"Content-type":"text/plain"},data:b,withCredentials:!0})}function Ha(a,b){var c=U(b),d=""+lc+a;return c?d+"?"+c:d}function r(a,b){return q(a.indexOf)?-1<a.indexOf(b):!1}function na(a){var b=D(oa);return r(a,ub)||r(a,"go.redirectingat.com")||!!b&&r(a,b)}function g(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=
c;return a}function mc(a,b){if(!a)throw Error("[matchSelector] First argument needs to be an html element.");var c=window.Element.prototype;c=c.matches||c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector;if(q(c))try{return c.call(a,b)}catch(e){return!1}c=(a.document||a.ownerDocument).querySelectorAll(b);for(var d=0;c[d]&&c[d]!==a;)d+=1;return!!c[d]}function Ia(a,b){var c=nc(a);if(!c||!K(b)||0===b.length)return!1;var d=b.map(function(a){return a+" *"}).concat(b).join(",");return mc(c,
d)}function nc(a){for(;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.parentNode;return a}function vb(a,b){for(var c=0;c<a.length;c++)if(b(a[c]))return a[c]}function O(a,b){if("function"!=typeof a||null!=b&&"function"!=typeof b)throw new TypeError("Expected a function");if(!O.Cache)return a;var c=function e(){for(var c=arguments.length,f=Array(c),g=0;g<c;g++)f[g]=arguments[g];c=b?b.apply(this,f):f[0];g=e.cache;if(g.has(c))return g.get(c);f=a.apply(this,f);e.cache=g.set(c,f)||g;return f};c.cache=new O.Cache;
return c}function wb(a,b){return!!vb(b,function(b){var c=Ba("*"),e=ka("*"),h=b.replace(/\*/g,"");return c&&e?r(a,h):c?ka(a,h):e?Ba(a,h):a===b})}function xb(a,b){return a&&a.length&&b?"undefined"!==typeof vb(a,b):!1}function oc(a){return f("_merchantSettings")?xb(pc,function(b){return r(a,b)}):!1}function yb(a){if(!a||!a.href)return!0;var b=M(Ea(a,"href"));(b=!zb(b))||(b=[].concat(qc(),rc(),Ab),b=b.length&&Ia(a,b)?!0:Ja.length?!Ia(a,Ja):!1);return b}function zb(a){if(!a||oc(a))return!1;var b=n.hostname;
var c=F(void 0,!0);c=Ca(a,c);var d=ka(c,"."+b)||ka(b,"."+c);if(b=c!==b&&!d)a=Ca(a),a=pa.length?!wb(a,pa):wb(a,sc()),b=!a;return b}function tc(a){var b;if(b=Bb)null===a.offsetParent?b=!0:(b=l.getComputedStyle,b=q(b)?"hidden"===b(a).visibility:!1);if(b)return p.IGNORE;var c=M(Ea(a,"href"));b=D(Ea(a,"hostname"));c=c?/^https?:\/\//.test(c)||/^\/\//.test(c):!1;if(c&&!yb(a)){if(ca)return p.TRACK;if(!0===n.aff_domains[b]||L(Ka,b))return p.AFFILIATE;if(na(b))return p.PRE_AFFILIATED;if(a=La)a=!L(n.aff_domains,
b)||A(n.aff_domains[b]);return a?p.UNKNOWN:""===k.cookie&&Cb?p.AFFILIATE:p.TRACK}return p.IGNORE}function da(a,b){if(!a||!a.className||!b)return!1;var c=a&&a.className?M(a.className).split(/\s+/):[];return r(c,b)}function qa(a){if("string"!==typeof a.skimlinksOriginalHref)return!1;var b=z(a),c=a.href,d=document.createElement("a"),e={};d.href=c;if(c=d.search.substring(1))for(c=c.replace(/&amp;/g,"&").split("&"),d=0;d<c.length;d++){var h=c[d].split("="),f=h[1];e[h[0]]=f?decodeURIComponent(f):null}b.icust&&
b.icust!==e.xjsf&&(e.xjsf=b.icust);b.sourceApp&&b.sourceApp!==e.xs&&(e.xs=b.sourceApp);b=U(e);a.href=n.waypointDomain+"?"+b;return!0}function z(a){if(!a)throw Error("getAnchorMetaData takes an anchor HTML element as an argument");var b=J(a,[Db]);if(!b){b={icust:null,sourceApp:null};var c=[Db],d=b;if(a&&c&&c.length)for(var e=c.length,h=a,f=null,g=0;g<e;g++){var m=c[g];if(g===e-1){try{a[m]=d}catch(Gd){h[f]={},h[f][m]=d}break}if(h=m in a)h=a[m],f=typeof h,h=null!==h&&("object"===f||"function"===f);h||
(a[m]={});h=a;f=m;a=a[m]}}return b}function Eb(a,b,c){b=u({},b,{domain_id:ra,publisher_id:sa,page_url:l.location.href,impression_id:k.uuid,jv:T});var d={};navigator.sendBeacon?d.useSendBeacon=!!c:d.usePixel=!!c;ma("/generic_tracking/"+a,b,{},d)}function Xa(a){a=a.target||a.srcElement||a.originalTarget;if(!a)return null;var b=(a.nodeName||"").toLowerCase();return r(["a","area"],b)?a:$a(a)}function ta(a){try{return a()}catch(b){}}function uc(a){var b=f("gtag");ta(function(){b("event",P,{event_category:"click",
event_label:a})})}function vc(a){var b=f("ga");ta(function(){b("send","event","click",P,a)})}function wc(a){var b=f("_gaq");ta(function(){b.push(["_trackEvent","click",P,a])})}function xc(a){var b=f("pageTracker");b._trackPageview&&ta(function(){b._trackPageview("/"+P+"/"+a)})}function yc(a,b){return E(Object.keys(b),function(c,d){var e=a[d]===b[d];return c&&e},!0)}function zc(a){return E(a,function(a,c){return a.concat(c)},[])}function Ma(a,b){void 0===b&&(b=!0);var c=a?"."+a:"";return zc(G.querySelectorAll(b?
"a[href]"+c+", area[href]"+c:"a[href]"+c))}function Ac(a,b){w(a,function(a){var c=r(b,a)&&!na(a);n.aff_domains[a]=c})}function Bc(a,b){return!xb(a,function(a){return!b(a)})}function Cc(){for(var a=new H,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];a.waitFor(c);return a}function Dc(a){return E(a,function(a,c){return r(a,c)?a:a.concat(c)},[])}function Na(a){var b=Fb[a];if(!b)throw Error("Unknown service "+a);return b}function Gb(a,b){if(a){var c=[].concat(a.split(" "),b);c=Dc(c)}else c=
b;return c}function Ec(){if(Oa||ua){var a=[];Oa&&a.push("nofollow");ua&&(a=Gb(ua,a));w(Ma(),function(b){var c=a,d=y(b,"rel"),e=D(b.hostname);e&&!0===n.aff_domains[e]&&y(b,"rel",Gb(d,c).join(" "))})}}function Fc(a){if(a.affiliationType===p.IGNORE)return!1;var b=a.anchor,c=a.affiliationType,d=a.nativeEvent;if(a.type===Q.LEFT_CLICK)if(b=a.anchor,c=a.affiliationType,c===p.AFFILIATE||c===p.UNKNOWN){b=a.anchor;c=a.nativeEvent;d=a.clientClickId;var e,h,g;if(g=f("skimlinks_strip_attribute",!1))for(h in g)if(L(g,
h)){var n=g[h];(e=y(b,h))&&0===e.indexOf(n)&&(e=e.substr(n.length),y(b,h,e))}V&&y(b,"target",V);z(a.anchor);z(b).clientClickId=d;qa(b);P&&(a=b.href,f("gtag")?uc(a):f("ga")?vc(a):f("_gaq")?wc(a):f("pageTracker")&&xc(a));a=Hb?(a=y(b,"onclick"))&&r(a.toString(),"return false")?!0:(a=b.onclick)&&q(a)&&r(a.toString(),".preventDefault()")?!0:!1:!1;a?(Wa(c,b),(V?l.open(b.href,V):l.open(b.href,"_blank")).focus()):Wa(c,b)}else c===p.PRE_AFFILIATED?nb(b):c===p.TRACK&&(a={publisher_id:sa,publisher_domain_id:ra,
referrer:l.location.toString(),pref:k.referrer,site:""+I,url:b.href,custom:y(b,"data-skimlinks-tracking")||ba||"",xtz:k.timezone,uuid:k.uuid,product:"1"},ca&&(a.xrf=1),ma("/naclicks",a,null,{usePixel:!0}));else{try{if(g=z(b),!g.icust||-1!==g.icust.indexOf("other_click__")){e="other_click__"+d.type+" ["+(void 0!=d.button?d.button:"")+"]";if(32<String(e).length)throw Error(e+" is not a valid icust value. The value should be less than 33 chars");z(b).icust=e;qa(b)}}catch(m){}c===p.AFFILIATE||c===p.UNKNOWN?
Ya(b,200):c===p.PRE_AFFILIATED&&nb(b)}return!0}function Gc(){Na(R.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(Fc,Pa.SKIMLINKS)}function Hc(){k.skimlinksEnabled&&(x.on("skim_js_start",Gc),W.whenBeaconFullyReady(Ec))}function Va(a){return u({pag:l.location.href,guid:k.cookie,uuid:k.uuid,tz:k.timezone,publisher_id:sa,publisher_domain_id:ra},a)}function Ic(a){if(0!==t.awaitedModules.length&&(t.awaitedModules=ia(t.awaitedModules,function(b){return b!==a}),0===t.awaitedModules.length)){var b=Zb();ma("/page",
b)}}function Jc(){return E(Ma(),function(a,b){var c=M(b.href),d=D(b.hostname),e;(e=!d)||(e=!(!da(b,"skimwords-link")&&!da(b,"skimlinks-unlinked")));(e=e||!zb(c))||(e=b&&K(va)&&0!==va.length?Ia(b,va):!1);if(e)return a;(e=a.urls[c])||(e={count:0,ae:!0===n.aff_domains[d]||(null===n.aff_domains[d]||void 0===n.aff_domains[d])&&La&&!na(d)?1:0});e.count++;a:{if(-1!==c.indexOf("#slm-")&&(d=c.split("#slm-"),2===d.length&&!isNaN(d[1])&&10*parseInt(d[1],10)===10*d[1])){d=parseInt(d[1],10);break a}d=null}d&&
(e.slmcid=d);d=e;1===d.ae&&a.count++;d.slmcid&&(e=d.slmcid,r(t.campaign_ids,e)||t.campaign_ids.push(e));if(!Ib&&0===d.ae)return a;a.urls[c]=d;return a},{urls:{},count:0})}function Kc(){w(Lc,function(a){var b=l;"skimlinks_context_window"===a&&(b=window);L(b,a)&&(a={page_var:a,value:JSON.stringify(b[a])},Eb("page_variable_tracking",a))})}function Mc(){var a=kb(function(){t.linksImpressions.skimlinks=Jc();Ic("main-tracking");if(Object.keys(t.linksImpressions.skimlinks.urls).length){var a=Va({dl:t.linksImpressions.skimlinks.urls,
hae:t.linksImpressions.skimlinks.count?1:0,typ:"l"});ma("/link",a)}});W.whenNoRequestsPending(a);N(a,2E3)}function Nc(){t.awaitedModules.push("main-tracking");k.skimwordsEnabled&&t.awaitedModules.push("skimwords");k.unlinkedEnabled&&t.awaitedModules.push("unlinked");Jb&&W.whenPostPageLoadBeaconCallCompleted(Mc);if(navigator.sendBeacon&&1>1E4*Math.random()){var a={domain_id:ra,publisher_id:sa,page_url:l.location.href,impression_id:k.uuid,jv:T},b=rb("/generic_tracking/trackingMethodExperiment",u({trackingMethod:"sendBeacon"},
a));Ga("/generic_tracking/trackingMethodExperiment",u({trackingMethod:"xhr"},a));b||Ga("/generic_tracking/trackingMethodExperiment",u({trackingMethod:"sendBeaconFailed"},a))}}function Oc(){Kc()}function Kb(a,b){S||1E3<b?q(a)&&(S?Qa?a(!0):a(!1):a(!1)):N(Kb,b*=2,a,b)}function Lb(){S||(X.complete&&Y.complete&&(S=!0),S&&"0"!=X.width&&"0"==Y.width&&(Qa=!0))}function Pc(a){function b(a){return a.toLowerCase().replace(/^\/\/|^https?:\/\//,"")}var c=Aa(Mb,b);return r(c,b(a))}function Qc(){return{skimOptions:Rc,
runTimeInfo:u({},{aff_domains:n.aff_domains},{consentState:Sc},{loggedErrors:ib},k)}}function Tc(a,b){var c=!1,d;return function(){if(c)return d;N(function(){c=!1},b);c=!0;return d=a.apply(this,arguments)}}function Uc(a,b,c,d){void 0===d&&(d=!1);if(a&&(a.nodeName||a===l))if(G.addEventListener){var e=B(c.bind(a));a.addEventListener(b,e,d)}else a.attachEvent("on"+b,function(){return 7>k.detect.version&&!l.event?(N(c.bind(a,l.event),100),!0):c.call(a,l.event)})}function Nb(a,b,c,d){void 0===b&&(b=[]);
if(a){var e=Tc(c,200);w(b,function(b){try{Uc(a,b,e,d)}catch(Fd){}})}}function Vc(){var a=Ma();return E(a,function(a,c){var b,e=(b=D(c.hostname))&&!yb(c)&&!na(b),f=L(n.aff_domains,b);e&&!f&&(a.push(b),n.aff_domains[b]=null,n.domain_data.domains.push(b));return a},[])}function Ob(a){var b=Vc();return W.sendBeaconRequest(b,a)}function Wc(){var a=new Xc;Fb[R.ANCHOR_CLICK_INTERCEPTOR]=a}function Yc(){l.__SKIM_JS_GLOBAL__||(l.__SKIM_JS_GLOBAL__={});if(!l.__SKIM_JS_GLOBAL__.init){l.skimlinksAPI={};l.__SKIM_JS_GLOBAL__.init=
!0;l.__SKIM_JS_GLOBAL__.getDebugInfo=Qc;l.__SKIM_JS_GLOBAL__.bundledEntries=Zc;if(Pc(n.hostname)||Ra&&G.querySelector(Ra))k.skimlinksEnabled=!1,k.skimwordsEnabled=!1,k.unlinkedEnabled=!1;"msie"===k.detect.browser&&8>=k.detect.version&&(k.skimwordsEnabled=!1);try{sb("/robots.txt",void 0,{__skimjs_preflight__please_ignore__:!0})}catch(a){la(new $c,!0)}ad.detect(function(a){k.isAdblockUser=a});x.publish("skim_js_init");r(["interactive","complete"],G.readyState)?N(Z,0):(Ob(aa.PRE_PAGE_LOAD),document.addEventListener("DOMContentLoaded",
Z),document.addEventListener("load",Z));Wc();x.publish("skim_js_start")}}var jb={log:fa("log"),info:fa("info"),warn:fa("warn"),error:fa("error")},hb=function(){var a=!0;try{var b=[ac(),!!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),ha(document,["querySelector","querySelectorAll"]),ha(Object,["keys"]),ha([],["indexOf"]),ha("",["indexOf"])];a=E(b,function(a,b){return a&&b},!0)}catch(c){a=!1}!1===a&&jb.info("[Skimlinks] Your browser doesn't support the base features necessary to run our javascript.");
return a}();v.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}});fb(v,Error);var pb=v.bind(null,"DocumentBodyNotFound"),bd=v.bind(null,"PixelDropFailed");v.bind(null,"ScriptDropFailed");var fc=v.bind(null,"XhrError"),dc=v.bind(null,"XhrError4xx"),ec=v.bind(null,"XhrError5xx"),cc=v.bind(null,"XhrErrorZero"),jc=v.bind(null,"SentryLoggerError");v.bind(null,"SendBeaconFailedError");var $c=v.bind(null,"ResolveSslCertificateError");v.bind(null,
"DisclosureReadyStateTimeout");var T="15.2.0-stackpath",cd="https://r.skimresources.com/api/",Ka={"t.umblr.com":{name:"z"}},ab="100111X1555764",sa=100111,ra=1555764,lc="https://t.skimresources.com/api/v2",ub="go.skimresources.com",dd="https://sl-sentry.skimlinks.com",Pb="f648b8dfc7284fad8af093653eafd6ca",ed="production",fd=1>1E3*Math.random(),ic={sendError:function(a,b){if(!Pb)throw a;var c=b;c=(c=ja(c)?c:!1)||fd?a instanceof
bd&&eb()?!1:!0:!1;if(c){c=dd+"/api/46/store/";var d={sentry_version:"7",sentry_client:"raven-js/3.26.4",sentry_key:Pb};var e={country:J(ea(),["runTimeInfo","country"]),beacon_consent:J(ea(),["runTimeInfo","consent"]),iab_consent:J(ea(),["runTimeInfo","consentState","skimlinks_consent"]),is_adblock_user:eb(),is_top_frame:window.top===window};e={event_id:za(),project:"46",platform:"javascript",logger:"javascript",release:T,exception:{values:[{type:a.name,value:a.message,stacktrace:{frames:hc(a)}}]},
request:{headers:{"User-Agent":navigator.userAgent},url:location.href},extra:u({original_stacktrace:a.stack},a.__sentryExtraData__,e)};Da(c,d,null,{method:"POST",data:JSON.stringify(e)})}}},ib=[],bb=kb(function(){return(new Date).getTimezoneOffset()}),Qb=window.skimlinks_context_window||null,l=Qb?window[Qb]:window,G=l.document,gd={getItem:function(a){try{return JSON.parse(localStorage.getItem(a))}catch(b){return null}},setItem:function(a,b){try{localStorage.setItem(a,
JSON.stringify(b))}catch(c){}}},Sa=f("noskim",!1),hd=f("noskimlinks",!1),id=f("noskimwords",!0),jd=f("nounlinked",!0),kd=f("skimwords_standard",false),ld=f("skimwords_lite",false),md=f("skimwords_diy",false),nd=f("skimwords_diy_filter",false),Rb=!Sa&&!hd,Sb=!Sa&&!id,Tb=!Sa&&!jd,Fa=f("skimlinks_dnt",0,function(a){return a&&"0"!==a&&"false"!==a?1:0}),qb=f("skimlinks_nocookie",!1),Ta=f("skimlinks_excluded_classes",
[]),Ab=f("custom_excluded_selectors",[],lb),Ja=f("custom_included_selectors",[],lb),Ua=f("skimlinks_exclude",["track.celtra.com","celtra.com","condenast.com","epicurious.com","arstechnica.com","architecturaldigest.com","allure.com","bonappetit.com","brides.com","gq.com","glamour.com","golfdigest.com","newyorker.com","pitchfork.com","self.com","teenvogue.com","vanityfair.com","vogue.com","wired.com","wmagazine.com","www.celtra.com","farfetch.com","amazon.com"]),pa=f("skimlinks_include",[]),Bb=f("skimlinks_ignore_hidden_links",false),va=f("skimlinks_link_impression_exclude_selector",[]),
Oa=f("skimlinks_add_nofollow",true),ua=f("skimlinks_custom_rel",""),Ub=f("skimlinks_before_click_handler",false,function(a,b){return ja(a)?a:b}),Cb=f("skimlinks_first_party_na",!1),Jb=!f("noimpressions",!1),Ib=false,mb=f("skimlinks_replace_timeout",300,function(a,b){var c=parseFloat(a);return isNaN(c)?b:c}),La=f("skimlinks_affiliate_unknown_links",
true),V=f("skimlinks_target",null),od=f("skimlinks_ajax_rerun",false),ca=f("skimlinks_revenue_forecast",false),pd=f("skimlinks_noright",false),Vb=f("skimlinks_url_extraction_rules",!1)||false,xa=f("skimlinks_extra_redir_params",[]).join("&"),ba=f(["affiliate_tracking","skimlinks_tracking"],
!1),wa=f("force_location"),I=f(["skimlinks_site","skimlinks_sitename"],!1),oa=f("skimlinks_domain",""),P=f("skimlinks_google",false,function(a,b){return a?ja(a)?a?"skimout":"":M(a):b?"skimout":""}),Mb=f("noskim_domains",[]),qd=f("skimwords_horizontal_distance",80),rd=f("skimwords_vertical_distance",80),sd=false,td=f("skimwords_color",
null),ud=f("skimwords_weight",null),vd=f("skimwords_decoration",null),wd=f("skimwords_style",null),xd=f("skimwords_title",null),Ra=f("no_skim_selector",""),yd=f("skimlinks_force_consent",!1),Hb=true,Rc={SW_STANDARD:kd,SW_LITE:ld,SW_DIY:md,SW_DIY_FILTER:nd,HAS_SKIMLINKS:Rb,HAS_SKIMWORDS:Sb,
HAS_UNLINKED:Tb,DO_NOT_TRACK:Fa,NO_COOKIE:qb,SL_EXCLUDED_CLASSES:Ta,CUSTOM_EXCLUDED_SELECTORS:Ab,CUSTOM_INCLUDED_SELECTORS:Ja,SL_EXCLUDED_DOMAINS:Ua,SL_INCLUDED_DOMAINS:pa,SL_IGNORE_HIDDEN_LINKS:Bb,SL_IMPRESSION_EXCLUDED_SELECTORS:va,SL_ADD_NOFOLLOW:Oa,SL_CUSTOM_REL:ua,SL_BEFORE_CLICK_HANDLER:Ub,SL_FIRST_PARTY_NA:Cb,SL_TRACK_IMPRESSION:Jb,WITH_NA_LINK_IMPRESSIONS:Ib,SL_REPLACE_TIMEOUT:mb,SL_AFFILIATE_UNKNOWN_LINKS:La,SL_TARGET:V,AJAX_SUPPORT:od,UNLINKED_EXCLUDES:[],SL_FORECAST:ca,NO_RIGHT_CLICK:pd,
USE_MERCHANT_URL_EXTRACTION_RULES:Vb,EXTRA_REDIR_PARAMS:xa,CUSTOM_TRACKING_VAR:ba,FORCE_LOCATION:wa,SITE_NAME:I,CUSTOM_WAYPOINT_DOMAIN:oa,GOOGLE_TRACKING_ACTION_NAME:P,NO_SKIM_DOMAINS:Mb,SW_HORIZONTAL_DISTANCE:qd,SW_VERTICAL_DISTANCE:rd,SL_PROFILING:!1,TRACK_COOKIE_SYNCS:sd,SW_LINK_COLOR:td,SW_LINK_WEIGHT:ud,SW_LINK_DECORATION:vd,SW_LINK_STYLE:wd,SW_LINK_TITLE:xd,NO_SKIM_SELECTOR:Ra,SL_CONSENT:!1,FORCE_CONSENT:yd,M101_TRACKING_ID:null,M101_CUSTOM_DOM_DETECTION:false,
AE_CLICK_TRACKING:!1,INCENTIVE_ENABLED:!1,FORCE_PREVENTED_CLICKS_MONETIZATION:Hb,IS_MINIMALISTIC_JS:!1,LINK_SWAPPING_404:!1,LINK_SWAPPING_OUT_OF_STOCK:!1,LINK_SWAPPING_PRODUCT_MATCH:!1,LINK_SWAPPING:!1,LINK_SWAPPING_MERCHANT_NAME_DETECTION:true},k=function(){var a=G.referrer||document.referrer||"",b=wa||l.location.href;var c="aspsession-id aspsessionid cftoken j-sessionid jsessid jsession_id jsessionid phpsessid phpsession-id phpsessionid seskey sessid session-id session-key session_id sessionid sessionkey uniqueid utm_campaign utm_medium utm_source utm_term".split(" ");
for(var d=0;d<c.length;d++){var e=c[d];var f=b.split("?");if(2<=f.length){b=f.shift();f=f.join("?");e=encodeURIComponent(e)+"=";f=f.split(/[&;]/gi);for(var g=f.length-1;0<=g;g--)Ba(f[g],e)&&f.splice(g,1);b=b+"?"+f.join("&")}}"?"===b[b.length-1]&&(b=b.substr(0,b.length-1));c=b;d=gd.getItem("skimCONSENT");b=navigator.userAgent.toLowerCase();b=/(webkit)[ /]([\w.]+)/.exec(b)||/(opera)(?:.*version)?[ /]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||0>b.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(b)||
[];b={browser:b[1]||"",version:parseFloat(b[2])||0};return{cookieSyncString:"",lastBeaconTimestamp:null,cookie:"",country:"",locale:"",consent:d,detect:b,isAdblockUser:!1,pageLocation:c,referrer:a,timezone:bb(),uuid:za(),skimwordsEnabled:Sb,skimlinksEnabled:Rb,unlinkedEnabled:Tb}}(),n=function(){var a=document.getElementsByTagName("html")?document.getElementsByTagName("html")[0]:null,b=wa?Ca(wa,!1):l.location.hostname;return{aff_domains:{},beacon:[],domain_data:{domains:[]},exclude:Ua,exclude_lookup:null,
excluded_classes:["noskimlinks","noskim"].concat(Ta),has_been_called:!1,hostname:b,html_root:a,include:pa,include_lookup:null,links:[],links_tracked:!1,target:null,waypointDomain:oa?"http://"+oa:"https://"+ub}}();var Wb=function(a,b,c){if(0===b)return c;try{return a()}catch(d){return Wb(a,b-1,c)}};get_real_link=function(a){if(null==a)return null;for(;"A"!==a.nodeName.toUpperCase();)if(a=Wb(function(){return a.parentNode},3,null),null==a)return null;return a};var C,tb={get:function(a,b,c,d){d=u({onError:la},
d,{method:"GET"});Da(a,b,B(c),d)},post:function(a,b,c,d){d=u({onError:la},d,{method:"POST"});Da(a,b,B(c),d)}};"undefined"!==typeof window.Map&&(O.Cache=Map);var zd=["noskim","norewrite"],Ad=["noskimlinks","noskim"].concat(["taboola","advert--taboola","trc_rbox","trc_related_container"]),Bd="*.criteo.com *.g.doubleclick.net *mjxads.internet.com *overture.com *pgpartner.co.uk *pgpartner.com *pricegrabber.co.uk *pricegrabber.com *youtube.com m.skimresources.com paid.outbrain.com track.celtra.com traffic.outbrain.com trc.taboola.com zergnet.com ad.doubleclick.net".split(" "),
pc=["itunes.apple.com","itunes.com","phobos.apple.com"],sc=O(function(){var a=[].concat(Ua,Bd);I&&a.push(I);return a}),rc=O(function(){return Ad.concat(Ta).map(function(a){return"."+a})}),qc=O(function(){return zd.map(function(a){return"a[rel~='"+a+"']"})}),p;(function(a){a.AFFILIATE="AFFILIATE";a.PRE_AFFILIATED="PRE_AFFILIATED";a.UNKNOWN="UNKNOWN";a.TRACK="TRACK";a.IGNORE="IGNORE"})(p||(p={}));var Db="__skimlinks__";var $b=function(a){var b;if(Vb){var c=D(a.hostname);if(c in Ka)return c="[&?]"+Ka[c].name+
"=(http[^&]+)",c=new RegExp(c),decodeURIComponent(null!=(b=a.href)?b.match(c).pop():void 0)||a.href}return a.href};var Xb;(function(a){a.STARTING="STARTING";a.CANCELLED="CANCELLED";a.PENDING_API="PENDING_API";a.API_ERROR="API_ERROR";a.NO_OFFERS="NO_OFFERS";a.PENDING_MODULE="PENDING_MODULE";a.READY="READY"})(Xb||(Xb={}));var x={topics:{},on:function(a,b,c){K(this.topics[a])||(this.topics[a]=[]);var d;c&&(d=function(a){yc(a,c)&&b(a)});this.topics[a].push(d||b)},publish:function(a,b){w(this.topics[a]||
[],function(a){q(a)&&a(b)})}},H=function(){function a(){var a=this;g(this,"ready",void 0);g(this,"pendingCallbacks",void 0);g(this,"subReadyStateList",void 0);g(this,"isReady",function(){return a.dependsOnSubReadyState()?Bc(a.subReadyStateList,function(a){return a.isReady()}):a.ready});g(this,"setReady",function(){a.dependsOnSubReadyState()||a.ready||(a.ready=!0,a.callPendingCallbacks())});g(this,"waitFor",function(b){b=ia(b,function(a){return!!a});a.subReadyStateList=a.subReadyStateList.concat(b);
a.isReady()?a.callPendingCallbacks():b.forEach(function(b){b.whenReady(a.whenSubReadyStateIsReady)})});g(this,"whenSubReadyStateIsReady",function(){a.isReady()&&a.callPendingCallbacks()});this.ready=!1;this.pendingCallbacks=[];this.subReadyStateList=[]}var b=a.prototype;b.whenReady=function(a){this.isReady()?a():this.pendingCallbacks.push(a)};b.dependsOnSubReadyState=function(){return 0!==this.subReadyStateList.length};b.callPendingCallbacks=function(){this.pendingCallbacks.forEach(function(a){setTimeout(a,
0)});this.pendingCallbacks=[]};return a}(),aa;(function(a){a.PRE_PAGE_LOAD="PRE_PAGE_LOAD";a.POST_PAGE_LOAD="POST_PAGE_LOAD";a.AUX="AUX"})(aa||(aa={}));var W=new (function(){function a(a,b){var c=this;g(this,"requestBeaconAPI",void 0);g(this,"beaconRequestHandler",void 0);g(this,"requestsHistory",void 0);g(this,"noRequestPendingReadyState",void 0);g(this,"beaconApiResponseReadyState",void 0);g(this,"postPageLoadCallReadyState",void 0);g(this,"beaconFullyReadyState",void 0);g(this,"whenNoRequestsPending",
function(a){c.noRequestPendingReadyState.whenReady(a)});g(this,"whenBeaconApiRequestCompleted",function(a){c.beaconApiResponseReadyState.whenReady(a)});g(this,"whenPostPageLoadBeaconCallCompleted",function(a){c.postPageLoadCallReadyState.whenReady(a)});g(this,"whenBeaconFullyReady",function(a){c.beaconFullyReadyState.whenReady(a)});g(this,"sendBeaconRequest",function(a,b){var d=0===a.length,e={readyState:new H,requestedDomains:a,response:null,beaconCallType:b};c.hasFetchedAtLeastOnce()&&d?(c.requestsHistory.push(e),
e.readyState.setReady()):c.requestBeaconAPI(a,b,function(b){b=u({requestedDomains:a},b);c.beaconRequestHandler(b);e.response=b;e.readyState.setReady()});c.updateRequestsHistory(e);e.readyState.whenReady(function(){e.response&&x.publish("EVENTS__BEACON__REQUEST_COMPLETED",e);c.resolveReadyStatesOnRequestCompleted(e)});return e});this.requestBeaconAPI=a;this.beaconRequestHandler=b;this.requestsHistory=[];this.noRequestPendingReadyState=new H;this.noRequestPendingReadyState.setReady();this.beaconApiResponseReadyState=
new H;this.postPageLoadCallReadyState=new H;this.beaconFullyReadyState=Cc(this.beaconApiResponseReadyState,this.postPageLoadCallReadyState)}var b=a.prototype;b.updateRequestsHistory=function(a){this.requestsHistory.push(a);this.noRequestPendingReadyState.waitFor([a.readyState])};b.resolveReadyStatesOnRequestCompleted=function(a){a.response&&!this.beaconApiResponseReadyState.isReady()&&this.beaconApiResponseReadyState.setReady();a.beaconCallType===aa.POST_PAGE_LOAD&&this.postPageLoadCallReadyState.setReady()};
b.hasFetchedAtLeastOnce=function(){return 0!==this.requestsHistory.length};return a}())(function(a,b,c){a=JSON.stringify({pubcode:ab,page:l.location.href,domains:a,link_swapping:!1});a={headers:{"Content-type":"application/x-www-form-urlencoded"},data:U({data:a}),withCredentials:!0};var d=ya();"production"!==ed&&(d._=b);tb.post(""+cd,d,c,a)},function(a){var b={};a.country&&(b.country=a.country.toUpperCase());a.country_state&&(b.countryState=a.country_state);a.guid&&""===k.cookie&&(b.cookie=a.guid);
ja(a.consent)&&(b.consent=a.consent);a.csp&&(b.cookieSyncString=a.csp);a.ts&&(b.lastBeaconTimestamp=a.ts);u(k,b);Ac(a.requestedDomains,a.merchant_domains)}),R;(R||(R={})).ANCHOR_CLICK_INTERCEPTOR="ANCHOR_CLICK_INTERCEPTOR";var Fb={},Q;(function(a){a.LEFT_CLICK="LEFT_CLICK";a.MIDDLE_CLICK="MIDDLE_CLICK";a.OTHER_CLICK="OTHER_CLICK"})(Q||(Q={}));var Pa;(function(a){a[a.LINK_SWAPPING=0]="LINK_SWAPPING";a[a.CONSENT=1]="CONSENT";a[a.INCENTIVE=2]="INCENTIVE";a[a.SKIMLINKS=3]="SKIMLINKS"})(Pa||(Pa={}));var t=
{campaign_ids:[],loading_started:(new Date).getTime(),linksImpressions:{skimlinks:{count:0,urls:{}},skimwords:{count:0,urls:{}},unlinked:{count:0,urls:{}}},awaitedModules:[]},Lc=["skimlinks_included_ids","skimlinks_byrel","skimlinks_exrel","skimlinks_included_classes"],Cd=function(){function a(){g(this,"SERVICES",a.SERVICES);g(this,"getService",Na);g(this,"trackEvent",Eb);x.on("skim_js_init",this.onInit.bind(this));x.on("skim_js_start",this.onStart.bind(this));W.whenBeaconFullyReady(this.whenBeaconFullyReady.bind(this))}
var b=a.prototype;b.onInit=function(){};b.onStart=function(){};b.whenBeaconFullyReady=function(){};b.publishEvent=function(a,b){x.publish(a,b)};b.onEvent=function(a,b){x.on(a,b)};b.registerClickInterceptor=function(a,b){Na(R.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(a,b)};return a}();g(Cd,"SERVICES",R);new H;var Qa=!1,S=!1,X=null,Y=null,ad={detect:function(a){a:{try{var b=navigator.userAgent.toLowerCase();if(-1===b.indexOf("firefox")&&-1===b.indexOf("chrome")){S=!0;Qa=!1;break a}}catch(c){}b=
""+11*Math.random();X=new Image;X.onload=Lb;X.src="//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/,"1").replace(/\*/,b);Y=new Image;Y.onload=Lb;Y.src="//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/,"2").replace(/\*/,b)}Kb(a,250)}};new H;var Sc={},Yb=gb([!!Ub&&"mouseup","click"]),Dd=["auxclick","contextmenu","touchstart"],Ed=function(){function a(a,b){g(this,"type",void 0);g(this,"anchor",void 0);g(this,"affiliationType",void 0);g(this,"nativeEvent",void 0);g(this,"clientClickId",void 0);
g(this,"targetedInterceptor",void 0);var c=tc(a);this.type=this.getInternalClickType(b);this.anchor=a;this.affiliationType=c;this.nativeEvent=b;this.clientClickId=za();this.targetedInterceptor=null}var b=a.prototype;b.setAnchorClickInterceptorTarget=function(a){this.targetedInterceptor=a};b.setSourceApp=function(a){var b=this.anchor;z(b).sourceApp=a;qa(b)};b.setLinkSwappingMatchId=function(a){var b=this.anchor;z(b).linkSwappingMatchId=a;qa(b)};b.getInternalClickType=function(a){return r(Yb,a.type)&&
0===a.button?Q.LEFT_CLICK:"auxclick"!==a.type&&"click"!==a.type||1!==a.button?Q.OTHER_CLICK:Q.MIDDLE_CLICK};return a}(),Xc=function(){function a(){var a=this;g(this,"interceptors",void 0);g(this,"onClick",function(b,c){var d=Xa(b);d&&(d.skimlinksOriginalHref&&d.skimlinksRestoreSwappedLink(),d=new Ed(d,b),a.dispatchAnchorClick(d,c))});g(this,"registerInterceptor",function(b,c){if(!q(b))throw Error("InterceptorHandler should be a function");if(A(c))throw Error("Missing priority for click interceptor");
a.interceptors.push({handler:b,priority:c});a.interceptors.sort(function(a,b){return a.priority-b.priority})});g(this,"triggerLeftClickFromMouseEvent",function(b,c){var d=a.findInterceptorsWithPriority(c);if(A(c))a.onClick(b);else if(d.length)a.onClick(b,d)});this.interceptors=[];this.initGlobalClickHandler()}var b=a.prototype;b.initGlobalClickHandler=function(){Nb(G,Yb,this.onClick,!0);Nb(G,Dd,this.onClick,!0)};b.dispatchAnchorClick=function(a,b){var c=this;(b||this.interceptors).some(function(b){var d=
b.handler;return c.isTargetedInterceptor(b,a)?d(a):!1})};b.findInterceptorsWithPriority=function(a){return ia(this.interceptors,function(b){return b.priority===a})};b.isTargetedInterceptor=function(a,b){var c=b.targetedInterceptor===a.priority;return!b.targetedInterceptor||c};return a}(),Z=B(function(){Ob(aa.POST_PAGE_LOAD);document.removeEventListener("DOMContentLoaded",Z);document.removeEventListener("load",Z)}),Zc={skimlinks:!1,skimwords:!1,unlinked:!1,audience:!1,GDPRConsent:!1,incentivePopup:!1};
hb&&B(function(){x.on("skim_js_init",Hc);x.on("skim_js_init",Nc);x.on("skim_js_start",Oc);Yc()})()})();
