!function(e){function t(t){for(var n,l,s=t[0],r=t[1],c=t[2],h=0,d=[];h<s.length;h++)l=s[h],i[l]&&d.push(i[l][0]),i[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(p&&p(t);d.length;)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var r=a[s];0!==i[r]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={22:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="../";var s=window.webpackJsonp=window.webpackJsonp||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=r;o.push([301,0,13,1]),a()}({132:function(e,t){},19:function(e,t,a){"use strict";var n=a(34),i=a.n(n),o=a(3),l=a(24),s=a.n(l);const r={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"},c={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"};a.d(t,"h",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return d})),a.d(t,"i",(function(){return g})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u})),a.d(t,"j",(function(){return b})),a.d(t,"f",(function(){return f})),a.d(t,"e",(function(){return v})),a.d(t,"g",(function(){return c}));const p=(e,t=16)=>e/t+"rem",h=(e="")=>o.c`
    font-family: ${i()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,d=(e=16)=>o.c`
    font-size: ${p(e)};
`,g=(e=1)=>1===e?o.c`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:o.c`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,m=(e,t=1)=>r[e]?s()(r[e]).alpha(t).rgb().string():void 0,u=([...e])=>{const t="#000000",a=.5;let n="";for(let i in e){const{h:o,v:l,blur:r,spread:c,color:p=s()(t).alpha(a).rgb().string(),inset:h=""}=e[i];n+=`${1*o}px ${1*l}px ${5*r}px ${5*c}px ${p} ${h},`}return o.c`
        box-shadow: ${n};
    `},b=({target:e="all",duration:t=.3})=>o.c`transition: ${e} ${t}s;`,f=({direction:e="h",value:t=0})=>o.c`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`,v=o.c`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(19);const i={color:n.b,logoHeight:50,bodyMinWidth:1e3,headerHeight:0,sidebarWidth:204,mainWidth:796,baseFontSize:12,fontFamily:n.c,fontSize:n.d,rem:n.h,textOverflow:n.i,transition:n.j,boxShadow:n.a,marginTrim:n.f,hideScrollbar:n.e,opacity:n.g}},301:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),o=a(0),l=a.n(o),s=a(22),r=a(55),c=a(62),p=a(3),h=a(85),d=a(25),g=a(1),m=a.n(g),u=a(10);const b=p.d.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  flex-shrink: 0;
  padding: 10px 0;
  background-color: var(--bilibili-pink);
  color: #fff;
  overflow: hidden;

  .inner {
    display: flex;
    align-items: center;
    //max-width: 800px;
    margin: 0 auto;
    padding: 0 12px;

    .bilibili-helper-2-icon-cat {
      float: left;
      color: #fff;
    }

    header {
      margin-left: 8px;

      h1 {
        margin: 0;
        line-height: 20px;
        font-size: 20px;
        text-indent: -1px;

        .bilibili-helper-2-icon-bilibilihelper {
          font-weight: normal;
        }
      }

      p {
        margin: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;class f extends l.a.Component{constructor(e){super(e),m()(this,"state",{currentVersionInfo:null})}componentDidMount(){chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:e})})}render(){const{currentVersionInfo:e}=this.state;return console.log(e),l.a.createElement(b,null,l.a.createElement("div",{className:"inner"},l.a.createElement(u.c,{icon:"cat",size:55}),l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.c,{icon:"bilibilihelper",size:20})),l.a.createElement("p",null,"by ",l.a.createElement("a",{href:"mailto:jjj201200@gmail.com",target:"_blank",rel:"noreferrer"},"DrowsyFlesh"),"~ ",`v${c.c}（${e?e.publishType:"版本异常"}）`))))}}var v=a(4),C=(a(50),a(7)),y=a(126),w=a(2),S=a.n(w),E=a(26),x=a(36);const k=p.d.h2`
  margin: 0 0 12px;

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    color: #333;
  }

  p {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: normal;
    color: #333;
  }
`;class M extends l.a.Component{constructor(e){super(e)}render(){const{title:e,description:t}=this.props;return l.a.createElement(k,null,e?l.a.createElement("div",{className:"title"},e):null,t?l.a.createElement("p",null,t):null)}}m()(M,"propTypes",{title:S.a.any,description:S.a.any});const O=p.d.div`
  margin-bottom: 32px;

  & > .header {
    position: sticky;
    top: 0;
    display: flex;
    margin-bottom: 16px;
    padding: 0 0 0 8px;
    width: 666px;
    //border-bottom: 1px solid #bbb;
    border-radius: 3px;
    background-color: #f3f3f3;
    z-index: 1;

    .title {
      font-size: 16px;

      h2 {
        margin: 0;
        padding: 4px 0 4px;
        font-size: 16px;
        color: #333;
      }

      p {
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: normal;
        color: #333;
      }
    }

    .toolbar {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: 12px;
    }
  }

  .content {
    &::after {
      transition: visibility 0s, z-index 0s, opacity .3s;
    }
    &.toggle-off {
      filter: grayscale(1);
      pointer-events: none;
      user-select: none;

      &::after {
        opacity: 0.5;
        visibility: visible;
        z-index: 1;
        cursor: not-allowed;
      }
    }
  }

`;class L extends l.a.Component{constructor(e){super(e)}render(){const{active:e,toolbar:t}=this.props;return l.a.createElement(O,null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,this.props.title),this.props.description?l.a.createElement("p",null,this.props.description):null),l.a.createElement("div",{className:"toolbar"},t)),l.a.createElement("div",{className:["content",void 0===e||e?null:"toggle-off"].join(" ")},this.props.children))}}m()(L,"propTypes",{title:S.a.any,description:S.a.any,children:S.a.any,toolbar:S.a.any,active:S.a.bool});var P=a(17),A=a.n(P);const F=l.a.createContext({}),I=p.d.section`
  position: relative;
  display: flex;
  margin-left: 16px;
  margin-bottom: 16px;

  .header {
    display: flex;
    margin: 0 0 12px 0;
    padding: 0 0 6px;
    border-bottom: 1px solid #eee;

    &:empty {
      padding: 0;
      border-bottom: none;
    }

    &.no-border {
      margin-bottom: 0;
      border-bottom: none;
    }

    p {
      margin: 0;
    }

    .title {
      flex-grow: 1;
      font-size: 16px;
    }

    .description {
      font-size: 12px;
      color: var(--paper-grey-500);
    }

    .toolbar {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: 4px;
    }
  }

  & > .content {
    flex-shrink: 0;
    position: relative;
    width: 650px;

    & > .body {
      position: relative;
      display: grid;
      transition: filter .3s;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        cursor: not-allowed;
        visibility: hidden;
        z-index: -1;
        transition: visibility 0s .3s, z-index 0s .3s, opacity .3s;
      }

      & > .list-item {
        margin-left: 16px;
        border-top: none;
      }
    }
  }

  & > .content > .body.toggle-off {
    filter: grayscale(1);
    pointer-events: none;
    user-select: none;

    &::after {
      opacity: 0.5;
      visibility: visible;
      transition: visibility 0s, z-index 0s, opacity .3s;
      z-index: 1;
    }
  }
`,B=p.d.div`
  //position: absolute;
  //top: 0;
  //right: 0;
  //bottom: 0;
  //left: 650px;
  margin-left: 12px;
  padding-left: 12px;
  min-width: 200px;
  border-left: 1px dashed var(--bilibili-pink);
`,N=p.d.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
  padding: 0 20px;
  width: calc(100% - 24px);
  height: calc(100% + 10px);
  border-radius: 3px;
  background-color: rgb(244 244 244 / 70%);
  z-index: 1;

  .button {
    color: var(--bilibili-gray);

    .button-view {
      padding: 0 32px;
      background-color: var(--bilibili-blue);
    }
  }
`;class R extends l.a.Component{constructor(e){super(e)}render(){const e=this.props,{active:t,title:a,description:n,children:i,toolbar:o,rows:s,columns:r,helperArea:c,hasLogin:p,isVIP:h}=e,d=A()(e,["active","title","description","children","toolbar","rows","columns","helperArea","hasLogin","isVIP"]);return l.a.createElement(I,d,l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:["header",i?null:"no-border"].filter(Boolean).join(" ")},a||n?l.a.createElement("div",{className:"title"},a?l.a.createElement("p",{className:"title"},a):null,n?l.a.createElement("p",{className:"description"},n):null):null,o?l.a.createElement("div",{className:"toolbar"},o):null),i&&l.a.createElement("div",{className:["body",void 0===t||t?null:"toggle-off"].join(" "),style:{gridTemplateRows:s?`repeat(${s}, 1fr)`:"auto",gridTemplateColumns:`repeat(${r}, 1fr)`}},i),"boolean"!=typeof p||p?null:l.a.createElement(N,null,l.a.createElement(v.Button,{onClick:this.context.handleOnClickShowLoginModal},"点击登录助手账号")),p&&"boolean"==typeof h&&!h?l.a.createElement(N,null,l.a.createElement(v.Button,{onClick:this.context.handleOnClickShowPaymentModal},"点击开通助手会员")):null),c&&l.a.createElement(B,{className:"helper-area",style:{marginTop:(n?10:0)+"px"}},c))}}m()(R,"contextType",F),m()(R,"propTypes",{active:S.a.bool,title:S.a.any,description:S.a.any,toolbar:S.a.any,children:S.a.any,rows:S.a.number,columns:S.a.number,helperArea:S.a.any,hasLogin:S.a.any,isVIP:S.a.any}),m()(R,"defaultProps",{rows:0,columns:1});const D=p.d.section`
  //max-width: 700px;
  min-width: 500px;
  section {
    .radio-button-wrapper {
      margin-bottom: 8px;
      width: fit-content;
    }
    .link {
      margin: 0 2px;
      padding: 0 2px;
      color: var(--bilibili-blue);
    }
  }
`,T=p.d.div`
  .description {
    margin-top: 0;
    font-size: 14px;
  }
  b {
    display: inline-block;
    padding: 0 4px;
    color: var(--bilibili-pink);
  }
  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content;
    vertical-align: baseline;
    color: var(--bilibili-pink);
  }
  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class _ extends l.a.Component{constructor(e){super(e)}render(){const{title:e,description:t}=this.props;return l.a.createElement(T,null,e&&l.a.createElement("h3",null,e),t&&l.a.createElement("p",{className:"description"},t))}}m()(_,"propTypes",{title:S.a.any,description:S.a.any});const U=Object(p.d)(v.Modal)`
  .introduction {
    text-align: center;

    .bilibili-helper-2-icon-bilibili {
      padding: 0 4px;
      width: fit-content;
      vertical-align: baseline;
      color: var(--bilibili-pink);
    }

    .bilibili-helper-2-icon-bilibilihelper {
      padding: 0 4px;
      width: fit-content;
      color: var(--bilibili-pink);
    }
  }

  .description {
    font-size: 12px;
    color: var(--bilibili-pink);
    text-align: center;

    a {
      color: var(--bilibili-blue);
      cursor: pointer;
    }
  }
`,V=p.d.div`
  margin: 30px auto;
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

    //.bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-bilibilihelper {
    //  color: var(--bilibili-gray);
    //}
  }
`;class j extends l.a.Component{constructor(e){super(e),m()(this,"state",{loading:!1,loginModalShow:!0,hasBilibiliAccountLogin:!1}),m()(this,"handleOnClickLogin",()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickLogin(e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})}))}),m()(this,"handleOnClickRegister",()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickRegister(e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})}))}),m()(this,"handleOnClickMask",()=>{this.setState({loginModalShow:!1})}),m()(this,"handleOnLoginOtherBilibiliAccount",()=>{this.context.handleOnLoginOtherBilibiliAccount().then(()=>{this.setState({hasBilibiliAccountLogin:!0})})}),m()(this,"handleOnClickGoToOverview",()=>{location.href=chrome.runtime.getURL("/html/config.html#/"),this.context.handleOnClickShowLoginModal()})}render(){const{hasLogin:e}=this.context,{children:t}=this.props,{loginModalShow:a}=this.state;return l.a.createElement(U,{open:this.props.show&&a&&!e,onClickMask:this.handleOnClickMask,className:"need-login-mask"},t&&l.a.createElement("p",{className:"introduction"},t),l.a.createElement(V,null,l.a.createElement(v.Button,{className:"primary",onClick:this.handleOnClickGoToOverview},l.a.createElement("div",null,"前往登录"))),l.a.createElement("footer",{className:"description"},l.a.createElement("span",null,l.a.createElement("b",{style:{marginRight:4}},"※"),"点击登录即表示您已同意",l.a.createElement("a",{href:"https://bilibilihelper.com/licence.html",target:"_blank",rel:"noreferrer"},"《使用条款》"),"和",l.a.createElement("a",{href:"https://bilibilihelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"《隐私协议》"))))}}m()(j,"contextType",F),m()(j,"propTypes",{show:S.a.bool,children:S.a.any});const z=p.d.div`

`;class W extends l.a.Component{constructor(e){super(e),m()(this,"state",{removeSelectionLimit:!1}),m()(this,"handleOnToggleRemoveSelectionLimit",()=>{chrome.runtime.sendMessage({target:"removeSelectionLimit",event:"setSetting",on:!this.state.removeSelectionLimit},()=>{this.context.uploadSettings("removeSelectionLimit"),this.setState({removeSelectionLimit:!this.state.removeSelectionLimit})})}),m()(this,"handleOnToggleCvImageDownload",()=>{chrome.runtime.sendMessage({target:"cvImageDownload",event:"setSetting",on:!this.state.cvImageDownload},()=>{this.context.uploadSettings("cvImageDownload"),this.setState({cvImageDownload:!this.state.cvImageDownload})})})}componentDidMount(){chrome.runtime.sendMessage({target:"removeSelectionLimit",event:"getSetting"},({on:e})=>{this.setState({removeSelectionLimit:e})}),chrome.runtime.sendMessage({target:"cvImageDownload",event:"getSetting"},({on:e})=>{this.setState({cvImageDownload:e})})}render(){return l.a.createElement(z,null,l.a.createElement(M,{title:"专栏页面设置"}),l.a.createElement(R,{title:"解除内容选择限制",toolbar:l.a.createElement(x.a,{onClick:this.handleOnToggleRemoveSelectionLimit,on:this.state.removeSelectionLimit}),active:this.state.removeSelectionLimit}),l.a.createElement(R,{title:"图片下载",toolbar:l.a.createElement(x.a,{onClick:this.handleOnToggleCvImageDownload,on:this.state.cvImageDownload}),active:this.state.cvImageDownload}))}}m()(W,"contextType",F);var H=Object(E.f)(W),K=a(80),$=a(67),q=a.n($),Y=a(13),G=a.n(Y),Q=a(151);const J=Object(p.d)(D)`
  .modal {
    overflow: hidden;
  }

  .show-announcement-btn {
    margin-left: 20px;
    vertical-align: bottom;
    font-size: 14px;

    .button-view {
      padding: 0 10px;
    }
  }
`,X=p.d.div`
  margin-top: 24px;

  .report-btn {
    margin: 0 4px;
  }
`,Z=p.d.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: var(--google-grey-50);
  border-radius: 4px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11);

  .avatar-wrapper {
    position: relative;

    .avatar {
      margin-right: 12px;
      width: 52px;
      height: 52px;
      border-radius: 50px;
    }
  }

  .info {
    h4, p {
      margin: 0;
    }

    h4 {
      margin-bottom: 4px;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .expire-date {
      margin-left: 12px;
      border: 1px solid var(--bilibili-pink);
      border-radius: 50px;
      background-color: #fff;

      .bilibili-helper-2-icon-cat-paw {
        width: 20px;
        text-align: center;
        transform: rotate(15deg) scale(0.8) translate(5px, -6px);
        margin: 0 9px 0 1px;
      }

      .bilibili-helper-vip {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        vertical-align: 2px;
        margin-right: 10px;
      }
    }
  }

  .action-btn-group {
    margin: 0 8px 0 auto;

    .button {
      margin-left: 8px;
      font-size: 12px;

      &:first-of-type {
        margin-left: 0;
      }
    }

    .login-btn {
      width: 70px;
    }
  }
`,ee=p.d.div`
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 8px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: var(--google-grey-50);
  cursor: pointer;
  transition: border-color .2s;

  &.selected {
    border-color: var(--bilibili-blue);

    &::after {
      content: '';
      position: absolute;
      right: 6px;
      bottom: 2px;
      display: block;
      width: 4px;
      height: 4px;
      background-color: var(--bilibili-blue);
      box-shadow: 4px 0 0 0 var(--bilibili-blue), 8px 0 0 0 var(--bilibili-blue),0px -4px 0 0 var(--bilibili-blue);
      transform: rotate(-45deg) scale(0.7);
    }
  }

  .cat-type {
    margin: 6px 0 0;
  }
`,te=Object(p.d)(Q.b)`
`,ae=G.a.get("autoSync2Cloud");class ne extends l.a.Component{constructor(e){super(e),m()(this,"state",{loading:!1,isLoginBilibiliAccount:!1,catType:"default",autoSync2Cloud:void 0===ae||ae}),m()(this,"handleOnClickUploadSettings",()=>{this.state.loading||this.setState({loading:!0},()=>{this.context.uploadSettings().then(e=>{e&&u.g.info("配置上传成功"),setTimeout(()=>this.setState({loading:!1}),3e3)})})}),m()(this,"handleOnClickSyncSettings",()=>{this.state.loading||this.setState({loading:!0},()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"downloadSettings"},e=>{e&&u.g.info("配置同步成功"),setTimeout(()=>this.setState({loading:!1}),3e3)})})}),m()(this,"handleOnSelectCatType",e=>{e!==this.state.catType&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",catType:e},()=>{this.context.uploadSettings("cat"),this.setState({catType:e})})}),m()(this,"handleOnToggleHideCatWhenFullWiden",e=>{e!==this.state.showWhenFullWiden&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showWhenFullWiden:e},()=>{this.context.uploadSettings("cat"),this.setState({showWhenFullWiden:e})})}),m()(this,"handleOnToggleShowInInjectPlayer",e=>{e!==this.state.showInInjectPlayer&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showInInjectPlayer:e},()=>{this.context.uploadSettings("cat"),this.setState({showInInjectPlayer:e})})}),m()(this,"handleOnToggleSyncMode",()=>{G.a.set("autoSync2Cloud",!this.state.autoSync2Cloud),this.setState({autoSync2Cloud:!this.state.autoSync2Cloud},()=>{location.reload()})}),m()(this,"handleOnGotoReport",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})})}componentDidMount(){chrome.runtime.sendMessage({target:"cat",event:"getSetting"},e=>{this.setState({catType:e.catType,showWhenFullWiden:e.showWhenFullWiden,showInInjectPlayer:e.showInInjectPlayer})})}render(){const{loading:e,catType:t,showWhenFullWiden:a,showInInjectPlayer:n,autoSync2Cloud:i}=this.state,{hasLogin:o,bilibiliAccount:s,bhAccount:r,downloadingSettings:c,handleOnClickChangePassword:p,handleOnClickShowSignOutModal:h,handleOnClickShowLoginModal:d,handleOnClickShowAnnouncementModal:g,handleOnClickShowPaymentModal:m,handleOnClickShowBindEmailModal:b,isVIP:f,isSuperVIP:C}=this.context;return l.a.createElement(J,null,l.a.createElement(M,{title:l.a.createElement(l.a.Fragment,null,"欢迎使用「哔哩哔哩助手」设置页面",l.a.createElement(u.b,{className:"show-announcement-btn primary",onClick:g},"开放测试公告")),description:"一款非官方的浏览器扩展程序"}),l.a.createElement(L,{title:"账号设置"},l.a.createElement(R,{helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"助手账号会随着B站账号登出而退出"),l.a.createElement("br",null),l.a.createElement("br",null),"设置功能时，助手会自动保存并上传您的设置结果",l.a.createElement("br",null),"所以设置完后就可以立刻关闭设置页面")})},l.a.createElement(Z,null,s&&o?l.a.createElement("div",{className:"avatar-wrapper"},l.a.createElement(u.d,{className:"avatar",url:s.face,duration:0})):l.a.createElement("div",{className:"avatar-wrapper"},l.a.createElement(u.d,{className:"avatar",url:chrome.runtime.getURL("statics/images/bilibili-helper-cat-u-avatar-256.png"),duration:0})),l.a.createElement("div",{className:"info"},l.a.createElement("h4",{className:"username"},s&&o?s.name:"尚未登录",r&&o&&(f()||C())&&r.identities.length>0?l.a.createElement("span",{className:"expire-date"},l.a.createElement(v.Icon,{icon:"cat-paw",size:16}),r.identities.map(e=>{const t=K.b[e.name];return t?l.a.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:q()(e.to).format("YYYY-MM-DD")+" 到期"},t):null}).filter(Boolean)):null),l.a.createElement("p",null,s&&o?c?"正在同步配置":"已启用设置同步与个性化服务":"登录解锁更多功能，并允许跨设备同步您的数据")),l.a.createElement("div",{className:"action-btn-group"},o?l.a.createElement(l.a.Fragment,null):null,o?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.b,{className:"open-payment-modal-btn border",onClick:m},f()||C()?"续订会员":"订阅会员"),r&&!r.email?l.a.createElement(u.b,{className:"change-password-btn border",onClick:b},"绑定邮箱"):null,l.a.createElement(u.b,{className:"change-password-btn border",onClick:p},"修改密码"),l.a.createElement(u.b,{className:"login-btn border",onClick:h},"退出")):l.a.createElement(u.b,{className:"login-btn primary",onClick:d},"登录")))),l.a.createElement(R,{title:"启用自动同步功能",toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnToggleSyncMode,on:i})})),l.a.createElement(L,{title:"助手猫设置"},l.a.createElement(R,{title:"显示样式",columns:9,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"助手猫会在主站视频页面和直播间页面",l.a.createElement("b",null,"网页全屏"),"时会自动半透明化")})},l.a.createElement(ee,{className:"default"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("default")},l.a.createElement(te,{icon:"cat",size:24,className:["handle-button","default"].filter(Boolean).join(" ")}),l.a.createElement("p",{className:"cat-type"},"默认")),l.a.createElement(ee,{className:"pinkCat"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("pinkCat")},l.a.createElement(te,{icon:"cat",size:24,className:["handle-button","pinkCat"].filter(Boolean).join(" ")}),l.a.createElement("p",{className:"cat-type"},"粉猫")),l.a.createElement(ee,{className:"blackCat"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("blackCat")},l.a.createElement(te,{icon:"cat",size:24,className:["handle-button","blackCat"].filter(Boolean).join(" ")}),l.a.createElement("p",{className:"cat-type"},"黑猫")),l.a.createElement(ee,{className:"translucentPink"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentPink")},l.a.createElement(te,{icon:"cat",size:24,className:["handle-button","translucentPink"].filter(Boolean).join(" ")}),l.a.createElement("p",{className:"cat-type"},"透明粉")),l.a.createElement(ee,{className:"translucentWhite"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentWhite")},l.a.createElement(te,{icon:"cat",size:24,className:["handle-button","translucentWhite"].filter(Boolean).join(" ")}),l.a.createElement("p",{className:"cat-type"},"透明粉白"))),l.a.createElement(R,{title:"主站视频网页全屏时显示",active:a,toolbar:l.a.createElement(v.CheckBoxButton,{onClick:()=>this.handleOnToggleHideCatWhenFullWiden(!a),on:a})})),l.a.createElement(X,null,"没睡醒的肉啊正在梦中开发，睡醒后上架。有想要和我说的话就点击",l.a.createElement("a",{className:"report-btn",href:"#",onClick:this.handleOnGotoReport},"这里"),"哦~"))}}m()(ne,"contextType",F);var ie=Object(E.f)(ne),oe=a(35),le=a(47),se=a(148);const re={ArrowUp:"↑",ArrowRight:"→",ArrowDown:"↓",ArrowLeft:"←"},ce={Control:"⌃",Shift:"⇧",Alt:"⌥",Command:"⌘"},pe=e=>{if(""===e)return"空";return e.split("+").map(e=>e.trim()).map(e=>le.d?re[e]||ce[e]||e:re[e]||e).join(" + ")},he=Object(p.d)(D)`
  .range-section {
    .body {
      .current-speed-change-range, .current-jump-change-range {
        display: inline-block;
        width: 100px;
        font-size: 14px;
      }

      .range {
        width: 210px;
        vertical-align: sub;
      }
    }
  }

  .shortcut-item {
    margin-bottom: 12px;
  }

  .shortcut-name {
    font-size: 14px;
    display: inline-block;
    width: 100px;
  }

  .shortcut-value {
    input {
      padding: 2px 4px;
      width: 200px;
      font-family: system-ui;
      text-indent: 2px;

      &.setting {
        color: #999;
      }
    }
  }
`;class de extends l.a.Component{constructor(e){super(e),m()(this,"state",{shortcutOn:!1,shortcuts:[],playSpeedChangeRange:.25,useDefaultSpeedChangeRange:!0,playJumpChangeRange:5,autoWidthType:"default",autoHideDanmu:!1,videoWidenOn:!1,autoQualityOn:!1,autoQuality:112,autoSpeedOn:!1,autoSpeed:1}),m()(this,"setting",!1),m()(this,"settingKey",""),m()(this,"previousSettingKey",""),m()(this,"settingValue",""),m()(this,"previousSettingValue",""),m()(this,"settingDefaultValue",""),m()(this,"previousSettingDefaultValue",""),m()(this,"handleOnClickAutoHideDanmu",()=>{chrome.runtime.sendMessage({target:"videoHideDanmu",event:"setSetting",on:!this.state.autoHideDanmu},()=>{this.context.uploadSettings("videoHideDanmu"),this.setState({autoHideDanmu:!this.state.autoHideDanmu})})}),m()(this,"handleOnClickVideoWiden",()=>{const{videoWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",on:!e},()=>{this.context.uploadSettings("videoWiden"),this.setState({videoWidenOn:!e})})}),m()(this,"handleOnClickWidenType",e=>{const{autoWidthType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",widenType:e},()=>{this.context.uploadSettings("videoWiden"),this.setState({autoWidthType:e})})}),m()(this,"handleOnToggleShortcuts",()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",on:!this.state.shortcutOn},e=>{e&&(this.context.uploadSettings("videoShortcuts"),this.setState({shortcutOn:!this.state.shortcutOn}))})}),m()(this,"handleOnMouseDownShortcutInput",e=>{e.persist();if(!this.context.isVIP())return this.context.sendPaymentMessage();e.target.classList.add("setting"),this.settingKey&&(this.previousSettingKey=this.settingKey,this.previousSettingValue=this.settingValue,this.previousSettingDefaultValue=this.settingDefaultValue),this.settingKey=e.target.dataset.key,this.settingValue=e.target.value,this.settingDefaultValue=e.target.value}),m()(this,"handleOnBlurShortcutInput",e=>{e.persist(),e.target.classList.remove("setting");let t,a,n=!1;this.previousSettingDefaultValue!==this.previousSettingValue&&this.previousSettingKey?(t=this.previousSettingKey,a=this.previousSettingValue,n=!0):this.settingDefaultValue!==this.settingValue&&this.settingKey&&(t=this.settingKey,a=this.settingValue),void 0!==t&&void 0!==a&&chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:t,value:a},()=>{this.previousSettingKey="",this.previousSettingValue="",this.previousSettingDefaultValue="",n||(this.settingKey="",this.settingValue="",this.settingDefaultValue=""),this.context.uploadSettings("videoShortcuts")})}),m()(this,"handleOnKeyDownShortcutInput",e=>{e.persist();const t=Object(se.a)(e.nativeEvent.code,e.key,e.ctrlKey,e.shiftKey,e.metaKey,e.altKey);if(t){const{shortcuts:e}=this.state,a=e.find(([e])=>this.settingKey===e);this.settingDefaultValue=a[1][1],a&&("backspace"===t?(this.settingValue="",a[1][1]=""):a[1][1]!==t&&(this.settingValue=t,a[1][1]=t),this.setState({shortcuts:e}))}}),m()(this,"handleOnSetPlaySpeedRange",e=>{e.persist();const t=+e.target.value;this.setState({playSpeedChangeRange:t})}),m()(this,"handleOnMouseUpPlaySpeedRange",e=>{e.persist();const t=this.context.isVIP();if(this.context.sendPublicBetaMessage(),!t)return this.context.sendPaymentMessage();const a=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playSpeedChangeRange:a},()=>{this.context.uploadSettings("videoShortcuts")})}),m()(this,"handleOnClickUseDefaultPlaySpeedChangeRange",()=>{const e=this.state.useDefaultSpeedChangeRange,t=this.context.isVIP();if(!e&&!t)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",useDefaultSpeedChangeRange:!e},()=>{this.context.uploadSettings("videoShortcuts"),this.setState({useDefaultSpeedChangeRange:!e})})}),m()(this,"handleOnSetPlayJumpChangeRange",e=>{e.persist();const t=+e.target.value;this.setState({playJumpChangeRange:t})}),m()(this,"handleOnMouseUpPlayJumpChangeRange",e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playJumpChangeRange:t},()=>{this.context.uploadSettings("videoShortcuts")})}),m()(this,"handleOnClickAutoQuality",()=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",on:!this.state.autoQualityOn},()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQualityOn:!this.state.autoQualityOn})})}),m()(this,"handleOnClickChangeAutoQuality",e=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",quality:e},()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQuality:e})})}),m()(this,"handleOnClickAutoPlaySpeed",()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",on:!this.state.autoSpeedOn},()=>{this.context.uploadSettings("videoAutoPlaySpeed"),this.setState({autoSpeedOn:!this.state.autoSpeedOn})})}),m()(this,"handleOnSetAutoPlaySpeedRange",e=>{e.persist();const t=+e.target.value;this.setState({autoSpeed:t})}),m()(this,"handleOnMouseUpAutoPlaySpeedRange",e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",speed:t},()=>{this.context.uploadSettings("videoAutoPlaySpeed")})})}componentDidMount(){chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:a})=>{this.setState({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:a})}),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},e=>{this.setState({shortcuts:e})}),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},e=>{this.setState({shortcutOn:e.on})}),chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},e=>{this.setState({videoWidenOn:e.on,autoWidthType:e.widenType})}),chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},e=>{this.setState({autoHideDanmu:e.on})}),chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},e=>{this.setState({autoQualityOn:e.on,autoQuality:e.quality})}),chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},e=>{console.log(e),this.setState({autoSpeedOn:e.on,autoSpeed:e.speed})})}render(){const{shortcuts:e,shortcutOn:t,playSpeedChangeRange:a,useDefaultSpeedChangeRange:n,playJumpChangeRange:i,autoWidthType:o,autoHideDanmu:s,videoWidenOn:r,autoQualityOn:c,autoQuality:p,autoSpeedOn:h,autoSpeed:d}=this.state,{hasLogin:g,bilibiliAccount:m}=this.context,u=this.context.isVIP();return l.a.createElement(he,null,l.a.createElement(M,{title:"主站功能"}),l.a.createElement(L,{title:"视频播放"},l.a.createElement(R,{title:"默认关闭弹幕",active:s,toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnClickAutoHideDanmu,on:s})}),l.a.createElement(R,{className:"range-section",title:"默认播放速度",description:"默认1.0，范围：0.5 ~ 4.0",toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnClickAutoPlaySpeed,on:h})},l.a.createElement("div",null,l.a.createElement("span",{className:"current-speed-change-range"},d),l.a.createElement(v.Range,{value:d,max:4,min:.5,step:.05,onChange:this.handleOnSetAutoPlaySpeedRange,onMouseUp:this.handleOnMouseUpAutoPlaySpeedRange}))),l.a.createElement(R,{title:"默认显示方式 - 自动宽屏",active:r,toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnClickVideoWiden,on:r})},l.a.createElement(v.RadioButtonGroup,{value:r?o:"",data:[{key:"wide",title:"宽屏"},{key:"web",title:"网页全屏"},{key:"full",title:"全屏"}],onClick:this.handleOnClickWidenType})),l.a.createElement(R,{title:"默认画质",active:c,toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnClickAutoQuality,on:c}),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"如果视频不存在所选画质，则会逐个降级适配"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"如果适配到大会员画质但用户不是大会员则会终止适配"))})},l.a.createElement(v.RadioButtonGroup,{value:c?p:112,data:oe.b.map(e=>({key:e,title:oe.a[e]+(e>80?" (大会员)":""),disable:!!(e>80&&m&&m.vip)&&!m.vip.status})),onClick:this.handleOnClickChangeAutoQuality}))),l.a.createElement(L,{title:"快捷键"},l.a.createElement(R,{className:"range-section",title:l.a.createElement(l.a.Fragment,null,l.a.createElement(v.Icon,{icon:"cat-paw",size:16}),"播放速度调整幅度 (0.05-0.5x)"),description:"默认0.25x",hasLogin:g,isVIP:u,active:!n&&u,toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnClickUseDefaultPlaySpeedChangeRange,on:!!u&&!n}),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"通过快捷键调整播放速度上限最大为",l.a.createElement("b",null,"4"))})},l.a.createElement("div",null,l.a.createElement("span",{className:"current-speed-change-range"},g?a:.25),l.a.createElement(v.Range,{value:u?a:.25,max:.5,min:.05,step:.05,onChange:this.handleOnSetPlaySpeedRange,onMouseUp:this.handleOnMouseUpPlaySpeedRange}))),l.a.createElement(R,{className:"range-section",title:l.a.createElement(l.a.Fragment,null,l.a.createElement(v.Icon,{icon:"cat-paw",size:16}),"快进快退幅度 (1-120秒)"),description:"默认5秒",hasLogin:g,isVIP:u,active:u,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"该功能不需要您点击视频播放器就能在整个视频播放页面生效",l.a.createElement("br",null),"但不会影响你编辑和发送文字消息")})},l.a.createElement("div",null,l.a.createElement("span",{className:"current-jump-change-range"},g?i:5),l.a.createElement(v.Range,{value:g?i:5,max:120,min:1,step:1,onChange:this.handleOnSetPlayJumpChangeRange,onMouseUp:this.handleOnMouseUpPlayJumpChangeRange}))),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(v.Icon,{icon:"cat-paw",size:16}),"快捷键列表"),hasLogin:g,active:t,toolbar:l.a.createElement(v.CheckBoxButton,{disable:!g,onClick:this.handleOnToggleShortcuts,on:!!g&&t}),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"按退格键清除设定"),l.a.createElement("br",null),l.a.createElement("br",null),"点击编辑框后按下相关快捷键进行设置，支持组合键",l.a.createElement("br",null),"（即编辑框内容会变成灰色）",l.a.createElement("br",null),l.a.createElement("br",null),"设置完后鼠标点击页面空白处后设置生效",l.a.createElement("br",null),"（即编辑框内容会变回黑色）")})},l.a.createElement("div",{className:"list"},e.map(([e,[t,a]])=>l.a.createElement("div",{key:e,className:"shortcut-item"},l.a.createElement("span",{className:"shortcut-name"},t),l.a.createElement("span",{className:"shortcut-value"},l.a.createElement(v.Input,{readOnly:!0,"data-key":e,className:"shortcut",onKeyDown:this.handleOnKeyDownShortcutInput,onBlur:this.handleOnBlurShortcutInput,onMouseDown:this.handleOnMouseDownShortcutInput,value:pe(a)}))))))))}}m()(de,"contextType",F);var ge=Object(E.f)(de),me=a(11),ue=a.n(me);const be=p.d.div`

`;class fe extends l.a.Component{constructor(e){super(e),m()(this,"handleOnToggleAutoSignIn",()=>{chrome.runtime.sendMessage({target:"autoSignIn",event:"setSetting",on:!this.state.autoSignIn},()=>{this.context.uploadSettings("autoSignIn"),this.setState({autoSignIn:!this.state.autoSignIn})})}),m()(this,"handleOnToggleAutoSignInNotification",()=>{chrome.runtime.sendMessage({target:"autoSignIn",event:"setSetting",pushNotification:!this.state.pushAutoSignInNotification},()=>{this.context.uploadSettings("autoSignIn"),this.setState({pushAutoSignInNotification:!this.state.pushAutoSignInNotification})})}),m()(this,"handleOnToggleSilver2Coin",()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",on:!this.state.silver2coin},()=>{this.context.uploadSettings("silver2coin"),this.setState({silver2coin:!this.state.silver2coin})})}),m()(this,"handleOnToggleSilver2CoinNotification",()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",pushNotification:!this.state.pushSilver2CoinNotification},()=>{this.context.uploadSettings("silver2coin"),this.setState({pushSilver2CoinNotification:!this.state.pushSilver2CoinNotification})})}),m()(this,"handleOnToggleChatFilterItem",(e,t)=>{const a=this.state.chatFilterOptions;a[e]=t,chrome.runtime.sendMessage({target:"chatFilter",event:"setSetting",options:a},()=>{this.context.uploadSettings("chatFilter"),this.setState({chatFilterOptions:a})})}),this.state={autoSignIn:!0,pushAutoSignInNotification:!0,silver2coin:!0,pushSilver2CoinNotification:!0,chatFilter:!0,chatFilterOptions:{}}}componentDidMount(){chrome.runtime.sendMessage({target:"autoSignIn",event:"getSetting"},({on:e,pushNotification:t})=>{this.setState({autoSignIn:e,pushAutoSignInNotification:t})}),chrome.runtime.sendMessage({target:"silver2coin",event:"getSetting"},({on:e,pushNotification:t})=>{this.setState({silver2coin:e,pushSilver2CoinNotification:t})}),chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},({on:e,options:t})=>{this.setState({chatFilter:e,chatFilterOptions:t})})}render(){const{hasLogin:e,bilibiliAccount:t}=this.context;return l.a.createElement(be,null,l.a.createElement(M,{title:"直播区功能设置"}),l.a.createElement(R,{title:"自动签到",toolbar:l.a.createElement(v.CheckBoxButton,{disable:!t,onClick:this.handleOnToggleAutoSignIn,on:this.state.autoSignIn}),active:this.state.autoSignIn&&!!t,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"该功能每天都会检查，每天签到一次~")})},l.a.createElement(v.ListItem,{title:"推送通知",onClick:this.handleOnToggleAutoSignInNotification,operation:l.a.createElement(v.CheckBoxButton,{on:this.state.pushAutoSignInNotification})})),l.a.createElement(R,{title:"自动银瓜子兑换硬币",toolbar:l.a.createElement(v.CheckBoxButton,{disable:!t,onClick:this.handleOnToggleSilver2Coin,on:this.state.silver2coin}),active:this.state.silver2coin&&!!t},l.a.createElement(v.ListItem,{title:"推送通知",onClick:this.handleOnToggleSilver2CoinNotification,operation:l.a.createElement(v.CheckBoxButton,{on:this.state.pushSilver2CoinNotification})})),l.a.createElement(R,{title:"去污粉 - 聊天信息过滤",description:"全局设置为默认设置。进入每个直播间后可以再单独进行设置，单独设置会覆盖默认设置",helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"用户等级"),"过滤项仅在",l.a.createElement("b",null,"直播回看"),"页面有效",l.a.createElement("br",null))})},l.a.createElement(v.CheckBoxGroup,{data:ue()(this.state.chatFilterOptions).map(e=>({key:e,title:Object(C.__)("chatFilter_options_"+e),on:this.state.chatFilterOptions[e]})),onClick:this.handleOnToggleChatFilterItem})))}}m()(fe,"contextType",F);var ve=Object(E.f)(fe),Ce=a(18),ye=a.n(Ce),we=a(16),Se=a.n(we),Ee=a(30),xe=a.n(Ee),ke=a(31),Me=a.n(ke),Oe=a(40),Le=a.n(Oe),Pe=a(86),Ae=a.n(Pe),Fe=a(76),Ie=a(48);const Be=p.d.div.attrs({className:"account-block"})`
  display: flex;
  margin-bottom: 8px;
  padding: 1px 1px 8px;
  width: 100%;
  border-bottom: 1px solid #f7f7f7;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 2px #b9b9b9;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    padding: 2px 0;
    max-width: 350px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }

      .add-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--bilibili-blue);
        color: var(--google-grey-50);
      }

      .cancel-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--google-grey-400);
        color: var(--google-grey-50);
      }
    }

    p {
      margin: 0 0 4px 0;
      color: #585858;
      overflow: hidden;

      span, a {
        margin-right: 12px
      }
    }

    i {
      font-style: normal;
    }
  }

  .action-box {
    flex-shrink: 0;

    .button {
      margin-top: 15.5px;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }
`,Ne=e=>{const{added:t,mid:a,uname:n,face:i,level:o,videos:s,fans:r,sign:c,onOpenUserSpace:p,onClickAttentionBtn:h}=e,d=i.match("noface.gif$")?i:i+"@140w_140h.webp";return l.a.createElement(Be,null,l.a.createElement("div",{className:"avatar",onClick:()=>p(a)},l.a.createElement(u.d,{url:d.replace(/^(http:\/\/|\/\/)/,"https://"),sign:n})),l.a.createElement("div",{className:"info"},l.a.createElement("h6",null,l.a.createElement("a",{onClick:()=>p(a)},n),o?l.a.createElement("span",{className:"level lv"+o},"Lv.",o):null,l.a.createElement(u.b,{className:t?"cancel-btn":"add-btn",onClick:()=>h(a)},t?"取消":"添加")),(s||r)&&l.a.createElement("p",null,s&&l.a.createElement("span",null,"稿件数：",l.a.createElement("i",null,s)),r&&l.a.createElement("span",null,"粉丝数：",l.a.createElement("i",null,r))),c?l.a.createElement("p",{className:"sign",title:c},c):null))},Re=Object(p.d)(u.h)`
  width: 500px;
`,De=p.d.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }

    .has-more-block {
      height: 50px;
    }
  }
`;class Te extends l.a.Component{constructor(e){super(e),m()(this,"handleOnCreateUserSpaceTab",e=>{this.createTab("https://space.bilibili.com/"+e)}),m()(this,"handleOnClickOpenModal",()=>{this.setState({modalOn:!0})}),m()(this,"handleOnClickCloseModal",()=>{this.setState({modalOn:!1})}),m()(this,"handleOnUserInputChange",e=>{e.persist(),this._onChange||(this._onChange=Ae()(e=>{const t=e.target.value.trim();t&&this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},()=>{this.handleOnSearchUser(t,this.state.pn)})},700)),this._onChange(e)}),m()(this,"handleOnSearchUser",(e,t=1)=>{e&&new i.a(e=>{this.searching?this.cancelSearchRequest().then(t=>e(!t)):e(!1)}).then(a=>{a||(this.searching=!0,this.sendSearchRequest(e,t).then(()=>{this.searchResultListRef.current.scrollTo(0,0)}))})}),m()(this,"sendSearchRequest",async(e,t=1)=>{if(!e)return;const a={search_type:"bili_user",page:t,order:0,order_sort:0,user_type:0,keyword:e},n=Object(Ie.e)("https://api.bilibili.com/x/web-interface/search/type",a);return this.fetchPassword=Le()(),new i.a(e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:n,options:{contentType:"json",controlPassword:this.fetchPassword}},a=>{if(this.searching=!1,a&&a.data&&a.data.result&&a.data.result.length>0){const{searchResult:n}=this.state;n.push(...a.data.result),this.setState({searchResult:n,resultCount:a.data.numResults,hasMore:t<a.data.numPages,pn:t+1}),e()}else e()})})}),m()(this,"cancelSearchRequest",()=>new i.a(e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},t=>{e(t)})})),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1},this.searchResultListRef=l.a.createRef(),this.bottomObserverRef=l.a.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.keyword,this.state.pn)},{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{modalOn:e=!1,title:t,addedUidList:a,onClickAccountBtn:n,onClickClose:i}=this.props,{searchResult:o,resultCount:s}=this.state;return l.a.createElement(Re,{open:e,title:t,buttons:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.b,{onClick:i},"关闭")),onClickMask:i},l.a.createElement(De,null,l.a.createElement("div",{className:"search-bar"},l.a.createElement(Fe.a,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"输入用户名进行搜索"}),l.a.createElement(u.b,null,"搜索")),l.a.createElement("div",{className:"result-box"},l.a.createElement("p",null,"搜索结果",s?l.a.createElement("span",null," ~ 共找到 ",1e3===s?"1000+":s," 个用户"):null),l.a.createElement("div",{className:"list",ref:this.searchResultListRef},o.length>0?o.map(e=>l.a.createElement(Ne,ye()({key:e.mid},e,{face:e.upic,sign:e.usign,added:a.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:n}))):"没有数据，输入关键词开始搜索",l.a.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}Te.propTypes={modalOn:S.a.bool,title:S.a.string,addedUidList:S.a.object,onClickAccountBtn:S.a.func,onClickClose:S.a.func};const _e=Object(p.d)(u.h)`
  width: 500px;
`,Ue=p.d.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    position: relative;
    min-height: 20px;

    .list {
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
      transform: scale(1);
    }

    .has-more-block {
      height: 50px;
    }
  }
`;class Ve extends l.a.Component{constructor(e){super(e),m()(this,"initialized",!1),m()(this,"handleOnCreateUserSpaceTab",e=>{this.createTab("https://space.bilibili.com/"+e)}),m()(this,"handleOnClickOpenModal",()=>{this.setState({modalOn:!0})}),m()(this,"handleOnClickCloseModal",()=>{this.setState({modalOn:!1})}),m()(this,"handleOnUserInputChange",e=>{e.persist(),this._onChange||(this._onChange=Ae()(e=>{const t=e.target.value.trim();t?this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},()=>{this.handleOnSearchUser(this.state.pn)}):this.setState({keyword:"",pn:1,hasMore:!1},()=>{this.handleOnSearchUser(this.state.pn)})},700)),this._onChange(e)}),m()(this,"handleOnSearchUser",(e=1)=>{new i.a(e=>{this.searching?this.cancelSearchRequest().then(t=>e(!t)):e(!1)}).then(t=>{t||(this.searching=!0,this.sendSearchRequest(e).then(()=>{this.searchResultListRef.current.scrollTo(0,0)}))})}),m()(this,"sendSearchRequest",async(e=1,t=20)=>{let a="https://api.bilibili.com/x/relation/followings";const n={vmid:this.props.bilibiliAccount.uid,pn:e,ps:t,order:"desc",order_type:"attention"};this.state.keyword&&(a="https://api.bilibili.com/x/relation/followings/search",n.name=this.state.keyword);const o=Object(Ie.e)(a,n);return this.fetchPassword=Le()(),new i.a(a=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:o,options:{contentType:"json",controlPassword:this.fetchPassword}},n=>{if(this.searching=!1,n&&n.data&&n.data.list){if(n.data.list.length>0){let{searchResult:a}=this.state;1===e?a=n.data.list:a.push(...n.data.list),this.setState({searchResult:a,resultCount:n.data.total,hasMore:n.data.list.length===t,pn:e+1})}else this.setState({hasMore:!1});a()}else a()})})}),m()(this,"cancelSearchRequest",()=>new i.a(e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},t=>{e(t)})})),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1,listType:"all"},this.searchResultListRef=l.a.createRef(),this.bottomObserverRef=l.a.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore&&this.props.modalOn&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.pn)},{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(){!this.initialized&&this.props.bilibiliAccount&&this.props.modalOn&&(this.initialized=!0,this.sendSearchRequest(1))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{modalOn:e=!1,title:t,addedUidList:a,onClickAccountBtn:n,onClickClose:i}=this.props,{searchResult:o,resultCount:s,keyword:r}=this.state;return l.a.createElement(_e,{open:e,title:t,buttons:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.b,{onClick:i},"关闭")),onClickMask:i},l.a.createElement(Ue,null,l.a.createElement("div",{className:"search-bar"},l.a.createElement(Fe.a,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"输入用户名进行搜索"}),l.a.createElement(u.b,{onClick:()=>this.handleOnSearchUser(this.state.pn)},"搜索")),l.a.createElement("div",{className:"result-box"},l.a.createElement("p",null,"搜索结果",r&&s?l.a.createElement("span",null," ~ 共找到 ",1e3===s?"1000+":s," 个用户"):null),l.a.createElement("div",{className:"list",ref:this.searchResultListRef},e&&o.length>0?o.map(e=>l.a.createElement(Ne,ye()({key:e.mid},e,{added:a.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:n}))):"没有数据，输入关键词开始搜索",l.a.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}Ve.propTypes={modalOn:S.a.bool,title:S.a.string,addedUidList:S.a.object,onClickAccountBtn:S.a.func,onClickClose:S.a.func,bilibiliAccount:S.a.any};var je=a(544),ze=a(545),We=a(557),He=a(127);const Ke=Object(p.d)(D)`
  overflow: auto;

  .add-btn {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  .follow {
    margin-right: 8px;
  }
`,$e=(Object(p.d)(u.h)`
  width: 500px;
`,p.d.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }
  }
`,p.d.div`
  display: flex;
  margin-bottom: 4px;
  padding: 8px 4px 8px 8px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex: 1;

    h6 {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;
      margin: 0;

      a {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }
    }

    /*p {
      margin-top: 2px;
      margin-bottom: 0;
      color: #999;
      display: -webkit-box;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }*/

    .button {
      margin-left: auto;
      height: 20px;
      font-size: 12px;
      background-color: var(--google-grey-400);
      color: var(--google-grey-50);
    }
  }

  .auto-like-coin-collect-box {
    display: flex;
    margin-top: 6px;

    .config-item {
      display: flex;
      align-items: center;
      margin-right: 30px;
      line-height: 12px;
    }

    input[type="checkbox"] {
      vertical-align: middle;
      margin: 0 4px 0 0;
    }

    label {
      vertical-align: middle;
    }

    .coin-number {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      border: 0;
    }

    .collection-id {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      border: 0;
      font-size: 12px;
    }
  }
`),qe=function({index:e,name:t,uid:a,level:n,face:i,sign:o,onClickUserName:s,onClickAttentionBtn:r,onDragMove:c,onDrop:p,autoLikeCoinCollectConfig:h,handleOnClickAutoLikeCoinCollect:d,collectionList:g}){const m=l.a.useRef(null),[,b]=Object(je.a)({accept:"account-block",hover(t,a){if(!m.current)return;const n=t.index,i=e;if(n===i)return;const o=m.current.getBoundingClientRect(),l=(o.bottom-o.top)/2,s=a.getClientOffset().y-o.top;n<i&&s<l||n>i&&s>l||(c(n,i),t.index=i)}}),[{isDragging:f},v]=Object(ze.a)({item:{type:"account-block",id:a,index:e},collect:e=>({isDragging:e.isDragging()}),end(){p()}}),C=l.a.useCallback(()=>{s(a)},[a]),y=l.a.useCallback(()=>{r(a)},[a]),w=l.a.useCallback(e=>{e.stopPropagation();const t=+e.target.value;t>=1&&t<=2&&d(a,"coinNumber",t)},[d,h]),S=l.a.useCallback(e=>{let t;e.stopPropagation(),h&&h.collectionId?t=h.collectionId:g&&(t=g[0].id),console.log(e.target.checked,t),d(a,"collect",e.target.checked,t)},[d,h,g]),E=l.a.useCallback(e=>{e.stopPropagation();const t=e.target.value;d(a,"collectionId",t)},[d,h,g]);return v(b(m)),l.a.createElement($e,{key:a,ref:m,className:"user",style:{opacity:f?0:1}},l.a.createElement("div",{className:"avatar",onClick:C},l.a.createElement(u.d,{url:i})),l.a.createElement("div",{className:"info"},l.a.createElement("h6",null,l.a.createElement("a",{onClick:C},t),l.a.createElement("span",{className:"level lv"+n},"Lv.",n),l.a.createElement(u.b,{onClick:y},"取消特关")),l.a.createElement("div",{className:"auto-like-coin-collect-box"},l.a.createElement("div",{className:["config-item","like",h&&h.like?"active":""].join(" ")},l.a.createElement("input",{id:a+"like",type:"checkbox",checked:!!h&&!!h.like,onChange:()=>d(a,"like",!(h&&h.like))}),l.a.createElement("label",{htmlFor:a+"like"},"点赞")),l.a.createElement("div",{className:["config-item","coin",h&&h.coin?"active":""].join(" ")},l.a.createElement("div",null,l.a.createElement("input",{id:a+"coin",type:"checkbox",checked:!!h&&!!h.coin,onChange:()=>d(a,"coin",!(h&&h.coin),h&&h.coinNumber||2)}),l.a.createElement("label",{htmlFor:a+"coin"},"投币")),l.a.createElement("input",{className:"coin-number",type:"number",max:2,min:1,step:1,value:h&&h.coinNumber||2,onChange:w}),"枚"),l.a.createElement("div",{className:["config-item","collect",h&&h.collect?"active":""].join(" ")},l.a.createElement("input",{id:a+"collect",type:"checkbox",checked:!!h&&!!h.collect,onChange:S}),l.a.createElement("label",{htmlFor:a+"collect"},"收藏")," 至",l.a.createElement("select",{className:"collection-id",onChange:E,value:h?h.collectionId:g?g[0]:null},g.length>0?g.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.title)):l.a.createElement("option",null,"没有数据"))))))};qe.propTypes={index:S.a.number,uid:S.a.number,level:S.a.number,name:S.a.string,face:S.a.string,sign:S.a.string,onClickUserName:S.a.func,onClickAttentionBtn:S.a.func,onDragMove:S.a.func,onDrop:S.a.func,handleOnClickAutoLikeCoinCollect:S.a.func,autoLikeCoinCollectConfig:S.a.any,collectionList:S.a.array};class Ye extends l.a.Component{constructor(e){super(e),m()(this,"state",{uidList:new Me.a,attentionList:[],searchModalOn:!1,followModalOn:!1,searching:!1,searchResult:{},collectionList:[],autoLikeCoinCollectConfigMap:new xe.a}),m()(this,"searchResultListRef",l.a.createRef()),m()(this,"fetchPassword",void 0),m()(this,"searching",!1),m()(this,"updateAccountList",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},(e=[])=>{this.setState({attentionList:e,uidList:new Me.a(e.map(({uid:e})=>e))})}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},e=>{e&&this.setState({collectionList:e})})}),m()(this,"handleOnClickOpenSearchModal",()=>{const{uidList:e}=this.state;if(20===e.size)return u.g.info("添加人数已达到上限");this.setState({searchModalOn:!0})}),m()(this,"handleOnClickCloseSearchModal",()=>{this.setState({searchModalOn:!1})}),m()(this,"handleOnClickOpenFollowModal",()=>{const{uidList:e}=this.state;if(20===e.size)return u.g.info("添加人数已达到上限");this.setState({followModalOn:!0})}),m()(this,"handleOnClickCloseFollowModal",()=>{this.setState({followModalOn:!1})}),m()(this,"handleOnCreateUserSpaceTab",e=>{this.createTab("https://space.bilibili.com/"+e)}),m()(this,"handleOnAddSpecialAttention",e=>{const{uidList:t}=this.state;if(20===t.size)return u.g.info("添加人数已达到上限");chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:e},t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:a}=this.state;a.add(e),this.setState({uidList:a},()=>{const{attentionList:e}=this.state;e.push(t),this.setState({attentionList:e})})}})}),m()(this,"handleOnRemoveSpecialAttention",e=>{chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:e},t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:t}=this.state;t.delete(e),this.setState({uidList:t},()=>{const{attentionList:t}=this.state,a=t.findIndex(t=>t.uid===e);a>=0&&(t.splice(a,1),this.setState({attentionList:t}))})}}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"removeUserConfig",uid:e},t=>{if(t){this.context.uploadSettings("autoLikeCoinCollect");const{autoLikeCoinCollectConfigMap:t}=this.state;t.has(e)&&(t.delete(e),this.setState({autoLikeCoinCollectConfigMap:t}))}})}),m()(this,"handleOnClickAttentionBtn",e=>{this.state.uidList.has(e)?this.handleOnRemoveSpecialAttention(e):this.handleOnAddSpecialAttention(e)}),m()(this,"handleOnMoveAccount",(e,t)=>{const{uidList:a,attentionList:n}=this.state,i=Se()(a),o=i[e];i.splice(e,1),i.splice(t,0,o);const l=n[e];n.splice(e,1),n.splice(t,0,l),this.setState({uidList:new Me.a(i),attentionList:n})}),m()(this,"handleOnDropAccount",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"setSpecialAttentionList",uidList:this.state.uidList},()=>{this.context.uploadSettings("specialAttention")})}),m()(this,"updateAutoLikeCoinCollectConfigMap",(e,t)=>{const{autoLikeCoinCollectConfigMap:a}=this.state;a.set(e,t),this.setState({autoLikeCoinCollectConfigMap:a},()=>{this.context.uploadSettings("autoLikeCoinCollect")})}),m()(this,"handleOnClickAutoLikeCoinCollect",(e,t,a,n)=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"setFeatureConfig",uid:e,type:t,value:a,extraValue:n},n=>{if(n){const{autoLikeCoinCollectConfigMap:n}=this.state;let i=n.get(e);i?a?i[t]=a:(delete i[t],"coin"===t?delete i.coinNumber:"collect"===t&&delete i.collectionId):i={[t]:a},this.updateAutoLikeCoinCollectConfigMap(e,i)}})})}componentDidMount(){this.updateAccountList(),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},e=>{e&&this.setState({autoLikeCoinCollectConfigMap:new xe.a(e)})})}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{uidList:e,searchModalOn:t,followModalOn:a,attentionList:n,autoLikeCoinCollectConfigMap:i,collectionList:o}=this.state,{hasLogin:s,bilibiliAccount:r}=this.context;return l.a.createElement(Ke,null,l.a.createElement(M,{title:"特别关注设置",description:"哔哩哔哩助手会主动推送在特别关注列表中用户的动态内容，也用于在扩展窗口中快捷浏览"}),l.a.createElement(L,{title:"特别关注列表管理",description:"特别关注的UP主需要同时在b站关注才能收到推送哦"},l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,"已添加列表",n&&n.length>0&&l.a.createElement("span",null,"(",n.length,"/20)")),description:"拖动列表项目可以排序",hasLogin:s,active:s,toolbar:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.b,{disabled:n.length>=20||!s,disableEvent:!1,className:"add-btn follow",onClick:this.handleOnClickOpenFollowModal},"从关注列表添加"),l.a.createElement(u.b,{disabled:n.length>=20||!s,disableEvent:!1,className:"add-btn search",onClick:this.handleOnClickOpenSearchModal},"搜索添加")),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"需登录",l.a.createElement(u.c,{size:16,icon:"bilibili"}),"账号",l.a.createElement("br",null),"和",l.a.createElement(u.c,{size:16,icon:"bilibilihelper"}),"账号")})},l.a.createElement(We.a,{backend:He.a},l.a.createElement("div",{className:"added-list"},n.map((e,t)=>l.a.createElement(qe,ye()({key:e.uid},e,{index:t,onClickUserName:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:this.handleOnClickAttentionBtn,onDragMove:this.handleOnMoveAccount,onDrop:this.handleOnDropAccount,autoLikeCoinCollectConfig:i.get(e.uid),handleOnClickAutoLikeCoinCollect:this.handleOnClickAutoLikeCoinCollect,collectionList:o}))),0===n.length?"没有内容":null)))),l.a.createElement(Te,{modalOn:t,title:"搜索添加「助手的特别关注」",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseSearchModal}),l.a.createElement(Ve,{modalOn:a,title:"从「已关注列表」添加「助手的特别关注」",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseFollowModal,bilibiliAccount:this.context.bilibiliAccount}),l.a.createElement(j,{show:!s||!r},"该页面功能需要您同时登录",l.a.createElement(u.c,{icon:"bilibili",size:16}),"账号和",l.a.createElement(u.c,{icon:"bilibilihelper",size:16}),"账号"))}}m()(Ye,"contextType",F);var Ge=Object(E.f)(Ye),Qe=a(28),Je=a.n(Qe),Xe=a(29),Ze=a.n(Xe),et=a(15),tt=a.n(et),at=a(14),nt=a.n(at),it=a(12),ot=a.n(it),lt=a(95),st=a.n(lt);function rt(e,t){var a=ue()(e);if(ot.a){var n=ot()(e);t&&(n=n.filter((function(t){return nt()(e,t).enumerable}))),a.push.apply(a,n)}return a}function ct(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):tt.a?Ze()(e,tt()(a)):rt(Object(a)).forEach((function(t){Je()(e,t,nt()(a,t))}))}return e}const pt=p.d.div`
  .list-wrapper {
    //max-width: 700px;
    margin-bottom: 22px;

    .add-btn {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    .list {
      .list-item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 28px;

        & > span {

          &:first-of-type {
            width: 80px;
            flex-shrink: 0;
          }

          &:nth-child(2) {
            width: 70px;
          }
        }

        .url {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex-grow: 1;
        }

        .action-box {
          display: flex;
          margin-left: 12px;

          .button {
            margin-right: 12px;

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  .menu-editing-modal {
    width: 500px;

    .modal-body {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 16px;

        &:last-of-type {
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
          margin-bottom: 2px;
        }

        input {
          width: calc(100% - 22px);
          padding: 6px 10px;
          outline: none;
        }
      }
    }

    .btn-group {
      .button {
        margin-left: 12px;

        &:first-of-type {
          margin-left: 0;
        }
      }

      .confirm {
        background-color: var(--bilibili-blue);
        color: var(--bilibili-gray);
      }
    }
  }

  .range-section {
    .body {
      .resize-change-range {
        display: inline-block;
        width: 100px;
        font-size: 14px;
      }

      .range {
        width: 210px;
        vertical-align: sub;
      }
    }
  }
`,ht=function(e){let{index:t,children:a,onDragMove:n,onDrop:i}=e,o=A()(e,["index","children","onDragMove","onDrop"]);const s=l.a.useRef(null),[,r]=Object(je.a)({accept:"sortable-list-item",hover(e,a){if(!s.current)return;const i=e.index,o=t;if(i===o)return;const l=s.current.getBoundingClientRect(),r=(l.bottom-l.top)/2,c=a.getClientOffset().y-l.top;i<o&&c<r||i>o&&c>r||(n(i,o),e.index=o)}}),[{isDragging:c},p]=Object(ze.a)({item:{type:"sortable-list-item",index:t},collect:e=>({isDragging:e.isDragging()}),end(){i()}});return p(r(s)),l.a.createElement("div",ye()({className:"sortable-list-item",ref:s,style:{opacity:c?0:1}},o),a)};ht.propTypes={index:S.a.number,info:S.a.object,onDragMove:S.a.func,onDrop:S.a.func,children:S.a.any};const dt=function({index:e,info:t,onEditMenu:a,onDeleteMenu:n,onDragMove:i,onDrop:o}){const s=l.a.useCallback(()=>{a(ct({index:e},t))},[t]),r=l.a.useCallback(()=>{n(e)},[e]);return l.a.createElement(ht,{className:"list-item",index:e,onDragMove:i,onDrop:o},l.a.createElement("span",null,t.title),l.a.createElement("span",{className:"url"},t.url),l.a.createElement("span",{className:"action-box"},l.a.createElement(u.b,{onClick:s},"编辑"),l.a.createElement(u.b,{onClick:r},"删除")))};dt.propTypes={index:S.a.number,info:S.a.object,onEditMenu:S.a.func,onDeleteMenu:S.a.func,onDragMove:S.a.func,onDrop:S.a.func};class gt extends l.a.Component{constructor(e){super(e),m()(this,"state",{sectionShow:[],resizeRate:1,videoOpenMethod:"direct",homeContentType:"default",homeShowCarousel:!0,homeOpenMethod:"recentVideo",homeShowLiveBar:!0,liveOpenMethod:"direct",options:[],custom:[],openEditModal:!1,modalState:"add",editingInfo:{index:"",title:"",url:""},columns:1,videoCardType:"old"}),m()(this,"systemMenuOrderChanged",!1),m()(this,"customMenuOrderChanged",!1),m()(this,"menuInputCompositionStart",!1),m()(this,"menuTitleInputRef",l.a.createRef()),m()(this,"menuUrlInputRef",l.a.createRef()),m()(this,"handleOnSetResizeRate",e=>{e.persist();const t=+e.target.value;this.setState({resizeRate:t},()=>{chrome.runtime.sendMessage({target:"popup",event:"setSetting",resizeRate:t},()=>{this.context.uploadSettings("popup")})})}),m()(this,"handleOnClickSectionShow",(e,t)=>{const{sectionShow:a}=this.state,n=[...a];a.find(({key:t})=>t===e).on=t,chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:n},e=>{e&&(this.context.uploadSettings("popupMain"),this.setState({sectionShow:n}))})}),m()(this,"handleOnMouseUpResizeRate",e=>{e.persist()}),m()(this,"handleOnSetColumns",e=>{const{columns:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",columns:+e},()=>{this.context.uploadSettings("popupMain"),this.setState({columns:+e})})}),m()(this,"handleOnSetVideoCardType",e=>{const{videoCardType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoCardType:e},()=>{this.context.uploadSettings("popupMain"),this.setState({videoCardType:e})})}),m()(this,"handleOnSetVideoOpenMethod",e=>{this.state.videoOpenMethod!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoOpenMethod:e},()=>{this.context.uploadSettings("popupMain"),this.setState({videoOpenMethod:e})})}),m()(this,"handleOnSetHomeShowLiveBar",()=>{chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",showLiveBar:!this.state.homeShowLiveBar},()=>{this.context.uploadSettings("mainHome"),this.setState({homeShowLiveBar:!this.state.homeShowLiveBar})})}),m()(this,"updateMenuList",()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"getMenuList"},e=>{e&&this.setState(e)})}),m()(this,"handleOnClickSystemMenu",(e,t)=>{console.error(e,t),chrome.runtime.sendMessage({target:"popupMenu",event:"setSystemMenuState",key:e,on:t},e=>{this.context.uploadSettings("popupMenu"),e&&this.updateMenuList()})}),m()(this,"handleOnCreateNewMenu",()=>{const{custom:e}=this.state,t=this.context.isVIP();return this.context.sendPublicBetaMessage(),st()(e).length>=10&&st()(e).length<=10&&!t?this.context.handleOnClickShowPaymentModal():st()(e).length>=10?u.g.info("自定义导航最多只能加10条，未来会开放更高上限"):void this.setState({openEditModal:!0,modalState:"add",editingInfo:{index:e.length,title:"",url:""}})}),m()(this,"handleOnEditMenu",({index:e,title:t,url:a})=>{this.setState({openEditModal:!0,modalState:"edit",editingInfo:{index:e,title:t,url:a}})}),m()(this,"handleOnCloseModal",()=>{this.setState({openEditModal:!1})}),m()(this,"handOnConfirmUpdateMenu",()=>{const{editingInfo:e,modalState:t,custom:a}=this.state;e.title&&e.url&&new i.a((n,i)=>{if("add"===t){const t=a.find(({title:t})=>t===e.title);t&&0!==t.length?i():n()}else n()}).then(()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"updateCustomMenu",index:e.index,title:e.title,url:e.url},e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList(),this.setState({openEditModal:!1}))})})}),m()(this,"handleOnDeleteCustomMenu",e=>{chrome.runtime.sendMessage({target:"popupMenu",event:"deleteCustomMenu",index:e},e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList())})}),m()(this,"onChangeTitle",e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.title=e.target.value:t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})}),m()(this,"onTitleCompositionStart",()=>{this.menuInputCompositionStart=!0}),m()(this,"onTitleCompositionEnd",e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})}),m()(this,"onChangeURL",e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.url=e.target.value:t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})}),m()(this,"onURLCompositionStart",()=>{this.menuInputCompositionStart=!0}),m()(this,"onURLCompositionEnd",e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})}),m()(this,"onDragMoveSystemMenu",(e,t)=>{if(e!==t){this.systemMenuOrderChanged=!0;const{options:a}=this.state;console.log(a);const n=a[e];a.splice(e,1),a.splice(t,0,n),this.setState({options:a})}}),m()(this,"onDropSystemMenu",()=>{this.systemMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setOptionsMenuList",list:this.state.options},()=>{this.systemMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")})}),m()(this,"onDragMoveCustomMenu",(e,t)=>{if(e!==t){this.customMenuOrderChanged=!0;const{custom:a}=this.state,n=a[e];a.splice(e,1),a.splice(t,0,n),this.setState({custom:a})}}),m()(this,"onDropCustomMenu",()=>{this.customMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setCustomMenuList",list:this.state.custom},()=>{this.customMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")})})}componentDidMount(){chrome.runtime.sendMessage({target:"popup",event:"getSetting"},({resizeRate:e})=>{this.setState({resizeRate:e})}),chrome.runtime.sendMessage({target:"mainHome",event:"getSetting"},({contentType:e,openMethod:t,showCarousel:a,showLiveBar:n})=>{this.setState({homeContentType:e,homeOpenMethod:t,homeShowCarousel:a,homeShowLiveBar:n})}),chrome.runtime.sendMessage({target:"mainLive",event:"getSetting"},({openMethod:e})=>{this.setState({liveOpenMethod:e})}),chrome.runtime.sendMessage({target:"popupMain",event:"getSetting"},({columns:e,videoCardType:t,sectionShow:a,videoOpenMethod:n})=>{this.setState({columns:e,videoCardType:t,sectionShow:a,videoOpenMethod:n})}),this.updateMenuList()}render(){const{resizeRate:e,sectionShow:t,videoOpenMethod:a,homeOpenMethod:n,homeContentType:i,homeShowLiveBar:o,homeShowCarousel:s,liveOpenMethod:r,options:c,custom:p,openEditModal:h,modalState:d,editingInfo:g,columns:m,videoCardType:b}=this.state,{hasLogin:f}=this.context,v=this.context.isVIP(),y=t.reduce((e,{on:t})=>e+=t?1:0,0);return l.a.createElement(pt,null,l.a.createElement(M,{title:"应用程序弹窗设置"}),l.a.createElement(L,{title:"扩展弹窗通用设置"},l.a.createElement(R,{className:"range-section",title:"窗口缩放比例调节",description:"点击后可以左右方向键调节，默认1x",helperArea:l.a.createElement(_,{description:"将扩展弹窗调整到喜欢的大小"})},l.a.createElement("div",null,l.a.createElement("span",{className:"resize-change-range"},e,"x"),l.a.createElement(u.i,{value:e,max:3,min:.1,step:.02,onChange:this.handleOnSetResizeRate})))),l.a.createElement(L,{title:"板块通用设置"},l.a.createElement(R,{title:"内容展示列数"},l.a.createElement(x.e,{value:m,data:[{key:1,title:"一列布局"},{key:2,title:"两列布局"}],onClick:this.handleOnSetColumns})),l.a.createElement(R,{title:"视频卡片风格"},l.a.createElement(x.e,{value:b,data:[{key:"simple",title:"精简的视频列表，只有标题、UP主和较小的封面"},{key:"old",title:"简约视频卡片，标题和封面一体式展示"},{key:"new",title:"详细视频卡片，标题与封面分离"}],onClick:this.handleOnSetVideoCardType})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"打开方式"),isVIP:v,active:v,hasLogin:f},l.a.createElement(x.e,{value:v?a:"direct",data:[{key:"direct",title:"直接打开"},{key:"silent",title:"静默打开",description:"在扩展弹窗打开网页时窗口仍保持打开"}],onClick:this.handleOnSetVideoOpenMethod})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"可选板块"),description:"至少选择两个板块",columns:1,isVIP:v,active:v,hasLogin:f},t.map(({key:e,on:t})=>l.a.createElement(x.d,{key:e,title:Object(C.__)("popupMain_"+e),onClick:()=>y<=2&&t?null:this.handleOnClickSectionShow(e,!t),frontOperation:l.a.createElement(x.c,{active:t,disabled:y<=2&&t})})))),l.a.createElement(L,{title:"首页板块设置"},l.a.createElement(R,{title:"展示直播栏",toolbar:l.a.createElement(x.a,{onClick:this.handleOnSetHomeShowLiveBar,on:o})})),l.a.createElement(L,{title:"导航栏设置"},l.a.createElement("div",{className:"list-wrapper system"},l.a.createElement(R,{title:"系统预设",columns:1,helperArea:l.a.createElement(_,{description:l.a.createElement("b",null,"拖动导航可以进行排序")})},l.a.createElement(We.a,{backend:He.a},c.map(e=>{let{needLogin:t,description:a=""}=e;return ct(ct({},A()(e,["needLogin","description"])),{},{description:a+(t?" 需要登录":"")})}).map((e,t)=>{const{key:a,title:n=null,description:i=null,on:o=!1,toggle:s=!0}=e,r={};return r.frontOperation=l.a.createElement(x.c,{disabled:!s,active:o?1:0}),l.a.createElement(ht,{key:a,index:t,onDragMove:this.onDragMoveSystemMenu,onDrop:this.onDropSystemMenu},l.a.createElement(x.d,ye()({title:n,description:i,onClick:!!s&&(()=>this.handleOnClickSystemMenu(a,!o))},r)))})))),l.a.createElement("div",{className:"list-wrapper custom"},l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"自定义导航 (",st()(p).length,"/",v?10:5,")"),toolbar:l.a.createElement(u.b,{className:"add-btn",onClick:this.handleOnCreateNewMenu},"添加"),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"拖动导航可以进行排序"),l.a.createElement("br",null),l.a.createElement("br",null))})},l.a.createElement("div",{className:"list"},l.a.createElement(We.a,{backend:He.a},st()(p).map((e,t)=>l.a.createElement(dt,{index:t,key:e.title,info:e,onEditMenu:this.handleOnEditMenu,onDeleteMenu:this.handleOnDeleteCustomMenu,onDragMove:this.onDragMoveCustomMenu,onDrop:this.onDropCustomMenu}))))))),l.a.createElement(u.h,{open:h,className:"menu-editing-modal",title:"add"===d?"新增快捷导航":"编辑快捷导航",onClickMask:this.handleOnCloseModal,buttons:l.a.createElement("div",{className:"btn-group"},l.a.createElement(u.b,{onClick:this.handleOnCloseModal},"取消"),l.a.createElement(u.b,{className:"confirm",onClick:this.handOnConfirmUpdateMenu},"确认"))},l.a.createElement("label",{from:"title"},l.a.createElement("p",null,"导航标题 (不长于10个字符)"),l.a.createElement(Fe.a,{id:"title",ref:this.menuTitleInputRef,onChange:this.onChangeTitle,onCompositionStart:this.onTitleCompositionStart,onCompositionEnd:this.onTitleCompositionEnd,placeholder:"不能重复, 不大于4个中文汉字宽度",value:g.title})),l.a.createElement("label",{from:"url"},l.a.createElement("p",null,"跳转地址 (不长于256个字符)"),l.a.createElement(Fe.a,{id:"url",ref:this.menuUrlInputRef,onChange:this.onChangeURL,onCompositionStart:this.onURLCompositionStart,onCompositionEnd:this.onURLCompositionEnd,placeholder:"输入导航栏跳转的目标链接",value:g.url}))))}}m()(gt,"contextType",F);var mt=Object(E.f)(gt),ut=a(131),bt=a.n(ut);const ft=p.d.div`
  .video-rename-section {
    .body {
      .rename-wrapper {
        display: flex;
        margin-bottom: 12px;

        label {
          display: inline-block;
          flex-shrink: 0;
          width: 62px;
          line-height: 32px;
          font-size: 14px;
        }

        .rename-input {
          flex-grow: 1;
          padding: 6px 10px;
        }

        .button {
          margin-left: 8px;
          flex-shrink: 0;
        }
      }
    }
  }
`;class vt extends l.a.Component{constructor(e){super(e),m()(this,"state",{renameOn:!1,videoFilename:"",newVideoFilename:"",videoCoverFilename:"",newVideoCoverFilename:"",videoScreenshotFilename:"",newVideoScreenshotFilename:"",videoDanmuFilename:"",newVideoDanmuFilename:"",audioFilename:"",newAudioFilename:"",subtitleFilename:"",newSubtitleFilename:"",liveScreenshotFilename:"",newLiveScreenshotFilename:""}),m()(this,"handleOnChangeRenameInput",(e,t)=>{this.setState({[`new${bt()(e)}Filename`]:t.target.value})}),m()(this,"handleOnClickChangeRenameButton",e=>{if(!this.context.isVIP())return this.context.handleOnClickShowPaymentModal();const t=this.state[`new${bt()(e)}Filename`];chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",[e+"Filename"]:t},()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({[e+"Filename"]:t})})}),m()(this,"handleOnClickRenameOn",()=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",on:!this.state.renameOn},()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({renameOn:!this.state.renameOn})})})}componentDidMount(){chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},e=>{this.setState({renameOn:e.on,videoFilename:e.videoFilename,newVideoFilename:e.videoFilename,videoCoverFilename:e.videoCoverFilename,newVideoCoverFilename:e.videoCoverFilename,videoScreenshotFilename:e.videoScreenshotFilename,newVideoScreenshotFilename:e.videoScreenshotFilename,videoDanmuFilename:e.videoDanmuFilename,newVideoDanmuFilename:e.videoDanmuFilename,subtitleFilename:e.subtitleFilename,newSubtitleFilename:e.subtitleFilename,audioFilename:e.audioFilename,newAudioFilename:e.audioFilename,liveScreenshotFilename:e.liveScreenshotFilename,newLiveScreenshotFilename:e.liveScreenshotFilename})})}render(){const{renameOn:e,videoFilename:t,newVideoFilename:a,videoCoverFilename:n,newVideoCoverFilename:i,videoScreenshotFilename:o,newVideoScreenshotFilename:s,videoDanmuFilename:r,newVideoDanmuFilename:c,subtitleFilename:p,newSubtitleFilename:h,audioFilename:d,newAudioFilename:g,liveScreenshotFilename:m,newLiveScreenshotFilename:b}=this.state,{hasLogin:f}=this.context,v=this.context.isVIP();return l.a.createElement(ft,null,l.a.createElement(M,{title:"下载设置"}),l.a.createElement(L,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"自定义下载文件名"),active:e},l.a.createElement(R,{className:"video-rename-section",hasLogin:f,isVIP:v,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"可使用关键词：",l.a.createElement("br",null),"视频/直播间标题： ",l.a.createElement("b",null,"__TITLE__"),l.a.createElement("br",null),"视频aid： ",l.a.createElement("b",null,"__AID__"),l.a.createElement("br",null),"视频cid： ",l.a.createElement("b",null,"__CID__"),l.a.createElement("br",null),"视频bvid： ",l.a.createElement("b",null,"__BVID__"),l.a.createElement("br",null),"视频发布时间： ",l.a.createElement("b",null,"__TIME__"),l.a.createElement("br",null),"视频发布日期： ",l.a.createElement("b",null,"__DATE__"),l.a.createElement("br",null),"视频画质代号： ",l.a.createElement("b",null,"__QUALITY__"),l.a.createElement("br",null),"视频上传者昵称： ",l.a.createElement("b",null,"__UPPER__"),l.a.createElement("br",null),"视频上传者UID： ",l.a.createElement("b",null,"__UID__"),l.a.createElement("br",null),"字幕语言： ",l.a.createElement("b",null,"__LANG__"),l.a.createElement("br",null),l.a.createElement("br",null),"直播间ID： ",l.a.createElement("b",null,"__ROOM_ID__"),l.a.createElement("br",null),l.a.createElement("br",null),"当前日期： ",l.a.createElement("b",null,"__NOW_DATE__"),l.a.createElement("br",null),"当前时间： ",l.a.createElement("b",null,"__NOW_TIME__"),l.a.createElement("br",null),l.a.createElement("br",null),"扩展名： ",l.a.createElement("b",null,"__FORMAT__"),l.a.createElement("br",null),l.a.createElement("br",null),"默认为：__TITLE__.__CID__.__FORMAT__",l.a.createElement("br",null),"注意：关键词必须为大写和下划线组成的完整预设名称",l.a.createElement("br",null),l.a.createElement("br",null),"命名中可使用关键词自由组合，如：",l.a.createElement("br",null),"video-__AID__.__TITLE__-小张的视频.__FORMAT__",l.a.createElement("br",null),l.a.createElement("br",null),"上述例子会得到如「",l.a.createElement("b",null,"video-123456.示例标题-小张的视频.flv"),"」这样的命名",l.a.createElement("br",null),"其中 __AID__ → 123456，__TITLE__ → 示例标题，__FORMAT__ → flv")})},l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"videoRenameInput"},"视频文件"),l.a.createElement(u.e,{id:"videoRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("video",e),value:a}),l.a.createElement(u.b,{className:a!==t?"primary":"border",disabled:a===t,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("video")},"确认修改")),l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"videoCoverRenameInput"},"视频封面"),l.a.createElement(u.e,{id:"videoCoverRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoCover",e),value:i}),l.a.createElement(u.b,{className:i!==n?"primary":"border",disabled:i===n,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoCover")},"确认修改")),l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"videoScreenshotRenameInput"},"视频截图"),l.a.createElement(u.e,{id:"videoScreenshotRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoScreenshot",e),value:s}),l.a.createElement(u.b,{className:s!==o?"primary":"border",disabled:s===o,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoScreenshot")},"确认修改")),l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"videoDanmuRenameInput"},"弹幕文件"),l.a.createElement(u.e,{id:"videoDanmuRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("danmu",e),value:c}),l.a.createElement(u.b,{className:c!==r?"primary":"border",disabled:c===r,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("danmu")},"确认修改")),l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"videoSubtitleRenameInput"},"字幕文件"),l.a.createElement(u.e,{id:"videoSubtitleRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("subtitle",e),value:h}),l.a.createElement(u.b,{className:h!==p?"primary":"border",disabled:h===p,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("subtitle")},"确认修改")),l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"audioRenameInput"},"音频文件"),l.a.createElement(u.e,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("audio",e),value:g}),l.a.createElement(u.b,{className:g!==d?"primary":"border",disabled:g===d,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("audio")},"确认修改")),l.a.createElement("div",{className:"rename-wrapper"},l.a.createElement("label",{htmlFor:"audioRenameInput"},"直播截屏"),l.a.createElement(u.e,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("liveScreenshot",e),value:b}),l.a.createElement(u.b,{className:b!==m?"primary":"border",disabled:b===m,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("liveScreenshot")},"确认修改")))))}}m()(vt,"contextType",F);var Ct=Object(E.f)(vt);const yt=p.d.div`
  .toggle-off {
    position: relative;
    filter: grayscale(1);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  section {
    .radio-button-wrapper {
      margin-bottom: 8px;
      width: fit-content;
    }

    .link {
      margin: 0 2px;
      padding: 0 2px;
      color: var(--bilibili-blue);
    }
  }
`,wt=p.d.div`
  .check-box-button {
    display: inline-block;
    margin-left: 16px;
  }
`,St=p.d.textarea`
  width: calc(100% - 18px);
  min-height: 50px;
  padding: 8px;
  border: 1px solid #ccc;
`;class Et extends l.a.Component{constructor(e){super(e),m()(this,"state",{globalNotificationState:!1,notificationJumpType:"button",notificationAutoClose:!1,announcementNotification:!1,bilibiliMessageOn:!1,bilibiliMessageRangeType:{at:!0,like:!0,reply:!0,sys_msg:!0,unread:!0},videoOn:!1,videoRangeType:"all",videoNumberType:"theLatestThree",videoUseWhiteList:!1,videoUseBlackList:!1,videoDuration:10,videoShowCover:!1,videoShowBadge:!1,liveOn:!1,liveRangeType:"all",liveUseWhiteList:!1,liveUseBlackList:!1,liveDuration:3,liveShowCover:!1,originDynamicWhiteListString:"",dynamicWhiteListString:"",originDynamicBlackListString:"",dynamicBlackListString:"",originLiveWhiteListString:"",liveWhiteListString:"",originLiveBlackListString:"",liveBlackListString:"",modalType:"dynamic",useBackground:!1}),m()(this,"handleOnRequestBackground",()=>{const e=this.state.useBackground?"remove":"request";chrome.runtime.sendMessage({target:"permissionController",event:e,permissions:["background"]},e=>{e&&this.setState({useBackground:!1})})}),m()(this,"handleOnClickJumpType",e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",useActions:"button"===e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationJumpType:e})})}),m()(this,"handleOnClickAutoClose",()=>{const{notificationAutoClose:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",autoClose:!e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAutoClose:!e})})}),m()(this,"handleOnSetVideoDuration",e=>{if(this.state.videoDuration!==e){const t=this.context.isVIP();if(5===e&&!t)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",duration:e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoDuration:e})})}}),m()(this,"handleOnSetVideoShowCover",()=>{const{videoShowCover:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showCover:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowCover:!e})})}),m()(this,"handleOnSetVideoShowBadge",()=>{const{videoShowBadge:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showBadge:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowBadge:!e})})}),m()(this,"handleOnToggleAnnouncementMessage",()=>{const{announcementNotification:e}=this.state;chrome.runtime.sendMessage({target:"message",event:"setSetting",announcementNotification:!e},()=>{this.context.uploadSettings("message"),this.setState({announcementNotification:!e})})}),m()(this,"handleOnSetBilibiliMessageOn",()=>{const{bilibiliMessageOn:e}=this.state;if(!this.context.hasLogin)return this.context.handleOnClickShowLoginModal();const t=this.context.isVIP();if(!e&&!t)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",on:!e},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageOn:!e})})}),m()(this,"handleOnToggleBilibiliMessageRangeType",(e,t)=>{const a=this.state.bilibiliMessageRangeType;a[e]=t,chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",rangeType:a},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageRangeType:a})})}),m()(this,"handleOnSetVideoOn",()=>{const{videoOn:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",on:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoOn:!e})})}),m()(this,"handleOnSetVideoRangeType",e=>{console.log(e),this.state.videoRangeType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoRangeType:e,videoUseWhiteList:"whiteList"===e})})}),m()(this,"handleOnSetVideoNumberType",e=>{this.state.videoNumberType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",numberType:e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNumberType:e})})}),m()(this,"handleOnToggleUseVideoBlackList",()=>{const{videoUseBlackList:e}=this.state,t=this.context.isVIP();if(!e&&!t)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",useBlackList:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoUseBlackList:!e})})}),m()(this,"handleOnSetLiveOn",()=>{const{liveOn:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",on:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveOn:!e})})}),m()(this,"handleOnSetLiveDuration",e=>{if(this.state.liveDuration!==e){if(!this.context.isVIP())return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",duration:e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveDuration:e})})}}),m()(this,"handleOnSetLiveShowCover",()=>{const{liveShowCover:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",showCover:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveShowCover:!e})})}),m()(this,"handleOnSetLiveRangeType",e=>{this.state.liveRangeType!==e&&chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",rangeType:e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveRangeType:e})})}),m()(this,"handleOnToggleUseLiveBlackList",()=>{const{liveUseBlackList:e}=this.state,t=this.context.isVIP();if(!e&&!t)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",useBlackList:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveUseBlackList:!e})})}),m()(this,"handleOnOpenVideoDynamicPage",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://t.bilibili.com/?tab=8"})}),m()(this,"handleOnChangeDynamicBlackListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({dynamicBlackListString:t})}),m()(this,"handleOnChangeDynamicWhiteListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({dynamicWhiteListString:t})}),m()(this,"handleOnBlurDynamicBlackListTextArea",()=>{const{dynamicBlackListString:e,originDynamicBlackListString:t}=this.state;if(t!==e.trim()){const t=new Me.a(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Se()(t).join(", ");chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setBlackList",blackList:Se()(t)},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({originDynamicBlackListString:a,dynamicBlackListString:a})})}}),m()(this,"handleOnBlurDynamicWhiteListTextArea",()=>{const{dynamicWhiteListString:e,originDynamicWhiteListString:t}=this.state;if(t!==e.trim()){const t=new Me.a(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Se()(t).join(", ");chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setWhiteList",whiteList:Se()(t)},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({originDynamicWhiteListString:a,dynamicWhiteListString:a})})}}),m()(this,"handleOnChangeLiveBlackListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({liveBlackListString:t})}),m()(this,"handleOnChangeLiveWhiteListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({liveWhiteListString:t})}),m()(this,"handleOnBlurLiveBlackListTextArea",()=>{const{liveBlackListString:e,originLiveBlackListString:t}=this.state;if(t!==e.trim()){const t=new Me.a(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Se()(t).join(", ");chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setBlackList",blackList:Se()(t)},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({originLiveBlackListString:a,liveBlackListString:a})})}}),m()(this,"handleOnBlurLiveWhiteListTextArea",()=>{const{liveWhiteListString:e,originLiveWhiteListString:t}=this.state;if(t!==e.trim()){const t=new Me.a(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Se()(t).join(", ");chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setWhiteList",whiteList:Se()(t)},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({originLiveWhiteListString:a,liveWhiteListString:a})})}})}componentDidMount(){chrome.runtime.sendMessage({target:"notificationController",event:"getSetting"},e=>{this.setState({globalNotificationState:e.on,notificationJumpType:e.useActions?"button":"card",notificationAutoClose:e.autoClose})}),chrome.runtime.sendMessage({target:"message",event:"getSetting"},e=>{const{announcementNotification:t}=e;this.setState({announcementNotification:t})}),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getSetting"},e=>{const{on:t,rangeType:a}=e;this.setState({bilibiliMessageOn:t,bilibiliMessageRangeType:a})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getSetting"},e=>{const{on:t,rangeType:a,numberType:n,useWhiteList:i,useBlackList:o,duration:l,showCover:s,showBadge:r}=e;this.setState({videoOn:t,videoRangeType:a,videoNumberType:n,videoUseWhiteList:i,videoUseBlackList:o,videoDuration:l,videoShowCover:s,videoShowBadge:r})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getBlackList"},(e=[])=>{this.setState({originDynamicBlackListString:e.join(", "),dynamicBlackListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getWhiteList"},(e=[])=>{this.setState({originDynamicWhiteListString:e.join(", "),dynamicWhiteListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getSetting"},e=>{const{on:t,rangeType:a,useWhiteList:n,useBlackList:i,duration:o,showCover:l}=e;this.setState({liveOn:t,liveRangeType:a,liveUseWhiteList:n,liveUseBlackList:i,liveDuration:o,liveShowCover:l})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getBlackList"},(e=[])=>{this.setState({originLiveBlackListString:e.join(", "),liveBlackListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getWhiteList"},(e=[])=>{this.setState({originLiveWhiteListString:e.join(", "),liveWhiteListString:e.join(", ")})}),chrome.permissions.contains({permissions:["background"]},e=>{this.setState({useBackground:!!e})})}render(){const{globalNotificationState:e,notificationJumpType:t,notificationAutoClose:a,announcementNotification:n,bilibiliMessageOn:i,videoOn:o,videoRangeType:s,videoNumberType:r,videoUseWhiteList:c,videoUseBlackList:p,videoDuration:h,videoShowCover:d,videoShowBadge:g,liveOn:m,liveRangeType:b,liveUseWhiteList:f,liveUseBlackList:v,liveDuration:y,liveShowCover:w,dynamicWhiteListString:S,dynamicBlackListString:E,liveWhiteListString:k,liveBlackListString:O,useBackground:P}=this.state,{hasLogin:A,bilibiliAccount:F}=this.context,I=this.context.isVIP();this.context.isSuperVIP();return console.log(s,"whiteList"===s),l.a.createElement(yt,null,l.a.createElement(M,{title:l.a.createElement(wt,null,l.a.createElement("span",null,"消息推送设置")),description:"消息推送是一种根据一定频率进行定期检查的功能，当有新内容时就会推送给你啦~"}),l.a.createElement("div",{className:e?null:"toggle-off"},l.a.createElement(L,{title:"一般推送设置"},l.a.createElement(R,{title:"收到推送一段时间后自动关闭消息",description:"自动关闭等待时间各功能可能不一样",toolbar:l.a.createElement(x.a,{onClick:this.handleOnClickAutoClose,on:a})}),l.a.createElement(R,{title:"启用推送增强",description:"解决后台推送失败的问题，请谨慎启用，可能会导致浏览器开机自动启动",toolbar:l.a.createElement(x.a,{onClick:this.handleOnRequestBackground,on:P}),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"启用后",l.a.createElement("b",null,"重启扩展"),"生效")})})),l.a.createElement(L,{title:"新公告推送",toolbar:l.a.createElement(x.a,{onClick:this.handleOnToggleAnnouncementMessage,on:n})}),l.a.createElement(L,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"B站站内消息推送"),active:i,toolbar:l.a.createElement(x.a,{disable:!F||!A,onClick:this.handleOnSetBilibiliMessageOn,on:!!(I&&A&&F)&&i})},l.a.createElement(R,{title:"需要推送的消息类别",hasLogin:A,isVIP:I},l.a.createElement(x.b,{data:ue()(this.state.bilibiliMessageRangeType).map(e=>({key:e,title:Object(C.__)("bilibiliMessage_"+e),on:this.state.bilibiliMessageRangeType[e]})),onClick:this.handleOnToggleBilibiliMessageRangeType}))),l.a.createElement(L,{title:"视频投稿推送",active:o,toolbar:l.a.createElement(x.a,{disable:!F,onClick:this.handleOnSetVideoOn,on:!!F&&o})},l.a.createElement(R,{title:"显示封面",active:!!F,toolbar:l.a.createElement(x.a,{disable:!F,onClick:this.handleOnSetVideoShowCover,on:d})}),l.a.createElement(R,{title:"在扩展图标上显示新投稿角标",active:!!F,toolbar:l.a.createElement(x.a,{disable:!F,onClick:this.handleOnSetVideoShowBadge,on:g})}),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"推送范围"),hasLogin:A,isVIP:I,active:I&&!!F},l.a.createElement(x.e,{value:s,data:[{key:"all",title:"推送所有已关注主播的视频投稿消息"},{key:"specialAttention",title:"只推送被特别关注了的UP主视频消息",description:"需要同时在b站关注才能收到推送哦"},{key:"whiteList",title:l.a.createElement(l.a.Fragment,null,"只推送白名单中的UP主视频消息，当前白名单有 ",l.a.createElement("b",null,S.split(",").filter(Boolean).length)," 项"),description:"只要在白名单中，已经被加到黑名单中的也会被推送"}],onClick:this.handleOnSetVideoRangeType})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"推送间隔"),description:"两次推送之间至少会间隔这些时间，默认10分钟",hasLogin:A,isVIP:I,active:I&&!!F},l.a.createElement(x.e,{value:A&&I?h:10,data:[{key:1,title:"1分钟"},{key:5,title:"5分钟"},{key:10,title:"10分钟"},{key:20,title:"20分钟"},{key:30,title:"30分钟"}],onClick:this.handleOnSetVideoDuration})),l.a.createElement(R,{title:"推送显示数量",description:"默认推送每一条",hasLogin:A,isVIP:I,active:I&&!!F},l.a.createElement(x.e,{value:A&&I?r:"everyone",data:[{key:"everyone",title:"推送每一条"},{key:"theLatestThree",title:"只推送最新的三条视频投稿消息",description:"如果多于三条则选择最近发布的三条"},{key:"merge",title:l.a.createElement(l.a.Fragment,null,"只推送一条显示数量的通知，点击前往",l.a.createElement("a",{className:"link",onClick:this.handleOnOpenVideoDynamicPage},"投稿动态"),"页面")}],onClick:this.handleOnSetVideoNumberType})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"白名单 (",S.split(", ").filter(Boolean).length,")"),description:"自动去除重复添加的UID",isVIP:I,active:"whiteList"===s&&!!F&&I,hasLogin:A,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"白名单优先级高于黑名单和助手特关"),l.a.createElement("br",null),l.a.createElement("br",null),"当失去鼠标焦点时会自动格式化并过滤重复项目",l.a.createElement("br",null),l.a.createElement("br",null),"使用",l.a.createElement("b",null,"英文逗号"),"将每个UID分隔开",l.a.createElement("br",null),l.a.createElement("br",null))})},l.a.createElement(St,{placeholder:"输入希望始终推送的用户UID",value:S,onChange:this.handleOnChangeDynamicWhiteListTextArea,onBlur:this.handleOnBlurDynamicWhiteListTextArea})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"黑名单 (",E.split(", ").filter(Boolean).length,")"),description:"自动去除重复添加的UID",isVIP:I,active:p&&!!F&&I,hasLogin:A,toolbar:l.a.createElement(x.a,{disable:!A||!F,onClick:this.handleOnToggleUseVideoBlackList,on:!!A&&p}),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"当失去鼠标焦点时会自动格式化并过滤重复项目",l.a.createElement("br",null),l.a.createElement("br",null),"使用",l.a.createElement("b",null,"英文逗号"),"将每个UID分隔开",l.a.createElement("br",null),l.a.createElement("br",null))})},l.a.createElement(St,{placeholder:"输入希望屏蔽推送的用户UID",value:E,onChange:this.handleOnChangeDynamicBlackListTextArea,onBlur:this.handleOnBlurDynamicBlackListTextArea}))),l.a.createElement(L,{title:"直播开播推送 - 需登录助手账号",active:m,toolbar:l.a.createElement(x.a,{disable:!F,onClick:this.handleOnSetLiveOn,on:!!F&&m})},l.a.createElement(R,{title:"显示封面",active:!!F,toolbar:l.a.createElement(x.a,{disable:!F,onClick:this.handleOnSetLiveShowCover,on:w})}),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"推送范围"),hasLogin:A,isVIP:I,active:I&&!!F},l.a.createElement(x.e,{value:I&&A?b:"all",data:[{key:"all",title:"推送所有已关注主播的开播消息"},{key:"specialAttention",title:"只推送被特别关注了的UP主的开播消息",description:"需要同时在b站关注才能收到推送哦"},{key:"whiteList",title:l.a.createElement(l.a.Fragment,null,"只推送白名单中的UP主的开播消息，当前白名单有 ",l.a.createElement("b",null,k.split(",").filter(Boolean).length)," 项"),description:"只要在白名单中，已经被加到黑名单中的也会被推送"}],onClick:this.handleOnSetLiveRangeType})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"推送间隔"),description:"两次推送之间至少会间隔这些时间",hasLogin:A,isVIP:I,active:I&&!!F},l.a.createElement(x.e,{value:A&&I?y:10,data:[{key:1,title:"1分钟"},{key:5,title:"5分钟"},{key:10,title:"10分钟"}],onClick:this.handleOnSetLiveDuration})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"白名单 (",k.split(", ").filter(Boolean).length,")"),description:"自动去除重复添加的UID",hasLogin:A,isVIP:I,active:"whiteList"===b&&!!F&&I,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,"白名单优先级高于黑名单和助手特关"),l.a.createElement("br",null),l.a.createElement("br",null),"当失去鼠标焦点时会自动格式化并过滤重复项目",l.a.createElement("br",null),l.a.createElement("br",null),"使用",l.a.createElement("b",null,"英文逗号"),"将每个UID分隔开",l.a.createElement("br",null),l.a.createElement("br",null))})},l.a.createElement(St,{placeholder:"输入希望始终推送的用户UID",value:k,onChange:this.handleOnChangeLiveWhiteListTextArea,onBlur:this.handleOnBlurLiveWhiteListTextArea})),l.a.createElement(R,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.c,{icon:"cat-paw",size:16}),"黑名单 (",O.split(", ").filter(Boolean).length,")"),description:"自动去除重复添加的UID",hasLogin:A,isVIP:I,active:v&&!!F&&I,toolbar:l.a.createElement(x.a,{disable:!A||!F,onClick:this.handleOnToggleUseLiveBlackList,on:!!A&&v}),helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"当失去鼠标焦点时会自动格式化并过滤重复项目",l.a.createElement("br",null),l.a.createElement("br",null),"使用",l.a.createElement("b",null,"英文逗号"),"将每个UID分隔开",l.a.createElement("br",null),l.a.createElement("br",null))})},l.a.createElement(St,{placeholder:"输入希望屏蔽推送的用户UID",value:O,onChange:this.handleOnChangeLiveBlackListTextArea,onBlur:this.handleOnBlurLiveBlackListTextArea})))))}}m()(Et,"contextType",F);var xt=Object(E.f)(Et);const kt=p.d.div`

`;class Mt extends l.a.Component{constructor(e){super(e),m()(this,"state",{autoTakeVipPrivilege:!1,autoTakeVipPrivilegePushNotification:!1,quickSearch:!1,darkMode:!1,darkModeFollowSystem:!0}),m()(this,"handleOnToggleAutoTakeVipPrivilege",()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",on:!this.state.autoTakeVipPrivilege},()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({autoTakeVipPrivilege:!this.state.autoTakeVipPrivilege})})}),m()(this,"handleOnToggleAutoTakeVipPrivilegeNotification",()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",pushNotification:!this.state.pushAutoTakeVipPrivilegeNotification},()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({pushAutoTakeVipPrivilegeNotification:!this.state.pushAutoTakeVipPrivilegeNotification})})}),m()(this,"handleOnToggleQuickSearch",()=>{chrome.runtime.sendMessage({target:"quickSearch",event:"setSetting",on:!this.state.quickSearch},()=>{this.context.uploadSettings("quickSearch"),this.setState({quickSearch:!this.state.quickSearch})})}),m()(this,"handleOnToggleDarkMode",()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",on:!this.state.darkMode},()=>{this.context.uploadSettings("darkMode"),this.setState({darkMode:!this.state.darkMode})})}),m()(this,"handleOnToggleDarkModeFollowSystem",()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",followSystem:!this.state.darkModeFollowSystem},()=>{this.context.uploadSettings("darkMode"),this.setState({darkModeFollowSystem:!this.state.darkModeFollowSystem})})})}componentDidMount(){chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"getSetting"},e=>{this.setState({autoTakeVipPrivilege:e.on,pushAutoTakeVipPrivilegeNotification:e.pushNotification})}),chrome.runtime.sendMessage({target:"quickSearch",event:"getSetting"},e=>{this.setState({quickSearch:e.on})}),chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{e&&this.setState({darkMode:e.on,darkModeFollowSystem:e.followSystem})})}render(){const{hasLogin:e,bilibiliAccount:t}=this.context;return l.a.createElement(kt,null,l.a.createElement(M,{title:"全局功能"}),l.a.createElement(R,{title:"自动领取大会员福利",hasLogin:e,toolbar:l.a.createElement(v.CheckBoxButton,{disable:!t,onClick:this.handleOnToggleAutoTakeVipPrivilege,on:this.state.autoTakeVipPrivilege}),active:this.state.autoTakeVipPrivilege&&!!t&&e,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"该功能每天都会帮你检查，每个月领取一次")})},l.a.createElement(v.ListItem,{title:"推送通知",onClick:this.handleOnToggleAutoTakeVipPrivilegeNotification,operation:l.a.createElement(v.CheckBoxButton,{on:this.state.pushAutoTakeVipPrivilegeNotification})})),l.a.createElement(R,{title:"深色模式",toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnToggleDarkMode,on:this.state.darkMode}),active:this.state.darkMode,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"目前做了首页，动态，专栏，搜索，消息中心，个人主页，稍后再看，历史记录直播观看，未来会做添加更多页面支持")})},l.a.createElement(v.ListItem,{title:"跟随系统",onClick:this.handleOnToggleDarkModeFollowSystem,operation:l.a.createElement(v.CheckBoxButton,{on:this.state.darkModeFollowSystem})})),l.a.createElement(R,{title:"鼠标右键快速搜索",toolbar:l.a.createElement(v.CheckBoxButton,{onClick:this.handleOnToggleQuickSearch,on:this.state.quickSearch}),active:this.state.quickSearch,helperArea:l.a.createElement(_,{description:l.a.createElement(l.a.Fragment,null,"如果选择的是",l.a.createElement("b",null,"avid"),"或",l.a.createElement("b",null,"bvid"),"，则会直接打开相应视频播放页面")})}))}}m()(Mt,"contextType",F);var Ot=Object(E.f)(Mt);a(341);function Lt(e,t){var a=ue()(e);if(ot.a){var n=ot()(e);t&&(n=n.filter((function(t){return nt()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Pt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Lt(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):tt.a?Ze()(e,tt()(a)):Lt(Object(a)).forEach((function(t){Je()(e,t,nt()(a,t))}))}return e}const At=[{title:"助手月费会员",body:"哔哩哔哩助手月度会员1个月",name:"catVIP",type:"month",duration:30,hasDateTimeLimit:!0,price:"0.01",identityName:"助手猫观察员"},{title:"助手年费会员",body:"哔哩哔哩助手月度会员1年",name:"catVIP",type:"year",duration:365,hasDateTimeLimit:!0,price:"0.02",identityName:"助手猫观察员"}],Ft=p.d.div`
  .load-order-list-btn {
    margin-left: 20px;
    vertical-align: bottom;
    font-size: 14px;

    .button-view {
      padding: 0 10px;
    }
  }
`;class It extends l.a.Component{constructor(e){super(e),m()(this,"state",{orderList:[],redeemList:[],loaded:!1}),m()(this,"handleOnClickLoadOrder",()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryOrderAndRedeemList"},e=>{"string"!=typeof e?this.setState(Pt(Pt({},e),{},{loaded:!0})):v.Message.error(e)})})}componentDidMount(){}render(){const{orderList:e,redeemList:t,loaded:a}=this.state;return l.a.createElement(Ft,null,l.a.createElement(M,{title:l.a.createElement(l.a.Fragment,null,"用户订单",a?null:l.a.createElement(v.Button,{className:"load-order-list-btn primary",onClick:this.handleOnClickLoadOrder},"点击加载订单"))}),l.a.createElement(R,{title:"付费订单列表"},e.length>0?e.map(e=>l.a.createElement(v.ListItem,{key:e.out_trade_no,title:At[e.product_id].body,description:q()(e.gmt_create).format("YYYY-MM-DD HH:mm:ss"),operation:l.a.createElement("span",null,"￥ ",e.total_amount)})):"无数据"),l.a.createElement(R,{title:"兑换码列表"},t.length>0?t.map(e=>l.a.createElement(v.ListItem,{key:e.code,title:e.code,description:`${e.generateType} / ${e.name} / ${q()(e.createDateTime).format("YYYY-MM-DD HH:mm:ss")}`,operation:l.a.createElement("span",null,e.active?e.used?"已使用":"未使用":"不可用")})):"无数据"))}}var Bt,Nt;m()(It,"contextType",F);const Rt=[{key:"overview",component:ie,path:"/"},{key:"popup",component:mt,path:"/popup"},{key:"video",component:ge,path:"/video"},{key:"live",component:ve,path:"/live"},{key:"specialAttention",component:Ge,path:"/specialAttention"},{key:"download",component:Ct,path:"/download"},{key:"notification",component:xt,path:"/notification"},{key:"article",component:H,path:"/article"},{key:"global",component:Ot,path:"/global"},{key:"order",component:Object(E.f)(It),path:"/order"}],Dt=p.d.div`
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  //min-height: calc(100% - 75px);
  overflow: auto;
`,Tt=p.d.aside`
  position: fixed;
  top: 75px;
  bottom: 0;
  //background-color: var(--paper-grey-100);
  backdrop-filter: blur(10px);
  background-color: rgb(245 245 245 / 0.8);
  pointer-events: none;
  z-index: 999;

  ul {
    //position: sticky;
    //top: 0;
    margin: 0;
    padding: 12px 0;
    min-width: 300px;
    font-size: 14px;
    overflow: auto;
    pointer-events: initial;
  }

  li {
    margin: 0 12px 2px 12px;
    padding: 8px 24px 8px 12px;
    list-style: none;
    //border-bottom: 1px solid #eee;
    border-radius: 0;
    cursor: pointer;
    user-select: none;

    &:last-of-type {
      //  border-bottom: none;
      margin-bottom: 0;
    }

    &:hover {
      background-color: var(--paper-grey-200);
    }

    &:active, &.active {
      background-color: var(--paper-grey-300);
    }
  }
`,_t=p.d.main`
  flex-grow: 1;
  margin-left: 300px;
  padding: 12px 12px 12px 24px;
  width: fit-content;
  height: fit-content;
`,Ut=p.d.div`
  .login-modal {
    margin: 0;

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        margin-top: 20px;
      }

      .captcha-wrapper, .email-wrapper {
        display: flex;
        align-items: center;
        margin-top: 4px;
        margin-bottom: 4px;

        .input {
          padding: 4px 12px;
          width: 100%;
          height: 32px;
          box-sizing: border-box;
        }

        .captcha-input {
          flex-grow: 1;
        }

        .button {
          flex-shrink: 0;
          margin: 0 0 0 4px;
          width: auto;
          height: 32px;

          button {
            line-height: 32px;
          }
        }
      }

      .button {
        margin: 12px 0;
        width: 100%;
        height: 40px;
        line-height: 40px;

        button {
          line-height: 38px;
          font-size: 14px;
        }
      }

      .step-wrapper {
        width: 100%;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.15s, opacity .3s;
        overflow: hidden;

        &.active {
          max-height: 500px;
          opacity: 1;
          transition: max-height 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95), opacity .3s;
        }
      }

      .avatar {
        width: 14px;
        height: 14px;
        vertical-align: sub;
        border-radius: 50px;
        margin: 0px 4px 0;
        border: 1px solid #fff;
      }

      .welcome-topic {
        line-height: 20px;
        text-align: left;
        width: 100%;
        font-size: 14px;

        .important {
          color: var(--bilibili-pink);
          font-weight: normal;
        }
      }

      .password-box {
        width: 100%;
      }

      .confirm-password-box {
        width: 100%;
      }

      .password-input {
        margin: 0 0 4px;
        padding: 4px 12px;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
        //text-align: center;
      }

      .login-btn {
        margin: 0;
      }

      .extra-box {
        display: flex;
        justify-content: space-between;

        .forget-password-btn {
          margin-left: auto;
          cursor: pointer;

          &:hover {
            color: var(--bilibili-blue);
            text-decoration: underline;
          }
        }

        .description {
          margin: 0;
          color: var(--bilibili-pink);
        }
      }

      .show-password-box {
        margin-bottom: 12px;
        width: fit-content;
        user-select: none;
        cursor: pointer;

        .checkbox-rect {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }

      .description {
        font-size: 12px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
          cursor: pointer;
        }
      }
    }
  }

  .sign-out-modal {
    p {
      font-size: 14px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button {
        margin-left: 12px;
      }
    }
  }

  .bind-email-modal {
    .input {
      padding: 4px 12px;
      width: 100%;
      height: 32px;
      box-sizing: border-box;
    }

    .captcha-wrapper {
      display: flex;
      align-items: center;
      margin-top: 4px;

      .captcha-input {
        flex-grow: 1;
      }

      .button {
        flex-shrink: 0;
        margin-left: 4px;
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }

      .description {
        font-size: 12px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
          cursor: pointer;
        }
      }
    }
  }

  .change-password-modal {
    .modal-body {
      display: flex;
      flex-direction: column;

      .input {
        margin-bottom: 8px;
        padding: 4px 12px;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
      }

      .extra-box {
        display: flex;
        justify-content: space-between;

        .forget-password-btn {
          margin-left: auto;
          cursor: pointer;

          &:hover {
            color: var(--bilibili-blue);
            text-decoration: underline;
          }
        }

        .description {
          margin: 0;
          color: var(--bilibili-pink);
        }
      }

      .show-password-box {
        margin-bottom: 12px;
        width: fit-content;
        user-select: none;
        cursor: pointer;

        .checkbox-rect {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }

      .captcha-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .input {
          margin: 0;
        }

        .captcha-input {
          flex-grow: 1;
        }

        .button {
          flex-shrink: 0;
          margin-left: 8px;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }
    }
  }

  .public-beta-announcement {
    .modal-body {
      font-size: 14px;
    }

    .hide-announcement-btn {
      .button-view {
        padding: 0 20px;
      }
    }
  }

  .reset-password-modal {
    p {
      margin: 12px 0;
      white-space: break-spaces;
      line-height: 20px;

      a {
        margin: 0 4px;
        color: var(--bilibili-blue);
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }
    }
  }

  .payment-iframe-modal {
    width: 1000px;
    max-width: max-content;
    box-sizing: border-box;
    overflow: hidden;

    .modal-body {
      padding: 0;
      width: 1000px;
      max-height: 700px;
      box-sizing: border-box;
    }

    .close-payment-modal-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      color: var(--bilibili-gray);
      cursor: pointer;
    }

    iframe {
      display: block;
      width: 100%;
      height: 700px;
      max-height: 700px;
      border: none;
    }
  }
`,Vt=p.d.div`
  a {
    margin: 0 4px;
    color: var(--bilibili-blue);
  }
`,jt=G.a.get("hideAnnouncement")||!1,zt=G.a.get("hidePayment")||!1,Wt=G.a.get("autoSync2Cloud"),Ht=Object(E.f)((Nt=Bt=class extends l.a.Component{constructor(e){super(e),m()(this,"passwordInputRef",l.a.createRef()),m()(this,"confirmPasswordInputRef",l.a.createRef()),m()(this,"signUpEmailInputRef",l.a.createRef()),m()(this,"signUpEmailCaptchaInputRef",l.a.createRef()),m()(this,"bindEmailInputRef",l.a.createRef()),m()(this,"bindEmailCaptchaInputRef",l.a.createRef()),m()(this,"changePasswordEmailInputRef",l.a.createRef()),m()(this,"changePasswordCaptchaInputRef",l.a.createRef()),m()(this,"passwordForChangeInputRef",l.a.createRef()),m()(this,"confirmPasswordForChangeInputRef",l.a.createRef()),m()(this,"autoSync2Cloud",void 0===Wt||Wt),m()(this,"state",{states:null,step:0,openPaymentModalAfterAction:!1,openChangePasswordModalAfterAction:!1,paymentIframeKey:0,emailForSignUp:"",captchaForSignUp:"",getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:60,password:"",confirmPassword:"",showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:"",getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:60,emailForBind:"",bindEmailCaptcha:"",email:"",getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:60,isResettingPassword:!1,logging:!1,loggingOut:!1,resettingPassword:!1,bhName:null,bhid:null,blidList:[],identities:[],hasLogin:!1,hasRegister:!1,bilibiliAccount:null,bhAccount:null,downloadSettings:!1,needFillPassword:!1,needRefreshPage:!1,hasLocalBilibiliAccountLogin:!1,hasLocalBilibiliHelperAccountLogin:!1,hasLocalBilibiliHelperAccountRegister:!1,loginModalShow:!1,resetModalShow:!1,signOutModalShow:!1,announcementModalShow:!jt,showBindEmailModal:!1,showChangePasswordModal:!1,showPaymentModal:!zt,uploadSettings:e=>new i.a(t=>{if(!this.state.hasLogin||!this.autoSync2Cloud)return t(!1);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:e},e=>{t(e)})}),resetPassword:()=>{const{bilibiliAccount:e,password:t}=this.state;return e&&e.hasLogin&&e.uid?(this.setState({resettingPassword:!0}),new i.a(a=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"resetPassword",uid:e.uid,password:t},e=>{a(e)})})):i.a.resolve(!1)},handleOnClickLogin:()=>(this.setState({logging:!0}),new i.a(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login",password:this.state.password,uid:this.state.bilibiliAccount.uid},t=>{if(setTimeout(()=>{this.setState({logging:!1})},1e3),t&&!0===t.hasLogin){const{hasLogin:a,bilibiliAccount:n,bhAccount:i}=t;console.log("handleOnClickLogin",t),v.Message.info("登录成功"),this.setState({hasLogin:a,bhAccount:i,bilibiliAccount:n}),e(!0)}else"WRONG_PASSWORD"===t?(v.Message.error(l.a.createElement(l.a.Fragment,null,"密码错误，请注意区分 助手账号 与 B站账号")),e(!1)):(v.Message.error(l.a.createElement(l.a.Fragment,null,"登录失败，一直失败的话就",l.a.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"私信助手猫"),"吧")),e(!1))})})),handleOnClickRegister:()=>{this.handleOnClickValidateCaptchaForSignUp()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickSignOut:()=>(this.setState({loggingOut:!0}),new i.a(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"signOut"},t=>{this.setState({loggingOut:!1}),t?(v.Message.info("登出成功"),this.setState({hasLogin:!1}),e(!0)):(v.Message.info("登出失败"),e(!1))})})),handleOnClickRefresh:()=>{history.go()},handleOnClickShowLoginModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"login"}),this.setState({loginModalShow:!0,password:"",confirmPassword:"",logging:!1,showPassword:!1})},handleOnClickHideLoginModal:()=>{this.setState({loginModalShow:!1,logging:!1},()=>{setTimeout(()=>{this.setState({step:0,password:"",confirmPassword:""})},300)})},handleOnClickShowPaymentModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"payment"}),this.refreshPaymentIframe(),this.setState({showPaymentModal:!0,openPaymentModalAfterAction:!1})},handleOnClickHidePaymentModal:()=>{this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!1}),G.a.set("hidePayment",!0)},handleOnClickShowSignOutModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"sign_out"}),this.setState({signOutModalShow:!0,loggingOut:!1})},handleOnClickHideSignOutModal:()=>{this.setState({signOutModalShow:!1,loggingOut:!1})},handleOnClickShowAnnouncementModal:()=>{this.setState({announcementModalShow:!0})},handleOnClickHideAnnouncementModal:()=>{this.setState({announcementModalShow:!1}),G.a.set("hideAnnouncement",!0)},handleOnClickShowBindEmailModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"bind_email"}),this.setState({showBindEmailModal:!0},()=>{this.bindEmailInputRef.current.focus()})},handleOnClickHideBindEmailModal:()=>{this.setState({showBindEmailModal:!1})},handleOnClickShowChangePasswordModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"change_password"}),this.setState({showChangePasswordModal:!0})},handleOnClickHideChangePasswordModal:()=>{this.setState({showChangePasswordModal:!1})},handleOnClickChangePassword:()=>{this.state.bhAccount?this.state.bhAccount.email?this.state.handleOnClickShowChangePasswordModal():(this.setState({openChangePasswordModalAfterAction:!0}),this.state.handleOnClickShowBindEmailModal()):v.Message.info("请先登录助手账号")},isVIP:()=>this.state.states&&Object(y.b)(this.state.bhAccount),isSuperVIP:()=>this.state.states&&Object(y.a)(this.state.bhAccount),sendPaymentMessage:()=>{this.state.states&&this.state.states.paymentIframe?this.state.handleOnClickShowPaymentModal():v.Message.info(l.a.createElement(Vt,null,"系统状态异常，请稍后重试或",l.a.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"私信助手猫")))},sendPublicBetaMessage:()=>{},openPage:e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")}}),m()(this,"urlParamHasUsedForShowPaymentModal",!1),m()(this,"handleOnClickNavigation",e=>{const{history:t,location:a}=this.props;a.pathname!==e&&t.push(e)}),m()(this,"handleOnClickLogin",()=>{const{password:e}=this.state;!e||e.length<6?v.Message.info("请输入正确的密码，长度至少6位"):this.state.handleOnClickLogin().then(e=>{e&&(this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({loginModalShow:!1}))})}),m()(this,"handleOnClickRegister",()=>{this.state.handleOnClickRegister()}),m()(this,"handleOnClickReset",()=>{const{password:e,confirmPassword:t}=this.state;!e||e.length<6?v.Message.info("请输入正确的密码，长度至少6位"):e!==t?v.Message.info("输入的两次密码不一致"):this.state.resetPassword().then(e=>{"NO_ACCESS_TO_RESET_PASSWORD"===e?v.Message.error(l.a.createElement(Vt,null,"无法重置密码，请使用注册时使用的b站账号",l.a.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"私信助手猫"),"以获得重置权限"),0):e?(this.state.handleOnClickShowLoginModal(),this.setState({resettingPassword:!1,isResettingPassword:!1,password:""},()=>{v.Message.info("密码重置成功，请前往登录"),this.passwordInputRef.current.focus()})):v.Message.info(l.a.createElement(Vt,null,"密码重置失败，请",l.a.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"私信助手猫")))})}),m()(this,"handleOnClickSignOut",()=>{this.state.handleOnClickSignOut().then(e=>{e&&this.state.handleOnClickHideSignOutModal()})}),m()(this,"handleOnChangeSignUpEmail",e=>{this.setState({emailForSignUp:e.target.value.replace(/\s/g,"").slice(0,128)})}),m()(this,"handleOnKeyDownEmailForSignUp",e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForSignUp(),this.signUpEmailCaptchaInputRef.current.focus())}),m()(this,"handleOnChangeSignUpCaptcha",e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForSignUp:t.slice(0,6)})}),m()(this,"handleOnChangeBindEmail",e=>{this.setState({emailForBind:e.target.value.replace(/\s/g,"").slice(0,128)})}),m()(this,"handleOnChangeBindEmailCaptcha",e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({bindEmailCaptcha:t.slice(0,6)})}),m()(this,"handleOnChangePasswordChangeCaptcha",e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForChangePassword:t.slice(0,6)})}),m()(this,"handleOnChangeChangePasswordEmail",e=>{this.setState({emailForChangePassword:e.target.value.replace(/\s/g,"").slice(0,128)})}),m()(this,"handleOnChangePasswordForChange",e=>{this.setState({passwordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})}),m()(this,"handleOnChangeConfirmPasswordForChange",e=>{this.setState({confirmPasswordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})}),m()(this,"handleOnChangePassword",e=>{this.setState({password:e.target.value.replace(/\s/g,"").slice(0,64)})}),m()(this,"handleOnChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value.replace(/\s/g,"").slice(0,64)})}),m()(this,"handleOnKeyDownBindEmailInput",e=>{e.persist(),"Enter"===e.key&&(this.bindEmailCaptchaInputRef.current.focus(),this.handleOnClickGetCaptchaForBindEmail())}),m()(this,"handleOnKeyDownBindEmailCaptchaInput",e=>{e.persist(),"Enter"===e.key&&this.handleOnClickValidateCaptchaForBindEmail()}),m()(this,"handleOnClickGetCaptchaForSignUp",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"sign_up"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?v.Message.info("验证码获取冷却中，请稍后"):this.state.emailForSignUp&&Object(C.isValidEmail)(this.state.emailForSignUp)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForSignUp",blid:this.state.bilibiliAccount.uid,email:this.state.emailForSignUp},e=>{"发送验证码成功"===e&&this.setState({getSignUpCaptchaCooling:!0,signUpCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.signUpCaptchaCountDown>1?this.setState({signUpCaptchaCountDown:this.state.signUpCaptchaCountDown-1}):(clearInterval(e),this.setState({getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:0}))},1e3)}),v.Message.info(e)}):v.Message.info("请输入正确格式的邮箱地址"):v.Message.info("请在B站登录并重启助手后再试"))),m()(this,"handleOnClickValidateCaptchaForSignUp",()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"sign_up"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return v.Message.info("请先登录B站账号，然后重启助手后再试");if(!this.state.emailForSignUp||!Object(C.isValidEmail)(this.state.emailForSignUp))return v.Message.info("请输入正确格式的邮箱地址");if(!this.state.captchaForSignUp)return v.Message.info("请输入验证码");if(6!==String(this.state.captchaForSignUp).length||isNaN(this.state.captchaForSignUp))return v.Message.info("请输入正确格式的验证码");const{password:e,confirmPassword:t}=this.state;return!e||e.length<6?v.Message.info("请输入正确的密码，长度至少6位"):t!=t?v.Message.info("输入的两次密码不一致"):(this.setState({logging:!0}),void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForSignUp",email:this.state.emailForSignUp,blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForSignUp,password:e},e=>{this.setState({logging:!1}),"注册成功"===e&&(chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"initBHAccountAfterSignUp"},e=>{const{hasLogin:t,bhAccount:a}=e;this.setState({hasLogin:t,bhAccount:a})}),this.setState({loginModalShow:!1,showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForSignUp:""})),v.Message.info(e)}))}),m()(this,"handleOnClickGetCaptchaForResetPassword",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"reset_password"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?v.Message.info("验证码获取冷却中，请稍后"):this.state.emailForChangePassword&&Object(C.isValidEmail)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,email:this.state.emailForChangePassword},e=>{"发送验证码成功"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))},1e3)}),v.Message.info(e)}):v.Message.info("请输入正确格式的邮箱地址"):v.Message.info("请在B站登录并重启助手后再试"))),m()(this,"handleOnClickValidateCaptchaForResetPassword",()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"reset_password"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return v.Message.info("请在B站登录并重启助手后再试");if(!this.state.emailForChangePassword||!Object(C.isValidEmail)(this.state.emailForChangePassword))return v.Message.info("请输入正确格式的邮箱地址");if(!this.state.captchaForChangePassword)return v.Message.info("请输入验证码");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return v.Message.info("请输入正确格式的验证码");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?v.Message.info("请输入正确的密码，长度至少6位"):e!==t?v.Message.info("输入的两次密码不一致"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},e=>{"修改成功"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),v.Message.info(e)})}),m()(this,"handleOnClickGetCaptchaForChangePassword",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"change_password"}),this.state.getChangePasswordCaptchaCooling?v.Message.info("验证码获取冷却中，请稍后"):this.state.emailForChangePassword&&Object(C.isValidEmail)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForChangePassword",email:this.state.emailForChangePassword},e=>{"发送验证码成功"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))},1e3)}),v.Message.info(e)}):v.Message.info("请输入正确格式的邮箱地址"))),m()(this,"handleOnClickValidateCaptchaForChangePassword",()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"change_password"}),!this.state.emailForChangePassword||!Object(C.isValidEmail)(this.state.emailForChangePassword))return v.Message.info("请输入正确格式的邮箱地址");if(!this.state.captchaForChangePassword)return v.Message.info("请输入验证码");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return v.Message.info("请输入正确格式的验证码");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?v.Message.info("请输入正确的密码，长度至少6位"):e!==t?v.Message.info("输入的两次密码不一致"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForChangePassword",captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},e=>{"修改成功"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),v.Message.info(e)})}),m()(this,"handleOnClickGetCaptchaForBindEmail",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"bind_email"}),this.state.getBindEmailCaptchaCooling?(this.bindEmailCaptchaInputRef.current.focus(),v.Message.info("验证码获取冷却中，请稍后")):this.state.emailForBind&&Object(C.isValidEmail)(this.state.emailForBind)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForBindEmail",email:this.state.emailForBind},e=>{"发送验证码成功"===e&&this.setState({getBindEmailCaptchaCooling:!0,bindEmailCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.bindEmailCaptchaCountDown>1?this.setState({bindEmailCaptchaCountDown:this.state.bindEmailCaptchaCountDown-1}):(clearInterval(e),this.setState({getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:0}))},1e3)}),v.Message.info(e)}):v.Message.info("请输入正确格式的邮箱地址"))),m()(this,"handleOnClickValidateCaptchaForBindEmail",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"bind_email"}),this.state.emailForBind&&Object(C.isValidEmail)(this.state.emailForBind)?this.state.bindEmailCaptcha?6!==String(this.state.bindEmailCaptcha).length||isNaN(this.state.bindEmailCaptcha)?v.Message.info("请输入正确格式的验证码"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForEmailBind",captcha:this.state.bindEmailCaptcha},e=>{if("绑定成功"===e){const{bhAccount:e}=this.state;e.email=this.state.emailForBind.split("@").map((e,t)=>0===t?e=e.slice(0,3)+e.slice(4).replace(/./g,"*"):e).join("@"),this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({openChangePasswordModalAfterAction:!1,showBindEmailModal:!1,bhAccount:e,email:this.state.emailForBind}),this.state.openChangePasswordModalAfterAction&&this.state.handleOnClickShowChangePasswordModal()}v.Message.info(e)}):v.Message.info("请输入验证码"):v.Message.info("请输入正确格式的邮箱地址"))),m()(this,"handleOnKeyDownPasswordInput",e=>{e.persist(),"Enter"===e.key&&(this.state.hasRegister?this.handleOnClickLogin():this.confirmPasswordInputRef.current.focus())}),m()(this,"handleOnKeyDownSignUpCaptchaInput",e=>{e.persist(),"Enter"===e.key&&this.passwordInputRef.current.focus()}),m()(this,"handleOnKeyDownEmailForChangePasswordInput",e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForChangePassword(),this.changePasswordCaptchaInputRef.current.focus())}),m()(this,"handleOnKeyDownChangePasswordCaptchaInput",e=>{e.persist(),"Enter"===e.key&&this.passwordForChangeInputRef.current.focus()}),m()(this,"handleOnKeyDownConfirmPasswordInput",e=>{const{isResettingPassword:t}=this.state;"Enter"===e.key&&(t?this.handleOnClickReset():this.handleOnClickLogin())}),m()(this,"handleOnKeyDownPasswordForChangeInput",e=>{e.persist(),"Enter"===e.key&&this.confirmPasswordForChangeInputRef.current.focus()}),m()(this,"handleOnKeyDownConfirmPasswordForChangeInput",e=>{"Enter"===e.key&&this.handleOnClickValidateCaptchaForChangePassword()}),m()(this,"handleOnClickShowPassword",()=>{this.setState({showPassword:!this.state.showPassword})}),m()(this,"refreshPaymentIframe",()=>{this.setState({paymentIframeKey:this.state.paymentIframeKey+1})}),m()(this,"renderLoginUI",()=>{const{step:e,password:t,showPassword:a,logging:n,hasLogin:i,bilibiliAccount:o,handleOnClickShowChangePasswordModal:s}=this.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},l.a.createElement(v.Button,{disabled:i,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1})}},"以",l.a.createElement(v.Image,{url:o.face,className:"avatar"}),"登录",l.a.createElement(v.Icon,{size:16,icon:"bilibilihelper"}),"账号")),l.a.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},l.a.createElement("div",{className:"welcome-topic"},"正在以 ",l.a.createElement("b",null,o.name)," 身份登录(๑•̀ㅂ•́)و✧",l.a.createElement("br",null),l.a.createElement("b",{className:"important"},"正在登录助手账号，请勿使用b站账号密码")),l.a.createElement("div",{className:"password-box"},l.a.createElement(v.Input,{ref:this.passwordInputRef,name:"password",type:a?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"请输入密码进行登录",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t}),l.a.createElement("div",{className:"extra-box"},l.a.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},l.a.createElement(v.CheckboxRect,{active:a})," 显示密码"),l.a.createElement("p",{className:"description"}))),l.a.createElement(v.Button,{disableEvent:!1,disabled:!t||t.length<6||n,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickLogin},"登录"),l.a.createElement("div",{className:"extra-box"},l.a.createElement("a",{className:"forget-password-btn",onClick:s},"忘记密码"))))}),m()(this,"renderRegisterUI",()=>{const{step:e,password:t,confirmPassword:a,showPassword:n,logging:i,resettingPassword:o,emailForSignUp:s,hasRegister:r,bilibiliAccount:c}=this.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},l.a.createElement(v.Button,{disabled:r,className:"primary",onClick:()=>{this.signUpEmailInputRef.current.focus(),this.setState({step:1})}},"以",l.a.createElement(v.Image,{url:c.face,className:"avatar"}),"注册",l.a.createElement(v.Icon,{size:16,icon:"bilibilihelper"}),"账号")),l.a.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},l.a.createElement("div",{className:"welcome-topic"},"正在以 ",l.a.createElement("b",null,c.name)," 身份注册助手账号"),l.a.createElement("div",{className:"email-wrapper"},l.a.createElement(v.Input,{ref:this.signUpEmailInputRef,name:"emailForSignup",type:"email",className:["email-input","input"].join(" "),placeholder:"请输入想要绑定的邮箱",onChange:this.handleOnChangeSignUpEmail,onKeyDown:this.handleOnKeyDownEmailForSignUp,value:s,minlength:6})),l.a.createElement("div",{className:"captcha-wrapper"},l.a.createElement(v.Input,{ref:this.signUpEmailCaptchaInputRef,name:"signUpEmailCaptcha",type:"text",className:["sign-up-email-captcha-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"请输入验证码",onChange:this.handleOnChangeSignUpCaptcha,onKeyDown:this.handleOnKeyDownSignUpCaptchaInput,value:this.state.captchaForSignUp,size:6}),l.a.createElement(v.Button,{className:"primary",onClick:this.handleOnClickGetCaptchaForSignUp,disabled:!this.state.emailForSignUp||this.state.getSignUpCaptchaCooling,disableEvent:!1},this.state.getSignUpCaptchaCooling?`请等待${this.state.signUpCaptchaCountDown}秒`:"获取验证码")),l.a.createElement("div",{className:"password-box"},l.a.createElement(v.Input,{ref:this.passwordInputRef,type:n?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"请输入密码，长度不小于6位",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t})),l.a.createElement("div",{className:"confirm-password-box"},l.a.createElement(v.Input,{ref:this.confirmPasswordInputRef,type:n?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"请重复输入一遍密码",onChange:this.handleOnChangeConfirmPassword,onKeyDown:this.handleOnKeyDownConfirmPasswordInput,value:a}),l.a.createElement("div",{className:"extra-box"},l.a.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},l.a.createElement(v.CheckboxRect,{active:n})," 显示密码"),l.a.createElement("p",{className:"description"},"请勿使用b站账号密码"))),l.a.createElement(v.Button,{disableEvent:!1,disabled:!t||t.length<6||!a||a.length<6||i||o,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickRegister},"注册")))}),m()(this,"renderTitle",()=>{const{step:e,hasRegister:t}=this.state;let a="登录";return t||(a="注册助手账号"),0===e&&(a="请选择登录方式"),a})}componentDidMount(){chrome.runtime.onMessage.addListener((e,t,a)=>{const{action:n}=e;return"openLoginModal"===n?this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowLoginModal):"openBindEmailModal"===n?this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowBindEmailModal):"payComplete"===n?(v.Message.info("收到来自支付页的订单确认请求，正在确认请稍后"),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryTradeNoComplete",outTradeNo:e.outTradeNo},e=>{e&&"10000"===e.code?(v.Message.error("订单确认完成，正在更新用户数据，请耐心等待"),this.state.handleOnClickHidePaymentModal(),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"initBHAccountAfterSignUp"},e=>{v.Message.error("用户数据更新完成，感谢惠顾~");const{hasLogin:t,bhAccount:a}=e;this.setState({hasLogin:t,bhAccount:a})})):v.Message.error(`订单异常 (${e.code}): ${e.sub_msg}，请联系客服`)})):"useRedeem"===n&&chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"useRedeem",code:e.code},e=>{"兑换成功"===e?(v.Message.error("兑换码激活成功，正在更新用户数据，请耐心等待"),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"initBHAccountAfterSignUp"},e=>{v.Message.error("用户数据更新完成，感谢惠顾~");const{hasLogin:t,bhAccount:a}=e;this.setState({hasLogin:t,bhAccount:a})})):v.Message.error("兑换码激活失败: "+e)}),!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{const{hasLogin:t,bilibiliAccount:a,downloadingSettings:n,hasRegister:i}=e;this.setState({hasLogin:t,bilibiliAccount:a,downloadingSettings:n,hasRegister:i})}),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e})}),location.href.match(/[?&]?showPaymentModal=1&?/)&&!this.urlParamHasUsedForShowPaymentModal&&(this.urlParamHasUsedForShowPaymentModal=!0,this.state.handleOnClickShowPaymentModal())}render(){const{location:e}=this.props,{states:t,step:a,password:n,confirmPassword:i,showPassword:o,logging:s,paymentIframeKey:c,emailForChangePassword:p,email:h,emailForBind:d,bindEmailCaptcha:g,getBindEmailCaptchaCooling:m,bindEmailCaptchaCountDown:u,hasLogin:b,hasRegister:f,bilibiliAccount:C,needRefreshPage:y,showPaymentModal:w,loginModalShow:S,resetModalShow:x,signOutModalShow:k,announcementModalShow:M,showChangePasswordModal:O,handleOnClickHideChangePasswordModal:L,showBindEmailModal:P,handleOnClickHideBindEmailModal:A,handleOnClickHideSignOutModal:I,handleOnClickHideAnnouncementModal:B}=this.state;return l.a.createElement(F.Provider,{value:this.state},l.a.createElement(Dt,null,l.a.createElement(Tt,null,l.a.createElement("ul",null,Rt.map(({key:t,path:a})=>l.a.createElement("li",{key:a,className:e.pathname===a?"active":null,onClick:()=>this.handleOnClickNavigation(a)},Object(r.a)("config_main_navigation_"+t))))),l.a.createElement(_t,null,l.a.createElement(E.c,{location:e},Rt.map(({key:e,path:t,component:a})=>l.a.createElement(E.a,{key:e,path:t,exact:!0,render:()=>l.a.createElement(a,null)}))))),l.a.createElement(Ut,null,l.a.createElement(v.Modal,{open:S,className:"login-modal",title:this.renderTitle(),buttons:l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"description"},l.a.createElement("span",null,l.a.createElement("b",{style:{marginRight:4}},"※"),"点击登录即表示您已同意",l.a.createElement("a",{href:"https://bilibilihelper.com/licence.html",target:"_blank",rel:"noreferrer"},"《使用条款》"),"和",l.a.createElement("a",{href:"https://bilibilihelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"《隐私协议》"))),l.a.createElement(v.Button,{onClick:this.state.handleOnClickHideLoginModal},"取消"))},C?f?this.renderLoginUI():this.renderRegisterUI():y?l.a.createElement(v.Button,{onClick:this.state.handleOnClickRefresh},"请登录",l.a.createElement(v.Icon,{size:16,icon:"bilibili"}),"账号后刷新本页面"):f?l.a.createElement(v.Button,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},l.a.createElement("div",null,"请先登录",l.a.createElement(v.Icon,{size:16,icon:"bilibili"}),"账号再登录助手账号")):l.a.createElement(v.Button,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},l.a.createElement("div",null,"请先登录",l.a.createElement(v.Icon,{size:16,icon:"bilibili"}),"账号再注册助手账号"))),l.a.createElement(v.Modal,{open:k,className:"sign-out-modal",onClickMask:I,title:"要关闭同步和个性化功能吗？",buttons:l.a.createElement("div",{className:"footer"},l.a.createElement(v.Button,{className:"border",onClick:I},"取消"),l.a.createElement(v.Button,{className:"primary",onClick:this.handleOnClickSignOut},"退出"))},l.a.createElement("p",null,"执行此操作会使您退出 ",l.a.createElement(v.Icon,{icon:"bilibilihelper",size:16})," 帐号。"),l.a.createElement("p",null,"您的特别关注以及其他设置将不再保持同步。")),l.a.createElement(v.Modal,{open:M,className:"public-beta-announcement",onClickMask:B,title:"感谢使用 2.0+ 新版哔哩哔哩助手",buttons:l.a.createElement("div",{className:"footer"},l.a.createElement(v.Button,{className:"primary hide-announcement-btn",onClick:B},"知道啦~"))},l.a.createElement("p",null,"目前我们已经结束于开放测试阶段，这个阶段从2月份开始持续了好几个月。"),l.a.createElement("p",null,"期间我们逐步增加了一些功能，做了各种优化，并且保持所有功能的免费使用。"),l.a.createElement("p",null,"现在部分功能需要付费解锁后才能使用"),l.a.createElement("p",null,"并且1.0+版本中的所有功能永远不会进行收费"),l.a.createElement("p",null,"带有",l.a.createElement(v.Icon,{icon:"cat-paw",size:16}),"标志的功能为收费或者可解锁高级特性的功能"),l.a.createElement("br",null),l.a.createElement("p",null,"※ 已经通过爱发电支持赞助的小伙伴请查阅b站私信，助手猫已经发放了兑换码哦",l.a.createElement("br",null),"点击续订会员界面右上角进行兑换。")),l.a.createElement(v.Modal,{open:P,className:"bind-email-modal",title:"绑定邮箱",buttons:l.a.createElement("div",{className:"footer"},l.a.createElement(v.Button,{className:"border",onClick:A},"关闭"),l.a.createElement(v.Button,{className:"primary",onClick:this.handleOnClickValidateCaptchaForBindEmail,disabled:!this.state.bindEmailCaptcha||!d,disableEvent:!1},"确认绑定"))},l.a.createElement(v.Input,{ref:this.bindEmailInputRef,name:"bindEmail",type:"email",className:["bind-email-input","input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"请输入想要绑定邮箱",onChange:this.handleOnChangeBindEmail,onKeyDown:this.handleOnKeyDownBindEmailInput,value:d,minlength:6}),l.a.createElement("div",{className:"captcha-wrapper"},l.a.createElement(v.Input,{ref:this.bindEmailCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["captcha-input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"请输入验证码",onChange:this.handleOnChangeBindEmailCaptcha,onKeyDown:this.handleOnKeyDownBindEmailCaptchaInput,value:g,size:6}),l.a.createElement(v.Button,{className:"primary",onClick:this.handleOnClickGetCaptchaForBindEmail,disabled:!this.state.emailForBind||m,disableEvent:!1},m?`请等待${u}秒`:"获取验证码"))),l.a.createElement(v.Modal,{open:O,className:"change-password-modal",title:b?"修改密码":"重置密码",buttons:l.a.createElement("div",{className:"footer"},l.a.createElement(v.Button,{className:"border",onClick:L},"关闭"),l.a.createElement(v.Button,{className:"primary",onClick:b?this.handleOnClickValidateCaptchaForChangePassword:this.handleOnClickValidateCaptchaForResetPassword,disabled:!(this.state.captchaForChangePassword&&this.state.passwordForChange&&this.state.confirmPasswordForChange&&this.state.emailForChangePassword),disableEvent:!1},b?"确认修改":"确认重置"))},l.a.createElement("div",{className:"email-wrapper"},l.a.createElement(v.Input,{ref:this.changePasswordEmailInputRef,name:"emailForChangePassword",type:"email",className:["email-input","input"].join(" "),placeholder:b&&this.state.bhAccount?this.state.bhAccount.email:"请输入绑定邮箱",onChange:this.handleOnChangeChangePasswordEmail,onKeyDown:this.handleOnKeyDownEmailForChangePasswordInput,value:p,minlength:6})),l.a.createElement("div",{className:"captcha-wrapper"},l.a.createElement(v.Input,{ref:this.changePasswordCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["bind-email-captcha-input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"请输入验证码",onChange:this.handleOnChangePasswordChangeCaptcha,onKeyDown:this.handleOnKeyDownChangePasswordCaptchaInput,value:this.state.captchaForChangePassword,size:6}),l.a.createElement(v.Button,{className:"primary",onClick:b?this.handleOnClickGetCaptchaForChangePassword:this.handleOnClickGetCaptchaForResetPassword,disabled:!this.state.emailForChangePassword||this.state.getChangePasswordCaptchaCooling,disableEvent:!1},this.state.getChangePasswordCaptchaCooling?`请等待${this.state.changePasswordCaptchaCountDown}秒`:"获取验证码")),l.a.createElement("div",{className:"password-box"},l.a.createElement(v.Input,{ref:this.passwordForChangeInputRef,type:o?"text":"password",className:["password-input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"请输入密码，长度不小于6位",onChange:this.handleOnChangePasswordForChange,onKeyDown:this.handleOnKeyDownPasswordForChangeInput,value:this.state.passwordForChange})),l.a.createElement("div",{className:"confirm-password-box"},l.a.createElement(v.Input,{ref:this.confirmPasswordForChangeInputRef,type:o?"text":"password",className:["password-input"].join(" "),placeholder:"请重复输入一遍密码",onChange:this.handleOnChangeConfirmPasswordForChange,onKeyDown:this.handleOnKeyDownConfirmPasswordForChangeInput,value:this.state.confirmPasswordForChange}),l.a.createElement("div",{className:"extra-box"},l.a.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},l.a.createElement(v.CheckboxRect,{active:o})," 显示密码"),l.a.createElement("p",{className:"description"},"请勿使用b站账号密码")))),l.a.createElement(v.Modal,{open:w,className:"payment-iframe-modal"},l.a.createElement("iframe",{key:c,src:w?t&&t.paymentIframe:null}),l.a.createElement(v.Icon,{className:"close-payment-modal-btn",icon:"close",size:16,onClick:this.state.handleOnClickHidePaymentModal}))))}},m()(Bt,"propTypes",{children:S.a.any,history:S.a.object,location:S.a.object}),Nt)),Kt=p.b`
  .bilibili-helper-2-icon-cat-paw {
    margin: 0 8px 0 4px;
    color: var(--bilibili-pink);
    transform: rotate(-35deg);
    zoom: .74;
  }
`;class $t extends l.a.Component{constructor(e){super(e)}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/config/home"})}render(){return l.a.createElement(d.a,null,l.a.createElement(h.a,null),l.a.createElement(Kt,null),l.a.createElement(f,null),l.a.createElement(Ht,null))}}let qt=0,Yt=!1;const Gt=document.getElementById("root"),Qt=()=>new i.a(e=>{new i.a(e=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},t=>{console.log("statuses",t),e(!!t.bilibiliHelperAccount)})}).then(t=>{console.log(t),t?(Object(r.b)().then(()=>{Object(s.render)(l.a.createElement($t,null),Gt,c.a)}),e(!0)):qt<10&&(Yt||(Yt=!0,Object(s.render)("初始化中，请稍后",Gt)),++qt,setTimeout(Qt,1e3))})});Qt()},50:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));const n={superAdmin:"猫国设计师",admin:"猫国城管",catForever:"猫国大护法",catVIPSuper:"助手猫培育师",catVIP:"助手猫观察员",catWatcher:"助手猫瞭望者",catVIPHonor:"猫国荣誉市民",catAirborneCommander:"空降指挥官",catAirbornePilot:"喵营飞行员"},i=["superAdmin","admin","catForever","catVIPSuper","catVIP"],o=["superAdmin","admin","catForever","catVIPSuper"]},61:function(e,t,a){"use strict";a(19);var n=a(23);a.d(t,"a",(function(){return n.a}))},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=a(3).c`
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
`},80:function(e,t,a){"use strict";var n=a(50);a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c}))},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3),i=a(19),o=a(75);const l=n.b`
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
    ${o.a};
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
`},92:function(e,t,a){"use strict";var n=a(49),i=a.n(n),o=a(1),l=a.n(o);class s{constructor(...e){l()(this,"x",void 0),l()(this,"y",void 0),l()(this,"__valid",!1),l()(this,"__needUpdate",!0),l()(this,"set",(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof s){const{x:t,y:a}=e[0];this.set(t,a)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this}),l()(this,"setX",e=>(this.x=e,this.__needUpdate=!0,this)),l()(this,"setY",e=>(this.y=e,this.__needUpdate=!0,this)),l()(this,"add",e=>(this.x+=e.x,this.y+=e.y,this)),l()(this,"addX",e=>(this.x+=e,this)),l()(this,"addY",e=>(this.y+=e,this)),l()(this,"sub",e=>(this.x-=e.x,this.y-=e.y,this)),l()(this,"subX",e=>this.addX(-e)),l()(this,"subY",e=>this.addY(-e)),l()(this,"multiply",e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this)),l()(this,"multiplyX",e=>(0===e?this.x=1/0:this.x*=e,this)),l()(this,"multiplyY",e=>(0===e?this.y=1/0:this.y*=e,this)),l()(this,"divide",e=>0===e?this.set(1/0,1/0):this.multiply(1/e)),l()(this,"divideX",e=>this.multiplyX(1/e)),l()(this,"divideY",e=>this.multiplyY(1/e)),l()(this,"dot",e=>this.x*e.x+this.y+e.y),l()(this,"equal",(...e)=>{if("number"==typeof e[0]&&"number"==typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof s){const{x:t,y:a}=e[0];return this.equal(t,a)}return!1}),l()(this,"normalize",()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)}),l()(this,"negtiveX",()=>(this.x*=-1,this)),l()(this,"negtiveY",()=>(this.y*=-1,this)),l()(this,"negtive",()=>this.negtiveX().negtiveY()),l()(this,"round",()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this)),l()(this,"roundX",()=>(this.x=Math.round(this.x),this)),l()(this,"roundY",()=>(this.y=Math.round(this.y),this)),l()(this,"floor",()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this)),l()(this,"floorX",()=>(this.x=Math.floor(this.x),this)),l()(this,"floorY",()=>(this.y=Math.floor(this.y),this)),l()(this,"ceil",()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this)),l()(this,"ceilX",()=>(this.x=Math.ceil(this.x),this)),l()(this,"ceilY",()=>(this.y=Math.ceil(this.y),this)),l()(this,"trunc",()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this)),l()(this,"truncX",()=>(this.x=Math.trunc(this.x),this)),l()(this,"truncY",()=>(this.y=Math.trunc(this.y),this)),l()(this,"clone",()=>new this.constructor(this.x,this.y)),l()(this,"toArray",()=>[this.x,this.y]),l()(this,"toObject",()=>({x:this.x,y:this.y})),l()(this,"toString",(e="x",t="y")=>`${e}${this.x}${t}${this.y}`),this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=i()(this.x)&&i()(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}a.d(t,"a",(function(){return r}));class r extends s{constructor(...e){super(...e)}}}});