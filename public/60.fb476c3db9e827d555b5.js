"use strict";(self.webpackChunkiframe_list=self.webpackChunkiframe_list||[]).push([[60],{5962:(e,r,t)=>{t.d(r,{R:()=>a});var n=t(7294),s=t(8248);const a=(e,r,t)=>{const a=n.useRef(),u=n.useRef(`mui-${Math.round(1e9*Math.random())}`),c=n.useCallback((()=>{a.current=e.current.unstable_registerPipeApplier(r,u.current,t)}),[e,t,r]);(0,s.s)((()=>{c()}));const o=n.useRef(!0);n.useEffect((()=>(o.current?o.current=!1:c(),()=>{a.current&&(a.current(),a.current=null)})),[c])}},7514:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(7294),s=t(8248);const a=(e,r,t)=>{const a=n.useRef(),u=n.useRef(`mui-${Math.round(1e9*Math.random())}`),c=n.useCallback((()=>{a.current=e.current.unstable_registerPipeProcessor(r,u.current,t)}),[e,t,r]);(0,s.s)((()=>{c()}));const o=n.useRef(!0);n.useEffect((()=>(o.current?o.current=!1:c(),()=>{a.current&&(a.current(),a.current=null)})),[c])}},8558:(e,r,t)=>{t.d(r,{H:()=>a});var n=t(7294),s=t(8248);const a=(e,r,t,a)=>{const u=n.useCallback((()=>{e.current.unstable_registerStrategyProcessor(r,t,a)}),[e,a,t,r]);(0,s.s)((()=>{u()}));const c=n.useRef(!0);n.useEffect((()=>{c.current?c.current=!1:u()}),[u])}},2939:(e,r,t)=>{t.d(r,{Lm:()=>c,sQ:()=>l});var n=t(3366),s=t(9142),a=t(7294),u=t(1091);const c="none",o={rowTreeCreation:"rowTree",filtering:"rowTree",sorting:"rowTree"},l=e=>{const r=a.useRef(new Map),t=a.useRef({}),l={unstable_registerStrategyProcessor:a.useCallback(((r,a,u)=>{const c=()=>{const e=t.current[a],u=(0,n.Z)(e,[r].map(s.Z));t.current[a]=u};t.current[a]||(t.current[a]={});const l=t.current[a],i=l[r];return l[r]=u,i&&i!==u?(r===e.current.unstable_getActiveStrategy(o[a])&&e.current.publishEvent("activeStrategyProcessorChange",a),c):c}),[e]),unstable_applyStrategyProcessor:a.useCallback(((r,n)=>{const s=e.current.unstable_getActiveStrategy(o[r]);if(null==s)throw new Error("Can't apply a strategy processor before defining an active strategy");const a=t.current[r];if(!a||!a[s])throw new Error(`No processor found for processor "${r}" on strategy "${s}"`);return(0,a[s])(n)}),[e]),unstable_getActiveStrategy:a.useCallback((e=>{var t;const n=Array.from(r.current.entries()).find((([,r])=>r.group===e&&r.isAvailable()));return null!=(t=null==n?void 0:n[0])?t:c}),[]),unstable_setStrategyAvailability:a.useCallback(((t,n,s)=>{r.current.set(n,{group:t,isAvailable:s}),e.current.publishEvent("strategyAvailabilityChange")}),[e])};(0,u.h)(e,l,"GridStrategyProcessing")}},4338:(e,r,t)=>{t.d(r,{S:()=>k});var n=t(7294),s=t(4791);const a=(0,s.Vu)()&&null!=window.localStorage.getItem("DEBUG"),u=()=>{},c={debug:u,info:u,warn:u,error:u},o=["debug","info","warn","error"];function l(e,r,t=console){const n=o.indexOf(r);if(-1===n)throw new Error(`MUI: Log level ${r} not recognized.`);return o.reduce(((r,s,a)=>(r[s]=a>=n?(...r)=>{const[n,...a]=r;t[s](`MUI: ${e} - ${n}`,...a)}:u,r)),{})}var i=t(1091),p=t(5057),g=t(6445);let b=0;var d=t(7462);var f=t(3366),v=t(9142);var h=t(2939);const C=["stateId"],k=(e,r)=>{const t=function(e,r){const t=n.useRef();t.current||(t.current={unstable_eventManager:new g.Q,unstable_caches:{},state:{},instanceId:b},b+=1),n.useImperativeHandle(e,(()=>t.current),[t]);const s=n.useCallback(((...e)=>{const[n,s,a={}]=e;if(a.defaultMuiPrevented=!1,(e=>void 0!==e.isPropagationStopped)(a)&&a.isPropagationStopped())return;const u=r.signature===p.cG.DataGridPro?{api:t.current}:{};t.current.unstable_eventManager.emit(n,s,a,u)}),[t,r.signature]),a=n.useCallback(((e,r,n)=>{t.current.unstable_eventManager.on(e,r,n);const s=t.current;return()=>{s.unstable_eventManager.removeListener(e,r)}}),[t]),u=n.useCallback((e=>{t.current.publishEvent("componentError",e)}),[t]);return(0,i.h)(t,{subscribeEvent:a,publishEvent:s,showError:u},"GridCoreApi"),n.useEffect((()=>{const e=t.current;return()=>{e.publishEvent("unmount")}}),[t]),t}(e,r);return((e,r)=>{e.current.getLogger=n.useCallback((e=>a?l(e,"debug",r.logger):r.logLevel?l(e,r.logLevel.toString(),r.logger):c),[r.logLevel,r.logger])})(t,r),function(e,r){const t=n.useCallback((r=>{e.current.setState((e=>(0,d.Z)({},e,{error:r})))}),[e]);n.useEffect((()=>{t(r.error)}),[t,r.error]),(0,p.zn)(e,"componentError",t)}(t,r),((e,r)=>{const t=n.useRef({}),[,a]=n.useState(),u=n.useCallback((e=>{const{stateId:r}=e,n=(0,f.Z)(e,C);t.current[r]=(0,d.Z)({},n,{stateId:r})}),[]),c=n.useCallback(((n,a)=>{let u;if(u=(0,s.mf)(n)?n(e.current.state):n,e.current.state===u)return!1;let c=!1;const o=[];if(Object.keys(t.current).forEach((r=>{const n=t.current[r],s=n.stateSelector(e.current.state,e.current.instanceId),a=n.stateSelector(u,e.current.instanceId);a!==s&&(o.push({stateId:n.stateId,hasPropChanged:a!==n.propModel}),void 0!==n.propModel&&a!==n.propModel&&(c=!0))})),o.length>1)throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${o[0].stateId}, therefore, you're not allowed to update ${o.map((e=>e.stateId)).join(", ")} in the same transaction.`);if(c||(e.current.state=u,e.current.publishEvent&&e.current.publishEvent("stateChange",u)),1===o.length){const{stateId:n,hasPropChanged:s}=o[0],l=t.current[n],i=l.stateSelector(u,e.current.instanceId);if(l.propOnChange&&s){const t=r.signature===p.cG.DataGridPro?{api:e.current,reason:a}:{reason:a};l.propOnChange(i,t)}c||e.current.publishEvent(l.changeEvent,i,{reason:a})}return!c}),[e,r.signature]),o=n.useCallback(((r,t,n)=>e.current.setState((e=>(0,d.Z)({},e,{[r]:t(e[r])})),n)),[e]),l={setState:c,forceUpdate:n.useCallback((()=>a((()=>e.current.state))),[e]),unstable_updateControlState:o,unstable_registerControlState:u};(0,i.h)(e,l,"GridStateApi")})(t,r),(e=>{const r=n.useRef({}),t=n.useCallback((e=>{e&&Object.values(e.appliers).forEach((e=>{e()}))}),[]),s={unstable_registerPipeProcessor:n.useCallback(((e,n,s)=>{r.current[e]||(r.current[e]={processors:new Map,appliers:{}});const a=r.current[e];return a.processors.get(n)!==s&&(a.processors.set(n,s),t(a)),()=>{r.current[e].processors.set(n,null)}}),[t]),unstable_registerPipeApplier:n.useCallback(((e,t,n)=>(r.current[e]||(r.current[e]={processors:new Map,appliers:{}}),r.current[e].appliers[t]=n,()=>{const n=r.current[e].appliers,s=(0,f.Z)(n,[t].map(v.Z));r.current[e].appliers=s})),[]),unstable_requestPipeProcessorsApplication:n.useCallback((e=>{const n=r.current[e];t(n)}),[t]),unstable_applyPipeProcessors:n.useCallback(((...e)=>{const[t,n,s]=e;return r.current[t]?Array.from(r.current[t].processors.values()).reduce(((e,r)=>r?r(e,s):e),n):n}),[])};(0,i.h)(e,s,"GridPipeProcessingApi")})(t),(0,h.sQ)(t),((e,r)=>{const t={getLocaleText:n.useCallback((e=>{if(null==r.localeText[e])throw new Error(`Missing translation for key ${e}.`);return r.localeText[e]}),[r.localeText])};(0,i.h)(e,t,"LocaleTextApi")})(t,r),t}}}]);