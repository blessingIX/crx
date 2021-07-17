!function(e){function t(t){for(var r,o,n=t[0],l=t[1],c=t[2],s=0,h=[];s<n.length;s++)o=n[s],i[o]&&h.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(d&&d(t);h.length;)h.shift()();return p.push.apply(p,c||[]),a()}function a(){for(var e,t=0;t<p.length;t++){for(var a=p[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(r=!1)}r&&(p.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},i={19:0},p=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../";var n=window.webpackJsonp=window.webpackJsonp||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;p.push([299,0,13,1]),a()}({132:function(e,t){},19:function(e,t,a){"use strict";var r=a(34),i=a.n(r),p=a(3),o=a(24),n=a.n(o);const l={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"},c={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"};a.d(t,"h",(function(){return d})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return h})),a.d(t,"i",(function(){return f})),a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return g})),a.d(t,"j",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"e",(function(){return y})),a.d(t,"g",(function(){return c}));const d=(e,t=16)=>e/t+"rem",s=(e="")=>p.c`
    font-family: ${i()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,h=(e=16)=>p.c`
    font-size: ${d(e)};
`,f=(e=1)=>1===e?p.c`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:p.c`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,b=(e,t=1)=>l[e]?n()(l[e]).alpha(t).rgb().string():void 0,g=([...e])=>{const t="#000000",a=.5;let r="";for(let i in e){const{h:p,v:o,blur:l,spread:c,color:d=n()(t).alpha(a).rgb().string(),inset:s=""}=e[i];r+=`${1*p}px ${1*o}px ${5*l}px ${5*c}px ${d} ${s},`}return p.c`
        box-shadow: ${r};
    `},u=({target:e="all",duration:t=.3})=>p.c`transition: ${e} ${t}s;`,m=({direction:e="h",value:t=0})=>p.c`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`,y=p.c`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(19);const i={color:r.b,logoHeight:50,bodyMinWidth:1e3,headerHeight:0,sidebarWidth:204,mainWidth:796,baseFontSize:12,fontFamily:r.c,fontSize:r.d,rem:r.h,textOverflow:r.i,transition:r.j,boxShadow:r.a,marginTrim:r.f,hideScrollbar:r.e,opacity:r.g}},299:function(e,t,a){"use strict";a.r(t);var r=a(20),i=a(48),p=a(49),o=a.n(p),n=a(16),l=a.n(n),c=a(7);let d=!1,s=!1;if(Object(c.inLiveRoom)()){const e=()=>{Object(c.interval)(".left-container .live-record-list-cntr, .live-record-list .live-record-list-cntr",1e3).then(e=>{e&&e.querySelectorAll instanceof Function&&l()(e.querySelectorAll(".card")).forEach(e=>{const t=e.querySelector("a").href;if(t){const a=document.createElement("div");a.classList.add("record-download"),a.setAttribute("style","display:flex;flex-wrap:wrap;margin-top:6px;");const r=t.match(/live.bilibili.com\/record\/(.+)/);if(r){const t=e.querySelector(".record-title").textContent,i=document.createElement("button");i.innerText="点击获取下载数据",i.setAttribute("style","width:100%;height:30px;border-radius:4px;border-color:#eef1f5;color:#333;cursor:pointer;font-size:12px;border-style:none;"),i.addEventListener("click",()=>{i.innerText="数据获取中",chrome.runtime.sendMessage({target:"liveReplayDownload",event:"getLiveRecord",rid:r[1],title:t},e=>{e?(i.remove(),e.list.forEach((e,t)=>{const r=document.createElement("a");r.setAttribute("style",`display:inline-block;min-width:20px;font-size:12px;padding:6px;border:1px solid #eee;border-radius:4px;color:#7a7a7b;flex-shrink:0;margin-right:${o()((t+1)/5)?0:9}px;margin-bottom:9px;text-align:center;`),r.setAttribute("download",""),r.setAttribute("target","__blank"),r.setAttribute("referrerPolicy","unsafe-url"),r.href=e.url.replace(/^http:\/\//,"https://"),r.innerText=""+(t+1),a.appendChild(r)})):i.innerText="数据获取失败"})}),l()(e.querySelectorAll(".record-download")).forEach(e=>e.remove()),e.appendChild(a),a.appendChild(i)}}})})},t=()=>{s=!1,e()};chrome.runtime.sendMessage({target:"liveReplayDownload",event:"getSetting"},a=>{a.on&&Object(c.interval)("#sections-vm .room-feed .tabs, #section-ctnr .room-feed .tabs",1e3).then(a=>{a&&new MutationObserver(a=>{s=!1,d=!1,a.forEach(a=>{"直播回放"!==a.target.textContent||s||(s=!0,Object(c.interval)(".live-record-list .link-panigation-ctnr").then(e=>{console.log(e),e&&(d=!0,l()(e.querySelectorAll("li.panigation")).forEach(e=>{console.log(e),e.removeEventListener("click",t),e.addEventListener("click",t)}))}),e())})}).observe(a,{attributes:!0,subtree:!0})})})}var h=a(28),f=a.n(h),b=a(29),g=a.n(b),u=a(15),m=a.n(u),y=a(14),v=a.n(y),x=a(12),w=a.n(x),k=a(11),E=a.n(k),O=a(1),I=a.n(O),M=a(34),S=a.n(M),C=a(42),_=a.n(C),L=a(2),P=a.n(L),A=a(0),j=a.n(A),D=a(3),$=a(4),N=a(75);function H(e,t){var a=E()(e);if(w.a){var r=w()(e);t&&(r=r.filter((function(t){return v()(e,t).enumerable}))),a.push.apply(a,r)}return a}const q=D.b`
  //html {
  //  ${N.a}
  //}

  .chat-history-panel .chat-history-list .chat-item.danmaku-item, .chat-history-panel .chat-history-list .chat-item.danmaku-item * {
    pointer-events: auto !important;
  }
`,F=D.d.div.attrs({className:"chat-helper-panel ctrl-panel bilibili-chat-filter-panel"})`
  padding: 0 4px 0 0;
  //width: 100%;
`,z=(Object(D.d)($.Icon)`
  margin: 0 4px 0 7px;
  font-size: 20px;
  vertical-align: middle;
  color: #c8c8c8;
  transition: color .4s cubic-bezier(.22, .58, .12, .98);
  user-select: none;

  &:hover {
    color: #23ade5;
  }
`,D.d.h1`
  width: 100%;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`),B=D.d.div.attrs({className:"filter-item"})`
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px;
  padding: 3px 0 4px 4px;
  line-height: 16px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #eee;
  }
`,Y=D.d.span.attrs({className:"filter-item-title"})`
  margin-right: 34px;
`,W=Object(D.d)($.CheckBoxButton)`
  user-select: none;

  & .radio-knob {
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
  }
`,X={chat:".chat-item.danmaku-item, .chat-item.chat-colorful-bubble{display:none !important;}",small:".chat-item:not(.system-msg) > a, .chat-item .guard-icon{display:none !important;}",gift:".chat-item.gift-item {display:none !important;}",enterMsg:".chat-item.welcome-msg,.chat-item.welcome-guard,.chat-item.important-prompt-item{display: none !important;}",medal:".chat-item .fans-medal-item-ctnr{display:none !important;}",achievement:".chat-item .title-label{display:none !important;}",pk:"#chaos-pk-vm{display:none !important;}",level:".chat-item .user-level-icon{display:none !important;}",announcement:".chat-item.system-msg, .chat-item.convention-msg{display:none !important;}",n2233:"#my-dear-haruna-vm{display:none !important;}"};class T extends j.a.Component{constructor(e){super(e),I()(this,"state",{globalOption:{},localOption:{}}),I()(this,"roomId",(()=>{const e=location.pathname.slice(1).match(/\d+/);return e?e[0]:null})()),I()(this,"handleOnClick",()=>{const e=document.querySelector(".bilibili-chat-filter-panel");"none"!==e.style.display&&e.style.display?_()(e).fadeOut(200):_()(e).fadeIn(200)}),I()(this,"handleOnClickRadio",(e,t)=>{const{localOption:a,globalOption:r}=this.state;let i=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){I()(e,t,a[t])})):m.a?g()(e,m()(a)):H(Object(a)).forEach((function(t){f()(e,t,v()(a,t))}))}return e}({},a);r[e]===t&&i[this.roomId]&&void 0!==i[this.roomId][e]?delete i[this.roomId][e]:(i[this.roomId]||(i[this.roomId]={}),i[this.roomId][e]=t),S()(i[this.roomId])&&delete i[this.roomId],chrome.runtime.sendMessage({target:"chatFilter",event:"setFilterMap",filterMap:i},()=>{this.setState({localOption:i})})})}componentDidMount(){const e=this;_()(document).on("click",(function(t){_()(t.target).parents("#bilibili-helper-chat-filter").length<=0&&"none"!==_()(e.panel).css("display")&&_()(e.panel).fadeOut(200)})),chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},e=>{this.setState({globalOption:e.options})}),chrome.runtime.sendMessage({target:"chatFilter",event:"getFilterMap"},e=>{this.setState({localOption:e})})}render(){const{localOption:e,globalOption:t}=this.state;return j.a.createElement(F,null,j.a.createElement(q,null),j.a.createElement(z,null,Object(c.__)("chatFilter_UI_listName")),E()(t).map(a=>{const r=X[a],i=e[this.roomId]?e[this.roomId][a]:void 0,p=void 0!==i?i:t[a];return j.a.createElement(B,{key:a,onClick:()=>this.handleOnClickRadio(a,!p)},j.a.createElement(Y,null,Object(c.__)("chatFilter_options_"+a)),j.a.createElement(W,{on:p}),r&&p?j.a.createElement("style",null,r):null)}))}}T.propTypes={settings:P.a.object};var R=a(23);const{color:U}=R.a,V=Object(D.d)(r.a).attrs({className:"bilibili-helper-pip-btn"})`
  width: max-content;
  height: 22px;
  border-radius: 4px;

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    border: 1px solid ${U("bilibili-blue")};
    background-color: white;
    color: ${U("bilibili-blue")};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on button, & button:hover {
    background-color: ${U("bilibili-blue")};
    color: white;
  }
`;class G extends j.a.Component{constructor(e){super(e),I()(this,"addListener",e=>{if(!e||!e.addEventListener)return;const t=this;e.removeEventListener("enterpictureinpicture",null),e.removeEventListener("leavepictureinpicture",null),e.addEventListener("ended",(function(){document.exitPictureInPicture(),t.isEnd=!0})),e.addEventListener("loadedmetadata",(function(){t.state.inPIP&&t.handleOnClick(!0)})),e.addEventListener("enterpictureinpicture",(function(){t.setState({inPIP:!0})})),e.addEventListener("leavepictureinpicture",(function(){t.setState({inPIP:!1},()=>{t.isEnd||this.play()})}))}),I()(this,"handleOnClick",()=>{const e=document.querySelector(".bilibili-live-player-video video, .blrp-video video, #live-player-ctnr video");this.video?this.video!==e&&(this.video=e,this.addListener(this.video)):(this.video=document.querySelector(".bilibili-live-player-video video, .blrp-video video, #live-player-ctnr video"),this.addListener(this.video)),this.video&&this.video.requestPictureInPicture&&(this.state.inPIP?this.state.inPIP&&document.exitPictureInPicture().then(()=>{this.setState({inPIP:!1},()=>this.video.play())}).catch(e=>{console.error(e),this.setState({inPIP:!1})}):this.video.requestPictureInPicture().then(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"click_pip_button"}),this.setState({inPIP:!0},()=>this.video.play())}).catch(e=>{}),chrome.runtime.sendMessage({command:"setGAEvent",action:"click",category:"Live PIP",label:"Live PIP"}))}),this.state={inPIP:!1},this.video=null,this.isEnd=!1}componentDidMount(){const e=this;this.video=document.querySelector(".bilibili-live-player-video video, .blrp-video video, #live-player-ctnr video"),this.addListener(this.video);const t=document.querySelector(".bilibili-live-player-video, .blrp-video, .live-player-mounterd");t&&t.addEventListener("DOMNodeInserted",(function(t){"video"===t.target.localName&&e.video!==t.target&&(e.video=t.target,e.addListener(e.video),e.isEnd=!1)}))}render(){return j.a.createElement(V,{className:[this.state.inPIP?"on":null],title:Object(c.__)("livePictureInPicture_UI_buttonTitle"),onClick:()=>this.handleOnClick()},Object(c.__)("livePiP_name"))}}var J=a(147),K=a.n(J),Q=a(84),Z=a.n(Q),ee=a(13),te=a.n(ee);const{color:ae}=R.a,re=Object(D.d)($.Button)`
  width: max-content;
  height: 22px;
  border-radius: 4px;

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    border: 1px solid ${ae("bilibili-blue")};
    background-color: white;
    color: ${ae("bilibili-blue")};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on button, & button:hover {
    background-color: var(--bilibili-blue);
    color: white;
  }

  .chat-area-btn {
    padding-left: 4px;
    border-left: 1px solid;
    margin-left: 4px;
  }
`,ie=D.b`
  .fullscreen-fix .aside-area,
  .player-full-win.hide-aside-area .aside-area {
    display: block;
  }

  .hide-aside-area {
    .live-room-app {
      .app-content {
        .app-body {
          .player-and-aside-area {
            .aside-area {
              display: block !important;
              background-color: transparent;
              z-index: 1001 !important;
              pointer-events: auto;

              .chat-history-panel {
                position: fixed;
                left: 0;
                bottom: 180px;
                display: inline-block;
                width: auto;
                height: calc(50% - 20px);
                border-radius: 4px;
                pointer-events: auto;
                background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 15%, transparent 75%)!important;
                background-color: transparent !important;
                background-color: unset;
                overflow: hidden;

                .chat-history-list {
                  margin-right: 8px;
                  height: 100%;
                  padding: 0;
                  overflow: -moz-scrollbars-none;
                  scrollbar-width: none;

                  &::-webkit-scrollbar {
                    display: none;
                  }

                  .chat-item {
                    margin-left: 6px;

                    &.danmaku-item {
                      margin: 0 0 4px 0;
                      padding: 3px 8px;
                      //width: fit-content;
                      height: auto;
                      font-size: 14px;
                      //border-radius: 4px;
                      //background-color: rgb(0 0 0 / 60%);
                    }

                    //&.chat-colorful-bubble {
                    //  backdrop-filter: saturate(0) brightness(0.7);
                    //}
                  }
                }

                .danmaku-buffer-prompt {
                  bottom: 0;
                  width: 100%;
                  margin-left: -10px;
                  border-radius: 4px;
                }

                #chat-history-list {
                  border-bottom: 1px solid transparent;
                  border-left: 1px solid transparent;
                  border-radius: 0 0 0 4px;
                }

                &:hover #chat-history-list {
                  border-bottom-color: var(--bilibili-blue);
                  border-left-color: var(--bilibili-blue);
                }
              }

              #chat-control-panel-vm {
                position: fixed;
                left: 0;
                bottom: 0;
                margin-bottom: 3px;
                width: 100%;
                height: auto;
                background-color: transparent !important;
                pointer-events: none !important;
                z-index: 10;

                .control-panel-ctnr {
                  height: auto;
                  padding: 0 3px;
                  background: none !important;

                  .chat-input-ctnr {
                    border: none;
                    background-color: transparent;

                    .medal-section {
                      height: 36px;
                    }

                    .chat-input, textarea {
                      height: 36px;
                      background-color: #1b1b1b;
                      border-color: #2b2b2b;
                      color: #eee;
                      pointer-events: auto;
                    }

                    .input-limit-hint {
                      bottom: 10px;
                      right: 12px;
                    }
                  }
                }

                .control-panel-icon-row {
                  &.superChat {
                    display: flex !important;
                    height: 24px;

                    .icon-right-part {
                      float: right !important;
                      margin-left: auto;
                      margin-right: 13px;
                      order: 0;
                    }

                    .icon-right-end-part {
                      float: right !important;
                      order: 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //#bilibiliHelper2HandleButtonWrapper,
    #chat-control-panel-vm .chat-input-ctnr .medal-section,
    .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel::-webkit-scrollbar,
    .live-room-app .app-content .app-body .player-and-aside-area .aside-area .rank-list-section,
    #penury-gift-msg,
    #chat-control-panel-vm .bottom-actions,
    .chat-history-panel #chat-history-list .chat-item.danmaku-item:before,
    .chat-history-panel #chat-history-list .chat-item.danmaku-item.guard-danmaku:after {
      display: none;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item,
    #chat-control-panel-vm .control-panel-ctnr,
    .control-panel-icon-row {
      pointer-events: none;
    }

    .web-player-controller-wrap {
      bottom: 39px !important;
      margin: 0 0 0 110px !important;

      & > div {
        width: 92%;
        background: none !important;
      }
    }

    //#background-manage-vm,
    //#ema-wishing-vm,
    //#enter-failure,
    //#gold-store-vm,
    //#guard-store-vm,
    //#head-info-vm.head-info-section,
    //#link-footer-vm,
    //#link-navbar-vm,
    //#player-effect-vm,
    //#room-background-vm,
    //#sidebar-vm,
    //body.fullscreen-fix section#sections-vm {
    //  display: block !important
    //}

    .live-room-app .app-content .app-body .chat-history-panel .chat-item span,
    #chat-popup-area-vm,
    .chat-small-icon-box,
    .control-panel-icon-row > *,
    .danmaku-menu,
    .dialog-ctnr {
      pointer-events: auto;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item .user-name {
      //text-shadow: 0px 1px 1px #000;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item .danmaku-content {
      color: #eee;
      //text-shadow: 0px 1px 1px #000;
    }

    .dialog-ctnr {
      width: fit-content !important;

      .yan-ctnr {
        width: 300px;
      }

      &.common-popup-wrap {
        bottom: 80px !important;
        right: auto !important;
        left: 0 !important;
        width: fit-content;
        margin: 0 0 0 2px !important;
      }

      .superchat-content {
        max-width: 300px;
      }
    }

    .bilibili-live-player-video video, #live-player video, .web-player-danmaku {
      height: calc(100% - 40px) !important;
    }

    .bilibili-live-player-video-controller {
      bottom: 38px;

      .control-area {
        padding-left: 140px !important;
        padding-right: 40px !important;
      }
    }

    .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container {
      padding: 0 130px 0 80px;
    }

    .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container .bilibili-live-player-video-controller-right {
      margin-right: 22px;
    }

    .live-chat-mode-width-bar {
      position: absolute;
      top: 14px;
      right: 0;
      width: 8px;
      height: calc(100% - 14px);
      z-index: 1;
      cursor: ew-resize;
    }

    .live-chat-mode-height-bar {
      position: absolute;
      top: 0;
      width: calc(100% - 14px);
      height: 9px;
      z-index: 1;
      cursor: ns-resize;
    }

    .live-chat-mode-move-bar {
      display: block;
      position: absolute;
      top: -1px;
      right: -1px;
      width: 14px;
      height: 14px;
      border-radius: 0 4px 0 6px;
      font-size: 14px;
      color: transparent;
      z-index: 2;
      cursor: move;
    }

    .chat-history-panel:hover .live-chat-mode-width-bar,
    .chat-history-panel:hover .live-chat-mode-height-bar,
    .chat-history-panel:hover .live-chat-mode-move-bar {
      background-color: var(--bilibili-blue);
      user-select: none;
    }

    #aside-area-vm {
      pointer-events: none !important;

      #pay-note-panel-vm {
        .pay-note-panel {
          background-color: transparent !important;
        }
      }
    }

    #aside-area-vm > * {
      pointer-events: initial;
    }

    .chat-history-panel:hover {
      .live-chat-mode-width-bar::after {
        content: '';
        display: block;
        width: 1px;
        height: 14px;
        background-color: #a8dbf0;
        position: absolute;
        left: 2px;
        top: calc(50% - 7.5px);
        transform: translate(-50%);
        box-shadow: 2px 0px 0px #a8dbf0, 4px 0px 0px #a8dbf0;
      }

      .live-chat-mode-height-bar::after {
        content: '';
        display: block;
        width: 14px;
        height: 1px;
        background-color: #a8dbf0;
        position: absolute;
        top: 2px;
        left: calc(50% - 7.5px);
        transform: translate(-50%);
        box-shadow: 0px 2px 0px #a8dbf0, 0px 4px 0px #a8dbf0;
      }
    }

    #bilibiliHelper2HandleButtonWrapper {
      opacity: 0.2;
      transition: opacity .3s;

      &:hover {
        opacity: 1;
      }
    }
  }
`,pe=D.b`
  body.player-full-win.hide-aside-area .chat-history-panel {
    visibility: hidden;

    .danmaku-content {
      transition: none;
    }
  }
`,oe=te.a.get("bilibili-helper-live-chat-mode")||{};class ne extends j.a.Component{constructor(e){super(e),I()(this,"initDraggableBar",()=>{const e=this,t=document.querySelector(".app-content");let a=document.querySelector("#live-player video");const r=document.querySelector(".chat-history-panel");if(!t||!a||!r)return;const i=document.createElement("div"),p=document.createElement("div"),o=document.createElement("div");i.setAttribute("class","live-chat-mode-height-bar"),p.setAttribute("class","live-chat-mode-width-bar"),o.setAttribute("class","live-chat-mode-move-bar"),Z()(oe[this.roomId])?(e.originWidth=oe[this.roomId].width,e.originHeight=oe[this.roomId].height,e.originOffectLeft=oe[this.roomId].offsetLeft,e.originOffectBottom=oe[this.roomId].offsetBottom):oe[e.roomId]||(oe[this.roomId]={}),p.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(a=document.querySelector("#live-player video"),e.widthMouseDown=!0,e.originWidth=r.clientWidth,e.originX=t.clientX)})),i.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(a=document.querySelector("#live-player video"),e.heightMouseDown=!0,e.originHeight=r.clientHeight,e.originY=t.clientY)})),o.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(a=document.querySelector("#live-player video"),e.moveMouseDown=!0,e.originOffectLeft=r.offsetLeft,e.originOffectBottom=a.offsetHeight-r.offsetTop-r.offsetHeight,e.originX=t.clientX,e.originY=t.clientY)})),t.addEventListener("mousemove",K()((function(t){if(e.state.on)if(e.widthMouseDown){const i=e.originX-t.clientX,p=e.originWidth-i;p>25&&p<a.clientWidth&&p<a.offsetWidth&&(r.style.width=p+"px")}else if(e.heightMouseDown){const i=e.originY-t.clientY,p=e.originHeight+i;p>25&&p<a.clientHeight&&p<a.offsetHeight&&(r.style.height=p+"px")}else if(e.moveMouseDown){const a=e.originX-t.clientX,i=e.originY-t.clientY;let p=e.originOffectLeft-a,o=e.originOffectBottom+i+40;p<0&&(p=0),o<48&&(o=48),r.style.left=p+"px",r.style.bottom=o+"px"}}),25),!0),t.addEventListener("mouseup",(function(){(e.widthMouseDown||e.heightMouseDown||e.moveMouseDown)&&e.state.on&&(console.log(oe[e.roomId],e.roomId),oe[e.roomId]||(oe[e.roomId]={}),oe[e.roomId].width=e.originWidth=r.clientWidth,oe[e.roomId].height=e.originHeight=r.clientHeight,oe[e.roomId].offsetLeft=e.originOffectLeft=r.offsetLeft,console.log(e.originOffectBottom,a,a.offsetHeight,r.offsetTop,r.offsetHeight),oe[e.roomId].offsetBottom=e.originOffectBottom=a.offsetHeight-r.offsetTop-r.offsetHeight,te.a.set("bilibili-helper-live-chat-mode",oe),e.widthMouseDown=!1,e.heightMouseDown=!1,e.moveMouseDown=!1)}),!0),r.appendChild(p),r.appendChild(i),r.appendChild(o)}),I()(this,"addListener",()=>{this.bodyDOM||(this.bodyDOM=document.querySelector("body")),new MutationObserver(()=>{this.dealWith()}).observe(this.bodyDOM,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0})}),I()(this,"dealWith",()=>{const e=document.querySelector(".chat-history-panel"),t=this.bodyDOM.classList,{on:a,currentState:r}=this.state;a&&t.contains("player-full-win")&&1!==r?t.contains("hide-aside-area")?this.setState({currentState:1},()=>{e&&(this.originWidth?e.style.width=this.originWidth+"px":e.style.width="30%"),e&&this.originHeight&&(e.style.height=this.originHeight+"px"),e&&this.originOffectLeft&&(e.style.left=this.originOffectLeft+"px"),e&&this.originOffectBottom&&(e.style.bottom=this.originOffectBottom+"px")}):document.querySelector(".aside-area-toggle-btn button").click():a&&t.contains("fullscreen-fix")?this.setState({currentState:0},()=>{e.style.width="",e.style.height=""}):this.setState({currentState:0},()=>{e&&(e.style.width="",e.style.height="")})}),I()(this,"handleOnClick",()=>{const e=!this.state.on;this.setState({on:e},()=>{const t=te.a.get("bilibili-helper-live-chat-mode")||{};this.dealWith(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"click_chat_mode",label:e}),e?(console.log(this.roomId,t[this.roomId]),t[this.roomId]?(t[this.roomId].on=!0,t[this.roomId].showChatArea=!0):t[this.roomId]={on:!0,showChatArea:!0}):delete t[this.roomId],te.a.set("bilibili-helper-live-chat-mode",t)})}),I()(this,"handleOnClickChatAreaStateBtn",()=>{const e=!this.state.showChatArea;this.setState({showChatArea:e},()=>{const t=te.a.get("bilibili-helper-live-chat-mode")||{};t[this.roomId].showChatArea=e,te.a.set("bilibili-helper-live-chat-mode",t)})}),I()(this,"handleOnClick2Login",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html#/")})}),this.roomId=location.pathname.substr(1),"boolean"==typeof oe[this.roomId]?(this.state={on:!!oe[this.roomId],showChatArea:!0,currentState:0,hasLogin:!1},oe[this.roomId]={on:!0,showChatArea:!0},te.a.set("bilibili-helper-live-chat-mode",oe)):this.state={on:!!oe[this.roomId]&&!!oe[this.roomId].on,showChatArea:!oe[this.roomId]||!!oe[this.roomId].showChatArea,currentState:0,hasLogin:!1},this.addListener(),this.widthMouseDown=!1,this.heightMouseDown=!1,this.moveMouseDown=!1,this.originOffectLeft=0,this.originOffectBottom=0,this.originX=0,this.originY=0,this.originWidth=0,this.originHeight=0}componentDidMount(){this.bodyDOM=document.querySelector("body");const e=setInterval(()=>{const t=document.querySelector(".app-content"),a=document.querySelector("#live-player video"),r=document.querySelector(".chat-history-panel");t&&a&&r&&(clearInterval(e),this.initDraggableBar())},1e3);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{this.setState({hasLogin:e.hasLogin})})}render(){const{on:e,showChatArea:t,currentState:a,hasLogin:r}=this.state;return r?j.a.createElement(j.a.Fragment,null,e&&j.a.createElement(re,{className:"on"},j.a.createElement("span",{onClick:this.handleOnClick},Object(c.__)("liveChatMode_buttonOFF")),0!==a&&j.a.createElement("span",{className:"chat-area-btn",onClick:this.handleOnClickChatAreaStateBtn},t?Object(c.__)("liveChatMode_hideChatArea"):Object(c.__)("liveChatMode_showChatArea"),t?null:j.a.createElement(pe,null))),!e&&j.a.createElement(re,{onClick:this.handleOnClick},Object(c.__)("liveChatMode_buttonON")),0!==a&&e&&j.a.createElement(ie,null)):j.a.createElement(re,{onClick:this.handleOnClick2Login},"登录助手开启版聊模式")}}var le=a(6),ce=a.n(le),de=a(22),se=a.n(de);const{color:he}=R.a,fe=Object(D.d)(r.a).attrs({className:"bilibili-helper-screenshot-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${he("bilibili-blue")};
  box-sizing: border-box;
  background-color: white;
  color: ${he("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${he("bilibili-blue")};
    color: white;
  }
`,be=Object(D.d)($.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
`,ge=D.d.div`
`,ue=D.d.div`
  .button:first-of-type {
    margin-right: 8px;
  }
`,me=document.createElement("div");document.body.appendChild(me);class ye extends j.a.Component{constructor(e){super(e),I()(this,"state",{imgSrc:null,showModal:!1}),I()(this,"handleOnClick",()=>{const e=document.querySelector(".bilibili-live-player-video video, .blrp-video video, #live-player video");if(e){chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"click_screenshot"});const t=document.createElement("canvas");t.width=e.videoWidth,t.height=e.videoHeight;t.getContext("2d").drawImage(e,0,0,e.videoWidth,e.videoHeight),this.setState({imgSrc:t.toDataURL("image/jpeg",100),showModal:!0})}}),I()(this,"handleOnCloseModal",()=>{this.setState({showModal:!1})}),I()(this,"handleOnDownloadImage",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"download_screenshot"});const e=document.querySelector(".room-owner-username").textContent;new ce.a(e=>{new ce.a(e=>{const t=document.createElement("script");t.innerHTML="window.postMessage({command: 'sendInitData', pageData: window.__STORE__}, '*');",document.body.appendChild(t);const a=r=>{const{data:i}=r;"sendInitData"===i.command&&(console.log(i),e(i.pageData),t.remove(),window.removeEventListener("message",a))};window.addEventListener("message",a)}).then(t=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},a=>{if(!a||!a.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"liveScreenshot",data:{title:t.baseInfoRoom.roomTitle,roomId:t.baseInfoRoom.roomID,format:"jpeg",owner:{mid:t.baseInfoAnchor.uid,name:t.baseInfoAnchor.username}}},t=>{console.log(t),e(t||!1)})})})}).then(t=>{const a=t||`${e} ${(new Date).toLocaleString()}.jpeg`,r=document.createElement("a");r.target="__blank",r.setAttribute("target","__blank"),r.setAttribute("download",a),r.href=this.state.imgSrc,r.click(),this.setState({showModal:!1})})})}render(){return j.a.createElement(j.a.Fragment,null,j.a.createElement(fe,{onClick:()=>this.handleOnClick()},"截取画面"),se.a.createPortal(j.a.createElement(be,{open:this.state.showModal,className:"preview-modal",title:"直播截图预览",onClickMask:this.handleOnCloseModal,buttons:j.a.createElement(ue,null,j.a.createElement(r.a,{className:"border",onClick:this.handleOnCloseModal},"关闭"),j.a.createElement(r.a,{className:"primary",onClick:this.handleOnDownloadImage},"下载"))},j.a.createElement(ge,null,j.a.createElement("img",{className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),me))}}const ve=D.d.div`
  margin-bottom: 12px;

  .list {
    display: grid;
    grid-template-rows: repeat(auto-fill, 28px);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    
    a {
      display: inline-block;
      flex-shrink: 0;
      padding: 6px;
      min-width: 12px;
      text-align: center;
      font-size: 12px;
      border: 1px solid #eee;
      border-radius: 4px;
      color: #7a7a7b;
    }
  }
`,xe=D.d.div.attrs({className:"bilibili-helper-video-download-title"})`
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #222;
`;class we extends j.a.Component{constructor(e){super(e),I()(this,"state",{list:[]})}componentDidMount(){Object(c.interval)(".room-title").then(e=>{if(e){const t=e.getAttribute("title"),a=location.pathname.match(/\/record\/(.+)/);chrome.runtime.sendMessage({target:"liveReplayDownload",event:"getLiveRecord",rid:a[1],title:t},e=>{e&&this.setState({list:e.list})})}})}render(){const{list:e}=this.state;return j.a.createElement(ve,null,j.a.createElement(xe,null,"回看视频分段下载"),j.a.createElement("div",{className:"list"},e&&e.length>0?e.map((e,t)=>j.a.createElement("a",{key:t,href:e.url.replace(/^http:\/\//,"https://"),download:!0,target:"__blank"},t+1)):"暂时数据"))}}var ke=a(110);const Ee=!location.pathname.match("player.html$")&&te.a.get("bilibili-helper-2-live-guide-show"),Oe=D.d.p`
  margin: 12px 30px;
  color: #fff;
  font-size: 14px;
  white-space: break-spaces;

  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class Ie extends j.a.Component{constructor(e){super(e),I()(this,"state",{show:void 0===Ee||Ee}),I()(this,"handleOnClose",()=>{this.setState({show:!1},()=>{te.a.set("bilibili-helper-2-live-guide-show",!1)})})}render(){return j.a.createElement($.BilibiliHelperButtonGuide,{show:this.state.show,onClose:this.handleOnClose,sections:[j.a.createElement(j.a.Fragment,null,j.a.createElement($.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-1.jpg")}),j.a.createElement(Oe,null,"感谢您使用",j.a.createElement($.Icon,{icon:"bilibilihelper",size:16}),"（哔哩哔哩助手，简称助手），这是一款第三方扩展程序，为您在各个方面增强浏览B站的体验~"),j.a.createElement(Oe,null,"这是一个简要的概述，向您介绍助手在直播间页面中可以做哪些事。"),j.a.createElement(Oe,null,"我们将功能的入口按钮做了改进，从分散在直播间各个位置的按钮变成了一个悬浮球「助手猫」。您可以拖拽助手猫到自己喜欢的位置。")),j.a.createElement(j.a.Fragment,null,j.a.createElement($.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-2.jpg")}),j.a.createElement(Oe,null,"将鼠标移动到助手猫上时，助手猫的下方会出现「已上锁」图标按钮"),j.a.createElement(Oe,null,"点击「锁」图标可以切换固定模式。"),j.a.createElement(Oe,null,"上锁时，助手猫不会随着网页的滚动而移动位置。")),j.a.createElement(j.a.Fragment,null,j.a.createElement($.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-5.jpg")}),j.a.createElement(Oe,null,"我们对功能界面进行了重新设计。视频下载功能将会直接显示各个清晰度的下载按钮，点击即下载"),j.a.createElement(Oe,null,"除此之外还增加了「截屏」功能"),j.a.createElement(Oe,null,"未来我们还会继续维护增加更多功能，尽请期待~"))]})}}var Me=a(55);const Se=Object(D.d)(r.a)`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid var(--bilibili-blue);
  box-sizing: border-box;
  background-color: white;
  color: var(--bilibili-blue);

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &:hover {
    background-color: var(--bilibili-blue);
    color: white;
  }
`,Ce=Object(i.j)();Object(Me.b)().then(()=>{const e=Object(D.d)(ke.a)`
      .hide-aside-area.player-full-win & {
        opacity: 0.2;
        position: fixed !important;
      }
    `,t=D.d.div`
      margin-bottom: 12px;
      width: 200px;
      flex-wrap: wrap;

      & > * {
        margin: 0 2px 4px;
      }

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    `,a=!!self.frameElement;if((Object(i.i)()||Ce)&&!Object(i.h)()){const r=document.createElement("div");document.body.appendChild(r),se.a.render(j.a.createElement(e,{onAfterClickHandle:e=>{e&&chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/liveRoom"})}},j.a.createElement(t,null,j.a.createElement(G,null),!Ce&&j.a.createElement(ne,null),j.a.createElement(ye,null),a?j.a.createElement(Se,{onClick:()=>window.parent.location.href=location.href},"原直播间"):null),Ce?j.a.createElement(we,null):null,j.a.createElement(T,null),j.a.createElement(Ie,null)),r)}})},50:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return p}));const r={superAdmin:"猫国设计师",admin:"猫国城管",catForever:"猫国大护法",catVIPSuper:"助手猫培育师",catVIP:"助手猫观察员",catWatcher:"助手猫瞭望者",catVIPHonor:"猫国荣誉市民",catAirborneCommander:"空降指挥官",catAirbornePilot:"喵营飞行员"},i=["superAdmin","admin","catForever","catVIPSuper","catVIP"],p=["superAdmin","admin","catForever","catVIPSuper"]},61:function(e,t,a){"use strict";a(19);var r=a(23);a.d(t,"a",(function(){return r.a}))},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=a(3).c`
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
`},80:function(e,t,a){"use strict";var r=a(50);a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return r.b})),a.d(t,"c",(function(){return r.c}))},92:function(e,t,a){"use strict";var r=a(49),i=a.n(r),p=a(1),o=a.n(p);class n{constructor(...e){o()(this,"x",void 0),o()(this,"y",void 0),o()(this,"__valid",!1),o()(this,"__needUpdate",!0),o()(this,"set",(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof n){const{x:t,y:a}=e[0];this.set(t,a)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this}),o()(this,"setX",e=>(this.x=e,this.__needUpdate=!0,this)),o()(this,"setY",e=>(this.y=e,this.__needUpdate=!0,this)),o()(this,"add",e=>(this.x+=e.x,this.y+=e.y,this)),o()(this,"addX",e=>(this.x+=e,this)),o()(this,"addY",e=>(this.y+=e,this)),o()(this,"sub",e=>(this.x-=e.x,this.y-=e.y,this)),o()(this,"subX",e=>this.addX(-e)),o()(this,"subY",e=>this.addY(-e)),o()(this,"multiply",e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this)),o()(this,"multiplyX",e=>(0===e?this.x=1/0:this.x*=e,this)),o()(this,"multiplyY",e=>(0===e?this.y=1/0:this.y*=e,this)),o()(this,"divide",e=>0===e?this.set(1/0,1/0):this.multiply(1/e)),o()(this,"divideX",e=>this.multiplyX(1/e)),o()(this,"divideY",e=>this.multiplyY(1/e)),o()(this,"dot",e=>this.x*e.x+this.y+e.y),o()(this,"equal",(...e)=>{if("number"==typeof e[0]&&"number"==typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof n){const{x:t,y:a}=e[0];return this.equal(t,a)}return!1}),o()(this,"normalize",()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)}),o()(this,"negtiveX",()=>(this.x*=-1,this)),o()(this,"negtiveY",()=>(this.y*=-1,this)),o()(this,"negtive",()=>this.negtiveX().negtiveY()),o()(this,"round",()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this)),o()(this,"roundX",()=>(this.x=Math.round(this.x),this)),o()(this,"roundY",()=>(this.y=Math.round(this.y),this)),o()(this,"floor",()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this)),o()(this,"floorX",()=>(this.x=Math.floor(this.x),this)),o()(this,"floorY",()=>(this.y=Math.floor(this.y),this)),o()(this,"ceil",()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this)),o()(this,"ceilX",()=>(this.x=Math.ceil(this.x),this)),o()(this,"ceilY",()=>(this.y=Math.ceil(this.y),this)),o()(this,"trunc",()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this)),o()(this,"truncX",()=>(this.x=Math.trunc(this.x),this)),o()(this,"truncY",()=>(this.y=Math.trunc(this.y),this)),o()(this,"clone",()=>new this.constructor(this.x,this.y)),o()(this,"toArray",()=>[this.x,this.y]),o()(this,"toObject",()=>({x:this.x,y:this.y})),o()(this,"toString",(e="x",t="y")=>`${e}${this.x}${t}${this.y}`),this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=i()(this.x)&&i()(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}a.d(t,"a",(function(){return l}));class l extends n{constructor(...e){super(...e)}}}});