(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var r=n(40),i=n.n(r),o=n(80);const a=(e,t=o.c)=>!(!e||!e.identities||0===e.identities.length)&&e.identities.map(({name:e,to:n,hasDateTimeLimit:r})=>!(!t.includes(e)||!(n&&n>i()())&&r)).filter(Boolean).length>0,u=e=>a(e,o.a)},146:function(e,t,n){"use strict";const r=()=>!!(chrome&&chrome.webstorePrivate&&chrome.webstorePrivate.beginInstallWithManifest3)||!!~navigator.userAgent.toLowerCase().indexOf("360ee"),i=()=>{if(external&&external.GetRunPath&&external.GetSID){let e=external.GetRunPath(external.GetSID(window));return e=e.toLowerCase(),e.indexOf("360se.exe")>-1||e.indexOf("360ent")>-1}return!1},o=(e=navigator.userAgent.toLowerCase())=>!!e.match(/edg/g),a=()=>{try{return"undefined"!=typeof InstallTrigger}catch(e){return!1}},u=(e=navigator.userAgent.toLowerCase())=>e.indexOf("qqbrowser")>-1?"QQ浏览器":e.indexOf("se")>-1?"搜狗浏览器":e.indexOf("2345Explorer")>-1?"2345浏览器":e.indexOf("aoyou")>-1?"遨游浏览器":e.indexOf("theworld")>-1?"世界之窗浏览器":e.indexOf("worldchrome")>-1?"世界之窗极速浏览器":e.indexOf("greenbrowser")>-1?"绿色浏览器":e.indexOf("opera")>-1?"Opera":e.indexOf("taobrowser")>-1?"淘宝浏览器":e.indexOf("baidu")>-1?"百度浏览器":"未知";n.d(t,!1,(function(){return r})),n.d(t,!1,(function(){return i})),n.d(t,!1,(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,!1,(function(){return u}))},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(47);const r={ArrowUp:"↑",ArrowRight:"→",ArrowDown:"↓",ArrowLeft:"←"},i=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft","AltRight","MetaLeft","MetaRight","Enter","Space","CapsLock","Tab"],o={Minus:"-",Equal:"=",Backquote:"`",BracketLeft:"[",BracketRight:"]",Backslash:"\\",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/"},a=(e,t,n,a,u,c)=>{let l=[];return n&&l.push("Control"),a&&l.push("Shift"),u&&l.push("Command"),c&&l.push("Alt"),t=r[e]?e:/Key[A-Z]/.test(e)?e.replace("Key","").toLowerCase():/Digit(\d)/.test(e)?e.replace("Digit",""):o[e]?o[e]:t.toLowerCase(),!(i.includes(e)||!e||!t)&&(l.push(t),l.join(" + "))}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>{const n=document.createElement("textarea");n.value=e,n.style.top="-100000px",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{const e=document.execCommand("copy");t&&t instanceof Function&&t(e)}catch(e){t&&t instanceof Function&&t(!1)}n.remove()}},246:function(e,t,n){"use strict";n(71)},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),i=n.n(r),o=n(94),a=n.n(o);n(92);const u=e=>{const t=e=>{const t=document.querySelectorAll(e);return t.length>0&&t};if("string"==typeof e){const n=t(e);return!!(n&&n.length>0)&&n[0]}if(e instanceof Array){if(a()(e.map(e=>t(e))).length>0)return a()(e.map(e=>t(e)))[0];console.error(`No target of name: ${e}!`)}},c=(e,t=500,n=15)=>{-1===n&&t<1e3&&(t=1e3);let r=0;const o=(t,i)=>{let a=setInterval(()=>{const c=u(e);if(c)clearInterval(a),t(c);else if(r<n||-1===n){++r;i*r>=3e4&&(clearInterval(a),o(t,i=1e3))}else clearInterval(a),console.info("Not find container "+e),t()},i)};return new i.a(e=>{o(e,t)})}},282:function(e,t){},35:function(e,t,n){"use strict";var r=n(6),i=n.n(r),o=n(16),a=n.n(o),u=n(7);const c={120:"4K",116:"1080P 60帧",112:"1080P 高码率",80:"1080P 高清",64:"720P 高清",32:"480P 清晰",16:"360P 流畅",0:"自动"},l=[120,116,112,80,64,32,16],s=async()=>{if(!Number(document.querySelector(".bilibili-player-video-quality-menu .bui-select-item-active").dataset.value)){const e=a()(document.querySelectorAll(".bilibili-player-video-quality-menu .bui-select-item")),t=document.querySelector(".bilibili-player-video-quality-menu .bui-select-item .bilibili-player-auto-hidden").textContent.replace(/[()]/g,""),n=e.find(e=>e.querySelector(".bilibili-player-video-quality-text").textContent===t);return Number(n?n.dataset.value:n)}},d=async(e=!0)=>e?i.a.resolve(document.querySelector("#bilibiliPlayer .bilibili-player-video video")):await Object(u.interval)("#bilibiliPlayer .bilibili-player-video video"),f=e=>document.querySelector(`.bilibili-player-video-btn-speed-menu [data-value="${+e.toFixed(2)}"]`),p=async(e,t=!0)=>t?i.a.resolve(document.querySelector(e)):await Object(u.interval)(e,1e3,1/0),b=async(e=!0,t=!1)=>{let n=".bilibili-player-video-btn.bilibili-player-video-btn-widescreen:not(.closed)";return t&&(n=".bilibili-player-video-btn.bilibili-player-video-btn-widescreen"),await p(n,e)},m=async(e=!0,t=!1)=>{let n=".bilibili-player-video-btn.bilibili-player-video-web-fullscreen:not(.closed)";return t&&(n=".bilibili-player-video-btn.bilibili-player-video-web-fullscreen"),await p(n,e)},h=async(e=!0,t=!1)=>{let n=".bilibili-player-video-btn.bilibili-player-video-btn-fullscreen:not(.closed)";return t&&(n=".bilibili-player-video-btn.bilibili-player-video-btn-fullscreen"),await p(n,e)},g=async(e=!0,t=!1)=>{const n=await p('.bui-switch-input[type="checkbox"]',e);return n?t?i.a.resolve(n.checked?n:null):i.a.resolve(n.checked?null:n):null},v=e=>{let t=0,n=document.querySelector("#bilibiliSpeedTip");if(n)n.innerHTML=`＞＞ ${e.toFixed(2)}x`,clearTimeout(t);else{n=document.createElement("div"),n.id="bilibiliSpeedTip",n.innerHTML=`＞＞ ${e.toFixed(2)}x`;document.querySelector(".bilibili-player-video-wrap").appendChild(n)}t=setTimeout(()=>{n&&n.remove()},1e3)};n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"i",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"j",(function(){return v}))},47:function(e,t,n){"use strict";n(6),chrome.extension.getURL("html/config.html"),chrome.extension.getURL("html/popup.html"),n(48);var r=n(146);n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return u}));const i=(e,t=(()=>{}))=>{((e,t=(()=>{}))=>{chrome.tabs.create(e,t)})({url:e},t)},o=e=>chrome.extension.getURL(e),a=(e,t,n)=>(Object(r.a)()&&delete t.buttons,chrome.notifications.create(e,t,n)),u=/Mac OS/.test(navigator.userAgent)},48:function(e,t,n){"use strict";n.d(t,"f",(function(){return R})),n.d(t,"k",(function(){return q})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return M})),n.d(t,"h",(function(){return I})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return T})),n.d(t,"g",(function(){return $})),n.d(t,"n",(function(){return A})),n.d(t,"l",(function(){return j})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return U})),n.d(t,"c",(function(){return H})),n.d(t,"m",(function(){return D}));var r=n(28),i=n.n(r),o=n(29),a=n.n(o),u=n(15),c=n.n(u),l=n(14),s=n.n(l),d=n(12),f=n.n(d),p=n(11),b=n.n(p),m=n(1),h=n.n(m),g=n(46),v=n.n(g),y=n(34),w=n.n(y),S=n(41),x=n.n(S);n(146);function L(e,t){var n=b()(e);if(f.a){var r=f()(e);t&&(r=r.filter((function(t){return s()(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):c.a?a()(e,c()(n)):L(Object(n)).forEach((function(t){i()(e,t,s()(n,t))}))}return e}const R=e=>{const t=e.querySelector(["#v_multipage a.on","#multi_page .cur-list li.on a","#eplist_module .list-wrapper ul .cursor"].join(", ")),n=t?t.innerText:"",r=e.querySelector(["#viewbox_report h1",".header-info h1",".media-wrapper > h1","h1.video-title",".bilibili-player-video-top-title",".bilibili-player-video-suspension-bar-title-text"].join(", "));return`${r?r.getAttribute("title")||r.textContent:""}${n?"_"+n:""}`.replace(/\s/g,"").replace(/[|"*?:<>\s~/]/g,"_")},q=()=>!!/^\/((?:video\/(bv.+|BV.+|av\d+))|festival\/2021bnj|blackboard\/newplayer\.html|player\.html|bangumi\/play|cheese\/play|medialist\/play)/.exec(window.location.pathname),P=()=>!!/^\/((?:blanc\/)?\d+|record\/(R.+))/.exec(window.location.pathname),M=()=>!!/^\/record\/(R.+)/.exec(window.location.pathname),I=()=>!!document.querySelector('[data-module="live-non-revenue-player"]'),O=(e,t)=>{t?t.headers instanceof Headers?t.headers.append("From","bilibili-helper"):t.headers instanceof Object?t.headers=new Headers(C(C({},t.headers),{},{From:"bilibili-helper"})):t.headers=new Headers({From:"bilibili-helper"}):t={headers:new Headers({From:"bilibili-helper"})};const n=new x.a(e,"");let r=n.query;return r&&r.match(/requestFrom=bilibili_helper_2$/)||(r+=r?"&":"?",r+="requestFrom=bilibili_helper_2",n.set("query",r,e=>e)),fetch(decodeURIComponent(n.href),t).catch(t=>console.error(e,t))},T=(e,t={})=>`${e}?${b()(t).map(e=>`${e}=${t[e]}`).join("&")}`,$=()=>{},A=function(e){return function(t){const{initiator:n,requestHeaders:r,url:i,type:o,tabId:a}=t,u=!w()(v()(r,({name:e,value:t})=>"from"===e.toLowerCase()&&"bilibili_helper_2"===t.toLowerCase())),c=!!i&&!!i.match(/^https?:\/\/(?:.+?).bilibili.com\/?/)&&"main_frame"===o,l=(n&&/^chrome-extension:\/\//.test(n)||-1===a)&&!c;if(!!i.match(/passWrapper=true/)||!u&&!l)return e instanceof Function?e(t):void console.error("webRequestCallbackWrapper","Wrong callback function")}},j=(e="font_1690169_6jusjv3fcy3")=>{if(!document.getElementById("iconfontStyle"+e)){const t=document.createElement("link");t.setAttribute("id","iconfontStyle"+e),document.head.appendChild(t),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",`https://at.alicdn.com/t/${e}.css`)}},k="fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",_=JSON.parse('{"1":13,"2":12,"3":46,"4":31,"5":43,"6":18,"7":40,"8":28,"9":5,"f":0,"Z":1,"o":2,"d":3,"R":4,"X":6,"Q":7,"D":8,"S":9,"U":10,"m":11,"y":14,"C":15,"k":16,"r":17,"z":19,"B":20,"q":21,"i":22,"v":23,"e":24,"Y":25,"a":26,"h":27,"b":29,"t":30,"x":32,"s":33,"W":34,"p":35,"H":36,"n":37,"J":38,"E":39,"j":41,"L":42,"V":44,"G":45,"g":47,"u":48,"M":49,"T":50,"K":51,"N":52,"P":53,"A":54,"w":55,"c":56,"F":57}'),B=[11,10,3,8,4,6],F=177451812,V=8728348608,E=e=>{if("number"==typeof e){e=(e^F)+V;const t=["B","V","1"," "," ","4"," ","1"," ","7"," "," "];for(let n=0;n<6;++n)t[B[n]]=k[Math.floor(e/58**n)%58];return t.join("")}console.warn("wrong avid:"+e)},U=e=>{10===e.length&&"bv"!==String(e).slice(0,2).toLowerCase()&&(e="BV"+e);let t=0;for(let n=0;n<6;++n)t+=_[e[B[n]]]*58**n;return t-V^F},H=e=>e.replace(/(["'&<>])/g,e=>{switch(e){case'"':return"&quot;";case"'":return"&apos;";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}}),D=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var r=n(6),i=n.n(r),o=n(13),a=n.n(o);const u=()=>new i.a(e=>{window.i18nMap||(chrome.runtime.getBackgroundPage?chrome.runtime.getBackgroundPage(t=>{window.i18nMap=t.i18nMap,e()}):chrome.runtime.sendMessage({target:"language",event:"getI18nMap"},t=>{window.i18nMap=t,e()}))});let c,l=a.a.get("bilibili-helper-2-language")||{},s="zh-CN";const d=(e,t=null)=>{if(c||(c=setTimeout(()=>{l=a.a.get("bilibili-helper-2-language")||{},s="zh-CN",c=null},1e3)),"auto"===s||s===chrome.i18n.getUILanguage())return chrome.i18n.getMessage(e,t);if(window.i18nMap&&s in window.i18nMap){const n=window.i18nMap[s][e];if(n){const{message:e,placeholders:r={}}=n;let i=e;const o=/\$(.+?)\$/g.exec(e);if(o){o.slice(1).map(e=>e.toLowerCase()).map(n=>{n in r&&(i=e.replaceAll(new RegExp(`\\$${n}\\$`,"ig"),()=>t.shift()))})}return i}return""}return console.error(`not catch lang: ${s} in string ${e}`),""}},62:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));var r=n(45),i=n.n(r);const o=chrome.runtime.getManifest().version,a=()=>{console.log("%c 哔哩哔哩助手 version: "+o,"color: #00a1d6")},u=(e,t)=>{if(e===t)return 0;let n=e.split("."),r=t.split("."),o=Math.min(n.length,r.length);for(let e=0;e<o;e++){if(i()(n[e]||0)>i()(r[e]||0))return 1;if(i()(n[e]||0)<i()(r[e]||0))return-1}return n.length>r.length?1:n.length<r.length?-1:0}},7:function(e,t,n){"use strict";var r=n(62);n.d(t,"isBiggerThan",(function(){return r.b})),n.d(t,"version",(function(){return r.c}));var i=n(282);n.o(i,"__")&&n.d(t,"__",(function(){return i.__})),n.o(i,"av2bv")&&n.d(t,"av2bv",(function(){return i.av2bv})),n.o(i,"bv2av")&&n.d(t,"bv2av",(function(){return i.bv2av})),n.o(i,"copy2Clipboard")&&n.d(t,"copy2Clipboard",(function(){return i.copy2Clipboard})),n.o(i,"createTabByURL")&&n.d(t,"createTabByURL",(function(){return i.createTabByURL})),n.o(i,"encodeHTMLEntries")&&n.d(t,"encodeHTMLEntries",(function(){return i.encodeHTMLEntries})),n.o(i,"fetchFromHelper")&&n.d(t,"fetchFromHelper",(function(){return i.fetchFromHelper})),n.o(i,"generateShortcutValue")&&n.d(t,"generateShortcutValue",(function(){return i.generateShortcutValue})),n.o(i,"generateURLByParams")&&n.d(t,"generateURLByParams",(function(){return i.generateURLByParams})),n.o(i,"getFilename")&&n.d(t,"getFilename",(function(){return i.getFilename})),n.o(i,"getURL")&&n.d(t,"getURL",(function(){return i.getURL})),n.o(i,"inLiveRoom")&&n.d(t,"inLiveRoom",(function(){return i.inLiveRoom})),n.o(i,"initI18n")&&n.d(t,"initI18n",(function(){return i.initI18n})),n.o(i,"injectIconfont")&&n.d(t,"injectIconfont",(function(){return i.injectIconfont})),n.o(i,"interval")&&n.d(t,"interval",(function(){return i.interval})),n.o(i,"isMacOS")&&n.d(t,"isMacOS",(function(){return i.isMacOS})),n.o(i,"isSuperVIP")&&n.d(t,"isSuperVIP",(function(){return i.isSuperVIP})),n.o(i,"isVIP")&&n.d(t,"isVIP",(function(){return i.isVIP})),n.o(i,"isValidEmail")&&n.d(t,"isValidEmail",(function(){return i.isValidEmail})),n.o(i,"parseTime")&&n.d(t,"parseTime",(function(){return i.parseTime})),n.o(i,"videoPublishDescription")&&n.d(t,"videoPublishDescription",(function(){return i.videoPublishDescription})),n.o(i,"webRequestCallbackWrapper")&&n.d(t,"webRequestCallbackWrapper",(function(){return i.webRequestCallbackWrapper}));var o=n(55);n.d(t,"__",(function(){return o.a})),n.d(t,"initI18n",(function(){return o.b}));var a=n(88);n.d(t,"parseTime",(function(){return a.a})),n.d(t,"videoPublishDescription",(function(){return a.b}));var u=n(47);n.d(t,"createTabByURL",(function(){return u.b})),n.d(t,"getURL",(function(){return u.c})),n.d(t,"isMacOS",(function(){return u.d}));var c=n(48);n.d(t,"av2bv",(function(){return c.a})),n.d(t,"bv2av",(function(){return c.b})),n.d(t,"encodeHTMLEntries",(function(){return c.c})),n.d(t,"fetchFromHelper",(function(){return c.d})),n.d(t,"generateURLByParams",(function(){return c.e})),n.d(t,"getFilename",(function(){return c.f})),n.d(t,"inLiveRoom",(function(){return c.i})),n.d(t,"injectIconfont",(function(){return c.l})),n.d(t,"isValidEmail",(function(){return c.m})),n.d(t,"webRequestCallbackWrapper",(function(){return c.n}));var l=n(247);n.d(t,"interval",(function(){return l.a}));n(246);var s=n(148);n.d(t,"generateShortcutValue",(function(){return s.a}));var d=n(245);n.d(t,"copy2Clipboard",(function(){return d.a}));var f=n(126);n.d(t,"isSuperVIP",(function(){return f.a})),n.d(t,"isVIP",(function(){return f.b}))},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(40),i=n.n(r),o=n(45),a=n.n(o),u=n(67),c=n.n(u);const l=e=>{const t=a()(e/36e5,10),n=a()(e/6e4%60,10),r=a()(e/1e3%60,10),i=String(n).padStart(2,"0")+":"+String(r).padStart(2,"0");return t?String(t).padStart(2,"0")+":"+i:i},s=e=>{const t=new Date(e),n=i()()-e;if(n>1728e5){return[String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0")].join("-")}if(n>864e5){return"昨天 "+[String(t.getHours()).padStart(2,"0"),String(t.getMinutes()).padStart(2,"0")].join(":")}return r=t,c()(r).fromNow().replace("a few seconds ago","刚刚").replace(/(\d+) seconds ago/,"$1秒前").replace(/a minute ago/,"1分钟前").replace(/(\d+) minutes ago/,"$1分钟前").replace(/an hour ago/,"1小时前").replace(/(\d+) hours ago/,"$1小时前").replace(/a day ago/,"1天前").replace(/(\d+) days ago/,"$1天前").replace(/a month ago/,"1个月前").replace(/(\d+) months ago/,"$1个月前").replace(/a year ago/,"一年前").replace(/(\d+) years ago/,"$1年前");var r}}}]);