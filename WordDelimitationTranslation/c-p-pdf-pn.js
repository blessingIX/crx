(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a(132),l=a(59),r=a(0),s=a.n(r),c=a(234),i=a(235);const o={small:12,middle:16,large:20};function u(){browser.runtime.sendMessage({action:"open options page",suffix:"?vip#/#通用设置"}).catch((e=>{window.alert("打开设置页时发生了一个错误。错误消息：："+(null==e?void 0:e.message))}))}function d(e){browser.runtime.sendMessage({action:"open options page",suffix:e}).catch((e=>{window.alert("打开设置页时发生了一个错误。错误消息：："+(null==e?void 0:e.message))}))}function m(e){const{source:t,setSource:a,options:r,setOptions:m,user:v,children:p,size:g}=e;if(!r)return null;const f="large"===g,b=(e,t)=>{m((a=>{const n=a[t],l=n.indexOf(e);l>=0?n.splice(l,1):4===n.length&&n.pop(),n.unshift(e)}))};return s.a.createElement(l.g,{className:"quick-settings"},s.a.createElement("div",null,s.a.createElement(n.a,{lang:t,setLang:e=>{a(e),b(e,"recentUseLangFrom")},addAuto:!0,recentUse:r.recentUseLangFrom,size:g}),s.a.createElement(l.w,{icon:"arrow-right",iconSize:o[g],style:{margin:"0 10px"}}),s.a.createElement(n.a,{lang:r.destination,setLang:e=>{m({destination:e}),b(e,"recentUseLangTo")},recentUse:r.recentUseLangTo,size:g})),s.a.createElement("div",null,s.a.createElement(i.a,{useShortName:!0,selectedAPIs:r.selectedAPIs,onChange:e=>{m({selectedAPIs:e})}})),s.a.createElement("div",null,s.a.createElement(l.h,{inline:!0,label:"自动朗读",large:f,checked:r.autoPlay,onChange:e=>{m({autoPlay:e.target.checked})}}),s.a.createElement(l.U,{interactionKind:"hover",hoverCloseDelay:300,enforceFocus:!1,usePortal:!1,disabled:(null==v?void 0:v.vipActivated)||!1,content:s.a.createElement(s.a.Fragment,null,"这是一个会员功能，请在",s.a.createElement("a",{onClick:u},"开通会员"),"后使用。")},s.a.createElement(l.h,{inline:!0,label:"自动复制",disabled:!(null==v?void 0:v.vipActivated),checked:r.autoCopy,onChange:e=>{m({autoCopy:e.target.checked})}}))),s.a.createElement(c.a,{value:r.panelSize,onChange:e=>{m({panelSize:e})}}),p&&s.a.createElement("div",null,p),s.a.createElement("a",{onClick:()=>d(),className:"bp3-text-small"},"打开完整设置"),!(null==v?void 0:v.vipActivated)&&s.a.createElement("a",{onClick:()=>d("?vip"),className:"bp3-text-small",style:{marginLeft:15}},s.a.createElement(l.w,{icon:"crown",iconSize:14,style:{position:"relative",top:-1}})," ","开通会员"))}},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n=a(0);function l(e){return{h:e.scrollWidth>e.clientWidth,v:e.scrollHeight>e.clientHeight}}function r(e){const[t,a]=Object(n.useState)({v:!1,h:!1});return Object(n.useEffect)((()=>{if(!e)return;const t=()=>{a(l(e))};t();const n=new ResizeObserver(t);return n.observe(e),()=>{n.unobserve(e)}}),[e]),t}},252:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(664),l=a(59);const r=[],s=[{text:"中文(简体)",value:"chi_sim"},{text:"中文(繁体)",value:"chi_tra"},{text:"英语",value:"eng"},{text:"日语",value:"jpn"},{text:"法语",value:"fra"},{text:"韩语",value:"kor"},{text:"德语",value:"deu"},{text:"俄语",value:"rus"},{text:"泰语",value:"tha"},{text:"南非语",value:"afr"},{text:"阿姆哈拉语",value:"amh"},{text:"阿拉伯语",value:"ara"},{text:"阿萨姆语",value:"asm"},{text:"阿塞拜疆语",value:"aze"},{text:"阿塞拜疆语(西里尔)",value:"aze_cyrl"},{text:"白俄罗斯语",value:"bel"},{text:"孟加拉语",value:"ben"},{text:"藏语",value:"bod"},{text:"波斯尼亚语",value:"bos"},{text:"保加利亚语",value:"bul"},{text:"加泰罗尼亚语(瓦伦西亚)",value:"cat"},{text:"宿务语",value:"ceb"},{text:"捷克语",value:"ces"},{text:"切罗基语",value:"chr"},{text:"威尔士语",value:"cym"},{text:"丹麦语",value:"dan"},{text:"宗喀语",value:"dzo"},{text:"希腊语(现代)",value:"ell"},{text:"中古英语",value:"enm"},{text:"世界语",value:"epo"},{text:"爱沙尼亚语",value:"est"},{text:"巴斯克语",value:"eus"},{text:"波斯语",value:"fas"},{text:"芬兰语",value:"fin"},{text:"德文尖角体",value:"frk"},{text:"中古法语",value:"frm"},{text:"爱尔兰语",value:"gle"},{text:"希腊语(古代)",value:"grc"},{text:"古吉拉特语",value:"guj"},{text:"海地克里奥尔语",value:"hat"},{text:"希伯来语",value:"heb"},{text:"印地语",value:"hin"},{text:"克罗地亚语",value:"hrv"},{text:"匈牙利语",value:"hun"},{text:"因纽特语",value:"iku"},{text:"印度尼西亚语",value:"ind"},{text:"冰岛语",value:"isl"},{text:"意大利语",value:"ita"},{text:"意大利语(古代)",value:"ita_old"},{text:"爪哇语",value:"jav"},{text:"坎纳达语",value:"kan"},{text:"格鲁吉亚语",value:"kat"},{text:"格鲁吉亚语(古代)",value:"kat_old"},{text:"哈萨克语",value:"kaz"},{text:"高棉语",value:"khm"},{text:"吉尔吉斯语",value:"kir"},{text:"库尔德语",value:"kur"},{text:"老挝语",value:"lao"},{text:"拉丁语",value:"lat"},{text:"拉脱维亚语",value:"lav"},{text:"立陶宛语",value:"lit"},{text:"马拉雅拉姆语",value:"mal"},{text:"马拉地语",value:"mar"},{text:"马其顿语",value:"mkd"},{text:"马耳他语",value:"mlt"},{text:"马来语",value:"msa"},{text:"缅甸语",value:"mya"},{text:"尼泊尔语",value:"nep"},{text:"荷兰语(弗拉芒)",value:"nld"},{text:"挪威语",value:"nor"},{text:"奥里亚语",value:"ori"},{text:"旁遮普语",value:"pan"},{text:"波兰语",value:"pol"},{text:"葡萄牙语",value:"por"},{text:"普什图语",value:"pus"},{text:"罗马尼亚语",value:"ron"},{text:"梵语",value:"san"},{text:"僧伽罗语",value:"sin"},{text:"斯洛伐克语",value:"slk"},{text:"斯洛维尼亚语",value:"slv"},{text:"西班牙语",value:"spa"},{text:"西班牙语(古代)",value:"spa_old"},{text:"阿尔巴尼亚语",value:"sqi"},{text:"塞尔维亚语",value:"srq"},{text:"塞尔维亚语(拉丁)",value:"srq_latn"},{text:"斯瓦希里语",value:"swa"},{text:"瑞典语",value:"swe"},{text:"叙利亚语",value:"syr"},{text:"泰米尔语",value:"tam"},{text:"泰卢固语",value:"tel"},{text:"塔吉克",value:"tgk"},{text:"他加禄语",value:"tgl"},{text:"提格里尼亚",value:"tir"},{text:"土耳其语",value:"tur"},{text:"维吾尔语",value:"uig"},{text:"乌克兰语",value:"ukr"},{text:"乌尔都语",value:"urd"},{text:"乌兹别克语",value:"uzb"},{text:"乌兹别克语(西里尔)",value:"uzb_cyrl"},{text:"越南语",value:"vie"},{text:"意第绪语",value:"yid"}].reduce(((e,t)=>(r.push(t.value),e[t.value]=t.text,e)),{});var c=a(0),i=a.n(c);const o=n.a.ofType(),u=(e,{handleClick:t,modifiers:a})=>a.matchesPredicate?i.a.createElement(l.A,{onClick:t,active:a.active,key:e,text:s[e]}):null;function d(e){const{value:t,onChange:a,isSmall:n,isLarge:c}=e;return i.a.createElement(o,{filterable:!1,activeItem:t,items:r,itemRenderer:u,onItemSelect:a,popoverProps:{usePortal:!1,modifiers:{preventOverflow:{boundariesElement:"viewport"}}}},i.a.createElement(l.d,{rightIcon:"caret-down",small:n,large:c},s[t]))}},639:function(e,t,a){"use strict";String.prototype.matchAll||(String.prototype.matchAll=function*(e){const t=new RegExp(e,e.flags),a=this.toString();let n;for(;n=t.exec(a);)yield n})},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return ne}));a(639);var n=a(0),l=a.n(n),r=a(59),s=a(198),c=a(90),i=a(105),o=a(640),u=a(10),d=a(3),m=a(72);const v=Object(c.a)(d.a,"selectedAPIs");function p(){const[e,t]=Object(u.a)(v);return l.a.createElement(l.a.Fragment,null,m.a.map((a=>l.a.createElement(r.A,{key:a.id,text:a.name,onClick:()=>(e=>{const a=e.id;t((e=>{const t=e.selectedAPIs;t.indexOf(a)<0&&t.push(a)}))})(a),disabled:!e||e.selectedAPIs.includes(a.id)}))))}var g=a(20),f=a(298);let b="";const x=document.querySelector('link[rel=icon],link[rel="shortcut icon"]');b=x?x.href:window.location.origin+"/favicon.ico";const h=Object(g.b)(((e,t)=>{switch(t.type){case"save translate record":const a=Date.now(),n=Object(f.a)(a+"-");return e.translateId=n,void browser.runtime.sendMessage({action:"save history record",record:{text:t.text,date:a,url:window.location.href,title:document.title,favicon:b}}).catch((e=>{window.alert(`保存历史记录时发生了一个错误：${null==e?void 0:e.message}`)}))}}));var E=a(119),w=a(386),O=a(255);const y={results:{}},C=(e,t)=>Object(g.b)(e,(e=>{switch(t.type){case"set loading":return void(t.value?e.results[t.apiId]={loading:!0,result:null}:Object(w.a)(e.results,[t.apiId,"loading"],!1));case"set result":return void Object(w.a)(e.results,[t.apiId,"result"],t.result);case"clear results":return void(e.results={});case"save favorites":const a=t.selectedAPIs,n={};return Object(O.a)(e.results,((e,t)=>{if(!e||e.loading)return;const l=e.result;l&&a.includes(t)&&(n[t]=Object(g.d)(l))})),void browser.runtime.sendMessage({action:"save favorite",record:{text:t.text,results:n}}).catch((e=>{window.alert(`保存到收藏夹时发生了一个错误：${null==e?void 0:e.message}`)}))}}));var k=a(387),j=a(390);var S=a(243),I=a(233),T=a(388),N=a(99),z=a(26);const P=N.c.ctrl,A=(z.c?"⌘":"Ctrl")+" + Enter",L=`翻译文本框内的文本(${A})`,R=`按下 ${A} 也可以翻译文本框内的文本`,F=Object(n.forwardRef)((function(e,t){const{isSmall:a,isLarge:s,value:c,onChange:i,onTranslate:o,iconSize:u,hideBtn:d,auto:m,showTip:v,onTipDismiss:p}=e,[g,f]=Object(n.useState)(null),b=Object(T.a)(),x=Object(I.b)(g);return Object(n.useEffect)((()=>{if(!m)return;const e=window.setTimeout(o,1e3);return()=>{window.clearTimeout(e)}}),[m,o]),Object(n.useImperativeHandle)(t,(()=>({select(){null==g||g.select()}})),[g]),l.a.createElement("div",{className:"query-text"},l.a.createElement(r.S,{fill:!0,small:a,large:s,inputRef:f,value:c,placeholder:R,onChange:e=>{i(e.target.value)},onKeyDown:e=>{e.stopPropagation(),e[P]&&13===e.keyCode&&o()}}),l.a.createElement(r.d,{className:"translate-btn",style:{display:d?"none":void 0,right:18+(x.v&&b||0),bottom:8+(x.h&&b||0)},title:L,icon:l.a.createElement(r.w,{icon:"search",iconSize:u}),small:a,large:s,intent:"primary",onClick:()=>{o(),null==g||g.focus()}}),v&&l.a.createElement(r.f,null,"从 v7.6.6 开始，为了避免在输入过程中触发翻译从而造成字符数的浪费，文本框改为了点击按钮或按下 Ctrl + Enter 才会触发翻译。不过，你仍然可以前往“设置” - “网页划词面板”中开启“自动翻译文本框”来启用自动翻译功能。",l.a.createElement("a",{onClick:p},"不再提示")))})),M=Object(c.a)(d.a,["ocrService"]);function U(){browser.runtime.sendMessage({action:"open options page",suffix:"#/services"}).catch((e=>{window.alert("打开设置页时发生了一个错误。错误消息：："+(null==e?void 0:e.message))}))}function B(){const[e,t]=Object(n.useState)(!1);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"正在从截图中提取文本，请稍候……"),l.a.createElement("div",{className:"bp3-text-muted bp3-text-small"},!e&&l.a.createElement("div",{style:{marginTop:4}},l.a.createElement("a",{onClick:()=>t(!0)},"为什么还没有提取成功？")),e&&l.a.createElement("div",{style:{margin:"4px 0 0 0"}},l.a.createElement("p",null,"划词翻译默认使用的图片转文字（OCR）服务有以下弊端："),l.a.createElement(r.V,null,l.a.createElement("li",null,"识别时间较长，大约需要 2 ~ 8 秒。"),l.a.createElement("li",null,"准确率相对较低。"),l.a.createElement("li",null,"不能自动判断图片里的语种，识别前需要手动指定。"),l.a.createElement("li",null,"会占用一定的系统资源，偶尔会导致电脑卡顿。")),l.a.createElement("div",null,"建议前往",l.a.createElement("a",{onClick:U},"服务中心页面"),"选择【百度智能云通用文字识别】服务以获得更好的使用体验。"))))}function q(e){const{fileInputProps:t,initialText:a="请选择",onInputChange:s}=e,[c,i]=Object(n.useState)(!1),[o,u]=Object(n.useState)(a);return l.a.createElement(r.n,Object.assign({text:o,hasSelection:c,buttonText:"浏览",onInputChange:e=>{var t;const n=null===(t=e.target.files)||void 0===t?void 0:t[0];n?(i(!0),u(n.name)):(i(!1),u(a)),null==s||s(e)}},t))}var _=a(252);function K(e){return new Promise(((t,a)=>{const n=new FileReader;n.onload=()=>t(n.result),n.onerror=()=>a(n.error),n.readAsDataURL(e)}))}const D=Object(c.a)(d.a,["localOCR","ocrService"]);function $(e){var t;const{isLarge:a,isSmall:s,iconSize:c,onSelect:i}=e,[o,d]=Object(u.a)(D),m="tesseractocr"===(null==o?void 0:o.ocrService),[v,p]=Object(n.useState)(!1),g=Object(n.useRef)(null);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.d,{icon:l.a.createElement(r.w,{icon:"media",iconSize:c}),small:s,large:a,minimal:!0,title:"图片翻译",onClick:()=>{m?p(!0):new Promise((e=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",(()=>{var a;e(null===(a=t.files)||void 0===a?void 0:a[0])})),t.click()})).then((e=>{e&&K(e).then(i,(e=>{window.alert(`读取图片失败，错误消息：${e.message}`)}))}))}}),m&&l.a.createElement(r.l,{isOpen:v,enforceFocus:!1,usePortal:!1},l.a.createElement("form",{onSubmit:e=>{var t,a;e.preventDefault();const n=null===(a=null===(t=g.current)||void 0===t?void 0:t.files)||void 0===a?void 0:a[0];n&&(p(!1),K(n).then(i,(e=>{window.alert(`读取图片失败，错误消息：${e.message}`)})))}},l.a.createElement("div",{className:"bp3-dialog-body"},l.a.createElement("p",null,l.a.createElement(q,{initialText:"请选择图片",onInputChange:e=>{g.current=e.target},fileInputProps:{inputProps:{accept:"image/*",required:!0},fill:!0,large:a}})),l.a.createElement("div",null,"选择语种：",l.a.createElement(_.a,{value:(null===(t=null==o?void 0:o.localOCR)||void 0===t?void 0:t.lang)||D.localOCR.lang,onChange:e=>{d((t=>{t.localOCR.lang=e}))},isLarge:a,isSmall:s}))),l.a.createElement("div",{className:"bp3-dialog-footer"},l.a.createElement("div",{className:"bp3-dialog-footer-actions"},l.a.createElement(r.d,{small:s,large:a,type:"reset",onClick:()=>{p(!1)}},"取消"),l.a.createElement(r.d,{type:"submit",small:s,large:a,intent:"primary"},"确定"))))))}function H(e){const{iconSize:t}=e;return l.a.createElement("span",{className:"bp3-icon"},l.a.createElement("svg",{version:"1.1",id:"Capa_1",width:t,height:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490.9 490.9",style:{enableBackground:"new 0 0 490.9 490.9"},xmlSpace:"preserve"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{d:"M245.5,322.9c53,0,96.2-43.2,96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2,43.2-96.2,96.2v130.5\n\t\t\tC149.3,279.8,192.5,322.9,245.5,322.9z M173.8,96.2c0-39.5,32.2-71.7,71.7-71.7s71.7,32.2,71.7,71.7v130.5\n\t\t\tc0,39.5-32.2,71.7-71.7,71.7s-71.7-32.2-71.7-71.7V96.2z"}),l.a.createElement("path",{d:"M94.4,214.5c-6.8,0-12.3,5.5-12.3,12.3c0,85.9,66.7,156.6,151.1,162.8v76.7h-63.9c-6.8,0-12.3,5.5-12.3,12.3\n\t\t\ts5.5,12.3,12.3,12.3h152.3c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3,151.1-76.9,151.1-162.8\n\t\t\tc0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3c0,76.6-62.3,138.9-138.9,138.9s-138.9-62.3-138.9-138.9\n\t\t\tC106.6,220,101.2,214.5,94.4,214.5z"})))))}var Z=a(98),Q=a(104),V=a(133),J=a(88);const W=new Z.a("sttLimit",3),X=Object(c.a)(d.a,["tipForSTTClosed"]);function G(e){const{isLarge:t,isSmall:a,iconSize:s,onSelect:c}=e,[i,o]=Object(u.a)(X),[d,m]=Object(n.useState)(!1),[v,p]=Object(n.useState)("default-speech"),[g,f]=Object(n.useState)(""),[b,x]=Object(n.useState)(""),[h,E]=Object(n.useState)(""),{serviceImplement:w,langMap:O}=Object(n.useMemo)((()=>{switch(v){case"TencentRealtime":return{serviceImplement:J.b,langMap:J.a};case"default-speech":return{serviceImplement:Q.b,langMap:Q.c}}}),[v]);return Object(n.useEffect)((()=>{switch(v){case"TencentRealtime":f(J.c.defaultLang);break;case"default-speech":f(Q.d.defaultLang)}}),[v]),Object(n.useEffect)((()=>{if(!d)return;const e=[];let t,a=!1;return w.microphone(g,{stopOnFirstSentence:!0,onError:e=>{window.alert(e.message),m(!1)},onSentence:t=>{e.push(t),x(e.join(""))},onInterim:t=>{E(e.join("")+t)},onStop:e=>{e.length?(W.addOne(),c(e.join(""))):window.alert("未识别出任何文本，请重试。"),m(!1)}}).then((e=>{a?null==e||e.abort():t=e})),()=>{a=!0,null==t||t.abort(),x(""),E("")}}),[d,g,c,w]),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.d,{icon:l.a.createElement(H,{iconSize:s}),small:a,large:t,minimal:!0,title:"语音翻译",onClick:Q.a?()=>{i&&!i.tipForSTTClosed&&(window.alert("语音翻译功能目前只有在你的电脑能访问外网的情况下才能使用。未来的版本中会改善此情况，届时会另行通知。"),o({tipForSTTClosed:!0})),W.isOver().then((e=>{e?window.alert("非会员用户每天只能使用 3 次语音翻译功能，成为会员即可解除此限制。"):m(!0)}))}:()=>{window.alert("Firefox 暂时不支持语音翻译功能，请在其它浏览器上使用。未来的版本中会添加对 Firefox 浏览器的支持，届时会另行通知。")}}),l.a.createElement(r.l,{isOpen:d,enforceFocus:!1,usePortal:!1},l.a.createElement("div",{className:"bp3-dialog-body"},l.a.createElement("div",{style:{marginBottom:10}},"选择服务：",l.a.createElement(r.u,{onChange:e=>{p(e.currentTarget.value)},large:t,value:v},V.c.map((e=>l.a.createElement("option",{key:e.id,value:e.id},e.name)))),"切换语种：",l.a.createElement(r.u,{onChange:e=>{f(e.currentTarget.value)},large:t,value:g},Object.keys(O).map((e=>l.a.createElement("option",{key:e,value:e},O[e]||e))))),l.a.createElement(r.x,{value:b||h,readOnly:!0,placeholder:"请讲，我正在听……"})),l.a.createElement("div",{className:"bp3-dialog-footer"},l.a.createElement("div",{className:"bp3-dialog-footer-actions"},l.a.createElement(r.d,{large:t,onClick:()=>{m(!1)}},"取消")))))}const Y=Object(c.a)(d.a,"selectedAPIs","collapsedAPIs","selectedExternalLinks","destination","autoPlay","autoCopy","recentUseLangFrom","recentUseLangTo","sourceTransformNCaml","sourceTransformNoBr","sourceTransformNoComment","tipPanelSettingsClosed","tipTextareaBtnClosed","historyEnabled","favoritesEnabled","quickLinks","tipQuickLinksClosed","panelCustomStyle","customAPINames","panelSize","textAreaAuto"),ee=Object(c.a)(d.b,["user","noticesUnreadNum"]),te=/^[A-Z]?[a-z]+([A-Z][a-z]*)+$/,ae=/^([A-Za-z]+_)+[A-Za-z]+$/,ne={small:14,middle:18,large:22};t.b=Object(n.forwardRef)((function(e,t){const{toaster:a,headerLeft:d,headerRight:m,extendOptions:v,showTextArea:b=!1,size:x="small",style:w,hasDragTip:O}=e,[I,T]=Object(u.a)(Y),[N]=Object(u.a)(ee),z=(null==N?void 0:N.user)||null,P=Object(n.useMemo)((()=>{const e=null==I?void 0:I.selectedAPIs,t=null==I?void 0:I.customAPINames;if(e&&t)return(null==z?void 0:z.forever)?[...e,...t]:e}),[null==I?void 0:I.customAPINames,null==I?void 0:I.selectedAPIs,null==z?void 0:z.forever]),A=Object(n.useMemo)((()=>{const e=null==I?void 0:I.collapsedAPIs;return e&&e.length?Object(g.b)(P,(t=>{t&&e.forEach((e=>{const a=t.indexOf(e);a>=0&&t.splice(a,1)}))})):P}),[P,null==I?void 0:I.collapsedAPIs]),L=(null==I?void 0:I.quickLinks.filter((e=>e.panel)))||[],R=I||Y,U=ne[x],q="small"===x,_="large"===x,[K,D]=Object(n.useState)(""),[H,Z]=Object(n.useState)(""),[Q,V]=Object(n.useState)(""),J=H===Q,W=Object(n.useRef)(null),[X,le]=Object(n.useState)(!1),{results:re,queryResult:se,dispatchResults:ce}=function(e,t,a,l){const r=Object(n.useRef)(""),[s,c]=Object(n.useReducer)(C,y),i=Object(k.a)(e),o=Object(k.a)(a),u=Object(k.a)(t),d=Object(k.a)(l),m=async(e,t,a,n=(()=>!1))=>{let l;c({type:"set loading",apiId:t,value:!0});try{l=await browser.runtime.sendMessage({action:"translate",data:{apiCode:t,text:e,source:a}})}catch(a){if(n())return;return c({type:"set loading",apiId:t,value:!1}),void c({type:"set result",apiId:t,result:{text:e,error:{type:"OTHER",message:(null==a?void 0:a.message)||"未知错误"}}})}n()||(c({type:"set loading",apiId:t,value:!1}),l&&c({type:"set result",apiId:t,result:l}))};return Object(n.useEffect)((()=>{if(!l)return;if(e===i&&a===o&&l===d)return;c({type:"clear results"});const n=Object(f.a)();if(r.current=n,!e)return;const s=()=>n!==r.current;null==t||t.forEach((t=>{m(e,t,a,s)}))}),[l,e,t,a]),Object(n.useEffect)((()=>{if(!u||!t)return;const n=Object(j.a)(t,u);if(!n.length)return;const l=r.current,c=()=>l!==r.current;n.forEach((t=>{s.results[t]||m(e,t,a,c)}))}),[e,s.results,t,a]),{results:s,queryResult:m,dispatchResults:c}}(Q,A,K,null==I?void 0:I.destination),[ie,oe]=Object(n.useState)([]),[,ue]=Object(n.useReducer)(h,{translateId:""}),{isInFavorites:de,saveOrDelete:me}=function(e,t,a){const[l,r]=Object(n.useState)(!1);Object(n.useEffect)((()=>{browser.runtime.sendMessage({action:"is text in favorites",text:e}).then(r)}),[e]);const s=Object(n.useCallback)((()=>{browser.runtime.sendMessage({action:"delete record in favorites",text:e}).catch((e=>{window.alert(`从收藏夹中删除时发生了一个错误：${null==e?void 0:e.message}`)})),r(!1)}),[e]),c=Object(n.useCallback)((()=>{e&&a&&(t({type:"save favorites",text:e,selectedAPIs:a}),r(!0))}),[t,a,e]);return{isInFavorites:l,saveOrDelete:l?s:c}}(Q,ce,A),ve=function(e){const[t]=Object(u.a)(M);return Object(n.useCallback)((a=>{const n="tesseractocr"===(null==t?void 0:t.ocrService),s=null==e?void 0:e.show({message:n?l.a.createElement(B,null):"正在从截图中提取文本，请稍候……",timeout:0});return browser.runtime.sendMessage({action:"ocr",dataURI:a}).then((t=>(s&&(null==e||e.dismiss(s)),t)),(t=>(null==e||e.show({message:(null==t?void 0:t.message.includes("会员"))?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,t.message),l.a.createElement(r.d,{onClick:E.b,small:!0},"开通会员")):`从图片中提取文字时发生了一个错误：${null==t?void 0:t.message}`,intent:"warning",timeout:0},s),Promise.reject(t))))}),[null==t?void 0:t.ocrService,e])}(a),{sourceTransformNCaml:pe,sourceTransformNoBr:ge,sourceTransformNoComment:fe}=(null==z?void 0:z.vipActivated)?Object(c.a)(I||Y,["sourceTransformNCaml","sourceTransformNoBr","sourceTransformNoComment"]):{sourceTransformNCaml:!1,sourceTransformNoBr:!1,sourceTransformNoComment:!1},be=Object(n.useRef)(""),xe=Object(n.useCallback)((e=>{if(e===be.current)return;be.current=e,oe((e=>Object(g.b)(e,(e=>{e.splice(0)}))));const t=function(e,t){let a=e.trim();return t&&(t.sourceTransformNoBr&&(a=a.replace(/\n/g,"")),t.sourceTransformNoComment&&(a=a.replace(/\/\//g,"")),t.sourceTransformNCaml&&(te.test(a)?a=a.replace(/[A-Z]/g,((e,t)=>0===t?e.toLowerCase():" "+e.toLowerCase())):ae.test(a)&&(a=a.replace(/_/g," ")))),a}(e,{sourceTransformNCaml:pe,sourceTransformNoBr:ge,sourceTransformNoComment:fe});Z(t),V(t)}),[pe,ge,fe]),he=Object(k.a)(Q);Object(n.useEffect)((()=>{R.historyEnabled&&he!==Q&&Q&&ue({type:"save translate record",text:Q})}),[ue,Q,R.historyEnabled]),Object(n.useImperativeHandle)(t,(()=>({select:()=>{window.setTimeout((()=>{var e;null===(e=W.current)||void 0===e||e.select()}))},play(){var e,t;if(!P)return;const a=P[0],n=null===(e=re.results[a])||void 0===e?void 0:e.result;a&&(null==n?void 0:n.text)===be.current&&Object(s.b)({apiId:a,source:n.from,text:n.text,ttsURI:(null===(t=n.phonetic)||void 0===t?void 0:t[0].ttsURI)||n.ttsURI})},ocr:ve,translate:xe})),[xe,ve,re.results,P]);const Ee=Object(n.useMemo)((()=>q?{width:6,height:6,borderRadius:3,right:3,top:1}:_?{width:10,height:10,borderRadius:5,right:8,top:6}:{width:8,height:8,borderRadius:4,right:5,top:3}),[_,q]),we=l.a.createElement(r.d,{icon:l.a.createElement(r.w,{icon:"cog",iconSize:U}),small:q,large:_,minimal:!0,active:X,className:"settings",onClick:()=>{le((e=>!e))},title:"快捷设置"});return l.a.createElement(l.a.Fragment,null,(null==I?void 0:I.panelCustomStyle)&&l.a.createElement("style",null,I.panelCustomStyle),l.a.createElement("div",{id:"translate-panel",className:"size-"+x,style:w},l.a.createElement("div",{className:"fixed"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"left"},d,l.a.createElement($,{isSmall:q,isLarge:_,iconSize:U,onSelect:e=>{ve(e).then(xe,i.a)}}),l.a.createElement(G,{isSmall:q,isLarge:_,iconSize:U,onSelect:xe})),l.a.createElement("div",{className:"drag-block",title:O?"按住不放可以拖动":void 0}),l.a.createElement("div",{className:"right"},!!ie.length&&l.a.createElement(r.d,{icon:l.a.createElement(r.w,{icon:"undo",iconSize:U}),small:q,large:_,minimal:!0,title:"返回上一次翻译",onClick:()=>{const e=Object(o.a)(ie);e&&(Z(e),V(e)),oe((e=>Object(g.b)(e,(e=>{e.pop()}))))}}),!!(null==N?void 0:N.noticesUnreadNum)&&l.a.createElement("div",{style:{fontSize:0,position:"relative"}},l.a.createElement(r.d,{icon:l.a.createElement(r.w,{icon:"notifications",iconSize:U}),small:q,large:_,minimal:!0,title:`你有 ${N.noticesUnreadNum} 条未读消息`,onClick:()=>{browser.runtime.sendMessage({action:"open options page",suffix:"?notices"})}}),l.a.createElement("div",{style:{position:"absolute",background:"rgb(243,1,1)",...Ee}})),I&&l.a.createElement(l.a.Fragment,null,I.favoritesEnabled&&l.a.createElement(r.d,{icon:l.a.createElement(r.w,{icon:de?"star":"star-empty",iconSize:U}),disabled:!Q,small:q,large:_,minimal:!0,title:de?"从收藏夹中删除":"添加到收藏夹",onClick:me}),I.tipPanelSettingsClosed&&we,!I.tipPanelSettingsClosed&&l.a.createElement(r.H,{enforceFocus:!1,content:l.a.createElement("div",{className:"bp3-text-small",style:{width:"200px",padding:"5px"}},"添加 / 隐藏翻译源、语种切换、鼠标悬浮取词开关和显示翻译文本开关在这里。",l.a.createElement("a",{onClick:()=>{T({tipPanelSettingsClosed:!0})}},"不再提示")),canEscapeKeyClose:!1,isOpen:!I.tipPanelSettingsClosed,usePortal:!1},we)),m)),l.a.createElement(r.j,{isOpen:X,keepChildrenMounted:!0},l.a.createElement(E.a,{source:K,setSource:D,options:I,setOptions:T,user:z,size:x},v)),b&&l.a.createElement(F,{isLarge:_,isSmall:q,iconSize:U,value:H,onChange:Z,onTranslate:()=>{xe(H)},ref:W,hideBtn:J||!H,auto:(null==I?void 0:I.textAreaAuto)||!1,showTip:!!I&&!I.tipTextareaBtnClosed,onTipDismiss:()=>{T({tipTextareaBtnClosed:!0})}})),l.a.createElement("div",{className:"body",style:J?void 0:{opacity:.7}},!Q&&l.a.createElement("p",null,"请输入需要翻译的文本。"),Q&&I&&(null==P?void 0:P.map(((e,t)=>{const a=re.results[e];return l.a.createElement(s.a,{key:e,apiId:e,result:a,size:x,queryResult:t=>{se(Q,e,t||K)},autoPlay:I.autoPlay&&0===t,autoCopy:!!(null==z?void 0:z.vipActivated)&&I.autoCopy&&0===t,setQuery:e=>{oe((e=>Object(g.b)(e,(e=>{e.push(Q)})))),V(e),Z(e)},collapse:I.collapsedAPIs.includes(e),onCollapseChange:()=>{T((t=>{const a=t.collapsedAPIs.indexOf(e);a>=0?t.collapsedAPIs.splice(a,1):t.collapsedAPIs.push(e)}))}})}))),P&&!P.length&&l.a.createElement(r.F,{className:"no-api",title:"你隐藏了所有翻译源",description:"请添加一个翻译源来显示翻译结果。",action:l.a.createElement(r.H,{usePortal:!1,content:l.a.createElement(r.y,null,l.a.createElement(p,null))},l.a.createElement(r.d,{icon:"add",small:q,large:_,text:"添加翻译源"}))}),!!(null==I?void 0:I.selectedExternalLinks.length)&&l.a.createElement("div",{className:"external-translators"},I.selectedExternalLinks.map((e=>{const t=S.a.find((t=>t.id===e));return t?l.a.createElement("div",{key:e},l.a.createElement(r.b,{small:q,large:_,text:t.name,target:"_blank",href:t.generateLink(Q,I.destination,K)})):null}))),I&&!I.tipQuickLinksClosed&&Q&&l.a.createElement(r.f,{style:{marginBottom:8,fontSize:12}},"下方是预定义的三个快捷链接，你可以前往“",l.a.createElement("a",{onClick:()=>{browser.runtime.sendMessage({action:"open options page"})}},"设置"),"” - “翻译源” - “快捷链接”中修改或删除它们。",l.a.createElement("a",{onClick:()=>{T({tipQuickLinksClosed:!0})}},"不再提示")),!!L.length&&Q&&l.a.createElement("div",{className:"quick-links"},L.map((e=>l.a.createElement("a",{key:e.name,href:e.link.replace("%s",encodeURIComponent(Q)),target:"_blank",rel:"noreferrer"},e.name)))))))}))},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(90),l=a(3),r=a(177);class s{constructor(e,t){this.storageKey=e,this.max=t}async isOver(e){var t;const a=this.storageKey,s=Object(n.a)(l.b,["user",a]),c=await browser.storage.local.get(s);if(null===(t=c.user)||void 0===t?void 0:t.vipActivated)return!1;const i=c[a];let o=!1;const u=new Date;return i.date||(i.date=u.getTime()),Object(r.a)(u,i.date)?i.times>=this.max&&(o=!0):(i.date=u.getTime(),i.times=0),e&&!o&&(i.times+=1),await browser.storage.local.set({[a]:i}),o}async addOne(){const e=Object(n.a)(l.b,["user",this.storageKey]),t=(await browser.storage.local.get(e))[this.storageKey];t.times+=1,await browser.storage.local.set({[this.storageKey]:t})}}},99:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(26),l=a(31);const r=a.n(l)()("hotkeys"),s={ctrl:n.c?"metaKey":"ctrlKey",alt:"altKey",shift:"shiftKey"},c={ctrl:n.c?[91,93]:[17],alt:[18],shift:[16]};function i(e,t){return!(!t||!t.length)&&t.every((t=>e[s[t]]))}function o(e,t,a,n){const l=new Set;let s=!1;function i(){l.clear(),s?(s=!1,r("辅助键处于激活状态，执行中断回调"),n()):r("辅助键未处于激活状态")}function o(){r("页面失去了焦点，执行中断操作"),i()}function u(a){const n=a.keyCode,o=l.size;if(!e.some((e=>{if(c[e].includes(n))return l.add(e),!0})))return r("按下了不是辅助键的其它键，执行中断操作"),void i();o!==l.size&&(r("按下了新的辅助键，当前已经按下的辅助键：",[...l]),l.size===e.length&&(r("全部辅助键已按下，将辅助键改为激活状态，并执行辅助键按下回调"),s=!0,t()))}function d(t){const n=t.keyCode,i=l.size;if(!i)return;e.some((e=>{if(c[e].includes(n))return l.delete(e),!0}))&&i!==l.size&&(r("松开了新的辅助键，当前已经按下的辅助键：",[...l]),s=!1,e.length-l.size==1&&(r("一个辅助键已松开，执行辅助键松开回调"),a()))}return window.addEventListener("keydown",u),window.addEventListener("blur",o),window.addEventListener("keyup",d),()=>{window.removeEventListener("keydown",u),window.removeEventListener("blur",o),window.removeEventListener("keyup",d)}}}}]);