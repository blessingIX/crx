(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{542:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var o=i(18),n=i.n(o),r=i(17),s=i.n(r),a=i(1),l=i.n(a),c=i(0),p=i.n(c),d=i(2),m=i.n(d),u=i(3);const h=u.d.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,g=u.d.h4`
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
`;class b extends p.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:o,rowGap:r,columnsGap:a,footer:l,sectionRef:c}=e,d=s()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return p.a.createElement(h,n()({className:"section",rowGap:r,columnsGap:a,ref:c},d),i?p.a.createElement(g,{className:"section-title"},i):null,p.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:"span "+o}},t),l)}}l()(b,"propTypes",{children:m.a.any,footer:m.a.any,title:m.a.any,columns:m.a.number,rowGap:m.a.number,columnsGap:m.a.number,sectionRef:m.a.any}),l()(b,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},548:function(e,t,i){"use strict";i.r(t);var o=i(18),n=i.n(o),r=i(6),s=i.n(r),a=i(31),l=i.n(a),c=i(1),p=i.n(c),d=i(10),m=i(204),u=i(0),h=i.n(u),g=i(26),b=i(3),v=i(542),f=i(56);const x={new:m.c,old:m.a,simple:m.b},w=b.d.div.attrs({className:"popup-main-favlist"})`
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
  overflow: hidden !important;

  .fav-item-list-wrapper {
    position: sticky;
    top: -8px;

    flex-shrink: 0;
    margin: 0 -10px -8px -10px;
    width: 10px;
    height: calc(100% + 4px);
    transition: width .2s;
    z-index: 2;

    .expand-button {
      position: absolute;
      top: calc(50%);
      left: -16px;
      padding: 4px 0 4px 3px;
      background-color: #f4f4f4;
      border-radius: 4px;

      .bilibili-helper-2-iconfont {
        display: block;
      }
    }

    &:hover {
      width: 72px;
    }
  }

  .fav-item-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 34px;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;

    .fav-item {
      flex-shrink: 0;
      margin-bottom: 1px;
      padding: 8px;
      //height: 14px;
      //line-height: 14px;
      font-size: 12px;
      word-break: keep-all;
      background-color: #fff;
      overflow: hidden;
      cursor: pointer;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      user-select: none;

      &:hover {
        background-color: var(--bilibili-blue);
        color: var(--bilibili-gray);
      }

      &.selected {
        position: sticky;
        top: 0;
        background-color: rgb(35 173 229 / 10%);
        color: var(--bilibili-blue);
        pointer-events: none;

        //width: fit-content;
      }
    }
  }

  .section {
    margin: 0 10px 0 0;
    width: 100%;
    overflow: auto;
  }

  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;


    .LazyLoad {
      min-height: 149px;
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
    .fav-item-list-wrapper {
      .fav-item {
        background-color: #171717;
      }

      .expand-button {
        background-color: #202020;
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class y extends h.a.Component{constructor(e){super(e),p()(this,"currentDidList",new l.a),p()(this,"getFavlist",()=>new s.a((e,t)=>{chrome.runtime.sendMessage({target:"mainFavlist",event:"getMediaList"},i=>{i?(this.setState({list:i}),e()):t()})})),p()(this,"getVideoList",(e,t=1)=>{const{list:i}=this.state,o=i[e];chrome.runtime.sendMessage({target:"mainFavlist",event:"getVideoList",id:o.id,pn:t},t=>{t&&(t.medias.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.upper.mid)}),o.videos.push(...t.medias),o.hasMore=t.has_more,o.pn+=1,this.setState({list:i,currentIndex:e},()=>{1===e&&document.querySelector(".section").scrollTo(0,0)}))})}),p()(this,"handleOnClickMedia",e=>{const{list:t,currentIndex:i}=this.state;if(i===e)return;const o=t[e];0===o.videos.length&&o.hasMore?this.getVideoList(e,o.pn):this.setState({currentIndex:e})}),p()(this,"handleOnClickVideoCover",(e,t,i)=>{e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:i}),this.createTab("https://www.bilibili.com/video/"+t,"direct"===this.context.videoOpenMethod()&&0===e.button)}),p()(this,"handleOnClickUserName",(e,t)=>{e.persist(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:"upper_name"}),this.createTab("https://space.bilibili.com/"+t,0===e.button,!1)}),p()(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation();const{specialAttentionList:i,cards:o}=this.state;new s.a((e,o)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):o()}else o()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},n=>{n?(i.push(t),e(i)):o()}))}).then(e=>{let t=o.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t));this.setState({specialAttentionList:e,cards:t})})}),this.state={hasMore:!1,list:[],currentIndex:0},this.listRef=h.a.createRef(),this.bottomObserverRef=h.a.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/favlist"}),this.getFavlist().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{list:i,currentIndex:o}=this.state;i[o].hasMore&&e.length&&e[0].intersectionRatio&&this.getVideoList(o,i[o].pn)},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})}componentWillUnmount(){this.observer&&this.observer.disconnect()}createTab(e,t=!0,i=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t,focus:i})}render(){const{currentIndex:e,hasMore:t,list:i}=this.state,{columns:o,videoCardType:r}=this.context,s=x[r]||m.a;return h.a.createElement(w,{ref:this.listRef},h.a.createElement("div",{className:"fav-item-list-wrapper"},h.a.createElement("div",{className:"fav-item-list"},i.map((t,i)=>h.a.createElement("div",{key:t.id,className:["fav-item",e===i?"selected":""].join(" "),onClick:()=>this.handleOnClickMedia(i)},t.title))),h.a.createElement("div",{className:"expand-button"},h.a.createElement(d.c,{icon:"left-arrow",size:16}))),h.a.createElement(v.a,{columns:o,style:{gridColumnEnd:"span "+o},footer:h.a.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?h.a.createElement(d.b,{className:"border",onClick:()=>this.getVideoList(e,i[e].pn)},"点击加载更多"):null)},i[e]&&i[e].videos.length>0?i[e].videos.map((e,t)=>{const{upper:i}=e;return h.a.createElement(s,n()({key:e.bvid},e,{owner:i,onClickUserName:e=>this.handleOnClickUserName(e,i.mid),onClickCover:i=>this.handleOnClickVideoCover(i,e.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.mid),showWatcherLaterButton:!1}))}):"没有视频数据"))}}p()(y,"contextType",f.a),t.default=Object(g.f)(y)}}]);