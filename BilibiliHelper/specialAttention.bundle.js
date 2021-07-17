(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{542:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var n=i(18),o=i.n(n),a=i(17),r=i.n(a),l=i(1),s=i.n(l),c=i(0),d=i.n(c),p=i(2),h=i.n(p),m=i(3);const u=m.d.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,b=m.d.h4`
  position: sticky;
  top: -10px;
  display: flex;
  margin: 0 -10px;
  padding: 4px 0 4px 10px;
  color: #3B3B3B;
  background-color: #f4f4f4;
  z-index: 2;

  b {
    margin: 0 4px;
    color: var(--bilibili-pink);
  }

  .more-btn {
    margin-left: auto;
    cursor: pointer;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;
    background-color: #1f1f1f;
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class g extends d.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:n,rowGap:a,columnsGap:l,footer:s,sectionRef:c}=e,p=r()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return d.a.createElement(u,o()({className:"section",rowGap:a,columnsGap:l,ref:c},p),i?d.a.createElement(b,{className:"section-title"},i):null,d.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${n}, 1fr)`,gridColumnEnd:"span "+n}},t),s)}}s()(g,"propTypes",{children:h.a.any,footer:h.a.any,title:h.a.any,columns:h.a.number,rowGap:h.a.number,columnsGap:h.a.number,sectionRef:h.a.any}),s()(g,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},543:function(e,t,i){"use strict";i.r(t);var n=i(18),o=i.n(n),a=i(1),r=i.n(a),l=i(10),s=i(0),c=i.n(s),d=i(541),p=i.n(d),h=i(3),m=i(26),u=i(28),b=i.n(u),g=i(29),x=i.n(g),f=i(15),v=i.n(f),k=i(14),w=i.n(k),y=i(12),E=i.n(y),L=i(11),C=i.n(L),N=i(204),O=i(56),A=i(2),R=i.n(A),V=(i(13),i(542));function z(e,t){var i=C()(e);if(E.a){var n=E()(e);t&&(n=n.filter((function(t){return w()(e,t).enumerable}))),i.push.apply(i,n)}return i}const M={new:N.c,old:N.a,simple:N.b},T=h.d.div.attrs({className:"special-account-block"})`
  padding-top: 10px;
  padding-bottom: 20px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`,G=h.d.div`
  display: flex;
  padding: 0 0 4px;
  width: 100%;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  .avatar {
    flex-shrink: 0;
    margin-left: 2px;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    max-width: 540px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;
      line-height: 14px;

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

      .living {
        margin-left: 14px;
        vertical-align: bottom;
        color: var(--bilibili-pink);
        zoom: 0.7;
      }
    }

    p {
      margin: 0 0 4px 0;
      overflow: hidden;
      //white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;

      span, a {
        margin-right: 12px
      }
    }

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    i {
      font-style: normal;
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .name {
        color: #bbb;
      }
    }
  }
`,I=h.d.div.attrs({className:"video-area"})`

  .topic {
    margin: 0 0 6px;
    font-weight: bold;
    color: #989898;
    zoom: 0.8;
  }

  .video-list {
    display: flex;
    flex-direction: column;
    width: calc(100% - 6px);
    //height: 147px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .section-title {
      margin: 0 0 4px;
      padding: 0;
    }

    .video-card {
      //margin-right: 6px;
      height: auto;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .more-video-btn {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      line-height: 30px;
      flex-shrink: 0;
      text-align: center;
      //line-height: 75px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;class S extends c.a.Component{constructor(e){super(e),r()(this,"state",{recentlyVideos:[],pn:1,ps:30,hasMoreVideo:!0}),r()(this,"videoListRef",c.a.createRef()),r()(this,"bottomObserverRef",c.a.createRef()),r()(this,"getVideoInfo",e=>{(this.state.hasMoreVideo||e)&&chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountVideoData",uid:this.props.uid,pn:this.state.pn,ps:this.state.ps},e=>{const{recentlyVideos:t,ps:i,pn:n}=this.state;e.page&&(t.push(...e.list),this.setState({recentlyVideos:t,pn:n+1,ps:i,hasMoreVideo:e.page.count/e.page.ps>e.page.pn}))})}),r()(this,"getLiveInfo",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountLiveData",uid:this.props.uid},e=>{this.setState({liveRoomInfo:e})})}),r()(this,"handleOnCreateUserSpaceTab",()=>{this.createTab("https://space.bilibili.com/"+this.props.uid,{strict:!1})}),r()(this,"handleOnClickViewMoreVideo",()=>{this.createTab(`https://space.bilibili.com/${this.props.uid}/video`,{strict:!1})}),r()(this,"handleOnClickLiveRoom",()=>{const{livingData:e}=this.props;this.createTab("https://live.bilibili.com/"+e.roomId,{strict:!1})}),r()(this,"handleOnClickVideoCover",(e,t)=>{e.preventDefault(),this.createTab("https://www.bilibili.com/video/"+t,{strict:!1})})}componentDidMount(){this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMoreVideo&&e.length&&0!==e[0].intersectionRatio&&this.getVideoInfo()},{root:this.videoListRef.current}),this.observer.observe(this.bottomObserverRef.current))}createTab(e,t){chrome.runtime.sendMessage(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?z(Object(i),!0).forEach((function(t){r()(e,t,i[t])})):v.a?x()(e,v()(i)):z(Object(i)).forEach((function(t){b()(e,t,w()(i,t))}))}return e}({target:"tabController",event:"create",url:e},t))}renderRecommendVideoList(){const{recentlyVideos:e}=this.state,t=M[this.context.videoCardType]||N.a;return e&&e.length>0?e.map(e=>c.a.createElement(t,o()({key:e.bvid},e,{hideAuthor:!0,showNewTag:!0,onClickCover:t=>this.handleOnClickVideoCover(t,e.bvid)}))):"没有视频数据"}render(){const{face:e,name:t,sign:i,level:n,id:o,livingData:a}=this.props,{recentlyVideos:r,liveRoomInfo:s,hasMoreVideo:d}=this.state,{columns:p}=this.context;return c.a.createElement(T,{id:o,ref:this.videoListRef},c.a.createElement(G,null,c.a.createElement("div",{className:"avatar",onClick:this.handleOnCreateUserSpaceTab},c.a.createElement(l.d,{url:e})),c.a.createElement("div",{className:"info"},c.a.createElement("h6",null,c.a.createElement("a",{className:"name",onClick:this.handleOnCreateUserSpaceTab},t),c.a.createElement("span",{className:"level lv"+n},"Lv.",n),a&&!!a.living&&c.a.createElement("a",{className:"living",onClick:this.handleOnClickLiveRoom},"直播中...")),c.a.createElement("p",{title:i},i))),c.a.createElement(I,null,c.a.createElement(V.a,{title:"最近投稿",columns:p,rowGap:4,columnsGap:6,className:"video-list",footer:d&&c.a.createElement("div",{ref:this.bottomObserverRef,className:"more-video-btn",onClick:this.getVideoInfo},"点击加载更多")},this.renderRecommendVideoList())))}}r()(S,"contextType",O.a),r()(S,"propTypes",{id:R.a.string,uid:R.a.number,face:R.a.string,name:R.a.string,level:R.a.number,sign:R.a.string,videos:R.a.any,livingData:R.a.any});const q=h.d.div.attrs({id:"specialAttentionPage",className:"popup-main-special-attention"})`
  display: flex;
  padding: 0 !important;

  .quick-btn-area {
    flex-shrink: 0;
    padding: 4px 0 0 6px;
    width: calc(100% - 8px);
    height: 100%;
    //background-color: #f4f4f4;
    z-index: 3;
    overflow: visible auto;
    box-sizing: border-box;
    pointer-events: none;

    :hover {
      .quick-btn {
        opacity: 1;
      }
    }

    .quick-btn-list {
      display: grid;
      grid-row-gap: 4px;
      justify-content: flex-start;
      margin: -4px;
      padding: 10px 4px 0 2px;
      width: fit-content;
      //height: fit-content;
      max-height: 100%;
      box-sizing: border-box;
      overflow: auto;
      pointer-events: auto;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 100%;
        background-color: rgb(255 255 255);
        box-shadow: 0.5px 0 6px 0 #ddd;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .quick-btn {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;

      width: fit-content;
      border-radius: 50px;
      //background-color: #f4f4f4;
      box-sizing: border-box;
      cursor: pointer;
      pointer-events: none;
      width: fit-content;

      opacity: 0.4;
      transition: opacity .2s ease;

      &:hover {
        //background-color: #d0cfcf;

        .cover {
          border-color: #d0cfcf;
        }

        .name {
          display: block;
        }
      }

      &:last-of-type {

      }

      &.active {
        opacity: 1;
      }

      .cover {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        line-height: 25px;
        border: 2px solid transparent;;
        border-radius: 50%;
        overflow: hidden;
        z-index: 1;
        pointer-events: initial;

        &.living {
          border: 2px solid var(--bilibili-pink);

          ::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            box-shadow: inset 0 0px 2px rgb(0 0 0 / 90%);
          }
        }

        .img {
          pointer-events: none;
        }

        .living-tag {
          position: absolute;
          bottom: -12px;
          left: 5px;
          font-weight: bolder;
          color: var(--bilibili-pink);
          text-shadow: 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white;
          zoom: 0.7;
        }
      }

      .name {
        //position: absolute;
        //top: 0;
        //left: calc(100% - 12px);
        display: none;
        margin-left: -14px;
        padding: 2px 8px 2px 18px;
        width: max-content;
        height: 20px;
        line-height: 16px;
        box-sizing: border-box;
        border-radius: 0 15px 15px 0;
        background-color: #e6e6e6;
        word-break: keep-all;
        pointer-events: none;
      }
    }
  }

  .account-block-list {
    flex-grow: 1;
    margin-left: calc(-100% + 46px);
    padding-left: 6px;
    //width: calc(100% - 36px);
    height: 100%;
    overflow: auto;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .quick-btn-area {
      .quick-btn-list {
        &::before {
          background-color: rgb(21 21 21);
          box-shadow: none;
        }
      }

      .quick-btn {
        color: #bbb;

        &:hover {
          .cover {
            border-color: #545454;
          }

        }

        .name {
          background-color: #1d1c1c;
          color: #bbb;
        }
      }
    }
  }
`,B=h.d.div.attrs({className:"empty-page"})`
  padding: 60px 40px;
  height: calc(100% - 120px);
  color: #999999;
  text-align: center;
  overflow: hidden;

  h1 {
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
    margin-bottom: -10px;
    font-size: 16px;
    z-index: 1;

    a {
      font-weight: bold;
      color: #999999;
      cursor: pointer;
    }
  }

  .bilibili-helper-2-iconfont {
    display: block;
    margin: 0 auto 0 50%;
    transform: translate(-50%, 0px);
    color: #E5E5E5;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .bilibili-helper-2-iconfont {
      color: #171717;
    }
  }
`;t.default=Object(m.f)(class extends c.a.Component{constructor(e){super(e),r()(this,"updateAccountList",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},(e=[])=>{this.setState({attentionList:e})})}),r()(this,"getLivingList",()=>{chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getFullSimpleLiveList"},(e=[])=>{this.setState({livingList:e})})}),r()(this,"handleOnClickAddAttention",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",redirect:chrome.runtime.getURL("/html/config.html#/specialAttention"),url:chrome.runtime.getURL("/html/config.html#/specialAttention")})}),r()(this,"handleOnClickQuickBtn",(e,t)=>{const i=document.getElementById("user"+e);this.setState({currentIndex:t}),i&&i.scrollTo(0,0)}),r()(this,"handleOnMouseLeaveQuickBtnArea",e=>{e.persist();const t=e.target.querySelector(".active");t&&t.scrollIntoView({block:"nearest",behavior:"smooth"})}),this.state={attentionList:[],livingList:[],currentIndex:0}}componentDidMount(){this.getLivingList(),this.updateAccountList()}renderEmpty(){return c.a.createElement(B,null,c.a.createElement("h1",null,"没有特别关注的主播哦"),c.a.createElement("p",null,"点击 ",c.a.createElement("a",{onClick:this.handleOnClickAddAttention},"这里")," 开始添加"),c.a.createElement(l.c,{icon:"cat",size:268}))}renderList(){const{attentionList:e,currentIndex:t,livingList:i}=this.state;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"quick-btn-area",onMouseLeave:this.handleOnMouseLeaveQuickBtnArea},c.a.createElement("div",{className:"quick-btn-list"},e.map((e,n)=>{const o=i.find(({owner:t})=>t.mid===e.uid);return c.a.createElement("div",{key:e.uid,className:["quick-btn",n===t?"active":null].filter(Boolean).join(" "),onClick:()=>this.handleOnClickQuickBtn(e.uid,n)},c.a.createElement("div",{className:["cover",o&&o.living?"living":""].filter(Boolean).join(" ")},c.a.createElement(l.d,{url:e.face})),c.a.createElement("div",{className:"name"},e.name))}),c.a.createElement("div",{className:"quick-btn",onClick:this.handleOnClickAddAttention},c.a.createElement("div",{className:"cover"},c.a.createElement(l.c,{size:16,icon:"option"})),c.a.createElement("div",{className:"name"},"管理特关")))),c.a.createElement("div",{className:"account-block-list"},e.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:e[t].uid,overflow:!0,scrollContainer:"#specialAttentionPage"},c.a.createElement(S,o()({id:"user"+e[t].uid},e[t],{livingData:i.find(({owner:i})=>i.mid===e[t].uid)})))):"没有数据"))}render(){const{attentionList:e}=this.state;return c.a.createElement(q,null,0===e.length?this.renderEmpty():this.renderList())}})}}]);