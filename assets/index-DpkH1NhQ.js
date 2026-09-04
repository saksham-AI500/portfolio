(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var wd={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function Db(){if(fx)return Xo;fx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=e,Xo.jsx=i,Xo.jsxs=i,Xo}var dx;function Lb(){return dx||(dx=1,wd.exports=Db()),wd.exports}var m=Lb(),Cd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function Ub(){if(hx)return ft;hx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function b(P,q,Me){this.props=P,this.context=q,this.refs=M,this.updater=Me||T}b.prototype.isReactComponent={},b.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=b.prototype;function O(P,q,Me){this.props=P,this.context=q,this.refs=M,this.updater=Me||T}var w=O.prototype=new D;w.constructor=O,N(w,b.prototype),w.isPureReactComponent=!0;var B=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function U(P,q,Me){var we=Me.ref;return{$$typeof:r,type:P,key:q,ref:we!==void 0?we:null,props:Me}}function V(P,q){return U(P.type,q,P.props)}function k(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function W(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Me){return q[Me]})}var he=/\/+/g;function oe(P,q){return typeof P=="object"&&P!==null&&P.key!=null?W(""+P.key):q.toString(36)}function K(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(q){P.status==="pending"&&(P.status="fulfilled",P.value=q)},function(q){P.status==="pending"&&(P.status="rejected",P.reason=q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,q,Me,we,Ne){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var Q=!1;if(P===null)Q=!0;else switch(ne){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(P.$$typeof){case r:case e:Q=!0;break;case _:return Q=P._init,F(Q(P._payload),q,Me,we,Ne)}}if(Q)return Ne=Ne(P),Q=we===""?"."+oe(P,0):we,B(Ne)?(Me="",Q!=null&&(Me=Q.replace(he,"$&/")+"/"),F(Ne,q,Me,"",function(Fe){return Fe})):Ne!=null&&(k(Ne)&&(Ne=V(Ne,Me+(Ne.key==null||P&&P.key===Ne.key?"":(""+Ne.key).replace(he,"$&/")+"/")+Q)),q.push(Ne)),1;Q=0;var fe=we===""?".":we+":";if(B(P))for(var Te=0;Te<P.length;Te++)we=P[Te],ne=fe+oe(we,Te),Q+=F(we,q,Me,ne,Ne);else if(Te=S(P),typeof Te=="function")for(P=Te.call(P),Te=0;!(we=P.next()).done;)we=we.value,ne=fe+oe(we,Te++),Q+=F(we,q,Me,ne,Ne);else if(ne==="object"){if(typeof P.then=="function")return F(K(P),q,Me,we,Ne);throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Q}function G(P,q,Me){if(P==null)return P;var we=[],Ne=0;return F(P,we,"","",function(ne){return q.call(Me,ne,Ne++)}),we}function ee(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(Me){(P._status===0||P._status===-1)&&(P._status=1,P._result=Me)},function(Me){(P._status===0||P._status===-1)&&(P._status=2,P._result=Me)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var de=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xe={map:G,forEach:function(P,q,Me){G(P,function(){q.apply(this,arguments)},Me)},count:function(P){var q=0;return G(P,function(){q++}),q},toArray:function(P){return G(P,function(q){return q})||[]},only:function(P){if(!k(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ft.Activity=v,ft.Children=xe,ft.Component=b,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=O,ft.StrictMode=s,ft.Suspense=g,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ft.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ft.cache=function(P){return function(){return P.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(P,q,Me){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var we=N({},P.props),Ne=P.key;if(q!=null)for(ne in q.key!==void 0&&(Ne=""+q.key),q)!A.call(q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&q.ref===void 0||(we[ne]=q[ne]);var ne=arguments.length-2;if(ne===1)we.children=Me;else if(1<ne){for(var Q=Array(ne),fe=0;fe<ne;fe++)Q[fe]=arguments[fe+2];we.children=Q}return U(P.type,Ne,we)},ft.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ft.createElement=function(P,q,Me){var we,Ne={},ne=null;if(q!=null)for(we in q.key!==void 0&&(ne=""+q.key),q)A.call(q,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Ne[we]=q[we]);var Q=arguments.length-2;if(Q===1)Ne.children=Me;else if(1<Q){for(var fe=Array(Q),Te=0;Te<Q;Te++)fe[Te]=arguments[Te+2];Ne.children=fe}if(P&&P.defaultProps)for(we in Q=P.defaultProps,Q)Ne[we]===void 0&&(Ne[we]=Q[we]);return U(P,ne,Ne)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(P){return{$$typeof:p,render:P}},ft.isValidElement=k,ft.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:ee}},ft.memo=function(P,q){return{$$typeof:h,type:P,compare:q===void 0?null:q}},ft.startTransition=function(P){var q=z.T,Me={};z.T=Me;try{var we=P(),Ne=z.S;Ne!==null&&Ne(Me,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(L,de)}catch(ne){de(ne)}finally{q!==null&&Me.types!==null&&(q.types=Me.types),z.T=q}},ft.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ft.use=function(P){return z.H.use(P)},ft.useActionState=function(P,q,Me){return z.H.useActionState(P,q,Me)},ft.useCallback=function(P,q){return z.H.useCallback(P,q)},ft.useContext=function(P){return z.H.useContext(P)},ft.useDebugValue=function(){},ft.useDeferredValue=function(P,q){return z.H.useDeferredValue(P,q)},ft.useEffect=function(P,q){return z.H.useEffect(P,q)},ft.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ft.useId=function(){return z.H.useId()},ft.useImperativeHandle=function(P,q,Me){return z.H.useImperativeHandle(P,q,Me)},ft.useInsertionEffect=function(P,q){return z.H.useInsertionEffect(P,q)},ft.useLayoutEffect=function(P,q){return z.H.useLayoutEffect(P,q)},ft.useMemo=function(P,q){return z.H.useMemo(P,q)},ft.useOptimistic=function(P,q){return z.H.useOptimistic(P,q)},ft.useReducer=function(P,q,Me){return z.H.useReducer(P,q,Me)},ft.useRef=function(P){return z.H.useRef(P)},ft.useState=function(P){return z.H.useState(P)},ft.useSyncExternalStore=function(P,q,Me){return z.H.useSyncExternalStore(P,q,Me)},ft.useTransition=function(){return z.H.useTransition()},ft.version="19.2.8",ft}var px;function op(){return px||(px=1,Cd.exports=Ub()),Cd.exports}var ke=op(),Rd={exports:{}},Wo={},Nd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function Ob(){return mx||(mx=1,(function(r){function e(F,G){var ee=F.length;F.push(G);e:for(;0<ee;){var de=ee-1>>>1,xe=F[de];if(0<l(xe,G))F[de]=G,F[ee]=xe,ee=de;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],ee=F.pop();if(ee!==G){F[0]=ee;e:for(var de=0,xe=F.length,P=xe>>>1;de<P;){var q=2*(de+1)-1,Me=F[q],we=q+1,Ne=F[we];if(0>l(Me,ee))we<xe&&0>l(Ne,Me)?(F[de]=Ne,F[we]=ee,de=we):(F[de]=Me,F[q]=ee,de=q);else if(we<xe&&0>l(Ne,ee))F[de]=Ne,F[we]=ee,de=we;else break e}}return G}function l(F,G){var ee=F.sortIndex-G.sortIndex;return ee!==0?ee:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],h=[],_=1,v=null,x=3,S=!1,T=!1,N=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=F)s(h),G.sortIndex=G.expirationTime,e(g,G);else break;G=i(h)}}function B(F){if(N=!1,w(F),!T)if(i(g)!==null)T=!0,L||(L=!0,W());else{var G=i(h);G!==null&&K(B,G.startTime-F)}}var L=!1,z=-1,A=5,U=-1;function V(){return M?!0:!(r.unstable_now()-U<A)}function k(){if(M=!1,L){var F=r.unstable_now();U=F;var G=!0;try{e:{T=!1,N&&(N=!1,D(z),z=-1),S=!0;var ee=x;try{t:{for(w(F),v=i(g);v!==null&&!(v.expirationTime>F&&V());){var de=v.callback;if(typeof de=="function"){v.callback=null,x=v.priorityLevel;var xe=de(v.expirationTime<=F);if(F=r.unstable_now(),typeof xe=="function"){v.callback=xe,w(F),G=!0;break t}v===i(g)&&s(g),w(F)}else s(g);v=i(g)}if(v!==null)G=!0;else{var P=i(h);P!==null&&K(B,P.startTime-F),G=!1}}break e}finally{v=null,x=ee,S=!1}G=void 0}}finally{G?W():L=!1}}}var W;if(typeof O=="function")W=function(){O(k)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,oe=he.port2;he.port1.onmessage=k,W=function(){oe.postMessage(null)}}else W=function(){b(k,0)};function K(F,G){z=b(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var ee=x;x=G;try{return F()}finally{x=ee}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=x;x=F;try{return G()}finally{x=ee}},r.unstable_scheduleCallback=function(F,G,ee){var de=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?de+ee:de):ee=de,F){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ee+xe,F={id:_++,callback:G,priorityLevel:F,startTime:ee,expirationTime:xe,sortIndex:-1},ee>de?(F.sortIndex=ee,e(h,F),i(g)===null&&F===i(h)&&(N?(D(z),z=-1):N=!0,K(B,ee-de))):(F.sortIndex=xe,e(g,F),T||S||(T=!0,L||(L=!0,W()))),F},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(F){var G=x;return function(){var ee=x;x=G;try{return F.apply(this,arguments)}finally{x=ee}}}})(Dd)),Dd}var gx;function Pb(){return gx||(gx=1,Nd.exports=Ob()),Nd.exports}var Ld={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function Ib(){if(xx)return Pn;xx=1;var r=op();function e(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,h,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:g,containerInfo:h,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(g,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(g,h,null,_)},Pn.flushSync=function(g){var h=d.T,_=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=h,s.p=_,s.d.f()}},Pn.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(g,h))},Pn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Pn.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):_==="script"&&s.d.X(g,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Pn.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(g)},Pn.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin);s.d.L(g,_,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Pn.preloadModule=function(g,h){if(typeof g=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(g)},Pn.requestFormReset=function(g){s.d.r(g)},Pn.unstable_batchedUpdates=function(g,h){return g(h)},Pn.useFormState=function(g,h,_){return d.H.useFormState(g,h,_)},Pn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Pn.version="19.2.8",Pn}var vx;function zb(){if(vx)return Ld.exports;vx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=Ib(),Ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function Bb(){if(_x)return Wo;_x=1;var r=Pb(),e=op(),i=zb();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),t;if(f===o)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),O=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case b:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case L:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case O:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:oe(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return oe(t(n))}catch{}}return null}var K=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},de=[],xe=-1;function P(t){return{current:t}}function q(t){0>xe||(t.current=de[xe],de[xe]=null,xe--)}function Me(t,n){xe++,de[xe]=t.current,t.current=n}var we=P(null),Ne=P(null),ne=P(null),Q=P(null);function fe(t,n){switch(Me(ne,n),Me(Ne,t),Me(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Og(n),t=Pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(we),Me(we,t)}function Te(){q(we),q(Ne),q(ne)}function Fe(t){t.memoizedState!==null&&Me(Q,t);var n=we.current,a=Pg(n,t.type);n!==a&&(Me(Ne,t),Me(we,a))}function Ze(t){Ne.current===t&&(q(we),q(Ne)),Q.current===t&&(q(Q),Ho._currentValue=ee)}var Ot,it;function gt(t){if(Ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ot=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+t+it}var xt=!1;function nt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(pe){var ue=pe}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(pe){ue=pe}t.call(Se.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var H=y.split(`
`),ae=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ae.length)for(o=H.length-1,u=ae.length-1;1<=o&&0<=u&&H[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ae[u]){var _e=`
`+H[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return nt(t.type,!1);case 11:return nt(t.type.render,!1);case 1:return nt(t.type,!0);case 31:return gt("Activity");default:return""}}function Kt(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qt=Object.prototype.hasOwnProperty,Jt=r.unstable_scheduleCallback,ht=r.unstable_cancelCallback,ct=r.unstable_shouldYield,Y=r.unstable_requestPaint,st=r.unstable_now,at=r.unstable_getCurrentPriorityLevel,I=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,le=r.unstable_LowPriority,ve=r.unstable_IdlePriority,Ae=r.log,Le=r.unstable_setDisableYieldValue,ge=null,me=null;function Ce(t){if(typeof Ae=="function"&&Le(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(ge,t)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Pe=Math.log,Ue=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Pe(t)/Ue|0)|0}var $e=256,ut=262144,X=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(y&=R,y!==0?u=Re(y):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):y!==0?u=Re(y):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ae=t.hiddenUpdates;for(a=y&~a;0<a;){var _e=31-Ge(a),Se=1<<_e;R[_e]=0,H[_e]=-1;var ue=ae[_e];if(ue!==null)for(ae[_e]=null,_e=0;_e<ue.length;_e++){var pe=ue[_e];pe!==null&&(pe.lane&=-536870913)}a&=~Se}o!==0&&zt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function zt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ni(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ii(t,n){var a=n&-n;return a=(a&42)!==0?1:eo(a),(a&(t.suspendedLanes|n))!==0?0:a}function eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function no(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:ax(t.type))}function Zs(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Gi=Math.random().toString(36).slice(2),hn="__reactFiber$"+Gi,Cn="__reactProps$"+Gi,qn="__reactContainer$"+Gi,ms="__reactEvents$"+Gi,hl="__reactListeners$"+Gi,pl="__reactHandles$"+Gi,gs="__reactResources$"+Gi,La="__reactMarker$"+Gi;function Ua(t){delete t[hn],delete t[Cn],delete t[ms],delete t[hl],delete t[pl]}function na(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qn]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=kg(t);t!==null;){if(a=t[hn])return a;t=kg(t)}return n}t=a,a=t.parentNode}return null}function ia(t){if(t=t[hn]||t[qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Oa(t){var n=t[gs];return n||(n=t[gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(t){t[La]=!0}var ml=new Set,C={};function Z(t,n){ce(t,n),ce(t+"Capture",n)}function ce(t,n){for(C[t]=n,t=0;t<n.length;t++)ml.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ie={};function Ve(t){return Qt.call(Ie,t)?!0:Qt.call(re,t)?!1:se.test(t)?Ie[t]=!0:(re[t]=!0,!1)}function Oe(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function Ft(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,a,o,u,f,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,y,et(n)):a!=null?Mt(t,y,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function On(t,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Dt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Dt(t)}function Mt(t,n,a){n==="number"&&qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ai(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Ri(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Dt(t)}function si(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ni(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&sn(t,f,n[f])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var Su=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Qs=null;function Up(t){var n=ia(t);if(n&&(t=n.stateNode)){var a=t[Cn]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Cn]||null;if(!u)throw Error(s(90));He(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":ai(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var Tu=!1;function Op(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var o=t(n);return o}finally{if(Tu=!1,(Ks!==null||Qs!==null)&&(nc(),Ks&&(n=Ks,t=Qs,Qs=Ks=null,Up(n),t)))for(n=0;n<t.length;n++)Up(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(sa)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Au=!1}var Ia=null,wu=null,gl=null;function Pp(){if(gl)return gl;var t,n=wu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Ip(){return!1}function Yn(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:Ip,this.isPropagationStopped=Ip,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Yn(_s),so=v({},_s,{view:0,detail:0}),R_=Yn(so),Cu,Ru,ro,yl=v({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Cu=t.screenX-ro.screenX,Ru=t.screenY-ro.screenY):Ru=Cu=0,ro=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),zp=Yn(yl),N_=v({},yl,{dataTransfer:0}),D_=Yn(N_),L_=v({},so,{relatedTarget:0}),Nu=Yn(L_),U_=v({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=Yn(U_),P_=v({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I_=Yn(P_),z_=v({},_s,{data:0}),Bp=Yn(z_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=G_[t])?!!n[t]:!1}function Du(){return H_}var k_=v({},so,{key:function(t){if(t.key){var n=B_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=Yn(k_),j_=v({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Yn(j_),X_=v({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),W_=Yn(X_),q_=v({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=Yn(q_),Z_=v({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=Yn(Z_),Q_=v({},_s,{newState:0,oldState:0}),J_=Yn(Q_),$_=[9,13,27,32],Lu=sa&&"CompositionEvent"in window,oo=null;sa&&"documentMode"in document&&(oo=document.documentMode);var ey=sa&&"TextEvent"in window&&!oo,Gp=sa&&(!Lu||oo&&8<oo&&11>=oo),Hp=" ",kp=!1;function Vp(t,n){switch(t){case"keyup":return $_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function ty(t,n){switch(t){case"compositionend":return jp(n);case"keypress":return n.which!==32?null:(kp=!0,Hp);case"textInput":return t=n.data,t===Hp&&kp?null:t;default:return null}}function ny(t,n){if(Js)return t==="compositionend"||!Lu&&Vp(t,n)?(t=Pp(),gl=wu=Ia=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gp&&n.locale!=="ko"?null:n.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iy[t.type]:n==="textarea"}function Wp(t,n,a,o){Ks?Qs?Qs.push(o):Qs=[o]:Ks=o,n=cc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,co=null;function ay(t){Cg(t,0)}function bl(t){var n=xs(t);if(an(n))return t}function qp(t,n){if(t==="change")return n}var Yp=!1;if(sa){var Uu;if(sa){var Ou="oninput"in document;if(!Ou){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Ou=typeof Zp.oninput=="function"}Uu=Ou}else Uu=!1;Yp=Uu&&(!document.documentMode||9<document.documentMode)}function Kp(){lo&&(lo.detachEvent("onpropertychange",Qp),co=lo=null)}function Qp(t){if(t.propertyName==="value"&&bl(co)){var n=[];Wp(n,co,t,Eu(t)),Op(ay,n)}}function sy(t,n,a){t==="focusin"?(Kp(),lo=n,co=a,lo.attachEvent("onpropertychange",Qp)):t==="focusout"&&Kp()}function ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(co)}function oy(t,n){if(t==="click")return bl(n)}function ly(t,n){if(t==="input"||t==="change")return bl(n)}function cy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:cy;function uo(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,n){var a=Jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jp(a)}}function em(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?em(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qt(t.document)}return n}function Pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var uy=sa&&"documentMode"in document&&11>=document.documentMode,$s=null,Iu=null,fo=null,zu=!1;function nm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zu||$s==null||$s!==qt(o)||(o=$s,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=cc(Iu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=$s)))}function ys(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var er={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Bu={},im={};sa&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function bs(t){if(Bu[t])return Bu[t];if(!er[t])return t;var n=er[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in im)return Bu[t]=n[a];return t}var am=bs("animationend"),sm=bs("animationiteration"),rm=bs("animationstart"),fy=bs("transitionrun"),dy=bs("transitionstart"),hy=bs("transitioncancel"),om=bs("transitionend"),lm=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Di(t,n){lm.set(t,n),Z(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],tr=0,Gu=0;function Sl(){for(var t=tr,n=Gu=tr=0;n<t;){var a=vi[n];vi[n++]=null;var o=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&cm(a,u,f)}}function El(t,n,a,o){vi[tr++]=t,vi[tr++]=n,vi[tr++]=a,vi[tr++]=o,Gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Hu(t,n,a,o){return El(t,n,a,o),Tl(t)}function Ms(t,n){return El(t,null,null,n),Tl(t)}function cm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ge(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Tl(t){if(50<Oo)throw Oo=0,Qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var nr={};function py(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,n,a,o){return new py(t,n,a,o)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=oi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function um(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,f){var y=0;if(o=t,typeof t=="function")ku(t)&&(y=1);else if(typeof t=="string")y=_b(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=oi(31,a,n,u),t.elementType=U,t.lanes=f,t;case N:return Ss(a.children,u,f,n);case M:y=8,u|=24;break;case b:return t=oi(12,a,n,u|2),t.elementType=b,t.lanes=f,t;case B:return t=oi(13,a,n,u),t.elementType=B,t.lanes=f,t;case L:return t=oi(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:y=10;break e;case D:y=9;break e;case w:y=11;break e;case z:y=14;break e;case A:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=oi(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ss(t,n,a,o){return t=oi(7,t,o,n),t.lanes=a,t}function Vu(t,n,a){return t=oi(6,t,null,n),t.lanes=a,t}function fm(t){var n=oi(18,null,null,0);return n.stateNode=t,n}function ju(t,n,a){return n=oi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dm=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var a=dm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Kt(n)},dm.set(t,n),n)}return{value:t,source:n,stack:Kt(n)}}var ir=[],ar=0,wl=null,ho=0,yi=[],bi=0,za=null,ki=1,Vi="";function oa(t,n){ir[ar++]=ho,ir[ar++]=wl,wl=t,ho=n}function hm(t,n,a){yi[bi++]=ki,yi[bi++]=Vi,yi[bi++]=za,za=t;var o=ki;t=Vi;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var f=32-Ge(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ki=1<<32-Ge(n)+u|a<<u|o,Vi=f+t}else ki=1<<f|a<<u|o,Vi=t}function Xu(t){t.return!==null&&(oa(t,1),hm(t,1,0))}function Wu(t){for(;t===wl;)wl=ir[--ar],ir[ar]=null,ho=ir[--ar],ir[ar]=null;for(;t===za;)za=yi[--bi],yi[bi]=null,Vi=yi[--bi],yi[bi]=null,ki=yi[--bi],yi[bi]=null}function pm(t,n){yi[bi++]=ki,yi[bi++]=Vi,yi[bi++]=za,ki=n.id,Vi=n.overflow,za=t}var Rn=null,$t=null,Ct=!1,Ba=null,Mi=!1,qu=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(_i(n,t)),qu}function mm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[Cn]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Et(Io[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Lg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Fa(t,!0)}function gm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Rn=Rn.return}}function sr(t){if(t!==Rn)return!1;if(!Ct)return gm(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||dd(t.type,t.memoizedProps)),a=!a),a&&$t&&Fa(t),gm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=Hg(t)}else n===27?(n=$t,$a(t.type)?(t=xd,xd=null,$t=t):$t=n):$t=Rn?Ei(t.stateNode.nextSibling):null;return!0}function Es(){$t=Rn=null,Ct=!1}function Yu(){var t=Ba;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Ba=null),t}function po(t){Ba===null?Ba=[t]:Ba.push(t)}var Zu=P(null),Ts=null,la=null;function Ga(t,n,a){Me(Zu,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=Zu.current,q(Zu)}function Ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Ku(f.return,a,t),o||(y=null);break e}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ku(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function rr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ri(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===Q.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}u=u.return}t!==null&&Qu(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return xm(Ts,t)}function Rl(t,n){return Ts===null&&As(t),xm(t,n)}function xm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(t===null)throw Error(s(308));la=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else la=la.next=n;return a}var my=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gy=r.unstable_scheduleCallback,xy=r.unstable_NormalPriority,mn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new my,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&gy(xy,function(){t.controller.abort()})}var go=null,$u=0,or=0,lr=null;function vy(t,n){if(go===null){var a=go=[];$u=0,or=id(),lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(vm,vm),n}function vm(){if(--$u===0&&go!==null){lr!==null&&(lr.status="fulfilled");var t=go;go=null,or=0,lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _y(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var _m=F.S;F.S=function(t,n){ng=st(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vy(t,n),_m!==null&&_m(t,n)};var ws=P(null);function ef(){var t=ws.current;return t!==null?t:Yt.pooledCache}function Nl(t,n){n===null?Me(ws,ws.current):Me(ws,n.pool)}function ym(){var t=ef();return t===null?null:{parent:mn._currentValue,pool:t}}var cr=Error(s(460)),tf=Error(s(474)),Dl=Error(s(542)),Ll={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Em(t),t;default:if(typeof n.status=="string")n.then(aa,aa);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Em(t),t}throw Rs=n,cr}}function Cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,cr):a}}var Rs=null;function Sm(){if(Rs===null)throw Error(s(459));var t=Rs;return Rs=null,t}function Em(t){if(t===cr||t===Dl)throw Error(s(483))}var ur=null,xo=0;function Ul(t){var n=xo;return xo+=1,ur===null&&(ur=[]),Mm(ur,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Tm(t){function n($,j){if(t){var ie=$.deletions;ie===null?($.deletions=[j],$.flags|=16):ie.push(j)}}function a($,j){if(!t)return null;for(;j!==null;)n($,j),j=j.sibling;return null}function o($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=ra($,j),$.index=0,$.sibling=null,$}function f($,j,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<j?($.flags|=67108866,j):ie):($.flags|=67108866,j)):($.flags|=1048576,j)}function y($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,j,ie,be){return j===null||j.tag!==6?(j=Vu(ie,$.mode,be),j.return=$,j):(j=u(j,ie),j.return=$,j)}function H($,j,ie,be){var tt=ie.type;return tt===N?_e($,j,ie.props.children,be,ie.key):j!==null&&(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===A&&Cs(tt)===j.type)?(j=u(j,ie.props),vo(j,ie),j.return=$,j):(j=Al(ie.type,ie.key,ie.props,null,$.mode,be),vo(j,ie),j.return=$,j)}function ae($,j,ie,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=ju(ie,$.mode,be),j.return=$,j):(j=u(j,ie.children||[]),j.return=$,j)}function _e($,j,ie,be,tt){return j===null||j.tag!==7?(j=Ss(ie,$.mode,be,tt),j.return=$,j):(j=u(j,ie),j.return=$,j)}function Se($,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Vu(""+j,$.mode,ie),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return ie=Al(j.type,j.key,j.props,null,$.mode,ie),vo(ie,j),ie.return=$,ie;case T:return j=ju(j,$.mode,ie),j.return=$,j;case A:return j=Cs(j),Se($,j,ie)}if(K(j)||W(j))return j=Ss(j,$.mode,ie,null),j.return=$,j;if(typeof j.then=="function")return Se($,Ul(j),ie);if(j.$$typeof===O)return Se($,Rl($,j),ie);Ol($,j)}return null}function ue($,j,ie,be){var tt=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return tt!==null?null:R($,j,""+ie,be);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===tt?H($,j,ie,be):null;case T:return ie.key===tt?ae($,j,ie,be):null;case A:return ie=Cs(ie),ue($,j,ie,be)}if(K(ie)||W(ie))return tt!==null?null:_e($,j,ie,be,null);if(typeof ie.then=="function")return ue($,j,Ul(ie),be);if(ie.$$typeof===O)return ue($,j,Rl($,ie),be);Ol($,ie)}return null}function pe($,j,ie,be,tt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return $=$.get(ie)||null,R(j,$,""+be,tt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case S:return $=$.get(be.key===null?ie:be.key)||null,H(j,$,be,tt);case T:return $=$.get(be.key===null?ie:be.key)||null,ae(j,$,be,tt);case A:return be=Cs(be),pe($,j,ie,be,tt)}if(K(be)||W(be))return $=$.get(ie)||null,_e(j,$,be,tt,null);if(typeof be.then=="function")return pe($,j,ie,Ul(be),tt);if(be.$$typeof===O)return pe($,j,ie,Rl(j,be),tt);Ol(j,be)}return null}function qe($,j,ie,be){for(var tt=null,Lt=null,Ke=j,vt=j=0,At=null;Ke!==null&&vt<ie.length;vt++){Ke.index>vt?(At=Ke,Ke=null):At=Ke.sibling;var Ut=ue($,Ke,ie[vt],be);if(Ut===null){Ke===null&&(Ke=At);break}t&&Ke&&Ut.alternate===null&&n($,Ke),j=f(Ut,j,vt),Lt===null?tt=Ut:Lt.sibling=Ut,Lt=Ut,Ke=At}if(vt===ie.length)return a($,Ke),Ct&&oa($,vt),tt;if(Ke===null){for(;vt<ie.length;vt++)Ke=Se($,ie[vt],be),Ke!==null&&(j=f(Ke,j,vt),Lt===null?tt=Ke:Lt.sibling=Ke,Lt=Ke);return Ct&&oa($,vt),tt}for(Ke=o(Ke);vt<ie.length;vt++)At=pe(Ke,$,vt,ie[vt],be),At!==null&&(t&&At.alternate!==null&&Ke.delete(At.key===null?vt:At.key),j=f(At,j,vt),Lt===null?tt=At:Lt.sibling=At,Lt=At);return t&&Ke.forEach(function(as){return n($,as)}),Ct&&oa($,vt),tt}function rt($,j,ie,be){if(ie==null)throw Error(s(151));for(var tt=null,Lt=null,Ke=j,vt=j=0,At=null,Ut=ie.next();Ke!==null&&!Ut.done;vt++,Ut=ie.next()){Ke.index>vt?(At=Ke,Ke=null):At=Ke.sibling;var as=ue($,Ke,Ut.value,be);if(as===null){Ke===null&&(Ke=At);break}t&&Ke&&as.alternate===null&&n($,Ke),j=f(as,j,vt),Lt===null?tt=as:Lt.sibling=as,Lt=as,Ke=At}if(Ut.done)return a($,Ke),Ct&&oa($,vt),tt;if(Ke===null){for(;!Ut.done;vt++,Ut=ie.next())Ut=Se($,Ut.value,be),Ut!==null&&(j=f(Ut,j,vt),Lt===null?tt=Ut:Lt.sibling=Ut,Lt=Ut);return Ct&&oa($,vt),tt}for(Ke=o(Ke);!Ut.done;vt++,Ut=ie.next())Ut=pe(Ke,$,vt,Ut.value,be),Ut!==null&&(t&&Ut.alternate!==null&&Ke.delete(Ut.key===null?vt:Ut.key),j=f(Ut,j,vt),Lt===null?tt=Ut:Lt.sibling=Ut,Lt=Ut);return t&&Ke.forEach(function(Nb){return n($,Nb)}),Ct&&oa($,vt),tt}function Wt($,j,ie,be){if(typeof ie=="object"&&ie!==null&&ie.type===N&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var tt=ie.key;j!==null;){if(j.key===tt){if(tt=ie.type,tt===N){if(j.tag===7){a($,j.sibling),be=u(j,ie.props.children),be.return=$,$=be;break e}}else if(j.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===A&&Cs(tt)===j.type){a($,j.sibling),be=u(j,ie.props),vo(be,ie),be.return=$,$=be;break e}a($,j);break}else n($,j);j=j.sibling}ie.type===N?(be=Ss(ie.props.children,$.mode,be,ie.key),be.return=$,$=be):(be=Al(ie.type,ie.key,ie.props,null,$.mode,be),vo(be,ie),be.return=$,$=be)}return y($);case T:e:{for(tt=ie.key;j!==null;){if(j.key===tt)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){a($,j.sibling),be=u(j,ie.children||[]),be.return=$,$=be;break e}else{a($,j);break}else n($,j);j=j.sibling}be=ju(ie,$.mode,be),be.return=$,$=be}return y($);case A:return ie=Cs(ie),Wt($,j,ie,be)}if(K(ie))return qe($,j,ie,be);if(W(ie)){if(tt=W(ie),typeof tt!="function")throw Error(s(150));return ie=tt.call(ie),rt($,j,ie,be)}if(typeof ie.then=="function")return Wt($,j,Ul(ie),be);if(ie.$$typeof===O)return Wt($,j,Rl($,ie),be);Ol($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(a($,j.sibling),be=u(j,ie),be.return=$,$=be):(a($,j),be=Vu(ie,$.mode,be),be.return=$,$=be),y($)):a($,j)}return function($,j,ie,be){try{xo=0;var tt=Wt($,j,ie,be);return ur=null,tt}catch(Ke){if(Ke===cr||Ke===Dl)throw Ke;var Lt=oi(29,Ke,null,$.mode);return Lt.lanes=be,Lt.return=$,Lt}finally{}}}var Ns=Tm(!0),Am=Tm(!1),Ha=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),cm(t,null,a),n}return El(t,o,n,a),Tl(t)}function _o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ni(t,a)}}function sf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var rf=!1;function yo(){if(rf){var t=lr;if(t!==null)throw t}}function bo(t,n,a,o){rf=!1;var u=t.updateQueue;Ha=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ae=H.next;H.next=null,y===null?f=ae:y.next=ae,y=H;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==y&&(R===null?_e.firstBaseUpdate=ae:R.next=ae,_e.lastBaseUpdate=H))}if(f!==null){var Se=u.baseState;y=0,_e=ae=H=null,R=f;do{var ue=R.lane&-536870913,pe=ue!==R.lane;if(pe?(Tt&ue)===ue:(o&ue)===ue){ue!==0&&ue===or&&(rf=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,rt=R;ue=n;var Wt=a;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){Se=qe.call(Wt,Se,ue);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,ue=typeof qe=="function"?qe.call(Wt,Se,ue):qe,ue==null)break e;Se=v({},Se,ue);break e;case 2:Ha=!0}}ue=R.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ae=_e=pe,H=Se):_e=_e.next=pe,y|=ue;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;pe=R,R=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);_e===null&&(H=Se),u.baseState=H,u.firstBaseUpdate=ae,u.lastBaseUpdate=_e,f===null&&(u.shared.lanes=0),Ya|=y,t.lanes=y,t.memoizedState=Se}}function wm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wm(a[t],n)}var fr=P(null),Pl=P(0);function Rm(t,n){t=va,Me(Pl,t),Me(fr,n),va=t|n.baseLanes}function of(){Me(Pl,va),Me(fr,fr.current)}function lf(){va=Pl.current,q(fr),q(Pl)}var li=P(null),Si=null;function ja(t){var n=t.alternate;Me(un,un.current&1),Me(li,t),Si===null&&(n===null||fr.current!==null||n.memoizedState!==null)&&(Si=t)}function cf(t){Me(un,un.current),Me(li,t),Si===null&&(Si=t)}function Nm(t){t.tag===22?(Me(un,un.current),Me(li,t),Si===null&&(Si=t)):Xa()}function Xa(){Me(un,un.current),Me(li,li.current)}function ci(t){q(li),Si===t&&(Si=null),q(un)}var un=P(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||md(a)||gd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,mt=null,jt=null,gn=null,zl=!1,dr=!1,Ds=!1,Bl=0,Mo=0,hr=null,yy=0;function ln(){throw Error(s(321))}function uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function ff(t,n,a,o,u,f){return ua=f,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?h0:Af,Ds=!1,f=a(o,u),Ds=!1,dr&&(f=Lm(n,a,o,u)),Dm(t),f}function Dm(t){F.H=To;var n=jt!==null&&jt.next!==null;if(ua=0,gn=jt=mt=null,zl=!1,Mo=0,hr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&Cl(t)&&(xn=!0))}function Lm(t,n,a,o){mt=t;var u=0;do{if(dr&&(hr=null),Mo=0,dr=!1,25<=u)throw Error(s(301));if(u+=1,gn=jt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=p0,f=n(a,o)}while(dr);return f}function by(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(mt.flags|=1024),n}function df(){var t=Bl!==0;return Bl=0,t}function hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pf(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}ua=0,gn=jt=mt=null,dr=!1,Mo=Bl=0,hr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?mt.memoizedState=gn=t:gn=gn.next=t,gn}function fn(){if(jt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=gn===null?mt.memoizedState:gn.next;if(n!==null)gn=n,jt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},gn===null?mt.memoizedState=gn=t:gn=gn.next=t}return gn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=Mo;return Mo+=1,hr===null&&(hr=[]),t=Mm(hr,t,n),n=mt,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?h0:Af),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===O)return Nn(t)}throw Error(s(438,String(t)))}function mf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=V;return n.index++,a}function fa(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=fn();return gf(n,jt,t)}function gf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=y=null,H=null,ae=n,_e=!1;do{var Se=ae.lane&-536870913;if(Se!==ae.lane?(Tt&Se)===Se:(ua&Se)===Se){var ue=ae.revertLane;if(ue===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Se===or&&(_e=!0);else if((ua&ue)===ue){ae=ae.next,ue===or&&(_e=!0);continue}else Se={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(R=H=Se,y=f):H=H.next=Se,mt.lanes|=ue,Ya|=ue;Se=ae.action,Ds&&a(f,Se),f=ae.hasEagerState?ae.eagerState:a(f,Se)}else ue={lane:Se,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},H===null?(R=H=ue,y=f):H=H.next=ue,mt.lanes|=Se,Ya|=Se;ae=ae.next}while(ae!==null&&ae!==n);if(H===null?y=f:H.next=R,!ri(f,t.memoizedState)&&(xn=!0,_e&&(a=lr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);ri(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Um(t,n,a){var o=mt,u=fn(),f=Ct;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ri((jt||u).memoizedState,a);if(y&&(u.memoizedState=a,xn=!0),u=u.queue,yf(Im.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,pr(9,{destroy:void 0},Pm.bind(null,o,u,a,n),null),Yt===null)throw Error(s(349));f||(ua&127)!==0||Om(o,n,a)}return a}function Om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=Fl(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pm(t,n,a,o){n.value=a,n.getSnapshot=o,zm(n)&&Bm(t)}function Im(t,n,a){return a(function(){zm(n)&&Bm(t)})}function zm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function Bm(t){var n=Ms(t,2);n!==null&&$n(n,t,2)}function vf(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ds){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},n}function Fm(t,n,a,o){return t.baseState=a,gf(t,jt,typeof o=="function"?o:fa)}function My(t,n,a,o,u){if(jl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var R=a(u,o),H=F.S;H!==null&&H(y,R),Hm(t,n,R)}catch(ae){_f(t,n,ae)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),Hm(t,n,f)}catch(ae){_f(t,n,ae)}}function Hm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){km(t,n,o)},function(o){return _f(t,n,o)}):km(t,n,a)}function km(t,n,a){n.status="fulfilled",n.value=a,Vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gm(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==o)}t.action=null}function Vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function jm(t,n){return n}function Xm(t,n){if(Ct){var a=Yt.formState;if(a!==null){e:{var o=mt;if(Ct){if($t){t:{for(var u=$t,f=Mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=Ei(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:n},a.queue=o,a=u0.bind(null,mt,o),o.dispatch=a,o=vf(!1),f=Tf.bind(null,mt,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=My.bind(null,mt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Wm(t){var n=fn();return qm(n,jt,t)}function qm(t,n,a){if(n=gf(t,n,jm)[0],t=Hl(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(y){throw y===cr?Dl:y}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,pr(9,{destroy:void 0},Sy.bind(null,u,a),null)),[o,f,t]}function Sy(t,n){t.action=n}function Ym(t){var n=fn(),a=jt;if(a!==null)return qm(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function pr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=Fl(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Zm(){return fn().memoizedState}function kl(t,n,a,o){var u=kn();mt.flags|=t,u.memoizedState=pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;jt!==null&&o!==null&&uf(o,jt.memoizedState.deps)?u.memoizedState=pr(n,f,a,o):(mt.flags|=t,u.memoizedState=pr(1|n,f,a,o))}function Km(t,n){kl(8390656,8,t,n)}function yf(t,n){Vl(2048,8,t,n)}function Ey(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=Fl(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Qm(t){var n=fn().memoizedState;return Ey({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jm(t,n){return Vl(4,2,t,n)}function $m(t,n){return Vl(4,4,t,n)}function e0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function t0(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,e0.bind(null,n,t),a)}function bf(){}function n0(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function i0(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=t(),Ds){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function Mf(t,n,a){return a===void 0||(ua&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ag(),mt.lanes|=t,Ya|=t,a)}function a0(t,n,a,o){return ri(a,n)?a:fr.current!==null?(t=Mf(t,a,o),ri(t,n)||(xn=!0),t):(ua&42)===0||(ua&1073741824)!==0&&(Tt&261930)===0?(xn=!0,t.memoizedState=a):(t=ag(),mt.lanes|=t,Ya|=t,n)}function s0(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var y=F.T,R={};F.T=R,Tf(t,!1,n,a);try{var H=u(),ae=F.S;if(ae!==null&&ae(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var _e=_y(H,o);Eo(t,n,_e,di(t))}else Eo(t,n,o,di(t))}catch(Se){Eo(t,n,{then:function(){},status:"rejected",reason:Se},di())}finally{G.p=f,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function Ty(){}function Sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=r0(t).queue;s0(t,u,n,ee,a===null?Ty:function(){return o0(t),a(o)})}function r0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function o0(t){var n=r0(t);n.next===null&&(n=t.alternate.memoizedState),Eo(t,n.next.queue,{},di())}function Ef(){return Nn(Ho)}function l0(){return fn().memoizedState}function c0(){return fn().memoizedState}function Ay(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=ka(a);var o=Va(n,t,a);o!==null&&($n(o,n,a),_o(o,n,a)),n={cache:Ju()},t.payload=n;return}n=n.return}}function wy(t,n,a){var o=di();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(t)?f0(n,a):(a=Hu(t,n,a,o),a!==null&&($n(a,t,o),d0(a,n,o)))}function u0(t,n,a){var o=di();Eo(t,n,a,o)}function Eo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(t))f0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,ri(R,y))return El(t,n,u,0),Yt===null&&Sl(),!1}catch{}finally{}if(a=Hu(t,n,u,o),a!==null)return $n(a,t,o),d0(a,n,o),!0}return!1}function Tf(t,n,a,o){if(o={lane:2,revertLane:id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(n)throw Error(s(479))}else n=Hu(t,a,o,2),n!==null&&$n(n,t,2)}function jl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function f0(t,n){dr=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function d0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ni(t,a)}}var To={readContext:Nn,use:Gl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};To.useEffectEvent=ln;var h0={readContext:Nn,use:Gl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:Km,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,kl(4194308,4,e0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return kl(4194308,4,t,n)},useInsertionEffect:function(t,n){kl(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var o=t();if(Ds){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Ds){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=wy.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=vf(t);var n=t.queue,a=u0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(t,n){var a=kn();return Mf(a,t,n)},useTransition:function(){var t=vf(!1);return t=s0.bind(null,mt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=kn();if(Ct){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Yt===null)throw Error(s(349));(Tt&127)!==0||Om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Km(Im.bind(null,o,f,t),[t]),o.flags|=2048,pr(9,{destroy:void 0},Pm.bind(null,o,f,a,n),null),a},useId:function(){var t=kn(),n=Yt.identifierPrefix;if(Ct){var a=Vi,o=ki;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ef,useFormState:Xm,useActionState:Xm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:mf,useCacheRefresh:function(){return kn().memoizedState=Ay.bind(null,mt)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Nn,use:Gl,useCallback:n0,useContext:Nn,useEffect:yf,useImperativeHandle:t0,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:i0,useReducer:Hl,useRef:Zm,useState:function(){return Hl(fa)},useDebugValue:bf,useDeferredValue:function(t,n){var a=fn();return a0(a,jt.memoizedState,t,n)},useTransition:function(){var t=Hl(fa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Um,useId:l0,useHostTransitionStatus:Ef,useFormState:Wm,useActionState:Wm,useOptimistic:function(t,n){var a=fn();return Fm(a,jt,t,n)},useMemoCache:mf,useCacheRefresh:c0};Af.useEffectEvent=Qm;var p0={readContext:Nn,use:Gl,useCallback:n0,useContext:Nn,useEffect:yf,useImperativeHandle:t0,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:i0,useReducer:xf,useRef:Zm,useState:function(){return xf(fa)},useDebugValue:bf,useDeferredValue:function(t,n){var a=fn();return jt===null?Mf(a,t,n):a0(a,jt.memoizedState,t,n)},useTransition:function(){var t=xf(fa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Um,useId:l0,useHostTransitionStatus:Ef,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var a=fn();return jt!==null?Fm(a,jt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:c0};p0.useEffectEvent=Qm;function wf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=di(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&($n(n,t,o),_o(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=di(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,o),n!==null&&($n(n,t,o),_o(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Va(t,o,a),n!==null&&($n(n,t,a),_o(n,t,a))}};function m0(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function g0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Cf.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function x0(t){Ml(t)}function v0(t){console.error(t)}function _0(t){Ml(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function b0(t){return t=ka(t),t.tag=3,t}function M0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){y0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){y0(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Cy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rr(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?ic():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ed(t,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ed(t,o,u)),!1}throw Error(s(435,a.tag))}return ed(t,o,u),ic(),!1}if(Ct)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(t=Error(s(422),{cause:o}),po(_i(t,a)))):(o!==qu&&(n=Error(s(423),{cause:o}),po(_i(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=_i(o,a),u=Rf(t.stateNode,o,u),sf(t,u),cn!==4&&(cn=2)),!1;var f=Error(s(520),{cause:o});if(f=_i(f,a),Uo===null?Uo=[f]:Uo.push(f),cn!==4&&(cn=2),n===null)return!0;o=_i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Rf(a.stateNode,o,t),sf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=b0(u),M0(u,t,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(s(461)),xn=!1;function Dn(t,n,a,o){n.child=t===null?Am(n,null,a,o):Ns(n,t.child,a,o)}function S0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return As(n),o=ff(t,n,a,y,f,u),R=df(),t!==null&&!xn?(hf(t,n,u),da(t,n,u)):(Ct&&R&&Xu(n),n.flags|=1,Dn(t,n,o,u),n.child)}function E0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!ku(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,T0(t,n,f,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Bf(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(y,o)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=ra(f,o),t.ref=n.ref,t.return=n,n.child=t}function T0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(uo(f,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=f,Bf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,da(t,n,u)}return Df(t,n,a,o,u)}function A0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return w0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,f!==null?f.cachePool:null),f!==null?Rm(n,f):of(),Nm(n);else return o=n.lanes=536870912,w0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Nl(n,f.cachePool),Rm(n,f),Xa(),n.memoizedState=null):(t!==null&&Nl(n,null),of(),Xa());return Dn(t,n,u,a),n.child}function Ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function w0(t,n,a,o,u){var f=ef();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Nl(n,null),of(),Nm(n),t!==null&&rr(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function C0(t,n,a){return Ns(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function Ry(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,Ao(null,t);if(cf(n),(t=$t)?(t=Gg(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:ki,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=fm(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return Wl(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=C0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||rr(t,n,a,!1),u=(a&t.childLanes)!==0,xn||u){if(o=Yt,o!==null&&(y=ii(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Ms(t,y),$n(o,t,y),Nf;ic(),n=C0(t,n,a)}else t=f.treeContext,$t=Ei(y.nextSibling),Rn=n,Ct=!0,Ba=null,Mi=!1,t!==null&&pm(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=ra(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return As(n),a=ff(t,n,a,o,void 0,u),o=df(),t!==null&&!xn?(hf(t,n,u),da(t,n,u)):(Ct&&o&&Xu(n),n.flags|=1,Dn(t,n,a,u),n.child)}function R0(t,n,a,o,u,f){return As(n),n.updateQueue=null,a=Lm(n,o,a,u),Dm(t),o=df(),t!==null&&!xn?(hf(t,n,f),da(t,n,f)):(Ct&&o&&Xu(n),n.flags|=1,Dn(t,n,a,f),n.child)}function N0(t,n,a,o,u){if(As(n),n.stateNode===null){var f=nr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Nn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},nf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Nn(y):nr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(wf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Cf.enqueueReplaceState(f,f.state,null),bo(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Ls(a,R);f.props=H;var ae=f.context,_e=a.contextType;y=nr,typeof _e=="object"&&_e!==null&&(y=Nn(_e));var Se=a.getDerivedStateFromProps;_e=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ae!==y)&&g0(n,f,o,y),Ha=!1;var ue=n.memoizedState;f.state=ue,bo(n,o,f,u),yo(),ae=n.memoizedState,R||ue!==ae||Ha?(typeof Se=="function"&&(wf(n,a,Se,o),ae=n.memoizedState),(H=Ha||m0(n,a,H,o,ue,ae,y))?(_e||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=y,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,af(t,n),y=n.memoizedProps,_e=Ls(a,y),f.props=_e,Se=n.pendingProps,ue=f.context,ae=a.contextType,H=nr,typeof ae=="object"&&ae!==null&&(H=Nn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Se||ue!==H)&&g0(n,f,o,H),Ha=!1,ue=n.memoizedState,f.state=ue,bo(n,o,f,u),yo();var pe=n.memoizedState;y!==Se||ue!==pe||Ha||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof R=="function"&&(wf(n,a,R,o),pe=n.memoizedState),(_e=Ha||m0(n,a,_e,o,ue,pe,H)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,pe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,pe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),f.props=o,f.state=pe,f.context=H,o=_e):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,ql(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ns(n,t.child,null,u),n.child=Ns(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=da(t,n,u),t}function D0(t,n,a,o){return Es(),n.flags|=256,Dn(t,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:ym()}}function Of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function L0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?ja(n):Xa(),(t=$t)?(t=Gg(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:ki,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=fm(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Fa(n);return gd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Xa(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=Ss(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Uf(a),o.childLanes=Of(t,y,a),n.memoizedState=Lf,Ao(null,o)):(ja(n),Pf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(ja(n),n.flags&=-257,n=If(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),R=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),R=Ss(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ns(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Of(t,y,a),n.memoizedState=Lf,n=Ao(null,o));else if(ja(n),gd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ae=y.dgst;y=ae,o=Error(s(419)),o.stack="",o.digest=y,po({value:o,source:null,stack:null}),n=If(t,n,a)}else if(xn||rr(t,n,a,!1),y=(a&t.childLanes)!==0,xn||y){if(y=Yt,y!==null&&(o=ii(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ms(t,o),$n(y,t,o),Nf;md(R)||ic(),n=If(t,n,a)}else md(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,$t=Ei(R.nextSibling),Rn=n,Ct=!0,Ba=null,Mi=!1,t!==null&&pm(n,t),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Xa(),R=o.fallback,u=n.mode,H=t.child,ae=H.sibling,o=ra(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ae!==null?R=ra(ae,R):(R=Ss(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Uf(a):(u=R.cachePool,u!==null?(H=mn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=ym(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Of(t,y,a),n.memoizedState=Lf,Ao(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Pf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=oi(22,t,null,n),t.lanes=0,t}function If(t,n,a){return Ns(n,t.child,null,a),t=Pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function U0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ku(t.return,n,a)}function zf(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function O0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=un.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,Me(un,y),Dn(t,n,o,a),o=Ct?ho:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,a,n);else if(t.tag===19)U0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),zf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}zf(n,!0,a,null,f,o);break;case"together":zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(rr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function Ny(t,n,a){switch(n.tag){case 3:fe(n,n.stateNode.containerInfo),Ga(n,mn,t.memoizedState.cache),Es();break;case 27:case 5:Fe(n);break;case 4:fe(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?L0(t,n,a):(ja(n),t=da(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return O0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(un,un.current),o)break;return null;case 22:return n.lanes=0,A0(t,n,a,n.pendingProps);case 24:Ga(n,mn,t.memoizedState.cache)}return da(t,n,a)}function P0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Bf(t,a)&&(n.flags&128)===0)return xn=!1,Ny(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Ct&&(n.flags&1048576)!==0&&hm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Cs(n.elementType),n.type=t,typeof t=="function")ku(t)?(o=Ls(t,o),n.tag=1,n=N0(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=S0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=E0(null,n,t,o,a);break e}}throw n=oe(t)||t,Error(s(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),N0(t,n,o,u,a);case 3:e:{if(fe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,af(t,n),bo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ga(n,mn,o),o!==f.cache&&Qu(n,[mn],a,!0),yo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=D0(t,n,o,a);break e}else if(o!==u){u=_i(Error(s(424)),n),po(u),n=D0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Ei(t.firstChild),Rn=n,Ct=!0,Ba=null,Mi=!0,a=Am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Es(),o===u){n=da(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=uc(ne.current).createElement(a),o[hn]=n,o[Cn]=t,Ln(o,a,t),pn(o),n.stateNode=o):n.memoizedState=Wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Fe(n),t===null&&Ct&&(o=n.stateNode=Vg(n.type,n.pendingProps,ne.current),Rn=n,Mi=!0,u=$t,$a(n.type)?(xd=u,$t=Ei(o.firstChild)):$t=u),Dn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=$t)&&(o=rb(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Rn=n,$t=Ei(o.firstChild),Mi=!1,u=!0):u=!1),u||Fa(n)),Fe(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,dd(u,f)?o=null:y!==null&&dd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(t,n,by,null,null,a),Ho._currentValue=u),ql(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=$t)&&(a=ob(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Rn=n,$t=null,t=!0):t=!1),t||Fa(n)),null;case 13:return L0(t,n,a);case 4:return fe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ns(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return S0(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,As(n),u=Nn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return E0(t,n,n.type,n.pendingProps,a);case 15:return T0(t,n,n.type,n.pendingProps,a);case 19:return O0(t,n,a);case 31:return Ry(t,n,a);case 22:return A0(t,n,a,n.pendingProps);case 24:return As(n),o=Nn(mn),t===null?(u=ef(),u===null&&(u=Yt,f=Ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},nf(n),Ga(n,mn,u)):((t.lanes&a)!==0&&(af(t,n),bo(n,null,null,a),yo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,mn,o)):(o=f.cache,Ga(n,mn,o),o!==u.cache&&Qu(n,[mn],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(lg())t.flags|=8192;else throw Rs=Ll,tf}else t.flags&=-16777217}function I0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n))if(lg())t.flags|=8192;else throw Rs=Ll,tf}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,vr|=n)}function wo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Dy(t,n,a){var o=n.pendingProps;switch(Wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(mn),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(sr(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ha(n),f!==null?(en(n),I0(n,f)):(en(n),Ff(n,u,null,o,a))):f?f!==t.memoizedState?(ha(n),en(n),I0(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ha(n),en(n),Ff(n,u,t,o,a)),null;case 27:if(Ze(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=we.current,sr(n)?mm(n):(t=Vg(u,o,a),n.stateNode=t,ha(n))}return en(n),null;case 5:if(Ze(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=we.current,sr(n))mm(n);else{var y=uc(ne.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[hn]=n,f[Cn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Ln(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ha(n)}}return en(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,sr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||Fa(n,!0)}else t=uc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=sr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[hn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=sr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Yu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),en(n),null);case 4:return Te(),t===null&&od(n.stateNode.containerInfo),en(n),null;case 10:return ca(n.type),en(n),null;case 19:if(q(un),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)wo(o,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Il(t),f!==null){for(n.flags|=128,wo(o,!1),t=f.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)um(a,t),a=a.sibling;return Me(un,un.current&1|2),Ct&&oa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&st()>ec&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ct)return en(n),null}else 2*st()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=st(),t.sibling=null,a=un.current,Me(un,u?a&1|2:a&1),Ct&&oa(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ci(n),lf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&q(ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(mn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ly(t,n){switch(Wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(mn),Te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return q(un),null;case 4:return Te(),null;case 10:return ca(n.type),null;case 22:case 23:return ci(n),lf(),t!==null&&q(ws),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(mn),null;case 25:return null;default:return null}}function z0(t,n){switch(Wu(n),n.tag){case 3:ca(mn),Te();break;case 26:case 27:case 5:Ze(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:q(un);break;case 10:ca(n.type);break;case 22:case 23:ci(n),lf(),t!==null&&q(ws);break;case 24:ca(mn)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Wa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,ae=R;try{ae()}catch(_e){kt(u,H,_e)}}}o=o.next}while(o!==f)}}catch(_e){kt(n,n.return,_e)}}function B0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cm(n,a)}catch(o){kt(t,t.return,o)}}}function F0(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function ji(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function G0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Gf(t,n,a){try{var o=t.stateNode;eb(o,t.type,a,n),o[Cn]=n}catch(u){kt(t,t.return,u)}}function H0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(kf(t,n,a),t=t.sibling;t!==null;)kf(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function k0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[hn]=t,n[Cn]=a}catch(f){kt(t,t.return,f)}}var pa=!1,vn=!1,Vf=!1,V0=typeof WeakSet=="function"?WeakSet:Set,An=null;function Uy(t,n){if(t=t.containerInfo,ud=xc,t=tm(t),Pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,ae=0,_e=0,Se=t,ue=null;t:for(;;){for(var pe;Se!==a||u!==0&&Se.nodeType!==3||(R=y+u),Se!==f||o!==0&&Se.nodeType!==3||(H=y+o),Se.nodeType===3&&(y+=Se.nodeValue.length),(pe=Se.firstChild)!==null;)ue=Se,Se=pe;for(;;){if(Se===t)break t;if(ue===a&&++ae===u&&(R=y),ue===f&&++_e===o&&(H=y),(pe=Se.nextSibling)!==null)break;Se=ue,ue=Se.parentNode}Se=pe}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:t,selectionRange:a},xc=!1,An=n;An!==null;)if(n=An,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,An=t;else for(;An!==null;){switch(n=An,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qe=Ls(a.type,u);t=o.getSnapshotBeforeUpdate(qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){kt(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,An=t;break}An=n.return}}function j0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),o&4&&Co(5,a);break;case 1:if(ga(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){kt(a,a.return,y)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){kt(a,a.return,y)}}o&64&&B0(a),o&512&&Ro(a,a.return);break;case 3:if(ga(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(t,n)}catch(y){kt(a,a.return,y)}}break;case 27:n===null&&o&4&&k0(a);case 26:case 5:ga(t,a),n===null&&o&4&&G0(a),o&512&&Ro(a,a.return);break;case 12:ga(t,a);break;case 31:ga(t,a),o&4&&q0(t,a);break;case 13:ga(t,a),o&4&&Y0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ky.bind(null,a),lb(t,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||vn,u=pa;var f=vn;pa=o,(vn=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),pa=u,vn=f}break;case 30:break;default:ga(t,a)}}function X0(t){var n=t.alternate;n!==null&&(t.alternate=null,X0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ua(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Zn=!1;function ma(t,n,a){for(a=a.child;a!==null;)W0(t,n,a),a=a.sibling}function W0(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:vn||ji(a,n),ma(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||ji(a,n);var o=rn,u=Zn;$a(a.type)&&(rn=a.stateNode,Zn=!1),ma(t,n,a),Bo(a.stateNode),rn=o,Zn=u;break;case 5:vn||ji(a,n);case 6:if(o=rn,u=Zn,rn=null,ma(t,n,a),rn=o,Zn=u,rn!==null)if(Zn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:rn!==null&&(Zn?(t=rn,Bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ar(t)):Bg(rn,a.stateNode));break;case 4:o=rn,u=Zn,rn=a.stateNode.containerInfo,Zn=!0,ma(t,n,a),rn=o,Zn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),vn||Wa(4,a,n),ma(t,n,a);break;case 1:vn||(ji(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&F0(a,n,o)),ma(t,n,a);break;case 21:ma(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ma(t,n,a),vn=o;break;default:ma(t,n,a)}}function q0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(a){kt(n,n.return,a)}}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(a){kt(n,n.return,a)}}function Oy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new V0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new V0),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=Oy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Vy.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){rn=R.stateNode,Zn=!1;break e}break;case 5:rn=R.stateNode,Zn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Zn=!0;break e}R=R.return}if(rn===null)throw Error(s(160));W0(f,y,u),rn=null,Zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Z0(n,t),n=n.sibling}var Li=null;function Z0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(Wa(3,t,t.return),Co(3,t),Wa(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),o&64&&pa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[La]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,o,a),f[hn]=t,pn(f),o=f;break e;case"link":var y=Zg("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Zg("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[hn]=t,pn(f),o=f}t.stateNode=o}else Kg(u,t.type,t.stateNode);else t.stateNode=Yg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Kg(u,t.type,t.stateNode):Yg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),a!==null&&o&4&&Gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(qe){kt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Vf=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){kt(t,t.return,qe)}}break;case 3:if(hc=null,u=Li,Li=fc(n.containerInfo),Kn(n,t),Li=u,Qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(qe){kt(t,t.return,qe)}Vf&&(Vf=!1,K0(t));break;case 4:o=Li,Li=fc(t.stateNode.containerInfo),Kn(n,t),Qn(t),Li=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=st()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ae=pa,_e=vn;if(pa=ae||u,vn=_e||H,Kn(n,t),vn=_e,pa=ae,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||pa||vn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var Se=H.memoizedProps.style,ue=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(qe){kt(H,H.return,qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(qe){kt(H,H.return,qe)}}}else if(n.tag===18){if(a===null){H=n;try{var pe=H.stateNode;u?Fg(pe,!0):Fg(H.stateNode,!1)}catch(qe){kt(H,H.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(H0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Hf(t);Kl(t,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(si(y,""),a.flags&=-33);var R=Hf(t);Kl(t,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,ae=Hf(t);kf(t,ae,H);break;default:throw Error(s(161))}}catch(_e){kt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function K0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;K0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)j0(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Us(n);break;case 1:ji(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&F0(n,n.return,a),Us(n);break;case 27:Bo(n.stateNode);case 26:case 5:ji(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:xa(u,f,a),Co(4,f);break;case 1:if(xa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){kt(o,o.return,ae)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)wm(H[u],R)}catch(ae){kt(o,o.return,ae)}}a&&y&64&&B0(f),Ro(f,f.return);break;case 27:k0(f);case 26:case 5:xa(u,f,a),a&&o===null&&y&4&&G0(f),Ro(f,f.return);break;case 12:xa(u,f,a);break;case 31:xa(u,f,a),a&&y&4&&q0(u,f);break;case 13:xa(u,f,a),a&&y&4&&Y0(u,f);break;case 22:f.memoizedState===null&&xa(u,f,a),Ro(f,f.return);break;case 30:break;default:xa(u,f,a)}n=n.sibling}}function jf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function Xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Ui(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Q0(t,n,a,o),n=n.sibling}function Q0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n,a,o),u&2048&&Co(9,n);break;case 1:Ui(t,n,a,o);break;case 3:Ui(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(u&2048){Ui(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){kt(n,n.return,H)}}else Ui(t,n,a,o);break;case 31:Ui(t,n,a,o);break;case 13:Ui(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(t,n,a,o):No(t,n):f._visibility&2?Ui(t,n,a,o):(f._visibility|=2,mr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jf(y,n);break;case 24:Ui(t,n,a,o),u&2048&&Xf(n.alternate,n);break;default:Ui(t,n,a,o)}}function mr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,R=a,H=o,ae=y.flags;switch(y.tag){case 0:case 11:case 15:mr(f,y,R,H,u),Co(8,y);break;case 23:break;case 22:var _e=y.stateNode;y.memoizedState!==null?_e._visibility&2?mr(f,y,R,H,u):No(f,y):(_e._visibility|=2,mr(f,y,R,H,u)),u&&ae&2048&&jf(y.alternate,y);break;case 24:mr(f,y,R,H,u),u&&ae&2048&&Xf(y.alternate,y);break;default:mr(f,y,R,H,u)}n=n.sibling}}function No(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&jf(o.alternate,o);break;case 24:No(a,o),u&2048&&Xf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Do=8192;function gr(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)J0(t,n,a),t=t.sibling}function J0(t,n,a){switch(t.tag){case 26:gr(t,n,a),t.flags&Do&&t.memoizedState!==null&&yb(a,Li,t.memoizedState,t.memoizedProps);break;case 5:gr(t,n,a);break;case 3:case 4:var o=Li;Li=fc(t.stateNode.containerInfo),gr(t,n,a),Li=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,gr(t,n,a),Do=o):gr(t,n,a));break;default:gr(t,n,a)}}function $0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,tg(o,t)}$0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eg(t),t=t.sibling}function eg(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Lo(t);break;default:Lo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,tg(o,t)}$0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function tg(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,An=o;else e:for(a=t;An!==null;){o=An;var u=o.sibling,f=o.return;if(X0(o),o===a){An=null;break e}if(u!==null){u.return=f,An=u;break e}An=f}}}var Py={getCacheForType:function(t){var n=Nn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(mn).controller.signal}},Iy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,St=null,Tt=0,Ht=0,ui=null,qa=!1,xr=!1,Wf=!1,va=0,cn=0,Ya=0,Os=0,qf=0,fi=0,vr=0,Uo=null,Jn=null,Yf=!1,$l=0,ng=0,ec=1/0,tc=null,Za=null,Mn=0,Ka=null,_r=null,_a=0,Zf=0,Kf=null,ig=null,Oo=0,Qf=null;function di(){return(Pt&2)!==0&&Tt!==0?Tt&-Tt:F.T!==null?id():no()}function ag(){if(fi===0)if((Tt&536870912)===0||Ct){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function $n(t,n,a){(t===Yt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Qa(t,Tt,fi,!1)),je(t,a),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(Os|=a),cn===4&&Qa(t,Tt,fi,!1)),Xi(t))}function sg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=o?Fy(t,n):$f(t,n,!0),f=o;do{if(u===0){xr&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zy(a)){u=$f(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Uo;var H=R.current.memoizedState.isDehydrated;if(H&&(yr(R,y).flags|=256),y=$f(R,y,!1),y!==2){if(Wf&&!H){R.errorRecoveryDisabledLanes|=f,Os|=f,u=4;break e}f=Jn,Jn=u,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){yr(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,fi,!qa);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-st(),10<u)){if(Qa(o,n,fi,!qa),ye(o,0,!0)!==0)break e;_a=n,o.timeoutHandle=Ig(rg.bind(null,o,a,Jn,tc,Yf,n,fi,Os,vr,qa,f,"Throttled",-0,0),u);break e}rg(o,a,Jn,tc,Yf,n,fi,Os,vr,qa,f,null,-0,0)}}break}while(!0);Xi(t)}function rg(t,n,a,o,u,f,y,R,H,ae,_e,Se,ue,pe){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},J0(n,f,Se);var qe=(f&62914560)===f?$l-st():(f&4194048)===f?ng-st():0;if(qe=bb(Se,qe),qe!==null){_a=f,t.cancelPendingCommit=qe(pg.bind(null,t,n,f,a,o,u,y,R,H,_e,Se,null,ue,pe)),Qa(t,f,y,!ae);return}}pg(t,n,f,a,o,u,y,R,H)}function zy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ri(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~qf,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ge(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&zt(t,a,n)}function nc(){return(Pt&6)===0?(Po(0),!1):!0}function Jf(){if(St!==null){if(Ht===0)var t=St.return;else t=St,la=Ts=null,pf(t),ur=null,xo=0,t=St;for(;t!==null;)z0(t.alternate,t),t=t.return;St=null}}function yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ib(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,Jf(),Yt=t,St=a=ra(t.current,null),Tt=n,Ht=0,ui=null,qa=!1,xr=De(t,n),Wf=!1,vr=fi=qf=Os=Ya=cn=0,Jn=Uo=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ge(o),f=1<<u;n|=t[u],o&=~f}return va=n,Sl(),a}function og(t,n){mt=null,F.H=To,n===cr||n===Dl?(n=Sm(),Ht=3):n===tf?(n=Sm(),Ht=4):Ht=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,St===null&&(cn=1,Xl(t,_i(n,t.current)))}function lg(){var t=li.current;return t===null?!0:(Tt&4194048)===Tt?Si===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Si:!1}function cg(){var t=F.H;return F.H=To,t===null?To:t}function ug(){var t=F.A;return F.A=Py,t}function ic(){cn=4,qa||(Tt&4194048)!==Tt&&li.current!==null||(xr=!0),(Ya&134217727)===0&&(Os&134217727)===0||Yt===null||Qa(Yt,Tt,fi,!1)}function $f(t,n,a){var o=Pt;Pt|=2;var u=cg(),f=ug();(Yt!==t||Tt!==n)&&(tc=null,yr(t,n)),n=!1;var y=cn;e:do try{if(Ht!==0&&St!==null){var R=St,H=ui;switch(Ht){case 8:Jf(),y=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var ae=Ht;if(Ht=0,ui=null,br(t,R,H,ae),a&&xr){y=0;break e}break;default:ae=Ht,Ht=0,ui=null,br(t,R,H,ae)}}By(),y=cn;break}catch(_e){og(t,_e)}while(!0);return n&&t.shellSuspendCounter++,la=Ts=null,Pt=o,F.H=u,F.A=f,St===null&&(Yt=null,Tt=0,Sl()),y}function By(){for(;St!==null;)fg(St)}function Fy(t,n){var a=Pt;Pt|=2;var o=cg(),u=ug();Yt!==t||Tt!==n?(tc=null,ec=st()+500,yr(t,n)):xr=De(t,n);e:do try{if(Ht!==0&&St!==null){n=St;var f=ui;t:switch(Ht){case 1:Ht=0,ui=null,br(t,n,f,1);break;case 2:case 9:if(bm(f)){Ht=0,ui=null,dg(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==t||(Ht=7),Xi(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:bm(f)?(Ht=0,ui=null,dg(n)):(Ht=0,ui=null,br(t,n,f,7));break;case 5:var y=null;switch(St.tag){case 26:y=St.memoizedState;case 5:case 27:var R=St;if(y?Qg(y):R.stateNode.complete){Ht=0,ui=null;var H=R.sibling;if(H!==null)St=H;else{var ae=R.return;ae!==null?(St=ae,ac(ae)):St=null}break t}}Ht=0,ui=null,br(t,n,f,5);break;case 6:Ht=0,ui=null,br(t,n,f,6);break;case 8:Jf(),cn=6;break e;default:throw Error(s(462))}}Gy();break}catch(_e){og(t,_e)}while(!0);return la=Ts=null,F.H=o,F.A=u,Pt=a,St!==null?0:(Yt=null,Tt=0,Sl(),cn)}function Gy(){for(;St!==null&&!ct();)fg(St)}function fg(t){var n=P0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?ac(t):St=n}function dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:pf(n);default:z0(a,n),n=St=um(n,va),n=P0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?ac(t):St=n}function br(t,n,a,o){la=Ts=null,pf(n),ur=null,xo=0;var u=n.return;try{if(Cy(t,u,n,a,Tt)){cn=1,Xl(t,_i(a,t.current)),St=null;return}}catch(f){if(u!==null)throw St=u,f;cn=1,Xl(t,_i(a,t.current)),St=null;return}n.flags&32768?(Ct||o===1?t=!0:xr||(Tt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),hg(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){hg(n,qa);return}t=n.return;var a=Dy(n.alternate,n,va);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);cn===0&&(cn=5)}function hg(t,n){do{var a=Ly(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);cn=6,St=null}function pg(t,n,a,o,u,f,y,R,H){t.cancelPendingCommit=null;do sc();while(Mn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Gu,nn(t,a,f,y,R,H),t===Yt&&(St=Yt=null,Tt=0),_r=n,Ka=t,_a=a,Zf=f,Kf=u,ig=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jy(J,function(){return _g(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,y=Pt,Pt|=4;try{Uy(t,n,a)}finally{Pt=y,G.p=u,F.T=o}}Mn=1,mg(),gg(),xg()}}function mg(){if(Mn===1){Mn=0;var t=Ka,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{Z0(n,t);var f=fd,y=tm(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&em(R.ownerDocument.documentElement,R)){if(H!==null&&Pu(R)){var ae=H.start,_e=H.end;if(_e===void 0&&(_e=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(_e,R.value.length);else{var Se=R.ownerDocument||document,ue=Se&&Se.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),qe=R.textContent.length,rt=Math.min(H.start,qe),Wt=H.end===void 0?rt:Math.min(H.end,qe);!pe.extend&&rt>Wt&&(y=Wt,Wt=rt,rt=y);var $=$p(R,rt),j=$p(R,Wt);if($&&j&&(pe.rangeCount!==1||pe.anchorNode!==$.node||pe.anchorOffset!==$.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var ie=Se.createRange();ie.setStart($.node,$.offset),pe.removeAllRanges(),rt>Wt?(pe.addRange(ie),pe.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),pe.addRange(ie))}}}}for(Se=[],pe=R;pe=pe.parentNode;)pe.nodeType===1&&Se.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var be=Se[R];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}xc=!!ud,fd=ud=null}finally{Pt=u,G.p=o,F.T=a}}t.current=n,Mn=2}}function gg(){if(Mn===2){Mn=0;var t=Ka,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{j0(t,n.alternate,n)}finally{Pt=u,G.p=o,F.T=a}}Mn=3}}function xg(){if(Mn===4||Mn===3){Mn=0,Y();var t=Ka,n=_r,a=_a,o=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,_r=Ka=null,vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),to(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{F.T=n,G.p=u}}(_a&3)!==0&&sc(),Xi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Qf?Oo++:(Oo=0,Qf=t):Oo=0,Po(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function sc(){return mg(),gg(),xg(),_g()}function _g(){if(Mn!==5)return!1;var t=Ka,n=Zf;Zf=0;var a=to(_a),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Kf,Kf=null;var f=Ka,y=_a;if(Mn=0,_r=Ka=null,_a=0,(Pt&6)!==0)throw Error(s(331));var R=Pt;if(Pt|=4,eg(f.current),Q0(f,f.current,y,a),Pt=R,Po(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(ge,f)}catch{}return!0}finally{G.p=u,F.T=o,vg(t,n)}}function yg(t,n,a){n=_i(a,n),n=Rf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(je(t,2),Xi(t))}function kt(t,n,a){if(t.tag===3)yg(t,t,a);else for(;n!==null;){if(n.tag===3){yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=_i(a,t),a=b0(2),o=Va(n,a,2),o!==null&&(M0(a,o,n,t),je(o,2),Xi(o));break}}n=n.return}}function ed(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Iy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Wf=!0,u.add(a),t=Hy.bind(null,t,n,a),n.then(t,t))}function Hy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(Tt&a)===a&&(cn===4||cn===3&&(Tt&62914560)===Tt&&300>st()-$l?(Pt&2)===0&&yr(t,0):qf|=a,vr===Tt&&(vr=0)),Xi(t)}function bg(t,n){n===0&&(n=Ee()),t=Ms(t,n),t!==null&&(je(t,n),Xi(t))}function ky(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function Vy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),bg(t,a)}function jy(t,n){return Jt(t,n)}var rc=null,Mr=null,td=!1,oc=!1,nd=!1,Ja=0;function Xi(t){t!==Mr&&t.next===null&&(Mr===null?rc=Mr=t:Mr=Mr.next=t),oc=!0,td||(td=!0,Wy())}function Po(t,n){if(!nd&&oc){nd=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ge(42|t)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Tg(o,f))}else f=Tt,f=ye(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,Tg(o,f));o=o.next}while(a);nd=!1}}function Xy(){Mg()}function Mg(){oc=td=!1;var t=0;Ja!==0&&nb()&&(t=Ja);for(var n=st(),a=null,o=rc;o!==null;){var u=o.next,f=Sg(o,n);f===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(Mr=a)):(a=o,(t!==0||(f&3)!==0)&&(oc=!0)),o=u}Mn!==0&&Mn!==5||Po(t),Ja!==0&&(Ja=0)}function Sg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Ge(f),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Be(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=Yt,a=Tt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ht(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&ht(o),to(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=ve;break;default:a=J}return o=Eg.bind(null,t),a=Jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&ht(o),t.callbackPriority=2,t.callbackNode=null,2}function Eg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(sc()&&t.callbackNode!==a)return null;var o=Tt;return o=ye(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(sg(t,o,n),Sg(t,st()),t.callbackNode!=null&&t.callbackNode===a?Eg.bind(null,t):null)}function Tg(t,n){if(sc())return null;sg(t,n,!0)}function Wy(){ab(function(){(Pt&6)!==0?Jt(I,Xy):Mg()})}function id(){if(Ja===0){var t=or;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),Ja=t}return Ja}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:vs(""+t)}function wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ag((u[Cn]||null).action),y=o.submitter;y&&(n=(n=y[Cn]||null)?Ag(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new _l("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var H=y?wg(u,y):new FormData(u);Sf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=y?wg(u,y):new FormData(u),Sf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var ad=0;ad<Fu.length;ad++){var sd=Fu[ad],Yy=sd.toLowerCase(),Zy=sd[0].toUpperCase()+sd.slice(1);Di(Yy,"on"+Zy)}Di(am,"onAnimationEnd"),Di(sm,"onAnimationIteration"),Di(rm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(fy,"onTransitionRun"),Di(dy,"onTransitionStart"),Di(hy,"onTransitionCancel"),Di(om,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,ae=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(_e){Ml(_e)}u.currentTarget=null,f=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,ae=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(_e){Ml(_e)}u.currentTarget=null,f=H}}}}function Et(t,n){var a=n[ms];a===void 0&&(a=n[ms]=new Set);var o=t+"__bubble";a.has(o)||(Rg(n,t,2,!1),a.add(o))}function rd(t,n,a){var o=0;n&&(o|=4),Rg(a,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function od(t){if(!t[lc]){t[lc]=!0,ml.forEach(function(a){a!=="selectionchange"&&(Ky.has(a)||rd(a,!1,t),rd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,rd("selectionchange",!1,n))}}function Rg(t,n,a,o){switch(ax(n)){case 2:var u=Eb;break;case 8:u=Tb;break;default:u=Md}a=u.bind(null,n,a,t),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ld(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=na(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=f=y;continue e}R=R.parentNode}}o=o.return}Op(function(){var ae=f,_e=Eu(a),Se=[];e:{var ue=lm.get(t);if(ue!==void 0){var pe=_l,qe=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":pe=V_;break;case"focusin":qe="focus",pe=Nu;break;case"focusout":qe="blur",pe=Nu;break;case"beforeblur":case"afterblur":pe=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=W_;break;case am:case sm:case rm:pe=O_;break;case om:pe=Y_;break;case"scroll":case"scrollend":pe=R_;break;case"wheel":pe=K_;break;case"copy":case"cut":case"paste":pe=I_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Fp;break;case"toggle":case"beforetoggle":pe=J_}var rt=(n&4)!==0,Wt=!rt&&(t==="scroll"||t==="scrollend"),$=rt?ue!==null?ue+"Capture":null:ue;rt=[];for(var j=ae,ie;j!==null;){var be=j;if(ie=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||ie===null||$===null||(be=io(j,$),be!=null&&rt.push(zo(j,be,ie))),Wt)break;j=j.return}0<rt.length&&(ue=new pe(ue,qe,null,a,_e),Se.push({event:ue,listeners:rt}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&a!==Su&&(qe=a.relatedTarget||a.fromElement)&&(na(qe)||qe[qn]))break e;if((pe||ue)&&(ue=_e.window===_e?_e:(ue=_e.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(qe=a.relatedTarget||a.toElement,pe=ae,qe=qe?na(qe):null,qe!==null&&(Wt=c(qe),rt=qe.tag,qe!==Wt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(pe=null,qe=ae),pe!==qe)){if(rt=zp,be="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Fp,be="onPointerLeave",$="onPointerEnter",j="pointer"),Wt=pe==null?ue:xs(pe),ie=qe==null?ue:xs(qe),ue=new rt(be,j+"leave",pe,a,_e),ue.target=Wt,ue.relatedTarget=ie,be=null,na(_e)===ae&&(rt=new rt($,j+"enter",qe,a,_e),rt.target=ie,rt.relatedTarget=Wt,be=rt),Wt=be,pe&&qe)t:{for(rt=Qy,$=pe,j=qe,ie=0,be=$;be;be=rt(be))ie++;be=0;for(var tt=j;tt;tt=rt(tt))be++;for(;0<ie-be;)$=rt($),ie--;for(;0<be-ie;)j=rt(j),be--;for(;ie--;){if($===j||j!==null&&$===j.alternate){rt=$;break t}$=rt($),j=rt(j)}rt=null}else rt=null;pe!==null&&Ng(Se,ue,pe,rt,!1),qe!==null&&Wt!==null&&Ng(Se,Wt,qe,rt,!0)}}e:{if(ue=ae?xs(ae):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var Lt=qp;else if(Xp(ue))if(Yp)Lt=ly;else{Lt=ry;var Ke=sy}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?ae&&It(ae.elementType)&&(Lt=qp):Lt=oy;if(Lt&&(Lt=Lt(t,ae))){Wp(Se,Lt,a,_e);break e}Ke&&Ke(t,ue,ae),t==="focusout"&&ae&&ue.type==="number"&&ae.memoizedProps.value!=null&&Mt(ue,"number",ue.value)}switch(Ke=ae?xs(ae):window,t){case"focusin":(Xp(Ke)||Ke.contentEditable==="true")&&($s=Ke,Iu=ae,fo=null);break;case"focusout":fo=Iu=$s=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,nm(Se,a,_e);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":nm(Se,a,_e)}var vt;if(Lu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Js?Vp(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Gp&&a.locale!=="ko"&&(Js||At!=="onCompositionStart"?At==="onCompositionEnd"&&Js&&(vt=Pp()):(Ia=_e,wu="value"in Ia?Ia.value:Ia.textContent,Js=!0)),Ke=cc(ae,At),0<Ke.length&&(At=new Bp(At,t,null,a,_e),Se.push({event:At,listeners:Ke}),vt?At.data=vt:(vt=jp(a),vt!==null&&(At.data=vt)))),(vt=ey?ty(t,a):ny(t,a))&&(At=cc(ae,"onBeforeInput"),0<At.length&&(Ke=new Bp("onBeforeInput","beforeinput",null,a,_e),Se.push({event:Ke,listeners:At}),Ke.data=vt)),qy(Se,t,ae,a,_e)}Cg(Se,n)})}function zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(t,a),u!=null&&o.unshift(zo(t,u,f)),u=io(t,n),u!=null&&o.push(zo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Qy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,ae=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ae===null||(H=ae,u?(ae=io(a,f),ae!=null&&y.unshift(zo(a,ae,H))):u||(ae=io(a,f),ae!=null&&y.push(zo(a,ae,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Jy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function Dg(t){return(typeof t=="string"?t:""+t).replace(Jy,`
`).replace($y,"")}function Lg(t,n){return n=Dg(n),Dg(t)===n}function Xt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&si(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ni(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=vs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=aa);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=vs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hi.get(a)||a,Oe(t,a,o))}}function cd(t,n,a,o,u,f){switch(a){case"style":Ni(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,f,y,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var R=f=y=u=null,H=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":y=_e;break;case"checked":H=_e;break;case"defaultChecked":ae=_e;break;case"value":f=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:Xt(t,n,o,_e,a,null)}}On(t,f,R,H,ae,y,u,!1);return;case"select":Et("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Xt(t,n,u,R,a,null)}n=f,a=y,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xt(t,n,y,R,a,null)}Ri(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,H,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)Et(Io[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,ae,o,a,null)}return;default:if(It(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&cd(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xt(t,n,R,o,a,null))}function eb(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,H=null,ae=null,_e=null;for(pe in a){var Se=a[pe];if(a.hasOwnProperty(pe)&&Se!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":H=Se;default:o.hasOwnProperty(pe)||Xt(t,n,pe,null,o,Se)}}for(var ue in o){var pe=o[ue];if(Se=a[ue],o.hasOwnProperty(ue)&&(pe!=null||Se!=null))switch(ue){case"type":f=pe;break;case"name":u=pe;break;case"checked":ae=pe;break;case"defaultChecked":_e=pe;break;case"value":y=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:pe!==Se&&Xt(t,n,ue,pe,o,Se)}}He(t,y,R,H,ae,_e,f,u);return;case"select":pe=y=R=ue=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":pe=H;default:o.hasOwnProperty(f)||Xt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ue=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==H&&Xt(t,n,u,f,o,H)}n=R,a=y,o=pe,ue!=null?bn(t,!!a,ue,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":pe=ue=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(t,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ue=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,n,y,u,o,f)}ai(t,ue,pe);return;case"option":for(var qe in a)if(ue=a[qe],a.hasOwnProperty(qe)&&ue!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Xt(t,n,qe,null,o,ue)}for(H in o)if(ue=o[H],pe=a[H],o.hasOwnProperty(H)&&ue!==pe&&(ue!=null||pe!=null))switch(H){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Xt(t,n,H,ue,o,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)ue=a[rt],a.hasOwnProperty(rt)&&ue!=null&&!o.hasOwnProperty(rt)&&Xt(t,n,rt,null,o,ue);for(ae in o)if(ue=o[ae],pe=a[ae],o.hasOwnProperty(ae)&&ue!==pe&&(ue!=null||pe!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Xt(t,n,ae,ue,o,pe)}return;default:if(It(n)){for(var Wt in a)ue=a[Wt],a.hasOwnProperty(Wt)&&ue!==void 0&&!o.hasOwnProperty(Wt)&&cd(t,n,Wt,void 0,o,ue);for(_e in o)ue=o[_e],pe=a[_e],!o.hasOwnProperty(_e)||ue===pe||ue===void 0&&pe===void 0||cd(t,n,_e,ue,o,pe);return}}for(var $ in a)ue=a[$],a.hasOwnProperty($)&&ue!=null&&!o.hasOwnProperty($)&&Xt(t,n,$,null,o,ue);for(Se in o)ue=o[Se],pe=a[Se],!o.hasOwnProperty(Se)||ue===pe||ue==null&&pe==null||Xt(t,n,Se,ue,o,pe)}function Ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&Ug(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ae=H.startTime;if(ae>R)break;var _e=H.transferSize,Se=H.initiatorType;_e&&Ug(Se)&&(H=H.responseEnd,y+=_e*(H<R?1:(R-ae)/(H-ae)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ud=null,fd=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function dd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function nb(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,ib=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,ab=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(sb)}:Ig;function sb(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function Bg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[La]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);Ar(n)}function Fg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function pd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),Ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[La])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function ob(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function Gg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function md(t){return t.data==="$?"||t.data==="$~"}function gd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lb(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var xd=null;function Hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function kg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Vg(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ua(t)}var Ti=new Map,jg=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=G.d;G.d={f:cb,r:ub,D:fb,C:db,L:hb,m:pb,X:gb,S:mb,M:xb};function cb(){var t=ya.f(),n=nc();return t||n}function ub(t){var n=ia(t);n!==null&&n.tag===5&&n.type==="form"?o0(n):ya.r(t)}var Sr=typeof document>"u"?null:document;function Xg(t,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=Ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),jg.has(u)||(jg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",t),pn(n),o.head.appendChild(n)))}}function fb(t){ya.D(t),Xg("dns-prefetch",t,null)}function db(t,n){ya.C(t,n),Xg("preconnect",t,n)}function hb(t,n,a){ya.L(t,n,a);var o=Sr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ft(a.imageSizes)+'"]')):u+='[href="'+Ft(t)+'"]';var f=u;switch(n){case"style":f=Er(t);break;case"script":f=Tr(t)}Ti.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),Ln(n,"link",t),pn(n),o.head.appendChild(n)))}}function pb(t,n){ya.m(t,n);var a=Sr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ft(o)+'"][href="'+Ft(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Tr(t)}if(!Ti.has(f)&&(t=v({rel:"modulepreload",href:t},n),Ti.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),Ln(o,"link",t),pn(o),a.head.appendChild(o)}}}function mb(t,n,a){ya.S(t,n,a);var o=Sr;if(o&&t){var u=Oa(o).hoistableStyles,f=Er(t);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Fo(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(f))&&vd(t,a);var H=y=o.createElement("link");pn(H),Ln(H,"link",t),H._p=new Promise(function(ae,_e){H.onload=ae,H.onerror=_e}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function gb(t,n){ya.X(t,n);var a=Sr;if(a&&t){var o=Oa(a).hoistableScripts,u=Tr(t),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(t=v({src:t,async:!0},n),(n=Ti.get(u))&&_d(t,n),f=a.createElement("script"),pn(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xb(t,n){ya.M(t,n);var a=Sr;if(a&&t){var o=Oa(a).hoistableScripts,u=Tr(t),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&_d(t,n),f=a.createElement("script"),pn(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Wg(t,n,a,o){var u=(u=ne.current)?fc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Er(a.href);var f=Oa(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(Fo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),Ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,a),f||vb(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Er(t){return'href="'+Ft(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function qg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function vb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),pn(n),t.head.appendChild(n))}function Tr(t){return'[src="'+Ft(t)+'"]'}function Go(t){return"script[async]"+t}function Yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ft(a.href)+'"]');if(o)return n.instance=o,pn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),pn(o),Ln(o,"style",u),dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Er(a.href);var f=t.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,pn(f),f;o=qg(a),(u=Ti.get(u))&&vd(o,u),f=(t.ownerDocument||t).createElement("link"),pn(f);var y=f;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Ln(f,"link",o),n.state.loading|=4,dc(f,a.precedence,t),n.instance=f;case"script":return f=Tr(a.src),(u=t.querySelector(Go(f)))?(n.instance=u,pn(u),u):(o=a,(u=Ti.get(f))&&(o=v({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),pn(u),Ln(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,t));return n.instance}function dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function Zg(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[La]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _b(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,pn(f);return}f=n.ownerDocument||n,o=qg(o),(u=Ti.get(u))&&vd(o,u),f=f.createElement("link"),pn(f);var y=f;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Ln(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yd=0;function bb(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&yd===0&&(yd=62500*tb());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>yd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(Mb,t),mc=null,pc.call(t))}function Mb(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ho={$$typeof:O,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Sb(t,n,a,o,u,f,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Jg(t,n,a,o,u,f,y,R,H,ae,_e,Se){return t=new Sb(t,n,a,y,H,ae,_e,Se,R),n=1,f===!0&&(n|=24),f=oi(3,null,null,n),t.current=f,f.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},nf(f),t}function $g(t){return t?(t=nr,t):nr}function ex(t,n,a,o,u,f){u=$g(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Va(t,o,n),a!==null&&($n(a,t,n),_o(a,t,n))}function tx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bd(t,n){tx(t,n),(t=t.alternate)&&tx(t,n)}function nx(t){if(t.tag===13||t.tag===31){var n=Ms(t,67108864);n!==null&&$n(n,t,67108864),bd(t,67108864)}}function ix(t){if(t.tag===13||t.tag===31){var n=di();n=eo(n);var a=Ms(t,n);a!==null&&$n(a,t,n),bd(t,n)}}var xc=!0;function Eb(t,n,a,o){var u=F.T;F.T=null;var f=G.p;try{G.p=2,Md(t,n,a,o)}finally{G.p=f,F.T=u}}function Tb(t,n,a,o){var u=F.T;F.T=null;var f=G.p;try{G.p=8,Md(t,n,a,o)}finally{G.p=f,F.T=u}}function Md(t,n,a,o){if(xc){var u=Sd(o);if(u===null)ld(t,n,o,vc,a),sx(t,o);else if(wb(u,t,n,a,o))o.stopPropagation();else if(sx(t,o),n&4&&-1<Ab.indexOf(t)){for(;u!==null;){var f=ia(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Re(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Ge(y);R.entanglements[1]|=H,y&=~H}Xi(f),(Pt&6)===0&&(ec=st()+500,Po(0))}}break;case 31:case 13:R=Ms(f,2),R!==null&&$n(R,f,2),nc(),bd(f,2)}if(f=Sd(o),f===null&&ld(t,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ld(t,n,o,null,a)}}function Sd(t){return t=Eu(t),Ed(t)}var vc=null;function Ed(t){if(vc=null,t=na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function ax(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case I:return 2;case E:return 8;case J:case le:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Td=!1,es=null,ts=null,ns=null,ko=new Map,Vo=new Map,is=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sx(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function jo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ia(n),n!==null&&nx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wb(t,n,a,o,u){switch(n){case"focusin":return es=jo(es,t,n,a,o,u),!0;case"dragenter":return ts=jo(ts,t,n,a,o,u),!0;case"mouseover":return ns=jo(ns,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,jo(ko.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,jo(Vo.get(f)||null,t,n,a,o,u)),!0}return!1}function rx(t){var n=na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Zs(t.priority,function(){ix(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Zs(t.priority,function(){ix(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Su=o,a.target.dispatchEvent(o),Su=null}else return n=ia(a),n!==null&&nx(n),t.blockedOn=a,!1;n.shift()}return!0}function ox(t,n,a){_c(t)&&a.delete(n)}function Cb(){Td=!1,es!==null&&_c(es)&&(es=null),ts!==null&&_c(ts)&&(ts=null),ns!==null&&_c(ns)&&(ns=null),ko.forEach(ox),Vo.forEach(ox)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,Td||(Td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cb)))}var bc=null;function lx(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ed(o||a)===null)continue;break}var f=ia(a);f!==null&&(t.splice(n,3),n-=3,Sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ar(t){function n(H){return yc(H,t)}es!==null&&yc(es,t),ts!==null&&yc(ts,t),ns!==null&&yc(ns,t),ko.forEach(n),Vo.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)rx(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Cn]||null;if(typeof f=="function")y||lx(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Cn]||null)R=y.formAction;else if(Ed(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),lx(a)}}}function cx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ad(t){this._internalRoot=t}Mc.prototype.render=Ad.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=di();ex(a,o,t,n,null,null)},Mc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ex(t.current,2,null,t,null,null),nc(),n[qn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=no();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&rx(t)}};var ux=e.version;if(ux!=="19.2.8")throw Error(s(527,ux,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Rb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ge=Sc.inject(Rb),me=Sc}catch{}}return Wo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=x0,f=v0,y=_0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Jg(t,1,!1,null,null,a,o,null,u,f,y,cx),t[qn]=n.current,od(t),new Ad(n)},Wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=x0,y=v0,R=_0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Jg(t,1,!0,n,a??null,o,u,H,f,y,R,cx),n.context=$g(null),a=n.current,o=di(),o=eo(o),u=ka(o),u.callback=null,Va(a,u,o),a=o,n.current.lanes=a,je(n,a),Xi(n),t[qn]=n.current,od(t),new Mc(n)},Wo.version="19.2.8",Wo}var yx;function Fb(){if(yx)return Rd.exports;yx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=Bb(),Rd.exports}var Gb=Fb();const Ov=ke.createContext(void 0),Hb=({children:r})=>{const[e,i]=ke.useState({mode:"default",label:void 0,active:!1,isClicking:!1}),[s,l]=ke.useState(!1),[c,d]=ke.useState(!1);ke.useEffect(()=>{const h=()=>{const x="ontouchstart"in window||navigator.maxTouchPoints>0,S=window.matchMedia("(pointer: coarse)").matches,T=window.innerWidth<768,N=x&&(S||T);l(N);const M=window.matchMedia("(prefers-reduced-motion: reduce)");d(M.matches),!N&&!M.matches?document.body.classList.add("custom-cursor-enabled"):document.body.classList.remove("custom-cursor-enabled")};h();const _=window.matchMedia("(prefers-reduced-motion: reduce)"),v=x=>{d(x.matches),x.matches&&document.body.classList.remove("custom-cursor-enabled")};return _.addEventListener("change",v),window.addEventListener("resize",h),()=>{_.removeEventListener("change",v),window.removeEventListener("resize",h),document.body.classList.remove("custom-cursor-enabled")}},[]);const p=ke.useCallback((h,_,v)=>{i(x=>({...x,mode:h,label:_,color:v,active:!0}))},[]),g=ke.useCallback(()=>{i(h=>({...h,mode:"default",label:void 0,color:void 0,active:!0}))},[]);return m.jsx(Ov.Provider,{value:{cursorState:e,setCursorMode:p,resetCursor:g,isTouchDevice:s,prefersReducedMotion:c},children:r})},Wn=()=>{const r=ke.useContext(Ov);if(!r)throw new Error("useCursor must be used within a CursorProvider");return r},kb=()=>{const{cursorState:r,isTouchDevice:e,prefersReducedMotion:i}=Wn(),s=ke.useRef({x:-100,y:-100}),l=ke.useRef({x:-100,y:-100}),c=ke.useRef({x:-100,y:-100}),d=ke.useRef(null),p=ke.useRef(null),[g,h]=ke.useState(!1),[_,v]=ke.useState(!1),[x,S]=ke.useState([]),[T,N]=ke.useState(null);if(ke.useEffect(()=>{if(e||i)return;let A;const U=ee=>{s.current={x:ee.clientX,y:ee.clientY},g||h(!0)},V=ee=>{v(!0);const de=Date.now(),xe=ee.clientX,P=ee.clientY;S(q=>[...q.slice(-4),{id:de,x:xe,y:P}]),setTimeout(()=>{S(q=>q.filter(Me=>Me.id!==de))},450)},k=()=>{v(!1)},W=()=>{h(!0)},he=()=>{h(!1),N(null)},oe=()=>{document.hidden&&(h(!1),N(null))},K=()=>{h(!1),N(null)},F=ee=>{const de=ee.target;if(!de)return;const xe=de.closest('a, button, [role="button"], [data-cursor], [data-cursor-label]');if(xe){const P=xe.getAttribute("data-cursor-label"),q=xe.tagName==="A"&&(xe.getAttribute("target")==="_blank"||(xe.getAttribute("href")||"").startsWith("http")),Me=xe.closest("#projects")!==null||xe.getAttribute("data-cursor")==="project";N(P?{mode:q?"external":"pointer",label:P}:q?{mode:"external",label:"↗"}:Me?{mode:"project",label:"VIEW"}:{mode:"pointer",label:"OPEN"})}else N(null)},G=()=>{l.current.x+=(s.current.x-l.current.x)*.45,l.current.y+=(s.current.y-l.current.y)*.45,c.current.x+=(s.current.x-c.current.x)*.16,c.current.y+=(s.current.y-c.current.y)*.16,d.current&&(d.current.style.transform=`translate3d(${l.current.x}px, ${l.current.y}px, 0)`),p.current&&(p.current.style.transform=`translate3d(${c.current.x}px, ${c.current.y}px, 0)`),A=requestAnimationFrame(G)};return window.addEventListener("mousemove",U,{passive:!0}),window.addEventListener("mousedown",V),window.addEventListener("mouseup",k),document.addEventListener("mouseover",F,{passive:!0}),document.addEventListener("mouseenter",W),document.addEventListener("mouseleave",he),document.addEventListener("visibilitychange",oe),window.addEventListener("blur",K),A=requestAnimationFrame(G),()=>{window.removeEventListener("mousemove",U),window.removeEventListener("mousedown",V),window.removeEventListener("mouseup",k),document.removeEventListener("mouseover",F),document.removeEventListener("mouseenter",W),document.removeEventListener("mouseleave",he),document.removeEventListener("visibilitychange",oe),window.removeEventListener("blur",K),cancelAnimationFrame(A)}},[e,i,g]),e||i)return null;const M=r.mode!=="default"?r.mode:(T==null?void 0:T.mode)||"default",b=r.label||(T==null?void 0:T.label)||"";let D="w-11 h-11 -ml-[22px] -mt-[22px]",O="border-[#ff4e00]/60 bg-[#ff4e0005] backdrop-blur-[2px]",w="w-1.5 h-1.5 -ml-[3px] -mt-[3px]",B="bg-[#ff4e00] shadow-[0_0_10px_#ff4e00]",L="shadow-[0_0_20px_rgba(255,78,0,0.25)]",z=!1;return M==="pointer"?(D=b?"w-16 h-16 -ml-8 -mt-8":"w-13 h-13 -ml-[26px] -mt-[26px]",O="border-[#ff4e00] bg-[#ff4e0020] backdrop-blur-[3px]",w=b?"w-0 h-0 opacity-0":"w-2 h-2 -ml-1 -mt-1",B="bg-[#ff4e00] shadow-[0_0_12px_#ff4e00]",L="shadow-[0_0_28px_rgba(255,78,0,0.5)]",z=!!b):M==="project"?(D="w-18 h-18 -ml-9 -mt-9",O="border-[#ff4e00] bg-[#ff4e0025] backdrop-blur-[4px]",w="w-0 h-0 opacity-0",B="bg-[#ff4e00]",L="shadow-[0_0_35px_rgba(255,78,0,0.6)]",z=!0):M==="external"?(D="w-14 h-14 -ml-7 -mt-7",O="border-[#ff4e00] bg-[#ff4e0018] backdrop-blur-[3px]",w="w-0 h-0 opacity-0",B="bg-[#ff4e00]",L="shadow-[0_0_25px_rgba(255,78,0,0.45)]",z=!0):M==="three"?(D="w-24 h-24 -ml-12 -mt-12 scale-105",O="border-2 border-dashed border-[#ff4e00] bg-[#ff4e0020] backdrop-blur-[4px] animate-[spin_8s_linear_infinite]",w="w-2.5 h-2.5 -ml-[5px] -mt-[5px]",B="bg-[#ffffff] shadow-[0_0_16px_#ff4e00] animate-pulse",L="shadow-[0_0_50px_rgba(255,78,0,0.85),inset_0_0_20px_rgba(255,78,0,0.4)]",z=!1):M==="hidden"&&(D="w-0 h-0 opacity-0",w="w-0 h-0 opacity-0"),m.jsxs("div",{id:"custom-cursor-container",className:`fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-300 ${g?"opacity-100":"opacity-0"}`,"aria-hidden":"true",children:[x.map(A=>m.jsx("div",{className:"absolute top-0 left-0 -ml-7 -mt-7 w-14 h-14 rounded-full border-2 border-[#ff4e00] bg-[#ff4e00]/25 animate-cursor-ripple pointer-events-none will-change-transform",style:{transform:`translate3d(${A.x}px, ${A.y}px, 0)`}},A.id)),m.jsxs("div",{ref:p,className:`absolute top-0 left-0 rounded-full border will-change-transform flex items-center justify-center transition-[width,height,margin,border-color,background-color,transform] duration-200 ease-out ${_?"scale-80":"scale-100"} ${D} ${O} ${L}`,children:[z&&m.jsx("div",{className:"flex items-center justify-center select-none animate-in fade-in zoom-in-75 duration-150",children:M==="external"?m.jsx("span",{className:"text-[#ff4e00] text-base font-black leading-none drop-shadow-[0_0_8px_rgba(255,78,0,0.8)]",children:"↗"}):m.jsx("span",{className:"text-white text-[9px] font-mono font-bold tracking-widest uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]",children:b||(M==="project"?"VIEW":"OPEN")})}),!z&&b&&m.jsx("div",{className:"absolute -top-7 whitespace-nowrap bg-[#ff4e00] text-black text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase shadow-lg select-none",children:b}),(M==="three"||M==="project")&&m.jsx("div",{className:"absolute -bottom-5 text-[#ff4e00] text-[8px] tracking-[0.2em] font-mono font-bold opacity-90 whitespace-nowrap select-none drop-shadow-[0_0_6px_#ff4e00]",children:M==="three"?"CORE // ACTIVE 3D":"EXPLORE // READY"})]}),m.jsx("div",{ref:d,className:`absolute top-0 left-0 rounded-full will-change-transform pointer-events-none transition-[width,height,margin,background-color,transform] duration-150 ${_?"scale-125":"scale-100"} ${w} ${B}`})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="185",Vb=0,bx=1,jb=2,Qc=1,Xb=2,el=3,hs=0,ti=1,Aa=2,Ca=0,Vr=1,dh=2,Mx=3,Sx=4,Wb=5,Gs=100,qb=101,Yb=102,Zb=103,Kb=104,Qb=200,Jb=201,$b=202,eM=203,hh=204,ph=205,tM=206,nM=207,iM=208,aM=209,sM=210,rM=211,oM=212,lM=213,cM=214,mh=0,gh=1,xh=2,Wr=3,vh=4,_h=5,yh=6,bh=7,Pv=0,uM=1,fM=2,Qi=0,Iv=1,zv=2,Bv=3,cp=4,Fv=5,Gv=6,Hv=7,kv=300,Xs=301,qr=302,Ud=303,Od=304,xu=306,Mh=1e3,wa=1001,Sh=1002,Un=1003,dM=1004,Ec=1005,Fn=1006,Pd=1007,ks=1008,gi=1009,Vv=1010,jv=1011,sl=1012,up=1013,ea=1014,Zi=1015,Na=1016,fp=1017,dp=1018,rl=1020,Xv=35902,Wv=35899,qv=1021,Yv=1022,Bi=1023,Da=1026,Vs=1027,Zv=1028,hp=1029,Ws=1030,pp=1031,mp=1033,Jc=33776,$c=33777,eu=33778,tu=33779,Eh=35840,Th=35841,Ah=35842,wh=35843,Ch=36196,Rh=37492,Nh=37496,Dh=37488,Lh=37489,au=37490,Uh=37491,Oh=37808,Ph=37809,Ih=37810,zh=37811,Bh=37812,Fh=37813,Gh=37814,Hh=37815,kh=37816,Vh=37817,jh=37818,Xh=37819,Wh=37820,qh=37821,Yh=36492,Zh=36494,Kh=36495,Qh=36283,Jh=36284,su=36285,$h=36286,hM=3200,ep=0,pM=1,fs="",wi="srgb",ru="srgb-linear",ou="linear",Vt="srgb",wr=7680,Ex=519,mM=512,gM=513,xM=514,gp=515,vM=516,_M=517,xp=518,yM=519,Tx=35044,Ax="300 es",Ki=2e3,ol=2001;function bM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function MM(){const r=lu("canvas");return r.style.display="block",r}const wx={};function Cx(...r){const e="THREE."+r.shift();console.log(e,...r)}function Kv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ot(...r){r=Kv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Nt(...r){r=Kv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function jr(...r){const e=r.join(" ");e in wx||(wx[e]=!0,ot(...r))}function SM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const EM={[mh]:gh,[xh]:yh,[vh]:bh,[Wr]:_h,[gh]:mh,[yh]:xh,[bh]:vh,[_h]:Wr};class qs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rx=1234567;const il=Math.PI/180,ll=180/Math.PI;function Kr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function wt(r,e,i){return Math.max(e,Math.min(i,r))}function vp(r,e){return(r%e+e)%e}function TM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function AM(r,e,i){return r!==e?(i-r)/(e-r):0}function al(r,e,i){return(1-i)*r+i*e}function wM(r,e,i,s){return al(r,e,1-Math.exp(-i*s))}function CM(r,e=1){return e-Math.abs(vp(r,e*2)-e)}function RM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function NM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function DM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function LM(r,e){return r+Math.random()*(e-r)}function UM(r){return r*(.5-Math.random())}function OM(r){r!==void 0&&(Rx=r);let e=Rx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PM(r){return r*il}function IM(r){return r*ll}function zM(r){return(r&r-1)===0&&r!==0}function BM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function FM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function GM(r,e,i,s,l){const c=Math.cos,d=Math.sin,p=c(i/2),g=d(i/2),h=c((e+s)/2),_=d((e+s)/2),v=c((e-s)/2),x=d((e-s)/2),S=c((s-e)/2),T=d((s-e)/2);switch(l){case"XYX":r.set(p*_,g*v,g*x,p*h);break;case"YZY":r.set(g*x,p*_,g*v,p*h);break;case"ZXZ":r.set(g*v,g*x,p*_,p*h);break;case"XZX":r.set(p*_,g*T,g*S,p*h);break;case"YXY":r.set(g*S,p*_,g*T,p*h);break;case"ZYZ":r.set(g*T,g*S,p*_,p*h);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Hr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Nx={DEG2RAD:il,RAD2DEG:ll,generateUUID:Kr,clamp:wt,euclideanModulo:vp,mapLinear:TM,inverseLerp:AM,lerp:al,damp:wM,pingpong:CM,smoothstep:RM,smootherstep:NM,randInt:DM,randFloat:LM,randFloatSpread:UM,seededRandom:OM,degToRad:PM,radToDeg:IM,isPowerOfTwo:zM,ceilPowerOfTwo:BM,floorPowerOfTwo:FM,setQuaternionFromProperEuler:GM,normalize:Vn,denormalize:Hr},Cp=class Cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cp.prototype.isVector2=!0;let bt=Cp;class Qr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let g=s[l+0],h=s[l+1],_=s[l+2],v=s[l+3],x=c[d+0],S=c[d+1],T=c[d+2],N=c[d+3];if(v!==N||g!==x||h!==S||_!==T){let M=g*x+h*S+_*T+v*N;M<0&&(x=-x,S=-S,T=-T,N=-N,M=-M);let b=1-p;if(M<.9995){const D=Math.acos(M),O=Math.sin(D);b=Math.sin(b*D)/O,p=Math.sin(p*D)/O,g=g*b+x*p,h=h*b+S*p,_=_*b+T*p,v=v*b+N*p}else{g=g*b+x*p,h=h*b+S*p,_=_*b+T*p,v=v*b+N*p;const D=1/Math.sqrt(g*g+h*h+_*_+v*v);g*=D,h*=D,_*=D,v*=D}}e[i]=g,e[i+1]=h,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],g=s[l+1],h=s[l+2],_=s[l+3],v=c[d],x=c[d+1],S=c[d+2],T=c[d+3];return e[i]=p*T+_*v+g*S-h*x,e[i+1]=g*T+_*x+h*v-p*S,e[i+2]=h*T+_*S+p*x-g*v,e[i+3]=_*T-p*v-g*x-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,g=Math.sin,h=p(s/2),_=p(l/2),v=p(c/2),x=g(s/2),S=g(l/2),T=g(c/2);switch(d){case"XYZ":this._x=x*_*v+h*S*T,this._y=h*S*v-x*_*T,this._z=h*_*T+x*S*v,this._w=h*_*v-x*S*T;break;case"YXZ":this._x=x*_*v+h*S*T,this._y=h*S*v-x*_*T,this._z=h*_*T-x*S*v,this._w=h*_*v+x*S*T;break;case"ZXY":this._x=x*_*v-h*S*T,this._y=h*S*v+x*_*T,this._z=h*_*T+x*S*v,this._w=h*_*v-x*S*T;break;case"ZYX":this._x=x*_*v-h*S*T,this._y=h*S*v+x*_*T,this._z=h*_*T-x*S*v,this._w=h*_*v+x*S*T;break;case"YZX":this._x=x*_*v+h*S*T,this._y=h*S*v+x*_*T,this._z=h*_*T-x*S*v,this._w=h*_*v-x*S*T;break;case"XZY":this._x=x*_*v-h*S*T,this._y=h*S*v-x*_*T,this._z=h*_*T+x*S*v,this._w=h*_*v+x*S*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],g=i[9],h=i[2],_=i[6],v=i[10],x=s+p+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-g)*S,this._y=(c-h)*S,this._z=(d-l)*S}else if(s>p&&s>v){const S=2*Math.sqrt(1+s-p-v);this._w=(_-g)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+h)/S}else if(p>v){const S=2*Math.sqrt(1+p-s-v);this._w=(c-h)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(g+_)/S}else{const S=2*Math.sqrt(1+v-s-p);this._w=(d-l)/S,this._x=(c+h)/S,this._y=(g+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,g=i._y,h=i._z,_=i._w;return this._x=s*_+d*p+l*h-c*g,this._y=l*_+d*g+c*p-s*h,this._z=c*_+d*h+s*g-l*p,this._w=d*_-s*p-l*g-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let g=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);g=Math.sin(g*h)/_,i=Math.sin(i*h)/_,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rp=class Rp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,g=e.w,h=2*(d*l-p*s),_=2*(p*i-c*l),v=2*(c*s-d*i);return this.x=i+g*h+d*v-p*_,this.y=s+g*_+p*h-c*v,this.z=l+g*v+c*_-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,g=i.z;return this.x=l*g-c*p,this.y=c*d-s*g,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Id.copy(this).projectOnVector(e),this.sub(Id)}reflect(e){return this.sub(Id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rp.prototype.isVector3=!0;let te=Rp;const Id=new te,Dx=new Qr,Np=class Np{constructor(e,i,s,l,c,d,p,g,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,g,h)}set(e,i,s,l,c,d,p,g,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=g,_[6]=s,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],g=s[6],h=s[1],_=s[4],v=s[7],x=s[2],S=s[5],T=s[8],N=l[0],M=l[3],b=l[6],D=l[1],O=l[4],w=l[7],B=l[2],L=l[5],z=l[8];return c[0]=d*N+p*D+g*B,c[3]=d*M+p*O+g*L,c[6]=d*b+p*w+g*z,c[1]=h*N+_*D+v*B,c[4]=h*M+_*O+v*L,c[7]=h*b+_*w+v*z,c[2]=x*N+S*D+T*B,c[5]=x*M+S*O+T*L,c[8]=x*b+S*w+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],g=e[6],h=e[7],_=e[8];return i*d*_-i*p*h-s*c*_+s*p*g+l*c*h-l*d*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],g=e[6],h=e[7],_=e[8],v=_*d-p*h,x=p*g-_*c,S=h*c-d*g,T=i*v+s*x+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=v*N,e[1]=(l*h-_*s)*N,e[2]=(p*s-l*d)*N,e[3]=x*N,e[4]=(_*i-l*g)*N,e[5]=(l*c-p*i)*N,e[6]=S*N,e[7]=(s*g-h*i)*N,e[8]=(d*i-s*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const g=Math.cos(c),h=Math.sin(c);return this.set(s*g,s*h,-s*(g*d+h*p)+d+e,-l*h,l*g,-l*(-h*d+g*p)+p+i,0,0,1),this}scale(e,i){return jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zd.makeScale(e,i)),this}rotate(e){return jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zd.makeRotation(-e)),this}translate(e,i){return jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Np.prototype.isMatrix3=!0;let dt=Np;const zd=new dt,Lx=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ux=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HM(){const r={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ru]:{primaries:e,whitePoint:s,transfer:ou,toXYZ:Lx,fromXYZ:Ux,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:Lx,fromXYZ:Ux,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),r}const Rt=HM();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class kM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Cr===void 0&&(Cr=lu("canvas")),Cr.width=e.width,Cr.height=e.height;const l=Cr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=lu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ra(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VM=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Bd(l[d].image)):c.push(Bd(l[d]))}else c=Bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let jM=0;const Fd=new te;class Xn extends qs{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=wa,l=wa,c=Fn,d=ks,p=Bi,g=gi,h=Xn.DEFAULT_ANISOTROPY,_=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Kr(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=g,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=kv;Xn.DEFAULT_ANISOTROPY=1;const Dp=class Dp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,h=g[0],_=g[4],v=g[8],x=g[1],S=g[5],T=g[9],N=g[2],M=g[6],b=g[10];if(Math.abs(_-x)<.01&&Math.abs(v-N)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+N)<.1&&Math.abs(T+M)<.1&&Math.abs(h+S+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(h+1)/2,w=(S+1)/2,B=(b+1)/2,L=(_+x)/4,z=(v+N)/4,A=(T+M)/4;return O>w&&O>B?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=L/s,c=z/s):w>B?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=L/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=z/c,l=A/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(v-N)*(v-N)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(v-N)/D,this.z=(x-_)/D,this.w=Math.acos((h+S+b-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dp.prototype.isVector4=!0;let on=Dp;class XM extends qs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Xn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends XM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Qv extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=class gu{constructor(e,i,s,l,c,d,p,g,h,_,v,x,S,T,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,g,h,_,v,x,S,T,N,M)}set(e,i,s,l,c,d,p,g,h,_,v,x,S,T,N,M){const b=this.elements;return b[0]=e,b[4]=i,b[8]=s,b[12]=l,b[1]=c,b[5]=d,b[9]=p,b[13]=g,b[2]=h,b[6]=_,b[10]=v,b[14]=x,b[3]=S,b[7]=T,b[11]=N,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),d=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),g=Math.cos(l),h=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=d*_,S=d*v,T=p*_,N=p*v;i[0]=g*_,i[4]=-g*v,i[8]=h,i[1]=S+T*h,i[5]=x-N*h,i[9]=-p*g,i[2]=N-x*h,i[6]=T+S*h,i[10]=d*g}else if(e.order==="YXZ"){const x=g*_,S=g*v,T=h*_,N=h*v;i[0]=x+N*p,i[4]=T*p-S,i[8]=d*h,i[1]=d*v,i[5]=d*_,i[9]=-p,i[2]=S*p-T,i[6]=N+x*p,i[10]=d*g}else if(e.order==="ZXY"){const x=g*_,S=g*v,T=h*_,N=h*v;i[0]=x-N*p,i[4]=-d*v,i[8]=T+S*p,i[1]=S+T*p,i[5]=d*_,i[9]=N-x*p,i[2]=-d*h,i[6]=p,i[10]=d*g}else if(e.order==="ZYX"){const x=d*_,S=d*v,T=p*_,N=p*v;i[0]=g*_,i[4]=T*h-S,i[8]=x*h+N,i[1]=g*v,i[5]=N*h+x,i[9]=S*h-T,i[2]=-h,i[6]=p*g,i[10]=d*g}else if(e.order==="YZX"){const x=d*g,S=d*h,T=p*g,N=p*h;i[0]=g*_,i[4]=N-x*v,i[8]=T*v+S,i[1]=v,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=S*v+T,i[10]=x-N*v}else if(e.order==="XZY"){const x=d*g,S=d*h,T=p*g,N=p*h;i[0]=g*_,i[4]=-v,i[8]=h*_,i[1]=x*v+N,i[5]=d*_,i[9]=S*v-T,i[2]=T*v-S,i[6]=p*_,i[10]=N*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qM,e,YM)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ss.crossVectors(s,hi),ss.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ss.crossVectors(s,hi)),ss.normalize(),Tc.crossVectors(hi,ss),l[0]=ss.x,l[4]=Tc.x,l[8]=hi.x,l[1]=ss.y,l[5]=Tc.y,l[9]=hi.y,l[2]=ss.z,l[6]=Tc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],g=s[8],h=s[12],_=s[1],v=s[5],x=s[9],S=s[13],T=s[2],N=s[6],M=s[10],b=s[14],D=s[3],O=s[7],w=s[11],B=s[15],L=l[0],z=l[4],A=l[8],U=l[12],V=l[1],k=l[5],W=l[9],he=l[13],oe=l[2],K=l[6],F=l[10],G=l[14],ee=l[3],de=l[7],xe=l[11],P=l[15];return c[0]=d*L+p*V+g*oe+h*ee,c[4]=d*z+p*k+g*K+h*de,c[8]=d*A+p*W+g*F+h*xe,c[12]=d*U+p*he+g*G+h*P,c[1]=_*L+v*V+x*oe+S*ee,c[5]=_*z+v*k+x*K+S*de,c[9]=_*A+v*W+x*F+S*xe,c[13]=_*U+v*he+x*G+S*P,c[2]=T*L+N*V+M*oe+b*ee,c[6]=T*z+N*k+M*K+b*de,c[10]=T*A+N*W+M*F+b*xe,c[14]=T*U+N*he+M*G+b*P,c[3]=D*L+O*V+w*oe+B*ee,c[7]=D*z+O*k+w*K+B*de,c[11]=D*A+O*W+w*F+B*xe,c[15]=D*U+O*he+w*G+B*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],g=e[9],h=e[13],_=e[2],v=e[6],x=e[10],S=e[14],T=e[3],N=e[7],M=e[11],b=e[15],D=g*S-h*x,O=p*S-h*v,w=p*x-g*v,B=d*S-h*_,L=d*x-g*_,z=d*v-p*_;return i*(N*D-M*O+b*w)-s*(T*D-M*B+b*L)+l*(T*O-N*B+b*z)-c*(T*w-N*L+M*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],g=e[2],h=e[6],_=e[10];return i*(d*_-p*h)-s*(c*_-p*g)+l*(c*h-d*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],g=e[6],h=e[7],_=e[8],v=e[9],x=e[10],S=e[11],T=e[12],N=e[13],M=e[14],b=e[15],D=i*p-s*d,O=i*g-l*d,w=i*h-c*d,B=s*g-l*p,L=s*h-c*p,z=l*h-c*g,A=_*N-v*T,U=_*M-x*T,V=_*b-S*T,k=v*M-x*N,W=v*b-S*N,he=x*b-S*M,oe=D*he-O*W+w*k+B*V-L*U+z*A;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/oe;return e[0]=(p*he-g*W+h*k)*K,e[1]=(l*W-s*he-c*k)*K,e[2]=(N*z-M*L+b*B)*K,e[3]=(x*L-v*z-S*B)*K,e[4]=(g*V-d*he-h*U)*K,e[5]=(i*he-l*V+c*U)*K,e[6]=(M*w-T*z-b*O)*K,e[7]=(_*z-x*w+S*O)*K,e[8]=(d*W-p*V+h*A)*K,e[9]=(s*V-i*W-c*A)*K,e[10]=(T*L-N*w+b*D)*K,e[11]=(v*w-_*L-S*D)*K,e[12]=(p*U-d*k-g*A)*K,e[13]=(i*k-s*U+l*A)*K,e[14]=(N*O-T*B-M*D)*K,e[15]=(_*B-v*O+x*D)*K,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,g=e.z,h=c*d,_=c*p;return this.set(h*d+s,h*p-l*g,h*g+l*p,0,h*p+l*g,_*p+s,_*g-l*d,0,h*g-l*p,_*g+l*d,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,g=i._w,h=c+c,_=d+d,v=p+p,x=c*h,S=c*_,T=c*v,N=d*_,M=d*v,b=p*v,D=g*h,O=g*_,w=g*v,B=s.x,L=s.y,z=s.z;return l[0]=(1-(N+b))*B,l[1]=(S+w)*B,l[2]=(T-O)*B,l[3]=0,l[4]=(S-w)*L,l[5]=(1-(x+b))*L,l[6]=(M+D)*L,l[7]=0,l[8]=(T+O)*z,l[9]=(M-D)*z,l[10]=(1-(x+N))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),g=Rr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Oi.copy(this);const h=1/d,_=1/p,v=1/g;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,i.setFromRotationMatrix(Oi),s.x=d,s.y=p,s.z=g,this}makePerspective(e,i,s,l,c,d,p=Ki,g=!1){const h=this.elements,_=2*c/(i-e),v=2*c/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let T,N;if(g)T=c/(d-c),N=d*c/(d-c);else if(p===Ki)T=-(d+c)/(d-c),N=-2*d*c/(d-c);else if(p===ol)T=-d/(d-c),N=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Ki,g=!1){const h=this.elements,_=2/(i-e),v=2/(s-l),x=-(i+e)/(i-e),S=-(s+l)/(s-l);let T,N;if(g)T=1/(d-c),N=d/(d-c);else if(p===Ki)T=-2/(d-c),N=-(d+c)/(d-c);else if(p===ol)T=-1/(d-c),N=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=T,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};gu.prototype.isMatrix4=!0;let tn=gu;const Rr=new te,Oi=new tn,qM=new te(0,0,0),YM=new te(1,1,1),ss=new te,Tc=new te,hi=new te,Ox=new tn,Px=new Qr;class ps{constructor(e=0,i=0,s=0,l=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],g=l[1],h=l[5],_=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(g,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ox,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Px.setFromEuler(this),this.setFromQuaternion(Px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";let yp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ZM=0;const Ix=new te,Nr=new Qr,ba=new tn,Ac=new te,qo=new te,KM=new te,QM=new Qr,zx=new te(1,0,0),Bx=new te(0,1,0),Fx=new te(0,0,1),Gx={type:"added"},JM={type:"removed"},Dr={type:"childadded",child:null},Gd={type:"childremoved",child:null};class Gn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new te,i=new ps,s=new Qr,l=new te(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new dt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(zx,e)}rotateY(e){return this.rotateOnAxis(Bx,e)}rotateZ(e){return this.rotateOnAxis(Fx,e)}translateOnAxis(e,i){return Ix.copy(e).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(zx,e)}translateY(e){return this.translateOnAxis(Bx,e)}translateZ(e){return this.translateOnAxis(Fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(qo,Ac,this.up):ba.lookAt(Ac,qo,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(ba),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gx),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JM),Gd.child=e,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gx),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,QM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let h=0,_=g.length;h<_;h++){const v=g[h];c(e.shapes,v)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,h=this.material.length;g<h;g++)p.push(c(e.materials,this.material[g]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(c(e.animations,g))}}if(i){const p=d(e.geometries),g=d(e.materials),h=d(e.textures),_=d(e.images),v=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const g=[];for(const h in p){const _=p[h];delete _.metadata,g.push(_)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new te(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tl extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,g=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const N of e.hand.values()){const M=i.getJointPose(N,s),b=this._getHandJoint(h,N);M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=M.radius),b.visible=M!==null}const _=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,T=.005;h.inputState.pinching&&x>S+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=S-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent($M)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new tl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},wc={h:0,s:0,l:0};function kd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class _t{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=vp(e,1),i=wt(i,0,1),s=wt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=kd(d,c,e+1/3),this.g=kd(d,c,e),this.b=kd(d,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=wi){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wi){const s=Jv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Rt.workingToColorSpace(zn.copy(this),e),Math.round(wt(zn.r*255,0,255))*65536+Math.round(wt(zn.g*255,0,255))*256+Math.round(wt(zn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let g,h;const _=(p+d)/2;if(p===d)g=0,h=0;else{const v=d-p;switch(h=_<=.5?v/(d+p):v/(2-d-p),d){case s:g=(l-c)/v+(l<c?6:0);break;case l:g=(c-s)/v+2;break;case c:g=(s-l)/v+4;break}g/=6}return e.h=g,e.s=h,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=wi){Rt.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==wi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL(wc);const s=al(rs.h,wc.h,i),l=al(rs.s,wc.s,i),c=al(rs.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new _t;_t.NAMES=Jv;class bp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(e),this.density=i}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eS extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new te,Ma=new te,Vd=new te,Sa=new te,Lr=new te,Ur=new te,Hx=new te,jd=new te,Xd=new te,Wd=new te,qd=new on,Yd=new on,Zd=new on;class zi{constructor(e=new te,i=new te,s=new te){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Pi.subVectors(e,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Pi.subVectors(l,i),Ma.subVectors(s,i),Vd.subVectors(e,i);const d=Pi.dot(Pi),p=Pi.dot(Ma),g=Pi.dot(Vd),h=Ma.dot(Ma),_=Ma.dot(Vd),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(h*g-p*_)*x,T=(d*_-p*g)*x;return c.set(1-S-T,T,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,c,d,p,g){return this.getBarycoord(e,i,s,l,Sa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Sa.x),g.addScaledVector(d,Sa.y),g.addScaledVector(p,Sa.z),g)}static getInterpolatedAttribute(e,i,s,l,c,d){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,s),Zd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(qd,c.x),d.addScaledVector(Yd,c.y),d.addScaledVector(Zd,c.z),d}static isFrontFacing(e,i,s,l){return Pi.subVectors(s,i),Ma.subVectors(e,i),Pi.cross(Ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Pi.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return zi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Lr.subVectors(l,s),Ur.subVectors(c,s),jd.subVectors(e,s);const g=Lr.dot(jd),h=Ur.dot(jd);if(g<=0&&h<=0)return i.copy(s);Xd.subVectors(e,l);const _=Lr.dot(Xd),v=Ur.dot(Xd);if(_>=0&&v<=_)return i.copy(l);const x=g*v-_*h;if(x<=0&&g>=0&&_<=0)return d=g/(g-_),i.copy(s).addScaledVector(Lr,d);Wd.subVectors(e,c);const S=Lr.dot(Wd),T=Ur.dot(Wd);if(T>=0&&S<=T)return i.copy(c);const N=S*h-g*T;if(N<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Ur,p);const M=_*T-S*v;if(M<=0&&v-_>=0&&S-T>=0)return Hx.subVectors(c,l),p=(v-_)/(v-_+(S-T)),i.copy(l).addScaledVector(Hx,p);const b=1/(M+N+x);return d=N*b,p=x*b,i.copy(s).addScaledVector(Lr,d).addScaledVector(Ur,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ul{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ii):Ii.fromBufferAttribute(c,d),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Rc.subVectors(this.max,Yo),Or.subVectors(e.a,Yo),Pr.subVectors(e.b,Yo),Ir.subVectors(e.c,Yo),os.subVectors(Pr,Or),ls.subVectors(Ir,Pr),Ps.subVectors(Or,Ir);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Ps.z,Ps.y,os.z,0,-os.x,ls.z,0,-ls.x,Ps.z,0,-Ps.x,-os.y,os.x,0,-ls.y,ls.x,0,-Ps.y,Ps.x,0];return!Kd(i,Or,Pr,Ir,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Kd(i,Or,Pr,Ir,Rc))?!1:(Nc.crossVectors(os,ls),i=[Nc.x,Nc.y,Nc.z],Kd(i,Or,Pr,Ir,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new te,new te,new te,new te,new te,new te,new te,new te],Ii=new te,Cc=new ul,Or=new te,Pr=new te,Ir=new te,os=new te,ls=new te,Ps=new te,Yo=new te,Rc=new te,Nc=new te,Is=new te;function Kd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Is.fromArray(r,c);const p=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),g=e.dot(Is),h=i.dot(Is),_=s.dot(Is);if(Math.max(-Math.max(g,h,_),Math.min(g,h,_))>p)return!1}return!0}const _n=new te,Dc=new bt;let tS=0;class xi extends qs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Tx,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Hr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Hr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Hr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Hr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Hr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $v extends xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class e_ extends xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class yn extends xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const nS=new ul,Zo=new te,Qd=new te;class fl{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):nS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Qd)),this.expandByPoint(Zo.copy(e.center).sub(Qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let iS=0;const Ai=new tn,Jd=new Gn,zr=new te,pi=new ul,Ko=new ul,wn=new te;class Hn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bM(e)?e_:$v)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Ko.setFromBufferAttribute(p),this.morphTargetsRelative?(wn.addVectors(pi.min,Ko.min),pi.expandByPoint(wn),wn.addVectors(pi.max,Ko.max),pi.expandByPoint(wn)):(pi.expandByPoint(Ko.min),pi.expandByPoint(Ko.max))}pi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],g=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)wn.fromBufferAttribute(p,h),g&&(zr.fromBufferAttribute(e,h),wn.add(zr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new xi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],g=[];for(let A=0;A<s.count;A++)p[A]=new te,g[A]=new te;const h=new te,_=new te,v=new te,x=new bt,S=new bt,T=new bt,N=new te,M=new te;function b(A,U,V){h.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,V),x.fromBufferAttribute(c,A),S.fromBufferAttribute(c,U),T.fromBufferAttribute(c,V),_.sub(h),v.sub(h),S.sub(x),T.sub(x);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(N.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(k),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(k),p[A].add(N),p[U].add(N),p[V].add(N),g[A].add(M),g[U].add(M),g[V].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,U=D.length;A<U;++A){const V=D[A],k=V.start,W=V.count;for(let he=k,oe=k+W;he<oe;he+=3)b(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const O=new te,w=new te,B=new te,L=new te;function z(A){B.fromBufferAttribute(l,A),L.copy(B);const U=p[A];O.copy(U),O.sub(B.multiplyScalar(B.dot(U))).normalize(),w.crossVectors(L,U);const k=w.dot(g[A])<0?-1:1;d.setXYZW(A,O.x,O.y,O.z,k)}for(let A=0,U=D.length;A<U;++A){const V=D[A],k=V.start,W=V.count;for(let he=k,oe=k+W;he<oe;he+=3)z(e.getX(he+0)),z(e.getX(he+1)),z(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new te,c=new te,d=new te,p=new te,g=new te,h=new te,_=new te,v=new te;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),N=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,M),_.subVectors(d,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,N),h.fromBufferAttribute(s,M),p.add(_),g.add(_),h.add(_),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(N,g.x,g.y,g.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,c),v.subVectors(l,c),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(p,g){const h=p.array,_=p.itemSize,v=p.normalized,x=new h.constructor(g.length*_);let S=0,T=0;for(let N=0,M=g.length;N<M;N++){p.isInterleavedBufferAttribute?S=g[N]*p.data.stride+p.offset:S=g[N]*_;for(let b=0;b<_;b++)x[T++]=h[S++]}return new xi(x,_,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],h=e(g,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const g=[],h=c[p];for(let _=0,v=h.length;_<v;_++){const x=h[_],S=e(x,s);g.push(S)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,g=d.length;p<g;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const h in g)g[h]!==void 0&&(e[h]=g[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const h=s[g];e.data.attributes[g]=h.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const h=this.morphAttributes[g],_=[];for(let v=0,x=h.length;v<x;v++){const S=h[v];_.push(S.toJSON(e.data))}_.length>0&&(l[g]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],v=c[h];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,_=d.length;h<_;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let aS=0;class Ys extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Vr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=ph,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==hh&&(s.blendSrc=this.blendSrc),this.blendDst!==ph&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ex&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const g=c[p];delete g.metadata,d.push(g)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new bt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ta=new te,$d=new te,Lc=new te,cs=new te,eh=new te,Uc=new te,th=new te;class vu{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){$d.copy(e).add(i).multiplyScalar(.5),Lc.copy(i).sub(e).normalize(),cs.copy(this.origin).sub($d);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Lc),p=cs.dot(this.direction),g=-cs.dot(Lc),h=cs.lengthSq(),_=Math.abs(1-d*d);let v,x,S,T;if(_>0)if(v=d*g-p,x=d*p-g,T=c*_,v>=0)if(x>=-T)if(x<=T){const N=1/_;v*=N,x*=N,S=v*(v+d*x+2*p)+x*(d*v+x+2*g)+h}else x=c,v=Math.max(0,-(d*x+p)),S=-v*v+x*(x+2*g)+h;else x=-c,v=Math.max(0,-(d*x+p)),S=-v*v+x*(x+2*g)+h;else x<=-T?(v=Math.max(0,-(-d*c+p)),x=v>0?-c:Math.min(Math.max(-c,-g),c),S=-v*v+x*(x+2*g)+h):x<=T?(v=0,x=Math.min(Math.max(-c,-g),c),S=x*(x+2*g)+h):(v=Math.max(0,-(d*c+p)),x=v>0?c:Math.min(Math.max(-c,-g),c),S=-v*v+x*(x+2*g)+h);else x=d>0?-c:c,v=Math.max(0,-(d*x+p)),S=-v*v+x*(x+2*g)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy($d).addScaledVector(Lc,x),S}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,g=s+d;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,g;const h=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),_>=0?(c=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-x.z)*v,g=(e.max.z-x.z)*v):(p=(e.max.z-x.z)*v,g=(e.min.z-x.z)*v),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,c){eh.subVectors(i,e),Uc.subVectors(s,e),th.crossVectors(eh,Uc);let d=this.direction.dot(th),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;cs.subVectors(this.origin,e);const g=p*this.direction.dot(Uc.crossVectors(cs,Uc));if(g<0)return null;const h=p*this.direction.dot(eh.cross(cs));if(h<0||g+h>d)return null;const _=-p*cs.dot(th);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kr extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kx=new tn,zs=new vu,Oc=new fl,Vx=new te,Pc=new te,Ic=new te,zc=new te,nh=new te,Bc=new te,jx=new te,Fc=new te;class ei extends Gn{constructor(e=new Hn,i=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let g=0,h=c.length;g<h;g++){const _=p[g],v=c[g];_!==0&&(nh.fromBufferAttribute(v,e),d?Bc.addScaledVector(nh,_):Bc.addScaledVector(nh.sub(i),_))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),zs.copy(e.ray).recast(e.near),!(Oc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Oc,Vx)===null||zs.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(kx.copy(c).invert(),zs.copy(e.ray).applyMatrix4(kx),!(s.boundingBox!==null&&zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,zs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,g=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,N=x.length;T<N;T++){const M=x[T],b=d[M.materialIndex],D=Math.max(M.start,S.start),O=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=D,B=O;w<B;w+=3){const L=p.getX(w),z=p.getX(w+1),A=p.getX(w+2);l=Gc(this,b,e,s,h,_,v,L,z,A),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),N=Math.min(p.count,S.start+S.count);for(let M=T,b=N;M<b;M+=3){const D=p.getX(M),O=p.getX(M+1),w=p.getX(M+2);l=Gc(this,d,e,s,h,_,v,D,O,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let T=0,N=x.length;T<N;T++){const M=x[T],b=d[M.materialIndex],D=Math.max(M.start,S.start),O=Math.min(g.count,Math.min(M.start+M.count,S.start+S.count));for(let w=D,B=O;w<B;w+=3){const L=w,z=w+1,A=w+2;l=Gc(this,b,e,s,h,_,v,L,z,A),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),N=Math.min(g.count,S.start+S.count);for(let M=T,b=N;M<b;M+=3){const D=M,O=M+1,w=M+2;l=Gc(this,d,e,s,h,_,v,D,O,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function sS(r,e,i,s,l,c,d,p){let g;if(e.side===ti?g=s.intersectTriangle(d,c,l,!0,p):g=s.intersectTriangle(l,c,d,e.side===hs,p),g===null)return null;Fc.copy(p),Fc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Fc);return h<i.near||h>i.far?null:{distance:h,point:Fc.clone(),object:r}}function Gc(r,e,i,s,l,c,d,p,g,h){r.getVertexPosition(p,Pc),r.getVertexPosition(g,Ic),r.getVertexPosition(h,zc);const _=sS(r,e,i,s,Pc,Ic,zc,jx);if(_){const v=new te;zi.getBarycoord(jx,Pc,Ic,zc,v),l&&(_.uv=zi.getInterpolatedAttribute(l,p,g,h,v,new bt)),c&&(_.uv1=zi.getInterpolatedAttribute(c,p,g,h,v,new bt)),d&&(_.normal=zi.getInterpolatedAttribute(d,p,g,h,v,new te),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:p,b:g,c:h,normal:new te,materialIndex:0};zi.getNormal(Pc,Ic,zc,x.normal),_.face=x,_.barycoord=v}return _}class rS extends Xn{constructor(e=null,i=1,s=1,l,c,d,p,g,h=Un,_=Un,v,x){super(null,d,p,g,h,_,l,c,v,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new te,oS=new te,lS=new dt;class Fs{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=ih.subVectors(s,i).cross(oS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(ih),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||lS.getNormalMatrix(e),l=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new fl,cS=new bt(.5,.5),Hc=new te;class Mp{constructor(e=new Fs,i=new Fs,s=new Fs,l=new Fs,c=new Fs,d=new Fs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ki,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],g=c[2],h=c[3],_=c[4],v=c[5],x=c[6],S=c[7],T=c[8],N=c[9],M=c[10],b=c[11],D=c[12],O=c[13],w=c[14],B=c[15];if(l[0].setComponents(h-d,S-_,b-T,B-D).normalize(),l[1].setComponents(h+d,S+_,b+T,B+D).normalize(),l[2].setComponents(h+p,S+v,b+N,B+O).normalize(),l[3].setComponents(h-p,S-v,b-N,B-O).normalize(),s)l[4].setComponents(g,x,M,w).normalize(),l[5].setComponents(h-g,S-x,b-M,B-w).normalize();else if(l[4].setComponents(h-g,S-x,b-M,B-w).normalize(),i===Ki)l[5].setComponents(h+g,S+x,b+M,B+w).normalize();else if(i===ol)l[5].setComponents(g,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);const i=cS.distanceTo(e.center);return Bs.radius=.7071067811865476+i,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t_ extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new te,uu=new te,Xx=new tn,Qo=new vu,kc=new fl,ah=new te,Wx=new te;class uS extends Gn{constructor(e=new Hn,i=new t_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new yn(s,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;Xx.copy(l).invert(),Qo.copy(e.ray).applyMatrix4(Xx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,h=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let N=S,M=T-1;N<M;N+=h){const b=_.getX(N),D=_.getX(N+1),O=Vc(this,e,Qo,g,b,D,N);O&&i.push(O)}if(this.isLineLoop){const N=_.getX(T-1),M=_.getX(S),b=Vc(this,e,Qo,g,N,M,T-1);b&&i.push(b)}}else{const S=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let N=S,M=T-1;N<M;N+=h){const b=Vc(this,e,Qo,g,N,N+1,N);b&&i.push(b)}if(this.isLineLoop){const N=Vc(this,e,Qo,g,T-1,S,T-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Vc(r,e,i,s,l,c,d){const p=r.geometry.attributes.position;if(cu.fromBufferAttribute(p,l),uu.fromBufferAttribute(p,c),i.distanceSqToSegment(cu,uu,ah,Wx)>s)return;ah.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(ah);if(!(h<e.near||h>e.far))return{distance:h,point:Wx.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const qx=new te,Yx=new te;class fS extends uS{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)qx.fromBufferAttribute(i,l),Yx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+qx.distanceTo(Yx);e.setAttribute("lineDistance",new yn(s,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n_ extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zx=new tn,tp=new vu,jc=new fl,Xc=new te;class dS extends Gn{constructor(e=new Hn,i=new n_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(l),jc.radius+=c,e.ray.intersectsSphere(jc)===!1)return;Zx.copy(l).invert(),tp.copy(e.ray).applyMatrix4(Zx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,h=s.index,v=s.attributes.position;if(h!==null){const x=Math.max(0,d.start),S=Math.min(h.count,d.start+d.count);for(let T=x,N=S;T<N;T++){const M=h.getX(T);Xc.fromBufferAttribute(v,M),Kx(Xc,M,g,l,e,i,this)}}else{const x=Math.max(0,d.start),S=Math.min(v.count,d.start+d.count);for(let T=x,N=S;T<N;T++)Xc.fromBufferAttribute(v,T),Kx(Xc,T,g,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Kx(r,e,i,s,l,c,d){const p=tp.distanceSqToPoint(r);if(p<i){const g=new te;tp.closestPointToPoint(r,g),g.applyMatrix4(s);const h=l.ray.origin.distanceTo(g);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class i_ extends Xn{constructor(e=[],i=Xs,s,l,c,d,p,g,h,_){super(e,i,s,l,c,d,p,g,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends Xn{constructor(e,i,s=ea,l,c,d,p=Un,g=Un,h,_=Da,v=1){if(_!==Da&&_!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,d,p,g,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hS extends Yr{constructor(e,i=ea,s=Xs,l,c,d=Un,p=Un,g,h=Da){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,c,d,p,g,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class a_ extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends Hn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],h=[],_=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new yn(h,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(v,2));function T(N,M,b,D,O,w,B,L,z,A,U){const V=w/z,k=B/A,W=w/2,he=B/2,oe=L/2,K=z+1,F=A+1;let G=0,ee=0;const de=new te;for(let xe=0;xe<F;xe++){const P=xe*k-he;for(let q=0;q<K;q++){const Me=q*V-W;de[N]=Me*D,de[M]=P*O,de[b]=oe,h.push(de.x,de.y,de.z),de[N]=0,de[M]=0,de[b]=L>0?1:-1,_.push(de.x,de.y,de.z),v.push(q/z),v.push(1-xe/A),G+=1}}for(let xe=0;xe<A;xe++)for(let P=0;P<z;P++){const q=x+P+K*xe,Me=x+P+K*(xe+1),we=x+(P+1)+K*(xe+1),Ne=x+(P+1)+K*xe;g.push(q,Me,Ne),g.push(Me,we,Ne),ee+=6}p.addGroup(S,ee,U),S+=ee,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sp extends Hn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];p(l),h(s),_(),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(c.slice(),3)),this.setAttribute("uv",new yn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(D){const O=new te,w=new te,B=new te;for(let L=0;L<i.length;L+=3)S(i[L+0],O),S(i[L+1],w),S(i[L+2],B),g(O,w,B,D)}function g(D,O,w,B){const L=B+1,z=[];for(let A=0;A<=L;A++){z[A]=[];const U=D.clone().lerp(w,A/L),V=O.clone().lerp(w,A/L),k=L-A;for(let W=0;W<=k;W++)W===0&&A===L?z[A][W]=U:z[A][W]=U.clone().lerp(V,W/k)}for(let A=0;A<L;A++)for(let U=0;U<2*(L-A)-1;U++){const V=Math.floor(U/2);U%2===0?(x(z[A][V+1]),x(z[A+1][V]),x(z[A][V])):(x(z[A][V+1]),x(z[A+1][V+1]),x(z[A+1][V]))}}function h(D){const O=new te;for(let w=0;w<c.length;w+=3)O.x=c[w+0],O.y=c[w+1],O.z=c[w+2],O.normalize().multiplyScalar(D),c[w+0]=O.x,c[w+1]=O.y,c[w+2]=O.z}function _(){const D=new te;for(let O=0;O<c.length;O+=3){D.x=c[O+0],D.y=c[O+1],D.z=c[O+2];const w=M(D)/2/Math.PI+.5,B=b(D)/Math.PI+.5;d.push(w,1-B)}T(),v()}function v(){for(let D=0;D<d.length;D+=6){const O=d[D+0],w=d[D+2],B=d[D+4],L=Math.max(O,w,B),z=Math.min(O,w,B);L>.9&&z<.1&&(O<.2&&(d[D+0]+=1),w<.2&&(d[D+2]+=1),B<.2&&(d[D+4]+=1))}}function x(D){c.push(D.x,D.y,D.z)}function S(D,O){const w=D*3;O.x=e[w+0],O.y=e[w+1],O.z=e[w+2]}function T(){const D=new te,O=new te,w=new te,B=new te,L=new bt,z=new bt,A=new bt;for(let U=0,V=0;U<c.length;U+=9,V+=6){D.set(c[U+0],c[U+1],c[U+2]),O.set(c[U+3],c[U+4],c[U+5]),w.set(c[U+6],c[U+7],c[U+8]),L.set(d[V+0],d[V+1]),z.set(d[V+2],d[V+3]),A.set(d[V+4],d[V+5]),B.copy(D).add(O).add(w).divideScalar(3);const k=M(B);N(L,V+0,D,k),N(z,V+2,O,k),N(A,V+4,w,k)}}function N(D,O,w,B){B<0&&D.x===1&&(d[O]=D.x-1),w.x===0&&w.z===0&&(d[O]=B/2/Math.PI+.5)}function M(D){return Math.atan2(D.z,-D.x)}function b(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sp(e.vertices,e.indices,e.radius,e.detail)}}class Ep extends Sp{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Ep(e.radius,e.detail)}}class _u extends Hn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),g=Math.floor(l),h=p+1,_=g+1,v=e/p,x=i/g,S=[],T=[],N=[],M=[];for(let b=0;b<_;b++){const D=b*x-d;for(let O=0;O<h;O++){const w=O*v-c;T.push(w,-D,0),N.push(0,0,1),M.push(O/p),M.push(1-b/g)}}for(let b=0;b<g;b++)for(let D=0;D<p;D++){const O=D+h*b,w=D+h*(b+1),B=D+1+h*(b+1),L=D+1+h*b;S.push(O,w,L),S.push(w,B,L)}this.setIndex(S),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(N,3)),this.setAttribute("uv",new yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}class fu extends Hn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(d+p,Math.PI);let h=0;const _=[],v=new te,x=new te,S=[],T=[],N=[],M=[];for(let b=0;b<=s;b++){const D=[],O=b/s,w=d+O*p,B=e*Math.cos(w),L=Math.sqrt(e*e-B*B);let z=0;b===0&&d===0?z=.5/i:b===s&&g===Math.PI&&(z=-.5/i);for(let A=0;A<=i;A++){const U=A/i,V=l+U*c;v.x=-L*Math.cos(V),v.y=B,v.z=L*Math.sin(V),T.push(v.x,v.y,v.z),x.copy(v).normalize(),N.push(x.x,x.y,x.z),M.push(U+z,1-O),D.push(h++)}_.push(D)}for(let b=0;b<s;b++)for(let D=0;D<i;D++){const O=_[b][D+1],w=_[b][D],B=_[b+1][D],L=_[b+1][D+1];(b!==0||d>0)&&S.push(O,w,L),(b!==s-1||g<Math.PI)&&S.push(w,B,L)}this.setIndex(S),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(N,3)),this.setAttribute("uv",new yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class du extends Hn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const g=[],h=[],_=[],v=[],x=new te,S=new te,T=new te;for(let N=0;N<=s;N++){const M=d+N/s*p;for(let b=0;b<=l;b++){const D=b/l*c;S.x=(e+i*Math.cos(M))*Math.cos(D),S.y=(e+i*Math.cos(M))*Math.sin(D),S.z=i*Math.sin(M),h.push(S.x,S.y,S.z),x.x=e*Math.cos(D),x.y=e*Math.sin(D),T.subVectors(S,x).normalize(),_.push(T.x,T.y,T.z),v.push(b/l),v.push(N/s)}}for(let N=1;N<=s;N++)for(let M=1;M<=l;M++){const b=(l+1)*N+M-1,D=(l+1)*(N-1)+M-1,O=(l+1)*(N-1)+M,w=(l+1)*N+M;g.push(b,D,w),g.push(D,O,w)}this.setIndex(g),this.setAttribute("position",new yn(h,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Qx(l))l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Qx(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function jn(r){const e={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)e[l]=s[l]}return e}function Qx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function pS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function s_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const mS={clone:Zr,merge:jn};var gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new _t().setHex(l.value);break;case"v2":this.uniforms[s].value=new bt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new te().fromArray(l.value);break;case"v4":this.uniforms[s].value=new on().fromArray(l.value);break;case"m3":this.uniforms[s].value=new dt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new tn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vS extends ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _S extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yS extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bS extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class r_ extends Gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const sh=new tn,Jx=new te,$x=new te;class MS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Jx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jx),$x.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($x),i.updateMatrixWorld(),sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ol||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wc=new te,qc=new Qr,Wi=new te;class o_ extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Wc,qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new te,ev=new bt,tv=new bt;class mi extends o_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ll*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,ev,tv),i.subVectors(tv,ev)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*s/h,l*=d.width/g,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class SS extends MS{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class nv extends r_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new SS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class l_ extends o_{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,g=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ES extends r_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Br=-90,Fr=1;class TS extends Gn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Br,Fr,e,i);l.layers=this.layers,this.add(l);const c=new mi(Br,Fr,e,i);c.layers=this.layers,this.add(c);const d=new mi(Br,Fr,e,i);d.layers=this.layers,this.add(d);const p=new mi(Br,Fr,e,i);p.layers=this.layers,this.add(p);const g=new mi(Br,Fr,e,i);g.layers=this.layers,this.add(g);const h=new mi(Br,Fr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,g]=i;for(const h of i)this.remove(h);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,g,h,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=N,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,x,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class AS extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const iv=new tn;class wS{constructor(e,i,s=0,l=1/0){this.ray=new vu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new yp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Nt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return iv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iv),this}intersectObject(e,i=!0,s=[]){return np(e,this,s,i),s.sort(av),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)np(e[l],this,s,i);return s.sort(av),s}}function av(r,e){return r.distance-e.distance}function np(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let d=0,p=c.length;d<p;d++)np(c[d],e,i,!0)}}class CS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Lp=class Lp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Lp.prototype.isMatrix2=!0;let sv=Lp;function rv(r,e,i,s){const l=RS(s);switch(i){case qv:return r*e;case Zv:return r*e/l.components*l.byteLength;case hp:return r*e/l.components*l.byteLength;case Ws:return r*e*2/l.components*l.byteLength;case pp:return r*e*2/l.components*l.byteLength;case Yv:return r*e*3/l.components*l.byteLength;case Bi:return r*e*4/l.components*l.byteLength;case mp:return r*e*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:case wh:return Math.max(r,16)*Math.max(e,8)/4;case Eh:case Ah:return Math.max(r,8)*Math.max(e,8)/2;case Ch:case Rh:case Dh:case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nh:case au:case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yh:case Zh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qh:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case su:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RS(r){switch(r){case gi:case Vv:return{byteLength:1,components:1};case sl:case jv:case Na:return{byteLength:2,components:1};case fp:case dp:return{byteLength:2,components:4};case ea:case up:case Zi:return{byteLength:4,components:1};case Xv:case Wv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function c_(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function NS(r){const e=new WeakMap;function i(p,g){const h=p.array,_=p.usage,v=h.byteLength,x=r.createBuffer();r.bindBuffer(g,x),r.bufferData(g,h,_),p.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,g,h){const _=g.array,v=g.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,_);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],N=v[S];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++x,v[x]=N)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const N=v[S];r.bufferSubData(h,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=e.get(p);g&&(r.deleteBuffer(g.buffer),e.delete(p))}function d(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,g));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,g),h.version=p.version}}return{get:l,remove:c,update:d}}var DS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,US=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,JS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,S1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:DS,alphahash_pars_fragment:LS,alphamap_fragment:US,alphamap_pars_fragment:OS,alphatest_fragment:PS,alphatest_pars_fragment:IS,aomap_fragment:zS,aomap_pars_fragment:BS,batching_pars_vertex:FS,batching_vertex:GS,begin_vertex:HS,beginnormal_vertex:kS,bsdfs:VS,iridescence_fragment:jS,bumpmap_pars_fragment:XS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:qS,clipping_planes_pars_vertex:YS,clipping_planes_vertex:ZS,color_fragment:KS,color_pars_fragment:QS,color_pars_vertex:JS,color_vertex:$S,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:a1,emissivemap_fragment:s1,emissivemap_pars_fragment:r1,colorspace_fragment:o1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:u1,envmap_pars_fragment:f1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:S1,envmap_vertex:h1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:x1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:b1,lights_pars_begin:M1,lights_toon_fragment:E1,lights_toon_pars_fragment:T1,lights_phong_fragment:A1,lights_phong_pars_fragment:w1,lights_physical_fragment:C1,lights_physical_pars_fragment:R1,lights_fragment_begin:N1,lights_fragment_maps:D1,lights_fragment_end:L1,lightprobes_pars_fragment:U1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:P1,logdepthbuf_pars_vertex:I1,logdepthbuf_vertex:z1,map_fragment:B1,map_pars_fragment:F1,map_particle_fragment:G1,map_particle_pars_fragment:H1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:V1,morphinstance_vertex:j1,morphcolor_vertex:X1,morphnormal_vertex:W1,morphtarget_pars_vertex:q1,morphtarget_vertex:Y1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:J1,normal_vertex:$1,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:aE,opaque_fragment:sE,packing:rE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:xE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:bE,specularmap_pars_fragment:ME,tonemapping_fragment:SE,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:AE,uv_pars_fragment:wE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:NE,background_vert:DE,background_frag:LE,backgroundCube_vert:UE,backgroundCube_frag:OE,cube_vert:PE,cube_frag:IE,depth_vert:zE,depth_frag:BE,distance_vert:FE,distance_frag:GE,equirect_vert:HE,equirect_frag:kE,linedashed_vert:VE,linedashed_frag:jE,meshbasic_vert:XE,meshbasic_frag:WE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:ZE,meshmatcap_frag:KE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:$E,meshphong_frag:eT,meshphysical_vert:tT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:aT,points_vert:sT,points_frag:rT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},ze={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Yi={basic:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:jn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:jn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new _t(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:jn([ze.points,ze.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:jn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:jn([ze.common,ze.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:jn([ze.sprite,ze.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:jn([ze.common,ze.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:jn([ze.lights,ze.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Yi.physical={uniforms:jn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Yc={r:0,b:0,g:0},fT=new tn,u_=new dt;u_.set(-1,0,0,0,1,0,0,0,1);function dT(r,e,i,s,l,c){const d=new _t(0);let p=l===!0?0:1,g,h,_=null,v=0,x=null;function S(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const w=D.backgroundBlurriness>0;O=e.get(O,w)}return O}function T(D){let O=!1;const w=S(D);w===null?M(d,p):w&&w.isColor&&(M(w,1),O=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(D,O){const w=S(O);w&&(w.isCubeTexture||w.mapping===xu)?(h===void 0&&(h=new ei(new dl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:Zr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(O.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(u_),h.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Vt,(_!==w||v!==w.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,_=w,v=w.version,x=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(g===void 0&&(g=new ei(new _u(2,2),new ta({name:"BackgroundMaterial",uniforms:Zr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=w,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),g.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,_=w,v=w.version,x=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function M(D,O){D.getRGB(Yc,s_(r)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,O,c)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,O=1){d.set(D),p=O,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(d,p)},render:T,addToRenderList:N,dispose:b}}function hT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,d=!1;function p(k,W,he,oe,K){let F=!1;const G=v(k,oe,he,W);c!==G&&(c=G,h(c.object)),F=S(k,oe,he,K),F&&T(k,oe,he,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,w(k,W,he,oe),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function g(){return r.createVertexArray()}function h(k){return r.bindVertexArray(k)}function _(k){return r.deleteVertexArray(k)}function v(k,W,he,oe){const K=oe.wireframe===!0;let F=s[W.id];F===void 0&&(F={},s[W.id]=F);const G=k.isInstancedMesh===!0?k.id:0;let ee=F[G];ee===void 0&&(ee={},F[G]=ee);let de=ee[he.id];de===void 0&&(de={},ee[he.id]=de);let xe=de[K];return xe===void 0&&(xe=x(g()),de[K]=xe),xe}function x(k){const W=[],he=[],oe=[];for(let K=0;K<i;K++)W[K]=0,he[K]=0,oe[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:he,attributeDivisors:oe,object:k,attributes:{},index:null}}function S(k,W,he,oe){const K=c.attributes,F=W.attributes;let G=0;const ee=he.getAttributes();for(const de in ee)if(ee[de].location>=0){const P=K[de];let q=F[de];if(q===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),P===void 0||P.attribute!==q||q&&P.data!==q.data)return!0;G++}return c.attributesNum!==G||c.index!==oe}function T(k,W,he,oe){const K={},F=W.attributes;let G=0;const ee=he.getAttributes();for(const de in ee)if(ee[de].location>=0){let P=F[de];P===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(P=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(P=k.instanceColor));const q={};q.attribute=P,P&&P.data&&(q.data=P.data),K[de]=q,G++}c.attributes=K,c.attributesNum=G,c.index=oe}function N(){const k=c.newAttributes;for(let W=0,he=k.length;W<he;W++)k[W]=0}function M(k){b(k,0)}function b(k,W){const he=c.newAttributes,oe=c.enabledAttributes,K=c.attributeDivisors;he[k]=1,oe[k]===0&&(r.enableVertexAttribArray(k),oe[k]=1),K[k]!==W&&(r.vertexAttribDivisor(k,W),K[k]=W)}function D(){const k=c.newAttributes,W=c.enabledAttributes;for(let he=0,oe=W.length;he<oe;he++)W[he]!==k[he]&&(r.disableVertexAttribArray(he),W[he]=0)}function O(k,W,he,oe,K,F,G){G===!0?r.vertexAttribIPointer(k,W,he,K,F):r.vertexAttribPointer(k,W,he,oe,K,F)}function w(k,W,he,oe){N();const K=oe.attributes,F=he.getAttributes(),G=W.defaultAttributeValues;for(const ee in F){const de=F[ee];if(de.location>=0){let xe=K[ee];if(xe===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor)),xe!==void 0){const P=xe.normalized,q=xe.itemSize,Me=e.get(xe);if(Me===void 0)continue;const we=Me.buffer,Ne=Me.type,ne=Me.bytesPerElement,Q=Ne===r.INT||Ne===r.UNSIGNED_INT||xe.gpuType===up;if(xe.isInterleavedBufferAttribute){const fe=xe.data,Te=fe.stride,Fe=xe.offset;if(fe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<de.locationSize;Ze++)b(de.location+Ze,fe.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ze=0;Ze<de.locationSize;Ze++)M(de.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ze=0;Ze<de.locationSize;Ze++)O(de.location+Ze,q/de.locationSize,Ne,P,Te*ne,(Fe+q/de.locationSize*Ze)*ne,Q)}else{if(xe.isInstancedBufferAttribute){for(let fe=0;fe<de.locationSize;fe++)b(de.location+fe,xe.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let fe=0;fe<de.locationSize;fe++)M(de.location+fe);r.bindBuffer(r.ARRAY_BUFFER,we);for(let fe=0;fe<de.locationSize;fe++)O(de.location+fe,q/de.locationSize,Ne,P,q*ne,q/de.locationSize*fe*ne,Q)}}else if(G!==void 0){const P=G[ee];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(de.location,P);break;case 3:r.vertexAttrib3fv(de.location,P);break;case 4:r.vertexAttrib4fv(de.location,P);break;default:r.vertexAttrib1fv(de.location,P)}}}}D()}function B(){U();for(const k in s){const W=s[k];for(const he in W){const oe=W[he];for(const K in oe){const F=oe[K];for(const G in F)_(F[G].object),delete F[G];delete oe[K]}}delete s[k]}}function L(k){if(s[k.id]===void 0)return;const W=s[k.id];for(const he in W){const oe=W[he];for(const K in oe){const F=oe[K];for(const G in F)_(F[G].object),delete F[G];delete oe[K]}}delete s[k.id]}function z(k){for(const W in s){const he=s[W];for(const oe in he){const K=he[oe];if(K[k.id]===void 0)continue;const F=K[k.id];for(const G in F)_(F[G].object),delete F[G];delete K[k.id]}}}function A(k){for(const W in s){const he=s[W],oe=k.isInstancedMesh===!0?k.id:0,K=he[oe];if(K!==void 0){for(const F in K){const G=K[F];for(const ee in G)_(G[ee].object),delete G[ee];delete K[F]}delete he[oe],Object.keys(he).length===0&&delete s[W]}}}function U(){V(),d=!0,c!==l&&(c=l,h(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:V,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:N,enableAttribute:M,disableUnusedAttributes:D}}function pT(r,e,i){let s;function l(g){s=g}function c(g,h){r.drawArrays(s,g,h),i.update(h,s,1)}function d(g,h,_){_!==0&&(r.drawArraysInstanced(s,g,h,_),i.update(h,s,_))}function p(g,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,h,0,_);let x=0;for(let S=0;S<_;S++)x+=h[S];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function mT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const A=z===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==gi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!A)}function g(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=g(h);_!==h&&(ot("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:w,maxSamples:B,samples:L}}function gT(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Fs,p=new dt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||l;return l=x,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,N=v.clipIntersection,M=v.clipShadows,b=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):h();else{const D=c?0:s,O=D*4;let w=b.clippingState||null;g.value=w,w=_(T,x,O,S);for(let B=0;B!==O;++B)w[B]=i[B];b.clippingState=w,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=D}};function h(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,x,S,T){const N=v!==null?v.length:0;let M=null;if(N!==0){if(M=g.value,T!==!0||M===null){const b=S+N*4,D=x.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<b)&&(M=new Float32Array(b));for(let O=0,w=S;O!==N;++O,w+=4)d.copy(v[O]).applyMatrix4(D,p),d.normal.toArray(M,w),M[w+3]=d.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,M}}const ds=4,ov=[.125,.215,.35,.446,.526,.582],Hs=20,xT=256,Jo=new l_,lv=new _t;let rh=null,oh=0,lh=0,ch=!1;const vT=new te;class cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=vT}=c;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Xs||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Na,format:Bi,colorSpace:ru,depthBuffer:!1},l=uv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(c)),this._blurMaterial=bT(c,e,i),this._ggxMaterial=yT(c,e,i)}return l}_compileMaterial(e){const i=new ei(new Hn,e);this._renderer.compile(i,Jo)}_sceneToCubeUV(e,i,s,l,c){const g=new mi(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(lv),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ei(new dl,new kr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let b=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,b=!0):(M.color.copy(lv),b=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(g.up.set(0,h[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+_[O],c.y,c.z)):w===1?(g.up.set(0,0,h[O]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+_[O],c.z)):(g.up.set(0,h[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+_[O]));const B=this._cubeSize;Gr(l,w*B,O>2?B:0,B,B),v.setRenderTarget(l),b&&v.render(N,g),v.render(e,g)}v.toneMapping=S,v.autoClear=x,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Xs||e.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const g=this._cubeSize;Gr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,Jo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const g=d.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-_*_),x=0+h*1.25,S=v*x,{_lodMax:T}=this,N=this._sizeLods[s],M=3*N*(s>T-ds?s-T+ds:0),b=4*(this._cubeSize-N);g.envMap.value=e.texture,g.roughness.value=S,g.mipInt.value=T-i,Gr(c,M,b,3*N,2*N),l.setRenderTarget(c),l.render(p,Jo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=T-s,Gr(e,M,b,3*N,2*N),l.setRenderTarget(e),l.render(p,Jo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const g=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=h;const x=h.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Hs-1),N=c/T,M=isFinite(c)?1+Math.floor(_*N):Hs;M>Hs&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const b=[];let D=0;for(let z=0;z<Hs;++z){const A=z/N,U=Math.exp(-A*A/2);b.push(U),z===0?D+=U:z<M&&(D+=2*U)}for(let z=0;z<b.length;z++)b[z]=b[z]/D;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=b,x.latitudinal.value=d==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-s;const w=this._sizeLods[l],B=3*w*(l>O-ds?l-O+ds:0),L=4*(this._cubeSize-w);Gr(i,B,L,3*w,2*w),g.setRenderTarget(i),g.render(v,Jo)}}function _T(r){const e=[],i=[],s=[];let l=r;const c=r-ds+1+ov.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let g=1/p;d>r-ds?g=ov[d-r+ds-1]:d===0&&(g=0),i.push(g);const h=1/(p-2),_=-h,v=1+h,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,N=3,M=2,b=1,D=new Float32Array(N*T*S),O=new Float32Array(M*T*S),w=new Float32Array(b*T*S);for(let L=0;L<S;L++){const z=L%3*2/3-1,A=L>2?0:-1,U=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];D.set(U,N*T*L),O.set(x,M*T*L);const V=[L,L,L,L,L,L];w.set(V,b*T*L)}const B=new Hn;B.setAttribute("position",new xi(D,N)),B.setAttribute("uv",new xi(O,M)),B.setAttribute("faceIndex",new xi(w,b)),s.push(new ei(B,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function uv(r,e,i){const s=new Ji(r,e,i);return s.texture.mapping=xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function yT(r,e,i){return new ta({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function bT(r,e,i){const s=new Float32Array(Hs),l=new te(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function fv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function dv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class f_ extends Ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new i_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new dl(5,5,5),c=new ta({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Ca});c.uniforms.tEquirect.value=i;const d=new ei(l,c),p=i.minFilter;return i.minFilter===ks&&(i.minFilter=Fn),new TS(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function MT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,S=!1){return x==null?null:S?d(x):c(x)}function c(x){if(x&&x.isTexture){const S=x.mapping;if(S===Ud||S===Od)if(e.has(x)){const T=e.get(x).texture;return p(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const N=new f_(T.height);return N.fromEquirectangularTexture(r,x),e.set(x,N),x.addEventListener("dispose",h),p(N.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const S=x.mapping,T=S===Ud||S===Od,N=S===Xs||S===qr;if(T||N){let M=i.get(x);const b=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b)return s===null&&(s=new cv(r)),M=T?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const D=x.image;return T&&D&&D.height>0||N&&D&&g(D)?(s===null&&(s=new cv(r)),M=T?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",_),M.texture):null}}}return x}function p(x,S){return S===Ud?x.mapping=Xs:S===Od&&(x.mapping=qr),x}function g(x){let S=0;const T=6;for(let N=0;N<T;N++)x[N]!==void 0&&S++;return S===T}function h(x){const S=x.target;S.removeEventListener("dispose",h);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(x){const S=x.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function ST(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jr("WebGLRenderer: "+s+" extension not supported."),l}}}function ET(r,e,i,s){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function g(v){const x=v.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function h(v){const x=[],S=v.index,T=v.attributes.position;let N=0;if(T===void 0)return;if(S!==null){const D=S.array;N=S.version;for(let O=0,w=D.length;O<w;O+=3){const B=D[O+0],L=D[O+1],z=D[O+2];x.push(B,L,L,z,z,B)}}else{const D=T.array;N=T.version;for(let O=0,w=D.length/3-1;O<w;O+=3){const B=O+0,L=O+1,z=O+2;x.push(B,L,L,z,z,B)}}const M=new(T.count>=65535?e_:$v)(x,1);M.version=N;const b=c.get(v);b&&e.remove(b),c.set(v,M)}function _(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:g,getWireframeAttribute:_}}function TT(r,e,i){let s;function l(v){s=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function g(v,x){r.drawElements(s,x,c,v*d),i.update(x,s,1)}function h(v,x,S){S!==0&&(r.drawElementsInstanced(s,x,c,v*d,S),i.update(x,s,S))}function _(v,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,v,0,S);let N=0;for(let M=0;M<S;M++)N+=x[M];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=h,this.renderMultiDraw=_}function AT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Nt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function wT(r,e,i){const s=new WeakMap,l=new on;function c(d,p,g){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(p);if(x===void 0||x.count!==v){let V=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",V)};var S=V;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let w=0;T===!0&&(w=1),N===!0&&(w=2),M===!0&&(w=3);let B=p.attributes.position.count*w,L=1;B>e.maxTextureSize&&(L=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*L*4*v),A=new Qv(z,B,L,v);A.type=Zi,A.needsUpdate=!0;const U=w*4;for(let k=0;k<v;k++){const W=b[k],he=D[k],oe=O[k],K=B*L*4*k;for(let F=0;F<W.count;F++){const G=F*U;T===!0&&(l.fromBufferAttribute(W,F),z[K+G+0]=l.x,z[K+G+1]=l.y,z[K+G+2]=l.z,z[K+G+3]=0),N===!0&&(l.fromBufferAttribute(he,F),z[K+G+4]=l.x,z[K+G+5]=l.y,z[K+G+6]=l.z,z[K+G+7]=0),M===!0&&(l.fromBufferAttribute(oe,F),z[K+G+8]=l.x,z[K+G+9]=l.y,z[K+G+10]=l.z,z[K+G+11]=oe.itemSize===4?l.w:1)}}x={count:v,texture:A,size:new bt(B,L)},s.set(p,x),p.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const N=p.morphTargetsRelative?1:1-T;g.getUniforms().setValue(r,"morphTargetBaseInfluence",N),g.getUniforms().setValue(r,"morphTargetInfluences",h)}g.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function CT(r,e,i,s,l){let c=new WeakMap;function d(h){const _=l.render.frame,v=h.geometry,x=e.get(h,v);if(c.get(x)!==_&&(e.update(x),c.set(x,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",g)===!1&&h.addEventListener("dispose",g),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return x}function p(){c=new WeakMap}function g(h){const _=h.target;_.removeEventListener("dispose",g),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const RT={[Iv]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[Bv]:"CINEON_TONE_MAPPING",[cp]:"ACES_FILMIC_TONE_MAPPING",[Gv]:"AGX_TONE_MAPPING",[Hv]:"NEUTRAL_TONE_MAPPING",[Fv]:"CUSTOM_TONE_MAPPING"};function NT(r,e,i,s,l,c){const d=new Ji(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Yr(e,i):void 0}),p=new Ji(e,i,{type:Na,depthBuffer:!1,stencilBuffer:!1}),g=new Hn;g.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new yn([0,2,0,0,2,0],2));const h=new vS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new ei(g,h),v=new l_(-1,1,1,-1,0,1);let x=null,S=null,T=!1,N,M=null,b=[],D=!1;this.setSize=function(O,w){d.setSize(O,w),p.setSize(O,w);for(let B=0;B<b.length;B++){const L=b[B];L.setSize&&L.setSize(O,w)}},this.setEffects=function(O){b=O,D=b.length>0&&b[0].isRenderPass===!0;const w=d.width,B=d.height;for(let L=0;L<b.length;L++){const z=b[L];z.setSize&&z.setSize(w,B)}},this.begin=function(O,w){if(T||O.toneMapping===Qi&&b.length===0)return!1;if(M=w,w!==null){const B=w.width,L=w.height;(d.width!==B||d.height!==L)&&this.setSize(B,L)}return D===!1&&O.setRenderTarget(d),N=O.toneMapping,O.toneMapping=Qi,!0},this.hasRenderPass=function(){return D},this.end=function(O,w){O.toneMapping=N,T=!0;let B=d,L=p;for(let z=0;z<b.length;z++){const A=b[z];if(A.enabled!==!1&&(A.render(O,L,B,w),A.needsSwap!==!1)){const U=B;B=L,L=U}}if(x!==O.outputColorSpace||S!==O.toneMapping){x=O.outputColorSpace,S=O.toneMapping,h.defines={},Rt.getTransfer(x)===Vt&&(h.defines.SRGB_TRANSFER="");const z=RT[S];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=B.texture,O.setRenderTarget(M),O.render(_,v),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),g.dispose(),h.dispose()}}const d_=new Xn,ip=new Yr(1,1),h_=new Qv,p_=new WM,m_=new i_,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),xv=new Float32Array(4);function Jr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=hv[l];if(c===void 0&&(c=new Float32Array(l),hv[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function En(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Tn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function bu(r,e){let i=pv[e];i===void 0&&(i=new Int32Array(e),pv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function DT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function LT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2fv(this.addr,e),Tn(i,e)}}function UT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;r.uniform3fv(this.addr,e),Tn(i,e)}}function OT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4fv(this.addr,e),Tn(i,e)}}function PT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;xv.set(s),r.uniformMatrix2fv(this.addr,!1,xv),Tn(i,s)}}function IT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;gv.set(s),r.uniformMatrix3fv(this.addr,!1,gv),Tn(i,s)}}function zT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;mv.set(s),r.uniformMatrix4fv(this.addr,!1,mv),Tn(i,s)}}function BT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function FT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2iv(this.addr,e),Tn(i,e)}}function GT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3iv(this.addr,e),Tn(i,e)}}function HT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4iv(this.addr,e),Tn(i,e)}}function kT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2uiv(this.addr,e),Tn(i,e)}}function jT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3uiv(this.addr,e),Tn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4uiv(this.addr,e),Tn(i,e)}}function WT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ip.compareFunction=i.isReversedDepthBuffer()?xp:gp,c=ip):c=d_,i.setTexture2D(e||c,l)}function qT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||p_,l)}function YT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||m_,l)}function ZT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||h_,l)}function KT(r){switch(r){case 5126:return DT;case 35664:return LT;case 35665:return UT;case 35666:return OT;case 35674:return PT;case 35675:return IT;case 35676:return zT;case 5124:case 35670:return BT;case 35667:case 35671:return FT;case 35668:case 35672:return GT;case 35669:case 35673:return HT;case 5125:return kT;case 36294:return VT;case 36295:return jT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return ZT}}function QT(r,e){r.uniform1fv(this.addr,e)}function JT(r,e){const i=Jr(e,this.size,2);r.uniform2fv(this.addr,i)}function $T(r,e){const i=Jr(e,this.size,3);r.uniform3fv(this.addr,i)}function e2(r,e){const i=Jr(e,this.size,4);r.uniform4fv(this.addr,i)}function t2(r,e){const i=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function n2(r,e){const i=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function i2(r,e){const i=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function a2(r,e){r.uniform1iv(this.addr,e)}function s2(r,e){r.uniform2iv(this.addr,e)}function r2(r,e){r.uniform3iv(this.addr,e)}function o2(r,e){r.uniform4iv(this.addr,e)}function l2(r,e){r.uniform1uiv(this.addr,e)}function c2(r,e){r.uniform2uiv(this.addr,e)}function u2(r,e){r.uniform3uiv(this.addr,e)}function f2(r,e){r.uniform4uiv(this.addr,e)}function d2(r,e,i){const s=this.cache,l=e.length,c=bu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=ip:d=d_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function h2(r,e,i){const s=this.cache,l=e.length,c=bu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||p_,c[d])}function p2(r,e,i){const s=this.cache,l=e.length,c=bu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||m_,c[d])}function m2(r,e,i){const s=this.cache,l=e.length,c=bu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||h_,c[d])}function g2(r){switch(r){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return e2;case 35674:return t2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return a2;case 35667:case 35671:return s2;case 35668:case 35672:return r2;case 35669:case 35673:return o2;case 5125:return l2;case 36294:return c2;case 36295:return u2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}class x2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KT(i.type)}}class v2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=g2(i.type)}}class _2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function vv(r,e){r.seq.push(e),r.map[e.id]=e}function y2(r,e,i){const s=r.name,l=s.length;for(uh.lastIndex=0;;){const c=uh.exec(s),d=uh.lastIndex;let p=c[1];const g=c[2]==="]",h=c[3];if(g&&(p=p|0),h===void 0||h==="["&&d+2===l){vv(i,h===void 0?new x2(p,r,e):new v2(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new _2(p),vv(i,v)),i=v}}}class nu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),g=e.getUniformLocation(i,p.name);y2(p,g,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],g=s[p.id];g.needsUpdate!==!1&&p.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function _v(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const b2=37297;let M2=0;function S2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const yv=new dt;function E2(r){Rt._getMatrix(yv,Rt.workingColorSpace,r);const e=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case ou:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+S2(r.getShaderSource(e),p)}else return c}function T2(r,e){const i=E2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const A2={[Iv]:"Linear",[zv]:"Reinhard",[Bv]:"Cineon",[cp]:"ACESFilmic",[Gv]:"AgX",[Hv]:"Neutral",[Fv]:"Custom"};function w2(r,e){const i=A2[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new te;function C2(){Rt.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function N2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function D2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function nl(r){return r!==""}function Mv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(r){return r.replace(L2,O2)}const U2=new Map;function O2(r,e){let i=yt[e];if(i===void 0){const s=U2.get(e);if(s!==void 0)i=yt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ap(i)}const P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(r){return r.replace(P2,I2)}function I2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Tv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const z2={[Qc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function B2(r){return z2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F2={[Xs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function G2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":F2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const H2={[qr]:"ENVMAP_MODE_REFRACTION"};function k2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":H2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V2={[Pv]:"ENVMAP_BLENDING_MULTIPLY",[uM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function j2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":V2[r.combine]||"ENVMAP_BLENDING_NONE"}function X2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function W2(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const g=B2(i),h=G2(i),_=k2(i),v=j2(i),x=X2(i),S=R2(i),T=N2(c),N=l.createProgram();let M,b,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(nl).join(`
`),M.length>0&&(M+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(nl).join(`
`),b.length>0&&(b+=`
`)):(M=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),b=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qi?"#define TONE_MAPPING":"",i.toneMapping!==Qi?yt.tonemapping_pars_fragment:"",i.toneMapping!==Qi?w2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,T2("linearToOutputTexel",i.outputColorSpace),C2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),d=ap(d),d=Mv(d,i),d=Sv(d,i),p=ap(p),p=Mv(p,i),p=Sv(p,i),d=Ev(d),p=Ev(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",i.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const O=D+M+d,w=D+b+p,B=_v(l,l.VERTEX_SHADER,O),L=_v(l,l.FRAGMENT_SHADER,w);l.attachShader(N,B),l.attachShader(N,L),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function z(k){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(N)||"",he=l.getShaderInfoLog(B)||"",oe=l.getShaderInfoLog(L)||"",K=W.trim(),F=he.trim(),G=oe.trim();let ee=!0,de=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,B,L);else{const xe=bv(l,B,"vertex"),P=bv(l,L,"fragment");Nt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+xe+`
`+P)}else K!==""?ot("WebGLProgram: Program Info Log:",K):(F===""||G==="")&&(de=!1);de&&(k.diagnostics={runnable:ee,programLog:K,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:b}})}l.deleteShader(B),l.deleteShader(L),A=new nu(l,N),U=D2(l,N)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(N,b2)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=M2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=B,this.fragmentShader=L,this}let q2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Z2(e),i.set(e,s)),s}}class Z2{constructor(e){this.id=q2++,this.code=e,this.usedTimes=0}}function K2(r){return r===Ws||r===au||r===su}function Q2(r,e,i,s,l,c){const d=new yp,p=new Y2,g=new Set,h=[],_=new Map,v=s.logarithmicDepthBuffer;let x=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return g.add(A),A===0?"uv":`uv${A}`}function N(A,U,V,k,W,he){const oe=k.fog,K=W.geometry,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ee=e.get(A.envMap||F,G),de=ee&&ee.mapping===xu?ee.image.height:null,xe=S[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&ot("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const P=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q=P!==void 0?P.length:0;let Me=0;K.morphAttributes.position!==void 0&&(Me=1),K.morphAttributes.normal!==void 0&&(Me=2),K.morphAttributes.color!==void 0&&(Me=3);let we,Ne,ne,Q;if(xe){const je=Yi[xe];we=je.vertexShader,Ne=je.fragmentShader}else{we=A.vertexShader,Ne=A.fragmentShader;const je=p.getVertexShaderStage(A),nn=p.getFragmentShaderStage(A);p.update(A,je,nn),ne=je.id,Q=nn.id}const fe=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),Fe=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,Ot=!!A.map,it=!!A.matcap,gt=!!ee,xt=!!A.aoMap,nt=!!A.lightMap,Zt=!!A.bumpMap&&A.wireframe===!1,Kt=!!A.normalMap,Qt=!!A.displacementMap,Jt=!!A.emissiveMap,ht=!!A.metalnessMap,ct=!!A.roughnessMap,Y=A.anisotropy>0,st=A.clearcoat>0,at=A.dispersion>0,I=A.iridescence>0,E=A.sheen>0,J=A.transmission>0,le=Y&&!!A.anisotropyMap,ve=st&&!!A.clearcoatMap,Ae=st&&!!A.clearcoatNormalMap,Le=st&&!!A.clearcoatRoughnessMap,ge=I&&!!A.iridescenceMap,me=I&&!!A.iridescenceThicknessMap,Ce=E&&!!A.sheenColorMap,Ge=E&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,Ue=!!A.specularColorMap,Je=!!A.specularIntensityMap,$e=J&&!!A.transmissionMap,ut=J&&!!A.thicknessMap,X=!!A.gradientMap,Re=!!A.alphaMap,ye=A.alphaTest>0,De=!!A.alphaHash,Be=!!A.extensions;let Ee=Qi;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ee=r.toneMapping);const Ye={shaderID:xe,shaderType:A.type,shaderName:A.name,vertexShader:we,fragmentShader:Ne,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:Q,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&W.instanceColor!==null,instancingMorph:Fe&&W.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ot,matcap:it,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:de,aoMap:xt,lightMap:nt,bumpMap:Zt,normalMap:Kt,displacementMap:Qt,emissiveMap:Jt,normalMapObjectSpace:Kt&&A.normalMapType===pM,normalMapTangentSpace:Kt&&A.normalMapType===ep,packedNormalMap:Kt&&A.normalMapType===ep&&K2(A.normalMap.format),metalnessMap:ht,roughnessMap:ct,anisotropy:Y,anisotropyMap:le,clearcoat:st,clearcoatMap:ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Le,dispersion:at,iridescence:I,iridescenceMap:ge,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Ce,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:Je,transmission:J,transmissionMap:$e,thicknessMap:ut,gradientMap:X,opaque:A.transparent===!1&&A.blending===Vr&&A.alphaToCoverage===!1,alphaMap:Re,alphaTest:ye,alphaHash:De,combine:A.combine,mapUv:Ot&&T(A.map.channel),aoMapUv:xt&&T(A.aoMap.channel),lightMapUv:nt&&T(A.lightMap.channel),bumpMapUv:Zt&&T(A.bumpMap.channel),normalMapUv:Kt&&T(A.normalMap.channel),displacementMapUv:Qt&&T(A.displacementMap.channel),emissiveMapUv:Jt&&T(A.emissiveMap.channel),metalnessMapUv:ht&&T(A.metalnessMap.channel),roughnessMapUv:ct&&T(A.roughnessMap.channel),anisotropyMapUv:le&&T(A.anisotropyMap.channel),clearcoatMapUv:ve&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(A.sheenRoughnessMap.channel),specularMapUv:Pe&&T(A.specularMap.channel),specularColorMapUv:Ue&&T(A.specularColorMap.channel),specularIntensityMapUv:Je&&T(A.specularIntensityMap.channel),transmissionMapUv:$e&&T(A.transmissionMap.channel),thicknessMapUv:ut&&T(A.thicknessMap.channel),alphaMapUv:Re&&T(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Kt||Y),vertexNormals:!!K.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(Ot||Re),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&Kt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Me,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ot&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Vt,decodeVideoTextureEmissive:Jt&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Aa,flipSided:A.side===ti,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ye.vertexUv1s=g.has(1),Ye.vertexUv2s=g.has(2),Ye.vertexUv3s=g.has(3),g.clear(),Ye}function M(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)U.push(V),U.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(b(U,A),D(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function b(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function D(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),U.packedNormalMap&&d.enable(22),U.vertexNormals&&d.enable(23),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),U.numLightProbeGrids>0&&d.enable(22),U.hasPositionAttribute&&d.enable(23),A.push(d.mask)}function O(A){const U=S[A.type];let V;if(U){const k=Yi[U];V=mS.clone(k.uniforms)}else V=A.uniforms;return V}function w(A,U){let V=_.get(U);return V!==void 0?++V.usedTimes:(V=new W2(r,U,A,l),h.push(V),_.set(U,V)),V}function B(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),_.delete(A.cacheKey),A.destroy()}}function L(A){p.remove(A)}function z(){p.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:O,acquireProgram:w,releaseProgram:B,releaseShaderCache:L,programs:h,dispose:z}}function J2(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,g){r.get(d)[p]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function $2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Av(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(x){let S=0;return x.isInstancedMesh&&(S+=2),x.isSkinnedMesh&&(S+=1),S}function p(x,S,T,N,M,b){let D=r[e];return D===void 0?(D={id:x.id,object:x,geometry:S,material:T,materialVariant:d(x),groupOrder:N,renderOrder:x.renderOrder,z:M,group:b},r[e]=D):(D.id=x.id,D.object=x,D.geometry=S,D.material=T,D.materialVariant=d(x),D.groupOrder=N,D.renderOrder=x.renderOrder,D.z=M,D.group=b),e++,D}function g(x,S,T,N,M,b){const D=p(x,S,T,N,M,b);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(x,S,T,N,M,b){const D=p(x,S,T,N,M,b);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function _(x,S,T){i.length>1&&i.sort(x||$2),s.length>1&&s.sort(S||Av),l.length>1&&l.sort(S||Av),T&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let x=e,S=r.length;x<S;x++){const T=r[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:h,finish:v,sort:_}}function eA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new wv,r.set(s,[d])):l>=c.length?(d=new wv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function tA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new _t};break;case"SpotLight":i={position:new te,direction:new te,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new _t,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":i={color:new _t,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=i,i}}}function nA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let iA=0;function aA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sA(r){const e=new tA,i=nA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new te);const l=new te,c=new tn,d=new tn;function p(h){let _=0,v=0,x=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,T=0,N=0,M=0,b=0,D=0,O=0,w=0,B=0,L=0,z=0;h.sort(aA);for(let U=0,V=h.length;U<V;U++){const k=h[U],W=k.color,he=k.intensity,oe=k.distance;let K=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ws?K=k.shadow.map.texture:K=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=W.r*he,v+=W.g*he,x+=W.b*he;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],he);z++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,ee=i.get(k);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.directionalShadow[S]=ee,s.directionalShadowMap[S]=K,s.directionalShadowMatrix[S]=k.shadow.matrix,D++}s.directional[S]=F,S++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(W).multiplyScalar(he),F.distance=oe,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[N]=F;const G=k.shadow;if(k.map&&(s.spotLightMap[B]=k.map,B++,G.updateMatrices(k),k.castShadow&&L++),s.spotLightMatrix[N]=G.matrix,k.castShadow){const ee=i.get(k);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.spotShadow[N]=ee,s.spotShadowMap[N]=K,w++}N++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(W).multiplyScalar(he),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=F,M++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const G=k.shadow,ee=i.get(k);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,s.pointShadow[T]=ee,s.pointShadowMap[T]=K,s.pointShadowMatrix[T]=k.shadow.matrix,O++}s.point[T]=F,T++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(he),F.groundColor.copy(k.groundColor).multiplyScalar(he),s.hemi[b]=F,b++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const A=s.hash;(A.directionalLength!==S||A.pointLength!==T||A.spotLength!==N||A.rectAreaLength!==M||A.hemiLength!==b||A.numDirectionalShadows!==D||A.numPointShadows!==O||A.numSpotShadows!==w||A.numSpotMaps!==B||A.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=N,s.rectArea.length=M,s.point.length=T,s.hemi.length=b,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=w+B-L,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,A.directionalLength=S,A.pointLength=T,A.spotLength=N,A.rectAreaLength=M,A.hemiLength=b,A.numDirectionalShadows=D,A.numPointShadows=O,A.numSpotShadows=w,A.numSpotMaps=B,A.numLightProbes=z,s.version=iA++)}function g(h,_){let v=0,x=0,S=0,T=0,N=0;const M=_.matrixWorldInverse;for(let b=0,D=h.length;b<D;b++){const O=h[b];if(O.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(O.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(O.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),d.identity(),c.copy(O.matrixWorld),c.premultiply(M),d.extractRotation(c),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const w=s.hemi[N];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(M),N++}}}return{setup:p,setupView:g,state:s}}function Cv(r){const e=new sA(r),i=[],s=[],l=[];function c(x){v.camera=x,i.length=0,s.length=0,l.length=0}function d(x){i.push(x)}function p(x){s.push(x)}function g(x){l.push(x)}function h(){e.setup(i)}function _(x){e.setupView(i,x)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:_,pushLight:d,pushShadow:p,pushLightProbeGrid:g}}function rA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Cv(r),e.set(l,[p])):c>=d.length?(p=new Cv(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cA=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],uA=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Rv=new tn,$o=new te,fh=new te;function fA(r,e,i){let s=new Mp;const l=new bt,c=new bt,d=new on,p=new yS,g=new bS,h={},_=i.maxTextureSize,v={[hs]:ti,[ti]:hs,[Aa]:Aa},x=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Hn;T.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new ei(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let b=this.type;this.render=function(L,z,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===Xb&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const U=r.getRenderTarget(),V=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Ca),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const he=b!==this.type;he&&z.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(K=>K.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,K=L.length;oe<K;oe++){const F=L[oe],G=F.shadow;if(G===void 0){ot("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();l.multiply(ee),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y));const de=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=de,G.map===null||he===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===el){if(F.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ji(l.x,l.y,{format:Ws,type:Na,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Yr(l.x,l.y,Zi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Da,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un}else F.isPointLight?(G.map=new f_(l.x),G.map.depthTexture=new hS(l.x,ea)):(G.map=new Ji(l.x,l.y),G.map.depthTexture=new Yr(l.x,l.y,ea)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Da,this.type===Qc?(G.map.depthTexture.compareFunction=de?xp:gp,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un);G.camera.updateProjectionMatrix()}const xe=G.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xe;P++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,P),r.clear();else{P===0&&(r.setRenderTarget(G.map),r.clear());const q=G.getViewport(P);d.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),W.viewport(d)}if(F.isPointLight){const q=G.camera,Me=G.matrix,we=F.distance||q.far;we!==q.far&&(q.far=we,q.updateProjectionMatrix()),$o.setFromMatrixPosition(F.matrixWorld),q.position.copy($o),fh.copy(q.position),fh.add(cA[P]),q.up.copy(uA[P]),q.lookAt(fh),q.updateMatrixWorld(),Me.makeTranslation(-$o.x,-$o.y,-$o.z),Rv.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Rv,q.coordinateSystem,q.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),w(z,A,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===el&&D(G,A),G.needsUpdate=!1}b=this.type,M.needsUpdate=!1,r.setRenderTarget(U,V,k)};function D(L,z){const A=e.update(N);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ji(l.x,l.y,{format:Ws,type:Na})),x.uniforms.shadow_pass.value=L.map.depthTexture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(z,null,A,x,N,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(z,null,A,S,N,null)}function O(L,z,A,U){let V=null;const k=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)V=k;else if(V=A.isPointLight===!0?g:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const W=V.uuid,he=z.uuid;let oe=h[W];oe===void 0&&(oe={},h[W]=oe);let K=oe[he];K===void 0&&(K=V.clone(),oe[he]=K,z.addEventListener("dispose",B)),V=K}if(V.visible=z.visible,V.wireframe=z.wireframe,U===el?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:v[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,A.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const W=r.properties.get(V);W.light=A}return V}function w(L,z,A,U,V){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&V===el)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const he=e.update(L),oe=L.material;if(Array.isArray(oe)){const K=he.groups;for(let F=0,G=K.length;F<G;F++){const ee=K[F],de=oe[ee.materialIndex];if(de&&de.visible){const xe=O(L,de,U,V);L.onBeforeShadow(r,L,z,A,he,xe,ee),r.renderBufferDirect(A,null,he,xe,L,ee),L.onAfterShadow(r,L,z,A,he,xe,ee)}}}else if(oe.visible){const K=O(L,oe,U,V);L.onBeforeShadow(r,L,z,A,he,K,null),r.renderBufferDirect(A,null,he,K,L,null),L.onAfterShadow(r,L,z,A,he,K,null)}}const W=L.children;for(let he=0,oe=W.length;he<oe;he++)w(W[he],z,A,U,V)}function B(L){L.target.removeEventListener("dispose",B);for(const A in h){const U=h[A],V=L.target.uuid;V in U&&(U[V].dispose(),delete U[V])}}}function dA(r,e){function i(){let X=!1;const Re=new on;let ye=null;const De=new on(0,0,0,0);return{setMask:function(Be){ye!==Be&&!X&&(r.colorMask(Be,Be,Be,Be),ye=Be)},setLocked:function(Be){X=Be},setClear:function(Be,Ee,Ye,je,nn){nn===!0&&(Be*=je,Ee*=je,Ye*=je),Re.set(Be,Ee,Ye,je),De.equals(Re)===!1&&(r.clearColor(Be,Ee,Ye,je),De.copy(Re))},reset:function(){X=!1,ye=null,De.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,ye=null,De=null,Be=null;return{setReversed:function(Ee){if(Re!==Ee){const Ye=e.get("EXT_clip_control");Ee?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=Ee;const je=Be;Be=null,this.setClear(je)}},getReversed:function(){return Re},setTest:function(Ee){Ee?fe(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Ee){ye!==Ee&&!X&&(r.depthMask(Ee),ye=Ee)},setFunc:function(Ee){if(Re&&(Ee=EM[Ee]),De!==Ee){switch(Ee){case mh:r.depthFunc(r.NEVER);break;case gh:r.depthFunc(r.ALWAYS);break;case xh:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case vh:r.depthFunc(r.EQUAL);break;case _h:r.depthFunc(r.GEQUAL);break;case yh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Be!==Ee&&(Be=Ee,Re&&(Ee=1-Ee),r.clearDepth(Ee))},reset:function(){X=!1,ye=null,De=null,Be=null,Re=!1}}}function l(){let X=!1,Re=null,ye=null,De=null,Be=null,Ee=null,Ye=null,je=null,nn=null;return{setTest:function(zt){X||(zt?fe(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(zt){Re!==zt&&!X&&(r.stencilMask(zt),Re=zt)},setFunc:function(zt,ni,ii){(ye!==zt||De!==ni||Be!==ii)&&(r.stencilFunc(zt,ni,ii),ye=zt,De=ni,Be=ii)},setOp:function(zt,ni,ii){(Ee!==zt||Ye!==ni||je!==ii)&&(r.stencilOp(zt,ni,ii),Ee=zt,Ye=ni,je=ii)},setLocked:function(zt){X=zt},setClear:function(zt){nn!==zt&&(r.clearStencil(zt),nn=zt)},reset:function(){X=!1,Re=null,ye=null,De=null,Be=null,Ee=null,Ye=null,je=null,nn=null}}}const c=new i,d=new s,p=new l,g=new WeakMap,h=new WeakMap;let _={},v={},x={},S=new WeakMap,T=[],N=null,M=!1,b=null,D=null,O=null,w=null,B=null,L=null,z=null,A=new _t(0,0,0),U=0,V=!1,k=null,W=null,he=null,oe=null,K=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const de=r.getParameter(r.VERSION);de.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(de)[1]),G=ee>=1):de.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),G=ee>=2);let xe=null,P={};const q=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),we=new on().fromArray(q),Ne=new on().fromArray(Me);function ne(X,Re,ye,De){const Be=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(X,Ee),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<ye;Ye++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Re+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return Ee}const Q={};Q[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),fe(r.DEPTH_TEST),d.setFunc(Wr),Zt(!1),Kt(bx),fe(r.CULL_FACE),xt(Ca);function fe(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Te(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Fe(X,Re){return x[X]!==Re?(r.bindFramebuffer(X,Re),x[X]=Re,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(X,Re){let ye=T,De=!1;if(X){ye=S.get(Re),ye===void 0&&(ye=[],S.set(Re,ye));const Be=X.textures;if(ye.length!==Be.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,Ye=Be.length;Ee<Ye;Ee++)ye[Ee]=r.COLOR_ATTACHMENT0+Ee;ye.length=Be.length,De=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,De=!0);De&&r.drawBuffers(ye)}function Ot(X){return N!==X?(r.useProgram(X),N=X,!0):!1}const it={[Gs]:r.FUNC_ADD,[qb]:r.FUNC_SUBTRACT,[Yb]:r.FUNC_REVERSE_SUBTRACT};it[Zb]=r.MIN,it[Kb]=r.MAX;const gt={[Qb]:r.ZERO,[Jb]:r.ONE,[$b]:r.SRC_COLOR,[hh]:r.SRC_ALPHA,[sM]:r.SRC_ALPHA_SATURATE,[iM]:r.DST_COLOR,[tM]:r.DST_ALPHA,[eM]:r.ONE_MINUS_SRC_COLOR,[ph]:r.ONE_MINUS_SRC_ALPHA,[aM]:r.ONE_MINUS_DST_COLOR,[nM]:r.ONE_MINUS_DST_ALPHA,[rM]:r.CONSTANT_COLOR,[oM]:r.ONE_MINUS_CONSTANT_COLOR,[lM]:r.CONSTANT_ALPHA,[cM]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(X,Re,ye,De,Be,Ee,Ye,je,nn,zt){if(X===Ca){M===!0&&(Te(r.BLEND),M=!1);return}if(M===!1&&(fe(r.BLEND),M=!0),X!==Wb){if(X!==b||zt!==V){if((D!==Gs||B!==Gs)&&(r.blendEquation(r.FUNC_ADD),D=Gs,B=Gs),zt)switch(X){case Vr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dh:r.blendFunc(r.ONE,r.ONE);break;case Mx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Nt("WebGLState: Invalid blending: ",X);break}else switch(X){case Vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Mx:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sx:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",X);break}O=null,w=null,L=null,z=null,A.set(0,0,0),U=0,b=X,V=zt}return}Be=Be||Re,Ee=Ee||ye,Ye=Ye||De,(Re!==D||Be!==B)&&(r.blendEquationSeparate(it[Re],it[Be]),D=Re,B=Be),(ye!==O||De!==w||Ee!==L||Ye!==z)&&(r.blendFuncSeparate(gt[ye],gt[De],gt[Ee],gt[Ye]),O=ye,w=De,L=Ee,z=Ye),(je.equals(A)===!1||nn!==U)&&(r.blendColor(je.r,je.g,je.b,nn),A.copy(je),U=nn),b=X,V=!1}function nt(X,Re){X.side===Aa?Te(r.CULL_FACE):fe(r.CULL_FACE);let ye=X.side===ti;Re&&(ye=!ye),Zt(ye),X.blending===Vr&&X.transparent===!1?xt(Ca):xt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const De=X.stencilWrite;p.setTest(De),De&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Jt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(X){k!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),k=X)}function Kt(X){X!==Vb?(fe(r.CULL_FACE),X!==W&&(X===bx?r.cullFace(r.BACK):X===jb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),W=X}function Qt(X){X!==he&&(G&&r.lineWidth(X),he=X)}function Jt(X,Re,ye){X?(fe(r.POLYGON_OFFSET_FILL),(oe!==Re||K!==ye)&&(oe=Re,K=ye,d.getReversed()&&(Re=-Re),r.polygonOffset(Re,ye))):Te(r.POLYGON_OFFSET_FILL)}function ht(X){X?fe(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function ct(X){X===void 0&&(X=r.TEXTURE0+F-1),xe!==X&&(r.activeTexture(X),xe=X)}function Y(X,Re,ye){ye===void 0&&(xe===null?ye=r.TEXTURE0+F-1:ye=xe);let De=P[ye];De===void 0&&(De={type:void 0,texture:void 0},P[ye]=De),(De.type!==X||De.texture!==Re)&&(xe!==ye&&(r.activeTexture(ye),xe=ye),r.bindTexture(X,Re||Q[X]),De.type=X,De.texture=Re)}function st(){const X=P[xe];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function at(){try{r.compressedTexImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function J(){try{r.texSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Ae(){try{r.texStorage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Le(){try{r.texStorage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function ge(){try{r.texImage2D(...arguments)}catch(X){Nt("WebGLState:",X)}}function me(){try{r.texImage3D(...arguments)}catch(X){Nt("WebGLState:",X)}}function Ce(X){return v[X]!==void 0?v[X]:r.getParameter(X)}function Ge(X,Re){v[X]!==Re&&(r.pixelStorei(X,Re),v[X]=Re)}function Pe(X){we.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),we.copy(X))}function Ue(X){Ne.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function Je(X,Re){let ye=h.get(Re);ye===void 0&&(ye=new WeakMap,h.set(Re,ye));let De=ye.get(X);De===void 0&&(De=r.getUniformBlockIndex(Re,X.name),ye.set(X,De))}function $e(X,Re){const De=h.get(Re).get(X);g.get(Re)!==De&&(r.uniformBlockBinding(Re,De,X.__bindingPointIndex),g.set(Re,De))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},xe=null,P={},x={},S=new WeakMap,T=[],N=null,M=!1,b=null,D=null,O=null,w=null,B=null,L=null,z=null,A=new _t(0,0,0),U=0,V=!1,k=null,W=null,he=null,oe=null,K=null,we.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:fe,disable:Te,bindFramebuffer:Fe,drawBuffers:Ze,useProgram:Ot,setBlending:xt,setMaterial:nt,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Qt,setPolygonOffset:Jt,setScissorTest:ht,activeTexture:ct,bindTexture:Y,unbindTexture:st,compressedTexImage2D:at,compressedTexImage3D:I,texImage2D:ge,texImage3D:me,pixelStorei:Ge,getParameter:Ce,updateUBOMapping:Je,uniformBlockBinding:$e,texStorage2D:Ae,texStorage3D:Le,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:le,compressedTexSubImage3D:ve,scissor:Pe,viewport:Ue,reset:ut}}function hA(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,_=new WeakMap,v=new Set;let x;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(I,E){return T?new OffscreenCanvas(I,E):lu("canvas")}function M(I,E,J){let le=1;const ve=at(I);if((ve.width>J||ve.height>J)&&(le=J/Math.max(ve.width,ve.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ae=Math.floor(le*ve.width),Le=Math.floor(le*ve.height);x===void 0&&(x=N(Ae,Le));const ge=E?N(Ae,Le):x;return ge.width=Ae,ge.height=Le,ge.getContext("2d").drawImage(I,0,0,Ae,Le),ot("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ae+"x"+Le+")."),ge}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function b(I){return I.generateMipmaps}function D(I){r.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(I,E,J,le,ve,Ae=!1){if(I!==null){if(r[I]!==void 0)return r[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;le&&(Le=e.get("EXT_texture_norm16"),Le||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===r.RED&&(J===r.FLOAT&&(ge=r.R32F),J===r.HALF_FLOAT&&(ge=r.R16F),J===r.UNSIGNED_BYTE&&(ge=r.R8),J===r.UNSIGNED_SHORT&&Le&&(ge=Le.R16_EXT),J===r.SHORT&&Le&&(ge=Le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ge=r.R8UI),J===r.UNSIGNED_SHORT&&(ge=r.R16UI),J===r.UNSIGNED_INT&&(ge=r.R32UI),J===r.BYTE&&(ge=r.R8I),J===r.SHORT&&(ge=r.R16I),J===r.INT&&(ge=r.R32I)),E===r.RG&&(J===r.FLOAT&&(ge=r.RG32F),J===r.HALF_FLOAT&&(ge=r.RG16F),J===r.UNSIGNED_BYTE&&(ge=r.RG8),J===r.UNSIGNED_SHORT&&Le&&(ge=Le.RG16_EXT),J===r.SHORT&&Le&&(ge=Le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ge=r.RG8UI),J===r.UNSIGNED_SHORT&&(ge=r.RG16UI),J===r.UNSIGNED_INT&&(ge=r.RG32UI),J===r.BYTE&&(ge=r.RG8I),J===r.SHORT&&(ge=r.RG16I),J===r.INT&&(ge=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ge=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ge=r.RGB16UI),J===r.UNSIGNED_INT&&(ge=r.RGB32UI),J===r.BYTE&&(ge=r.RGB8I),J===r.SHORT&&(ge=r.RGB16I),J===r.INT&&(ge=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ge=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ge=r.RGBA16UI),J===r.UNSIGNED_INT&&(ge=r.RGBA32UI),J===r.BYTE&&(ge=r.RGBA8I),J===r.SHORT&&(ge=r.RGBA16I),J===r.INT&&(ge=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&Le&&(ge=Le.RGB16_EXT),J===r.SHORT&&Le&&(ge=Le.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ge=r.R11F_G11F_B10F)),E===r.RGBA){const me=Ae?ou:Rt.getTransfer(ve);J===r.FLOAT&&(ge=r.RGBA32F),J===r.HALF_FLOAT&&(ge=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ge=me===Vt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Le&&(ge=Le.RGBA16_EXT),J===r.SHORT&&Le&&(ge=Le.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function B(I,E){let J;return I?E===null||E===ea||E===rl?J=r.DEPTH24_STENCIL8:E===Zi?J=r.DEPTH32F_STENCIL8:E===sl&&(J=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ea||E===rl?J=r.DEPTH_COMPONENT24:E===Zi?J=r.DEPTH_COMPONENT32F:E===sl&&(J=r.DEPTH_COMPONENT16),J}function L(I,E){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function z(I){const E=I.target;E.removeEventListener("dispose",z),U(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function A(I){const E=I.target;E.removeEventListener("dispose",A),k(E)}function U(I){const E=s.get(I);if(E.__webglInit===void 0)return;const J=I.source,le=S.get(J);if(le){const ve=le[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&V(I),Object.keys(le).length===0&&S.delete(J)}s.remove(I)}function V(I){const E=s.get(I);r.deleteTexture(E.__webglTexture);const J=I.source,le=S.get(J);delete le[E.__cacheKey],d.memory.textures--}function k(I){const E=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let ve=0;ve<E.__webglFramebuffer[le].length;ve++)r.deleteFramebuffer(E.__webglFramebuffer[le][ve]);else r.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)r.deleteFramebuffer(E.__webglFramebuffer[le]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=I.textures;for(let le=0,ve=J.length;le<ve;le++){const Ae=s.get(J[le]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),d.memory.textures--),s.remove(J[le])}s.remove(I)}let W=0;function he(){W=0}function oe(){return W}function K(I){W=I}function F(){const I=W;return I>=l.maxTextures&&ot("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),W+=1,I}function G(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ee(I,E){const J=s.get(I);if(I.isVideoTexture&&Y(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const le=I.image;if(le===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(J,I,E);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function de(I,E){const J=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){Te(J,I,E);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function xe(I,E){const J=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){Te(J,I,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function P(I,E){const J=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){Fe(J,I,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const q={[Mh]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[Sh]:r.MIRRORED_REPEAT},Me={[Un]:r.NEAREST,[dM]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Pd]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},we={[mM]:r.NEVER,[yM]:r.ALWAYS,[gM]:r.LESS,[gp]:r.LEQUAL,[xM]:r.EQUAL,[xp]:r.GEQUAL,[vM]:r.GREATER,[_M]:r.NOTEQUAL};function Ne(I,E){if(E.type===Zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Pd||E.magFilter===Ec||E.magFilter===ks||E.minFilter===Fn||E.minFilter===Pd||E.minFilter===Ec||E.minFilter===ks)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,q[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,q[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,q[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Me[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Ec&&E.minFilter!==ks||E.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ne(I,E){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",z));const le=E.source;let ve=S.get(le);ve===void 0&&(ve={},S.set(le,ve));const Ae=G(E);if(Ae!==I.__cacheKey){ve[Ae]===void 0&&(ve[Ae]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,J=!0),ve[Ae].usedTimes++;const Le=ve[I.__cacheKey];Le!==void 0&&(ve[I.__cacheKey].usedTimes--,Le.usedTimes===0&&V(E)),I.__cacheKey=Ae,I.__webglTexture=ve[Ae].texture}return J}function Q(I,E,J){return Math.floor(Math.floor(I/J)/E)}function fe(I,E,J,le){const Ae=I.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,le,E.data);else{Ae.sort((Ge,Pe)=>Ge.start-Pe.start);let Le=0;for(let Ge=1;Ge<Ae.length;Ge++){const Pe=Ae[Le],Ue=Ae[Ge],Je=Pe.start+Pe.count,$e=Q(Ue.start,E.width,4),ut=Q(Pe.start,E.width,4);Ue.start<=Je+1&&$e===ut&&Q(Ue.start+Ue.count-1,E.width,4)===$e?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++Le,Ae[Le]=Ue)}Ae.length=Le+1;const ge=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Ce=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,Pe=Ae.length;Ge<Pe;Ge++){const Ue=Ae[Ge],Je=Math.floor(Ue.start/4),$e=Math.ceil(Ue.count/4),ut=Je%E.width,X=Math.floor(Je/E.width),Re=$e,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ut,X,Re,ye,J,le,E.data)}I.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ge),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function Te(I,E,J){let le=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=r.TEXTURE_3D);const ve=ne(I,E),Ae=E.source;i.bindTexture(le,I.__webglTexture,r.TEXTURE0+J);const Le=s.get(Ae);if(Ae.version!==Le.__version||ve===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Rt.getPrimaries(Rt.workingColorSpace),De=E.colorSpace===fs?null:Rt.getPrimaries(E.colorSpace),Be=E.colorSpace===fs||ye===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let me=M(E.image,!1,l.maxTextureSize);me=st(E,me);const Ce=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let Pe=w(E.internalFormat,Ce,Ge,E.normalized,E.colorSpace,E.isVideoTexture);Ne(le,E);let Ue;const Je=E.mipmaps,$e=E.isVideoTexture!==!0,ut=Le.__version===void 0||ve===!0,X=Ae.dataReady,Re=L(E,me);if(E.isDepthTexture)Pe=B(E.format===Vs,E.type),ut&&($e?i.texStorage2D(r.TEXTURE_2D,1,Pe,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Pe,me.width,me.height,0,Ce,Ge,null));else if(E.isDataTexture)if(Je.length>0){$e&&ut&&i.texStorage2D(r.TEXTURE_2D,Re,Pe,Je[0].width,Je[0].height);for(let ye=0,De=Je.length;ye<De;ye++)Ue=Je[ye],$e?X&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,Ce,Ge,Ue.data):i.texImage2D(r.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,Ce,Ge,Ue.data);E.generateMipmaps=!1}else $e?(ut&&i.texStorage2D(r.TEXTURE_2D,Re,Pe,me.width,me.height),X&&fe(E,me,Ce,Ge)):i.texImage2D(r.TEXTURE_2D,0,Pe,me.width,me.height,0,Ce,Ge,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Pe,Je[0].width,Je[0].height,me.depth);for(let ye=0,De=Je.length;ye<De;ye++)if(Ue=Je[ye],E.format!==Bi)if(Ce!==null)if($e){if(X)if(E.layerUpdates.size>0){const Be=rv(Ue.width,Ue.height,E.format,E.type);for(const Ee of E.layerUpdates){const Ye=Ue.data.subarray(Ee*Be/Ue.data.BYTES_PER_ELEMENT,(Ee+1)*Be/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Ee,Ue.width,Ue.height,1,Ce,Ye)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,me.depth,Ce,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Pe,Ue.width,Ue.height,me.depth,0,Ue.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,me.depth,Ce,Ge,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,Pe,Ue.width,Ue.height,me.depth,0,Ce,Ge,Ue.data)}else{$e&&ut&&i.texStorage2D(r.TEXTURE_2D,Re,Pe,Je[0].width,Je[0].height);for(let ye=0,De=Je.length;ye<De;ye++)Ue=Je[ye],E.format!==Bi?Ce!==null?$e?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,Ue.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?X&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,Ce,Ge,Ue.data):i.texImage2D(r.TEXTURE_2D,ye,Pe,Ue.width,Ue.height,0,Ce,Ge,Ue.data)}else if(E.isDataArrayTexture)if($e){if(ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Pe,me.width,me.height,me.depth),X)if(E.layerUpdates.size>0){const ye=rv(me.width,me.height,E.format,E.type);for(const De of E.layerUpdates){const Be=me.data.subarray(De*ye/me.data.BYTES_PER_ELEMENT,(De+1)*ye/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,me.width,me.height,1,Ce,Ge,Be)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Ge,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Ce,Ge,me.data);else if(E.isData3DTexture)$e?(ut&&i.texStorage3D(r.TEXTURE_3D,Re,Pe,me.width,me.height,me.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Ge,me.data)):i.texImage3D(r.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Ce,Ge,me.data);else if(E.isFramebufferTexture){if(ut)if($e)i.texStorage2D(r.TEXTURE_2D,Re,Pe,me.width,me.height);else{let ye=me.width,De=me.height;for(let Be=0;Be<Re;Be++)i.texImage2D(r.TEXTURE_2D,Be,Pe,ye,De,0,Ce,Ge,null),ye>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),me.parentNode!==ye){ye.appendChild(me),v.add(E),ye.onpaint=De=>{const Be=De.changedElements;for(const Ee of v)Be.includes(Ee.image)&&(Ee.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const Be=r.RGBA,Ee=r.RGBA,Ye=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Be,Ee,Ye,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if($e&&ut){const ye=at(Je[0]);i.texStorage2D(r.TEXTURE_2D,Re,Pe,ye.width,ye.height)}for(let ye=0,De=Je.length;ye<De;ye++)Ue=Je[ye],$e?X&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ce,Ge,Ue):i.texImage2D(r.TEXTURE_2D,ye,Pe,Ce,Ge,Ue);E.generateMipmaps=!1}else if($e){if(ut){const ye=at(me);i.texStorage2D(r.TEXTURE_2D,Re,Pe,ye.width,ye.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Ge,me)}else i.texImage2D(r.TEXTURE_2D,0,Pe,Ce,Ge,me);b(E)&&D(le),Le.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Fe(I,E,J){if(E.image.length!==6)return;const le=ne(I,E),ve=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+J);const Ae=s.get(ve);if(ve.version!==Ae.__version||le===!0){i.activeTexture(r.TEXTURE0+J);const Le=Rt.getPrimaries(Rt.workingColorSpace),ge=E.colorSpace===fs?null:Rt.getPrimaries(E.colorSpace),me=E.colorSpace===fs||Le===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let Ee=0;Ee<6;Ee++)!Ce&&!Ge?Pe[Ee]=M(E.image[Ee],!0,l.maxCubemapSize):Pe[Ee]=Ge?E.image[Ee].image:E.image[Ee],Pe[Ee]=st(E,Pe[Ee]);const Ue=Pe[0],Je=c.convert(E.format,E.colorSpace),$e=c.convert(E.type),ut=w(E.internalFormat,Je,$e,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Re=Ae.__version===void 0||le===!0,ye=ve.dataReady;let De=L(E,Ue);Ne(r.TEXTURE_CUBE_MAP,E);let Be;if(Ce){X&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,De,ut,Ue.width,Ue.height);for(let Ee=0;Ee<6;Ee++){Be=Pe[Ee].mipmaps;for(let Ye=0;Ye<Be.length;Ye++){const je=Be[Ye];E.format!==Bi?Je!==null?X?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,0,0,je.width,je.height,Je,je.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,ut,je.width,je.height,0,je.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,0,0,je.width,je.height,Je,$e,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye,ut,je.width,je.height,0,Je,$e,je.data)}}}else{if(Be=E.mipmaps,X&&Re){Be.length>0&&De++;const Ee=at(Pe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,De,ut,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ge){X?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Pe[Ee].width,Pe[Ee].height,Je,$e,Pe[Ee].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,Pe[Ee].width,Pe[Ee].height,0,Je,$e,Pe[Ee].data);for(let Ye=0;Ye<Be.length;Ye++){const nn=Be[Ye].image[Ee].image;X?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,0,0,nn.width,nn.height,Je,$e,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,ut,nn.width,nn.height,0,Je,$e,nn.data)}}else{X?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Je,$e,Pe[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,Je,$e,Pe[Ee]);for(let Ye=0;Ye<Be.length;Ye++){const je=Be[Ye];X?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,0,0,Je,$e,je.image[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ye+1,ut,Je,$e,je.image[Ee])}}}b(E)&&D(r.TEXTURE_CUBE_MAP),Ae.__version=ve.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ze(I,E,J,le,ve,Ae){const Le=c.convert(J.format,J.colorSpace),ge=c.convert(J.type),me=w(J.internalFormat,Le,ge,J.normalized,J.colorSpace),Ce=s.get(E),Ge=s.get(J);if(Ge.__renderTarget=E,!Ce.__hasExternalTextures){const Pe=Math.max(1,E.width>>Ae),Ue=Math.max(1,E.height>>Ae);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,Ae,me,Pe,Ue,E.depth,0,Le,ge,null):i.texImage2D(ve,Ae,me,Pe,Ue,0,Le,ge,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),ct(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ve,Ge.__webglTexture,0,ht(E)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,ve,Ge.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(I,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const le=E.depthTexture,ve=le&&le.isDepthTexture?le.type:null,Ae=B(E.stencilBuffer,ve),Le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ct(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(E),Ae,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,I)}else{const le=E.textures;for(let ve=0;ve<le.length;ve++){const Ae=le[ve],Le=c.convert(Ae.format,Ae.colorSpace),ge=c.convert(Ae.type),me=w(Ae.internalFormat,Le,ge,Ae.normalized,Ae.colorSpace);ct(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(E),me,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(E),me,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,me,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function it(I,E,J){const le=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=s.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ce=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let Pe;E.depthTexture.format===Da?Pe=r.DEPTH_COMPONENT24:E.depthTexture.format===Vs&&(Pe=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,E.width,E.height,0,Ce,Ge,null)}}else ee(E.depthTexture,0);const Ae=ve.__webglTexture,Le=ht(E),ge=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,me=E.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Da)ct(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ge,Ae,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,me,ge,Ae,0);else if(E.depthTexture.format===Vs)ct(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ge,Ae,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,me,ge,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(I){const E=s.get(I),J=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",ve)};le.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=le}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let le=0;le<6;le++)it(E.__webglFramebuffer[le],I,le);else{const le=I.texture.mipmaps;le&&le.length>0?it(E.__webglFramebuffer[0],I,0):it(E.__webglFramebuffer,I,0)}else if(J){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=r.createRenderbuffer(),Ot(E.__webglDepthbuffer[le],I,!1);else{const ve=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ae)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ot(E.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(I,E,J){const le=s.get(I);E!==void 0&&Ze(le.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&gt(I)}function nt(I){const E=I.texture,J=s.get(I),le=s.get(E);I.addEventListener("dispose",A);const ve=I.textures,Ae=I.isWebGLCubeRenderTarget===!0,Le=ve.length>1;if(Le||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=E.version,d.memory.textures++),Ae){J.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ge]=[];for(let me=0;me<E.mipmaps.length;me++)J.__webglFramebuffer[ge][me]=r.createFramebuffer()}else J.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)J.__webglFramebuffer[ge]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ge=0,me=ve.length;ge<me;ge++){const Ce=s.get(ve[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),d.memory.textures++)}if(I.samples>0&&ct(I)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ge=0;ge<ve.length;ge++){const me=ve[ge];J.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ge]);const Ce=c.convert(me.format,me.colorSpace),Ge=c.convert(me.type),Pe=w(me.internalFormat,Ce,Ge,me.normalized,me.colorSpace,I.isXRRenderTarget===!0),Ue=ht(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,J.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(J.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ze(J.__webglFramebuffer[ge][me],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else Ze(J.__webglFramebuffer[ge],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);b(E)&&D(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ge=0,me=ve.length;ge<me;ge++){const Ce=ve[ge],Ge=s.get(Ce);let Pe=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ge.__webglTexture),Ne(Pe,Ce),Ze(J.__webglFramebuffer,I,Ce,r.COLOR_ATTACHMENT0+ge,Pe,0),b(Ce)&&D(Pe)}i.unbindTexture()}else{let ge=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ge,le.__webglTexture),Ne(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ze(J.__webglFramebuffer[me],I,E,r.COLOR_ATTACHMENT0,ge,me);else Ze(J.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,ge,0);b(E)&&D(ge),i.unbindTexture()}I.depthBuffer&&gt(I)}function Zt(I){const E=I.textures;for(let J=0,le=E.length;J<le;J++){const ve=E[J];if(b(ve)){const Ae=O(I),Le=s.get(ve).__webglTexture;i.bindTexture(Ae,Le),D(Ae),i.unbindTexture()}}}const Kt=[],Qt=[];function Jt(I){if(I.samples>0){if(ct(I)===!1){const E=I.textures,J=I.width,le=I.height;let ve=r.COLOR_BUFFER_BIT;const Ae=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(I),ge=E.length>1;if(ge)for(let Ce=0;Ce<E.length;Ce++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const me=I.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const Ge=s.get(E[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,J,le,0,0,J,le,ve,r.NEAREST),g===!0&&(Kt.length=0,Qt.length=0,Kt.push(r.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Kt.push(Ae),Qt.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<E.length;Ce++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const Ge=s.get(E[Ce]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&g){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ht(I){return Math.min(l.maxSamples,I.samples)}function ct(I){const E=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(I){const E=d.render.frame;_.get(I)!==E&&(_.set(I,E),I.update())}function st(I,E){const J=I.colorSpace,le=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==ru&&J!==fs&&(Rt.getTransfer(J)===Vt?(le!==Bi||ve!==gi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",J)),E}function at(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=he,this.getTextureUnits=oe,this.setTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=de,this.setTexture3D=xe,this.setTextureCube=P,this.rebindTextures=xt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function pA(r,e){function i(s,l=fs){let c;const d=Rt.getTransfer(l);if(s===gi)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Wv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vv)return r.BYTE;if(s===jv)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===ea)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Na)return r.HALF_FLOAT;if(s===qv)return r.ALPHA;if(s===Yv)return r.RGB;if(s===Bi)return r.RGBA;if(s===Da)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===Zv)return r.RED;if(s===hp)return r.RED_INTEGER;if(s===Ws)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===eu||s===tu)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eh||s===Th||s===Ah||s===wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ch||s===Rh||s===Nh||s===Dh||s===Lh||s===au||s===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ch||s===Rh)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Nh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Dh)return c.COMPRESSED_R11_EAC;if(s===Lh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===au)return c.COMPRESSED_RG11_EAC;if(s===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Oh||s===Ph||s===Ih||s===zh||s===Bh||s===Fh||s===Gh||s===Hh||s===kh||s===Vh||s===jh||s===Xh||s===Wh||s===qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Oh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ih)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yh||s===Zh||s===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Yh)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qh||s===Jh||s===su||s===$h)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Qh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$h)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new a_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ta({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ei(new _u(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends qs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",g=1,h=null,_=null,v=null,x=null,S=null,T=null;const N=typeof XRWebGLBinding<"u",M=new xA,b={},D=i.getContextAttributes();let O=null,w=null;const B=[],L=[],z=new bt;let A=null;const U=new mi;U.viewport=new on;const V=new mi;V.viewport=new on;const k=[U,V],W=new AS;let he=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Q=B[ne];return Q===void 0&&(Q=new Hd,B[ne]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(ne){let Q=B[ne];return Q===void 0&&(Q=new Hd,B[ne]=Q),Q.getGripSpace()},this.getHand=function(ne){let Q=B[ne];return Q===void 0&&(Q=new Hd,B[ne]=Q),Q.getHandSpace()};function K(ne){const Q=L.indexOf(ne.inputSource);if(Q===-1)return;const fe=B[Q];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,h||d),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function F(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let ne=0;ne<B.length;ne++){const Q=L[ne];Q!==null&&(L[ne]=null,B[ne].disconnect(Q))}he=null,oe=null,M.reset();for(const ne in b)delete b[ne];e.setRenderTarget(O),S=null,x=null,v=null,l=null,w=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(z),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Te=null,Fe=null;D.depth&&(Fe=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,fe=D.stencil?Vs:Da,Te=D.stencil?rl:ea);const Ze={colorFormat:i.RGBA8,depthFormat:Fe,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(Ze),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Ji(x.textureWidth,x.textureHeight,{format:Bi,type:gi,depthTexture:new Yr(x.textureWidth,x.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const fe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,fe),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new Ji(S.framebufferWidth,S.framebufferHeight,{format:Bi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(g),h=null,d=await l.requestReferenceSpace(p),Ne.setContext(l),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(ne){for(let Q=0;Q<ne.removed.length;Q++){const fe=ne.removed[Q],Te=L.indexOf(fe);Te>=0&&(L[Te]=null,B[Te].disconnect(fe))}for(let Q=0;Q<ne.added.length;Q++){const fe=ne.added[Q];let Te=L.indexOf(fe);if(Te===-1){for(let Ze=0;Ze<B.length;Ze++)if(Ze>=L.length){L.push(fe),Te=Ze;break}else if(L[Ze]===null){L[Ze]=fe,Te=Ze;break}if(Te===-1)break}const Fe=B[Te];Fe&&Fe.connect(fe)}}const ee=new te,de=new te;function xe(ne,Q,fe){ee.setFromMatrixPosition(Q.matrixWorld),de.setFromMatrixPosition(fe.matrixWorld);const Te=ee.distanceTo(de),Fe=Q.projectionMatrix.elements,Ze=fe.projectionMatrix.elements,Ot=Fe[14]/(Fe[10]-1),it=Fe[14]/(Fe[10]+1),gt=(Fe[9]+1)/Fe[5],xt=(Fe[9]-1)/Fe[5],nt=(Fe[8]-1)/Fe[0],Zt=(Ze[8]+1)/Ze[0],Kt=Ot*nt,Qt=Ot*Zt,Jt=Te/(-nt+Zt),ht=Jt*-nt;if(Q.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ht),ne.translateZ(Jt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(Q.projectionMatrix),ne.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ct=Ot+Jt,Y=it+Jt,st=Kt-ht,at=Qt+(Te-ht),I=gt*it/Y*ct,E=xt*it/Y*ct;ne.projectionMatrix.makePerspective(st,at,I,E,ct,Y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,Q){Q===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Q.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let Q=ne.near,fe=ne.far;M.texture!==null&&(M.depthNear>0&&(Q=M.depthNear),M.depthFar>0&&(fe=M.depthFar)),W.near=V.near=U.near=Q,W.far=V.far=U.far=fe,(he!==W.near||oe!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),he=W.near,oe=W.far),W.layers.mask=ne.layers.mask|6,U.layers.mask=W.layers.mask&-5,V.layers.mask=W.layers.mask&-3;const Te=ne.parent,Fe=W.cameras;P(W,Te);for(let Ze=0;Ze<Fe.length;Ze++)P(Fe[Ze],Te);Fe.length===2?xe(W,U,V):W.projectionMatrix.copy(U.projectionMatrix),q(ne,W,Te)};function q(ne,Q,fe){fe===null?ne.matrix.copy(Q.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Q.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Q.projectionMatrix),ne.projectionMatrixInverse.copy(Q.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ll*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&S===null))return g},this.setFoveation=function(ne){g=ne,x!==null&&(x.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(ne){return b[ne]};let Me=null;function we(ne,Q){if(_=Q.getViewerPose(h||d),T=Q,_!==null){const fe=_.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Te=!1;fe.length!==W.cameras.length&&(W.cameras.length=0,Te=!0);for(let it=0;it<fe.length;it++){const gt=fe[it];let xt=null;if(S!==null)xt=S.getViewport(gt);else{const Zt=v.getViewSubImage(x,gt);xt=Zt.viewport,it===0&&(e.setRenderTargetTextures(w,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(w))}let nt=k[it];nt===void 0&&(nt=new mi,nt.layers.enable(it),nt.viewport=new on,k[it]=nt),nt.matrix.fromArray(gt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(gt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(xt.x,xt.y,xt.width,xt.height),it===0&&(W.matrix.copy(nt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Te===!0&&W.cameras.push(nt)}const Fe=l.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){v=s.getBinding();const it=v.getDepthInformation(fe[0]);it&&it.isValid&&it.texture&&M.init(it,l.renderState)}if(Fe&&Fe.includes("camera-access")&&N){e.state.unbindTexture(),v=s.getBinding();for(let it=0;it<fe.length;it++){const gt=fe[it].camera;if(gt){let xt=b[gt];xt||(xt=new a_,b[gt]=xt);const nt=v.getCameraImage(gt);xt.sourceTexture=nt}}}}for(let fe=0;fe<B.length;fe++){const Te=L[fe],Fe=B[fe];Te!==null&&Fe!==void 0&&Fe.update(Te,Q,h||d)}Me&&Me(ne,Q),Q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Q}),T=null}const Ne=new c_;Ne.setAnimationLoop(we),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const _A=new tn,g_=new dt;g_.set(-1,0,0,0,1,0,0,0,1);function yA(r,e){function i(M,b){M.matrixAutoUpdate===!0&&M.updateMatrix(),b.value.copy(M.matrix)}function s(M,b){b.color.getRGB(M.fogColor.value,s_(r)),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function l(M,b,D,O,w){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(M,b):b.isMeshLambertMaterial?(c(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(M,b),v(M,b)):b.isMeshPhongMaterial?(c(M,b),_(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(M,b),x(M,b),b.isMeshPhysicalMaterial&&S(M,b,w)):b.isMeshMatcapMaterial?(c(M,b),T(M,b)):b.isMeshDepthMaterial?c(M,b):b.isMeshDistanceMaterial?(c(M,b),N(M,b)):b.isMeshNormalMaterial?c(M,b):b.isLineBasicMaterial?(d(M,b),b.isLineDashedMaterial&&p(M,b)):b.isPointsMaterial?g(M,b,D,O):b.isSpriteMaterial?h(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.bumpMap&&(M.bumpMap.value=b.bumpMap,i(b.bumpMap,M.bumpMapTransform),M.bumpScale.value=b.bumpScale,b.side===ti&&(M.bumpScale.value*=-1)),b.normalMap&&(M.normalMap.value=b.normalMap,i(b.normalMap,M.normalMapTransform),M.normalScale.value.copy(b.normalScale),b.side===ti&&M.normalScale.value.negate()),b.displacementMap&&(M.displacementMap.value=b.displacementMap,i(b.displacementMap,M.displacementMapTransform),M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,M.emissiveMapTransform)),b.specularMap&&(M.specularMap.value=b.specularMap,i(b.specularMap,M.specularMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const D=e.get(b),O=D.envMap,w=D.envMapRotation;O&&(M.envMap.value=O,M.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(w)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(g_),M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap&&(M.lightMap.value=b.lightMap,M.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,M.lightMapTransform)),b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,M.aoMapTransform))}function d(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform))}function p(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function g(M,b,D,O){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*D,M.scale.value=O*.5,b.map&&(M.map.value=b.map,i(b.map,M.uvTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function h(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function _(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function v(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function x(M,b){M.metalness.value=b.metalness,b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,M.metalnessMapTransform)),M.roughness.value=b.roughness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,M.roughnessMapTransform)),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function S(M,b,D){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,M.sheenColorMapTransform)),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,M.sheenRoughnessMapTransform))),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,M.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(M.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===ti&&M.clearcoatNormalScale.value.negate())),b.dispersion>0&&(M.dispersion.value=b.dispersion),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,M.iridescenceMapTransform)),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,M.transmissionMapTransform)),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(M.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(M.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,M.specularColorMapTransform)),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,b){b.matcap&&(M.matcap.value=b.matcap)}function N(M,b){const D=e.get(b).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function bA(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(w,B){const L=B.program;s.uniformBlockBinding(w,L)}function h(w,B){let L=l[w.id];L===void 0&&(M(w),L=_(w),l[w.id]=L,w.addEventListener("dispose",D));const z=B.program;s.updateUBOMapping(w,z);const A=e.render.frame;c[w.id]!==A&&(x(w),c[w.id]=A)}function _(w){const B=v();w.__bindingPointIndex=B;const L=r.createBuffer(),z=w.__size,A=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,z,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,B,L),L}function v(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const B=l[w.id],L=w.uniforms,z=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,B);for(let A=0,U=L.length;A<U;A++){const V=L[A];if(Array.isArray(V))for(let k=0,W=V.length;k<W;k++)S(V[k],A,k,z);else S(V,A,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(w,B,L,z){if(N(w,B,L,z)===!0){const A=w.__offset,U=w.value;if(Array.isArray(U)){let V=0;for(let k=0;k<U.length;k++){const W=U[k],he=b(W);T(W,w.__data,V),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(V+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,A,w.__data)}}function T(w,B,L){typeof w=="number"||typeof w=="boolean"?B[0]=w:w.isMatrix3?(B[0]=w.elements[0],B[1]=w.elements[1],B[2]=w.elements[2],B[3]=0,B[4]=w.elements[3],B[5]=w.elements[4],B[6]=w.elements[5],B[7]=0,B[8]=w.elements[6],B[9]=w.elements[7],B[10]=w.elements[8],B[11]=0):ArrayBuffer.isView(w)?B.set(new w.constructor(w.buffer,w.byteOffset,B.length)):w.toArray(B,L)}function N(w,B,L,z){const A=w.value,U=B+"_"+L;if(z[U]===void 0)return typeof A=="number"||typeof A=="boolean"?z[U]=A:ArrayBuffer.isView(A)?z[U]=A.slice():z[U]=A.clone(),!0;{const V=z[U];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return z[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(V.equals(A)===!1)return V.copy(A),!0}}return!1}function M(w){const B=w.uniforms;let L=0;const z=16;for(let U=0,V=B.length;U<V;U++){const k=Array.isArray(B[U])?B[U]:[B[U]];for(let W=0,he=k.length;W<he;W++){const oe=k[W],K=Array.isArray(oe.value)?oe.value:[oe.value];for(let F=0,G=K.length;F<G;F++){const ee=K[F],de=b(ee),xe=L%z,P=xe%de.boundary,q=xe+P;L+=P,q!==0&&z-q<de.storage&&(L+=z-q),oe.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=L,L+=de.storage}}}const A=L%z;return A>0&&(L+=z-A),w.__size=L,w.__cache={},this}function b(w){const B={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(B.boundary=4,B.storage=4):w.isVector2?(B.boundary=8,B.storage=8):w.isVector3||w.isColor?(B.boundary=16,B.storage=12):w.isVector4?(B.boundary=16,B.storage=16):w.isMatrix3?(B.boundary=48,B.storage=48):w.isMatrix4?(B.boundary=64,B.storage=64):w.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(B.boundary=16,B.storage=w.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",w),B}function D(w){const B=w.target;B.removeEventListener("dispose",D);const L=d.indexOf(B.__bindingPointIndex);d.splice(L,1),r.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function O(){for(const w in l)r.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:g,update:h,dispose:O}}const MA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function SA(){return qi===null&&(qi=new rS(MA,16,16,Ws,Na),qi.name="DFG_LUT",qi.minFilter=Fn,qi.magFilter=Fn,qi.wrapS=wa,qi.wrapT=wa,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class EA{constructor(e={}){const{canvas:i=MM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:S=gi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const N=S,M=new Set([mp,pp,hp]),b=new Set([gi,ea,sl,rl,fp,dp]),D=new Uint32Array(4),O=new Int32Array(4),w=new te;let B=null,L=null;const z=[],A=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1,W=null,he=null,oe=null,K=null;this._outputColorSpace=wi;let F=0,G=0,ee=null,de=-1,xe=null;const P=new on,q=new on;let Me=null;const we=new _t(0);let Ne=0,ne=i.width,Q=i.height,fe=1,Te=null,Fe=null;const Ze=new on(0,0,ne,Q),Ot=new on(0,0,ne,Q);let it=!1;const gt=new Mp;let xt=!1,nt=!1;const Zt=new tn,Kt=new te,Qt=new on,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function ct(){return ee===null?fe:1}let Y=s;function st(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",ni,!1),Y===null){const Z="webgl2";if(Y=st(Z,C),Y===null)throw st(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Nt("WebGLRenderer: "+C.message),C}let at,I,E,J,le,ve,Ae,Le,ge,me,Ce,Ge,Pe,Ue,Je,$e,ut,X,Re,ye,De,Be,Ee;function Ye(){at=new ST(Y),at.init(),De=new pA(Y,at),I=new mT(Y,at,e,De),E=new dA(Y,at),I.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),he=Y.createFramebuffer(),oe=Y.createFramebuffer(),K=Y.createFramebuffer(),J=new AT(Y),le=new J2,ve=new hA(Y,at,E,le,I,De,J),Ae=new MT(V),Le=new NS(Y),Be=new hT(Y,Le),ge=new ET(Y,Le,J,Be),me=new CT(Y,ge,Le,Be,J),X=new wT(Y,I,ve),Je=new gT(le),Ce=new Q2(V,Ae,at,I,Be,Je),Ge=new yA(V,le),Pe=new eA,Ue=new rA(at),ut=new dT(V,Ae,E,me,T,g),$e=new fA(V,me,I),Ee=new bA(Y,J,I,E),Re=new pT(Y,at,J),ye=new TT(Y,at,J),J.programs=Ce.programs,V.capabilities=I,V.extensions=at,V.properties=le,V.renderLists=Pe,V.shadowMap=$e,V.state=E,V.info=J}Ye(),N!==gi&&(U=new NT(N,i.width,i.height,p,l,c));const je=new vA(V,Y);this.xr=je,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ne,Q,!1))},this.getSize=function(C){return C.set(ne,Q)},this.setSize=function(C,Z,ce=!0){if(je.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,Q=Z,i.width=Math.floor(C*fe),i.height=Math.floor(Z*fe),ce===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(ne*fe,Q*fe).floor()},this.setDrawingBufferSize=function(C,Z,ce){ne=C,Q=Z,fe=ce,i.width=Math.floor(C*ce),i.height=Math.floor(Z*ce),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(N===gi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Ze)},this.setViewport=function(C,Z,ce,se){C.isVector4?Ze.set(C.x,C.y,C.z,C.w):Ze.set(C,Z,ce,se),E.viewport(P.copy(Ze).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(Ot)},this.setScissor=function(C,Z,ce,se){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,Z,ce,se),E.scissor(q.copy(Ot).multiplyScalar(fe).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){E.setScissorTest(it=C)},this.setOpaqueSort=function(C){Te=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ce=!0){let se=0;if(C){let re=!1;if(ee!==null){const Ie=ee.texture.format;re=M.has(Ie)}if(re){const Ie=ee.texture.type,Ve=b.has(Ie),Oe=ut.getClearColor(),We=ut.getClearAlpha(),Xe=Oe.r,et=Oe.g,pt=Oe.b;Ve?(D[0]=Xe,D[1]=et,D[2]=pt,D[3]=We,Y.clearBufferuiv(Y.COLOR,0,D)):(O[0]=Xe,O[1]=et,O[2]=pt,O[3]=We,Y.clearBufferiv(Y.COLOR,0,O))}else se|=Y.COLOR_BUFFER_BIT}Z&&(se|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Y.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),ut.dispose(),Pe.dispose(),Ue.dispose(),le.dispose(),Ae.dispose(),me.dispose(),Be.dispose(),Ee.dispose(),Ce.dispose(),je.dispose(),je.removeEventListener("sessionstart",hn),je.removeEventListener("sessionend",Cn),qn.stop()};function nn(C){C.preventDefault(),Cx("WebGLRenderer: Context Lost."),k=!0}function zt(){Cx("WebGLRenderer: Context Restored."),k=!1;const C=J.autoReset,Z=$e.enabled,ce=$e.autoUpdate,se=$e.needsUpdate,re=$e.type;Ye(),J.autoReset=C,$e.enabled=Z,$e.autoUpdate=ce,$e.needsUpdate=se,$e.type=re}function ni(C){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ii(C){const Z=C.target;Z.removeEventListener("dispose",ii),eo(Z)}function eo(C){to(C),le.remove(C)}function to(C){const Z=le.get(C).programs;Z!==void 0&&(Z.forEach(function(ce){Ce.releaseProgram(ce)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ce,se,re,Ie){Z===null&&(Z=Jt);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=Oa(C,Z,ce,se,re);E.setMaterial(se,Ve);let We=ce.index,Xe=1;if(se.wireframe===!0){if(We=ge.getWireframeAttribute(ce),We===void 0)return;Xe=2}const et=ce.drawRange,pt=ce.attributes.position;let Qe=et.start*Xe,Dt=(et.start+et.count)*Xe;Ie!==null&&(Qe=Math.max(Qe,Ie.start*Xe),Dt=Math.min(Dt,(Ie.start+Ie.count)*Xe)),We!==null?(Qe=Math.max(Qe,0),Dt=Math.min(Dt,We.count)):pt!=null&&(Qe=Math.max(Qe,0),Dt=Math.min(Dt,pt.count));const an=Dt-Qe;if(an<0||an===1/0)return;Be.setup(re,se,Oe,ce,We);let qt,Bt=Re;if(We!==null&&(qt=Le.get(We),Bt=ye,Bt.setIndex(qt)),re.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*ct()),Bt.setMode(Y.LINES)):Bt.setMode(Y.TRIANGLES);else if(re.isLine){let Ft=se.linewidth;Ft===void 0&&(Ft=1),E.setLineWidth(Ft*ct()),re.isLineSegments?Bt.setMode(Y.LINES):re.isLineLoop?Bt.setMode(Y.LINE_LOOP):Bt.setMode(Y.LINE_STRIP)}else re.isPoints?Bt.setMode(Y.POINTS):re.isSprite&&Bt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Bt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Ft=re._multiDrawStarts,He=re._multiDrawCounts,On=re._multiDrawCount,Mt=We?Le.get(We).bytesPerElement:1,bn=le.get(se).currentProgram.getUniforms();for(let ai=0;ai<On;ai++)bn.setValue(Y,"_gl_DrawID",ai),Bt.render(Ft[ai]/Mt,He[ai])}else if(re.isInstancedMesh)Bt.renderInstances(Qe,an,re.count);else if(ce.isInstancedBufferGeometry){const Ft=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,He=Math.min(ce.instanceCount,Ft);Bt.renderInstances(Qe,an,He)}else Bt.render(Qe,an)};function no(C,Z,ce){C.transparent===!0&&C.side===Aa&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Ua(C,Z,ce),C.side=hs,C.needsUpdate=!0,Ua(C,Z,ce),C.side=Aa):Ua(C,Z,ce)}this.compile=function(C,Z,ce=null){ce===null&&(ce=C),L=Ue.get(ce),L.init(Z),A.push(L),ce.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),C!==ce&&C.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights();const se=new Set;return C.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];no(Oe,ce,re),se.add(Oe)}else no(Ie,ce,re),se.add(Ie)}),L=A.pop(),se},this.compileAsync=function(C,Z,ce=null){const se=this.compile(C,Z,ce);return new Promise(re=>{function Ie(){if(se.forEach(function(Ve){le.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){re(C);return}setTimeout(Ie,10)}at.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Zs=null;function Gi(C){Zs&&Zs(C)}function hn(){qn.stop()}function Cn(){qn.start()}const qn=new c_;qn.setAnimationLoop(Gi),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){Zs=C,je.setAnimationLoop(C),C===null?qn.stop():qn.start()},je.addEventListener("sessionstart",hn),je.addEventListener("sessionend",Cn),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;W!==null&&W.renderStart(C,Z);const ce=je.enabled===!0&&je.isPresenting===!0,se=U!==null&&(ee===null||ce)&&U.begin(V,ee);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(Z),Z=je.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,Z,ee),L=Ue.get(C,A.length),L.init(Z),L.state.textureUnits=ve.getTextureUnits(),A.push(L),Zt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),gt.setFromProjectionMatrix(Zt,Ki,Z.reversedDepth),nt=this.localClippingEnabled,xt=Je.init(this.clippingPlanes,nt),B=Pe.get(C,z.length),B.init(),z.push(B),je.enabled===!0&&je.isPresenting===!0){const Ve=V.xr.getDepthSensingMesh();Ve!==null&&ms(Ve,Z,-1/0,V.sortObjects)}ms(C,Z,0,V.sortObjects),B.finish(),V.sortObjects===!0&&B.sort(Te,Fe,Z.reversedDepth),ht=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,ht&&ut.addToRenderList(B,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Je.beginShadows();const re=L.state.shadowsArray;if($e.render(re,C,Z),xt===!0&&Je.endShadows(),(se&&U.hasRenderPass())===!1){const Ve=B.opaque,Oe=B.transmissive;if(L.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Oe.length>0)for(let Xe=0,et=We.length;Xe<et;Xe++){const pt=We[Xe];pl(Ve,Oe,C,pt)}ht&&ut.render(C);for(let Xe=0,et=We.length;Xe<et;Xe++){const pt=We[Xe];hl(B,C,pt,pt.viewport)}}else Oe.length>0&&pl(Ve,Oe,C,Z),ht&&ut.render(C),hl(B,C,Z)}ee!==null&&G===0&&(ve.updateMultisampleRenderTarget(ee),ve.updateRenderTargetMipmap(ee)),se&&U.end(V),C.isScene===!0&&C.onAfterRender(V,C,Z),Be.resetDefaultState(),de=-1,xe=null,A.pop(),A.length>0?(L=A[A.length-1],ve.setTextureUnits(L.state.textureUnits),xt===!0&&Je.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?B=z[z.length-1]:B=null,W!==null&&W.renderEnd()};function ms(C,Z,ce,se){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||gt.intersectsSprite(C)){se&&Qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Zt);const Ve=me.update(C),Oe=C.material;Oe.visible&&B.push(C,Ve,Oe,ce,Qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||gt.intersectsObject(C))){const Ve=me.update(C),Oe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qt.copy(C.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Qt.copy(Ve.boundingSphere.center)),Qt.applyMatrix4(C.matrixWorld).applyMatrix4(Zt)),Array.isArray(Oe)){const We=Ve.groups;for(let Xe=0,et=We.length;Xe<et;Xe++){const pt=We[Xe],Qe=Oe[pt.materialIndex];Qe&&Qe.visible&&B.push(C,Ve,Qe,ce,Qt.z,pt)}}else Oe.visible&&B.push(C,Ve,Oe,ce,Qt.z,null)}}const Ie=C.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)ms(Ie[Ve],Z,ce,se)}function hl(C,Z,ce,se){const{opaque:re,transmissive:Ie,transparent:Ve}=C;L.setupLightsView(ce),xt===!0&&Je.setGlobalState(V.clippingPlanes,ce),se&&E.viewport(P.copy(se)),re.length>0&&gs(re,Z,ce),Ie.length>0&&gs(Ie,Z,ce),Ve.length>0&&gs(Ve,Z,ce),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function pl(C,Z,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[se.id]===void 0){const Qe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[se.id]=new Ji(1,1,{generateMipmaps:!0,type:Qe?Na:gi,minFilter:ks,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ie=L.state.transmissionRenderTarget[se.id],Ve=se.viewport||P;Ie.setSize(Ve.z*V.transmissionResolutionScale,Ve.w*V.transmissionResolutionScale);const Oe=V.getRenderTarget(),We=V.getActiveCubeFace(),Xe=V.getActiveMipmapLevel();V.setRenderTarget(Ie),V.getClearColor(we),Ne=V.getClearAlpha(),Ne<1&&V.setClearColor(16777215,.5),V.clear(),ht&&ut.render(ce);const et=V.toneMapping;V.toneMapping=Qi;const pt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),L.setupLightsView(se),xt===!0&&Je.setGlobalState(V.clippingPlanes,se),gs(C,ce,se),ve.updateMultisampleRenderTarget(Ie),ve.updateRenderTargetMipmap(Ie),at.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Dt=0,an=Z.length;Dt<an;Dt++){const qt=Z[Dt],{object:Bt,geometry:Ft,material:He,group:On}=qt;if(He.side===Aa&&Bt.layers.test(se.layers)){const Mt=He.side;He.side=ti,He.needsUpdate=!0,La(Bt,ce,se,Ft,He,On),He.side=Mt,He.needsUpdate=!0,Qe=!0}}Qe===!0&&(ve.updateMultisampleRenderTarget(Ie),ve.updateRenderTargetMipmap(Ie))}V.setRenderTarget(Oe,We,Xe),V.setClearColor(we,Ne),pt!==void 0&&(se.viewport=pt),V.toneMapping=et}function gs(C,Z,ce){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,Ie=C.length;re<Ie;re++){const Ve=C[re],{object:Oe,geometry:We,group:Xe}=Ve;let et=Ve.material;et.allowOverride===!0&&se!==null&&(et=se),Oe.layers.test(ce.layers)&&La(Oe,Z,ce,We,et,Xe)}}function La(C,Z,ce,se,re,Ie){C.onBeforeRender(V,Z,ce,se,re,Ie),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(V,Z,ce,se,C,Ie),re.transparent===!0&&re.side===Aa&&re.forceSinglePass===!1?(re.side=ti,re.needsUpdate=!0,V.renderBufferDirect(ce,Z,se,re,C,Ie),re.side=hs,re.needsUpdate=!0,V.renderBufferDirect(ce,Z,se,re,C,Ie),re.side=Aa):V.renderBufferDirect(ce,Z,se,re,C,Ie),C.onAfterRender(V,Z,ce,se,re,Ie)}function Ua(C,Z,ce){Z.isScene!==!0&&(Z=Jt);const se=le.get(C),re=L.state.lights,Ie=L.state.shadowsArray,Ve=re.state.version,Oe=Ce.getParameters(C,re.state,Ie,Z,ce,L.state.lightProbeGridArray),We=Ce.getProgramCacheKey(Oe);let Xe=se.programs;se.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,se.fog=Z.fog;const et=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;se.envMap=Ae.get(C.envMap||se.environment,et),se.envMapRotation=se.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",ii),Xe=new Map,se.programs=Xe);let pt=Xe.get(We);if(pt!==void 0){if(se.currentProgram===pt&&se.lightsStateVersion===Ve)return ia(C,Oe),pt}else Oe.uniforms=Ce.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,ce,Oe),C.onBeforeCompile(Oe,V),pt=Ce.acquireProgram(Oe,We),Xe.set(We,pt),se.uniforms=Oe.uniforms;const Qe=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Je.uniform),ia(C,Oe),se.needsLights=ml(C),se.lightsStateVersion=Ve,se.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=L.state.lightProbeGridArray.length>0,se.currentProgram=pt,se.uniformsList=null,pt}function na(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=nu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function ia(C,Z){const ce=le.get(C);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function xs(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;w.setFromMatrixPosition(Z.matrixWorld);for(let ce=0,se=C.length;ce<se;ce++){const re=C[ce];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Oa(C,Z,ce,se,re){Z.isScene!==!0&&(Z=Jt),ve.resetTextureUnits();const Ie=Z.fog,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Z.environment:null,Oe=ee===null?V.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Xe=Ae.get(se.envMap||Ve,We),et=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pt=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Qe=!!ce.morphAttributes.position,Dt=!!ce.morphAttributes.normal,an=!!ce.morphAttributes.color;let qt=Qi;se.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(qt=V.toneMapping);const Bt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ft=Bt!==void 0?Bt.length:0,He=le.get(se),On=L.state.lights;if(xt===!0&&(nt===!0||C!==xe)){const It=C===xe&&se.id===de;Je.setState(se,C,It)}let Mt=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==On.state.version||He.outputColorSpace!==Oe||re.isBatchedMesh&&He.batching===!1||!re.isBatchedMesh&&He.batching===!0||re.isBatchedMesh&&He.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&He.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&He.instancing===!1||!re.isInstancedMesh&&He.instancing===!0||re.isSkinnedMesh&&He.skinning===!1||!re.isSkinnedMesh&&He.skinning===!0||re.isInstancedMesh&&He.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&He.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&He.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&He.instancingMorph===!1&&re.morphTexture!==null||He.envMap!==Xe||se.fog===!0&&He.fog!==Ie||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Je.numPlanes||He.numIntersection!==Je.numIntersection)||He.vertexAlphas!==et||He.vertexTangents!==pt||He.morphTargets!==Qe||He.morphNormals!==Dt||He.morphColors!==an||He.toneMapping!==qt||He.morphTargetsCount!==Ft||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,He.__version=se.version);let bn=He.currentProgram;Mt===!0&&(bn=Ua(se,Z,re),W&&se.isNodeMaterial&&W.onUpdateProgram(se,bn,He));let ai=!1,Ri=!1,si=!1;const Gt=bn.getUniforms(),sn=He.uniforms;if(E.useProgram(bn.program)&&(ai=!0,Ri=!0,si=!0),se.id!==de&&(de=se.id,Ri=!0),He.needsLights){const It=xs(L.state.lightProbeGridArray,re);He.lightProbeGrid!==It&&(He.lightProbeGrid=It,Ri=!0)}if(ai||xe!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Gt.setValue(Y,"projectionMatrix",C.projectionMatrix),Gt.setValue(Y,"viewMatrix",C.matrixWorldInverse);const Hi=Gt.map.cameraPosition;Hi!==void 0&&Hi.setValue(Y,Kt.setFromMatrixPosition(C.matrixWorld)),I.logarithmicDepthBuffer&&Gt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),xe!==C&&(xe=C,Ri=!0,si=!0)}if(He.needsLights&&(On.state.directionalShadowMap.length>0&&Gt.setValue(Y,"directionalShadowMap",On.state.directionalShadowMap,ve),On.state.spotShadowMap.length>0&&Gt.setValue(Y,"spotShadowMap",On.state.spotShadowMap,ve),On.state.pointShadowMap.length>0&&Gt.setValue(Y,"pointShadowMap",On.state.pointShadowMap,ve)),re.isSkinnedMesh){Gt.setOptional(Y,re,"bindMatrix"),Gt.setOptional(Y,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Gt.setValue(Y,"boneTexture",It.boneTexture,ve))}re.isBatchedMesh&&(Gt.setOptional(Y,re,"batchingTexture"),Gt.setValue(Y,"batchingTexture",re._matricesTexture,ve),Gt.setOptional(Y,re,"batchingIdTexture"),Gt.setValue(Y,"batchingIdTexture",re._indirectTexture,ve),Gt.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&Gt.setValue(Y,"batchingColorTexture",re._colorsTexture,ve));const Ni=ce.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&X.update(re,ce,bn),(Ri||He.receiveShadow!==re.receiveShadow)&&(He.receiveShadow=re.receiveShadow,Gt.setValue(Y,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Z.environment!==null&&(sn.envMapIntensity.value=Z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=SA()),Ri){if(Gt.setValue(Y,"toneMappingExposure",V.toneMappingExposure),He.needsLights&&pn(sn,si),Ie&&se.fog===!0&&Ge.refreshFogUniforms(sn,Ie),Ge.refreshMaterialUniforms(sn,se,fe,Q,L.state.transmissionRenderTarget[C.id]),He.needsLights&&He.lightProbeGrid){const It=He.lightProbeGrid;sn.probesSH.value=It.texture,sn.probesMin.value.copy(It.boundingBox.min),sn.probesMax.value.copy(It.boundingBox.max),sn.probesResolution.value.copy(It.resolution)}nu.upload(Y,na(He),sn,ve)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(nu.upload(Y,na(He),sn,ve),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(Y,"center",re.center),Gt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),Gt.setValue(Y,"normalMatrix",re.normalMatrix),Gt.setValue(Y,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const It=se.uniformsGroups;for(let Hi=0,Pa=It.length;Hi<Pa;Hi++){const vs=It[Hi];Ee.update(vs,bn),Ee.bind(vs,bn)}}return bn}function pn(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(C,Z,ce){const se=le.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=Z,le.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const ce=le.get(C);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,ce=0){ee=C,F=Z,G=ce;let se=null,re=!1,Ie=!1;if(C){const Oe=le.get(C);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),P.copy(C.viewport),q.copy(C.scissor),Me=C.scissorTest,E.viewport(P),E.scissor(q),E.setScissorTest(Me),de=-1;return}else if(Oe.__webglFramebuffer===void 0)ve.setupRenderTarget(C);else if(Oe.__hasExternalTextures)ve.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&le.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?se=Xe[Z][ce]:se=Xe[Z],re=!0):C.samples>0&&ve.useMultisampledRTT(C)===!1?se=le.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?se=Xe[ce]:se=Xe,P.copy(C.viewport),q.copy(C.scissor),Me=C.scissorTest}else P.copy(Ze).multiplyScalar(fe).floor(),q.copy(Ot).multiplyScalar(fe).floor(),Me=it;if(ce!==0&&(se=he),E.bindFramebuffer(Y.FRAMEBUFFER,se)&&E.drawBuffers(C,se),E.viewport(P),E.scissor(q),E.setScissorTest(Me),re){const Oe=le.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,ce)}else if(Ie){const Oe=Z;for(let We=0;We<C.textures.length;We++){const Xe=le.get(C.textures[We]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ce,Oe)}}else if(C!==null&&ce!==0){const Oe=le.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,ce)}de=-1},this.readRenderTargetPixels=function(C,Z,ce,se,re,Ie,Ve,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){E.bindFramebuffer(Y.FRAMEBUFFER,We);try{const Xe=C.textures[Oe],et=Xe.format,pt=Xe.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!I.textureFormatReadable(et)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-se&&ce>=0&&ce<=C.height-re&&Y.readPixels(Z,ce,se,re,De.convert(et),De.convert(pt),Ie)}finally{const Xe=ee!==null?le.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ce,se,re,Ie,Ve,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(Z>=0&&Z<=C.width-se&&ce>=0&&ce<=C.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,We);const Xe=C.textures[Oe],et=Xe.format,pt=Xe.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!I.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(Z,ce,se,re,De.convert(et),De.convert(pt),0);const Dt=ee!==null?le.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Dt);const an=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await SM(Y,an,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.deleteBuffer(Qe),Y.deleteSync(an),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ce=0){const se=Math.pow(2,-ce),re=Math.floor(C.image.width*se),Ie=Math.floor(C.image.height*se),Ve=Z!==null?Z.x:0,Oe=Z!==null?Z.y:0;ve.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ce,0,0,Ve,Oe,re,Ie),E.unbindTexture()},this.copyTextureToTexture=function(C,Z,ce=null,se=null,re=0,Ie=0){let Ve,Oe,We,Xe,et,pt,Qe,Dt,an;const qt=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ce!==null)Ve=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Xe=ce.min.x,et=ce.min.y,pt=ce.isBox3?ce.min.z:0;else{const sn=Math.pow(2,-re);Ve=Math.floor(qt.width*sn),Oe=Math.floor(qt.height*sn),C.isDataArrayTexture?We=qt.depth:C.isData3DTexture?We=Math.floor(qt.depth*sn):We=1,Xe=0,et=0,pt=0}se!==null?(Qe=se.x,Dt=se.y,an=se.z):(Qe=0,Dt=0,an=0);const Bt=De.convert(Z.format),Ft=De.convert(Z.type);let He;Z.isData3DTexture?(ve.setTexture3D(Z,0),He=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ve.setTexture2DArray(Z,0),He=Y.TEXTURE_2D_ARRAY):(ve.setTexture2D(Z,0),He=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const On=E.getParameter(Y.UNPACK_ROW_LENGTH),Mt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),bn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ai=E.getParameter(Y.UNPACK_SKIP_ROWS),Ri=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,qt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,qt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xe),E.pixelStorei(Y.UNPACK_SKIP_ROWS,et),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,pt);const si=C.isDataArrayTexture||C.isData3DTexture,Gt=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const sn=le.get(C),Ni=le.get(Z),It=le.get(sn.__renderTarget),Hi=le.get(Ni.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,It.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Pa=0;Pa<We;Pa++)si&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(C).__webglTexture,re,pt+Pa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(Z).__webglTexture,Ie,an+Pa)),Y.blitFramebuffer(Xe,et,Ve,Oe,Qe,Dt,Ve,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||C.isRenderTargetTexture||le.has(C)){const sn=le.get(C),Ni=le.get(Z);E.bindFramebuffer(Y.READ_FRAMEBUFFER,oe),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,K);for(let It=0;It<We;It++)si?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,sn.__webglTexture,re,pt+It):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,sn.__webglTexture,re),Gt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ni.__webglTexture,Ie,an+It):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ni.__webglTexture,Ie),re!==0?Y.blitFramebuffer(Xe,et,Ve,Oe,Qe,Dt,Ve,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Gt?Y.copyTexSubImage3D(He,Ie,Qe,Dt,an+It,Xe,et,Ve,Oe):Y.copyTexSubImage2D(He,Ie,Qe,Dt,Xe,et,Ve,Oe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Gt?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(He,Ie,Qe,Dt,an,Ve,Oe,We,Bt,Ft,qt.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(He,Ie,Qe,Dt,an,Ve,Oe,We,Bt,qt.data):Y.texSubImage3D(He,Ie,Qe,Dt,an,Ve,Oe,We,Bt,Ft,qt):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,Qe,Dt,Ve,Oe,Bt,Ft,qt.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,Qe,Dt,qt.width,qt.height,Bt,qt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,Qe,Dt,Ve,Oe,Bt,Ft,qt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,On),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,bn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ai),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ri),Ie===0&&Z.generateMipmaps&&Y.generateMipmap(He),E.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ve.setTextureCube(C,0):C.isData3DTexture?ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ve.setTexture2DArray(C,0):ve.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){F=0,G=0,ee=null,E.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const TA=({currentSection:r})=>{const e=ke.useRef(null),{setCursorMode:i,resetCursor:s,prefersReducedMotion:l}=Wn(),[c,d]=ke.useState(!0);return ke.useEffect(()=>{const p=e.current;if(!p)return;const g=document.createElement("canvas");if(!(g.getContext("webgl")||g.getContext("experimental-webgl"))){d(!1);return}let _=p.clientWidth,v=p.clientHeight;const x=new eS;x.fog=new bp(328965,.04);const S=new mi(50,_/v,.1,100);S.position.set(0,0,10);const T=new EA({antialias:!0,alpha:!0,powerPreference:"high-performance"});T.setSize(_,v),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.toneMapping=cp,T.toneMappingExposure=1.1,p.appendChild(T.domElement);const N=new ES(1577486,2);x.add(N);const M=new nv(16731648,3.2,22);M.position.set(4,3,4),x.add(M);const b=new nv(959977,1.8,20);b.position.set(-4,-3,3),x.add(b);const D=new tl;x.add(D);const O=new Ep(1.6,1),w=new _S({color:16731648,wireframe:!0,transparent:!0,opacity:.4,roughness:.2,metalness:.9}),B=new ei(O,w);B.name="ai-neural-core",D.add(B);const L=new fu(.7,16,16),z=new kr({color:16736798,wireframe:!0,transparent:!0,opacity:.65}),A=new ei(L,z);D.add(A);const U=new du(2.4,.02,16,64),V=new kr({color:16731648,transparent:!0,opacity:.5}),k=new ei(U,V);k.rotation.x=Math.PI/3,k.rotation.y=Math.PI/6,D.add(k);const W=new du(2.8,.015,16,64),he=new kr({color:14735568,transparent:!0,opacity:.35}),oe=new ei(W,he);oe.rotation.x=-Math.PI/4,oe.rotation.y=-Math.PI/3,D.add(oe);const K=6,F=[],G=new fu(.08,12,12),ee=new kr({color:16731648});for(let st=0;st<K;st++){const at=new ei(G,ee);F.push(at),D.add(at)}const de=1e3,xe=new Float32Array(de*3),P=new Float32Array(de*3),q=new _t(16731648),Me=new _t(14735568),we=new _t(3718648);for(let st=0;st<de;st++){const at=st*3;xe[at]=(Math.random()-.5)*35,xe[at+1]=(Math.random()-.5)*35,xe[at+2]=(Math.random()-.5)*20-2;const I=Math.random()>.6?q:Math.random()>.3?Me:we;P[at]=I.r,P[at+1]=I.g,P[at+2]=I.b}const Ne=new Hn;Ne.setAttribute("position",new xi(xe,3)),Ne.setAttribute("color",new xi(P,3));const ne=new n_({size:.08,vertexColors:!0,transparent:!0,opacity:.75,blending:dh}),Q=new dS(Ne,ne);x.add(Q);const fe=40,Te=new Hn,Fe=new Float32Array(fe*2*3);for(let st=0;st<fe;st++){const at=Math.floor(Math.random()*200)*3,I=Math.floor(Math.random()*200)*3;Fe[st*6]=xe[at],Fe[st*6+1]=xe[at+1],Fe[st*6+2]=xe[at+2],Fe[st*6+3]=xe[I],Fe[st*6+4]=xe[I+1],Fe[st*6+5]=xe[I+2]}Te.setAttribute("position",new xi(Fe,3));const Ze=new t_({color:16731648,transparent:!0,opacity:.2}),Ot=new fS(Te,Ze);x.add(Ot);const it={x:0,y:0,targetX:0,targetY:0},gt=new wS,xt=new bt;let nt=!1;const Zt=st=>{const at=st.clientX,I=st.clientY;it.targetX=at/window.innerWidth*2-1,it.targetY=-(I/window.innerHeight)*2+1,xt.x=at/window.innerWidth*2-1,xt.y=-(I/window.innerHeight)*2+1};window.addEventListener("mousemove",Zt,{passive:!0});const Kt=()=>{p&&(_=p.clientWidth,v=p.clientHeight,S.aspect=_/v,S.updateProjectionMatrix(),T.setSize(_,v))};window.addEventListener("resize",Kt);let Qt=new CS,Jt;const ht={y:0,z:10},ct={x:2.8,y:0,z:0},Y=()=>{Qt.getDelta();const st=Qt.getElapsedTime();it.x+=(it.targetX-it.x)*.05,it.y+=(it.targetY-it.y)*.05,r==="hero"?(ct.x=window.innerWidth>1024?2.5:0,ct.y=window.innerWidth>1024?0:.8,ct.z=0,ht.z=9.5,ht.y=0):r==="about"?(ct.x=window.innerWidth>1024?-3:0,ct.y=.5,ct.z=-1,ht.z=10.5,ht.y=-1):r==="education"?(ct.x=window.innerWidth>1024?3.2:0,ct.y=-.5,ct.z=-2,ht.z=11,ht.y=-2):r==="projects"?(ct.x=0,ct.y=1.2,ct.z=-3,ht.z=11.5,ht.y=-3):r==="skills"?(ct.x=window.innerWidth>1024?-2.8:0,ct.y=0,ct.z=-2,ht.z=11,ht.y=-4):r==="certifications"?(ct.x=window.innerWidth>1024?2.8:0,ct.y=-.5,ct.z=-2,ht.z=11,ht.y=-5):r==="contact"&&(ct.x=0,ct.y=0,ct.z=0,ht.z=9,ht.y=-6);const at=l?.08:.04;if(D.position.x+=(ct.x-D.position.x)*at,D.position.y+=(ct.y-D.position.y)*at,D.position.z+=(ct.z-D.position.z)*at,l||(S.position.x=it.x*.8,S.position.y+=(ht.y+it.y*.5-S.position.y)*.05,S.position.z+=(ht.z-S.position.z)*.05,S.lookAt(D.position.x*.3,D.position.y*.3,0)),!l){const Ae=nt?1.8:1;B.rotation.x+=.004*Ae,B.rotation.y+=.007*Ae,A.rotation.y-=.01*Ae,A.rotation.z+=.005*Ae,k.rotation.z+=.008*Ae,oe.rotation.z-=.006*Ae,Q.rotation.y=st*.02,Ot.rotation.y=st*.02,F.forEach((Le,ge)=>{const me=st*.6+ge*Math.PI*2/K,Ce=2.4;Le.position.set(Math.cos(me)*Ce,Math.sin(me)*Math.cos(me*.5)*1.5,Math.sin(me)*Ce*.8)})}gt.setFromCamera(xt,S);const I=[B,A,k,oe,...F];gt.intersectObjects(I).length>0?nt||(nt=!0,i("three","INSPECT 3D CORE")):nt&&(nt=!1,s());const J=nt?1.14:1;D.scale.lerp(new te(J,J,J),.08);const le=nt?5.2:3.2;M.intensity=Nx.lerp(M.intensity,le,.08);const ve=nt?.85:.4;w.opacity=Nx.lerp(w.opacity,ve,.1),nt?w.color.lerp(new _t(16742968),.1):w.color.lerp(new _t(16731648),.1),T.render(x,S),Jt=requestAnimationFrame(Y)};return Jt=requestAnimationFrame(Y),()=>{window.removeEventListener("mousemove",Zt),window.removeEventListener("resize",Kt),cancelAnimationFrame(Jt),T.dispose(),O.dispose(),w.dispose(),L.dispose(),z.dispose(),U.dispose(),V.dispose(),W.dispose(),he.dispose(),G.dispose(),ee.dispose(),Ne.dispose(),ne.dispose(),Te.dispose(),Ze.dispose(),p.contains(T.domElement)&&p.removeChild(T.domElement)}},[r,l,i,s]),c?m.jsx("div",{ref:e,id:"three-canvas-container",className:"fixed inset-0 pointer-events-none z-0 overflow-hidden select-none","aria-hidden":"true"}):m.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#07090e] via-[#0b101b] to-[#07090e] bg-grid-pattern opacity-80"})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Nv=r=>{const e=wA(r);return e.charAt(0).toUpperCase()+e.slice(1)},x_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),CA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=ke.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},g)=>ke.createElement("svg",{ref:g,...RA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:x_("lucide",l),...!c&&!CA(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,_])=>ke.createElement(h,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(r,e)=>{const i=ke.forwardRef(({className:s,...l},c)=>ke.createElement(NA,{ref:c,iconNode:e,className:x_(`lucide-${AA(Nv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Nv(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],LA=lt("arrow-down",DA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],OA=lt("arrow-up",UA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Tp=lt("award",PA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],zA=lt("book-open",IA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],FA=lt("bot",BA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],HA=lt("brain-circuit",GA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],v_=lt("brain",kA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],jA=lt("briefcase",VA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],WA=lt("calendar",XA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],__=lt("check",qA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ZA=lt("circle-check-big",YA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],js=lt("circle-check",KA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],y_=lt("cloud",QA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],$A=lt("code-xml",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],t3=lt("copy",e3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],i3=lt("corner-down-left",n3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],b_=lt("cpu",a3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],M_=lt("database",s3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],S_=lt("disc-3",r3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],E_=lt("download",o3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],c3=lt("external-link",l3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],f3=lt("file-text",u3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],h3=lt("flame",d3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],cl=lt("github",p3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],T_=lt("graduation-cap",m3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],x3=lt("image",g3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ap=lt("layers",v3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],A_=lt("linkedin",_3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],b3=lt("loader-circle",y3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],hu=lt("mail",M3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],wp=lt("map-pin",S3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],T3=lt("menu",E3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],pu=lt("music",A3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],w_=lt("network",w3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]],R3=lt("package-search",C3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],D3=lt("pause",N3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],U3=lt("play",L3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Dv=lt("radio",O3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Lv=lt("send",P3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],z3=lt("shield-check",I3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],F3=lt("shield",B3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],H3=lt("smartphone",G3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],$i=lt("sparkles",k3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Mu=lt("terminal",V3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],X3=lt("trending-up",j3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],sp=lt("volume-2",W3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],rp=lt("volume-x",q3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$r=lt("x",Y3);class Z3{constructor(){this.ctx=null,this.enabled=!1}isEnabled(){return this.enabled}setEnabled(e){if(this.enabled=e,e&&!this.ctx)try{const i=window.AudioContext||window.webkitAudioContext;this.ctx=new i}catch{this.enabled=!1}}playHover(){if(!(!this.enabled||!this.ctx))try{this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.04),i.gain.setValueAtTime(.015,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.05),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playClick(){if(!(!this.enabled||!this.ctx))try{this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.08),i.gain.setValueAtTime(.03,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.08),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playModeChange(){if(!(!this.enabled||!this.ctx))try{this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1040,this.ctx.currentTime+.12),i.gain.setValueAtTime(.02,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.12),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.12)}catch{}}}const dn=new Z3,Sn=({children:r,cursorMode:e="pointer",cursorLabel:i,cursorColor:s,className:l="",intensity:c=.25,maxDistance:d=8,onClick:p,onMouseEnter:g,onMouseLeave:h,..._})=>{const{setCursorMode:v,resetCursor:x,isTouchDevice:S,prefersReducedMotion:T}=Wn(),N=ke.useRef(null);ke.useEffect(()=>{const O=N.current;if(!O||S||T)return;let w=0,B=0,L=0,z=0,A;const U=70,V=he=>{if(!O)return;const oe=O.getBoundingClientRect();if(oe.bottom<0||oe.top>window.innerHeight||oe.right<0||oe.left>window.innerWidth){w=0,B=0;return}const K=oe.left+oe.width/2,F=oe.top+oe.height/2,G=he.clientX-K,ee=he.clientY-F,de=Math.hypot(G,ee),xe=Math.max(oe.width,oe.height)*.5+U;if(de<xe){const P=1-de/xe,q=P*P;w=Math.max(Math.min(G*c*q,d),-d),B=Math.max(Math.min(ee*c*q,d),-d)}else w=0,B=0},k=()=>{w=0,B=0},W=()=>{L+=(w-L)*.14,z+=(B-z)*.14,Math.abs(L)>.04||Math.abs(z)>.04||Math.abs(w)>.04?O.style.transform=`translate3d(${L.toFixed(2)}px, ${z.toFixed(2)}px, 0)`:O.style.transform&&O.style.transform!=="translate3d(0px, 0px, 0px)"&&(O.style.transform="translate3d(0px, 0px, 0px)"),A=requestAnimationFrame(W)};return window.addEventListener("mousemove",V,{passive:!0}),document.addEventListener("mouseleave",k),A=requestAnimationFrame(W),()=>{window.removeEventListener("mousemove",V),document.removeEventListener("mouseleave",k),cancelAnimationFrame(A),O&&(O.style.transform="")}},[c,d,S,T]);const M=O=>{dn.playHover(),v(e,i,s),g==null||g(O)},b=O=>{x(),h==null||h(O)},D=O=>{dn.playClick(),p==null||p(O)};return m.jsx("button",{ref:N,onMouseEnter:M,onMouseLeave:b,onClick:D,className:`transition-[box-shadow,background-color,border-color,color] will-change-transform ${l}`,..._,children:r})},Uv=[{id:"about",label:"About"},{id:"education",label:"Education"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"certifications",label:"Certifications"},{id:"contact",label:"Contact"}],K3=({currentSection:r,onNavigate:e,onToggleTerminal:i,onOpenMusicStudio:s})=>{const{setCursorMode:l,resetCursor:c}=Wn(),[d,p]=ke.useState(!1),[g,h]=ke.useState(!1),[_,v]=ke.useState(!1);ke.useEffect(()=>{const T=()=>{p(window.scrollY>40)};return window.addEventListener("scroll",T,{passive:!0}),()=>window.removeEventListener("scroll",T)},[]);const x=()=>{const T=!_;dn.setEnabled(T),v(T),T&&dn.playModeChange()},S=T=>{h(!1),e(T),dn.playClick()};return m.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 md:py-4 ${d?"bg-[#050505]/80 backdrop-blur-xl border-b border-[#ffffff08] shadow-lg shadow-black/60":"bg-transparent"}`,children:[m.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[m.jsxs(Sn,{onClick:()=>S("hero"),cursorLabel:"HOME",className:"flex items-center gap-3 group text-left focus:outline-none",children:[m.jsx("div",{className:"w-9 h-9 rounded-full bg-[#ffffff05] border border-[#ffffff15] flex items-center justify-center text-[#ff4e00] font-serif italic text-base tracking-wider shadow-[0_0_15px_rgba(255,78,0,0.2)] group-hover:border-[#ff4e00]/60 transition-colors",children:"SG"}),m.jsxs("div",{className:"hidden sm:flex flex-col",children:[m.jsx("span",{className:"text-[9px] tracking-[0.4em] uppercase text-[#8e9299] -mb-0.5",children:"Neural Portfolio"}),m.jsx("span",{className:"text-base sm:text-lg font-light tracking-tight italic font-serif text-[#e0d8d0] group-hover:text-white transition-colors",children:"Saksham Gupta"})]})]}),m.jsx("nav",{className:"hidden lg:flex items-center gap-1.5 bg-[#ffffff05] backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-[#ffffff10] shadow-inner",children:Uv.map(T=>{const N=r===T.id;return m.jsxs("button",{onClick:()=>S(T.id),onMouseEnter:()=>{dn.playHover(),l("pointer",T.label.toUpperCase())},onMouseLeave:c,className:`relative px-3.5 py-1.5 text-[11px] uppercase tracking-widest transition-all duration-200 rounded-full focus:outline-none ${N?"text-[#ff4e00] font-semibold":"text-[#8e9299] hover:text-[#e0d8d0] hover:bg-[#ffffff08]"}`,children:[N&&m.jsx("span",{className:"absolute inset-0 bg-[#ff4e0015] border border-[#ff4e0040] rounded-full -z-10 shadow-[0_0_12px_rgba(255,78,0,0.25)]"}),T.label]},T.id)})}),m.jsxs("div",{className:"flex items-center gap-2.5",children:[s&&m.jsxs(Sn,{onClick:s,cursorLabel:"AI MUSIC",title:"Open AI Music Generator",className:"h-9 px-3 rounded-full bg-[#ff4e00]/10 border border-[#ff4e00]/40 text-[#ff4e00] hover:bg-[#ff4e00]/20 hover:border-[#ff4e00] transition-all flex items-center gap-1.5 text-xs font-mono font-medium shadow-[0_0_15px_rgba(255,78,0,0.2)]","aria-label":"Open AI Music Studio",children:[m.jsx(pu,{className:"w-3.5 h-3.5"}),m.jsx("span",{className:"hidden sm:inline",children:"AI Music"})]}),m.jsx(Sn,{onClick:x,cursorLabel:_?"MUTE":"UNMUTE",title:_?"Sound Synthesizer Active (Click to mute)":"Sound Synthesizer Off (Click to enable audio)",className:`w-9 h-9 rounded-full border transition-all text-xs flex items-center justify-center ${_?"bg-[#ff4e0015] border-[#ff4e00]/60 text-[#ff4e00] shadow-[0_0_15px_rgba(255,78,0,0.3)]":"bg-[#ffffff05] border-[#ffffff15] text-[#8e9299] hover:text-[#e0d8d0] hover:border-[#ffffff30]"}`,"aria-label":"Toggle Sound",children:_?m.jsx(sp,{className:"w-4 h-4"}):m.jsx(rp,{className:"w-4 h-4"})}),i&&m.jsx(Sn,{onClick:i,cursorLabel:"EXEC",title:"Open Neural Command Console",className:"w-9 h-9 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-[#ff4e00] hover:border-[#ff4e00]/50 transition-colors hidden sm:flex items-center justify-center","aria-label":"Toggle Console",children:m.jsx(Mu,{className:"w-4 h-4"})}),m.jsx(Sn,{onClick:()=>S("contact"),cursorLabel:"CONNECT",className:"hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-[#e0d8d0] bg-[#ffffff05] border border-[#ffffff15] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0008] transition-all",children:"Connect"}),m.jsx("button",{onClick:()=>h(!g),className:"lg:hidden p-2 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-[#e0d8d0]","aria-label":"Toggle Menu",children:g?m.jsx($r,{className:"w-5 h-5"}):m.jsx(T3,{className:"w-5 h-5"})})]})]}),g&&m.jsxs("div",{className:"lg:hidden mt-3 p-4 bg-[#050505]/95 backdrop-blur-2xl border border-[#ffffff10] rounded-2xl shadow-2xl flex flex-col gap-2",children:[Uv.map(T=>{const N=r===T.id;return m.jsx("button",{onClick:()=>S(T.id),className:`w-full text-left px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-widest transition-colors ${N?"bg-[#ff4e0015] text-[#ff4e00] border border-[#ff4e0040]":"text-[#8e9299] hover:bg-[#ffffff08] hover:text-[#e0d8d0]"}`,children:T.label},T.id)}),m.jsxs("div",{className:"pt-2 border-t border-[#ffffff10] flex flex-col gap-2",children:[s&&m.jsxs("button",{onClick:()=>{h(!1),s()},className:"w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#ff4e00]/15 border border-[#ff4e00]/40 text-[#ff4e00] text-xs font-mono font-bold uppercase tracking-wider",children:[m.jsx(pu,{className:"w-4 h-4"}),m.jsx("span",{children:"Open AI Music Studio"})]}),m.jsxs("div",{className:"flex items-center justify-between pt-1",children:[m.jsxs("button",{onClick:x,className:"flex items-center gap-2 text-xs text-[#8e9299] px-2 py-1.5 rounded-lg hover:text-white",children:[_?m.jsx(sp,{className:"w-4 h-4 text-[#ff4e00]"}):m.jsx(rp,{className:"w-4 h-4"}),m.jsx("span",{children:_?"Sound Enabled":"Sound Muted"})]}),m.jsx("button",{onClick:()=>S("contact"),className:"px-4 py-1.5 text-xs font-semibold uppercase text-[#ff4e00] bg-[#ff4e00]/10 border border-[#ff4e00]/40 rounded-full",children:"Connect"})]})]})]})]})},Fi={name:"Saksham Gupta",title:"AI/ML Student & AI Engineer",tagline:"AI Engineering · LLMs · Machine Learning · Cloud Systems",institution:"Delhi Technical Campus · GGSIPU, New Delhi",shortBio:"B.Tech student in Artificial Intelligence & Machine Learning. Focused on designing production-grade AI pipelines, LLM-powered autonomous workflows, time-series forecasting engines, and resilient cloud architectures."},Ci={degree:"Bachelor of Technology (B.Tech)",field:"Artificial Intelligence & Machine Learning",institution:"Delhi Technical Campus (Affiliated with GGSIPU)",location:"New Delhi, India",timeline:"2024 – 2028",semesterInfo:"5th Semester · 3rd Year",coursework:[{code:"CS-301",title:"Data Structures & Algorithms",category:"Core Computer Science"},{code:"CS-304",title:"Database Management Systems (DBMS)",category:"Data Architecture"},{code:"MA-202",title:"Probability & Statistics",category:"Mathematical Foundations"},{code:"AI-302",title:"Machine Learning Fundamentals",category:"Core AI / ML"}]},mu=[{id:"ai-analytics-forecasting",title:"AI Analytics & Forecasting Engine",category:"AI / ML",summary:"Production-oriented time-series forecasting backend with multi-model comparison and REST API.",description:"A modular, high-throughput time-series forecasting platform comparing statistical and gradient-boosted models in real time. Features automated feature engineering, outlier detection, and REST endpoints for asynchronous predictions.",features:["Multi-model automated benchmark comparing Prophet, ARIMA, and XGBoost","High-performance asynchronous prediction pipelines via FastAPI","Relational metric persistence & historical evaluation using PostgreSQL & SQLAlchemy","Automated backtesting and rolling window error validation (MAPE / RMSE)"],technologies:["Python","FastAPI","PostgreSQL","Prophet","ARIMA","XGBoost","SQLAlchemy"],githubUrl:"https://github.com/saksham-AI500/portfolio",stats:"Multi-model latency < 120ms",accent:"#38bdf8",icon:"TrendingUp"},{id:"questforge",title:"QuestForge",category:"Mobile",summary:"Offline-first RPG-inspired productivity app with gamified task management.",description:"A gamified task and habit management ecosystem built for seamless offline productivity. Integrates experience progression, stat mechanics, and resilient local persistence.",features:["Fully offline-first mobile architecture with SQLite caching and persistent state","Gamified quest generation with real-time level progression, stat scaling, and rewards","Smooth responsive gestures and fluid mobile UI crafted with React Native and Expo","Automated habit streak analytics and customizable recurring quest archetypes"],technologies:["React Native","Expo","SQLite","JavaScript"],githubUrl:"https://github.com/saksham-AI500/portfolio",stats:"100% Offline Resilience",accent:"#818cf8",icon:"Shield"},{id:"ai-notes-automation",title:"AI Notes Automation for Obsidian",category:"AI Engineering",summary:"Obsidian plugin integrating multiple LLM providers for automated note generation and organisation.",description:"An advanced knowledge automation plugin for Obsidian that synthesizes unstructured thoughts into structured, cross-referenced Markdown notes using state-of-the-art LLMs.",features:["Multi-provider LLM integration supporting Gemini, Anthropic, and OpenAI endpoints","Automated contextual taxonomy, bidirectional link discovery, and smart tagging","Token-conscious chunking with custom system prompts for technical documentation","Local-first vault security ensuring user privacy and API key management"],technologies:["LLM APIs","NLP","JavaScript","Obsidian"],githubUrl:"https://github.com/saksham-AI500/portfolio",stats:"Zero-latency markdown sync",accent:"#34d399",icon:"BrainCircuit"},{id:"supply-chain-intelligence",title:"Supply Chain Intelligence Platform",category:"Backend",summary:"Interactive analytics dashboard for supply chain optimisation and KPI tracking.",description:"An enterprise-scale supply chain logistics tracker unifying distributed shipping data into real-time operational insights, bottleneck forecasts, and KPI metrics.",features:["Automated ETL ingestion pipeline cleaning heterogeneous vendor shipments","Predictive inventory stockout alarms utilizing statistical thresholding","Relational data modeling optimized for multi-dimensional aggregation queries","Interactive executive KPI views with dynamic filtering and supplier risk scoring"],technologies:["Python","Data Analytics","ETL","SQL","Visualisation"],githubUrl:"https://github.com/saksham-AI500/portfolio",stats:"Real-time vendor KPI tracking",accent:"#f59e0b",icon:"PackageSearch"}],iu=[{category:"Programming",description:"Foundational languages for systems, algorithms, and data modeling",skills:[{name:"Python",tag:"Core AI/Backend",description:"Scientific computing, backend APIs, data pipelines"},{name:"SQL",tag:"Database Queries",description:"Relational data modeling, aggregations, indexing"},{name:"JavaScript",tag:"Modern Frontend",description:"Interactive UIs, DOM runtime, Node.js scripts"}]},{category:"AI / Machine Learning",description:"Predictive modeling, deep learning, and statistical analysis",skills:[{name:"Scikit-learn",tag:"Classical ML",description:"Classification, regression, and clustering"},{name:"PyTorch",tag:"Deep Learning",description:"Neural network architecture design and tensors"},{name:"NumPy",tag:"Vector Computation",description:"High-performance n-dimensional array operations"},{name:"Pandas",tag:"Data Wrangling",description:"Dataframe transformations, cleaning, and time indexing"},{name:"Prophet",tag:"Time-Series",description:"Additive forecasting and trend seasonality"},{name:"XGBoost",tag:"Gradient Boost",description:"High-accuracy tabular ensemble modeling"},{name:"NLP",tag:"Language Processing",description:"Text classification, embeddings, and tokenization"},{name:"Time-Series",tag:"Forecasting",description:"Autoregressive models, ARIMA, and signal processing"}]},{category:"AI Engineering",description:"LLM integrations, agentic workflows, and semantic search",skills:[{name:"LLM APIs",tag:"Generative AI",description:"Function calling, structured output generation"},{name:"RAG",tag:"Knowledge Retrieval",description:"Vector databases, dense retrieval, and chunking"},{name:"AI Integration",tag:"Production Pipelines",description:"Connecting foundational models to existing backends"},{name:"Prompt Engineering",tag:"Instruction Tuning",description:"Chain-of-thought, few-shot prompting, and guardrails"}]},{category:"Backend / Data",description:"High-throughput APIs, database schemas, and data pipelines",skills:[{name:"FastAPI",tag:"Asynchronous Web",description:"High-speed Python APIs with automatic OpenAPI docs"},{name:"PostgreSQL",tag:"Relational DB",description:"ACID transactions, schema design, and query optimization"},{name:"MySQL",tag:"Relational DB",description:"Structured relational storage and legacy interoperability"},{name:"SQLAlchemy",tag:"Python ORM",description:"Object relational mapping and session management"},{name:"REST APIs",tag:"Architecture",description:"Stateless endpoints, HTTP semantics, and security"},{name:"ETL",tag:"Data Pipelines",description:"Extract, transform, and load workflows for heterogeneous data"}]},{category:"Cloud / DevOps",description:"Containerization, cloud workloads, and version control",skills:[{name:"Google Cloud",tag:"Cloud Platform",description:"Cloud Run, Compute Engine, BigQuery, and IAM"},{name:"GKE",tag:"Kubernetes",description:"Google Kubernetes Engine container orchestration"},{name:"Git",tag:"Version Control",description:"Branch management, git workflows, and bisect"},{name:"GitHub",tag:"CI/CD & Collaboration",description:"Actions, repository workflows, and code review"}]},{category:"App Development",description:"Cross-platform mobile and local persistence",skills:[{name:"React Native",tag:"Mobile Runtime",description:"Native mobile components and cross-platform UI"},{name:"Expo",tag:"Mobile Tooling",description:"Ecosystem runtime, rapid iteration, and EAS builds"},{name:"SQLite",tag:"Embedded DB",description:"Lightweight client-side local transactional storage"}]}],C_=[{id:"github-foundations",title:"GitHub Foundations",issuer:"GitHub",verificationStatus:"Verified",issueYear:"2024",badge:"Code2",description:"Demonstrates foundational competency with Git version control, collaborative workflows, GitHub Actions, and repository security best practices."},{id:"oracle-cloud-ai",title:"Oracle Cloud Infrastructure AI Foundation Associate",issuer:"Oracle",verificationStatus:"Verified",issueYear:"2024",badge:"Layers",description:"Validated understanding of AI concepts, Machine Learning workflows, Generative AI integration, and OCI AI cloud services architecture."},{id:"google-ai-essentials",title:"Google AI Essentials V1",issuer:"Google",verificationStatus:"Verified",issueYear:"2024",badge:"Sparkles",description:"Comprehensive certification covering foundational AI principles, ethical AI considerations, and real-world generative AI utilization."},{id:"google-prompting-essentials",title:"Google Prompting Essentials",issuer:"Google",verificationStatus:"Verified",issueYear:"2024",badge:"Terminal",description:"Specialized credential validating systematic prompt architecture, few-shot guidance, chain-of-thought methodologies, and context evaluation."}],Bn={tagline:"Open to internships, research collaborations, and interesting AI/ML projects.",email:"misakshamgupta@gmail.com",github:"https://github.com/saksham-AI500",linkedin:"https://linkedin.com/in/saksham-gupta-ai",location:"New Delhi, India"},Q3=({onExploreProjects:r,onContactClick:e,onOpenResume:i,onOpenMusicStudio:s})=>{const{setCursorMode:l,resetCursor:c}=Wn();return m.jsxs("section",{id:"hero",className:"min-h-screen relative flex items-center justify-center pt-28 pb-16 px-6 md:px-12 z-10",children:[m.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[m.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left space-y-6",children:[m.jsxs("div",{onMouseEnter:()=>l("pointer","STATUS"),onMouseLeave:c,className:"inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#ffffff15] bg-[#ffffff05] text-[9px] uppercase tracking-[0.2em] text-[#8e9299]",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00] animate-ping inline-block"}),m.jsx("span",{className:"font-semibold text-[#e0d8d0]",children:"AI Interaction & Systems"}),m.jsx("span",{className:"text-[#ffffff20]",children:"|"}),m.jsx("span",{className:"text-[#8e9299]",children:"B.Tech AI / ML"})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("h1",{className:"text-5xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.88] text-white",children:["Architecting ",m.jsx("br",{}),"Intelligent ",m.jsx("br",{}),m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Systems."})]}),m.jsxs("p",{className:"text-lg sm:text-xl font-light text-[#e0d8d0] pt-2",children:["Saksham Gupta ",m.jsx("span",{className:"text-[#ff4e00]",children:"·"})," AI/ML Engineer"]}),m.jsx("p",{className:"text-xs font-mono text-[#8e9299] tracking-widest uppercase",children:Fi.tagline})]}),m.jsx("p",{className:"text-sm sm:text-base text-[#8e9299] max-w-xl leading-relaxed",children:Fi.shortBio}),m.jsxs("div",{className:"flex items-center gap-4 py-1",children:[m.jsx("div",{className:"w-36 sm:w-48 h-[1px] bg-gradient-to-r from-[#ff4e00] to-transparent"}),m.jsx("span",{className:"text-[10px] uppercase tracking-widest text-[#ff4e00] font-mono",children:"Current Status: Open for Collaboration"})]}),m.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-1",children:[m.jsxs("div",{onMouseEnter:()=>l("pointer","ACADEMIC"),onMouseLeave:c,className:"p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-colors",children:[m.jsx("div",{className:"text-[10px] text-[#8e9299] font-mono tracking-wider",children:"DEGREE"}),m.jsx("div",{className:"text-sm font-semibold text-[#e0d8d0] mt-0.5",children:"B.Tech AI / ML"}),m.jsx("div",{className:"text-[11px] text-[#ff4e00]",children:"3rd Year · DTC GGSIPU"})]}),m.jsxs("div",{onMouseEnter:()=>l("pointer","SPECIALTY"),onMouseLeave:c,className:"p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-colors",children:[m.jsx("div",{className:"text-[10px] text-[#8e9299] font-mono tracking-wider",children:"FOCUS"}),m.jsx("div",{className:"text-sm font-semibold text-[#e0d8d0] mt-0.5",children:"Deep Learning"}),m.jsx("div",{className:"text-[11px] text-[#8e9299]",children:"LLMs & Time-Series"})]}),m.jsxs("div",{onMouseEnter:()=>l("pointer","CERTS"),onMouseLeave:c,className:"p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-colors col-span-2 sm:col-span-1",children:[m.jsx("div",{className:"text-[10px] text-[#8e9299] font-mono tracking-wider",children:"CREDENTIALS"}),m.jsx("div",{className:"text-sm font-semibold text-[#e0d8d0] mt-0.5",children:"4 Verified"}),m.jsx("div",{className:"text-[11px] text-[#ff4e00]",children:"GitHub · Oracle · Google"})]})]}),m.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[m.jsxs(Sn,{onClick:r,cursorLabel:"EXPLORE",className:"px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff4e00] text-black shadow-[0_0_25px_rgba(255,78,0,0.4)] hover:bg-[#ff621e] flex items-center gap-2",children:[m.jsx(b_,{className:"w-4 h-4"}),m.jsx("span",{children:"Explore Projects"})]}),m.jsxs(Sn,{onClick:i,cursorLabel:"RESUME",className:"px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest bg-[#ffffff05] border border-[#ffffff15] text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0008] transition-all flex items-center gap-2",children:[m.jsx("span",{children:"View Resume"}),m.jsx(c3,{className:"w-3.5 h-3.5"})]}),m.jsxs(Sn,{onClick:e,cursorLabel:"CONNECT",className:"px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest bg-[#ffffff05] border border-[#ffffff15] text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0008] transition-all flex items-center gap-2",children:[m.jsx(hu,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Contact"})]}),s&&m.jsxs(Sn,{onClick:s,cursorLabel:"MUSIC",className:"px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest bg-[#ff4e00]/10 border border-[#ff4e00]/40 text-[#ff4e00] hover:bg-[#ff4e00]/20 hover:border-[#ff4e00] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,78,0,0.2)]",children:[m.jsx(pu,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"AI Music Lab"})]})]}),m.jsxs("div",{className:"flex items-center gap-3.5 pt-2 text-[#8e9299]",children:[m.jsx("a",{href:Bn.github,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>l("external","GH"),onMouseLeave:c,className:"w-11 h-11 rounded-full border border-[#ffffff15] bg-[#ffffff05] flex items-center justify-center text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0010] transition-all","aria-label":"GitHub Profile",children:m.jsx(cl,{className:"w-4 h-4"})}),m.jsx("a",{href:Bn.linkedin,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>l("external","IN"),onMouseLeave:c,className:"w-11 h-11 rounded-full border border-[#ffffff15] bg-[#ffffff05] flex items-center justify-center text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0010] transition-all","aria-label":"LinkedIn Profile",children:m.jsx(A_,{className:"w-4 h-4"})}),m.jsx("a",{href:`mailto:${Bn.email}`,onMouseEnter:()=>l("external","MAIL"),onMouseLeave:c,className:"w-11 h-11 rounded-full border border-[#ffffff15] bg-[#ffffff05] flex items-center justify-center text-[#e0d8d0] hover:border-[#ff4e00] hover:text-[#ff4e00] hover:bg-[#ff4e0010] transition-all","aria-label":"Send Email",children:m.jsx(hu,{className:"w-4 h-4"})}),m.jsx("span",{className:"text-xs font-mono text-[#8e9299] pl-2 hidden sm:inline",children:"saksham-AI500"})]})]}),m.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center",children:m.jsxs("div",{onMouseEnter:()=>l("three","NEURAL CORE"),onMouseLeave:c,className:"w-full max-w-md p-6 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl shadow-2xl hover:border-[#ff4e00]/50 transition-all duration-300 group relative overflow-hidden",children:[m.jsxs("div",{className:"flex items-center justify-between border-b border-[#ffffff10] pb-3 mb-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#ffffff20]"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#ffffff20]"}),m.jsx("span",{className:"text-xs font-mono text-[#8e9299] ml-2",children:"neural_gravity.sys"})]}),m.jsx("span",{className:"text-[10px] font-mono text-[#ff4e00] tracking-wider uppercase bg-[#ff4e0015] px-2 py-0.5 rounded border border-[#ff4e0040]",children:"ACTIVE"})]}),m.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[m.jsxs("div",{className:"flex justify-between items-center text-[#e0d8d0]",children:[m.jsx("span",{className:"text-[#8e9299]",children:"OPERATING ENVIRONMENT"}),m.jsx("span",{className:"text-[#ff4e00]",children:"Three.js / WebGL"})]}),m.jsxs("div",{className:"flex justify-between items-center text-[#e0d8d0]",children:[m.jsx("span",{className:"text-[#8e9299]",children:"INFERENCE ENGINE"}),m.jsx("span",{className:"text-[#e0d8d0]",children:"PyTorch + FastAPI"})]}),m.jsxs("div",{className:"flex justify-between items-center text-[#e0d8d0]",children:[m.jsx("span",{className:"text-[#8e9299]",children:"STORAGE & VECTOR"}),m.jsx("span",{className:"text-[#e0d8d0]",children:"PostgreSQL + FAISS"})]}),m.jsxs("div",{className:"flex justify-between items-center text-[#e0d8d0]",children:[m.jsx("span",{className:"text-[#8e9299]",children:"CLOUD DEPLOYMENT"}),m.jsx("span",{className:"text-[#ff4e00]",children:"Google Cloud Platform"})]})]}),m.jsxs("div",{className:"mt-5 pt-3 border-t border-[#ffffff10] flex items-center justify-between text-[11px] text-[#8e9299]",children:[m.jsxs("div",{className:"flex items-center gap-1.5 text-[#ff4e00]",children:[m.jsx($i,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Move cursor to orient 3D core"})]}),m.jsx("span",{className:"font-mono text-[#ff4e00]",children:"60 FPS"})]})]})})]}),m.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8e9299] pointer-events-none",children:[m.jsx("span",{className:"text-[10px] font-mono tracking-widest uppercase text-[#8e9299]",children:"SCROLL TO EXPLORE"}),m.jsx(LA,{className:"w-4 h-4 animate-bounce text-[#ff4e00]"})]})]})},J3=[{name:"Machine Learning",icon:v_,description:"Time-series forecasting with Prophet/ARIMA, gradient boosting via XGBoost, and neural modeling with PyTorch.",border:"border-[#ff4e00]/60",textColor:"text-[#ff4e00]"},{name:"LLM & AI Engineering",icon:FA,description:"Autonomous multi-provider agents, structured prompt pipelines, RAG retrieval mechanisms, and custom Obsidian tooling.",border:"border-[#ff4e00]/60",textColor:"text-[#ff4e00]"},{name:"NLP & Embeddings",icon:$i,description:"Text preprocessing, semantic embeddings, document summarization, and contextual keyword categorization.",border:"border-[#ff4e00]/60",textColor:"text-[#ff4e00]"},{name:"Backend Architecture",icon:M_,description:"High-throughput asynchronous FastAPI REST endpoints, SQLAlchemy ORM, and relational PostgreSQL database tuning.",border:"border-[#ff4e00]/60",textColor:"text-[#ff4e00]"},{name:"Cloud & DevOps",icon:y_,description:"Google Cloud Platform environments, GKE container deployments, reproducible environments, and GitHub CI/CD workflows.",border:"border-[#ff4e00]/60",textColor:"text-[#ff4e00]"},{name:"System Architecture",icon:w_,description:"Bridging deep learning research into resilient, fault-tolerant production applications with offline SQLite sync.",border:"border-[#ff4e00]/60",textColor:"text-[#ff4e00]"}],$3=()=>{const{setCursorMode:r,resetCursor:e}=Wn(),[i,s]=ke.useState(null),l=d=>{s(d),dn.playHover(),r("pointer","INSPECT")},c=()=>{s(null),e()};return m.jsx("section",{id:"about",className:"py-24 px-6 md:px-12 relative z-10",children:m.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{children:"KNOWLEDGE FIELD // 01"})]}),m.jsxs("h2",{className:"text-3xl sm:text-5xl font-light text-white tracking-tight mt-2",children:["Philosophy & ",m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Pillars."})]})]}),m.jsx("p",{className:"text-xs font-mono text-[#8e9299] max-w-sm uppercase tracking-wider",children:Fi.institution})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[m.jsxs("div",{className:"lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-5",children:[m.jsxs("h3",{className:"text-xl sm:text-2xl font-light text-[#e0d8d0] flex items-center gap-2.5",children:[m.jsx(b_,{className:"w-5 h-5 text-[#ff4e00]"}),m.jsx("span",{children:"Engineering Practical Artificial Intelligence"})]}),m.jsxs("p",{className:"text-sm sm:text-base text-[#8e9299] leading-relaxed",children:["I am an AI/ML student at ",m.jsx("span",{className:"text-[#e0d8d0] font-medium",children:"Delhi Technical Campus (GGSIPU, New Delhi)"}),", dedicated to the discipline of transforming algorithmic breakthroughs into production software."]}),m.jsx("p",{className:"text-sm sm:text-base text-[#8e9299] leading-relaxed",children:"Rather than treating machine learning as isolated notebooks, my engineering ethos treats models as core backend systems. From orchestrating multi-provider LLM pipelines to architecting low-latency time-series prediction microservices, I design end-to-end applications that are scalable, verifiable, and resilient."}),m.jsxs("div",{className:"pt-3 border-t border-[#ffffff10] space-y-2.5",children:[m.jsx("div",{className:"text-[10px] font-mono uppercase tracking-widest text-[#ff4e00]",children:"Core Engineering Principles:"}),m.jsxs("ul",{className:"space-y-2 text-xs text-[#8e9299] font-mono",children:[m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(js,{className:"w-3.5 h-3.5 text-[#ff4e00] shrink-0"}),m.jsx("span",{children:"Production-grade modular code over prototype hacks"})]}),m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(js,{className:"w-3.5 h-3.5 text-[#ff4e00] shrink-0"}),m.jsx("span",{children:"Real-time benchmark verification and backtested metrics"})]}),m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(js,{className:"w-3.5 h-3.5 text-[#ff4e00] shrink-0"}),m.jsx("span",{children:"Graceful offline resilience and local-first data privacy"})]})]})]})]}),m.jsx("div",{className:"lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4",children:J3.map(d=>{const p=d.icon,g=i===d.name;return m.jsxs("div",{onMouseEnter:()=>l(d.name),onMouseLeave:c,className:`p-5 rounded-2xl transition-all duration-300 border bg-[#ffffff05] backdrop-blur-xl relative overflow-hidden ${g?`${d.border} shadow-[0_0_25px_rgba(255,78,0,0.25)] scale-[1.02] bg-[#ffffff08]`:"border-[#ffffff10] hover:border-[#ffffff20]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 mb-2.5",children:[m.jsx("div",{className:`p-2 rounded-xl bg-[#ffffff05] border border-[#ffffff15] ${d.textColor}`,children:m.jsx(p,{className:"w-4 h-4"})}),m.jsx("span",{className:"font-medium text-sm text-[#e0d8d0]",children:d.name})]}),m.jsx("p",{className:"text-xs text-[#8e9299] leading-relaxed",children:d.description})]},d.name)})})]})]})})},ew=()=>{const{setCursorMode:r,resetCursor:e}=Wn();return m.jsx("section",{id:"education",className:"py-24 px-6 md:px-12 relative z-10",children:m.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{children:"ACADEMIC TRAJECTORY // 02"})]}),m.jsxs("h2",{className:"text-3xl sm:text-5xl font-light text-white tracking-tight mt-2",children:["Education & ",m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Foundations."})]})]}),m.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]",children:[m.jsx(Tp,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"B.Tech AI & ML (2024 – 2028)"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",children:[m.jsxs("div",{onMouseEnter:()=>r("pointer","DEGREE"),onMouseLeave:e,className:"lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] hover:border-[#ff4e00]/40 transition-all flex flex-col justify-between relative overflow-hidden group",children:[m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsx("div",{className:"p-3 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00]",children:m.jsx(T_,{className:"w-6 h-6"})}),m.jsx("span",{className:"px-3 py-1 rounded-full bg-[#ff4e0015] text-[#ff4e00] font-mono text-xs font-semibold border border-[#ff4e0040]",children:Ci.semesterInfo})]}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-2xl font-light text-white group-hover:text-[#ff4e00] transition-colors",children:Ci.degree}),m.jsx("p",{className:"text-base text-[#e0d8d0] font-light mt-0.5",children:Ci.field}),m.jsx("p",{className:"text-sm text-[#8e9299] mt-2",children:Ci.institution})]}),m.jsxs("div",{className:"flex flex-wrap gap-4 text-xs font-mono text-[#8e9299] pt-3 border-t border-[#ffffff10]",children:[m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx(WA,{className:"w-3.5 h-3.5 text-[#ff4e00]"}),m.jsx("span",{children:Ci.timeline})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx(wp,{className:"w-3.5 h-3.5 text-[#8e9299]"}),m.jsx("span",{children:Ci.location})]})]})]}),m.jsxs("div",{className:"mt-8 pt-4 border-t border-[#ffffff10]",children:[m.jsxs("div",{className:"flex justify-between text-xs font-mono text-[#8e9299] mb-1.5",children:[m.jsx("span",{children:"Progression to 2028 Graduation"}),m.jsx("span",{className:"text-[#ff4e00] font-bold",children:"5th Semester"})]}),m.jsx("div",{className:"w-full h-1.5 rounded-full bg-[#ffffff10] overflow-hidden relative",children:m.jsx("div",{className:"h-full bg-[#ff4e00] rounded-full shadow-[0_0_12px_rgba(255,78,0,0.6)]",style:{width:"62%"}})})]})]}),m.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-between space-y-4",children:[m.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8e9299]",children:[m.jsx(zA,{className:"w-4 h-4 text-[#ff4e00]"}),m.jsx("span",{children:"Rigorous Foundational Coursework"})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:Ci.coursework.map(i=>m.jsxs("div",{onMouseEnter:()=>r("pointer",i.code),onMouseLeave:e,className:"p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-xl hover:border-[#ff4e00]/40 transition-all space-y-1.5",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"font-mono text-[10px] text-[#ff4e00] font-bold tracking-wider",children:i.code}),m.jsx(ZA,{className:"w-3 h-3 text-[#ff4e00]"})]}),m.jsx("h4",{className:"font-medium text-sm text-[#e0d8d0]",children:i.title}),m.jsx("p",{className:"text-[11px] font-mono text-[#8e9299]",children:i.category})]},i.code))}),m.jsxs("div",{className:"p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] text-xs text-[#8e9299] leading-relaxed",children:[m.jsx("span",{className:"font-mono text-[#ff4e00] font-bold tracking-wider uppercase",children:"ACADEMIC EMPHASIS: "}),"Rigorous grounding in algorithmic complexity, relational data integrity, probability theory for machine learning inference, and empirical loss convergence."]})]})]})]})})},tw=["All","AI / ML","AI Engineering","Backend","Mobile"],nw=()=>{const{setCursorMode:r,resetCursor:e}=Wn(),[i,s]=ke.useState("All"),[l,c]=ke.useState(null),d=i==="All"?mu:mu.filter(v=>v.category===i||i==="Backend"&&(v.category==="Backend"||v.technologies.includes("FastAPI"))),p=v=>{switch(v){case"TrendingUp":return m.jsx(X3,{className:"w-5 h-5"});case"Shield":return m.jsx(F3,{className:"w-5 h-5"});case"BrainCircuit":return m.jsx(HA,{className:"w-5 h-5"});case"PackageSearch":return m.jsx(R3,{className:"w-5 h-5"});default:return m.jsx(Ap,{className:"w-5 h-5"})}},g=v=>{s(v),dn.playModeChange()},h=v=>{c(v),dn.playClick()},_=()=>{c(null),dn.playClick()};return m.jsxs("section",{id:"projects",className:"py-24 px-6 md:px-12 relative z-10",children:[m.jsxs("div",{className:"max-w-7xl mx-auto space-y-12",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#ffffff10] pb-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{children:"FEATURED WORK // 03"})]}),m.jsxs("h2",{className:"text-3xl sm:text-5xl font-light text-white tracking-tight mt-2",children:["Project ",m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Universe."})]})]}),m.jsx("div",{className:"flex flex-wrap items-center gap-1.5 bg-[#ffffff05] backdrop-blur-xl p-1.5 rounded-full border border-[#ffffff10]",children:tw.map(v=>{const x=i===v;return m.jsx("button",{onClick:()=>g(v),onMouseEnter:()=>{dn.playHover(),r("pointer",v.toUpperCase())},onMouseLeave:e,className:`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${x?"bg-[#ff4e0015] text-[#ff4e00] font-semibold border border-[#ff4e0040] shadow-[0_0_12px_rgba(255,78,0,0.25)]":"text-[#8e9299] hover:text-[#e0d8d0]"}`,children:v},v)})})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch",children:d.map(v=>m.jsxs("div",{onMouseEnter:()=>r("project","VIEW"),onMouseLeave:e,className:"group p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] hover:border-[#ff4e00]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,78,0,0.15)]",children:[m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"p-3 rounded-xl border flex items-center justify-center transition-colors",style:{backgroundColor:`${v.accent}15`,borderColor:`${v.accent}40`,color:v.accent},children:p(v.icon)}),m.jsx("span",{className:"text-[10px] font-mono font-semibold uppercase tracking-wider text-[#ff4e00] bg-[#ff4e0010] px-3 py-1 rounded-full border border-[#ff4e0030]",children:v.category})]}),v.stats&&m.jsx("span",{className:"text-[11px] font-mono text-[#8e9299] hidden sm:inline-block",children:v.stats})]}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-xl sm:text-2xl font-light text-white group-hover:text-[#ff4e00] transition-colors",children:v.title}),m.jsx("p",{className:"text-sm text-[#8e9299] mt-2 leading-relaxed",children:v.summary})]}),m.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2",children:v.technologies.map(x=>m.jsx("span",{className:"px-2.5 py-1 rounded-full bg-[#ffffff05] border border-[#ffffff10] text-[11px] font-mono text-[#8e9299]",children:x},x))})]}),m.jsxs("div",{className:"mt-6 pt-4 border-t border-[#ffffff10] flex items-center justify-between",children:[m.jsxs(Sn,{onClick:()=>h(v),cursorLabel:"SPECS",className:"text-xs font-medium uppercase tracking-widest text-[#e0d8d0] hover:text-[#ff4e00] flex items-center gap-1.5 focus:outline-none transition-colors",children:[m.jsx($i,{className:"w-3.5 h-3.5 text-[#ff4e00]"}),m.jsx("span",{children:"Architecture & Features"})]}),m.jsx("div",{className:"flex items-center gap-2",children:m.jsx("a",{href:v.githubUrl,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>r("external","GH"),onMouseLeave:e,className:"w-9 h-9 rounded-full bg-[#ffffff05] hover:bg-[#ffffff10] border border-[#ffffff15] flex items-center justify-center text-[#8e9299] hover:text-[#ff4e00] hover:border-[#ff4e00]/50 transition-colors",title:"View GitHub Repository","aria-label":`View ${v.title} on GitHub`,children:m.jsx(cl,{className:"w-4 h-4"})})})]})]},v.id))})]}),l&&m.jsx("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200",onClick:_,children:m.jsxs("div",{className:"w-full max-w-2xl bg-[#0a0a0a] border border-[#ffffff15] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6 relative max-h-[90vh] overflow-y-auto",onClick:v=>v.stopPropagation(),children:[m.jsx("button",{onClick:_,className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white hover:border-[#ffffff30] flex items-center justify-center transition-colors","aria-label":"Close modal",children:m.jsx($r,{className:"w-4 h-4"})}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"p-3 rounded-xl border",style:{backgroundColor:`${l.accent}20`,borderColor:`${l.accent}50`,color:l.accent},children:p(l.icon)}),m.jsxs("div",{children:[m.jsx("span",{className:"text-xs font-mono uppercase text-[#ff4e00]",children:l.category}),m.jsx("h3",{className:"text-2xl font-light text-white",children:l.title})]})]}),m.jsx("p",{className:"text-sm text-[#8e9299] leading-relaxed",children:l.description}),m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-[#8e9299]",children:"Key Engineering Features"}),m.jsx("ul",{className:"space-y-2",children:l.features.map((v,x)=>m.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-[#e0d8d0]",children:[m.jsx(__,{className:"w-4 h-4 text-[#ff4e00] shrink-0 mt-0.5"}),m.jsx("span",{children:v})]},x))})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-[#8e9299]",children:"Technology Stack"}),m.jsx("div",{className:"flex flex-wrap gap-2",children:l.technologies.map(v=>m.jsx("span",{className:"px-3 py-1 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-xs font-mono text-[#e0d8d0]",children:v},v))})]}),m.jsxs("div",{className:"pt-4 border-t border-[#ffffff10] flex items-center justify-between",children:[m.jsxs("a",{href:l.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff4e00] text-black hover:bg-[#ff621e] shadow-[0_0_20px_rgba(255,78,0,0.4)] transition-colors",children:[m.jsx(cl,{className:"w-4 h-4"}),m.jsx("span",{children:"View on GitHub"})]}),m.jsx("button",{onClick:_,className:"px-4 py-2 text-xs font-mono text-[#8e9299] hover:text-white uppercase",children:"Close"})]})]})})]})},iw=()=>{const{setCursorMode:r,resetCursor:e}=Wn(),[i,s]=ke.useState("AI / Machine Learning"),[l,c]=ke.useState(null),d=_=>{switch(_){case"Programming":return m.jsx(Mu,{className:"w-4 h-4"});case"AI / Machine Learning":return m.jsx(v_,{className:"w-4 h-4"});case"AI Engineering":return m.jsx($i,{className:"w-4 h-4"});case"Backend / Data":return m.jsx(M_,{className:"w-4 h-4"});case"Cloud / DevOps":return m.jsx(y_,{className:"w-4 h-4"});case"App Development":return m.jsx(H3,{className:"w-4 h-4"});default:return m.jsx(Ap,{className:"w-4 h-4"})}},p=_=>{c(_),dn.playHover(),r("pointer",_.name.toUpperCase())},g=()=>{e()},h=iu.find(_=>_.category===i)||iu[1];return m.jsx("section",{id:"skills",className:"py-24 px-6 md:px-12 relative z-10",children:m.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{children:"TECHNOLOGY NETWORK // 04"})]}),m.jsxs("h2",{className:"text-3xl sm:text-5xl font-light text-white tracking-tight mt-2",children:["Skills & ",m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Engineering Stack."})]})]}),m.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]",children:[m.jsx(w_,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Central Node: AI Engineering"})]})]}),m.jsx("div",{className:"flex flex-wrap gap-2",children:iu.map(_=>{const v=i===_.category;return m.jsxs("button",{onClick:()=>{s(_.category),dn.playModeChange()},onMouseEnter:()=>{dn.playHover(),r("pointer",_.category.toUpperCase())},onMouseLeave:e,className:`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${v?"bg-[#ff4e0015] text-[#ff4e00] border-[#ff4e0040] shadow-[0_0_15px_rgba(255,78,0,0.2)]":"bg-[#ffffff05] text-[#8e9299] border-[#ffffff10] hover:text-[#e0d8d0] hover:border-[#ffffff20]"}`,children:[d(_.category),m.jsx("span",{children:_.category}),m.jsxs("span",{className:"text-[10px] text-[#ff4e00]/80 font-semibold ml-1",children:["(",_.skills.length,")"]})]},_.category)})}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[m.jsxs("div",{className:"lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("h3",{className:"text-xl font-light text-white flex items-center gap-2",children:[m.jsx("span",{className:"text-[#ff4e00]",children:d(h.category)}),m.jsx("span",{children:h.category})]}),m.jsxs("span",{className:"text-xs font-mono text-[#ff4e00]",children:[h.skills.length," Stack Items"]})]}),m.jsx("p",{className:"text-xs sm:text-sm text-[#8e9299] mt-1",children:h.description})]}),m.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:h.skills.map(_=>{const v=(l==null?void 0:l.name)===_.name;return m.jsxs("div",{onMouseEnter:()=>p(_),onMouseLeave:g,className:`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${v?"bg-[#ff4e0015] border-[#ff4e00]/60 shadow-[0_0_20px_rgba(255,78,0,0.25)] scale-[1.02]":"bg-[#ffffff05] border-[#ffffff10] hover:border-[#ffffff20]"}`,children:[m.jsx("div",{className:"font-medium text-sm text-[#e0d8d0]",children:_.name}),m.jsx("div",{className:"text-[11px] font-mono text-[#ff4e00] mt-0.5",children:_.tag})]},_.name)})})]}),m.jsxs("div",{className:"lg:col-span-4 p-6 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff15] space-y-4 shadow-xl",children:[m.jsxs("div",{className:"flex items-center justify-between border-b border-[#ffffff10] pb-3",children:[m.jsx("span",{className:"text-xs font-mono uppercase text-[#ff4e00] tracking-widest",children:"NODE TELEMETRY"}),m.jsx("span",{className:"w-2 h-2 rounded-full bg-[#ff4e00] animate-pulse"})]}),l?m.jsxs("div",{className:"space-y-3 animate-in fade-in duration-200",children:[m.jsxs("div",{children:[m.jsx("h4",{className:"text-2xl font-light text-white",children:l.name}),m.jsx("p",{className:"text-xs font-mono text-[#ff4e00] mt-0.5",children:l.tag})]}),m.jsxs("div",{className:"p-3.5 rounded-xl bg-black/40 border border-[#ffffff10]",children:[m.jsx("span",{className:"text-[10px] font-mono uppercase text-[#8e9299] block mb-1",children:"Application & Utility"}),m.jsx("p",{className:"text-xs text-[#8e9299] leading-relaxed",children:l.description})]})]}):m.jsxs("div",{className:"py-8 text-center space-y-2 text-[#8e9299]",children:[m.jsx($i,{className:"w-6 h-6 mx-auto text-[#ff4e00]/60"}),m.jsx("p",{className:"text-xs font-mono text-[#8e9299]",children:"Hover over any technology node to inspect its architectural role"})]}),m.jsxs("div",{className:"pt-3 border-t border-[#ffffff10] text-[11px] font-mono text-[#8e9299] flex items-center justify-between",children:[m.jsx("span",{children:"ACTIVE CLUSTER"}),m.jsx("span",{className:"text-[#ff4e00]",children:i})]})]})]})]})})},aw=()=>{const{setCursorMode:r,resetCursor:e}=Wn(),[i,s]=ke.useState(null),l=p=>{switch(p){case"Code2":return m.jsx($A,{className:"w-5 h-5"});case"Layers":return m.jsx(Ap,{className:"w-5 h-5"});case"Sparkles":return m.jsx($i,{className:"w-5 h-5"});case"Terminal":return m.jsx(Mu,{className:"w-5 h-5"});default:return m.jsx(Tp,{className:"w-5 h-5"})}},c=p=>{s(p),dn.playClick()},d=()=>{s(null),dn.playClick()};return m.jsxs("section",{id:"certifications",className:"py-24 px-6 md:px-12 relative z-10",children:[m.jsxs("div",{className:"max-w-7xl mx-auto space-y-12",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{children:"CREDENTIAL VAULT // 05"})]}),m.jsxs("h2",{className:"text-3xl sm:text-5xl font-light text-white tracking-tight mt-2",children:["Verified ",m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Credentials."})]})]}),m.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]",children:[m.jsx(z3,{className:"w-4 h-4"}),m.jsx("span",{children:"4 Industry Verified Credentials"})]})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:C_.map(p=>m.jsxs("div",{onClick:()=>c(p),onMouseEnter:()=>{dn.playHover(),r("pointer","CREDENTIAL")},onMouseLeave:e,className:"p-6 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] hover:border-[#ff4e00]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-[0_0_25px_rgba(255,78,0,0.2)] hover:-translate-y-1 relative overflow-hidden",children:[m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("div",{className:"p-2.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00] group-hover:border-[#ff4e00]/50 transition-colors",children:l(p.badge)}),m.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-mono text-[#ff4e00] bg-[#ff4e0010] px-2.5 py-0.5 rounded-full border border-[#ff4e0030]",children:[m.jsx(js,{className:"w-3 h-3"}),m.jsx("span",{children:"Verified"})]})]}),m.jsxs("div",{children:[m.jsx("span",{className:"text-[10px] font-mono text-[#8e9299] uppercase tracking-wider block",children:p.issuer}),m.jsx("h3",{className:"font-medium text-base sm:text-lg text-white group-hover:text-[#ff4e00] transition-colors mt-1",children:p.title})]}),m.jsx("p",{className:"text-xs text-[#8e9299] line-clamp-3 leading-relaxed",children:p.description})]}),m.jsxs("div",{className:"pt-4 mt-4 border-t border-[#ffffff10] flex items-center justify-between text-xs font-mono text-[#8e9299]",children:[m.jsxs("span",{children:["Issued ",p.issueYear]}),m.jsx("span",{className:"text-[#ff4e00] group-hover:translate-x-0.5 transition-transform",children:"View →"})]})]},p.id))})]}),i&&m.jsx("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200",onClick:d,children:m.jsxs("div",{className:"w-full max-w-lg bg-[#0a0a0a] border border-[#ffffff15] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6 relative",onClick:p=>p.stopPropagation(),children:[m.jsx("button",{onClick:d,className:"absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors","aria-label":"Close",children:m.jsx($r,{className:"w-4 h-4"})}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"p-3 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00]",children:l(i.badge)}),m.jsxs("div",{children:[m.jsxs("span",{className:"text-xs font-mono text-[#ff4e00] uppercase tracking-wider",children:[i.issuer," Credential"]}),m.jsx("h3",{className:"text-xl font-light text-white",children:i.title})]})]}),m.jsxs("div",{className:"p-4 rounded-xl bg-black/40 border border-[#ffffff10] space-y-2",children:[m.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[m.jsx("span",{className:"text-[#8e9299]",children:"ISSUING AUTHORITY:"}),m.jsx("span",{className:"text-[#e0d8d0] font-medium",children:i.issuer})]}),m.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[m.jsx("span",{className:"text-[#8e9299]",children:"STATUS:"}),m.jsxs("span",{className:"text-[#ff4e00] font-medium flex items-center gap-1",children:[m.jsx(js,{className:"w-3 h-3"})," Verified Credential"]})]}),m.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[m.jsx("span",{className:"text-[#8e9299]",children:"ISSUE YEAR:"}),m.jsx("span",{className:"text-[#e0d8d0]",children:i.issueYear})]})]}),m.jsx("p",{className:"text-sm text-[#8e9299] leading-relaxed",children:i.description}),m.jsx("div",{className:"pt-2 flex justify-end",children:m.jsx("button",{onClick:d,className:"px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff4e00] text-black hover:bg-[#ff621e] transition-colors shadow-[0_0_20px_rgba(255,78,0,0.3)]",children:"Close Certificate"})})]})})]})},sw=({onOpenResume:r})=>{const{setCursorMode:e,resetCursor:i}=Wn(),[s,l]=ke.useState(!1),[c,d]=ke.useState(""),[p,g]=ke.useState(""),h=()=>{navigator.clipboard.writeText(Bn.email),l(!0),dn.playClick(),setTimeout(()=>l(!1),2500)},_=v=>{v.preventDefault(),dn.playClick();const x=encodeURIComponent(`Portfolio Inquiry from ${c||"Collaborator"}`),S=encodeURIComponent(p||"Hello Saksham, I would like to discuss an opportunity with you.");window.location.href=`mailto:${Bn.email}?subject=${x}&body=${S}`};return m.jsx("section",{id:"contact",className:"py-24 px-6 md:px-12 relative z-10",children:m.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#ffffff10] pb-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[9px] tracking-[0.3em] uppercase",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{children:"COMMUNICATION PORTAL // 06"})]}),m.jsxs("h2",{className:"text-3xl sm:text-5xl font-light text-white tracking-tight mt-2",children:["Let's Build ",m.jsx("span",{className:"italic font-serif text-[#ff4e00]",children:"Together."})]})]}),m.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#ff4e00] bg-[#ff4e0010] px-3.5 py-1.5 rounded-full border border-[#ff4e0030]",children:[m.jsx($i,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Open for AI/ML Internships & Collaborations"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[m.jsx("div",{className:"lg:col-span-6 space-y-6",children:m.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-6",children:[m.jsx("p",{className:"text-base sm:text-lg text-[#e0d8d0] font-light leading-relaxed",children:Bn.tagline}),m.jsxs("div",{className:"space-y-4 pt-2 border-t border-[#ffffff10]",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-black/40 border border-[#ffffff10] gap-3",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"p-2.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#ff4e00]",children:m.jsx(hu,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[10px] font-mono uppercase text-[#8e9299]",children:"Direct Email"}),m.jsx("a",{href:`mailto:${Bn.email}`,onMouseEnter:()=>e("external","EMAIL"),onMouseLeave:i,className:"text-xs sm:text-sm font-mono text-[#e0d8d0] hover:text-[#ff4e00] transition-colors",children:Bn.email})]})]}),m.jsxs(Sn,{onClick:h,cursorLabel:s?"COPIED":"COPY",className:"self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#ffffff05] hover:bg-[#ffffff10] border border-[#ffffff15] text-[#e0d8d0] flex items-center gap-1.5 transition-colors",children:[s?m.jsx(__,{className:"w-3.5 h-3.5 text-[#ff4e00]"}):m.jsx(t3,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:s?"Copied":"Copy"})]})]}),m.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-[#ffffff10]",children:[m.jsx("div",{className:"p-2.5 rounded-xl bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299]",children:m.jsx(wp,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[10px] font-mono uppercase text-[#8e9299]",children:"Current Base"}),m.jsx("div",{className:"text-xs sm:text-sm text-[#e0d8d0]",children:Bn.location})]})]})]}),m.jsxs("div",{className:"pt-2 border-t border-[#ffffff10] flex flex-wrap items-center gap-3",children:[m.jsxs("a",{href:Bn.github,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>e("external","GH"),onMouseLeave:i,className:"flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ffffff05] border border-[#ffffff15] hover:border-[#ff4e00]/50 text-[#8e9299] hover:text-[#ff4e00] text-xs font-mono transition-all",children:[m.jsx(cl,{className:"w-4 h-4"}),m.jsx("span",{children:"GitHub"})]}),m.jsxs("a",{href:Bn.linkedin,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>e("external","IN"),onMouseLeave:i,className:"flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ffffff05] border border-[#ffffff15] hover:border-[#ff4e00]/50 text-[#8e9299] hover:text-[#ff4e00] text-xs font-mono transition-all",children:[m.jsx(A_,{className:"w-4 h-4"}),m.jsx("span",{children:"LinkedIn"})]}),m.jsxs(Sn,{onClick:r,cursorLabel:"RESUME",className:"flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ff4e0015] border border-[#ff4e0040] text-[#ff4e00] hover:bg-[#ff4e0025] text-xs font-mono transition-all shadow-[0_0_15px_rgba(255,78,0,0.2)]",children:[m.jsx(f3,{className:"w-4 h-4"}),m.jsx("span",{children:"Curriculum Vitae"})]})]})]})}),m.jsxs("div",{className:"lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#ffffff05] backdrop-blur-xl border border-[#ffffff10] space-y-5",children:[m.jsxs("div",{children:[m.jsxs("h3",{className:"text-xl font-light text-white flex items-center gap-2",children:[m.jsx(Lv,{className:"w-4 h-4 text-[#ff4e00]"}),m.jsx("span",{children:"Transmit Message"})]}),m.jsx("p",{className:"text-xs text-[#8e9299] mt-1",children:"Direct transmission dispatched directly to Saksham Gupta's primary inbox."})]}),m.jsxs("form",{onSubmit:_,className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-mono text-[#8e9299] uppercase tracking-wider block mb-1.5",children:"Your Name / Organization"}),m.jsx("input",{type:"text",required:!0,value:c,onChange:v=>d(v.target.value),placeholder:"e.g. Dr. Alex Vance / DeepMind / DTC Lab",className:"w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#ffffff15] text-[#e0d8d0] text-xs placeholder:text-[#50555e] focus:outline-none focus:border-[#ff4e00] transition-colors"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-mono text-[#8e9299] uppercase tracking-wider block mb-1.5",children:"Message / Opportunity Details"}),m.jsx("textarea",{rows:4,required:!0,value:p,onChange:v=>g(v.target.value),placeholder:"Describe your research project, internship opening, or engineering collaboration...",className:"w-full px-4 py-2.5 rounded-xl bg-black/40 border border-[#ffffff15] text-[#e0d8d0] text-xs placeholder:text-[#50555e] focus:outline-none focus:border-[#ff4e00] transition-colors resize-none"})]}),m.jsxs(Sn,{type:"submit",cursorLabel:"SEND",className:"w-full py-3 rounded-full bg-[#ff4e00] hover:bg-[#ff621e] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,78,0,0.35)] flex items-center justify-center gap-2 transition-colors",children:[m.jsx(Lv,{className:"w-4 h-4"}),m.jsx("span",{children:"Transmit to Mailbox"})]})]})]})]})]})})},rw=({onBackToTop:r})=>{const{setCursorMode:e,resetCursor:i}=Wn();return m.jsx("footer",{className:"relative z-10 border-t border-[#ffffff10] bg-[#050505] py-12 px-6 md:px-12 text-xs font-mono text-[#8e9299]",children:m.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[m.jsxs("div",{className:"space-y-1 text-center md:text-left",children:[m.jsxs("div",{className:"text-white font-serif font-light text-base tracking-wide flex items-center justify-center md:justify-start gap-2",children:[m.jsx("span",{children:Fi.name}),m.jsx("span",{className:"text-[#ff4e00]",children:"·"}),m.jsx("span",{className:"text-xs font-mono text-[#8e9299] font-normal",children:"AI/ML Engineer"})]}),m.jsx("p",{className:"text-[11px] text-[#555a64]",children:"Engineered with Three.js, React, TypeScript & WebGL."})]}),m.jsxs("div",{className:"flex flex-col items-center gap-1.5 text-center",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("a",{href:"https://github.com/saksham-AI500/portfolio",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>e("external","GH"),onMouseLeave:i,className:"text-[#8e9299] hover:text-[#ff4e00] transition-colors",children:"GitHub Source"}),m.jsx("span",{className:"text-[#ffffff20]",children:"•"}),m.jsx("a",{href:"https://saksham-ai500.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>e("external","LIVE"),onMouseLeave:i,className:"text-[#8e9299] hover:text-[#ff4e00] transition-colors",children:"GitHub Pages Live"})]}),m.jsx("span",{className:"text-[10px] text-[#555a64]",children:"Delhi Technical Campus (GGSIPU) · 2024 – 2028"})]}),m.jsxs(Sn,{onClick:r,cursorLabel:"TOP",className:"flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-[#ff4e00] hover:border-[#ff4e00]/50 transition-all text-xs",children:[m.jsx("span",{children:"Return to Top"}),m.jsx(OA,{className:"w-3.5 h-3.5"})]})]})})},ow=({isOpen:r,onClose:e})=>{const{setCursorMode:i,resetCursor:s}=Wn();if(!r)return null;const l=()=>{dn.playClick(),window.print()};return m.jsx("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200",onClick:e,children:m.jsxs("div",{className:"w-full max-w-3xl bg-[#0a0a0a] border border-[#ffffff15] rounded-2xl p-6 sm:p-10 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6 relative max-h-[92vh] overflow-y-auto",onClick:c=>c.stopPropagation(),children:[m.jsxs("div",{className:"flex items-center justify-between border-b border-[#ffffff10] pb-4",children:[m.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-[#ff4e00]",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#ff4e00]"}),m.jsx("span",{className:"tracking-widest uppercase text-[10px]",children:"CURRICULUM VITAE // SAKSHAM GUPTA"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("button",{onClick:l,onMouseEnter:()=>i("pointer","PRINT"),onMouseLeave:s,className:"px-4 py-1.5 rounded-full bg-[#ff4e0015] text-[#ff4e00] border border-[#ff4e0040] text-xs font-mono flex items-center gap-1.5 hover:bg-[#ff4e0025] transition-colors",children:[m.jsx(E_,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Print / PDF"})]}),m.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors","aria-label":"Close CV",children:m.jsx($r,{className:"w-4 h-4"})})]})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("h2",{className:"text-3xl font-serif font-light text-white tracking-tight",children:Fi.name}),m.jsxs("p",{className:"text-xs font-mono text-[#ff4e00]",children:[Fi.title," · ",Fi.institution]}),m.jsxs("div",{className:"flex flex-wrap gap-4 text-xs font-mono text-[#8e9299] pt-1",children:[m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(hu,{className:"w-3 h-3 text-[#ff4e00]"})," ",Bn.email]}),m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(wp,{className:"w-3 h-3 text-[#8e9299]"})," ",Bn.location]}),m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(cl,{className:"w-3 h-3 text-[#8e9299]"})," github.com/saksham-AI500"]})]})]}),m.jsxs("div",{className:"space-y-3 pt-3 border-t border-[#ffffff10]",children:[m.jsxs("h3",{className:"text-[10px] font-mono uppercase tracking-widest text-[#ff4e00] flex items-center gap-2",children:[m.jsx(T_,{className:"w-4 h-4"}),m.jsx("span",{children:"Education"})]}),m.jsxs("div",{className:"p-4 rounded-xl bg-black/40 border border-[#ffffff10] space-y-1",children:[m.jsxs("div",{className:"flex justify-between items-start",children:[m.jsxs("span",{className:"font-light text-sm text-white",children:[Ci.degree," in ",Ci.field]}),m.jsx("span",{className:"font-mono text-xs text-[#ff4e00] font-semibold",children:Ci.timeline})]}),m.jsx("div",{className:"text-xs text-[#8e9299]",children:Ci.institution}),m.jsxs("div",{className:"text-xs text-[#8e9299]",children:["Status: ",Ci.semesterInfo]}),m.jsx("div",{className:"text-[11px] font-mono text-[#8e9299] pt-1",children:"Coursework: Data Structures & Algorithms, Database Management Systems, Probability & Statistics, Machine Learning Fundamentals."})]})]}),m.jsxs("div",{className:"space-y-3 pt-3 border-t border-[#ffffff10]",children:[m.jsxs("h3",{className:"text-[10px] font-mono uppercase tracking-widest text-[#ff4e00] flex items-center gap-2",children:[m.jsx(jA,{className:"w-4 h-4"}),m.jsx("span",{children:"Engineering Projects"})]}),m.jsx("div",{className:"space-y-3",children:mu.map(c=>m.jsxs("div",{className:"p-4 rounded-xl bg-black/40 border border-[#ffffff10] space-y-1.5",children:[m.jsxs("div",{className:"flex justify-between items-start",children:[m.jsx("span",{className:"font-medium text-sm text-white",children:c.title}),m.jsx("span",{className:"font-mono text-[10px] text-[#ff4e00] uppercase",children:c.category})]}),m.jsx("p",{className:"text-xs text-[#8e9299] leading-relaxed",children:c.summary}),m.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:c.technologies.map(d=>m.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ffffff05] border border-[#ffffff10] text-[#8e9299]",children:d},d))})]},c.id))})]}),m.jsxs("div",{className:"space-y-3 pt-3 border-t border-[#ffffff10]",children:[m.jsxs("h3",{className:"text-[10px] font-mono uppercase tracking-widest text-[#ff4e00] flex items-center gap-2",children:[m.jsx(Tp,{className:"w-4 h-4"}),m.jsx("span",{children:"Verified Credentials"})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:C_.map(c=>m.jsxs("div",{className:"p-3.5 rounded-xl bg-black/40 border border-[#ffffff10] flex items-center gap-2.5",children:[m.jsx(js,{className:"w-4 h-4 text-[#ff4e00] shrink-0"}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-medium text-white",children:c.title}),m.jsxs("div",{className:"text-[10px] font-mono text-[#8e9299]",children:[c.issuer," · Verified ",c.issueYear]})]})]},c.id))})]})]})})},lw=({isOpen:r,onClose:e})=>{const{setCursorMode:i,resetCursor:s}=Wn(),[l,c]=ke.useState(""),[d,p]=ke.useState([{text:"SAKSHAM.OS v3.2.0 [AI-KERNEL INITIALIZED]",type:"system"},{text:'Type "help" for a list of available neural commands.',type:"system"}]),g=ke.useRef(null),h=ke.useRef(null);if(ke.useEffect(()=>{r&&setTimeout(()=>{var v;return(v=h.current)==null?void 0:v.focus()},100)},[r]),ke.useEffect(()=>{var v;(v=g.current)==null||v.scrollIntoView({behavior:"smooth"})},[d]),!r)return null;const _=v=>{v.preventDefault();const x=l.trim().toLowerCase();if(!x)return;dn.playClick();const S=[...d,{text:`$ ${l}`,type:"cmd"}];switch(x){case"help":S.push({text:"AVAILABLE COMMANDS:",type:"system"},{text:"  about      - Core profile and university information",type:"output"},{text:"  projects   - Summary of key production repositories",type:"output"},{text:"  skills     - Summary of technical capabilities",type:"output"},{text:"  contact    - Communication endpoints",type:"output"},{text:"  clear      - Clear terminal window buffer",type:"output"},{text:"  exit       - Close this terminal session",type:"output"});break;case"about":S.push({text:`${Fi.name} - ${Fi.title}`,type:"output"},{text:`${Fi.institution}`,type:"output"},{text:`${Fi.shortBio}`,type:"output"});break;case"projects":S.push({text:"FEATURED PROJECTS:",type:"system"}),mu.forEach(T=>{S.push({text:`• ${T.title} [${T.category}]: ${T.summary}`,type:"output"})});break;case"skills":S.push({text:"PRIMARY TECHNICAL STACK:",type:"system"}),iu.forEach(T=>{S.push({text:`[${T.category}]: ${T.skills.map(N=>N.name).join(", ")}`,type:"output"})});break;case"contact":S.push({text:`Email: ${Bn.email}`,type:"output"},{text:`GitHub: ${Bn.github}`,type:"output"},{text:`LinkedIn: ${Bn.linkedin}`,type:"output"});break;case"clear":p([]),c("");return;case"exit":e();return;default:S.push({text:`Unknown command "${x}". Type "help" for instructions.`,type:"system"})}p(S),c("")};return m.jsx("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-150",onClick:e,children:m.jsxs("div",{className:"w-full max-w-2xl bg-[#080808] border border-[#ffffff15] rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden font-mono text-xs flex flex-col h-[480px]",onClick:v=>v.stopPropagation(),children:[m.jsxs("div",{className:"bg-[#121212] border-b border-[#ffffff10] px-4 py-3 flex items-center justify-between select-none",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Mu,{className:"w-4 h-4 text-[#ff4e00]"}),m.jsx("span",{className:"text-[#e0d8d0] font-medium text-[11px] tracking-wide",children:"saksham@ai-core: ~"})]}),m.jsx("button",{onClick:e,className:"w-6 h-6 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors","aria-label":"Close Terminal",children:m.jsx($r,{className:"w-3.5 h-3.5"})})]}),m.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-2 text-[#8e9299]",children:[d.map((v,x)=>m.jsx("div",{className:`${v.type==="cmd"?"text-[#ff4e00] font-semibold":v.type==="system"?"text-[#e0d8d0]":"text-[#8e9299]"}`,children:v.text},x)),m.jsx("div",{ref:g})]}),m.jsxs("form",{onSubmit:_,className:"p-3 bg-black/60 border-t border-[#ffffff10] flex items-center gap-2",children:[m.jsx("span",{className:"text-[#ff4e00] font-bold",children:"$"}),m.jsx("input",{ref:h,type:"text",value:l,onChange:v=>c(v.target.value),placeholder:"Type command ('help', 'projects', 'about', 'clear')...",className:"flex-1 bg-transparent text-[#e0d8d0] placeholder:text-[#50555e] focus:outline-none text-xs"}),m.jsx("button",{type:"submit",className:"p-1.5 text-[#ff4e00] hover:text-[#ff621e]","aria-label":"Execute command",children:m.jsx(i3,{className:"w-3.5 h-3.5"})})]})]})})};function cw(r){const i=r.type==="jingle"?6:r.type==="ambient"?18:14,s=Math.floor(44100*i),l=2,d=l*2,p=44100*d,g=s*d,h=44+g,_=new ArrayBuffer(h),v=new DataView(_),x=(A,U)=>{for(let V=0;V<U.length;V++)v.setUint8(A+V,U.charCodeAt(V))};x(0,"RIFF"),v.setUint32(4,36+g,!0),x(8,"WAVE"),x(12,"fmt "),v.setUint32(16,16,!0),v.setUint16(20,1,!0),v.setUint16(22,l,!0),v.setUint32(24,44100,!0),v.setUint32(28,p,!0),v.setUint16(32,d,!0),v.setUint16(34,16,!0),x(36,"data"),v.setUint32(40,g,!0);const S=r.type==="ambient",T=r.type==="jingle",N=T?[[261.63,329.63,392,523.25],[293.66,369.99,440,587.33],[329.63,415.3,493.88,659.25],[392,493.88,587.33,783.99]]:S?[[146.83,220,293.66,369.99],[130.81,196,261.63,329.63],[116.54,174.61,233.08,293.66],[130.81,196,261.63,349.23]]:[[110,164.81,220,277.18],[98,146.83,196,246.94],[87.31,130.81,174.61,220],[82.41,123.47,164.81,207.65]],M=i/N.length;let b=44;for(let A=0;A<s;A++){const U=A/44100,V=Math.min(N.length-1,Math.floor(U/M)),k=N[V];let W=0,he=0;for(let de=0;de<k.length;de++){const xe=k[de],P=2*Math.PI*xe*U,q=2*Math.PI*(xe*1.002)*U+.15*de,Me=Math.sin(P)+.25*Math.sin(P*2)+.08*Math.sin(P*3),we=Math.sin(q)+.25*Math.sin(q*2)+.08*Math.sin(q*3),Ne=1/(de+1.3);W+=Me*Ne,he+=we*Ne}if(!S){const xe=U*(T?4:2)%1,P=Math.exp(-xe*14),q=90*Math.exp(-xe*20)+38,Me=Math.sin(2*Math.PI*q*U)*P*.7;W+=Me,he+=Me}const oe=Math.min(1,U/.8),K=Math.min(1,(i-U)/1.5),F=oe*K*.42;W*=F,he*=F,W=Math.max(-1,Math.min(1,W)),he=Math.max(-1,Math.min(1,he));const G=Math.floor(W*32767),ee=Math.floor(he*32767);v.setInt16(b,G,!0),v.setInt16(b+2,ee,!0),b+=4}const D=new Blob([_],{type:"audio/wav"}),O=URL.createObjectURL(D);let w="";const B=new Uint8Array(_),L=B.byteLength;for(let A=0;A<L;A++)w+=String.fromCharCode(B[A]);const z=btoa(w);return{blob:D,url:O,base64:z}}const Kc={soundtrack:["Cyberpunk Neo-Tokyo with deep sub-bass and pulsing analog arpeggios","Cinematic sci-fi interstellar journey with swelling orchestral brass","Dark synthwave highway chase with gated reverb drums and electric hook"],jingle:["Crisp 5-second tech startup logo chime with warm resonant glass bells","Futuristic AI device activation stinger with upward pentatonic flourish","Modern podcast intro stinger with upbeat punchy acoustic-electronic groove"],ambient:["Deep cosmic nebula drone with warm generative pads and gentle binaural hum","Rainy cyberpunk night focus soundtrack with tape warmth and vinyl flutter","Minimalist zen bamboo sanctuary with soft bells and breathing sine wave"]},uw=[{name:"Cyberpunk City",url:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&auto=format&fit=crop&q=60",desc:"Neon rain & towering dark monoliths"},{name:"Deep Nebula",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",desc:"Vibrant galactic starfield & stellar clouds"},{name:"Ember Core",url:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60",desc:"Warm obsidian lava & energetic amber glow"}],fw=({isOpen:r,onClose:e,onSetGlobalBackgroundMusic:i,isGlobalPlaying:s=!1})=>{const{setCursorMode:l,resetCursor:c}=Wn(),[d,p]=ke.useState("soundtrack"),[g,h]=ke.useState(""),[_,v]=ke.useState(null),[x,S]=ke.useState(!1),[T,N]=ke.useState(""),[M,b]=ke.useState(null),[D,O]=ke.useState(!1),[w,B]=ke.useState(0),[L,z]=ke.useState(0),[A,U]=ke.useState(.8),[V,k]=ke.useState(!1),[W,he]=ke.useState(!1),oe=ke.useRef(null),K=ke.useRef(null);if(ke.useEffect(()=>{const Q=oe.current;if(!Q)return;const fe=()=>B(Q.currentTime),Te=()=>z(Q.duration||0),Fe=()=>O(!1);return Q.addEventListener("timeupdate",fe),Q.addEventListener("loadedmetadata",Te),Q.addEventListener("ended",Fe),()=>{Q.removeEventListener("timeupdate",fe),Q.removeEventListener("loadedmetadata",Te),Q.removeEventListener("ended",Fe)}},[M]),ke.useEffect(()=>()=>{M!=null&&M.audioUrl&&URL.revokeObjectURL(M.audioUrl)},[M]),!r)return null;const F=Q=>{h(Q)},G=Q=>{var Fe;const fe=(Fe=Q.target.files)==null?void 0:Fe[0];if(!fe)return;const Te=new FileReader;Te.onload=()=>{typeof Te.result=="string"&&v(Te.result)},Te.readAsDataURL(fe)},ee=async Q=>{v(Q);try{const Te=await(await fetch(Q)).blob(),Fe=new FileReader;Fe.onloadend=()=>{typeof Fe.result=="string"&&v(Fe.result)},Fe.readAsDataURL(Te)}catch{v(Q)}},de=async()=>{!g&&!_&&h(Kc[d][0]);const Q=g||Kc[d][0];S(!0),N(_?"Analyzing image palette & composing audio...":"Generating neural soundtrack...");try{const fe=await fetch("/api/music/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:Q,type:d,imageData:_})});if(!fe.ok){const nt=await fe.json().catch(()=>({}));throw new Error(nt.error||`Server responded with ${fe.status}`)}const Te=await fe.json(),Fe=atob(Te.audioBase64),Ze=Fe.length,Ot=new Uint8Array(Ze);for(let nt=0;nt<Ze;nt++)Ot[nt]=Fe.charCodeAt(nt);const it=new Blob([Ot],{type:Te.mimeType||"audio/wav"}),gt=URL.createObjectURL(it),xt={audioUrl:gt,blob:it,title:Te.title||`${d.toUpperCase()} // ${Q.slice(0,24)}`,type:d,prompt:Q,source:Te.source||"neural",generatedAt:Te.generatedAt||new Date().toISOString()};b(xt),O(!0),oe.current&&(oe.current.src=gt,oe.current.play().catch(()=>{})),N("")}catch(fe){console.warn("Server generation unavailable, falling back to browser audio synthesis:",fe);try{const Te=cw({type:d,prompt:Q}),Fe={audioUrl:Te.url,blob:Te.blob,title:`${d.toUpperCase()} // ${Q.slice(0,24)} (Browser Synth)`,type:d,prompt:Q,source:"procedural",generatedAt:new Date().toISOString()};b(Fe),O(!0),oe.current&&(oe.current.src=Te.url,oe.current.play().catch(()=>{})),N("Synthesized via client audio engine (Static Mode).")}catch{N((fe==null?void 0:fe.message)||"Generation failed. Please try again.")}}finally{S(!1)}},xe=()=>{!oe.current||!M||(D?(oe.current.pause(),O(!1)):oe.current.play().then(()=>O(!0)).catch(()=>{}))},P=Q=>{const fe=parseFloat(Q.target.value);B(fe),oe.current&&(oe.current.currentTime=fe)},q=Q=>{const fe=parseFloat(Q.target.value);U(fe),oe.current&&(oe.current.volume=fe),fe>0&&V&&k(!1)},Me=()=>{oe.current&&(V?(oe.current.muted=!1,k(!1)):(oe.current.muted=!0,k(!0)))},we=()=>{if(!M)return;const Q=document.createElement("a");Q.href=M.audioUrl,Q.download=`saksham-ai-${M.type}-${Date.now()}.wav`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q)},Ne=()=>{if(!M)return;const Q=!W;he(Q),i&&i(Q?M.audioUrl:null)},ne=Q=>{if(isNaN(Q))return"0:00";const fe=Math.floor(Q/60),Te=Math.floor(Q%60);return`${fe}:${Te<10?"0":""}${Te}`};return m.jsx("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200",onClick:e,children:m.jsxs("div",{className:"w-full max-w-4xl bg-[#080808] border border-[#ffffff15] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]",onClick:Q=>Q.stopPropagation(),children:[m.jsxs("div",{className:"bg-[#121212] border-b border-[#ffffff10] px-6 py-4 flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-9 h-9 rounded-full bg-[#ff4e00]/15 border border-[#ff4e00]/30 flex items-center justify-center text-[#ff4e00]",children:m.jsx(S_,{className:"w-5 h-5 animate-[spin_8s_linear_infinite]"})}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h2",{className:"text-[#e0d8d0] font-serif text-lg font-bold tracking-wide",children:"Neural Music Studio"}),m.jsx("span",{className:"text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#ff4e00]/20 text-[#ff4e00] border border-[#ff4e00]/40",children:"Lyria & Synthesizer"})]}),m.jsx("p",{className:"text-[#8e9299] text-xs",children:"Compose custom soundtracks, jingles, and background music from text prompts or images"})]})]}),m.jsx("button",{onClick:e,className:"w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors","aria-label":"Close Studio",onMouseEnter:()=>l("pointer","CLOSE"),onMouseLeave:c,children:m.jsx($r,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#8e9299]",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-mono uppercase tracking-widest text-[#8e9299] mb-2 font-semibold",children:"01 // Choose Composition Archetype"}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"soundtrack",label:"Soundtrack",icon:h3,desc:"Cinematic & dynamic scores"},{id:"jingle",label:"Audio Jingle",icon:$i,desc:"Short 5s branded audio stingers"},{id:"ambient",label:"Background Music",icon:Dv,desc:"Generative focus & lo-fi loops"}].map(Q=>{const fe=Q.icon,Te=d===Q.id;return m.jsxs("button",{onClick:()=>p(Q.id),className:`p-3 rounded-2xl border text-left transition-all ${Te?"bg-[#ff4e00]/15 border-[#ff4e00] text-[#e0d8d0] shadow-[0_0_20px_rgba(255,78,0,0.2)]":"bg-[#ffffff05] border-[#ffffff10] text-[#8e9299] hover:border-[#ffffff25]"}`,onMouseEnter:()=>l("pointer","SELECT"),onMouseLeave:c,children:[m.jsxs("div",{className:"flex items-center gap-2 font-medium mb-0.5",children:[m.jsx(fe,{className:`w-4 h-4 ${Te?"text-[#ff4e00]":"text-[#8e9299]"}`}),m.jsx("span",{className:"text-xs text-[#e0d8d0] font-semibold",children:Q.label})]}),m.jsx("p",{className:"text-[10px] text-[#8e9299] hidden sm:block",children:Q.desc})]},Q.id)})})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("label",{className:"text-[11px] font-mono uppercase tracking-widest text-[#8e9299] font-semibold",children:"02 // Prompt Description"}),m.jsx("span",{className:"text-[10px] text-[#8e9299] font-mono",children:"Multimodal Input Enabled"})]}),m.jsx("textarea",{value:g,onChange:Q=>h(Q.target.value),placeholder:`Describe the audio mood, tempo, instruments, and emotional arc (e.g., "${Kc[d][0]}")`,rows:3,className:"w-full bg-[#121212] border border-[#ffffff15] rounded-2xl p-3.5 text-xs text-[#e0d8d0] placeholder:text-[#555a64] focus:outline-none focus:border-[#ff4e00] transition-colors resize-none"}),m.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-2",children:[m.jsx("span",{className:"text-[10px] font-mono text-[#666a74] py-1 mr-1",children:"Inspirations:"}),Kc[d].map((Q,fe)=>m.jsxs("button",{onClick:()=>F(Q),className:"text-[10px] px-2.5 py-1 rounded-full bg-[#ffffff05] hover:bg-[#ffffff10] border border-[#ffffff10] text-[#b0b4bc] transition-colors text-left truncate max-w-xs",onMouseEnter:()=>l("pointer","APPLY"),onMouseLeave:c,children:[Q.slice(0,38),"..."]},fe))]})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("label",{className:"text-[11px] font-mono uppercase tracking-widest text-[#8e9299] font-semibold",children:"03 // Visual Inspiration (Optional Image-to-Music)"}),_&&m.jsx("button",{onClick:()=>v(null),className:"text-[10px] text-[#ff4e00] hover:underline",children:"Clear Image"})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 items-center",children:[m.jsxs("div",{onClick:()=>{var Q;return(Q=K.current)==null?void 0:Q.click()},className:`p-4 rounded-2xl border border-dashed transition-all cursor-pointer flex items-center justify-center gap-3 text-center ${_?"border-[#ff4e00]/50 bg-[#ff4e00]/5":"border-[#ffffff15] bg-[#121212] hover:border-[#ffffff30]"}`,onMouseEnter:()=>l("pointer","UPLOAD"),onMouseLeave:c,children:[m.jsx("input",{ref:K,type:"file",accept:"image/*",onChange:G,className:"hidden"}),_?m.jsxs("div",{className:"flex items-center gap-3 w-full",children:[m.jsx("img",{src:_,alt:"Uploaded inspiration",className:"w-14 h-14 rounded-xl object-cover border border-[#ffffff20]"}),m.jsxs("div",{className:"text-left flex-1 truncate",children:[m.jsxs("div",{className:"text-xs text-[#e0d8d0] font-medium flex items-center gap-1.5",children:[m.jsx(js,{className:"w-3.5 h-3.5 text-[#ff4e00]"})," Image Loaded"]}),m.jsx("p",{className:"text-[10px] text-[#8e9299] truncate",children:"Will influence harmonic color & tone"})]})]}):m.jsxs("div",{className:"py-2",children:[m.jsx(x3,{className:"w-6 h-6 text-[#8e9299] mx-auto mb-1"}),m.jsx("span",{className:"text-xs text-[#e0d8d0] font-medium block",children:"Upload an image"}),m.jsx("span",{className:"text-[10px] text-[#666a74]",children:"PNG, JPG, WebP up to 10MB"})]})]}),m.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-1",children:uw.map((Q,fe)=>m.jsxs("button",{onClick:()=>ee(Q.url),className:"relative group rounded-xl overflow-hidden border border-[#ffffff15] flex-shrink-0 w-24 h-16 transition-all hover:scale-105",title:Q.name,onMouseEnter:()=>l("pointer","SAMPLE"),onMouseLeave:c,children:[m.jsx("img",{src:Q.url,alt:Q.name,className:"w-full h-full object-cover"}),m.jsx("div",{className:"absolute inset-0 bg-black/60 flex items-end p-1",children:m.jsx("span",{className:"text-[9px] text-white font-mono truncate",children:Q.name})})]},fe))})]})]}),m.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-between gap-4",children:[m.jsx("div",{className:"text-xs",children:T&&m.jsxs("span",{className:"flex items-center gap-2 text-[#ff4e00] font-mono text-[11px] animate-pulse",children:[m.jsx($i,{className:"w-3.5 h-3.5"}),T]})}),m.jsx(Sn,{onClick:de,disabled:x,cursorMode:"pointer",cursorLabel:"COMPOSE",intensity:.35,maxDistance:10,className:"w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff4e00] hover:bg-[#ff621e] text-black font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(255,78,0,0.5)] flex items-center justify-center gap-2 transition-all disabled:opacity-50",children:x?m.jsxs(m.Fragment,{children:[m.jsx(b3,{className:"w-4 h-4 animate-spin text-black"}),"Synthesizing Audio..."]}):m.jsxs(m.Fragment,{children:[m.jsx($i,{className:"w-4 h-4 text-black"}),"Generate AI Track"]})})]}),M&&m.jsxs("div",{className:"p-5 rounded-3xl bg-[#121212] border border-[#ff4e00]/30 shadow-[0_0_40px_rgba(255,78,0,0.15)] space-y-4 animate-in fade-in zoom-in-95 duration-200",children:[m.jsx("audio",{ref:oe}),m.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx(Sn,{onClick:xe,cursorMode:"pointer",cursorLabel:D?"PAUSE":"PLAY",className:"w-12 h-12 rounded-full bg-[#ff4e00] text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,78,0,0.4)] hover:scale-105 transition-transform",children:D?m.jsx(D3,{className:"w-5 h-5 fill-current"}):m.jsx(U3,{className:"w-5 h-5 fill-current ml-0.5"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-sm text-[#e0d8d0] font-bold tracking-wide",children:M.title}),m.jsxs("p",{className:"text-[11px] text-[#8e9299] font-mono",children:["Engine: ",m.jsx("span",{className:"text-[#ff4e00] uppercase font-bold",children:M.source})," • Duration: ",ne(L)]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center",children:[m.jsxs(Sn,{onClick:Ne,cursorMode:"pointer",cursorLabel:"LOOP BG",className:`px-3 py-1.5 rounded-full text-xs font-mono font-medium border flex items-center gap-1.5 transition-colors ${W?"bg-[#ff4e00] text-black border-[#ff4e00]":"bg-[#ffffff05] border-[#ffffff15] text-[#b0b4bc] hover:text-white"}`,children:[m.jsx(Dv,{className:"w-3 h-3"}),W?"Background Active":"Set as Background Music"]}),m.jsx(Sn,{onClick:we,cursorMode:"pointer",cursorLabel:"DOWNLOAD",className:"p-2 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#b0b4bc] hover:text-white transition-colors",title:"Download audio WAV",children:m.jsx(E_,{className:"w-4 h-4"})})]})]}),m.jsx("div",{className:"h-10 w-full flex items-end gap-1 px-1 py-1 bg-black/40 rounded-xl overflow-hidden",children:Array.from({length:48}).map((Q,fe)=>{const Te=D?Math.max(15,(Math.sin(fe*.4+w*8)*.5+.5)*90):12;return m.jsx("div",{className:"flex-1 bg-[#ff4e00] rounded-full transition-[height] duration-75 opacity-80",style:{height:`${Te}%`}},fe)})}),m.jsxs("div",{className:"flex items-center gap-3 text-[11px] font-mono text-[#8e9299]",children:[m.jsx("span",{children:ne(w)}),m.jsx("input",{type:"range",min:0,max:L||100,step:.1,value:w,onChange:P,className:"flex-1 h-1.5 bg-[#ffffff15] accent-[#ff4e00] rounded-lg appearance-none cursor-pointer"}),m.jsx("span",{children:ne(L)}),m.jsxs("div",{className:"flex items-center gap-1.5 ml-2",children:[m.jsx("button",{onClick:Me,className:"text-[#8e9299] hover:text-white",children:V||A===0?m.jsx(rp,{className:"w-4 h-4"}):m.jsx(sp,{className:"w-4 h-4"})}),m.jsx("input",{type:"range",min:0,max:1,step:.05,value:V?0:A,onChange:q,className:"w-16 h-1.5 bg-[#ffffff15] accent-[#ff4e00] rounded-lg appearance-none cursor-pointer"})]})]})]})]})]})})};function dw(){const[r,e]=ke.useState("hero"),[i,s]=ke.useState(!1),[l,c]=ke.useState(!1),[d,p]=ke.useState(!1),[g,h]=ke.useState(null),_=ke.useRef(null);ke.useEffect(()=>{const S=["hero","about","education","projects","skills","certifications","contact"],T=()=>{const M=window.innerHeight;for(const b of S){const D=document.getElementById(b);if(D){const O=D.getBoundingClientRect();if(O.top<=M*.45&&O.bottom>=M*.25){e(b);break}}}};window.addEventListener("scroll",T,{passive:!0}),T();const N=M=>{M.ctrlKey&&M.key.toLowerCase()==="k"||M.key==="`"?(M.preventDefault(),c(b=>!b)):M.ctrlKey&&M.key.toLowerCase()==="m"&&(M.preventDefault(),p(b=>!b))};return window.addEventListener("keydown",N),()=>{window.removeEventListener("scroll",T),window.removeEventListener("keydown",N)}},[]);const v=S=>{h(S),_.current&&(S?(_.current.src=S,_.current.volume=.35,_.current.play().catch(()=>{})):_.current.pause())},x=S=>{const T=document.getElementById(S);T&&T.scrollIntoView({behavior:"smooth"})};return m.jsx(Hb,{children:m.jsxs("div",{className:"relative min-h-screen bg-[#050505] text-[#e0d8d0] selection:bg-[#ff4e00]/25 selection:text-[#ff7a38] overflow-x-hidden font-sans",children:[m.jsx("audio",{ref:_,loop:!0}),m.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none z-0",children:[m.jsx("div",{className:"absolute -top-[20%] -left-[10%] w-[65%] h-[65%] rounded-full bg-radial-gradient from-[#1a0f0a] to-transparent opacity-50 blur-[110px]"}),m.jsx("div",{className:"absolute -bottom-[10%] -right-[5%] w-[55%] h-[55%] rounded-full bg-radial-gradient from-[#0a151a] to-transparent opacity-35 blur-[90px]"}),m.jsx("div",{className:"absolute top-[45%] right-[15%] w-[35%] h-[35%] rounded-full bg-radial-gradient from-[#1f1008] to-transparent opacity-20 blur-[100px]"})]}),m.jsx(kb,{}),m.jsx(TA,{currentSection:r}),m.jsx(K3,{currentSection:r,onNavigate:x,onToggleTerminal:()=>c(!0),onOpenMusicStudio:()=>p(!0)}),m.jsxs("main",{className:"relative z-10",children:[m.jsx(Q3,{onExploreProjects:()=>x("projects"),onContactClick:()=>x("contact"),onOpenResume:()=>s(!0),onOpenMusicStudio:()=>p(!0)}),m.jsx($3,{}),m.jsx(ew,{}),m.jsx(nw,{}),m.jsx(iw,{}),m.jsx(aw,{}),m.jsx(sw,{onOpenResume:()=>s(!0)})]}),m.jsx(rw,{onBackToTop:()=>x("hero")}),m.jsx("div",{className:"fixed bottom-6 left-6 z-40",children:m.jsxs(Sn,{onClick:()=>p(!0),cursorLabel:"MUSIC",className:"group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#121212]/90 border border-[#ff4e00]/40 text-[#e0d8d0] backdrop-blur-xl shadow-[0_0_25px_rgba(255,78,0,0.25)] hover:border-[#ff4e00] hover:shadow-[0_0_35px_rgba(255,78,0,0.4)] transition-all",title:"Open AI Music Studio (Ctrl+M)",children:[m.jsx("div",{className:"w-5 h-5 rounded-full bg-[#ff4e00]/20 flex items-center justify-center text-[#ff4e00]",children:g?m.jsx(S_,{className:"w-3.5 h-3.5 animate-[spin_4s_linear_infinite]"}):m.jsx(pu,{className:"w-3.5 h-3.5"})}),m.jsx("span",{className:"text-xs font-mono font-bold tracking-wider text-[#e0d8d0] group-hover:text-[#ff4e00] transition-colors",children:g?"BG Music Active":"AI Music Lab"}),m.jsx("span",{className:"hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#8e9299]",children:"^M"})]})}),m.jsx(ow,{isOpen:i,onClose:()=>s(!1)}),m.jsx(lw,{isOpen:l,onClose:()=>c(!1)}),m.jsx(fw,{isOpen:d,onClose:()=>p(!1),onSetGlobalBackgroundMusic:v,isGlobalPlaying:!!g})]})})}Gb.createRoot(document.getElementById("root")).render(m.jsx(ke.StrictMode,{children:m.jsx(dw,{})}));
