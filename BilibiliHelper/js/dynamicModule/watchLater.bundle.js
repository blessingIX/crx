(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{542:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(18),i=n.n(o),a=n(17),r=n.n(a),s=n(1),c=n.n(s),l=n(0),p=n.n(l),d=n(2),m=n.n(d),u=n(3);const g=u.d.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,h=u.d.h4`
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
`;class b extends p.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:n,columns:o,rowGap:a,columnsGap:s,footer:c,sectionRef:l}=e,d=r()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return p.a.createElement(g,i()({className:"section",rowGap:a,columnsGap:s,ref:l},d),n?p.a.createElement(h,{className:"section-title"},n):null,p.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:"span "+o}},t),c)}}c()(b,"propTypes",{children:m.a.any,footer:m.a.any,title:m.a.any,columns:m.a.number,rowGap:m.a.number,columnsGap:m.a.number,sectionRef:m.a.any}),c()(b,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},547:function(e,t,n){"use strict";n.r(t);var o=n(18),i=n.n(o),a=n(6),r=n.n(a),s=n(1),c=n.n(s),l=n(204),p=n(0),d=n.n(p),m=n(26),u=n(3),g=n(542),h=n(56);const b={new:l.c,old:l.a,simple:l.b},v=u.d.div.attrs({className:"popup-main-recently-posted"})`
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
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class x extends d.a.Component{constructor(e){super(e),c()(this,"getWatchLaterList",()=>{chrome.runtime.sendMessage({target:"watchLater",event:"getList"},e=>{e&&(e.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)}),this.setState({cards:e}))})}),c()(this,"handleOnClickVideoCover",(e,t,n)=>{e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:n}),this.createTab("https://www.bilibili.com/video/"+t,"direct"===this.context.videoOpenMethod()&&0===e.button)}),c()(this,"handleOnClickUserName",(e,t)=>{e.persist(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:"upper_name"}),this.createTab("https://space.bilibili.com/"+t,0===e.button,!1)}),c()(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation();const{cards:n}=this.state,{specialAttentionList:o}=this.context;new r.a((e,n)=>{o.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},i=>{if(i){const i=o.indexOf(t);i>=0?(o.splice(i,1),e(o)):n()}else n()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},i=>{i?(o.push(t),e(o)):n()}))}).then(e=>{let t=n.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t));this.setState({specialAttentionList:e,cards:t})})}),this.state={cards:[]}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/watchLater"}),this.getWatchLaterList()}createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}render(){const{cards:e}=this.state,{columns:t,videoCardType:n}=this.context,o=b[n]||l.a;return d.a.createElement(v,null,d.a.createElement(g.a,{columns:t,style:{gridColumnEnd:"span "+t,marginBottom:"40px"}},e.length>0?e.map((e,t)=>d.a.createElement(o,i()({key:e.bvid,showWatcherLaterButton:!1,showRemoveWatcherLaterButton:!0,isSpecialAttention:e.isSpecialAttention},e,{onClickUserName:t=>this.handleOnClickUserName(t,e.owner.mid),onClickCover:n=>this.handleOnClickVideoCover(n,e.bvid,t),onClickFollowBtn:t=>this.handleOnClickSpecialAttentionBtn(t,e.owner.uid)}))):"没有视频数据"))}}c()(x,"contextType",h.a),t.default=Object(m.f)(x)}}]);