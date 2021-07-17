(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{554:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var i=a(1),n=a.n(i),r=a(21),o=a(20),l=a(51),s=a(67),c=a.n(s),p=a(2),m=a.n(p),d=a(0),g=a.n(d),b=a(22),u=a.n(b),h=a(3),v=a(56),x=a(80);const f=h.d.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s;
  backdrop-filter: blur(80px);
  z-index: 31;

  .mask {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: rgb(255 255 255 / 80%);
    z-index: -1;
  }

  @supports not (backdrop-filter: blur(80px)) {
    .mask {
      background-color: rgb(255 255 255);
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: inherit;
  }

  &.columns-1 {
    width: 400px;
    height: 500px;
  }

  &.columns-2 {
    width: 500px;
    height: 500px;
  }

  .close-button {
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 50%;
  }

  & > main {
    padding: 12px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--bilibili-gray);

    .mask {
      background-color: rgb(0 0 0 / 88%);
    }

    @supports not (backdrop-filter: blur(80px)) {
      .mask {
        background-color: rgb(31 31 31);
      }
    }
  }
`,k=h.d.section`
  position: relative;
  padding: 6px;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: background-color .2s, border-color .2s;

  .topic {
    margin: 0 0 4px 0;
    padding: 4px 4px 4px 8px;
    background-color: rgb(255 255 255 / 16%);
    border-radius: 2px;
  }

  &:hover {
    background-color: rgb(255 255 255 / 5%);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(255 255 255 / 2%);
    }

    .topic {
      background-color: rgb(255 255 255 / 8%);
    }
  }
`,y=Object(h.d)(k)`
  display: flex;

  .avatar {
    position: relative;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border: 3px solid var(--paper-grey-100);
    border-radius: 50%;
    overflow: hidden;


    &:hover {
      .space-anchor {
        opacity: 1;
      }
    }

    .space-anchor {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0 0 0 / 60%);
      color: var(--bilibili-gray);
      opacity: 0;
      transition: opacity .2s;
      cursor: pointer;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 12px;
    font-size: 18px;

    .username-box {
      display: flex;
      flex-wrap: nowrap;
      margin: 0;
      white-space: nowrap;
    }

    .identity-tags {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 0;
      width: fit-content;

      i {
        display: inline-block;
        padding: 0 4px;
        line-height: 20px;
        vertical-align: bottom;
        border-radius: 4px;
        font-style: normal;
        font-size: 12px;
        background-color: rgb(0 0 0 / 10%);
        color: var(--bilibili-gray);
        white-space: nowrap;
        box-sizing: border-box;
        transform: scale(0.9);
        transform-origin: top right;

        &.bilibili-vip {
          background-color: rgb(251 114 153 / 60%);
        }

        &.bilibili-helper-vip {
          background-color: rgb(251 114 153 / 80%);

          .bilibili-helper-2-icon-cat-paw {
            zoom: .8;
            transform: rotate(-35deg);
            margin-right: 6px;
          }
        }
      }
    }

    .level-box {
      width: 40%;

      .level-value {
        display: flex;
        justify-content: space-between;
        font-size: 12px;

        .exp {
          margin-left: auto;
        }
      }

      .level-bar {
        width: 100%;
        height: 2px;
        background-color: rgb(121 121 121 / 50%);

        .current-level-bar {
          height: 100%;
          background-color: var(--bilibili-pink);
        }
      }
    }

    .wallet {
      margin-top: 4px;
      font-size: 12px;

      & > span {
        margin-left: -4px;
        margin-right: 12px;
        padding: 0 4px;
        background-color: transparent;
        transition: background-color .2s;
        cursor: pointer;

        &:last-of-type {
          margin-right: 0;
        }

        &:hover {
          background-color: rgb(255 255 255 / 40%);
        }

        &:active {
          background-color: rgb(255 255 255 / 20%);
        }

        i {
          font-style: normal;
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .avatar {
      border-color: var(--paper-grey-800);
    }

    .info {
      .tags {
        i {
          background-color: rgb(255 255 255 / 10%);
        }
      }

      .wallet {
        & > span {
          &:hover {
            background-color: rgb(255 255 255 / 20%);
          }

          &:active {
            background-color: rgb(255 255 255 / 10%);
          }
        }
      }

      .identity-tags {
        i {
          cursor: pointer;

          &.bilibili-helper-vip {
            background-color: rgb(251 114 153 / 60%);
          }

          &.bilibili-vip {
            background-color: rgb(251 114 153 / 40%);
          }
        }
      }
    }
  }
`,E=Object(h.d)(k)`
  main {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .task {
      position: relative;
      display: flex;
      flex-grow: 1;
      margin-right: 4px;
      padding: 4px 22px 4px 6px;
      background-color: rgb(255 255 255 / 16%);
      white-space: nowrap;

      &:last-of-type {
        margin-right: 0;
      }

      ::after {
        content: '';
        position: absolute;
        right: 10px;
        bottom: 8px;
        display: block;
        width: 4px;
        height: 4px;
        background-color: var(--paper-grey-400);
        box-shadow: 4px 0 0 0 var(--paper-grey-400), 8px 0 0 0 var(--paper-grey-400),0px -4px 0 0 var(--paper-grey-400);
        transform: rotate(-45deg) scale(0.7);
      }

      &.done {
        ::after {
          background-color: var(--google-green-500);
          box-shadow: 4px 0 0 0 var(--google-green-500), 8px 0 0 0 var(--google-green-500),0px -4px 0 0 var(--google-green-500);
        }
      }

      .sup {
        zoom: 0.75;
        font-style: normal;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      .task {
        background-color: rgb(255 255 255 / 3%);

        ::after {
          background-color: var(--paper-grey-700);
          box-shadow: 4px 0 0 0 var(--paper-grey-700), 8px 0 0 0 var(--paper-grey-700),0px -4px 0 0 var(--paper-grey-700);
        }
      }
    }
  }
`,w=Object(h.d)(k)`
  main {
    display: flex;
    //justify-content: space-between;

    .section {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-right: 4px;
      padding: 4px 10px 4px 6px;
      width: fit-content;
      background-color: rgb(255 255 255 / 16%);
      cursor: pointer;
      transition: background-color .2s;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        background-color: rgb(255 255 255 / 25%);
      }

      i {
        margin-left: 22px;
        font-style: normal;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      .section {
        background-color: rgb(255 255 255 / 8%);
      }
    }
  }
`;class D extends g.a.Component{constructor(e){super(e),n()(this,"state",{navData:null,memberData:null,dailyTaskData:null,statisticalData:null,liveSignData:null,privilegeData:null}),n()(this,"hasInitData",!1),n()(this,"getVIPInfo",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav",options:{contentType:"json"}},e=>{0===e.code&&this.setState({navData:e.data})})}),n()(this,"getMemberInfo",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/account",options:{contentType:"json"}},e=>{0===e.code&&this.setState({memberData:e.data})})}),n()(this,"getDailyTaskState",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/exp/reward",options:{contentType:"json"}},e=>{0===e.code&&this.setState({dailyTaskData:e.data})})}),n()(this,"getStatisticalData",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav/stat",options:{contentType:"json"}},e=>{0===e.code&&this.setState({statisticalData:e.data})})}),n()(this,"getLiveSignStatus",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo",options:{contentType:"json"}},e=>{0===e.code&&this.setState({liveSignData:e.data})})}),n()(this,"getPrivilegeStatus",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/vip/privilege/my",options:{contentType:"json"}},e=>{0===e.code&&this.setState({privilegeData:e.data})})}),n()(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),n()(this,"renderCatIdentities",()=>{const{bhAccount:e}=this.context;return e?e.identities.map(e=>{const t=x.b[e.name];return t?g.a.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:c()(e.to).format("YYYY-MM-DD")+" 到期"},g.a.createElement(r.a,{icon:"cat-paw",size:12}),t):null}).filter(Boolean):null}),n()(this,"renderBasicArea",()=>{const{navData:e}=this.state;return e?g.a.createElement(y,null,(()=>{const{face:t,uname:a,level_info:i,wallet:n,money:r,vipStatus:o,vip_label:s}=e,{current_level:c,next_exp:p,current_exp:m}=i,{text:d}=s,{bcoin_balance:b}=n;return g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:"avatar"},g.a.createElement(l.a,{url:t}),g.a.createElement("div",{className:"space-anchor",onClick:()=>this.openPage("https://space.bilibili.com/")},"个人空间")),g.a.createElement("div",{className:"info"},g.a.createElement("h5",{className:"username-box"},a),g.a.createElement("span",{className:"identity-tags"},this.renderCatIdentities(),o?g.a.createElement("i",{className:"bilibili-vip",onClick:()=>this.openPage("https://account.bilibili.com/account/big")},d):null),g.a.createElement("div",{className:"level-box"},g.a.createElement("div",{className:"level-value"},"LV",c," ",g.a.createElement("span",{className:"exp"},m,"/",p)),g.a.createElement("div",{className:"level-bar"},g.a.createElement("div",{className:"current-level-bar",style:{width:m/p*100+"%"}}))),g.a.createElement("div",{className:"wallet"},g.a.createElement("span",{onClick:()=>this.openPage("https://account.bilibili.com/account/coin")},"硬币: ",g.a.createElement("i",null,r)),g.a.createElement("span",{onClick:()=>this.openPage("https://pay.bilibili.com/paywallet-fe/bb_balance.html")},"B币: ",g.a.createElement("i",null,b)))))})()):null}),n()(this,"renderStatisticalData",()=>{const{bilibiliAccount:e}=this.context,{statisticalData:t}=this.state,a="https://space.bilibili.com/"+e.uid;return t?g.a.createElement(w,null,g.a.createElement("main",null,g.a.createElement("div",{className:"section",onClick:()=>this.openPage(a+"/fans/follow")},"关注",g.a.createElement("i",null,t.following)),g.a.createElement("div",{className:"section",onClick:()=>this.openPage(a+"/fans/fans")},"粉丝",g.a.createElement("i",null,t.follower)),g.a.createElement("div",{className:"section",onClick:()=>this.openPage(a+"/dynamic")},"动态",g.a.createElement("i",null,t.dynamic_count)))):null}),n()(this,"renderDailyTask",()=>{const{dailyTaskData:e,liveSignData:t,privilegeData:a}=this.state;return g.a.createElement(g.a.Fragment,null,g.a.createElement(E,null,g.a.createElement("main",null,e?g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:["task",e.login?"done":null].join(" ")},"每日登录"),g.a.createElement("div",{className:["task",e.watch?"done":null].join(" ")},"每日观看视频"),g.a.createElement("div",{className:["task",50===e.coins?"done":null].join(" ")},"每日投币（",e.coins,"/50）")):null),g.a.createElement("main",null,e?g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:["task",e.share?"done":null].join(" ")},"每日分享视频",g.a.createElement("i",{className:"sup"},"(客户端)"))):null),g.a.createElement("main",null,t?g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:["task",t.status?"done":null].join(" ")},"每日直播签到")):null)),g.a.createElement(E,null,g.a.createElement("main",null,a&&a.list&&a.list.length>0?g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:["task",a.list[0].state?"done":null].join(" ")},"年度专享B币券赠送"),g.a.createElement("div",{className:["task",a.list[1].state?"done":null].join(" ")},"年度专享会员购优惠券")):null)))}),this.modalElement=document.createElement("div"),this.modalElement.id="ownerArea",document.getElementById("root").appendChild(this.modalElement)}componentDidUpdate(e,t,a){e.active||!this.props.active||this.hasInitData||(this.hasInitData=!0,this.getVIPInfo(),this.getMemberInfo(),this.getDailyTaskState(),this.getStatisticalData(),this.getLiveSignStatus(),this.getPrivilegeStatus())}render(){const{columns:e,bilibiliAccount:t}=this.context,{active:a,onClose:i}=this.props;return u.a.createPortal(g.a.createElement(f,{className:["announcement-modal",a?"show":"hide",1===e?"columns-1":"columns-2"].join(" ")},g.a.createElement("div",{className:"mask"}),g.a.createElement("main",null,this.renderBasicArea(),this.renderStatisticalData(),this.renderDailyTask()),g.a.createElement(o.a,{className:"close-button",icon:"close",iconSize:20,onClick:i})),this.modalElement)}}n()(D,"contextType",v.a),n()(D,"propTypes",{active:m.a.bool,onClose:m.a.func})}}]);