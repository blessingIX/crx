!function(e){function a(a){for(var r,p,o=a[0],l=a[1],s=a[2],d=0,h=[];d<o.length;d++)p=o[d],i[p]&&h.push(i[p][0]),i[p]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(a);h.length;)h.shift()();return n.push.apply(n,s||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],r=!0,o=1;o<t.length;o++){var l=t[o];0!==i[l]&&(r=!1)}r&&(n.splice(a--,1),e=p(p.s=t[0]))}return e}var r={},i={17:0},n=[];function p(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(e){var a=[],t=i[e];if(0!==t)if(t)a.push(t[2]);else{var r=new Promise((function(a,r){t=i[e]=[a,r]}));a.push(t[2]=r);var n,o=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=function(e){return p.p+""+({2:"js/dynamicModule/AnnouncementContent",3:"js/dynamicModule/OwnerArea",4:"js/dynamicModule/manga",5:"js/dynamicModule/watchLater",6:"js/dynamicModule/favlist",7:"js/dynamicModule/live",8:"js/dynamicModule/animeTimeTable",9:"js/dynamicModule/recentlyPosted",10:"specialAttention",11:"js/dynamicModule/home",12:"js/dynamicModule/notifyNeedLogin"}[e]||e)+".bundle.js"}(e),n=function(a){l.onerror=l.onload=null,clearTimeout(s);var t=i[e];if(0!==t){if(t){var r=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src,p=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");p.type=r,p.request=n,t[1](p)}i[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,o.appendChild(l)}return Promise.all(a)},p.m=e,p.c=r,p.d=function(e,a,t){p.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,a){if(1&a&&(e=p(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)p.d(t,r,function(a){return e[a]}.bind(null,r));return t},p.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(a,"a",a),a},p.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},p.p="../",p.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var s=0;s<o.length;s++)a(o[s]);var c=l;n.push([300,0,13,1]),t()}({19:function(e,a,t){"use strict";var r=t(34),i=t.n(r),n=t(3),p=t(24),o=t.n(p);const l={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"},s={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"};t.d(a,"h",(function(){return c})),t.d(a,"c",(function(){return d})),t.d(a,"d",(function(){return h})),t.d(a,"i",(function(){return b})),t.d(a,"b",(function(){return g})),t.d(a,"a",(function(){return f})),t.d(a,"j",(function(){return u})),t.d(a,"f",(function(){return m})),t.d(a,"e",(function(){return y})),t.d(a,"g",(function(){return s}));const c=(e,a=16)=>e/a+"rem",d=(e="")=>n.c`
    font-family: ${i()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,h=(e=16)=>n.c`
    font-size: ${c(e)};
`,b=(e=1)=>1===e?n.c`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:n.c`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,g=(e,a=1)=>l[e]?o()(l[e]).alpha(a).rgb().string():void 0,f=([...e])=>{const a="#000000",t=.5;let r="";for(let i in e){const{h:n,v:p,blur:l,spread:s,color:c=o()(a).alpha(t).rgb().string(),inset:d=""}=e[i];r+=`${1*n}px ${1*p}px ${5*l}px ${5*s}px ${c} ${d},`}return n.c`
        box-shadow: ${r};
    `},u=({target:e="all",duration:a=.3})=>n.c`transition: ${e} ${a}s;`,m=({direction:e="h",value:a=0})=>n.c`
  &:first-of-type {
    ${"h"===e?"margin-left:"+a:"v"===e?"margin-top: "+a:null};
    ${"all"===e?`margin-left:${a};margin-top:${a}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+a:"v"===e?"margin-bottom: "+a:null};
    ${"all"===e?`margin-right:${a};margin-bottom:${a}`:null};
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
`},23:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(19);const i={color:r.b,logoHeight:50,bodyMinWidth:1e3,headerHeight:0,sidebarWidth:204,mainWidth:796,baseFontSize:12,fontFamily:r.c,fontSize:r.d,rem:r.h,textOverflow:r.i,transition:r.j,boxShadow:r.a,marginTrim:r.f,hideScrollbar:r.e,opacity:r.g}},300:function(e,a,t){"use strict";t.r(a);var r=t(6),i=t.n(r),n=t(0),p=t.n(n),o=t(22),l=t(85),s=t(7),c=t(1),d=t.n(c),h=t(13),b=t.n(h),g=t(66),f=t.n(g),u=t(20),m=t(21),y=t(3),x=t(55),v=t(56);const k=y.d.div.attrs({className:"popup-menu"})`
  //display: inline-block;
  flex-shrink: 0;
  padding-right: 1px;
  width: 80px;
  max-width: 80px;
  height: calc(100% - 30px);
  max-height: calc(100% - 30px);
  vertical-align: top;
  padding-top: 4px;
  box-sizing: border-box;
  box-shadow: -0.5px 0 6px 0 #ddd;
  background-color: #f4f4f4;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .menu-item {
    display: block;
    margin: 0 auto 4px;
    width: calc(100% - 7px);
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    //border-radius: 3px;
    //border: 1px solid transparent;
    border: 1px solid rgb(245, 245, 245);
    background: #fff;
    text-align: center;
    cursor: pointer;
    transition: background-color 300ms, color 30ms, border-color 300ms;
    user-select: none;

    &:hover {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      border-color: rgb(0, 156, 214);
    }

    .button-view {
      transition: color 300ms;
    }

    //&:active {
    //  background-color: rgb(0 0 0 / 20%);
    //transform: scale(0.85);
    //}

    &.disabled {
      cursor: not-allowed;
      color: var(--google-grey-400);
    }
  }


  @media (prefers-color-scheme: dark) {
    box-shadow: -0.5px 0 0 0.1px #111;
    background-color: hsl(0deg 0% 6%);
    color: hsl(0deg 0% 54%);

    .menu-item {
      border-color: transparent;
      background-color: hsl(0deg 0% 9%);
      &:hover {
        background-color: hsl(196deg 79% 42%);
        border-color: hsl(196deg 100% 26%);
      }

      &.disabled {
        color: #3c3c3c;
      }
    }
  }
`,w=b.a.get("popupMenu-config")||{},E=b.a.get("popupMenu-data_customMenu")||{};class M extends p.a.Component{constructor(e){super(e),d()(this,"handleOnClickDefaultMenu",(e,a)=>{const{bilibiliAccount:r}=this.context;a&&r||!a?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_menu",action:"click_menu_item",label:e}),chrome.runtime.sendMessage({target:"popupMenu",event:"openNewTab",key:e})):Promise.all([t.e(0),t.e(12)]).then(t.bind(null,556)).then(({notifyNeedLogin:e})=>{e&&e()})}),d()(this,"handleOnClickCustomMenu",(e,a)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_menu",action:"click_custom_menu_item",label:a}),chrome.runtime.sendMessage({target:"popupMenu",event:"openNewTab",url:e})}),d()(this,"handleOnClickAddMore",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",queryURL:chrome.runtime.getURL("/html/config.html"),url:chrome.runtime.getURL("/html/config.html#/popup"),strict:!1})}),this.state={options:w.menuOptions?w.menuOptions.filter(({on:e})=>e):[],custom:void 0!==E?E:[]}}render(){const{options:e,custom:a}=this.state,{hasLogin:t,bilibiliAccount:r}=this.context;return 0===e.length&&0===a.length?null:p.a.createElement(k,null,e.map(({key:e,on:a,needLogin:t})=>a?p.a.createElement(u.a,{key:e,className:"menu-item",disabled:t&&!r,onClick:()=>this.handleOnClickDefaultMenu(e,t)},Object(x.a)("popupMenu_kinds_"+e)):null),f()(a).map(([e,a])=>p.a.createElement(u.a,{key:e,className:"menu-item",onClick:()=>this.handleOnClickCustomMenu(a.url)},a.title)),p.a.createElement(u.a,{className:"menu-item",onClick:this.handleOnClickAddMore},p.a.createElement(m.a,{icon:"add",size:16})))}}d()(M,"contextType",v.a);var C=t(62);const O=y.b`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }
`,L=y.d.div`
  position: absolute;
  top: 0;
  width: 400px;
  height: 500px;
  backdrop-filter: blur(4px);
  background-color: rgb(255 255 255 / 92%);
  opacity: 0;
  transition: opacity 0s .3s, z-index 0s .3s;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 10;
    overflow: hidden;
  }

  .welcome {
    text-align: left;
    color: black;
    margin: 0 -1px 8px;
  }

  .logo {
    width: fit-content;
    color: var(--bilibili-pink);
  }

  .version {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 0;
    text-align: right;
    color: var(--google-grey-500);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 12px;
    left: 12px;

    .description {
      font-size: 12px;
      color: var(--bilibili-pink);
      text-align: center;

      a {
        color: var(--bilibili-blue);
        cursor: pointer;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(33 33 33 / 10%);
    background-image: linear-gradient(0deg, #0e0e0e 0%, transparent);
    backdrop-filter: blur(20px);
    .welcome {
      color: #eee;
    }
  }
`,N=y.d.div`
  margin: 30% auto 0;
  width: min-content;
  text-align: center;
`,S=y.d.div`
  margin: 140px auto 0;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .bilibili-helper-2-icon-bilibili {
    width: 42px;
    line-height: 10px;
  }
`;class T extends p.a.Component{constructor(e){super(e),d()(this,"state",{loginModalShow:!1}),d()(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),d()(this,"handleOnClickGoToOverview",()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))}),d()(this,"handleOnClickGoToWebsite",()=>{this.openPage("https://d.bilibilihelper.com/")})}render(){return p.a.createElement(L,{className:"show"},p.a.createElement(l.a,null),p.a.createElement(O,null),p.a.createElement(N,null,p.a.createElement("p",{className:"welcome"},"感谢使用"),p.a.createElement(m.a,{className:"logo",icon:"bilibilihelper",size:42}),p.a.createElement("p",{className:"version"},p.a.createElement("span",null,"当前版本: ",C.c))),p.a.createElement(S,null,p.a.createElement(u.a,{className:"primary",onClick:this.handleOnClickGoToWebsite},p.a.createElement("div",null,"立即更新"))))}}d()(T,"contextType",v.a);var z=t(28),_=t.n(z),A=t(29),j=t.n(A),P=t(15),I=t.n(P),W=t(14),R=t.n(W),B=t(12),$=t.n(B),H=t(11),F=t.n(H),U=t(18),V=t.n(U),Y=t(10);function X(e,a){var t=F()(e);if($.a){var r=$()(e);a&&(r=r.filter((function(a){return R()(e,a).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?X(Object(t),!0).forEach((function(a){d()(e,a,t[a])})):I.a?j()(e,I()(t)):X(Object(t)).forEach((function(a){_()(e,a,R()(t,a))}))}return e}const q=y.d.div`
  position: relative;
  width: 24px;
  margin-right: 4px;

  &:hover {
    .message-content {
      opacity: 1;
      visibility: visible;
    }
  }

  .bilibili-helper-2-icon-email {
    &.has-unread {
      color: var(--bilibili-pink);
    }
  }
`,G=y.d.div.attrs(({show:e})=>({className:["bilibili-message-content",e?"show":null].join(" ")}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  min-width: 80px;
  min-height: 100px;
  background-color: rgb(236 236 236);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 2px;
      display: flex;
      justify-content: space-between;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
      }

      .unread {
        color: var(--bilibili-pink);
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    ul {
      li {
        &:hover {
          background-color: var(--paper-grey-900);
        }
      }
    }
  }
`,J={reply:"https://message.bilibili.com/#/reply",at:"https://message.bilibili.com/#/at",like:"https://message.bilibili.com/#/love",system:"https://message.bilibili.com/#/system",whisper:"https://message.bilibili.com/#/whisper"};class K extends p.a.Component{constructor(e){super(e),d()(this,"state",{active:!1,latestList:{},newList:{},hasUnread:!1}),d()(this,"ref",p.a.createRef(null)),d()(this,"handleOnMouseEnterIcon",()=>{this.setState({active:!0})}),d()(this,"handleOnHideBox",e=>{this.setState({active:!1})}),d()(this,"handleOnCLickHideBox",e=>{this.ref.current&&!this.ref.current.contains(e.target)&&this.handleOnHideBox()}),d()(this,"handleOnClickMessage",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/reply"},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_message"})})}),d()(this,"handleOnClickMessageTypeLink",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:J[e]},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_message",label:e})})})}componentDidMount(){document.addEventListener("click",this.handleOnCLickHideBox),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getUnreadInfo"},e=>{if(e){const{at:a,like:t,reply:r,sys_msg:i,follow_unread:n,unfollow_unread:p}=e.latestList,o=a+t+r+i+n+p>0;this.setState(D(D({},e),{},{hasUnread:o}))}})}render(){const{bilibiliAccount:e}=this.context,{active:a,latestList:t,hasUnread:r}=this.state;return void 0===e||!(!e||!e.hasLogin)?p.a.createElement(q,V()({id:"bilibiliMessage",ref:this.ref,className:"message-app",onMouseLeave:this.handleOnHideBox},this.props),p.a.createElement(Y.c,{icon:"email",className:[a?"active":null,r?"has-unread":null].filter(Boolean).join(" "),size:16,onClick:this.handleOnClickMessage,onMouseEnter:this.handleOnMouseEnterIcon}),p.a.createElement(G,{show:a,onMouseLeave:this.handleOnHideBox},void 0!==t.follow_unread?p.a.createElement("ul",null,p.a.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("reply")},"回复我的 ",p.a.createElement("span",{className:t.reply>0?"unread":""},t.reply)),p.a.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("at")},"@我的 ",p.a.createElement("span",{className:t.at>0?"unread":""},t.at)),p.a.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("like")},"收到的赞 ",p.a.createElement("span",{className:t.like>0?"unread":""},t.like)),p.a.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("system")},"系统通知 ",p.a.createElement("span",{className:t.sys_msg>0?"unread":""},t.sys_msg)),p.a.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("whisper")},"我的消息",p.a.createElement("span",{className:t.follow_unread+t.unfollow_unread>0?"unread":""},t.follow_unread+t.unfollow_unread))):null)):null}}d()(K,"contextType",v.a);var Q=t(76);const Z=y.d.div`
  position: relative;
  width: 24px;
  margin-right: 4px;
`,ee=y.d.div.attrs(({show:e})=>({className:e?"show":null}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  background-color: rgb(236 236 236);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  .history-list {
    margin: 0 0 6px;
    padding: 0;
    list-style: none;

    .history-list-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      min-width: 250px;
      white-space: nowrap;
      font-size: 16px;
      zoom: 0.6;

      .clear-all {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: dodgerblue;
        }
      }
    }

    .keyword-line {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 3px 0 3px 4px;
      max-width: 250px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
        border-radius: 2px;
      }

      .keyword {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .clear-btn {
        flex-shrink: 0;
        margin-left: 8px;
        color: var(--paper-grey-800);
        zoom: 0.6;

        &:hover {
          color: var(--paper-grey-600);
        }
      }
    }
  }

  input {
    padding: 2px 4px;
    width: calc(100% - 10px);
    min-width: 150px;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    .history-list .keyword-line {
      color: var(--bilibili-gray);

      &:hover {
        background-color: var(--paper-grey-900);
      }
    }
  }
`,ae=function(e){const[a,t]=p.a.useState(!1),[r,i]=p.a.useState([]),n=p.a.useRef(null),o=p.a.useRef(null),l=p.a.useCallback(()=>{a||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_searcher"}),t(!a)},[a,o]),s=p.a.useCallback(e=>{n.current&&!n.current.contains(e.target)&&t(!1)},[]),c=p.a.useCallback(e=>{e&&chrome.runtime.sendMessage({target:"popupSearcher",event:"go2Search",keyword:e},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"search",label:e})})},[]),d=p.a.useCallback(e=>{e.persist(),"Enter"===e.key&&e.target.value.trim()&&c(e.target.value.trim())},[]),h=p.a.useCallback(()=>{chrome.runtime.sendMessage({target:"popupSearcher",event:"clearAll"},e=>{e&&i([])})},[]),b=p.a.useCallback(e=>{void 0!==e&&chrome.runtime.sendMessage({target:"popupSearcher",event:"clearKeywordByIndex",index:e},e=>{e&&i(e)})},[]);return p.a.useEffect(()=>{a&&setTimeout(()=>{o.current.focus()},250)},[a]),p.a.useEffect(()=>(document.addEventListener("click",s),chrome.runtime.sendMessage({target:"popupSearcher",event:"getSearchHistory"},e=>{e&&i(e)}),()=>{document.removeEventListener("click",s)}),[]),p.a.createElement(Z,V()({ref:n,className:"searcher"},e),p.a.createElement(Y.c,{icon:"search",className:a?"active":null,size:16,onClick:l}),p.a.createElement(ee,{show:a},r.length>0&&p.a.createElement("ul",{className:"history-list"},p.a.createElement("li",{className:"history-list-header"},"最近",r.length,"条记录 ",p.a.createElement("span",{className:"clear-all",onClick:h},"清空记录")),r.map((e,a)=>p.a.createElement("li",{className:"keyword-line",key:e},p.a.createElement("span",{className:"keyword",onClick:()=>c(e)},e),p.a.createElement(Y.c,{className:"clear-btn",size:16,icon:"close",onClick:()=>b(a)})))),p.a.createElement(Q.a,{ref:o,placeholder:"输入关键词按回车搜索",onKeyPress:d})))};function te(e,a){var t=F()(e);if($.a){var r=$()(e);a&&(r=r.filter((function(a){return R()(e,a).enumerable}))),t.push.apply(t,r)}return t}const re=p.a.lazy(()=>t.e(2).then(t.bind(null,555))),ie=y.d.div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;

  .bilibili-helper-2-icon-bell {
    &.has-new {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    //background-color: rgb(27 27 27);
  }
`;class ne extends p.a.Component{constructor(e){super(e),d()(this,"state",{active:!1,list:[],latestUpdateDateTime:null,hasNew:!1}),d()(this,"handleOnClickIcon",()=>{const{active:e}=this.state;e||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_announcement"}),this.setState({active:!e})}),d()(this,"handleOnCloseButton",()=>{const{hasNew:e}=this.state;e&&chrome.runtime.sendMessage({target:"message",event:"setAnnouncementRead"},()=>{this.setState({hasNew:!1})}),this.setState({active:!1})})}componentDidMount(){chrome.runtime.sendMessage({target:"message",event:"getLatestAnnouncement"},e=>{if(e){const{announcement:a}=e;a.hasNew&&this.setState({active:!0}),this.setState(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?te(Object(t),!0).forEach((function(a){d()(e,a,t[a])})):I.a?j()(e,I()(t)):te(Object(t)).forEach((function(a){_()(e,a,R()(t,a))}))}return e}({},a))}})}render(){const{active:e,list:a,content:t,hasNew:r}=this.state;return p.a.createElement(ie,null,p.a.createElement(m.a,{icon:"bell",size:16,className:[e?"active":null,r?"has-new":null].filter(Boolean).join(" "),onClick:this.handleOnClickIcon}),p.a.createElement(p.a.Suspense,{fallback:null},p.a.createElement(re,{active:e,list:a,handleOnCloseButton:this.handleOnCloseButton})))}}d()(ne,"contextType",v.a);var pe=t(51);const oe=p.a.lazy(()=>t.e(3).then(t.bind(null,554))),le=y.d.div`
  position: relative;
  bottom: 10px;
  margin-bottom: -26px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`,se=y.d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--paper-grey-100);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  transition: border-color .3s;

  &:hover {
    border: 3px solid var(--paper-grey-50);
  }

  .img {
    position: relative;
    top: 0;
    right: 0;
    border-radius: 50%;
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--paper-grey-800);
    &:hover {
      border-color: var(--paper-grey-700);
    }
  }
`;class ce extends p.a.Component{constructor(e){super(e),d()(this,"state",{active:!1}),d()(this,"handleOnClickIcon",()=>{this.setState({active:!this.state.active})}),d()(this,"handleOnCloseModal",()=>{this.setState({active:!1})})}render(){const{bilibiliAccount:e}=this.context,{active:a}=this.state;return void 0!==e&&!(!e||!e.hasLogin)?p.a.createElement(le,null,p.a.createElement(se,{onClick:this.handleOnClickIcon},p.a.createElement(pe.a,{url:e&&e.face})),p.a.createElement(p.a.Suspense,{fallback:null},p.a.createElement(oe,{active:a,onClose:this.handleOnCloseModal}))):null}}d()(ce,"contextType",v.a);const de=y.d.div.attrs({className:"popup-toolbar"})`
  position: absolute;
  bottom: 0;
  right: 0;
  //left: 0;
  //display: flex;
  //align-items: center;
  height: 30px;
  padding: 0 10px 0 4px;
  border-radius: 4px 0 0 0;
  background-color: rgb(230 230 230);
  //background-color: rgb(230 230 230 / 70%);
  //backdrop-filter: blur(10px);
  z-index: 2;

  .extra-tools {
    display: flex;
    margin-top: 3px;
    margin-right: -10px;
    margin-left: auto;
    line-height: 16px;

    .action-btn {
      margin-right: 4px;

      &:last-of-type {
        //margin-right: 0;
      }
    }

    .bilibili-helper-2-iconfont {
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
      background-color: transparent;
      transition: background-color .2s;

      &:hover, &.active {
        background-color: #ccc;
      }

      &:active {
        background-color: #bbb;
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(20 20 20);
    color: #999999;
    .extra-tools {
      .bilibili-helper-2-iconfont {
        &:hover, &.active {
          background-color: #222;
        }

        &:active {
          background-color: #1a1a1a;
        }
      }
    }
  }
`,he=()=>chrome.runtime.getURL("html/config.html");class be extends p.a.Component{constructor(e){super(e),d()(this,"handleOnClickOption",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_option"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:he()})})}render(){return p.a.createElement(de,null,p.a.createElement("div",{className:"extra-tools"},p.a.createElement(ae,{className:"action-btn"}),p.a.createElement(K,null),p.a.createElement(ne,{className:"action-btn"}),p.a.createElement(m.a,{className:"action-btn",icon:"option",size:16,onClick:this.handleOnClickOption}),p.a.createElement(ce,null)))}}var ge=t(25),fe=t(2),ue=t.n(fe),me=t(26);const ye=[{key:"home",path:"/",component:p.a.lazy(()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,553))),exact:!0,needLogin:!1,show:!0},{key:"specialAttention",path:"/specialAttention",component:p.a.lazy(()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,543))),exact:!0,needLogin:!1,show:!0},{key:"recentlyPosted",path:"/recentlyPosted",component:p.a.lazy(()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,552))),exact:!0,needLogin:!0,show:!1},{key:"animeTimeTable",path:"/animeTimeTable",component:p.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,551))),show:!1},{key:"anime",path:"/anime",component:p.a.lazy(()=>Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,550))),needLogin:!0,show:!1},{key:"live",path:"/live",component:p.a.lazy(()=>t.e(7).then(t.bind(null,549))),exact:!0,needLogin:!0,show:!1},{key:"favlist",path:"/favlist",component:p.a.lazy(()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,548))),exact:!0,needLogin:!0,show:!1},{key:"watchLater",path:"/watchLater",component:p.a.lazy(()=>t.e(5).then(t.bind(null,547))),exact:!0,needLogin:!0,show:!1},{key:"manga",path:"/manga",component:p.a.lazy(()=>t.e(4).then(t.bind(null,546))),exact:!0,needLogin:!0,show:!1}];var xe,ve;const ke=y.d.div.attrs({className:"popup-main"})`
  //display: inline-block;
  flex-shrink: 0;
  flex-grow: 1;
  width: calc(100% - 80px);
  height: 100%;
  box-sizing: border-box;
  background-color: #F4F4F4;
  overflow-x: hidden;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .tab-bar {
    position: relative;
    //margin: 10px 0px 0px;
    //padding: 0 10px 6px;
    //box-shadow: 0 1px 0 0px #ddd;
    width: 100%;
    background-color: #e7e7e7;
    z-index: 2;
    white-space: nowrap;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    .inner {
      width: fit-content;
      will-change: transform;
    }

    a {
      display: inline-block;
      padding: 6px 10px 6px;
      font-size: 14px;
      text-decoration: none;
      color: #666;
      transition: color 150ms;
      cursor: pointer;
      user-select: none;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover:not(.active) {
        color: hsl(0deg 0% 0%);
      }

      &.active {
        position: relative;
        font-weight: bold;
        color: #333333;
      }

      &[disabled] {
        cursor: not-allowed;
        color: #3c3c3c;
      }
    }

    .translate-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      pointer-events: none;
    }

    .translate-box {
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: #F4F4F4;
      transition: width .15s .05s, transform .2s ease-in-out;
      will-change: width, transform;
      z-index: -1;

      &::before, &::after {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 6px;
        height: 6px;
        background-image: radial-gradient(closest-side, #e7e7e7 50%, #f4f4f4 50%);
        background-position: 200% 200%;
        background-size: 400% 400%;
      }

      &::before {
        left: -6px;
      }

      &::after {
        right: -6px;
        transform: rotate(90deg);
      }
    }
  }

  .content {
    position: relative;
    height: calc(100% - 32px);
    font-size: 12px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }

    &.not-login {
      padding-top: 30px;
      height: calc(100% - 64px);

      & > div {
        height: calc(100% - 30px);
      }
    }

    .login-wrapper {
      display: flex;
      align-items: center;
      margin-top: -30px;
      padding: 0 6px;
      height: 30px !important;
      font-weight: bold;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      z-index: 30;

      .skip-btn {
        margin-left: auto;
        margin-right: 12px;
        cursor: pointer;
      }

      .login-btn {
        padding: 0 8px;
        height: 20px;
        line-height: 20px;
        border-radius: 6px;
        background-color: var(--bilibili-gray);
        color: var(--bilibili-blue);
        text-decoration: none;
      }
    }

    & > div {
      position: absolute;
      box-sizing: border-box;
      padding: 10px 10px 0 10px;
      width: 100%;
      height: 100%;
      overflow: auto;
      contain: size;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    color: #999999;

    .tab-bar {
      background-color: #151515;
      //box-shadow: 0 1px 0 0px #191919;

      a {
        color: #999;

        &:hover:not(.active) {
          color: hsl(0deg 0% 90%);
        }

        &.active {
          color: #CCCCCC;
        }
      }

      .translate-box {
        background-color: #1f1f1f;

        &::before, &::after {
          background-image: radial-gradient(closest-side, #151515 50%, #1f1f1f 50%);
        }
      }
    }
  }
`,we=b.a.get("showLoginBar"),Ee=b.a.get("popupMain-config"),Me=Ee?Ee.sectionShow.reduce((e,{key:a,on:t})=>(e[a]=t,e),{}):{},Ce=Object(me.f)((ve=xe=class extends p.a.Component{constructor(e){super(e),d()(this,"tabWidth",null),d()(this,"startTabWidth",null),d()(this,"stopTabWidth",null),d()(this,"tabInnerWidth",null),d()(this,"restTabWidth",null),d()(this,"restTabInnerWidth",null),d()(this,"currentTabElement",null),d()(this,"rate",null),d()(this,"needScrollEvent",!1),d()(this,"state",{translateBoxStyle:null,showLoginBar:void 0===we||we}),d()(this,"handleOnClickLink",(e,a,r)=>{e.persist(),this.currentTabElement=e.target,e.target.scrollIntoView({behavior:"smooth"}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"tab_bar",label:a});const{history:i,location:n}=this.props,{bilibiliAccount:p}=this.context;n.pathname!==a&&(!r||r&&r===!!p?i.push(a):Promise.all([t.e(0),t.e(12)]).then(t.bind(null,556)).then(({notifyNeedLogin:e})=>{e&&e()}))}),d()(this,"handleOnClickSkipLogin",()=>{this.setState({showLoginBar:!1},()=>{b.a.set("showLoginBar",!1)}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_skip_login"})}),d()(this,"handleOnClickLogin",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_login"})}),d()(this,"handleOnMouseMove",e=>{if(e.persist(),this.needScrollEvent)if(e.clientX>this.startTabWidth){const a=(e.clientX-this.startTabWidth)*this.rate;this.tabRef.current.scrollTo(a,0)}else this.tabRef.current.scrollTo({top:0,left:0})}),d()(this,"handleOnMouseLeave",()=>{this.tabRef.current.scrollLeft<50?this.tabRef.current.scrollTo({top:0,left:0,behavior:"smooth"}):this.currentTabElement&&this.currentTabElement.scrollIntoView({behavior:"smooth"})}),this.tabRef=p.a.createRef(),this.tabInnerRef=p.a.createRef()}componentDidMount(){const e=document.querySelector(".tab-bar-box .active");this.currentTabElement=e,e.scrollIntoView({behavior:"smooth"}),this.setState({translateBoxStyle:{transform:`translateX(${e.offsetLeft}px)`,width:e.clientWidth+"px"}}),this.tabWidth=this.tabRef.current.clientWidth,this.tabInnerWidth=this.tabInnerRef.current.clientWidth,this.startTabWidth=this.tabWidth-50,this.stopTabWidth=this.tabWidth-15,this.restTabWidth=this.stopTabWidth-this.startTabWidth,this.restTabInnerWidth=this.tabInnerWidth-this.tabWidth,this.rate=this.restTabInnerWidth/this.restTabWidth,this.needScrollEvent=this.tabWidth<this.tabInnerWidth}componentDidUpdate(e,a,t){if(e.location.pathname!==this.props.location.pathname){const e=document.querySelector(".tab-bar-box .active");this.currentTabElement=e,e.scrollIntoView({behavior:"smooth"}),this.setState({translateBoxStyle:{transform:`translateX(${e.offsetLeft}px)`,width:e.clientWidth+"px"}})}}render(){const{location:e}=this.props,{translateBoxStyle:a,showLoginBar:t}=this.state,{hasLogin:r,bilibiliAccount:i}=this.context;return p.a.createElement(ke,null,p.a.createElement("div",{className:"tab-bar",ref:this.tabRef,onMouseMove:this.handleOnMouseMove,onMouseLeave:this.handleOnMouseLeave},p.a.createElement("div",{className:"inner",ref:this.tabInnerRef},p.a.createElement("div",{className:"translate-wrapper"},p.a.createElement("div",{className:"translate-box",style:a})),p.a.createElement("div",{className:"tab-bar-box"},ye.map(({key:a,title:t,path:r,needLogin:n=!1,show:o})=>o||Me[a]?p.a.createElement("a",{key:a,disabled:!i&&!0===n,className:e.pathname===r?"active":null,onClick:e=>this.handleOnClickLink(e,r,n)},Object(s.__)("popupMain_"+a)):null)))),p.a.createElement("div",{className:["content",!r&&t?"not-login":""].join(" ")},!r&&t?p.a.createElement("div",{className:"login-wrapper"},"新增十多项特性，开始个性化定制~",p.a.createElement("a",{className:"skip-btn",onClick:this.handleOnClickSkipLogin},"跳过"),p.a.createElement("a",{className:"login-btn",onClick:this.handleOnClickLogin,href:chrome.runtime.getURL("html/config.html"),target:"_blank",rel:"noreferrer"},"点击登录")):null,p.a.createElement(p.a.Suspense,{fallback:p.a.createElement("div",null,"Loading...")},p.a.createElement(me.c,{location:e},ye.map(({title:e,path:a,exact:t,component:r})=>p.a.createElement(me.a,{key:a,title:e,path:a,exact:t,component:r}))))))}},d()(xe,"contextType",v.a),d()(xe,"propTypes",{children:ue.a.any,history:ue.a.object,location:ue.a.object}),ve)),Oe=y.b`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    //-webkit-font-smoothing: subpixel-antialiased;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }

  body {
    width: fit-content;
    margin-left: auto;
  }

  .fade-enter {
    opacity: 0;
    //transition: opacity 300ms cubic-bezier(0.42, 0, 0, 0.84);
    z-index: 2;
    visibility: visible;
    z-index: 1;
  }

  .fade-enter-active {
    opacity: 1;
  }

  .fade-appear-done {
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
    //transition: opacity 150ms cubic-bezier(0.42, 0, 0, 0.84);
    z-index: 0;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .fade-exit-done {
    opacity: 0;
    visibility: hidden;
  }
`,Le=y.d.div`
  position: relative;
  //display: flex;
  //flex-direction: column;
  width: 400px;
  max-width: 700px;
  height: 500px;
  max-height: 500px;
  overflow: hidden;

  & > .content-wrapper {
    display: flex;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }
`,Ne=b.a.get("popupMain-config")||{},Se=b.a.get("popup-config")||{},Te=Se?Se.resizeRate:1;class ze extends p.a.Component{constructor(e){super(e),d()(this,"initialzed",!1),d()(this,"state",{states:null,currentVersionInfo:null,needRefreshPage:!1,specialAttentionList:[],recentVideoList:[],videoOpenMethod:()=>this.state.isVIP()&&Ne?Ne.videoOpenMethod:"direct",hasLogin:!0,hasRegister:!1,bilibiliAccount:void 0,bhAccount:null,columns:Ne.columns||1,videoCardType:Ne.videoCardType||"old",loading:!1,handleOnClickRefresh:()=>{history.go()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickLogin:()=>{this.state.loading||(this.setState({loading:!0}),this.setState({loading:!1}))},getSpecialAccountList:()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},(e=[])=>{this.setState({specialAttentionList:e})})},isVIP:()=>this.state.states&&Object(s.isVIP)(this.state.bhAccount),isSuperVIP:()=>this.state.states&&Object(s.isSuperVIP)(this.state.bhAccount)}),d()(this,"initAccountData",async e=>new i.a(a=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},t=>{if(console.log("getStatus",t),t){const{hasLogin:r,bilibiliAccount:i=null,hasRegister:n}=t;this.setState({hasLogin:r,hasRegister:n,bilibiliAccount:i}),a(),e&&e()}else setTimeout(()=>{this.initAccountData(a)},500)})}))}componentDidMount(){document.body.style.zoom=Te,chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:e})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup"}),this.state.getSpecialAccountList(),this.initAccountData().then(()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e})})})}render(){const{columns:e,states:a}=this.state;return p.a.createElement(ge.a,null,p.a.createElement(Oe,null),p.a.createElement(Le,{style:{width:(2===e?500:400)+"px"}},p.a.createElement(v.a.Provider,{value:this.state},p.a.createElement("div",{className:"content-wrapper"},p.a.createElement(Ce,null),p.a.createElement(M,null)),p.a.createElement(be,null),a&&a.shouldUpdate?p.a.createElement(T,null):null)))}}const _e=y.b`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }
`,Ae=y.d.div`
  width: 400px;
  height: 500px;
  backdrop-filter: blur(4px);
  background-color: rgb(255 255 255 / 92%);
  opacity: 0;
  transition: opacity 0s .3s, z-index 0s .3s;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 10;
    overflow: hidden;
  }

  .welcome {
    text-align: left;
    color: black;
    margin: 0 -1px 8px;
  }

  .logo {
    width: fit-content;
    color: var(--bilibili-pink);
  }

  .version {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 0;
    text-align: right;
    color: var(--google-grey-500);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 12px;
    left: 12px;

    .description {
      font-size: 12px;
      color: var(--bilibili-pink);
      text-align: center;

      a {
        color: var(--bilibili-blue);
        cursor: pointer;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(33 33 33 / 10%);
    background-image: linear-gradient(0deg, #0e0e0e 0%, transparent);
    backdrop-filter: blur(20px);
    .welcome {
      color: #eee;
    }
  }
`,je=y.d.div`
  margin: 30% auto 0;
  width: min-content;
  text-align: center;
`,Pe=y.d.div`
  margin: 140px auto 0;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .bilibili-helper-2-icon-bilibili {
    width: 42px;
    line-height: 10px;
  }
`;class Ie extends p.a.Component{constructor(e){super(e),d()(this,"state",{loginModalShow:!1}),d()(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),d()(this,"handleOnClickGoToOverview",()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))}),d()(this,"handleOnClickGoToWebsite",()=>{this.openPage("https://bilibilihelper.com/")})}render(){return p.a.createElement(Ae,{className:"show"},p.a.createElement(l.a,null),p.a.createElement(_e,null),p.a.createElement(je,null,p.a.createElement("p",{className:"welcome"},"感谢使用"),p.a.createElement(m.a,{className:"logo",icon:"bilibilihelper",size:42}),p.a.createElement("p",{className:"version"},p.a.createElement("span",null,"当前版本: ",C.c))),p.a.createElement(Pe,null,p.a.createElement(u.a,{className:"primary"},p.a.createElement("div",null,"正在启动中，请稍后"))))}}d()(Ie,"contextType",v.a);const We=document.getElementById("root");let Re=0,Be=!1;const $e=()=>new i.a(e=>{new i.a(e=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},a=>{e(!!a&&!!a.bilibiliHelperAccount)})}).then(a=>{a?(Object(s.initI18n)().then(()=>{Object(o.render)(p.a.createElement(p.a.Fragment,null,p.a.createElement(l.a,null),p.a.createElement(ze,null)),We)}),e(!0)):Re<10&&(Be||(Be=!0,Object(o.render)(p.a.createElement(Ie,null),We)),++Re,setTimeout($e,1e3))})});$e()},50:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return n}));const r={superAdmin:"猫国设计师",admin:"猫国城管",catForever:"猫国大护法",catVIPSuper:"助手猫培育师",catVIP:"助手猫观察员",catWatcher:"助手猫瞭望者",catVIPHonor:"猫国荣誉市民",catAirborneCommander:"空降指挥官",catAirbornePilot:"喵营飞行员"},i=["superAdmin","admin","catForever","catVIPSuper","catVIP"],n=["superAdmin","admin","catForever","catVIPSuper"]},56:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0);const i=t.n(r).a.createContext({})},61:function(e,a,t){"use strict";t(19);var r=t(23);t.d(a,"a",(function(){return r.a}))},75:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r=t(3).c`
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
`},80:function(e,a,t){"use strict";var r=t(50);t.d(a,"a",(function(){return r.a})),t.d(a,"b",(function(){return r.b})),t.d(a,"c",(function(){return r.c}))},85:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t(3),i=t(19),n=t(75);const p=r.b`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${Object(i.c)()};
    ${n.a};
    //background-color: var(--paper-grey-400)!important;
  }
  
  * {
    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    
    &::-webkit-scrollbar-corner {
      display: none;
    }
  
    &::-webkit-scrollbar-thumb {
      visibility: hidden;
      background-color: #b3b3b3;
    }
  
    &:hover {
      &::-webkit-scrollbar-thumb {
        visibility: visible;
      }
    }
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content!important;
    vertical-align: baseline!important;
    //color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content!important;
    //color: var(--bilibili-pink);
  }
  
  .button {
    .primary {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-bilibilihelper {
        color: var(--bilibili-gray);
      }
    }
    .border {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-bilibilihelper {
        color: var(--bilibili-pink);
      }
    }
    
  }
  
  @media (prefers-color-scheme: dark) {
    * {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }
  }
`},92:function(e,a,t){"use strict";var r=t(49),i=t.n(r),n=t(1),p=t.n(n);class o{constructor(...e){p()(this,"x",void 0),p()(this,"y",void 0),p()(this,"__valid",!1),p()(this,"__needUpdate",!0),p()(this,"set",(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof o){const{x:a,y:t}=e[0];this.set(a,t)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this}),p()(this,"setX",e=>(this.x=e,this.__needUpdate=!0,this)),p()(this,"setY",e=>(this.y=e,this.__needUpdate=!0,this)),p()(this,"add",e=>(this.x+=e.x,this.y+=e.y,this)),p()(this,"addX",e=>(this.x+=e,this)),p()(this,"addY",e=>(this.y+=e,this)),p()(this,"sub",e=>(this.x-=e.x,this.y-=e.y,this)),p()(this,"subX",e=>this.addX(-e)),p()(this,"subY",e=>this.addY(-e)),p()(this,"multiply",e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this)),p()(this,"multiplyX",e=>(0===e?this.x=1/0:this.x*=e,this)),p()(this,"multiplyY",e=>(0===e?this.y=1/0:this.y*=e,this)),p()(this,"divide",e=>0===e?this.set(1/0,1/0):this.multiply(1/e)),p()(this,"divideX",e=>this.multiplyX(1/e)),p()(this,"divideY",e=>this.multiplyY(1/e)),p()(this,"dot",e=>this.x*e.x+this.y+e.y),p()(this,"equal",(...e)=>{if("number"==typeof e[0]&&"number"==typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof o){const{x:a,y:t}=e[0];return this.equal(a,t)}return!1}),p()(this,"normalize",()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)}),p()(this,"negtiveX",()=>(this.x*=-1,this)),p()(this,"negtiveY",()=>(this.y*=-1,this)),p()(this,"negtive",()=>this.negtiveX().negtiveY()),p()(this,"round",()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this)),p()(this,"roundX",()=>(this.x=Math.round(this.x),this)),p()(this,"roundY",()=>(this.y=Math.round(this.y),this)),p()(this,"floor",()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this)),p()(this,"floorX",()=>(this.x=Math.floor(this.x),this)),p()(this,"floorY",()=>(this.y=Math.floor(this.y),this)),p()(this,"ceil",()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this)),p()(this,"ceilX",()=>(this.x=Math.ceil(this.x),this)),p()(this,"ceilY",()=>(this.y=Math.ceil(this.y),this)),p()(this,"trunc",()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this)),p()(this,"truncX",()=>(this.x=Math.trunc(this.x),this)),p()(this,"truncY",()=>(this.y=Math.trunc(this.y),this)),p()(this,"clone",()=>new this.constructor(this.x,this.y)),p()(this,"toArray",()=>[this.x,this.y]),p()(this,"toObject",()=>({x:this.x,y:this.y})),p()(this,"toString",(e="x",a="y")=>`${e}${this.x}${a}${this.y}`),this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=i()(this.x)&&i()(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}t.d(a,"a",(function(){return l}));class l extends o{constructor(...e){super(...e)}}}});