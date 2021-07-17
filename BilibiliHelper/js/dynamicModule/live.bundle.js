(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{542:function(e,t,o){"use strict";o.d(t,"a",(function(){return b}));var n=o(18),r=o.n(n),s=o(17),i=o.n(s),a=o(1),c=o.n(a),l=o(0),p=o.n(l),m=o(2),d=o.n(m),u=o(3);const g=u.d.div`
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
`;class b extends p.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:o,columns:n,rowGap:s,columnsGap:a,footer:c,sectionRef:l}=e,m=i()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return p.a.createElement(g,r()({className:"section",rowGap:s,columnsGap:a,ref:l},m),o?p.a.createElement(h,{className:"section-title"},o):null,p.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${n}, 1fr)`,gridColumnEnd:"span "+n}},t),c)}}c()(b,"propTypes",{children:d.a.any,footer:d.a.any,title:d.a.any,columns:d.a.number,rowGap:d.a.number,columnsGap:d.a.number,sectionRef:d.a.any}),c()(b,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},549:function(e,t,o){"use strict";o.r(t);var n=o(18),r=o.n(n),s=o(1),i=o.n(s),a=o(10),c=o(0),l=o.n(c),p=(o(13),o(26)),m=o(3),d=o(542),u=o(56);const g=m.d.div.attrs({className:"popup-main-live"})`
  .topic {
    margin: 0 -10px 6px;
    padding: 4px 0 4px 10px;
    font-size: 12px;
    color: #3B3B3B;
    position: sticky;
    top: -10px;
    z-index: 2;
    background-color: #f4f4f4;
  }

  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 12px;
    grid-row-gap: 8px;
    margin-bottom: 30px;
    padding-bottom: 12px;

    .LazyLoad {
      min-height: 121px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    color: #171717;
    user-select: none;
    //grid-column-end: span 2;
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
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class h extends l.a.Component{constructor(e){super(e),i()(this,"getFeedList",(e=1,t=10)=>{chrome.runtime.sendMessage({target:"mainLive",event:"getLiveFeedList",pn:e,ps:t},o=>{const{rooms:n,count:r}=o;let{rooms:s,hasMore:i}=this.state;n.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)}),s.push(...n),s.length>=r&&(i=!1),this.setState({rooms:s,count:r,hasMore:i,pn:e,ps:t})})}),i()(this,"handleOnClickCover",(e,t,o)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_live",action:"click_live_card",label:o}),this.createTab(t)}),i()(this,"handleOnClickUserName",(e,t)=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_live",action:"click_live_card",label:"upper_name"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+t})}),this.state={rooms:[],count:0,pn:1,ps:10,hasMore:!0},this.listRef=l.a.createRef(),this.bottomObserverRef=l.a.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/live"}),this.getFeedList(),this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{if(this.state.hasMore){const{count:t,rooms:o,pn:n,ps:r}=this.state;e.length&&e[0].intersectionRatio&&o.length<t&&this.getFeedList(n+1,r)}else t.disconnect()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))}shouldComponentUpdate(e,t,o){return!(0===this.state.rooms.length&&0===t.rooms.length)}componentWillUnmount(){this.observer&&this.observer.disconnect()}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:"direct"===this.context.videoOpenMethod()})}render(){const{rooms:e,count:t,hasMore:o,pn:n,ps:s}=this.state,{columns:i}=this.context;return l.a.createElement(g,{ref:this.listRef},l.a.createElement("h6",{className:"topic"},"关注列表 (",t,")"),l.a.createElement(d.a,{columns:i,rowGap:8,columnsGap:12,footer:l.a.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},o&&e&&e.length>0?l.a.createElement(a.b,{className:"border",onClick:()=>this.getFeedList(n+1,s)},"点击加载更多"):null)},e&&e.length>0?e.map((e,t)=>l.a.createElement(a.f,r()({key:e.roomId,onClickUserName:t=>this.handleOnClickUserName(t,e.owner.mid),onClickCover:()=>this.handleOnClickCover(e.roomId,e.link,t)},e))):"没有直播信息"))}}i()(h,"contextType",u.a),t.default=Object(p.f)(h)}}]);