(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(e,n,i){"use strict";i.d(n,"a",(function(){return l}));var a=i(0),t=i(90),o=i(116),r=i.n(o),u=i(37),c=i(20);function l(e){const[n,i]=Object(a.useState)(null),o=Object(a.useCallback)((e=>{i((n=>{if(!n)return n;if("function"!=typeof e){const n=e;e=e=>{Object.assign(e,n)}}return Object(c.b)(n,e,(e=>{const i=e.map((e=>e.path[0])),a=Object(t.a)(n,i),o=Object(c.a)(a,e);browser.storage.local.set(o)}))}))}),[]);return Object(a.useEffect)((()=>{if(!e)return;const n=Object(u.a)(e,(e=>{i((n=>n?r()(e,Object(t.a)(n,Object.keys(e)))?n:Object(c.b)(n,(n=>{Object.assign(n,e)})):n))}),i);return()=>{n()}}),[e]),[n,o]}Object(c.c)()},104:function(e,n,i){"use strict";i.d(n,"a",(function(){return u})),i.d(n,"c",(function(){return c})),i.d(n,"d",(function(){return y})),i.d(n,"b",(function(){return h}));var a=i(237),t=i(31);const o=i.n(t)()("web-speech"),r=window.SpeechRecognition||window.webkitSpeechRecognition,u=!!r,c={"cnm-Hans-CN":"中文(简体)","en-US":"英语(美国)","ja-JP":"日语","ko-KR":"韩语","fr-FR":"法语","de-DE":"德语","ru-RU":"俄语"},l={"audio-capture":"你的电脑没有连接麦克风。","no-speech":"没有检测到语音。","not-allowed":"请在浏览器询问是否允许使用麦克风时选择“允许”。如果你之前选择过“禁止”，请点击浏览器地址栏左侧的锁或感叹号图标，然后将“麦克风”改为“允许”。如果浏览器从未询问过，则说明当前页面由于未知的原因不允许使用麦克风。","service-not-allowed":"你的浏览器当前不允许使用划词翻译的内置语音识别服务。",network:"网络出错，请检查你的网络连接。注意：划词翻译内置的语音转文字服务需要能连接外网才可使用。","language-not-supported":"你的浏览器不支持识别此语种。",aborted:"识别过程被中断了。","bad-grammar":"语法错误。"},s=/\S/;class m extends a.a{async microphone(e,n){var i;if(!u)return void(null===(i=n.onError)||void 0===i||i.call(n,new Error("Firefox 暂时不支持语音翻译功能，请在其它浏览器上使用。未来的版本中会添加对 Firefox 浏览器的支持，届时会另行通知。")));let a=!1,t=!1;const c=new r;c.lang=e,c.interimResults=!!n.onInterim,c.continuous=!n.stopOnFirstSentence,c.addEventListener("error",(e=>{var i;o("error 事件",e),"aborted"===e.error&&a||(a=!0,null===(i=n.onError)||void 0===i||i.call(n,new Error(`${l[e.error]||e.error+". "}${e.message||""}`)))}));const m=[];return c.addEventListener("result",(e=>{var i,a;const t=e.results[e.resultIndex],r=t[0].transcript;if(t.isFinal){const e=r.replace(s,(function(e){return e.toUpperCase()}));o("识别到一句完整的话：",e),null===(i=n.onSentence)||void 0===i||i.call(n,e),m.push(e)}else o("识别到一句话的临时结果：",r),null===(a=n.onInterim)||void 0===a||a.call(n,r)})),c.addEventListener("nomatch",(e=>{var i;o("nomatch 事件",e),t=!0,null===(i=n.onError)||void 0===i||i.call(n,new Error(`${this.service.name}无法准确识别你的语音，请确保在安静的环境中，并吐字清晰。`))})),c.addEventListener("end",(e=>{var i;o("end 事件",e,"识别出来的文本：",m,`是否已经中断：${a}`,`是否已经 nomatch：${t}`),a||t||null===(i=n.onStop)||void 0===i||i.call(n,m)})),c.start(),{stop:()=>{o("调用 stop 方法"),c.stop()},abort:()=>{o("调用 abort 方法"),a=!0,c.abort()}}}}const y={id:"default-speech",name:"划词翻译内置语音转文字",realtime:!0,defaultLang:"cnm-Hans-CN"},h=new m(y)},117:function(e,n,i){"use strict";function a(e,n=!0){return(n?e.slice(1):e).split("&").reduce(((e,n)=>{const[i,a]=n.split("=");return e[i]=a?decodeURIComponent(a):"",e}),{})}i.d(n,"a",(function(){return a}))},132:function(e,n,i){"use strict";i.d(n,"a",(function(){return p}));var a=i(0),t=i.n(a),o=i(664),r=i(59),u=i(254),c=i(665);const l="自动检测",s=[{zhName:l,pinyin:"zidongjiance"}].concat(u),m=o.a.ofType(),y=(e,{handleClick:n,modifiers:i})=>i.matchesPredicate?t.a.createElement(r.A,{onClick:n,active:i.active,key:e.zhName,text:e.zhName}):null,h=(e,n,i,a)=>{const t=e.toLowerCase();return a?n.zhName===t:n.zhName.includes(t)||n.pinyin.includes(t)};function p(e){const{children:n,addAuto:i,recentUse:o,size:p="small",maxHeight:d}=e,N="small"===p,z="large"===p,[g,f]=Object(a.useState)(i?s:u);Object(a.useEffect)((()=>{const e=i?s:u;if(!o||!o.length)return void f(e);const n=[...e];Object(c.a)(o,(e=>{const i=n.findIndex((n=>n.zhName===e));if(i<0)return;const a=n.splice(i,1)[0];n.unshift(a)})),f(n)}),[i,o]);const b=(()=>{if(!o||!o.length)return o;const e=o.indexOf("");if(e>=0){const n=[...o];return n[e]=l,n}return o})(),[w,E]=Object(a.useState)(null);return Object(a.useEffect)((()=>{const n=e.lang||l,i=g.find((e=>e.zhName===n))||null;E(i)}),[g,e.lang]),t.a.createElement(m,{className:"lang-select",onItemSelect:n=>{e.setLang(n.zhName===l?"":n.zhName)},activeItem:w,items:g,itemListRenderer:({filteredItems:e,itemsParentRef:n,query:i,renderItem:a})=>{const o=!i&&b&&b.length?b.map(((e,n)=>{const i=s.find((n=>n.zhName===e));if(i)return a(i,n)})).filter((e=>null!=e)):void 0,u=e.map(o?(e,n)=>{if(!(null==b?void 0:b.includes(e.zhName)))return a(e,n)}:a).filter((e=>null!=e));return t.a.createElement(r.y,{ulRef:n,large:z,style:{maxHeight:d}},o&&t.a.createElement(t.a.Fragment,null,t.a.createElement("li",{className:"bp3-menu-header"},t.a.createElement("h6",{className:"bp3-heading"},"最近使用")),o),t.a.createElement("li",{className:"bp3-menu-header"},t.a.createElement("h6",{className:"bp3-heading"},i?"搜索结果":"所有语言")),u.length?u:t.a.createElement("li",{className:"bp3-text-small",style:{paddingLeft:"8px"}},"没有搜索结果"))},itemRenderer:y,itemPredicate:h,inputProps:{placeholder:"使用拼音或中文搜索"},popoverProps:{usePortal:!1,modifiers:{preventOverflow:{boundariesElement:"viewport"}}}},n||t.a.createElement(r.d,{rightIcon:"caret-down",text:w?w.zhName:"请选择",small:N,large:z}))}},133:function(e,n,i){"use strict";i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return r})),i.d(n,"b",(function(){return u}));var a=i(104),t=i(88);const o=[a.d,t.c],r={"default-speech":a.b,TencentRealtime:t.b},u={"default-speech":a.c,TencentRealtime:t.a}},195:function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"a",(function(){return u}));var a=i(117),t=i(416);const o={"":"自动识别","中文(简体)":"中文"};function r(e,n="中文",i=""){return`https://fanyi.qq.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${o[i]||i}&hcfy_to=${o[n]||n}`}async function u(){if(window.location.origin+window.location.pathname!=="https://fanyi.qq.com/")return;const e=Object(a.a)(window.location.hash);if(!e.hcfy_text)return;const n=document.createElement("div");n.setAttribute("onclick",'if(window.qtv)window.postMessage("HCFY_QQ_READY", "*")'),document.body.appendChild(n);const i=window.setInterval((()=>{n.click()}),500);window.addEventListener("message",(function a(o){if("HCFY_QQ_READY"!==o.data)return;window.removeEventListener("message",a),window.clearInterval(i),document.body.removeChild(n);const r=document.querySelector('[node-type="source_language_list"]');if(r){const n=r.querySelectorAll("li span");Object(t.a)(n,(n=>{var i;if((null===(i=n.textContent)||void 0===i?void 0:i.trim())===e.hcfy_from)return document.querySelector('[node-type="source_language_button"]').click(),n.click(),!0}))}const u=document.querySelector('[node-type="target_language_list"]');if(u){const n=u.querySelectorAll("li span");Object(t.a)(n,(n=>{var i;if((null===(i=n.textContent)||void 0===i?void 0:i.trim())===e.hcfy_from)return document.querySelector('[node-type="target_language_button"]').click(),n.click(),!0}))}const c=document.querySelector('[node-type="source-textarea"]');c&&(c.value=decodeURIComponent(e.hcfy_text));const l=document.querySelector('[node-type="translate_button"]');l&&l.click()}))}},196:function(e,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"a",(function(){return r}));var a=i(292),t=i(117);function o(e,n="",i=""){const t=a[i],o=a[n];return t&&o?`http://fanyi.youdao.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${t}&hcfy_to=${o}`:`http://fanyi.youdao.com/#hcfy_text=${encodeURIComponent(e)}`}function r(){if(window.location.origin+window.location.pathname!=="http://fanyi.youdao.com/")return;const e=Object(t.a)(window.location.hash);if(!e.hcfy_text)return;const n=document.getElementById("inputOriginal");if(n&&(n.value=decodeURIComponent(e.hcfy_text)),!e.hcfy_from){const e=document.getElementById("transMachine");return void(e&&e.click())}const i=document.getElementById("languageSelect");if(!i)return;const a=e.hcfy_from+"2"+e.hcfy_to,o=i.querySelector(`li[data-value=${a}] a`);o&&o.click()}},198:function(e,n,i){"use strict";i.d(n,"b",(function(){return E})),i.d(n,"a",(function(){return O}));var a=i(0),t=i.n(a),o=i(59),r=i(4),u=i.n(r),c=i(10),l=i(90),s=i(3);const m={DeepLWeb:"https://www.deepl.com/translator"},y=Object(l.a)(s.a,["googleRegion"]);function h(e){const{api:n,onRetry:i}=e,a=m[n.id],[r]=Object(c.a)(y);return t.a.createElement(o.F,{description:t.a.createElement(t.a.Fragment,null,"查询结果时发生了网络错误，错误消息：",e.message,"。请确认您能否正常打开"," ",t.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},"GoogleWeb"===n.id?"https://translate.google."+(r?r.googleRegion:s.a.googleRegion):a||n.name),"。"),action:t.a.createElement(o.d,{small:!0,onClick:i},"重试")})}function p(e){return t.a.createElement(o.F,{description:t.a.createElement(t.a.Fragment,null,"划词翻译内部发生了未知错误，错误消息：",e.message),action:t.a.createElement("div",{style:{display:"flex",alignItems:"center"}},t.a.createElement(o.d,{small:!0,onClick:e.onRetry},"重试"),t.a.createElement("span",{style:{margin:"0 8px"}},"或者"),t.a.createElement(o.d,{small:!0,onClick:()=>window.location.reload()},"刷新网页"))},t.a.createElement("p",{className:"bp3-text-muted"},"当划词翻译或浏览器自动更新后会出现 Extension context invalidated 这类错误，此时刷新网页即可恢复。"))}var d=i(170);function N(e){browser.runtime.sendMessage({action:"open options page",suffix:e})}function z(e){return t.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(d.sanitize)(e.msg,{ALLOWED_TAGS:["a","#text","b","i"],ALLOWED_ATTR:["target","rel","href","class"]})}})}var g=i(105),f=i(132);function b(e){const{children:n}=e,[i,o]=Object(a.useState)(!1),[r,u]=Object(a.useState)(null);Object(a.useEffect)((()=>{r&&r.clientWidth===r.scrollWidth&&o(!0)}),[r]);const c=Object.assign({position:"relative"},i?void 0:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",paddingRight:25});return t.a.createElement("span",{ref:u,style:c},n,!i&&t.a.createElement("a",{style:{position:"absolute",top:0,right:0},onClick:()=>{o(!0)}},"展开"))}var w=i(72);async function E(e){browser.runtime.sendMessage({action:"audio",url:e}).catch((e=>{window.alert("朗读时出错："+(null==e?void 0:e.message))}))}function v(e){const n=e.uri,i=e.size,a=e.style;return t.a.createElement(o.d,{style:a,icon:t.a.createElement(o.w,{icon:"volume-up",iconSize:_[i]}),small:"small"===i,large:"large"===i,minimal:!0,disabled:!n,onClick:n?()=>E(n):void 0,title:n?"朗读":"不支持此语种"})}function k(e,n){const i="GoogleWeb"===n,a=[];return!e.phonetic||i&&!e.dict||a.push(e.phonetic.map((e=>`${e.name?e.name+" ":""}/${e.value}/`))),e.dict?a.push(...e.dict.map((e=>`${e.pos?e.pos+(i?": ":" "):""}${e.terms.join(", ")}`))):e.result&&a.push(...e.result),browser.runtime.sendMessage({action:"write to clipboard",text:a.join("\n")})}function x(e){e.stopPropagation()}const j=/\b[A-Z\s\-'a-z]+\b/g;const _={small:12,middle:16,large:20};function S(e){switch(e){case"美":return"英语(美国)";case"英":return"英语(英国)";default:return}}function O(e){var n;const{apiId:i,result:{loading:r,result:c}={loading:!1,result:null},queryResult:l,autoCopy:s=!1,autoPlay:m=!1,wordClickable:y=!0,setQuery:d=g.a,size:O="small",collapse:R,onCollapseChange:C}=e,I=_[O],$="small"===O,L="large"===O,[q,F]=Object(a.useState)("duplicate"),[A,U]=Object(a.useState)(),M=w.a.find((e=>e.id===i))||{name:i,id:i},T=()=>{F("tick"),U("success"),window.setTimeout((()=>{F("duplicate"),U(void 0)}),1e3)};return Object(a.useEffect)((()=>{var e;c&&m&&c.text.length<30&&E({apiId:i,source:c.from,text:c.text,ttsURI:(null===(e=c.phonetic)||void 0===e?void 0:e[0].ttsURI)||c.ttsURI})}),[i,m,c]),Object(a.useEffect)((()=>{c&&s&&k(c,i).then((e=>{e?T():window.alert("自动复制翻译结果失败，请稍后重试。")}),(e=>{window.alert(`自动复制翻译结果时发生了一个错误：${null==e?void 0:e.message}`)}))}),[c,s,i]),t.a.createElement(o.g,{className:"result-block",onClick:x},t.a.createElement("div",{className:"legend"},t.a.createElement("div",{className:"legend-left"},t.a.createElement("span",{className:"api-ico",style:{backgroundImage:`url(${M.icon})`}}),t.a.createElement(o.t,null,M.name),c&&t.a.createElement(t.a.Fragment,null,t.a.createElement(f.a,{lang:c.from,setLang:l,size:"small",maxHeight:212},t.a.createElement("span",{className:"source"},c.from,t.a.createElement(o.w,{icon:"caret-down",iconSize:12}))),t.a.createElement(v,{uri:{apiId:i,source:c.from,text:c.text,ttsURI:(null===(n=c.phonetic)||void 0===n?void 0:n[0].ttsURI)||c.ttsURI},size:O}))),t.a.createElement("div",null,void 0!==R&&t.a.createElement(o.d,{minimal:!0,small:$,large:L,title:R?"展开":"收起",onClick:()=>{C&&C(!R)},icon:t.a.createElement(o.w,{icon:R?"chevron-down":"chevron-up",iconSize:I+2})}),t.a.createElement(o.d,{onClick:()=>{c&&k(c,i).then((e=>{e?T():window.alert("复制翻译结果失败，请稍后重试。")}),(e=>{window.alert(`复制翻译结果时发生了一个错误：${null==e?void 0:e.message}`)}))},disabled:!c||!!c.error,icon:t.a.createElement(o.w,{icon:q,iconSize:I}),minimal:!0,small:$,large:L,intent:A,title:"复制翻译结果"}),t.a.createElement(o.b,{disabled:!(null==c?void 0:c.link),target:"_blank",href:(null==c?void 0:c.link)||"",icon:t.a.createElement(o.w,{icon:"share",iconSize:I}),minimal:!0,small:$,large:L,title:"查看详细结果"}))),t.a.createElement(o.j,{isOpen:!R},t.a.createElement("div",{style:{display:r?"block":"none"}},t.a.createElement("p",{className:u()({"bp3-skeleton":r})},"1"),t.a.createElement("p",{className:u()({"bp3-skeleton":r}),style:{width:"150px"}},"1")),(null==c?void 0:c.error)&&t.a.createElement("div",{className:"error"},function(e,n){const{api:i,onRetry:a}=n;switch(e.type){case"NETWORK_ERROR":return t.a.createElement(h,{message:t.a.createElement(z,{msg:e.message}),api:i,onRetry:a});case"UNSUPPORTED_LANGUAGE":case"OTHER":return t.a.createElement(o.F,{description:t.a.createElement(z,{msg:e.message})});case"GET_TOKEN_FAILED":case"API_SERVER_ERROR":return t.a.createElement(o.F,{description:t.a.createElement(z,{msg:e.message}),action:t.a.createElement(o.d,{small:!0,onClick:n.onRetry},"重试")});case"NEED_KEY":return t.a.createElement(o.F,{description:t.a.createElement(z,{msg:e.message}),action:t.a.createElement(o.d,{small:!0,onClick:()=>N("#/services")},"前往【服务申请】页面")});case"NO_POINTS":return t.a.createElement(o.F,{description:t.a.createElement(z,{msg:e.message}),action:t.a.createElement(o.d,{small:!0,onClick:()=>N("#/services")},"购买翻译积分")});case"NEED_DOMAIN":return t.a.createElement(o.F,{description:t.a.createElement(z,{msg:e.message}),action:t.a.createElement(o.d,{small:!0,onClick:()=>N("#/#%E5%90%AF%E7%94%A8%E7%BF%BB%E8%AF%91%E6%BA%90")},"前往【设置页】选择专业领域")});default:return t.a.createElement(p,{onRetry:a,message:t.a.createElement(z,{msg:e.message})})}}(c.error,{api:M,onRetry:()=>{l()}})),(null==c?void 0:c.phonetic)&&t.a.createElement("div",{className:"phonetic"},c.phonetic.map(((e,n)=>t.a.createElement("div",{key:n,className:"phonetic-item",style:{maxWidth:"100%"}},e.name&&t.a.createElement("span",{style:{flexShrink:0,marginRight:5}},e.name),e.value&&t.a.createElement(b,null,"/",e.value,"/"),e.ttsURI&&t.a.createElement(v,{style:{flexShrink:0},uri:{apiId:i,source:S(e.name)||c.from,text:c.text,ttsURI:e.ttsURI},size:O}))))),c&&t.a.createElement("div",{className:"common-result"},c.dict&&t.a.createElement("div",{className:"dict"},c.dict.map(((e,n)=>{const a=e.terms.join(", ");return t.a.createElement("p",{key:n},e.pos&&t.a.createElement("span",{className:"dict-pos"},e.pos,"GoogleWeb"===i?": ":""),y?function(e,n){const i=Array.from(e.matchAll(j)),a=e.split(j);return t.a.createElement(t.a.Fragment,null,a.map(((e,a)=>{const o=i[a];return t.a.createElement(t.a.Fragment,{key:a},e,o?t.a.createElement("a",{onClick:()=>n(o[0])},o[0]):"")})))}(a,d):a)}))),!c.dict&&c.result&&t.a.createElement("div",{className:"general-result"},c.result.map(((e,n)=>t.a.createElement("p",{key:n},e,t.a.createElement(v,{uri:{text:e,apiId:i,source:null==c?void 0:c.to},size:O}))))))))}},199:function(e,n,i){"use strict";i.d(n,"b",(function(){return r})),i.d(n,"a",(function(){return u}));var a=i(117);function t(e,n=500){return new Promise((i=>{!function a(){e()?i():window.setTimeout(a,n)}()}))}const o={"中文(简体)":"zh","英语":"en","俄语":"ru","西班牙语":"es","法语":"fr","阿拉伯语":"ar","土耳其语":"tr","葡萄牙语":"pt","泰语":"th","印尼语":"id","意大利语":"it","越南语":"vi"};function r(e,n="",i=""){const a=o[i]||"auto",t=o[n]||"zh";return`https://translate.alibaba.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${a}&hcfy_to=${t}`}async function u(){if(window.location.origin+window.location.pathname!=="https://translate.alibaba.com/")return;const e=Object(a.a)(window.location.hash);if(!e.hcfy_text)return;const n=document.getElementsByClassName("language-list")[0];if(n){const i=e.hcfy_from;let a;if("auto"===i)a=n.querySelector("a[data-lang=auto]");else{const e=n.getElementsByClassName("source-list")[0];e&&(await t((()=>0!==e.children.length)),a=e.querySelector(`a[data-lang=${i}]`))}if(a){document.getElementsByClassName("source-lang")[0].click(),a.click()}const o=n.getElementsByClassName("target-list")[0];if(o){await t((()=>0!==o.children.length));const n=o.querySelector(`a[data-lang=${e.hcfy_to}]`);if(n){document.getElementsByClassName("target-lang")[0].click(),n.click()}}}const i=document.getElementById("original");i&&(i.value=decodeURIComponent(e.hcfy_text));const o=document.getElementsByClassName("translate")[0];o&&o.click()}},234:function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));var a=i(59),t=i(0),o=i.n(t);function r(e){return o.a.createElement(a.J,{inline:!0,onChange:n=>{e.onChange(n.target.value)},selectedValue:e.value},o.a.createElement(a.I,{label:"小",value:"small"}),o.a.createElement(a.I,{label:"中",value:"middle"}),o.a.createElement(a.I,{label:"大",value:"large"}))}},235:function(e,n,i){"use strict";i.d(n,"a",(function(){return u}));var a=i(236),t=i(0),o=i.n(t),r=i(72);function u(e){const{selectedAPIs:n,onChange:i,useShortName:t}=e;return o.a.createElement(a.a,{items:r.a,selected:n,onChange:i,valueKey:"id",labelKey:t?"shortName":"name"})}},236:function(e,n,i){"use strict";i.d(n,"a",(function(){return s}));var a=i(59),t=i(0),o=i.n(t),r=i(20);const u=Object(r.b)(((e,n)=>{const i=e.indexOf(n);i>=0&&e.splice(i,1)})),c=Object(r.b)(((e,n)=>{e.includes(n)||e.push(n)})),l=(e,n,i,t,r)=>o.a.createElement(a.h,{inline:!0,key:i,labelElement:n,checked:t,onChange:e=>{r(e.target.checked)}});function s(e){const{items:n,valueKey:i="value",labelKey:a="label",selected:t,onChange:r,itemRenderer:s=l}=e;return o.a.createElement(o.a.Fragment,null,n.map((e=>{const n=e[a],o=e[i],l=t.includes(o);return s(e,n,o,l,(e=>{r(e?c(t,o):u(t,o))}))})))}},237:function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));var a=i(85),t=i(49);const o="https://hs-api.limingkai.cn/".replace(/^http(s?)/,"ws$1")+"stt/";class r extends a.a{constructor(e){super(e)}async getWebSocketFromHcfy(e){const n=await browser.runtime.sendMessage({action:"get user sid"});return new WebSocket(o+this.service.id+"?"+Object(t.a)({...e,_sid:n}))}async microphone(e,n){var i;let a;try{a=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(e){return void(null===(i=n.onError)||void 0===i||i.call(n,e))}const t=await this.mediaStream(a,e,n);return t?{stop:()=>{a.getTracks().forEach((e=>e.stop())),t.stop()},abort:()=>{a.getTracks().forEach((e=>e.stop())),t.abort()}}:t}msDirect(e,n,i,a){throw new Error(`${this.service.name}不支持识别音视频。`)}msByHcfy(e,n,i){throw new Error(`${this.service.name}不支持通过翻译积分使用。`)}async mediaStream(e,n,i){var t,o;const r=await this.getCallType();if(!r.ok)return void(null===(t=i.onError)||void 0===t||t.call(i,new Error(r.message)));let u;try{switch(r.type){case 2:case 1:u=await this.msDirect(e,n,i,r.secretKeyInStorage?Object(a.b)(r.secretKeyInStorage):void 0);break;case 0:u=await this.msByHcfy(e,n,i)}}catch(e){return void(null===(o=null==i?void 0:i.onError)||void 0===o||o.call(i,e))}return u}}},243:function(e,n,i){"use strict";i.d(n,"a",(function(){return p}));var a=i(199);function t(e){return`https://www.iciba.com/word?w=${encodeURIComponent(e)}`}var o=i(195),r=i(193);function u(e,n,i){const a=r[i]||"auto",t=r[n]||"zh-CHS";return`https://fanyi.sogou.com/text?keyword=${encodeURIComponent(e)}&transfrom=${a}&transto=${t}&model=general`}const c={"英语":"eng","法语":"fr","韩语":"ko","日语":"jap"};function l(e,n){const i=c[n];return i?`https://dict.youdao.com/w/${i}/${encodeURIComponent(e)}/`:`https://dict.youdao.com/w/${encodeURIComponent(e)}/`}var s=i(192);function m(e,n="",i=""){return`https://fanyi.baidu.com/#${i===s[i]||"auto"}/${s[n]||"zh"}/${encodeURIComponent(e)}`}var y=i(196);const h=["划词翻译","英语","中文(简体)"],p=[{id:"ALi",name:"阿里翻译",generateLink:a.b,home:Object(a.b)(...h)},{id:"QQ",name:"腾讯翻译君",generateLink:o.b,home:Object(o.b)(...h)},{id:"SoGou",name:"搜狗翻译",generateLink:u,home:u(...h)},{id:"BaiDu",name:"百度翻译",generateLink:m,home:m(...h)},{id:"YouDao",name:"有道翻译",generateLink:y.b,home:Object(y.b)(...h)},{id:"YouDaoDictionary",name:"有道词典",generateLink:l,home:l(h[0],h[1])},{id:"JinShan",name:"金山词霸",generateLink:t,home:t(h[0])}]},254:function(e){e.exports=JSON.parse('[{"zhName":"中文(简体)","pinyin":"zhongwenjianti"},{"zhName":"印地语","pinyin":"yindiyu"},{"zhName":"印尼语","pinyin":"yinniyu"},{"zhName":"意大利语","pinyin":"yidaliyu"},{"zhName":"越南语","pinyin":"yuenanyu"},{"zhName":"英语","pinyin":"yingyu"},{"zhName":"西班牙语","pinyin":"xibanyayu"},{"zhName":"日语","pinyin":"riyu"},{"zhName":"葡萄牙语","pinyin":"putaoyayu"},{"zhName":"马来语","pinyin":"malaiyu"},{"zhName":"韩语","pinyin":"hanyu"},{"zhName":"法语","pinyin":"fayu"},{"zhName":"俄语","pinyin":"eyu"},{"zhName":"德语","pinyin":"deyu"},{"zhName":"阿拉伯语","pinyin":"alaboyu"},{"zhName":"土耳其语","pinyin":"tuerqiyu"},{"zhName":"泰语","pinyin":"taiyu"},{"zhName":"荷兰语","pinyin":"helanyu"},{"zhName":"芬兰语","pinyin":"fenlanyu"},{"zhName":"丹麦语","pinyin":"danmaiyu"},{"zhName":"中文(繁体)","pinyin":"zhongwenfanti"},{"zhName":"希伯来语","pinyin":"xibolaiyu"},{"zhName":"希腊语","pinyin":"xilayu"},{"zhName":"匈牙利语","pinyin":"xiongyaliyu"},{"zhName":"威尔士语","pinyin":"weiershiyu"},{"zhName":"乌尔都语","pinyin":"wuerduyu"},{"zhName":"萨摩亚语","pinyin":"samoyayu"},{"zhName":"斯瓦希里语","pinyin":"siwaxiliyu"},{"zhName":"斯洛文尼亚语","pinyin":"siluowenniyayu"},{"zhName":"瑞典语","pinyin":"ruidianyu"},{"zhName":"南非荷兰语","pinyin":"nanfeihelanyu"},{"zhName":"挪威语","pinyin":"nuoweiyu"},{"zhName":"马尔加什语","pinyin":"maerjiashiyu"},{"zhName":"马耳他语","pinyin":"maertayu"},{"zhName":"孟加拉语","pinyin":"mengjialayu"},{"zhName":"拉脱维亚语","pinyin":"latuoweiyayu"},{"zhName":"立陶宛语","pinyin":"litaowanyu"},{"zhName":"罗马尼亚语","pinyin":"luomaniyayu"},{"zhName":"克罗地亚语","pinyin":"keluodiyayu"},{"zhName":"捷克语","pinyin":"jiekeyu"},{"zhName":"海地克里奥尔语","pinyin":"haidikeliaoeryu"},{"zhName":"菲律宾语","pinyin":"feilvbinyu"},{"zhName":"波斯尼亚语","pinyin":"bosiniyayu"},{"zhName":"波斯语","pinyin":"bosiyu"},{"zhName":"保加利亚语","pinyin":"baojialiyayu"},{"zhName":"波兰语","pinyin":"bolanyu"},{"zhName":"爱沙尼亚语","pinyin":"aishaniyayu"},{"zhName":"爪哇语","pinyin":"zhaowayu"},{"zhName":"祖鲁语","pinyin":"zuluyu"},{"zhName":"中文(粤语)","pinyin":"zhongwenyueyu"},{"zhName":"意第绪语","pinyin":"yidixuyu"},{"zhName":"伊博语","pinyin":"yiboyu"},{"zhName":"约鲁巴语","pinyin":"yuelubayu"},{"zhName":"亚美尼亚语","pinyin":"yameiniyayu"},{"zhName":"夏威夷语","pinyin":"xiaweiyiyu"},{"zhName":"修纳语","pinyin":"xiunayu"},{"zhName":"信德语","pinyin":"xindeyu"},{"zhName":"宿务语","pinyin":"suwuyu"},{"zhName":"乌兹别克语","pinyin":"wuzibiekeyu"},{"zhName":"乌克兰语","pinyin":"wukelanyu"},{"zhName":"泰卢固语","pinyin":"tailuguyu"},{"zhName":"塔吉克语","pinyin":"tajikeyu"},{"zhName":"泰米尔语","pinyin":"taimieryu"},{"zhName":"世界语","pinyin":"shijieyu"},{"zhName":"索马里语","pinyin":"suomaliyu"},{"zhName":"僧伽罗语","pinyin":"sengqieluoyu"},{"zhName":"斯洛伐克语","pinyin":"siluofakeyu"},{"zhName":"齐切瓦语","pinyin":"qiqiewayu"},{"zhName":"旁遮普语","pinyin":"pangzhepuyu"},{"zhName":"普什图语","pinyin":"pushituyu"},{"zhName":"尼泊尔语","pinyin":"niboeryu"},{"zhName":"毛利语","pinyin":"maoliyu"},{"zhName":"马拉雅拉姆语","pinyin":"malayalamuyu"},{"zhName":"马拉地语","pinyin":"maladiyu"},{"zhName":"马其顿语","pinyin":"maqidunyu"},{"zhName":"缅甸语","pinyin":"miandianyu"},{"zhName":"卢森堡语","pinyin":"lusenbaoyu"},{"zhName":"拉丁语","pinyin":"ladingyu"},{"zhName":"老挝语","pinyin":"laozhuayu"},{"zhName":"克林贡语","pinyin":"kelingongyu"},{"zhName":"库尔德语","pinyin":"kuerdeyu"},{"zhName":"科西嘉语","pinyin":"kexijiayu"},{"zhName":"卡纳达语","pinyin":"kanadayu"},{"zhName":"吉尔吉斯语","pinyin":"jierjisiyu"},{"zhName":"加利西亚语","pinyin":"jialixiyayu"},{"zhName":"加泰罗尼亚语","pinyin":"jiatailuoniyayu"},{"zhName":"豪萨语","pinyin":"haosayu"},{"zhName":"哈萨克语","pinyin":"hasakeyu"},{"zhName":"古吉拉特语","pinyin":"gujilateyu"},{"zhName":"格鲁吉亚语","pinyin":"gelujiyayu"},{"zhName":"高棉语","pinyin":"gaomianyu"},{"zhName":"冰岛语","pinyin":"bingdaoyu"},{"zhName":"巴斯克语","pinyin":"basikeyu"},{"zhName":"白俄罗斯语","pinyin":"baieluosiyu"},{"zhName":"阿姆哈拉语","pinyin":"amuhalayu"},{"zhName":"爱尔兰语","pinyin":"aierlanyu"},{"zhName":"阿尔巴尼亚语","pinyin":"aerbaniyayu"},{"zhName":"阿塞拜疆语","pinyin":"asaibaijiangyu"},{"zhName":"土库曼语","pinyin":"tukumanyu"},{"zhName":"卢旺达语","pinyin":"luwangdayu"},{"zhName":"鞑靼语","pinyin":"dadayu"},{"zhName":"奥里亚语","pinyin":"aoliyayu"},{"zhName":"弗里西语","pinyin":"fulixiyu"},{"zhName":"蒙古语","pinyin":"mengguyu"},{"zhName":"印尼巽他语","pinyin":"yinnixuntayu"},{"zhName":"斐济语","pinyin":"feijiyu"},{"zhName":"汤加语","pinyin":"tangjiayu"},{"zhName":"塔希提语","pinyin":"taxitiyu"},{"zhName":"扎扎其语","pinyin":"zazaqiyu"},{"zhName":"印古什语","pinyin":"yingushiyu"},{"zhName":"因特语","pinyin":"yinteyu"},{"zhName":"伊努克提图特语","pinyin":"yinuketituteyu"},{"zhName":"伊多语","pinyin":"yiduoyu"},{"zhName":"亚齐语","pinyin":"yaqiyu"},{"zhName":"希利盖农语","pinyin":"xiligainongyu"},{"zhName":"西里西亚语","pinyin":"xilixiyayu"},{"zhName":"叙利亚语","pinyin":"xuliyayu"},{"zhName":"瓦隆语","pinyin":"walongyu"},{"zhName":"文达语","pinyin":"wendayu"},{"zhName":"沃洛夫语","pinyin":"woluofuyu"},{"zhName":"提格利尼亚语","pinyin":"tigeliniyayu"},{"zhName":"他加禄语","pinyin":"tajialuyu"},{"zhName":"掸语","pinyin":"danyu"},{"zhName":"苏格兰语","pinyin":"sugelanyu"},{"zhName":"塞尔维亚语","pinyin":"saierweiyayu"},{"zhName":"切罗基语","pinyin":"qieluojiyu"},{"zhName":"契维语","pinyin":"qiweiyu"},{"zhName":"帕皮阿门托语","pinyin":"papiamentuoyu"},{"zhName":"毛里求斯克里奥尔语","pinyin":"maoliqiusikeliaoeryu"},{"zhName":"马绍尔语","pinyin":"mashaoeryu"},{"zhName":"迈蒂利语","pinyin":"maidiliyu"},{"zhName":"逻辑语","pinyin":"luojiyu"},{"zhName":"罗姆语","pinyin":"luomuyu"},{"zhName":"卢森尼亚语","pinyin":"lusenniyayu"},{"zhName":"卢干达语","pinyin":"lugandayu"},{"zhName":"林堡语","pinyin":"linbaoyu"},{"zhName":"拉特加莱语","pinyin":"latejialaiyu"},{"zhName":"罗曼什语","pinyin":"luomanshiyu"},{"zhName":"林加拉语","pinyin":"linjialayu"},{"zhName":"克丘亚语","pinyin":"keqiuyayu"},{"zhName":"克里米亚鞑靼语","pinyin":"kelimiyadadayu"},{"zhName":"克里克语","pinyin":"kelikeyu"},{"zhName":"卡舒比语","pinyin":"kashubiyu"},{"zhName":"卡努里语","pinyin":"kanuliyu"},{"zhName":"卡拜尔语","pinyin":"kabaieryu"},{"zhName":"克什米尔语","pinyin":"keshimieryu"},{"zhName":"科萨语","pinyin":"kesayu"},{"zhName":"胡帕语","pinyin":"hupayu"},{"zhName":"黑山语","pinyin":"heishanyu"},{"zhName":"格陵兰语","pinyin":"gelinglanyu"},{"zhName":"瓜拉尼语","pinyin":"gualaniyu"},{"zhName":"刚果语","pinyin":"gangguoyu"},{"zhName":"弗留利语","pinyin":"fuliuliyu"},{"zhName":"梵语","pinyin":"fanyu"},{"zhName":"法罗语","pinyin":"faluoyu"},{"zhName":"低地德语","pinyin":"didideyu"},{"zhName":"德顿语","pinyin":"dedunyu"},{"zhName":"楚瓦什语","pinyin":"chuwashiyu"},{"zhName":"聪加语","pinyin":"congjiayu"},{"zhName":"布列塔尼语","pinyin":"bulietaniyu"},{"zhName":"博杰普尔语","pinyin":"bojiepueryu"},{"zhName":"俾路支语","pinyin":"biluzhiyu"},{"zhName":"比林语","pinyin":"bilinyu"},{"zhName":"本巴语","pinyin":"benbayu"},{"zhName":"柏柏尔语","pinyin":"baibaieryu"},{"zhName":"巴什基尔语","pinyin":"bashijieryu"},{"zhName":"比斯拉马语","pinyin":"bisilamayu"},{"zhName":"奥塞梯语","pinyin":"aosaitiyu"},{"zhName":"奥罗莫语","pinyin":"aoluomoyu"},{"zhName":"奥克语","pinyin":"aokeyu"},{"zhName":"奥杰布瓦语","pinyin":"aojiebuwayu"},{"zhName":"艾马拉语","pinyin":"aimalayu"},{"zhName":"阿斯图里亚斯语","pinyin":"asituliyasiyu"},{"zhName":"阿拉贡语","pinyin":"alagongyu"},{"zhName":"阿肯语","pinyin":"akenyu"},{"zhName":"阿萨姆语","pinyin":"asamuyu"},{"zhName":"苗语","pinyin":"miaoyu"},{"zhName":"南非科萨语","pinyin":"nanfeikesayu"},{"zhName":"塞索托语","pinyin":"saisuotuoyu"},{"zhName":"苏格兰盖尔语","pinyin":"sugelangaieryu"},{"zhName":"白苗语","pinyin":"baimiaoyu"},{"zhName":"克雷塔罗奥托米语","pinyin":"keleitaluoaotuomiyu"},{"zhName":"塞尔维亚语(拉丁文)","pinyin":"saierweiyayuladingwen"},{"zhName":"塞尔维亚语(西里尔文)","pinyin":"saierweiyayuxilierwen"},{"zhName":"尤卡坦玛雅语","pinyin":"youkatanmayayu"},{"zhName":"中古法语","pinyin":"zhonggufayu"},{"zhName":"中文(文言文)","pinyin":"zhongwenwenyanwen"},{"zhName":"新挪威语","pinyin":"xinnuoweiyu"},{"zhName":"下索布语","pinyin":"xiasuobuyu"},{"zhName":"西弗里斯语","pinyin":"xifulisiyu"},{"zhName":"西非书面语","pinyin":"xifeishumianyu"},{"zhName":"突尼斯阿拉伯语","pinyin":"tunisialaboyu"},{"zhName":"书面挪威语","pinyin":"shumiannuoweiyu"},{"zhName":"桑海语","pinyin":"sanghaiyu"},{"zhName":"塞尔维亚-克罗地亚语","pinyin":"saierweiyakeluodiyayu"},{"zhName":"萨丁尼亚语","pinyin":"sadingniyayu"},{"zhName":"那不勒斯语","pinyin":"nabulesiyu"},{"zhName":"南恩德贝莱语","pinyin":"nanendebeilaiyu"},{"zhName":"南索托语","pinyin":"nansuotuoyu"},{"zhName":"曼克斯语","pinyin":"mankesiyu"},{"zhName":"康瓦尔语","pinyin":"kangwaeryu"},{"zhName":"孔卡尼语","pinyin":"kongkaniyu"},{"zhName":"加拿大法语","pinyin":"jianadafayu"},{"zhName":"哈卡钦语","pinyin":"hakaqinyu"},{"zhName":"古英语","pinyin":"guyingyu"},{"zhName":"古希腊语","pinyin":"guxilayu"},{"zhName":"高地索布语","pinyin":"gaodisuobuyu"},{"zhName":"盖尔语","pinyin":"gaieryu"},{"zhName":"富拉尼语","pinyin":"fulaniyu"},{"zhName":"迪维希语","pinyin":"diweixiyu"},{"zhName":"北方萨米语","pinyin":"beifangsamiyu"},{"zhName":"邦板牙语","pinyin":"bangbanyayu"},{"zhName":"巴西葡萄牙语","pinyin":"baxiputaoyayu"},{"zhName":"北索托语","pinyin":"beisuotuoyu"},{"zhName":"阿尔及利亚阿拉伯语","pinyin":"aerjiliyaalaboyu"},{"zhName":"维吾尔语","pinyin":"weiwueryu"},{"zhName":"加泰隆语","pinyin":"jiatailongyu"},{"zhName":"克林贡语(piqaD)","pinyin":"kelingongyupiqaD"},{"zhName":"阿布哈兹语","pinyin":"abuhaziyu"},{"zhName":"阿兹特克语","pinyin":"azitekeyu"},{"zhName":"埃维语","pinyin":"aiweiyu"},{"zhName":"巴布亚皮钦语","pinyin":"babuyapiqinyu"},{"zhName":"班巴拉语","pinyin":"banbalayu"},{"zhName":"邦阿西楠语","pinyin":"bangaxinanyu"},{"zhName":"北萨米语","pinyin":"beisamiyu"},{"zhName":"查莫罗语","pinyin":"chamoluoyu"},{"zhName":"查瓦卡诺语","pinyin":"chawakanuoyu"},{"zhName":"迪维西语","pinyin":"diweixiyu"},{"zhName":"侗语","pinyin":"dongyu"},{"zhName":"杜順語","pinyin":"dushunyu"},{"zhName":"富尔语","pinyin":"fueryu"},{"zhName":"格雷罗纳瓦特尔语","pinyin":"geleiluonawateeryu"},{"zhName":"格罗宁根方言","pinyin":"geluoninggenfangyan"},{"zhName":"基里巴斯语","pinyin":"jilibasiyu"},{"zhName":"基隆迪语","pinyin":"jilongdiyu"},{"zhName":"基切语","pinyin":"jiqieyu"},{"zhName":"卡西语","pinyin":"kaxiyu"},{"zhName":"康沃尔语","pinyin":"kangwoeryu"},{"zhName":"马恩语","pinyin":"maenyu"},{"zhName":"马里语（俄罗斯）","pinyin":"maliyu（eluosi）"},{"zhName":"玛雅语","pinyin":"mayayu"},{"zhName":"姆班杜语","pinyin":"mubanduyu"},{"zhName":"纳瓦霍语","pinyin":"nawahuoyu"},{"zhName":"纽埃语","pinyin":"niuaiyu"},{"zhName":"帕姆语","pinyin":"pamuyu"},{"zhName":"桑戈语","pinyin":"sanggeyu"},{"zhName":"上索布语","pinyin":"shangsuobuyu"},{"zhName":"汤加语(赞比亚)","pinyin":"tangjiayuzanbiya"},{"zhName":"图瓦卢语","pinyin":"tuwaluyu"},{"zhName":"图瓦语","pinyin":"tuwayu"},{"zhName":"瓦瑞语(菲律宾)","pinyin":"waruiyufeilvbin"},{"zhName":"沃拉普克语","pinyin":"wolapukeyu"},{"zhName":"乌德穆尔特语","pinyin":"wudemuerteyu"},{"zhName":"西方国际语","pinyin":"xifangguojiyu"},{"zhName":"现代希腊语","pinyin":"xiandaixilayu"},{"zhName":"新共同语言","pinyin":"xingongtongyuyan"},{"zhName":"伊班语","pinyin":"yibanyu"},{"zhName":"伊洛卡诺语","pinyin":"yiluokanuoyu"}]')},292:function(e){e.exports=JSON.parse('{"中文(简体)":"zh-CHS","英语":"en","日语":"ja","西班牙语":"es","阿拉伯语":"ar","法语":"fr","韩语":"ko","俄语":"ru","德语":"de","葡萄牙语":"pt","意大利语":"it","希腊语":"el","荷兰语":"nl","芬兰语":"fi","丹麦语":"da","越南语":"vi","印地语":"hi","印尼语":"id","马来语":"ms"}')},72:function(e,n,i){"use strict";i.d(n,"b",(function(){return y})),i.d(n,"a",(function(){return h}));var a=i(180),t=i(215),o=i(248),r=i(179),u=i(244),c=i(245),l=i(144),s=i(219),m=i(159);const y=[a.d,a.b,t.b,o.b,r.d,r.b,u.b,c.b],h=[...[l.b,s.b,m.b],...y]},73:function(e,n,i){"use strict";i.d(n,"a",(function(){return c}));var a=i(0),t=i(10),o=i(3),r=i(90);const u=Object(r.a)(o.a,["darkMode"]);function c(e=document.body){const[n,i]=Object(t.a)(u),o=null==n?void 0:n.darkMode;return Object(a.useEffect)((()=>{if(!e)return;const n="function"==typeof e?e:n=>{null==e||e.classList[n?"add":"remove"]("bp3-dark")};switch(o){case"open":return void n(!0);case"close":return void n(!1);case"system":const e=window.matchMedia("(prefers-color-scheme: dark)");n(e.matches);const i=()=>{n(e.matches)};return e.addEventListener("change",i),()=>{e.removeEventListener("change",i)}}}),[o,e]),{darkMode:o,setDarkMode:e=>{i({darkMode:e})}}}},88:function(e,n,i){"use strict";i.d(n,"a",(function(){return s})),i.d(n,"c",(function(){return y})),i.d(n,"b",(function(){return h}));var a=i(237),t=i(200),o=i(218);const r=new Map;function u(e,n){let i,a;if(e instanceof MediaStream)i=new AudioContext,a=i.createMediaStreamSource(e);else{const n=r.get(e);n?(i=n[0],a=n[1]):(i=new AudioContext,a=i.createMediaElementSource(e),r.set(e,[i,a]))}const t=i.createScriptProcessor(0,1,1);return t.onaudioprocess=e=>{const i=function(e){const n=2*e.length,i=new ArrayBuffer(n),a=new DataView(i);let t=0;for(let n=0;n<e.length;n++,t+=2){const i=Math.max(-1,Math.min(1,e[n]));a.setInt16(t,i<0?32768*i:32767*i,!0)}return a}(function(e){const n=new Float32Array(e),i=Math.round(n.length*(16e3/44100)),a=new Float32Array(i),t=(n.length-1)/(i-1);a[0]=n[0];for(let e=1;e<i-1;e++){const i=e*t,o=Number(Math.floor(i).toFixed()),r=Number(Math.ceil(i).toFixed()),u=i-o;a[e]=n[o]+(n[r]-n[o])*u}return a[i-1]=n[n.length-1],a}(e.inputBuffer.getChannelData(0)));n(i.buffer)},a.connect(t),t.connect(i.destination),e instanceof MediaStream||a.connect(i.destination),()=>{i&&(a.disconnect(t),t.disconnect(i.destination))}}var c=i(31);const l=i.n(c)()("tencent-realtime-speech"),s={"16k_zh":"中文","16k_en":"英语","16k_en_game":"英语 - 游戏领域","16k_en_edu":"英语 - 教育领域","16k_ja":"日语","16k_ko":"韩语","16k_th":"泰语","16k_zh_edu":"中文 - 教育领域","16k_zh_medical":"中文 - 医疗领域","16k_zh_court":"中文 - 法庭领域","16k_ca":"中文 - 粤语","16k_wuu-SH":"上海方言","16k_zh-TW":"中文 - 繁体"};class m extends a.a{msDirect(e,n,i,a){if(!a)throw new Error("未提供密钥");const r=new o.a(a).sstRealtime("1256165668",Object(t.a)({engine_model_type:n,voice_format:1}));return this.getSTTMethodsFromWebSocket(r,e,i)}async msByHcfy(e,n,i){const a=await this.getWebSocketFromHcfy(Object(t.a)({engine_model_type:n,voice_format:1}));return this.getSTTMethodsFromWebSocket(a,e,i)}getSTTMethodsFromWebSocket(e,n,i){let a=!1;const t=[];let o;return e.addEventListener("error",(e=>{var n;l("websocket error 事件",e),a=!0,null===(n=i.onError)||void 0===n||n.call(i,new Error("连接到服务器时发生了错误，可能的原因：\n- 你的翻译积分不够了；\n- 你的网络不稳定，稍后再试试看。\n- 划词翻译服务器出错了。"))})),e.addEventListener("message",(n=>{var o,r,u,c;const s=JSON.parse(n.data);if(0!==s.code)return a=!0,l("接收到错误消息：",s),void(null===(o=i.onError)||void 0===o||o.call(i,new Error(`${this.service.name}在识别过程中报错了，错误码：${s.code}，错误消息：${s.message}`)));if(!s.result)return;const m=s.result.voice_text_str;2===s.result.slice_type?(null===(r=i.onInterim)||void 0===r||r.call(i,""),m&&(null===(u=i.onSentence)||void 0===u||u.call(i,m),l("识别到完整的一句话：",m),t.push(m),i.stopOnFirstSentence&&e.close())):m&&(l("识别到一句话的临时结果：",m),null===(c=i.onInterim)||void 0===c||c.call(i,m))})),e.addEventListener("close",(e=>{var n;l("close 事件",e),null==o||o(),a||null===(n=i.onStop)||void 0===n||n.call(i,t)})),new Promise((i=>{e.addEventListener("open",(()=>{o=u(n,(n=>{e.readyState===e.OPEN&&e.send(n)})),i({stop:()=>{e.send('{"type":"end"}')},abort:()=>{a=!0,e.close()}})}))}))}}const y={id:"TencentRealtime",name:"腾讯云实时语音识别",realtime:!0,defaultLang:"16k_zh",points:!0},h=new m(y)}}]);