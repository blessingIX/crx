(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{556:function(e,n,r){"use strict";r.r(n),r.d(n,"notifyNeedLogin",(function(){return p}));var t=r(147),i=r.n(t),o=r(206),a=r(0),l=r.n(a);const c=r(3).d.span`
  a {
    padding: 0 2px;
    color: var(--bilibili-pink);
    cursor: pointer;
  }
`,s=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login"})},p=i()(()=>{o.a.clearAll(),o.a.error(l.a.createElement(c,null,"点击",l.a.createElement("a",{onClick:s},"登录"),"B站账号"),0)},300)}}]);