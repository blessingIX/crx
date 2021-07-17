!function(e){function t(t){for(var r,o,l=t[0],p=t[1],s=t[2],d=0,u=[];d<l.length;d++)o=l[d],i[o]&&u.push(i[o][0]),i[o]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var p=a[l];0!==i[p]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},i={16:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=p;n.push([302,0,13,1,14]),a()}({132:function(e,t){},19:function(e,t,a){"use strict";var r=a(34),i=a.n(r),n=a(3),o=a(24),l=a.n(o);const p={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"},s={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"};a.d(t,"h",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"i",(function(){return h})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return g})),a.d(t,"j",(function(){return f})),a.d(t,"f",(function(){return b})),a.d(t,"e",(function(){return y})),a.d(t,"g",(function(){return s}));const c=(e,t=16)=>e/t+"rem",d=(e="")=>n.c`
    font-family: ${i()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,u=(e=16)=>n.c`
    font-size: ${c(e)};
`,h=(e=1)=>1===e?n.c`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:n.c`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,m=(e,t=1)=>p[e]?l()(p[e]).alpha(t).rgb().string():void 0,g=([...e])=>{const t="#000000",a=.5;let r="";for(let i in e){const{h:n,v:o,blur:p,spread:s,color:c=l()(t).alpha(a).rgb().string(),inset:d=""}=e[i];r+=`${1*n}px ${1*o}px ${5*p}px ${5*s}px ${c} ${d},`}return n.c`
        box-shadow: ${r};
    `},f=({target:e="all",duration:t=.3})=>n.c`transition: ${e} ${t}s;`,b=({direction:e="h",value:t=0})=>n.c`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`,y=n.c`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(19);const i={color:r.b,logoHeight:50,bodyMinWidth:1e3,headerHeight:0,sidebarWidth:204,mainWidth:796,baseFontSize:12,fontFamily:r.c,fontSize:r.d,rem:r.h,textOverflow:r.i,transition:r.j,boxShadow:r.a,marginTrim:r.f,hideScrollbar:r.e,opacity:r.g}},302:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),n=a(0),o=a.n(n),l=a(22),p=a.n(l),s=a(3),c=a(110),d=a(6),u=a.n(d),h=a(16),m=a.n(h),g=a(11),f=a.n(g),b=a(7),y=a(35);const v=()=>document.querySelector("#bilibiliPlayer .bilibili-player-video video"),w=async()=>new u.a(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})});a(334);const x=async()=>new u.a(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})}),k={fillWiden:function(){Object(y.e)(!0,!0).then(e=>{e&&e.click()})},webWiden:function(){Object(y.i)(!0,!0).then(e=>{e&&e.click()})},normalWiden:function(){Object(y.f)(!0,!0).then(e=>{e&&e.click()})},mute:function(){const e=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-volume button");e&&e.click()},danmuToggle:function(){const e=document.querySelector(".bilibili-player-video-danmaku-switch .bui-switch-input");e&&e.click()},mirrorToggle:function(){const e=document.querySelector(".bilibili-player-video-btn-setting-left-videomirror .bui-switch-input");e&&e.click()},pip:function(){const e=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-pip");e&&e.click()},watchLater:function(){const e=document.querySelector("#arc_toolbar_report .more-ops-list .ops-watch-later");e&&e.click()},previousFiveSeconds:async function(e){e.preventDefault(),e.stopPropagation();const t=await v();t&&t.currentTime>0&&w().then(({playJumpChangeRange:e})=>{t.currentTime-=e})},nextFiveSeconds:async function(e){e.preventDefault(),e.stopPropagation();const t=await v();w().then(({playJumpChangeRange:e})=>{t.currentTime+=e})},resetPlaySpeed:async function(e){e.preventDefault(),e.stopPropagation();const t=await Object(y.h)();if(t){t.playbackRate=1;const e=Object(y.g)(1);e&&e.click()}},addPlaySpeed:async function(e){e.preventDefault(),e.stopPropagation();const t=await Object(y.h)();x().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:a,bhAccount:r})=>{(!r||r&&!Object(b.isVIP)(r))&&(e=.25);const i=a?2:4;if(t&&t.playbackRate<i){let r;a?e=.25:t.playbackRate+e>=i&&(e=i-t.playbackRate),r=1.5===t.playbackRate&&a?t.playbackRate+.5:t.playbackRate+e,r=+r.toFixed(2);const n=Object(y.g)(r);n&&r?n.click():t.playbackRate+=e,Object(y.j)(r)}})},minusPlaySpeed:async function(e){e.preventDefault(),e.stopPropagation();const t=await Object(y.h)();t&&t.playbackRate>.5&&x().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:a})=>{let r;a?e=.25:t.playbackRate-e<=.5&&(e=t.playbackRate-.5),r=2===t.playbackRate&&a?t.playbackRate-.5:t.playbackRate-e,r=+r.toFixed(2);const i=Object(y.g)(r);i&&r?(t.playbackRate-=e,i.click()):t.playbackRate-=e,Object(y.j)(r)})},previousFrame:async function(e){e.preventDefault(),e.stopPropagation();const t=await Object(y.c)(),a=await Object(y.h)();!isNaN(t)&&[116,74].includes(t)&&a?a.currentTime-=1/60:a.currentTime-=1/30},nextFrame:async function(e){e.preventDefault(),e.stopPropagation();const t=await Object(y.c)(),a=await Object(y.h)();!isNaN(t)&&[116,74].includes(t)&&a?a.currentTime+=1/60:a.currentTime+=1/30}},S=["TEXTAREA","INPUT"],E=[".video-editor",".bili-note"],O={};Object(b.interval)("#bilibiliPlayer",1e3).then(()=>new u.a((e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},a=>{a.on&&a.bilibiliHelperAccountLogin?chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},t=>{e(t)}):t()})})).then(e=>{const t=e.map(([,e])=>e[1]);document.addEventListener("keydown",a=>{const{target:r,code:i,key:n,ctrlKey:o,shiftKey:l,altKey:p,metaKey:s}=a;if(S.includes(r.tagName))return;if(E.length>0){const e=(E.length>f()(O).length&&E.forEach(e=>{if(!O[e]||0===O[e].length){const t=m()(document.querySelectorAll(e));t&&(O[e]=t)}}),O);let t=!1;if(f()(e).forEach(a=>{e[a].forEach(e=>{e.contains(r)&&(t=!0)})}),t)return}const c=Object(b.generateShortcutValue)(i,n,o,l,p,s);if(!c||!t.includes(c))return;const d=e.find(([,e])=>{const[,t]=e;return""!==t&&t===c});if(!d)return;const u=k[d[0]];return u?u(a):void 0},!0)}).catch(e=>e);chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},e=>{e.on&&Object(b.interval)("#bilibiliPlayer .bilibili-player-video-control-bottom-right").then(t=>{t&&(async e=>{let t=null;switch(e){case"wide":t=await Object(y.f)(!1,!1),t.setAttribute("bilibili-helper-data","true");break;case"web":t=await Object(y.i)(!1,!1),t.setAttribute("bilibili-helper-data","true");break;case"full":t=await Object(y.e)(!1,!1),t.setAttribute("bilibili-helper-data","true")}t&&t.click&&t.click()})(e.widenType)})});const D=".bilibili-player-video-control .bilibili-player-iconfont.bilibili-player-iconfont-danmaku";let C,M;const N=async()=>{C=document.querySelector(D),M=await Object(y.d)(!1,!0),C&&!C.getAttribute("bilibili-helper-data")?(C.setAttribute("bilibili-helper-data",!0),C.click()):M&&M.checked&&M.click()};chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},e=>{e.on&&Object(y.h)(!1).then(async e=>{console.log(e),e&&(await N(),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.length>0&&e.addedNodes.forEach(e=>{"VIDEO"!==e.tagName&&"INPUT"!==e.tagName||(C=document.querySelector(D),M=document.querySelector(".bilibili-player-video-danmaku-switch input[type=checkbox]"),setTimeout(N,1e3))})})}).observe(e,{subtree:!0,childList:!0}))})});Object(b.interval)("#bilibiliPlayer .bilibili-player-video-quality-menu",1e3).then(()=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},e=>{e.on&&setTimeout(()=>{const t=(e=>{let t,a=e,r=y.b.findIndex(e=>+e==+a);do{t=document.querySelector(`.bilibili-player-video-quality-menu .bui-select-item[data-value="${a}"]`),r++,a=y.b[r]}while(!t&&r<y.b.length&&a);return t})(e.quality);t&&t.click()},1500)})}).catch(e=>e),Object(b.interval)("#bilibiliPlayer .bilibili-player-video-btn-speed-menu",1e3).then(()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},async e=>{if(e.on&&1!=+e.speed){const t=await Object(y.h)(),a=Object(y.g)(+e.speed);a?a.click():t&&(t.playbackRate=e.speed)}})}).catch(e=>e);var _=a(30),T=a.n(_),I=a(4);chrome.runtime.onMessage.addListener((e,t,a)=>("initAutoLikeCoinCollect"===e.command&&(new u.a(e=>{Object(b.interval)("#v_upinfo .u-face .fa, .members-info .scroll-inside a:nth-child(1)").then(t=>{const a=t.href.match(/space\.bilibili\.com\/(\d+?)$/);a&&e(a[1])})}).then(e=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},async t=>{const a=(t=new T.a(t)).get(+e);if(a){const e=(()=>{const e=document.createElement("style");return e.id="bilibiliHelperAutoLikeCoinCollectStyle",e.innerHTML="\n        .bili-dialog-m {\n            display: none;\n        }\n    ",document.head.appendChild(e),e})(),t=await(async e=>new u.a(t=>{if(!e)return t(!1);Object(b.interval)("#arc_toolbar_report .like").then(e=>e?e.classList.contains("on")?t(!1):(e.click(),void t(!0)):t(!1))}))(a.like),r=await(async(e,t)=>new u.a(a=>{if(!e)return a(!1);Object(b.interval)("#arc_toolbar_report .coin").then(e=>e?e.classList.contains("on")?a(!1):(e.click(),void Object(b.interval)(".coin-operated-m .like-checkbox").then(e=>{if(!e)return a(!1);e.click(),1===t?document.querySelector(".coin-operated-m .left-con").click():document.querySelector(".coin-operated-m .right-con").click(),setTimeout(()=>{document.querySelector(".coin-operated-m .coin-bottom .bi-btn").click(),a(!0)},500)})):a(!1))}))(a.coin,a.coinNumber),i=await(async(e,t)=>new u.a(a=>{if(!e)return a(!1);Object(b.interval)("#arc_toolbar_report .collect").then(e=>e?e.classList.contains("on")?a(!1):(e.click(),void chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},e=>{Object(b.interval)(".collection-m .group-list label",400).then(r=>{r||a(!1);const i=e.find(({id:e})=>e===+t),n=m()(document.querySelectorAll(".collection-m .group-list label")).find(e=>e.querySelector(".fav-title").textContent===i.title);n?(n.click(),setTimeout(()=>{document.querySelector(".collection-m .bottom .submit-move").click(),a(!0)},300)):a(!1)})})):a(!1))}))(a.collect,a.collectionId);(t||r||i)&&I.Message.info("已完成自动三连"),setTimeout(()=>{e.remove()},1e3)}})}),a(!0)),a(!1),!0)),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getSetting"},e=>{e.on&&chrome.runtime.sendMessage({command:"autoLikeCoinCollectDOMInitialized"})});var A=a(28),j=a.n(A),L=a(29),F=a.n(L),P=a(15),$=a.n(P),q=a(14),H=a.n(q),z=a(12),R=a.n(z);const U=o.a.createContext({});var V=a(2),J=a.n(V),B=a(20),X=a(23);function W(e,t){var a=f()(e);if(R.a){var r=R()(e);t&&(r=r.filter((function(t){return H()(e,t).enumerable}))),a.push.apply(a,r)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):$.a?F()(e,$()(a)):W(Object(a)).forEach((function(t){j()(e,t,H()(a,t))}))}return e}const{color:G}=X.a,Q=Object(s.d)(B.a).attrs({className:"bilibili-helper-screenshot-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${G("bilibili-blue")};
  box-sizing: border-box;
  background-color: white;
  color: ${G("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${G("bilibili-blue")};
    color: white;
  }
`,K=Object(s.d)(I.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
`,Z=s.d.div`
`,ee=s.d.div`
  .button:first-of-type {
    margin-right: 8px;
  }
`,te=document.createElement("div");document.body.appendChild(te);class ae extends o.a.Component{constructor(e){super(e),i()(this,"handleOnClick",()=>{const e=document.querySelector("#bofqi video, #bilibiliPlayer video, .bilibili-player-video video");if(e){e.crossOrigin="Anonymous";const t=document.createElement("canvas");t.width=e.videoWidth,t.height=e.videoHeight;t.getContext("2d").drawImage(e,0,0,e.videoWidth,e.videoHeight),this.setState({imgSrc:t.toDataURL("image/jpeg",100),showModal:!0})}}),i()(this,"handleOnCloseModal",()=>{this.setState({showModal:!1})}),i()(this,"handleOnDownloadImage",()=>{new u.a(e=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},t=>{if(!t||!t.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoScreenshot",data:Y(Y({},this.props.videoInfo),{},{format:"jpeg"})},t=>{e(t||!1)})})}).then(e=>{const t=Object(b.getFilename)(document)+(new Date).toLocaleString()+".jpeg",a=document.createElement("a");a.setAttribute("target","__blank"),a.setAttribute("download",""+(e||t)),a.href=this.state.imgSrc,a.click(),this.setState({showModal:!1})})}),this.state={imgSrc:null,showModal:!1}}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{onClick:()=>this.handleOnClick()},"截取画面"),p.a.createPortal(o.a.createElement(K,{open:this.state.showModal,className:"preview-modal",title:"视频截图预览",onClickMask:this.handleOnCloseModal,buttons:o.a.createElement(ee,null,o.a.createElement(B.a,{className:"border",onClick:this.handleOnCloseModal},"关闭"),o.a.createElement(B.a,{className:"primary",onClick:this.handleOnDownloadImage},"下载"))},o.a.createElement(Z,null,o.a.createElement("img",{className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),te))}}i()(ae,"contextType",U),i()(ae,"propTypes",{videoInfo:J.a.any});var re=a(45),ie=a.n(re),ne=a(34),oe=a.n(ne),le=a(154),pe=a.n(le),se=a(289),ce=a.n(se),de=a(94),ue=a.n(de),he=a(197),me=a.n(he),ge=a(288),fe=a.n(ge),be=a(42),ye=a.n(be);class ve{static initCrc32Table(e){for(let t=0;t<256;t++){let a=t;for(let e=0;e<8;e++)1&a?a=a>>>1^3988292384:a>>>=1;e[t]=a}}constructor(){this.crc32Table=new Uint32Array(256),ve.initCrc32Table(this.crc32Table),this.rainbowTableHash=new Uint32Array(1e5),this.rainbowTableValue=new Uint32Array(1e5);let e=new Uint32Array(1e5),t=new Uint32Array(65537);for(let a=0;a<1e5;a++){let r=this.compute(a)>>>0;e[a]=r,t[r>>>16]++}let a=0;this.shortHashBucketStarts=t.map(e=>a+=e);for(let t=0;t<1e5;t++){let a=--this.shortHashBucketStarts[e[t]>>>16];this.rainbowTableHash[a]=e[t],this.rainbowTableValue[a]=t}}compute(e,t=!1){let a=0;for(let t of e.toString())a=this.crc32Update(a,Number(t));if(t)for(let e=0;e<5;e++)a=this.crc32Update(a,0);return a}crack(e){let t=[],a=~Number("0x"+e)>>>0,r=4294967295;for(let e=1;e<10;e++)if(r=this.crc32Update(r,48),e<6)t=t.concat(this.lookup(a^r));else{let i=Math.pow(10,e-6),n=Math.pow(10,e-5);for(let e=i;e<n;e++)for(let i of this.lookup(a^r^this.compute(e,!0)))t.push(1e5*e+i)}return t}crc32Update(e,t){return e>>>8^this.crc32Table[255&(e^t)]}lookup(e){let t=[],a=(e>>>=0)>>>16;for(let r=this.shortHashBucketStarts[a];r<this.shortHashBucketStarts[a+1];r++)this.rainbowTableHash[r]===e&&t.push(this.rainbowTableValue[r]);return t}}var we=a(285),xe=(a(306),a(61)),ke=a(41),Se=a.n(ke),Ee={list:"https://api.bilibili.com/x/v1/dm/list.so",historyList:"https://api.bilibili.com/x/v2/dm/history",card:"https://api.bilibili.com/x/web-interface/card",seg:"https://api.bilibili.com/x/v2/dm/web/seg.so",historySeg:"https://api.bilibili.com/x/v2/dm/web/history/seg.so",view:"https://api.bilibili.com/x/v2/dm/web/view"};a(305);function Oe(e,t){var a=f()(e);if(R.a){var r=R()(e);t&&(r=r.filter((function(t){return H()(e,t).enumerable}))),a.push.apply(a,r)}return a}function De(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):$.a?F()(e,$()(a)):Oe(Object(a)).forEach((function(t){j()(e,t,H()(a,t))}))}return e}const{color:Ce}=xe.a,Me=new ve,Ne=s.d.div`
  .danmu-wrapper {
    position: relative;
  }
`,_e=s.d.div.attrs({className:"bilibili-helper-danmu-title"})`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #222;

  .count {
    margin-left: 10px;
    color: ${Ce("google-grey-500")};
  }
`,Te=Object(s.d)(we.a).attrs({className:"bilibili-helper-danmu-list"})`
  position: relative;
  min-height: 100px;
  max-height: 250px;
  margin-left: 4px;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  overflow: hidden;
  outline: none;

  & .no-data {
  }
`,Ie=s.d.div.attrs({className:"bilibili-helper-danmu-list"})`
  position: relative;
  min-height: 60px;
  max-height: 200px;
  margin-left: 4px;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  overflow: hidden;
  outline: none;

  .load-danmuku-button {
    height: 32px;
  }

  button {
    display: block;
    position: relative;
    margin: 4px;
    padding: 3px 12px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    letter-spacing: 0.3px;
    word-break: break-all;
    background-color: rgb(234, 244, 255);
    color: rgb(0, 161, 214);
    transition: all 0.3s ease 0s, visibility 0s ease 0s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      color: #004c65;
      background-color: #d4eaff;
    }
  }
`,Ae=s.d.div`
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 5px;
  box-sizing: border-box;
  padding: 6px;
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  overflow: auto;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  .reason-radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
    margin: 8px 0;

    label {
      padding-left: 8px;
      height: 24px;
      line-height: 20px;
      cursor: pointer;

      input[type="radio"] {
        margin-right: 4px;
        appearance: auto;
        vertical-align: middle;
      }
    }
  }

  .report-content {
    margin: 4px 0 16px;
    padding: 4px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }

  .action-box {
    display: flex;
    flex-direction: row-reverse;

    .button {
      height: 28px;
      line-height: 28px;
    }

    .confirm-report {
      margin-left: 8px;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    .cancel {
      box-sizing: border-box;
      border: 1px solid #eee;
    }
  }
`,je=s.d.input.attrs({className:"bilibili-helper-danmu-input"})`
  display: block;
  width: calc(100% - 4px);
  margin-left: 4px;
  padding: 4px 6px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 4px 4px;
  font-size: 12px;
`,Le=s.d.div`
  display: flex;
  margin-bottom: 1px;
  padding: 0 8px 1px;
  line-height: 20px;
  background-color: ${({hasQueried:e})=>e?"#d6e8f5":"white"};
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00a1d6;

    .target-words {
      color: #fff;
    }
  }

  & .time {
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 30px;
    padding-right: 6px;
  }

  & .danmu {
    position: relative;
    flex-grow: 1;
    margin: 0 7px 0 3px;
    padding: 0 7px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    .button {
      position: absolute;
      top: 2px;
      right: 2px;
      height: 18px;
      line-height: 18px;
      vertical-align: bottom;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      zoom: 0.9;
      visibility: hidden;
    }

    &:hover {
      .button {
        visibility: visible;
      }
    }
  }

  & .author {
    flex-shrink: 0;
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & .target-words {
    font-weight: bold;
    color: #00a1d6;
  }
`,Fe=s.d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: no-drop;
  user-select: none;
`,Pe=Object(s.d)(B.a)`
  margin-left: 10px;
  padding: 0;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  font-weight: normal;
  border: 1px solid ${Ce("bilibili-blue")};
  border-radius: 4px;
  color: ${({on:e})=>e?"#fff":Ce("bilibili-blue")};
  background-color: ${({on:e})=>e?Ce("bilibili-blue"):"#fff"};

  button {
    min-width: 35px;
  }
`,$e={1:"违法违禁",2:"色情低俗",9:"恶意刷屏",3:"赌博诈骗",4:"人身攻击",5:"侵犯隐私",6:"垃圾广告",10:"视频无关",7:"引战",8:"剧透",12:"青少年不良信息",11:"其它"};class qe extends o.a.Component{constructor(e){super(e),i()(this,"state",{loaded:!1,loadedXMLDANMU:!1,loading:!1,loadingText:null,danmuJSON:{list:[]},filterText:"",queryUserMode:null,currentCid:NaN,segmentDanmu:[],needLoadByHandle:!0,showDanmuReport:!1,reportDanmu:null,reportType:null,reportContent:"",dmid:null}),i()(this,"currentPid",null),i()(this,"addListener",()=>{const e=this;let t,a;chrome.runtime.onMessage.addListener(async(e,t,a)=>("loadNewTypeDanmu"===e.command?(this.getNewDANMUList(e.oid,e.pid,e.segmentIndex),a(!0)):"loadNewTypeHistoryDanmu"===e.command?(this.getNewHistoryDANMUData(e.oid,e.date,1),a(!0)):"loadHistoryDanmu"===e.command?e.date?(this.getDANMUList(e.cid,e.date),a(!0)):console.error("Error history danmu date: "+e.date):"loadCurrentDanmu"===e.command&&(this.getDANMUList(e.cid),a(!0)),!0)),window.addEventListener("message",(function(e){"pakku_ajax_request"===e.data.type&&/x\/v2\/dm\/history/.test(e.data.arg)&&chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"pakkuGetHistoryDanmu",url:e.data.arg})})),ye()(document).on("mouseenter","[helper-data-usercard-mid]",(function(){e.createCard(this,ye()(this).attr("helper-data-usercard-mid"))})),ye()(document).on("mouseenter","[helper-data-usercard-mid], #helper-card",(function(){e.removeCardSign=!1,a&&(clearTimeout(a),a=null),a=setTimeout(()=>{document.querySelector("#helper-card")&&(document.querySelector("#helper-card").style.display="block")},300),t&&(clearTimeout(t),t=null),t=setTimeout(()=>{e.removeCardSign=!0},300)})),ye()(document).on("mouseleave","[helper-data-usercard-mid], #helper-card, .bilibili-helper-danmu-wrapper",(function(){setTimeout(()=>{const t=document.querySelector("#helper-card");e.removeCardSign&&t&&(t.style.display="none")},200)}))}),i()(this,"getNewDanmuOption",(e,t,a)=>new u.a(r=>{const i=new Se.a(Ee.view);i.set("query",{type:a,oid:e,pid:t}),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmuOption",url:i.toString()},e=>{r(e)})})),i()(this,"getNewDANMUList",(e,t,a=1)=>new u.a((r,i)=>{e?1===a&&this.segmentDanmuOid!==e?(this.segmentDanmuOid=e,this.segmentDanmuList=[],this.getNewDanmuOption(e,t,1).then(({pageSize:a,total:i})=>{this.segmentDanmuPageSize=a,this.segmentSize=i,this.currentOid=e,this.currentPid=t,this.setState({needLoadByHandle:!0,loading:!1,loadingText:""},()=>r())})):r():(this.setState({needLoadByHandle:!0,loading:!1,loadingText:""}),i())})),i()(this,"getNewHistoryDANMUData",(e,t,a=1)=>{const r=new Se.a(Ee.historySeg);if(r.set("query",{type:1,oid:e,date:t}),1===a){const t={count:0,list:[],cid:e};this.orderedJSON=De({},t),this.setState({danmuJSON:t,loaded:!0,loading:!1,currentCid:e},()=>{let t=`<?xml version="1.0" encoding="UTF-8"?><i><chatserver></chatserver><chatid>${e}</chatid><mission></mission><maxlimit></maxlimit><state></state><real_name></real_name><source></source>`;this.danmuDocumentStr=t+"</i>"})}return new u.a(t=>{chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmu",url:r.toString()},r=>{if(!r||0===r.length)return t(!1);const i=r.map(({id:e,content:t,midHash:a,mode:r,progress:i,fontsize:n,color:o,ctime:l,idStr:p,weight:s})=>{if(7===r)try{t=t.replace(/[\n\r]/g,""),t=JSON.parse(t)[4]}catch(e){console.error(t)}return{rowId:e,danmu:t,authorHash:a,fontsize:n,color:o,mode:r,ctime:l,idStr:p,weight:s,progress:i||0,time:Object(b.parseTime)(i||0)}});this.segmentDanmuList[a-1]=this.sortJSONByTime(i);const n=this.segmentDanmuList.reduce((e,t)=>(e.push(...t),e),[]),o={count:n.length,list:n,cid:e};this.orderedJSON=De({},o),this.setState({danmuJSON:o,loaded:!0,loading:!1,currentCid:e},()=>{let a=`<?xml version="1.0" encoding="UTF-8"?><i><chatserver></chatserver><chatid>${e}</chatid><mission></mission><maxlimit></maxlimit><state></state><real_name></real_name><source></source>`;this.danmuDocumentStr=n.reduce((e,t)=>{const{danmu:r,authorHash:i,mode:n,progress:o,fontsize:l,color:p,ctime:s,idStr:c,weight:d}=t;return a+=`<d p="${(o||0)/1e3},${n},${l},${p},${s},${d},${i},${c}">${Object(b.encodeHTMLEntries)(r)}</d>`},a)+"</i>",t(!0)})})})}),i()(this,"getDanmuData",async(e,t,a)=>{const r=new Se.a(Ee.seg);if(r.set("query",{type:1,oid:e,pid:t,segment_index:a}),1===a){const t={count:0,list:[],cid:e};this.orderedJSON=De({},t),this.setState({danmuJSON:t,loaded:!0,loading:!1,currentCid:e},()=>{let t=`<?xml version="1.0" encoding="UTF-8"?><i><chatserver></chatserver><chatid>${e}</chatid><mission></mission><maxlimit></maxlimit><state></state><real_name></real_name><source></source>`;this.danmuDocumentStr=t+"</i>"})}return new u.a(t=>{chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmu",url:r.toString()},r=>{const i=r.map(({id:e,content:t,midHash:a,mode:r,progress:i,fontsize:n,color:o,ctime:l,idStr:p,weight:s})=>{if(7===r)try{t=t.replace(/[\n\r]/g,""),t=JSON.parse(t)[4]}catch(e){console.error(t)}return{rowId:e,danmu:t,authorHash:a,fontsize:n,color:o,mode:r,ctime:l,idStr:p,weight:s,progress:i||0,time:Object(b.parseTime)(i||0)}});this.segmentDanmuList[a-1]=this.sortJSONByTime(i);const n=this.segmentDanmuList.reduce((e,t)=>(e.push(...t),e),[]),o={count:n.length,list:n,cid:e};this.orderedJSON=De({},o),this.setState({danmuJSON:o,loaded:!0,loading:!1,currentCid:e},()=>{let a=`<?xml version="1.0" encoding="UTF-8"?><i><chatserver></chatserver><chatid>${e}</chatid><mission></mission><maxlimit></maxlimit><state></state><real_name></real_name><source></source>`;this.danmuDocumentStr=n.reduce((e,t)=>{const{danmu:r,authorHash:i,mode:n,progress:o,fontsize:l,color:p,ctime:s,idStr:c,weight:d}=t;return a+=`<d p="${(o||0)/1e3},${n},${l},${p},${s},${d},${i},${c}">${Object(b.encodeHTMLEntries)(r)}</d>`},a)+"</i>",t(!0)})})}).then(r=>{if(r&&a<this.segmentSize)return this.getDanmuData(e,t,a+1)})}),i()(this,"getVideoInitialData",()=>new u.a((e,t)=>{this.injectScript("\n                (()=>{\n                    if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.epInfo) {\n                        const pid = window.__INITIAL_STATE__.epInfo.aid;\n                        const oid = window.__INITIAL_STATE__.epInfo.cid;\n                        window.postMessage({command: 'setVideoInitialData', pid, oid}, '*');\n                    } else if (window.__INITIAL_STATE__ && window.playerInfo) {\n                        const pid = window.playerInfo.aid;\n                        const oid = window.playerInfo.cid;\n                        window.postMessage({command: 'setVideoInitialData', pid, oid}, '*');\n                    }\n                })();\n            ",5e3);const a=r=>{const{data:i}=r;"setVideoInitialData"===i.command&&(window.removeEventListener("message",a),i?e(i):t())};window.addEventListener("message",a)})),i()(this,"getVideoDuration",()=>new u.a((e,t)=>{window.postMessage({command:"getVideoDuration"},"*"),this.injectScript("\n                    (()=>{\n                        const messageCallback = (event) => {\n                            const {data} = event;\n                            if (data.command === 'getVideoDuration') {\n                                window.postMessage({command: 'setDuration', duration: window.player.getDuration()}, '*');\n                                window.removeEventListener('message', messageCallback);\n                            }\n                        };\n                        window.addEventListener('message', messageCallback);\n                    })()\n                ",5e3);const a=r=>{const{data:i}=r;"setDuration"===i.command&&(window.removeEventListener("message",a),i.duration?e(i.duration):t())};window.addEventListener("message",a)})),i()(this,"injectScript",(e,t=0)=>{const a=document.createElement("script");a.innerHTML=e,document.body.appendChild(a),t&&setTimeout(()=>{a.remove()},t)}),i()(this,"getDANMUList",(e,t)=>{if(e&&!this.state.loading){const{list:a,historyList:r}=Ee,i=setTimeout(()=>{this.setState({loading:!0,loadingText:"弹幕加载中~(๑•̀ㅂ•́)و"})},800),n=new Se.a(t?r:a);n.set("query",{oid:e,type:1,date:t}),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchDanmu",url:n.toString()},a=>{if(clearTimeout(i),a){t&&(this.danmuDate=t);const r=new DOMParser;this.danmuDocumentStr=a,this.danmuDocument=r.parseFromString(a,"application/xml");const i=this.danmuDocument2JSON(this.danmuDocument);i.list=this.sortJSONByTime(i.list),this.orderedJSON=De({},i),this.setState({danmuJSON:i,loaded:!0,loading:!1,currentCid:e})}else this.setState({loadingText:"弹幕加载失败!请刷新页面！"})})}}),i()(this,"getUserInfoByUid",e=>new u.a(t=>{const a=new Se.a(Ee.card);a.set("query",{mid:e,photo:1}),e&&chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchDanmu",url:a.toString()},a=>{if(a){const{code:r,data:i}=JSON.parse(a);if(0===r){this.isRobotUser(i)&&t(!1);const{card:a,space:r,follower:n,following:o}=i;this.userMap[e]=De(De(De({},a),r),{},{follower:n,following:o}),t(e)}else console.error(a),this.setState({loadingText:"查询失败!"},()=>{setTimeout(()=>this.setState({loading:!1}),3e3)}),t(!1)}else console.error(a),this.setState({loadingText:"查询失败!"},()=>{setTimeout(()=>this.setState({loading:!1}),3e3)}),t(!1)})})),i()(this,"isRobotUser",(e={})=>{const{card:t}=e,{level_info:a}=t,{current_level:r}=a;return 0===r}),i()(this,"sortJSONByTime",(e,t="time")=>fe()(e,t)),i()(this,"danmuDocument2JSON",e=>{const t=[];return me()(e.getElementsByTagName("d"),e=>{const[a,r,i,n,o,l,p,s]=e.getAttribute("p").split(",");let c=e.innerHTML.replace(/[\n\r]/g,""),d=c;try{d=JSON.parse(d),d=d instanceof Array?d[4]:c}catch(e){}t.push({authorHash:p,color:n,danmu:d.replace(/[\n\r]/g,""),ctime:o,fontsize:i,idStr:s,mode:r,progress:ie()(a,10),rowId:s,weight:+l>1?l:1,time:Object(b.parseTime)(1e3*a)})}),this.setState({loaded:!0,loadedXMLDANMU:!0}),{cid:Number(e.getElementsByTagName("chatid")[0].innerHTML),count:t.length,list:t}}),i()(this,"getRowHeight",({index:e})=>{const{danmuJSON:t}=this.state,a=t.list[e],r=this.authorHashMap[a.authorHash];return r&&20*r.length||20}),i()(this,"handleInputChange",e=>{const t=e.target.value,{danmuJSON:a}=this.state,{cid:r}=a;if(e.target.value){const e=[];me()(this.orderedJSON.list,a=>{if(a.danmu.indexOf(t)>=0){const r=a.danmu.split(t),i=r.reduce((e,a,i)=>{if(i<r.length)return""===a?e.push(o.a.createElement("span",{key:i,className:"target-words"},t)):i!==r.length-1?e.push(a,o.a.createElement("span",{key:i,className:"target-words"},t)):e.push(a),e},[]);e.push(De(De({},a),{},{danmu:i}))}}),this.setState({danmuJSON:{cid:r,count:e.length,list:e}})}else{const{count:e,list:t}=this.orderedJSON;this.setState({danmuJSON:{cid:r,count:e,list:t}})}}),i()(this,"handleDanmuLineClick",e=>{let t=/^b(\d+)$/.exec(e),a=[];a=t&&t[1]?[t[1]]:Me.crack(e),this.setState({loading:!0,loadingText:"努力查询中~(๑•̀ㅂ•́)و"});let r=[];u.a.all(a.map(e=>this.getUserInfoByUid(e))).then(e=>{r=r.concat(ue()(e))}).then(()=>{r.length>0&&(this.authorHashMap[e]=r),this.setState({loading:!1},()=>{this.danmuListRef.recomputeRowHeights(),this.danmuListRef.forceUpdate()})})}),i()(this,"handleAuthorClick",(e,t)=>{if(this.state.queryUserMode)this.setState({queryUserMode:!1,danmuJSON:this.queryUserModeTemplateMap},()=>{this.danmuListRef.scrollToRow(this.currentRowIndex)});else{const a=[];this.queryUserModeTemplateMap=De({},this.state.danmuJSON);const r=t.map(e=>ce()(this.authorHashMap,t=>!!~t.indexOf(e)));this.orderedJSON.list.forEach(e=>{r.includes(e.authorHash)&&a.push(De({},e))}),this.setState({queryUserMode:!0,danmuJSON:{cid:this.orderedJSON.cid,count:a.length,list:a}},()=>{this.currentRowIndex=e})}}),i()(this,"handleDownloadClick",e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_danmu",label:e}),new u.a(t=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},a=>{if(!a||!a.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoDanmu",data:De(De({},this.props.videoInfo),{},{format:e})},e=>{t(e||!1)})})}).then(t=>{console.log(t),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"ass"===e?"downloadDanmuASS":"downloadDanmuXML",cid:this.state.currentCid,danmuDocumentStr:this.danmuDocumentStr,danmuJSON:this.orderedJSON,date:this.danmuDate,renamedFilename:t,filename:Object(b.getFilename)(document),origin:"ass"===e?document.location.href:null})})}),i()(this,"handleOnClickLoadDanmu",()=>{this.state.loadedXMLDANMU?this.setState({loading:!1,needLoadByHandle:!1}):new u.a(e=>{this.currentPid&&this.currentOid?e():this.getVideoInitialData().then(({oid:t,pid:a})=>{this.currentOid=t,this.currentPid=a,e()})}).then(()=>{this.setState({loading:!0,loadingText:"弹幕加载中~(๑•̀ㅂ•́)و",needLoadByHandle:!1},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_load_danmu_button"}),this.getNewDANMUList(this.currentOid,this.currentPid).then(()=>this.getDanmuData(this.currentOid,this.currentPid,1))})}).then(()=>{this.setState({loading:!1,needLoadByHandle:!1})}).catch(e=>console.error(e))}),i()(this,"createCardDOM",e=>{if(!e)return console.error("no user data to create card");const{mid:t,face:a,s_img:r,name:i,sign:n,level_info:o,following:l}=e;let p,s,c,d,u,h,m,g,f,b,y;s=document.querySelector(".helper-card-header")||document.createElement("div"),c=document.querySelector(".helper-card-container")||document.createElement("div"),d=document.querySelector(".helper-card-face")||document.createElement("img"),u=document.querySelector(".helper-card-user")||document.createElement("p"),h=document.querySelector(".helper-card-name")||document.createElement("a"),m=document.querySelector(".helper-card-sign")||document.createElement("p"),g=document.querySelector(".helper-card-level")||document.createElement("a"),f=document.querySelector(".helper-card-feed")||document.createElement("div"),b=document.querySelector(".helper-card-like-btn")||document.createElement("a"),y=document.querySelector(".helper-card-like-btn")||document.createElement("a"),p=document.querySelector("#helper-card"),p||(p=document.createElement("div"),s.setAttribute("class","helper-card-header bg"),c.setAttribute("class","helper-card-container info"),d.setAttribute("class","helper-card-face face"),u.setAttribute("class","helper-card-user user"),h.setAttribute("class","helper-card-name name"),h.setAttribute("target","_blank"),m.setAttribute("class","helper-card-sign sign"),f.setAttribute("class","helper-card-btn btn-box"),p.setAttribute("id","helper-card"),p.setAttribute("class","user-card"),g.setAttribute("class","helper-card-level level"),g.setAttribute("href","//www.bilibili.com/html/help.html#k_2"),g.setAttribute("target","_blank"),b.setAttribute("class","like"),b.innerHTML='<span class="hover-text">取消关注</span><span class="default-text">+关注</span>',y.setAttribute("class","message"),y.setAttribute("target","_blank"),y.innerText="发消息",u.appendChild(h),u.appendChild(g),c.appendChild(u),c.appendChild(m),f.appendChild(b),f.appendChild(y),p.appendChild(s),p.appendChild(d),p.appendChild(c),p.appendChild(f)),s.setAttribute("style",`background-image: url(${r.replace(/^http:/,"https:")});`),d.setAttribute("src",a.replace(/^http:/,"https:"));const v=document.createElement("i");return v.setAttribute("class","level l"+o.current_level),g.innerHTML="",g.appendChild(v),b.setAttribute("mid",t),b.setAttribute("uname",i),b.onclick=function(){this.userMap[t].following=!l},l&&b.setAttribute("class","like liked"),y.setAttribute("href","//message.bilibili.com/#whisper/mid"+t),h.innerText=i,h.setAttribute("href","https://space.bilibili.com/"+t),m.innerText=n,p}),i()(this,"createCard",(e,t)=>{const a=this.userMap[t],r=this.createCardDOM(a);document.querySelector("#helper-card")||document.querySelector("body").appendChild(r),this.setTargetPosition(e,r)}),i()(this,"setTargetPosition",(e,t)=>{const{height:a,top:r,left:i}=e.getBoundingClientRect(),{height:n}=t.getBoundingClientRect();n&&(this.lastHeight=n),t.style.top=r>=n?r-this.lastHeight-2+"px":r+a+2+"px",i+377<=window.innerWidth?t.style.left=i+"px":t.style.left=window.innerWidth-377+"px"}),i()(this,"handleOnClickSetReportType",e=>{this.setState({reportType:+e.target.value})}),i()(this,"handleOnClickPostRepost",()=>{const{currentCid:e,reportType:t,dmid:a,reportContent:r}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_report_danmu_confirm_button"}),chrome.runtime.sendMessage({target:"videoDanmu",event:"postReport",cid:e,reason:t,dmid:a,content:r},e=>{this.setState({showDanmuReport:!1})})}),i()(this,"handleOnClickReportDanmu",(e,t,a)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_report_danmu_button"}),this.setState({showDanmuReport:!0,reportType:null,reportContent:"",reportDanmu:t,dmid:a})}),i()(this,"handleOnChangeReportContext",e=>{this.setState({reportContent:e.target.value})}),i()(this,"renderHeader",(e=this.state.danmuJSON)=>o.a.createElement(_e,null,o.a.createElement("span",{style:{marginRight:"auto"}},"弹幕发送者查询 与 弹幕下载",e.count&&!this.state.needLoadByHandle?o.a.createElement("span",{className:"count"},e.count," 条"):null),this.state.needLoadByHandle?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(Pe,{title:"下载 ASS 格式弹幕文件",onClick:()=>this.handleDownloadClick("ass")},"ASS"),o.a.createElement(Pe,{title:"下载 XML 格式弹幕文件",onClick:()=>this.handleDownloadClick("xml")},"XML")))),i()(this,"renderLine",({index:e,style:t})=>{const{danmuJSON:a}=this.state,r=a.list[e],{rowId:i,danmu:n,authorHash:l,time:p}=r,s=this.authorHashMap[l];let c=s?pe()(s,e=>this.userMap[e]?this.userMap[e].name:""):null;return o.a.createElement(Le,{key:i,title:`[${p}] ${n} ${c?"by:"+c.join(","):""}`,onClick:()=>s?this.handleAuthorClick(e,s):this.handleDanmuLineClick(l),hasQueried:!oe()(c),style:t},o.a.createElement("span",{className:"time"},p),o.a.createElement("span",{className:"danmu"},n,o.a.createElement(B.a,{onClick:e=>this.handleOnClickReportDanmu(e,n,i)},"举报")),o.a.createElement("span",{className:"author"},c?c.map((e,t)=>o.a.createElement("div",{key:e,"helper-data-usercard-mid":s[t]},e)):null))}),i()(this,"renderList",()=>o.a.createElement(Te,{ref:e=>this.danmuListRef=e,width:418,height:this.state.danmuJSON&&this.state.danmuJSON.list.length>0?250:100,rowCount:this.state.danmuJSON.list.length,rowHeight:this.getRowHeight,rowRenderer:this.renderLine,noRowsRenderer:()=>o.a.createElement(Le,{key:"none"},"无数据"),scrollToAlignment:"center"})),i()(this,"renderDanmuReport",()=>{const{showDanmuReport:e,reportDanmu:t,reportType:a,reportContent:r,needLoadByHandle:i}=this.state,n=11===a&&!!r||!!a&&11!==a;return o.a.createElement(Ae,{className:!i&&e?"show":""},o.a.createElement("div",null,o.a.createElement("b",null,"举报弹幕: "),o.a.createElement("span",null,t)),o.a.createElement("div",{className:"report-body"},o.a.createElement("div",{className:"reason-radio-group"},f()($e).map(e=>o.a.createElement("label",{key:e},o.a.createElement("input",{type:"radio",name:"reportDanmu",value:e,checked:!!a&&a===+e,onChange:this.handleOnClickSetReportType}),o.a.createElement("span",null,$e[e])))),11===a&&o.a.createElement("textarea",{className:"report-content",value:r,onChange:this.handleOnChangeReportContext})),o.a.createElement("div",{className:"action-box"},o.a.createElement(B.a,{className:"confirm-report",disabled:!n,onClick:this.handleOnClickPostRepost},"确定"),o.a.createElement(B.a,{className:"cancel",onClick:()=>this.setState({showDanmuReport:!1})},"取消")))}),this.orderedJSON={},this.userMap={},this.userCardMap={},this.queryUserModeTemplateMap={},this.danmuDocumentStr=null;const t=new Date;this.danmuDate=`${t.getMonth()+1}-${t.getDate()}`,this.addListener(),this.danmuListRef=null,this.currentRowIndex=0,this.authorHashMap={},this.segmentDanmuList=[],this.segmentDanmuOid=null,this.segmentSize=1,this.segmentDanmuPageSize=36e4,this.removeCardSign=null,this.lasetHeight=null,this.currentOid=null}componentDidMount(){chrome.runtime.sendMessage({command:"danmuDOMInitialized"}),ye()(".player-sidebar-list-item-inner, .bnj-player-single-item-mask").click(()=>{setTimeout(()=>{chrome.runtime.sendMessage({command:"danmuDOMInitialized"})},500)})}render(){const{needLoadByHandle:e,loading:t}=this.state;return o.a.createElement(Ne,null,this.renderHeader(),o.a.createElement("div",{className:"danmu-wrapper"},!e&&this.renderList(),e&&o.a.createElement(Ie,null,o.a.createElement("button",{className:"load-danmuku-button",onClick:this.handleOnClickLoadDanmu},"点击加载完整弹幕，开始查询或下载")),this.renderDanmuReport()),o.a.createElement(je,{placeholder:"请输入需要查询的弹幕内容",onChange:this.handleInputChange}),t&&o.a.createElement(Fe,null,this.state.loadingText))}}i()(qe,"contextType",U),i()(qe,"propTypes",{settings:J.a.object,videoInfo:J.a.any});var He=a(48);function ze(e,t){var a=f()(e);if(R.a){var r=R()(e);t&&(r=r.filter((function(t){return H()(e,t).enumerable}))),a.push.apply(a,r)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):$.a?F()(e,$()(a)):ze(Object(a)).forEach((function(t){j()(e,t,H()(a,t))}))}return e}const{color:Ue}=xe.a,Ve=s.d.div`
  margin-bottom: 12px;
`,Je=s.d.div.attrs({className:"bilibili-helper-subtitle-title"})`
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;

  .count {
    margin-left: 10px;
    color: ${Ue("google-grey-500")};
  }
`,Be=s.d.div`
  display: flex;
  flex-wrap: wrap;
`,Xe=s.d.div`
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  margin: 4px;
  padding: 3px;
  width: 100%;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.3s;

  a {
    position: relative;
    top: -2px;
    padding: 0 3px;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,We=s.d.span`
  position: relative;
  display: inline-block;
  //padding: 0 8px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  border-right: 1px solid #fff;
  background-color: #eaf4ff;
  text-align: center;

  &:last-of-type {
    border-right: none;
  }

  &:hover {
    background-color: #d4eaff;
  }

  p {
    color: ${Ue("google-grey-900")};
    font-size: 12px;
  }

  .format {
    position: absolute;
    zoom: 0.7;
    right: 0;
    bottom: 2px;
    left: 0;
    height: 16px;
    line-height: 16px;
    color: var(--bilibili-pink);
    text-align: center;
  }
`;class Ye extends o.a.Component{constructor(e){super(e),i()(this,"handleDownloadSubtitle",(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_subtitle",label:e}),new u.a(a=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},r=>{if(!r||!r.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"subtitle",data:Re(Re({},this.props.videoInfo),{},{lang:t.lan,format:e})},e=>{a(e||!1)})})}).then(a=>{chrome.runtime.sendMessage({target:"videoSubtitleDownload",event:"downloadSubtitle",subtitleObject:t,type:e,filename:a||Object(He.f)(document)})})}),this.state={subtitleData:[]}}componentDidMount(){chrome.runtime.sendMessage({command:"videoSubtitleDownloadDOMInitialized"}),chrome.runtime.onMessage.addListener((e,t,a)=>{"loadSubtitle"===e.command&&e.subtitles&&(this.setState({subtitleData:e.subtitles}),a(!0))})}render(){const{subtitleData:e}=this.state;return 0!==e.length?o.a.createElement(Ve,null,o.a.createElement(Je,null,"字幕下载"),o.a.createElement(Be,null,e&&0!==e.length?o.a.createElement(Xe,null,e.map(e=>{const{id:t,lan_doc:a}=e;return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement(We,{onClick:()=>this.handleDownloadSubtitle("srt",e)},o.a.createElement("a",null,a.replace("（"," (").replace("）",")")),o.a.createElement("i",{className:"format"},"SRT")),o.a.createElement(We,{onClick:()=>this.handleDownloadSubtitle("json",e)},o.a.createElement("a",null,a.replace("（"," (").replace("）",")")),o.a.createElement("i",{className:"format"},"JSON")))})):o.a.createElement(We,null,o.a.createElement("p",null,"未登录")))):null}}function Ge(e,t){var a=f()(e);if(R.a){var r=R()(e);t&&(r=r.filter((function(t){return H()(e,t).enumerable}))),a.push.apply(a,r)}return a}function Qe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):$.a?F()(e,$()(a)):Ge(Object(a)).forEach((function(t){j()(e,t,H()(a,t))}))}return e}i()(Ye,"contextType",U),i()(Ye,"propTypes",{videoInfo:J.a.any});const{color:Ke}=X.a,Ze=Object(s.d)(B.a).attrs({className:"bilibili-helper-cover-download-btn"})`
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 28px;
  border-radius: 3px;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.3px;
  background-color: #eaf4ff;
  transition: background-color .3s, color .3s;
  cursor: pointer;
  word-break: break-all;
  overflow: hidden;

  &:hover {
    background-color: #d4eaff;
  }

  .button-view {
    padding: 3px 8px;
    border-right: 1px solid #fff;
    height: inherit;
    font-size: 12px;
    font-weight: normal;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,et=Object(s.d)(I.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
`,tt=s.d.div`
`,at=s.d.div`
  .button:first-of-type {
    margin-right: 8px;
  }
`,rt=document.createElement("div");document.body.appendChild(rt);class it extends o.a.Component{constructor(e){super(e),i()(this,"handleOnClick",()=>{document.querySelector("#bofqi video, #bilibiliPlayer video, .bilibili-player-video video")&&this.setState({imgSrc:this.props.imgSrc,showModal:!0},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_cover_download_button"})})}),i()(this,"handleOnCloseModal",()=>{this.setState({showModal:!1})}),i()(this,"handleOnDownloadImage",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_video_cover"});const e=Object(b.getFilename)(document),t=encodeURIComponent(`${e} ${(new Date).toLocaleString().replace(/\//g,"-")}.jpeg`.replace(/[|"*:<>]/g,"_"));new u.a(e=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},t=>{if(!t||!t.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoCover",data:Qe(Qe({},this.props.videoInfo),{},{format:"jpeg"})},t=>{console.log(t),e(t||!1)})})}).then(e=>{const a=e||t;console.log(e,a),chrome.runtime.sendMessage({target:"downloadController",event:"create",name:a,data:{saveAs:!0,url:this.state.imgSrc.replace(/^\/\//,"https://").replace(/http:/,"https:"),filename:a,headers:[{name:"Content-Disposition",value:`attachment; filename="${a}"; filename*="utf-8' '${a}"`.replace("/","%2f")}]}},()=>{this.setState({showModal:!1})})})}),this.state={imgSrc:null,showModal:!1}}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ze,{onClick:this.handleOnClick},"视频封面下载"),p.a.createPortal(o.a.createElement(et,{open:this.state.showModal,className:"preview-modal",title:"视频封面预览",onClickMask:this.handleOnCloseModal,buttons:o.a.createElement(at,null,o.a.createElement(B.a,{className:"border",onClick:this.handleOnCloseModal},"关闭"),o.a.createElement(B.a,{className:"primary",onClick:this.handleOnDownloadImage},"下载"))},o.a.createElement(tt,null,o.a.createElement("img",{className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),rt))}}function nt(e,t){var a=f()(e);if(R.a){var r=R()(e);t&&(r=r.filter((function(t){return H()(e,t).enumerable}))),a.push.apply(a,r)}return a}function ot(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?nt(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):$.a?F()(e,$()(a)):nt(Object(a)).forEach((function(t){j()(e,t,H()(a,t))}))}return e}i()(it,"propTypes",{imgSrc:J.a.string,videoInfo:J.a.any}),Object(b.injectIconfont)("font_1690169_ehanmguymy7");const lt=()=>new u.a(e=>{const t=document.createElement("script");t.innerHTML="window.postMessage({command: 'sendInitData', pageData: window.__INITIAL_STATE__}, '*');",document.body.appendChild(t);const a=r=>{const{data:i}=r;"sendInitData"===i.command&&(e(i.pageData),t.remove(),window.removeEventListener("message",a))};window.addEventListener("message",a)}).then(e=>!0),{color:pt}=xe.a,st=(s.e`
  0% {
    opacity: 0;
    z-index: 1;
  }
  100% {
    opacity: 1;
  }
`,s.d.div`
  margin-bottom: 12px;

  .basic-info {
    display: grid;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 4px 0;
    padding: 3px;
    width: calc(100% - 10px);
    font-weight: normal;

    .button:not(.bilibili-helper-cover-download-btn) {
      position: relative;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid #fff;
      border-radius: 3px;
      font-size: 12px;
      background-color: #eaf4ff;
      color: #00a1d6;
      transition: background-color .3s, color .3s;

      &:hover {
        color: #004c65;
        background-color: #d4eaff;
      }

      &:last-of-type {
        border: none;
      }

      &::after {
        content: '复制成功';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin-left: -5%;
        margin-top: -1%;
        width: 110%;
        height: 110%;
        text-align: center;
        background-color: #eaf4ff;
        border-radius: 4px;
        opacity: 0;
        transition: opacity .3s .75s;
        pointer-events: none;
      }

      &:focus::after {
        transition: opacity .3s;
      }

      .format {
        position: absolute;
        zoom: 0.7;
        right: 0;
        top: 26px;
        left: 0;
        height: 16px;
        line-height: 16px;
        color: var(--bilibili-pink);
      }

      .description {
        position: relative;
        top: -2px;
      }
    }

    b {
      position: absolute;
      zoom: 0.7;
      right: 0;
      bottom: 2px;
      left: 0;
      height: 16px;
      line-height: 16px;
      font-weight: normal;
      color: var(--bilibili-pink);
      text-align: center;
    }
  }
`),ct=s.d.div.attrs({className:"bilibili-helper-video-download-title"})`
  position: relative;
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #222;

  .count {
    margin-left: 10px;
    color: ${pt("google-grey-500")};
  }

  .helper-link, .ad-link {
    margin-left: 12px;
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
    color: var(--bilibili-blue);
  }
`,dt=(s.d.p`
  font-size: 12px;
  min-width: unset;
  color: rgb(255, 255, 255);
  background-color: rgb(251, 114, 153);
  margin-bottom: 4px;
  padding: 0 4px;
  width: 458px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(251, 114, 153);
  border-image: initial;
  border-radius: 4px;
  zoom: 0.9;
`,s.d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .bilibili-helper-2-icon-cat-paw {
    margin-right: 8px;
    transform: rotate(-45deg);
    color: var(--bilibili-pink);
    zoom: 0.7;
  }
`),ut=s.d.div`
  position: relative;
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: border-box;
  margin: 0 4px 0;
  padding: 3px;
  width: calc(100% - 6px);
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.3px;
  transition: all 0.3s, visibility 0s;
  word-break: break-all;
  overflow: hidden;


  .button {
    position: relative;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-right: 1px solid #fff;
    border-radius: 3px;
    font-size: 12px;
    background-color: #eaf4ff;
    color: #00a1d6;
    transition: background-color .3s, color .3s;
    outline: none;

    &:hover {
      color: #004c65;
      background-color: #d4eaff;
    }

    &:last-of-type {
      border: none;
    }

    //&.vip {
    //  background-color: var(--bilibili-pink);
    //  color: var(--bilibili-gray);
    //
    //  .download-link {
    //    color: var(--bilibili-pink);
    //  }
    //}

    &.has-link {
      height: fit-content;
      //line-height: 48px;

      .description {
        //top: -12px;
      }

      .link-group {
        display: grid;
        grid-column-gap: 2px;
        grid-row-gap: 0;
        grid-template-columns: repeat(4, 1fr);
        margin: 0 auto;
        padding: 0 2px;
        max-width: 120px;
        width: 100%;
        box-sizing: border-box;

        .download-link {
          width: 100%;
          padding: 0 2px;
          box-sizing: border-box;

          :hover {
            color: var(--bilibili-pink);
          }
        }
      }
    }

    .format {
      position: absolute;
      zoom: 0.7;
      right: 0;
      top: 36px;
      left: 0;
      height: 16px;
      line-height: 16px;
      color: var(--bilibili-pink);
    }

    &.vip {
      .vip-tag {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        top: -3px;
        left: -3px;
        background-size: 20px;
        background-image: url(https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png@40w_40h_1c.webp);
        z-index: -1;
      }
    }

    //.description {
    //  position: relative;
    //  top: -2px;
    //}

    .download-link {
      position: relative;
      top: -4px;
      display: block;
      margin: 0 auto 0;
      width: 94%;
      height: 20px;
      line-height: 20px;
      border-radius: 2px;
      background-color: #fff;
      color: var(--bilibili-blue);
      //zoom: 0.8;
    }
  }

  .can-not-download {
    grid-column-end: span 4;
  }
`,ht=Object(s.d)(B.a).attrs({className:"bilibili-helper-audio-download-btn"})`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 30px;
  line-height: 26px;
  border-radius: 3px;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.3px;
  background-color: #eaf4ff;
  transition: background-color .3s, color .3s;
  cursor: pointer;
  word-break: break-all;
  overflow: hidden;

  &:hover {
    background-color: #d4eaff;
  }

  .button-view {
    border-right: 1px solid #fff;
    height: inherit;
    font-size: 12px;
    font-weight: normal;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`;class mt extends o.a.Component{constructor(e){super(e),i()(this,"state",{currentVideoInfo:null,qualityMap:{},pageData:null,settings:null,errorStr:"",loading:!1,canDownload:!1,videoSrc:null,audioSrc:null,ad:null,bhAccount:null,isVIP:!1,isSuperVIP:!1}),i()(this,"addListener",()=>{chrome.runtime.onMessage.addListener((e,t,a)=>{if("initNewVideoIds"===e.command)e.data&&this.setState({currentVideoInfo:e.data,loading:!0},()=>{this.context.setVideoInfo(this.state.currentVideoInfo),this.getVideoBasicInfo(e.data.cid,e.data.aid)}),a(!0);else if("initNewVideoPlayInfo"===e.command)e.data?lt().then(t=>{this.setState({errorStr:"",currentVideoInfo:ot(ot({},this.state.currentVideoInfo),e.data),canDownload:t},()=>{this.context.setVideoInfo(this.state.currentVideoInfo)})}):this.setState({errorStr:"该视频已被限制下载"}),a(!0);else if("initDashVideoPlayInfo"===e.command&&e.data){const t=e.data.dash.audio[0].backupUrl[0].replace(/^https?:\/\/(.+?)\//,()=>"https://upos-sz-mirrorkodoo1.bilivideo.com/"),a=e.data.dash.video[0].backupUrl[0].replace(/^https?:\/\/(.+?)\//,()=>"https://upos-sz-mirrorkodoo1.bilivideo.com/");this.setState({videoSrc:a,audioSrc:t+"&requestFrom=bilibili_helper_2&requestType=audioFromVideo"}),console.log(e)}return!0})}),i()(this,"getVideoBasicInfo",(e,t)=>new u.a(e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/view?aid="+t,options:{contentType:"json"}},t=>{if(t&&0===t.code){const{currentVideoInfo:a}=this.state;this.setState({currentVideoInfo:ot(ot(ot({},t.data),a),{},{pic:t.data.pic}),loading:!1,qualityMap:{}},()=>{this.context.setVideoInfo(this.state.currentVideoInfo),this.getAudioInfo(),e()})}else e()})})),i()(this,"getAudioInfo",()=>(location.pathname.match("^/bangumi/play/")||fetch(location.href,{method:"GET",headers:{"content-type":"text/html; charset=utf-8"}}).then(e=>e.text()).then(e=>{const t=/<script>window\.__playinfo__=(.+?)<\/script>/.exec(e);if(t&&t[1]){const e=JSON.parse(t[1]).data.dash.audio[0].backupUrl[0].replace(/^https?:\/\/(.+?)\//,()=>"https://upos-sz-mirrorkodoo1.bilivideo.com/"),a=JSON.parse(t[1]).data.dash.video[0].backupUrl[0].replace(/^https?:\/\/(.+?)\//,()=>"https://upos-sz-mirrorkodoo1.bilivideo.com/");this.setState({videoSrc:a,audioSrc:e+"&requestFrom=bilibili_helper_2&requestType=audioFromVideo"})}}),null)),i()(this,"handleOnClickDownloadAndSendFilename",(e,t)=>{const{currentVideoInfo:a}=this.state;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"sendVideoFilename",url:e,sign:e.split("?")[0],cid:a.cid,aid:a.aid,bvid:a.bvid,pubdate:a.pubdate,quality:a.quality,owner:a.owner,title:a.title,format:t})}),i()(this,"handleOnClickQualityButton",(e=120)=>{const{currentVideoInfo:t,qualityMap:a}=this.state;if(t){if(a[e])return void this.downloadByUrl(a[e]);const{cid:r,aid:i,bvid:n}=t;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_video",label:e}),chrome.runtime.sendMessage({target:"videoDownload",event:"getPlayUrl",cid:r,aid:i,bvid:n,quality:e},t=>{t?(a[e]=t,this.setState({qualityMap:a})):alert("获取下载链接失败")})}}),i()(this,"handleOnClickID",(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"copy_id",label:e}),Object(b.copy2Clipboard)(t)}),i()(this,"handleOnClickHelpLink",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_helper_link"})}),i()(this,"handleOnClickADLink",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_video_ad"})}),i()(this,"handleOnClickGotoPayment",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html?showPaymentModal=1")})}),i()(this,"downloadByUrl",e=>{const t=document.createElement("a"),a=Object(b.getFilename)(document);t.innerText=a,t.style.display="none",t.setAttribute("referrerPolicy","unsafe-url"),t.setAttribute("download",a+".flv"),t.setAttribute("target","_blank"),t.href=e.replace(/^http:\/\//,"https://"),this.handleOnClickDownloadAndSendFilename(t.href,"flv"),t.click(),t.remove()}),i()(this,"renderAD",()=>{const{ad:e}=this.state;return e?o.a.createElement("a",{className:"ad-link",href:e.link,onClick:this.handleOnClickADLink,target:"_blank",rel:"noreferrer"},e.title):null}),i()(this,"renderVideoBasicInfo",()=>{const{currentVideoInfo:e}=this.state;return o.a.createElement(st,null,o.a.createElement(ct,null,"视频信息 - 点击复制"),o.a.createElement(dt,null,e?null:o.a.createElement("div",{className:"basic-info"},o.a.createElement(B.a,null,"暂无数据")),e?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"basic-info"},o.a.createElement(it,{imgSrc:e.pic,videoInfo:e}),o.a.createElement(B.a,{tabIndex:"0",onClick:()=>this.handleOnClickID("aid","av"+e.aid)},o.a.createElement("b",{className:"format"},"aid"),o.a.createElement("i",{className:"description"},"av",e.aid)),o.a.createElement(B.a,{tabIndex:"1",onClick:()=>this.handleOnClickID("bvid",e.bvid)},o.a.createElement("b",{className:"format"},"bvid"),o.a.createElement("i",{className:"description"},e.bvid)),o.a.createElement(B.a,{tabIndex:"2",onClick:()=>this.handleOnClickID("cid",e.cid)},o.a.createElement("b",{className:"format"},"cid"),o.a.createElement("i",{className:"description"},e.cid)))):null))}),i()(this,"renderFLV",()=>{const{loading:e,currentVideoInfo:t,canDownload:a,errorStr:r,qualityMap:i}=this.state;return a||t&&t.rights&&t.rights.download||!t||!t.support_formats?o.a.createElement(o.a.Fragment,null,o.a.createElement(st,null,o.a.createElement(ct,null,"视频下载",o.a.createElement("a",{className:"helper-link",href:"https://shimo.im/docs/PXgDrXTGcXjtWjVX#anchor-Fnmu",target:"_blank",rel:"noreferrer",onClick:this.handleOnClickHelpLink},"使用帮助"),this.renderAD()),o.a.createElement(dt,null,!e&&t&&t.support_formats?o.a.createElement(ut,null,t.support_formats.map(({display_desc:e,format:t,new_description:a,quality:r})=>o.a.createElement(B.a,{key:r,className:[i[r]?"has-link":"",r>80?"vip":null].join(" "),onClick:()=>i[r]?null:this.handleOnClickQualityButton(r)},o.a.createElement("i",{className:"vip-tag"}),o.a.createElement("span",{className:"description"},a),i[r]&&1===i[r].length?o.a.createElement("a",{className:"download-link",href:i[r][0].url,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>this.handleOnClickDownloadAndSendFilename(i[r][0].backup_url[0],"flv")},"点击下载"):o.a.createElement("div",{className:"link-group"},i[r]?i[r].map((e,t)=>o.a.createElement("a",{key:t,className:"download-link",href:e.url,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>this.handleOnClickDownloadAndSendFilename(e.url,"flv")},t)):null)))):o.a.createElement(ut,{style:{gridTemplateColumns:"repeat(1,1fr)"}},o.a.createElement(B.a,null,r||"数据载入中")))),this.renderSplit()):o.a.createElement(o.a.Fragment,null,o.a.createElement(st,null,o.a.createElement(ct,null,"视频下载",o.a.createElement("a",{className:"helper-link",href:"https://shimo.im/docs/PXgDrXTGcXjtWjVX#anchor-Fnmu",target:"_blank",rel:"noreferrer",onClick:this.handleOnClickHelpLink},"使用帮助"),this.renderAD()),o.a.createElement(ut,null,o.a.createElement(B.a,{className:"can-not-download"},"该视频已被UP主限制下载"))),this.renderSplit())})}componentDidMount(){this.addListener(),chrome.runtime.sendMessage({command:"videoDownloadDOMInitialized"}),chrome.runtime.sendMessage({target:"videoDownload",event:"getSetting"},e=>{this.setState({settings:e})}),chrome.runtime.sendMessage({target:"ad",event:"getAds",position:"videoDownload"},e=>{e&&e.length>0&&this.setState({ad:e[0]})}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e,isVIP:Object(b.isVIP)(e),isSuperVIP:Object(b.isSuperVIP)(e)})})}renderSplit(){const{videoSrc:e,audioSrc:t,isVIP:a,isSuperVIP:r,loading:i}=this.state;return!e&&!t||i?null:o.a.createElement(st,null,o.a.createElement(dt,{className:"split-download"},o.a.createElement(ct,null,o.a.createElement(I.Icon,{icon:"cat-paw",size:16}),"视音频分别下载"),o.a.createElement(ut,null,e?o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:a||r?e:null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>a||r?this.handleOnClickDownloadAndSendFilename(e,"mp4"):this.handleOnClickGotoPayment()},o.a.createElement(ht,null,"仅画面下载"))):null,t?o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:a||r?t:null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>a||r?this.handleOnClickDownloadAndSendFilename(t,"mp3"):this.handleOnClickGotoPayment()},o.a.createElement(ht,null,"仅声音下载"))):null)))}render(){return o.a.createElement(o.a.Fragment,null,this.renderVideoBasicInfo(),this.renderFLV())}}i()(mt,"contextType",U);var gt=a(13),ft=a.n(gt),bt=a(59),yt=()=>{const e=Object(s.d)(B.a).attrs({className:"bilibili-helper-video-dark-mode-btn"})`
      height: 22px;
      border-radius: 4px;

      button {
        padding: 0 4px;
        min-width: unset;
        font-size: 12px;
        border: 1px solid #fb7299;
        border-radius: 4px;
        color: ${({active:e})=>e?"#fff":"#fb7299"};
        background-color: ${({active:e})=>e?"#fb7299":"#fff"};
        cursor: pointer;
      }
    `;return class extends o.a.Component{constructor(e){super(e),i()(this,"handleOnClick",()=>{const e=!this.state.showDark;this.setState({showDark:e}),ft.a.set("videoDark",e),e||!1!==this.darkStore||!this.darkGlobal||this.darkTwoFactor||ft.a.set("videoDarkTwoFactor",!0),e&&!this.darkGlobal&&this.darkTwoFactor&&ft.a.set("videoDarkTwoFactor",!1)}),this.darkStore=ft.a.get("videoDark"),this.darkTwoFactor=ft.a.get("videoDarkTwoFactor"),this.state={showDark:this.darkStore},this.isOldPageOrWatchLater=!!document.querySelector("#__bofqi,.view-later-module, #bangumi_detail")}componentDidMount(){chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{if(this.darkGlobal=e.on,e.on&&!this.darkTwoFactor){if(e.darkFollowSystem){const e=matchMedia("(prefers-color-scheme: dark)");this.setState({showDark:e.matches}),e.onchange=()=>{this.setState({showDark:e.matches})}}else this.setState({showDark:!0});if(!1===this.darkStore){let e=ft.a.get("videoDarkTime");e=void 0!==e?++e:1,e>3?(ft.a.remove("videoDark"),ft.a.remove("videoDarkTime")):ft.a.set("videoDarkTime",e)}}})}render(){const t=this.state.showDark;return o.a.createElement(o.a.Fragment,null,o.a.createElement(e,{active:t&&!this.isOldPageOrWatchLater,onClick:this.handleOnClick},"深色模式"),t&&!this.isOldPageOrWatchLater?o.a.createElement(bt.m,null):null)}}};const vt=!location.pathname.match("player.html$")&&ft.a.get("bilibili-helper-2-video-guide-show"),wt=s.d.p`
  margin: 12px 30px;
  color: #fff;
  font-size: 14px;
  white-space: break-spaces;

  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class xt extends o.a.Component{constructor(e){super(e),i()(this,"state",{show:void 0===vt||vt}),i()(this,"handleOnClose",()=>{this.setState({show:!1},()=>{ft.a.set("bilibili-helper-2-video-guide-show",!1)})})}render(){return o.a.createElement(I.BilibiliHelperButtonGuide,{show:this.state.show,onClose:this.handleOnClose,sections:[o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-1.jpg")}),o.a.createElement(wt,null,"感谢您使用",o.a.createElement(I.Icon,{icon:"bilibilihelper",size:16}),"（哔哩哔哩助手，简称助手），这是一款第三方扩展程序，为您在各个方面增强浏览B站的体验~"),o.a.createElement(wt,null,"这是一个简要的概述，向您介绍助手在视频播放页面中可以做哪些事。"),o.a.createElement(wt,null,"我们将功能的入口按钮做了改进，从一个固定与网页某个位置的按钮变成了一个悬浮球「助手猫」。您可以拖拽助手猫到自己喜欢的位置。")),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-2.jpg")}),o.a.createElement(wt,null,"将鼠标移动到助手猫上时，助手猫的下方会出现「已上锁」图标按钮"),o.a.createElement(wt,null,"点击「锁」图标可以切换固定模式。"),o.a.createElement(wt,null,"上锁时，助手猫不会随着网页的滚动而移动位置。")),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-3.jpg")}),o.a.createElement(wt,null,"我们对功能界面进行了重新设计。视频下载功能将会直接显示各个清晰度的下载按钮，点击即下载"),o.a.createElement(wt,null,"除此之外还增加了「截屏」，复制视频ID等功能"),o.a.createElement(wt,null,"未来我们还会继续维护增加更多功能，尽请期待~")),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-4.jpg")}),o.a.createElement(wt,null,"最后，我们还对嵌入式视频做了支持，现在助手猫会出现在所有b站视频播放器上啦~"),o.a.createElement(wt,null,"除了番剧、显示观看电影之类的，都可以下载哦"))]})}}Object(b.initI18n)().then(()=>{if(Object(He.k)()){const e=yt();"/blackboard/newplayer.html"!==location.pathname&&"/player.html"!==location.pathname||document.body.classList.add("bilibili-helper-2-blackboard-new-player");const t=s.d.div`
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          width: 100%;
        `,a=Object(s.d)(c.a)`
          .player-mode-webfullscreen &, .bilibili-helper-2-blackboard-new-player & {
            visibility: hidden;
          }

          .player-mode-webfullscreen &.show-in-full-widen {
            opacity: 0.2;
            position: fixed !important;
            visibility: visible;
          }

          .bilibili-helper-2-blackboard-new-player &.show-in-inject-player {
            opacity: 0.2;
            position: fixed !important;
            visibility: visible;
          }
        `,r=document.createElement("div");document.body.appendChild(r);class n extends o.a.Component{constructor(e){super(e),i()(this,"state",{videoInfo:null,setVideoInfo:e=>{this.setState({videoInfo:e})}})}render(){const{videoInfo:r}=this.state;return o.a.createElement(U.Provider,{value:this.state},o.a.createElement(a,{onAfterClickHandle:e=>{e&&chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/video"})}},o.a.createElement(t,null,o.a.createElement(ae,{videoInfo:r}),o.a.createElement(e,null)),o.a.createElement(mt,null),o.a.createElement(Ye,{videoInfo:r}),o.a.createElement(qe,{videoInfo:r}),o.a.createElement(xt,null)))}}p.a.render(o.a.createElement(n,null),r)}})},305:function(e,t,a){},334:function(e,t,a){},50:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));const r={superAdmin:"猫国设计师",admin:"猫国城管",catForever:"猫国大护法",catVIPSuper:"助手猫培育师",catVIP:"助手猫观察员",catWatcher:"助手猫瞭望者",catVIPHonor:"猫国荣誉市民",catAirborneCommander:"空降指挥官",catAirbornePilot:"喵营飞行员"},i=["superAdmin","admin","catForever","catVIPSuper","catVIP"],n=["superAdmin","admin","catForever","catVIPSuper"]},61:function(e,t,a){"use strict";a(19);var r=a(23);a.d(t,"a",(function(){return r.a}))},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=a(3).c`
    --bilibili-pink: #FB7299;
    --bilibili-blue: #23ADE5;
    --bilibili-green: #6dc781;
    --bilibili-gray: #F4F4F4;
    --google-red-100: #f4c7c3;
    --google-red-300: #e67c73;
    --google-red-500: #db4437;
    --google-red-700: #c53929;
    --google-blue-100: #c6dafc;
    --google-blue-300: #7baaf7;
    --google-blue-500: #4285f4;
    --google-blue-600: #1a73e8;
    --google-blue-700: #3367d6;
    --google-green-100: #b7e1cd;
    --google-green-300: #57bb8a;
    --google-green-500: #0f9d58;
    --google-green-700: #0b8043;
    --google-yellow-100: #fce8b2;
    --google-yellow-300: #f7cb4d;
    --google-yellow-500: #f4b400;
    --google-yellow-700: #f09300;
    --google-grey-50: #f8f9fa;
    --google-grey-100: #f5f5f5;
    --google-grey-300: #e0e0e0;
    --google-grey-400: #bdc1c6;
    --google-grey-500: #9e9e9e;
    --google-grey-700: #616161;
    --paper-red-50: #ffebee;
    --paper-red-100: #ffcdd2;
    --paper-red-200: #ef9a9a;
    --paper-red-300: #e57373;
    --paper-red-400: #ef5350;
    --paper-red-500: #f44336;
    --paper-red-600: #e53935;
    --paper-red-700: #d32f2f;
    --paper-red-800: #c62828;
    --paper-red-900: #b71c1c;
    --paper-red-a100: #ff8a80;
    --paper-red-a200: #ff5252;
    --paper-red-a400: #ff1744;
    --paper-red-a700: #d50000;
    --paper-pink-50: #fce4ec;
    --paper-pink-100: #f8bbd0;
    --paper-pink-200: #f48fb1;
    --paper-pink-300: #f06292;
    --paper-pink-400: #ec407a;
    --paper-pink-500: #e91e63;
    --paper-pink-600: #d81b60;
    --paper-pink-700: #c2185b;
    --paper-pink-800: #ad1457;
    --paper-pink-900: #880e4f;
    --paper-pink-a100: #ff80ab;
    --paper-pink-a200: #ff4081;
    --paper-pink-a400: #f50057;
    --paper-pink-a700: #c51162;
    --paper-purple-50: #f3e5f5;
    --paper-purple-100: #e1bee7;
    --paper-purple-200: #ce93d8;
    --paper-purple-300: #ba68c8;
    --paper-purple-400: #ab47bc;
    --paper-purple-500: #9c27b0;
    --paper-purple-600: #8e24aa;
    --paper-purple-700: #7b1fa2;
    --paper-purple-800: #6a1b9a;
    --paper-purple-900: #4a148c;
    --paper-purple-a100: #ea80fc;
    --paper-purple-a200: #e040fb;
    --paper-purple-a400: #d500f9;
    --paper-purple-a700: #aa00ff;
    --paper-deep-purple-50: #ede7f6;
    --paper-deep-purple-100: #d1c4e9;
    --paper-deep-purple-200: #b39ddb;
    --paper-deep-purple-300: #9575cd;
    --paper-deep-purple-400: #7e57c2;
    --paper-deep-purple-500: #673ab7;
    --paper-deep-purple-600: #5e35b1;
    --paper-deep-purple-700: #512da8;
    --paper-deep-purple-800: #4527a0;
    --paper-deep-purple-900: #311b92;
    --paper-deep-purple-a100: #b388ff;
    --paper-deep-purple-a200: #7c4dff;
    --paper-deep-purple-a400: #651fff;
    --paper-deep-purple-a700: #6200ea;
    --paper-indigo-50: #e8eaf6;
    --paper-indigo-100: #c5cae9;
    --paper-indigo-200: #9fa8da;
    --paper-indigo-300: #7986cb;
    --paper-indigo-400: #5c6bc0;
    --paper-indigo-500: #3f51b5;
    --paper-indigo-600: #3949ab;
    --paper-indigo-700: #303f9f;
    --paper-indigo-800: #283593;
    --paper-indigo-900: #1a237e;
    --paper-indigo-a100: #8c9eff;
    --paper-indigo-a200: #536dfe;
    --paper-indigo-a400: #3d5afe;
    --paper-indigo-a700: #304ffe;
    --paper-blue-50: #e3f2fd;
    --paper-blue-100: #bbdefb;
    --paper-blue-200: #90caf9;
    --paper-blue-300: #64b5f6;
    --paper-blue-400: #42a5f5;
    --paper-blue-500: #2196f3;
    --paper-blue-600: #1e88e5;
    --paper-blue-700: #1976d2;
    --paper-blue-800: #1565c0;
    --paper-blue-900: #0d47a1;
    --paper-blue-a100: #82b1ff;
    --paper-blue-a200: #448aff;
    --paper-blue-a400: #2979ff;
    --paper-blue-a700: #2962ff;
    --paper-light-blue-50: #e1f5fe;
    --paper-light-blue-100: #b3e5fc;
    --paper-light-blue-200: #81d4fa;
    --paper-light-blue-300: #4fc3f7;
    --paper-light-blue-400: #29b6f6;
    --paper-light-blue-500: #03a9f4;
    --paper-light-blue-600: #039be5;
    --paper-light-blue-700: #0288d1;
    --paper-light-blue-800: #0277bd;
    --paper-light-blue-900: #01579b;
    --paper-light-blue-a100: #80d8ff;
    --paper-light-blue-a200: #40c4ff;
    --paper-light-blue-a400: #00b0ff;
    --paper-light-blue-a700: #0091ea;
    --paper-cyan-50: #e0f7fa;
    --paper-cyan-100: #b2ebf2;
    --paper-cyan-200: #80deea;
    --paper-cyan-300: #4dd0e1;
    --paper-cyan-400: #26c6da;
    --paper-cyan-500: #00bcd4;
    --paper-cyan-600: #00acc1;
    --paper-cyan-700: #0097a7;
    --paper-cyan-800: #00838f;
    --paper-cyan-900: #006064;
    --paper-cyan-a100: #84ffff;
    --paper-cyan-a200: #18ffff;
    --paper-cyan-a400: #00e5ff;
    --paper-cyan-a700: #00b8d4;
    --paper-teal-50: #e0f2f1;
    --paper-teal-100: #b2dfdb;
    --paper-teal-200: #80cbc4;
    --paper-teal-300: #4db6ac;
    --paper-teal-400: #26a69a;
    --paper-teal-500: #009688;
    --paper-teal-600: #00897b;
    --paper-teal-700: #00796b;
    --paper-teal-800: #00695c;
    --paper-teal-900: #004d40;
    --paper-teal-a100: #a7ffeb;
    --paper-teal-a200: #64ffda;
    --paper-teal-a400: #1de9b6;
    --paper-teal-a700: #00bfa5;
    --paper-green-50: #e8f5e9;
    --paper-green-100: #c8e6c9;
    --paper-green-200: #a5d6a7;
    --paper-green-300: #81c784;
    --paper-green-400: #66bb6a;
    --paper-green-500: #4caf50;
    --paper-green-600: #43a047;
    --paper-green-700: #388e3c;
    --paper-green-800: #2e7d32;
    --paper-green-900: #1b5e20;
    --paper-green-a100: #b9f6ca;
    --paper-green-a200: #69f0ae;
    --paper-green-a400: #00e676;
    --paper-green-a700: #00c853;
    --paper-light-green-50: #f1f8e9;
    --paper-light-green-100: #dcedc8;
    --paper-light-green-200: #c5e1a5;
    --paper-light-green-300: #aed581;
    --paper-light-green-400: #9ccc65;
    --paper-light-green-500: #8bc34a;
    --paper-light-green-600: #7cb342;
    --paper-light-green-700: #689f38;
    --paper-light-green-800: #558b2f;
    --paper-light-green-900: #33691e;
    --paper-light-green-a100: #ccff90;
    --paper-light-green-a200: #b2ff59;
    --paper-light-green-a400: #76ff03;
    --paper-light-green-a700: #64dd17;
    --paper-lime-50: #f9fbe7;
    --paper-lime-100: #f0f4c3;
    --paper-lime-200: #e6ee9c;
    --paper-lime-300: #dce775;
    --paper-lime-400: #d4e157;
    --paper-lime-500: #cddc39;
    --paper-lime-600: #c0ca33;
    --paper-lime-700: #afb42b;
    --paper-lime-800: #9e9d24;
    --paper-lime-900: #827717;
    --paper-lime-a100: #f4ff81;
    --paper-lime-a200: #eeff41;
    --paper-lime-a400: #c6ff00;
    --paper-lime-a700: #aeea00;
    --paper-yellow-50: #fffde7;
    --paper-yellow-100: #fff9c4;
    --paper-yellow-200: #fff59d;
    --paper-yellow-300: #fff176;
    --paper-yellow-400: #ffee58;
    --paper-yellow-500: #ffeb3b;
    --paper-yellow-600: #fdd835;
    --paper-yellow-700: #fbc02d;
    --paper-yellow-800: #f9a825;
    --paper-yellow-900: #f57f17;
    --paper-yellow-a100: #ffff8d;
    --paper-yellow-a200: #ffff00;
    --paper-yellow-a400: #ffea00;
    --paper-yellow-a700: #ffd600;
    --paper-amber-50: #fff8e1;
    --paper-amber-100: #ffecb3;
    --paper-amber-200: #ffe082;
    --paper-amber-300: #ffd54f;
    --paper-amber-400: #ffca28;
    --paper-amber-500: #ffc107;
    --paper-amber-600: #ffb300;
    --paper-amber-700: #ffa000;
    --paper-amber-800: #ff8f00;
    --paper-amber-900: #ff6f00;
    --paper-amber-a100: #ffe57f;
    --paper-amber-a200: #ffd740;
    --paper-amber-a400: #ffc400;
    --paper-amber-a700: #ffab00;
    --paper-orange-50: #fff3e0;
    --paper-orange-100: #ffe0b2;
    --paper-orange-200: #ffcc80;
    --paper-orange-300: #ffb74d;
    --paper-orange-400: #ffa726;
    --paper-orange-500: #ff9800;
    --paper-orange-600: #fb8c00;
    --paper-orange-700: #f57c00;
    --paper-orange-800: #ef6c00;
    --paper-orange-900: #e65100;
    --paper-orange-a100: #ffd180;
    --paper-orange-a200: #ffab40;
    --paper-orange-a400: #ff9100;
    --paper-orange-a700: #ff6500;
    --paper-deep-orange-50: #fbe9e7;
    --paper-deep-orange-100: #ffccbc;
    --paper-deep-orange-200: #ffab91;
    --paper-deep-orange-300: #ff8a65;
    --paper-deep-orange-400: #ff7043;
    --paper-deep-orange-500: #ff5722;
    --paper-deep-orange-600: #f4511e;
    --paper-deep-orange-700: #e64a19;
    --paper-deep-orange-800: #d84315;
    --paper-deep-orange-900: #bf360c;
    --paper-deep-orange-a100: #ff9e80;
    --paper-deep-orange-a200: #ff6e40;
    --paper-deep-orange-a400: #ff3d00;
    --paper-deep-orange-a700: #dd2c00;
    --paper-brown-50: #efebe9;
    --paper-brown-100: #d7ccc8;
    --paper-brown-200: #bcaaa4;
    --paper-brown-300: #a1887f;
    --paper-brown-400: #8d6e63;
    --paper-brown-500: #795548;
    --paper-brown-600: #6d4c41;
    --paper-brown-700: #5d4037;
    --paper-brown-800: #4e342e;
    --paper-brown-900: #3e2723;
    --paper-grey-50: #fafafa;
    --paper-grey-100: #f5f5f5;
    --paper-grey-200: #eeeeee;
    --paper-grey-300: #e0e0e0;
    --paper-grey-400: #bdbdbd;
    --paper-grey-500: #9e9e9e;
    --paper-grey-600: #757575;
    --paper-grey-700: #616161;
    --paper-grey-800: #424242;
    --paper-grey-900: #212121;
    --paper-blue-grey-50: #eceff1;
    --paper-blue-grey-100: #cfd8dc;
    --paper-blue-grey-200: #b0bec5;
    --paper-blue-grey-300: #90a4ae;
    --paper-blue-grey-400: #78909c;
    --paper-blue-grey-500: #607d8b;
    --paper-blue-grey-600: #546e7a;
    --paper-blue-grey-700: #455a64;
    --paper-blue-grey-800: #37474f;
`},80:function(e,t,a){"use strict";var r=a(50);a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return r.b})),a.d(t,"c",(function(){return r.c}))},92:function(e,t,a){"use strict";var r=a(49),i=a.n(r),n=a(1),o=a.n(n);class l{constructor(...e){o()(this,"x",void 0),o()(this,"y",void 0),o()(this,"__valid",!1),o()(this,"__needUpdate",!0),o()(this,"set",(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof l){const{x:t,y:a}=e[0];this.set(t,a)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this}),o()(this,"setX",e=>(this.x=e,this.__needUpdate=!0,this)),o()(this,"setY",e=>(this.y=e,this.__needUpdate=!0,this)),o()(this,"add",e=>(this.x+=e.x,this.y+=e.y,this)),o()(this,"addX",e=>(this.x+=e,this)),o()(this,"addY",e=>(this.y+=e,this)),o()(this,"sub",e=>(this.x-=e.x,this.y-=e.y,this)),o()(this,"subX",e=>this.addX(-e)),o()(this,"subY",e=>this.addY(-e)),o()(this,"multiply",e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this)),o()(this,"multiplyX",e=>(0===e?this.x=1/0:this.x*=e,this)),o()(this,"multiplyY",e=>(0===e?this.y=1/0:this.y*=e,this)),o()(this,"divide",e=>0===e?this.set(1/0,1/0):this.multiply(1/e)),o()(this,"divideX",e=>this.multiplyX(1/e)),o()(this,"divideY",e=>this.multiplyY(1/e)),o()(this,"dot",e=>this.x*e.x+this.y+e.y),o()(this,"equal",(...e)=>{if("number"==typeof e[0]&&"number"==typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof l){const{x:t,y:a}=e[0];return this.equal(t,a)}return!1}),o()(this,"normalize",()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)}),o()(this,"negtiveX",()=>(this.x*=-1,this)),o()(this,"negtiveY",()=>(this.y*=-1,this)),o()(this,"negtive",()=>this.negtiveX().negtiveY()),o()(this,"round",()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this)),o()(this,"roundX",()=>(this.x=Math.round(this.x),this)),o()(this,"roundY",()=>(this.y=Math.round(this.y),this)),o()(this,"floor",()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this)),o()(this,"floorX",()=>(this.x=Math.floor(this.x),this)),o()(this,"floorY",()=>(this.y=Math.floor(this.y),this)),o()(this,"ceil",()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this)),o()(this,"ceilX",()=>(this.x=Math.ceil(this.x),this)),o()(this,"ceilY",()=>(this.y=Math.ceil(this.y),this)),o()(this,"trunc",()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this)),o()(this,"truncX",()=>(this.x=Math.trunc(this.x),this)),o()(this,"truncY",()=>(this.y=Math.trunc(this.y),this)),o()(this,"clone",()=>new this.constructor(this.x,this.y)),o()(this,"toArray",()=>[this.x,this.y]),o()(this,"toObject",()=>({x:this.x,y:this.y})),o()(this,"toString",(e="x",t="y")=>`${e}${this.x}${t}${this.y}`),this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=i()(this.x)&&i()(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}a.d(t,"a",(function(){return p}));class p extends l{constructor(...e){super(...e)}}}});