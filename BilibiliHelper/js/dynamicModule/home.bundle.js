(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{542:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i(18),o=i.n(n),r=i(17),s=i.n(r),a=i(1),c=i.n(a),l=i(0),d=i.n(l),p=i(2),h=i.n(p),m=i(3);const u=m.d.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,g=m.d.h4`
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
`;class b extends d.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:n,rowGap:r,columnsGap:a,footer:c,sectionRef:l}=e,p=s()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return d.a.createElement(u,o()({className:"section",rowGap:r,columnsGap:a,ref:l},p),i?d.a.createElement(g,{className:"section-title"},i):null,d.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${n}, 1fr)`,gridColumnEnd:"span "+n}},t),c)}}c()(b,"propTypes",{children:h.a.any,footer:h.a.any,title:h.a.any,columns:h.a.number,rowGap:h.a.number,columnsGap:h.a.number,sectionRef:h.a.any}),c()(b,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},553:function(e,t,i){"use strict";i.r(t);var n=i(28),o=i.n(n),r=i(29),s=i.n(r),a=i(15),c=i.n(a),l=i(14),d=i.n(l),p=i(12),h=i.n(p),m=i(11),u=i.n(m),g=i(18),b=i.n(g),v=i(6),f=i.n(v),x=i(31),y=i.n(x),w=i(1),L=i.n(w),k=i(2),V=i.n(k),M=i(0),A=i.n(M),C=i(10),E=i(204),D=(i(205),i(3)),_=i(26),O=i(13),S=i.n(O),T=i(7),B=i(542),R=i(56);function G(e,t){var i=u()(e);if(h.a){var n=h()(e);t&&(n=n.filter((function(t){return d()(e,t).enumerable}))),i.push.apply(i,n)}return i}function N(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?G(Object(i),!0).forEach((function(t){L()(e,t,i[t])})):c.a?s()(e,c()(i)):G(Object(i)).forEach((function(t){o()(e,t,d()(i,t))}))}return e}const j={new:E.c,old:E.a,simple:E.b},I=D.d.div`
  //.topic {
  //  margin-top: 0;
  //  margin-bottom: 6px;
  //  margin-left: -10px;
  //  padding: 4px 0 4px 10px;
  //  font-size: 12px;
  //  color: #3B3B3B;
  //  position: sticky;
  //  top: -10px;
  //  z-index: 2;
  //  background-color: #f4f4f4;
  //}
  .topic {
    display: flex;
    margin: 0;
    color: #3B3B3B;

    b {
      margin: 0 4px;
      color: var(--bilibili-pink);
    }

    .more-btn {
      margin-left: auto;
      cursor: pointer;
    }
  }

  @media (prefers-color-scheme: dark) {
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }
  }
`,P=D.d.div.attrs({className:"popup-main-home"})`
  position: relative;
  display: grid;
  //grid-template-columns: repeat(auto-fill, 196px);
  //grid-template-rows: repeat(auto-fill, 135px);
  //grid-column-gap: 12px;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
  margin-bottom: 42px;

  &::-webkit-scrollbar {
    width: 3px;
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

  .carousel {
    margin-left: -10px;
    width: calc(100% + 20px);
    height: 92px;
    overflow: hidden;

    img:not([src]) {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0 0 0 / 10%);
    }
  }

  .LazyLoad {
    min-height: 149px;
  }

  .recommend-video-list {
    .section-content {
      padding-top: 6px;
    }
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
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,z=D.d.div`
  margin-bottom: -12px;
  width: auto;
  overflow: auto;

  .list {
    display: flex;
    margin-top: 6px;
    width: 100%;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`,H=D.d.a`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin: 0 2.5px;
  padding: 4px 1px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
  content-visibility: print;
  contain-intrinsic-size: 54px 0;
  will-change: scroll-position;

  &:hover {
    background-color: rgba(255, 255, 255);
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }

  .user-name {
    overflow: hidden;
    //text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 114%;
    word-break: break-all;
    color: var(--paper-grey-900);
    text-align: center;
    zoom: 0.8;
  }

  @media (prefers-color-scheme: dark) {
    .user-name {
      color: var(--paper-grey-100);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;D.d.div`
  display: flex;
  align-items: center;

  .button {
    height: 22px;
  }
`;class $ extends A.a.Component{constructor(e){super(e),L()(this,"state",{liveList:[],livingCount:0,carousel:[],offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[]}),L()(this,"contentType","recentVideo"),L()(this,"videoListRef",A.a.createRef()),L()(this,"bottomObserverRef",A.a.createRef()),L()(this,"currentDidList",new y.a),L()(this,"getDynamic",(e=this.state.offsetDynamicId)=>new f.a(t=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},e=>{if(e){const{recentVideoList:i,adMap:n}=this.state,{hasMore:o,offsetDynamicId:r}=e;if(e.cards=e.cards.filter(e=>{if(e.isSpecialAttention=this.context.specialAttentionList.includes(e.card.owner.mid),!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0}),!Object(T.isVIP)(this.context.bhAccount)&&n.length>0){const t=1,o=n.filter(e=>!e.hasShow),r=Math.floor(Math.random()*(o.length+t));i[0]&&i[0].isAD&&i.shift();const s=o[r];s&&(s.hasShow=!0,e.cards.unshift(N(N({},s),{},{isAD:!0,link:s.link,cover:s.cover,title:s.title})))}i.push(...e.cards),this.setState({hasMoreVideos:o,recentVideoList:i,offsetDynamicId:r},()=>{t()})}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0},()=>{t()})})})),L()(this,"getHotVideos",()=>new f.a(e=>{const{hotVideoList:t,hotVideoListPageNumber:i}=this.state;this.state.hasMoreVideos?chrome.runtime.sendMessage({target:"mainHome",event:"getHotVideos",pn:i},n=>{if(n){const{list:o,hasMore:r}=n;o.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)}),t.push(...o),this.setState({hotVideoList:t,hasMoreVideos:r,hotVideoListPageNumber:i+1},()=>e())}}):e()})),L()(this,"getLiveList",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users?size=20",options:{contentType:"json"}},e=>{e&&e.data&&e.data.items&&e.data.items.length>0&&this.setState({liveList:e.data.items,livingCount:e.data.count})})}),L()(this,"handleOnClickVideoCover",(e,t,i)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:i}),e.preventDefault(),this.createTab("https://www.bilibili.com/video/"+t,"direct"===this.context.videoOpenMethod()&&0===e.button)}),L()(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation();const{specialAttentionList:i}=this.context,{videoList:n,recentVideoList:o,hotVideoList:r}=this.state;new f.a((e,n)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},o=>{if(o){const o=i.indexOf(t);o>=0?(i.splice(o,1),e(i)):n()}else n()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},o=>{o?(i.push(t),e(i)):n()}))}).then(e=>{"hot"===this.contentType||"default"===this.contentType?this.setState({specialAttentionList:e,videoList:n.map(t=>(t.isSpecialAttention=e.includes(t.owner.mid),t)),hotVideoList:r.map(t=>(t.isSpecialAttention=e.includes(t.owner.mid),t))}):"recentVideo"===this.contentType&&this.setState({recentVideoList:o.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t))})})}),L()(this,"handleOnClickMoreLiving",()=>{this.props.history.push("/live")}),L()(this,"handleOnClickOpenLive",(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.createTab(t,"direct"===this.context.videoOpenMethod()&&0===e.button)})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"ad",event:"getAds",position:"popupMainHome"},e=>{e&&e.length>0&&this.setState({adMap:e})});const e=S.a.get("mainHome-config")||{},t=!e||!!e.showLiveBar;this.setState({showLiveBar:t}),t&&this.getLiveList(),this.getDynamic(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMoreVideos?e.length&&0!==e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()},{root:this.videoListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:n}=this.context;return i&&t>0?A.a.createElement(z,{style:{gridColumnEnd:"span "+n}},A.a.createElement("h4",{className:"topic"},"正在直播",A.a.createElement("b",null,t),"人",A.a.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"查看全部")),A.a.createElement("div",{className:"list"},e.map((e,t)=>A.a.createElement(H,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.link,t)},A.a.createElement(C.d,{className:"user-avatar",url:e.face}),A.a.createElement("span",{className:"user-name"},e.uname))))):null}renderVideoListTitle(){switch(this.contentType){case"hot":case"default":return"综合热门";case"recentVideo":return"最近投稿";default:return""}}renderRecentVideo(e,t){if(!e)return null;const i=j[this.context.videoCardType]||E.a;return e.length>0?e.map((e,t)=>{const{desc:n,card:o}=e;return e.isAD?null:A.a.createElement(i,b()({key:n.dynamic_id_str,isSpecialAttention:e.isSpecialAttention},o,{owner:{name:n.user_profile.info.uname,mid:n.uid,face:n.user_profile.info.face},onClickCover:e=>this.handleOnClickVideoCover(e,n.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,n.uid)}))}):t||0!==e.length?void 0:A.a.createElement("div",{style:{gridColumnEnd:"span 2"}},A.a.createElement(C.b,{onClick:()=>this.createTab("https://passport.bilibili.com/login?from=bilibili-helper",!0)},"未发现已登录的B站账号，点击登录"))}renderVideoList(){const{columns:e,hasLogin:t,bhAccount:i}=this.context,{hotVideoList:n,hasMoreVideos:o,recentVideoList:r}=this.state;return A.a.createElement(B.a,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:A.a.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},o&&r&&r.length>0?A.a.createElement(C.b,{className:"border",onClick:()=>this.getDynamic()},"点击加载更多"):null)},this.renderRecentVideo(r,o))}render(){return A.a.createElement(I,{id:"homePage",ref:this.videoListRef},A.a.createElement(P,null,this.renderLiveList(),this.renderVideoList()))}}L()($,"contextType",R.a),L()($,"propTypes",{data:V.a.any,children:V.a.any,history:V.a.object,location:V.a.object}),t.default=Object(_.f)($)}}]);