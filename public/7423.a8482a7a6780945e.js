"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7423],{7423:(ue,G,H)=>{H.d(G,{Uw:()=>U,fo:()=>j,xz:()=>O});var c=H(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var w=(()=>{return(r=w||(w={})).Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",w;var r})();class O extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const V=r=>{var e,t,o,s,n;const a=r.CapacitorCustomPlatform||null,i=r.Capacitor||{},f=i.Plugins=i.Plugins||{},l=r.CapacitorPlatforms,_=(null===(e=null==l?void 0:l.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==a?a.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),ee=(null===(t=null==l?void 0:l.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==_()),re=(null===(o=null==l?void 0:l.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(d=>{const u=W.get(d);return!!(null!=u&&u.platforms.has(_())||R(d))}),R=(null===(s=null==l?void 0:l.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(d=>{var u;return null===(u=i.PluginHeaders)||void 0===u?void 0:u.find(L=>L.name===d)}),W=new Map,ae=(null===(n=null==l?void 0:l.currentPlatform)||void 0===n?void 0:n.registerPlugin)||((d,u={})=>{const L=W.get(d);if(L)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),L.proxy;const y=_(),k=R(d);let v;const le=function(){var g=(0,c.Z)(function*(){return!v&&y in u?v=v="function"==typeof u[y]?yield u[y]():u[y]:null!==a&&!v&&"web"in u&&(v=v="function"==typeof u.web?yield u.web():u.web),v});return function(){return g.apply(this,arguments)}}(),Z=g=>{let m;const h=(...P)=>{const b=le().then(p=>{const C=((g,m)=>{var h,P;if(!k){if(g)return null===(P=g[m])||void 0===P?void 0:P.bind(g);throw new O(`"${d}" plugin is not implemented on ${y}`,w.Unimplemented)}{const b=null==k?void 0:k.methods.find(p=>m===p.name);if(b)return"promise"===b.rtype?p=>i.nativePromise(d,m.toString(),p):(p,C)=>i.nativeCallback(d,m.toString(),p,C);if(g)return null===(h=g[m])||void 0===h?void 0:h.bind(g)}})(p,g);if(C){const x=C(...P);return m=null==x?void 0:x.remove,x}throw new O(`"${d}.${g}()" is not implemented on ${y}`,w.Unimplemented)});return"addListener"===g&&(b.remove=(0,c.Z)(function*(){return m()})),b};return h.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(h,"name",{value:g,writable:!1,configurable:!1}),h},B=Z("addListener"),D=Z("removeListener"),de=(g,m)=>{const h=B({eventName:g},m),P=function(){var p=(0,c.Z)(function*(){const C=yield h;D({eventName:g,callbackId:C},m)});return function(){return p.apply(this,arguments)}}(),b=new Promise(p=>h.then(()=>p({remove:P})));return b.remove=(0,c.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield P()}),b},T=new Proxy({},{get(g,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?de:B;case"removeListener":return D;default:return Z(m)}}});return f[d]=T,W.set(d,{name:d,proxy:T,platforms:new Set([...Object.keys(u),...k?[y]:[]])}),T});return i.convertFileSrc||(i.convertFileSrc=d=>d),i.getPlatform=_,i.handleError=d=>r.console.error(d),i.isNativePlatform=ee,i.isPluginAvailable=re,i.pluginMethodNoop=(d,u,L)=>Promise.reject(`${L} does not have an implementation of "${u}".`),i.registerPlugin=ae,i.Exception=O,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},E=(r=>r.Capacitor=V(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),j=E.registerPlugin;class U{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const a=function(){var f=(0,c.Z)(function*(){return o.removeListener(e,t)});return function(){return f.apply(this,arguments)}}(),i=Promise.resolve({remove:a});return Object.defineProperty(i,"remove",{value:(f=(0,c.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield a()}),function(){return f.apply(this,arguments)})}),i;var f}removeAllListeners(){var e=this;return(0,c.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new E.Exception(e,w.Unimplemented)}unavailable(e="not available"){return new E.Exception(e,w.Unavailable)}removeListener(e,t){var o=this;return(0,c.Z)(function*(){const s=o.listeners[e];if(!s)return;const n=s.indexOf(t);o.listeners[e].splice(n,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const S=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),I=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class z extends U{getCookies(){return(0,c.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=I(s).trim(),n=I(n).trim(),t[s]=n}),t})()}setCookie(e){return(0,c.Z)(function*(){try{const t=S(e.key),o=S(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${n}; ${a};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,c.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,c.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,c.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}j("CapacitorCookies",{web:()=>new z});const J=function(){var r=(0,c.Z)(function*(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>{const n=s.result;t(n.indexOf(",")>=0?n.split(",")[1]:n)},s.onerror=n=>o(n),s.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class N extends U{request(e){return(0,c.Z)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),s=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,n,a)=>(s[n]=r[e[a]],s),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[a,i]of Object.entries(r.data||{}))n.set(a,i);t.body=n.toString()}else if(s.includes("multipart/form-data")){const n=new FormData;if(r.data instanceof FormData)r.data.forEach((i,f)=>{n.append(f,i)});else for(const i of Object.keys(r.data))n.append(i,r.data[i]);t.body=n;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(s.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,s)=>{const[n,a]=s;let i,f;return Array.isArray(a)?(f="",a.forEach(l=>{i=e?encodeURIComponent(l):l,f+=`${n}=${i}&`}),f.slice(0,-1)):(i=e?encodeURIComponent(a):a,f=`${n}=${i}`),`${o}&${f}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,n=yield fetch(s,t),a=n.headers.get("content-type")||"";let f,l,{responseType:i="text"}=n.ok?e:{};switch(a.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":l=yield n.blob(),f=yield J(l);break;case"json":f=yield n.json();break;default:f=yield n.text()}const $={};return n.headers.forEach((_,A)=>{$[A]=_}),{data:f,headers:$,status:n.status,url:n.url}})()}get(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}j("CapacitorHttp",{web:()=>new N})}}]);