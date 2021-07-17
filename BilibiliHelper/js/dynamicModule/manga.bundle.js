(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{542:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var r=o(18),n=o.n(r),i=o(17),s=o.n(i),a=o(1),c=o.n(a),l=o(0),p=o.n(l),d=o(2),m=o.n(d),b=o(3);const u=b.d.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,g=b.d.h4`
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
`;class h extends p.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:o,columns:r,rowGap:i,columnsGap:a,footer:c,sectionRef:l}=e,d=s()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return p.a.createElement(u,n()({className:"section",rowGap:i,columnsGap:a,ref:l},d),o?p.a.createElement(g,{className:"section-title"},o):null,p.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${r}, 1fr)`,gridColumnEnd:"span "+r}},t),c)}}c()(h,"propTypes",{children:m.a.any,footer:m.a.any,title:m.a.any,columns:m.a.number,rowGap:m.a.number,columnsGap:m.a.number,sectionRef:m.a.any}),c()(h,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},546:function(e,t,o){"use strict";o.r(t);var r=o(71),n=o.n(r),i=o(6),s=o.n(i),a=o(1),c=o.n(a),l=o(10),p=(o(204),o(0)),d=o.n(p),m=o(26),b=o(3),u=o(542),g=o(56);const h=b.d.div.attrs({className:"popup-main-recently-posted"})`
  .section {
    .section-content {
      padding-bottom: 40px;
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
`,v=b.d.div`
  cursor: pointer;
  perspective: 1000px;
  transition: transform ease .3s;
  transform: perspective(100px) translateZ(0px);

  :hover {
    transform: perspective(100px) translateZ(5px);

    .cover-image {
      box-shadow: 0 3px 10px rgb(0 0 0 / 40%);
      filter: brightness(1);
    }
  }

  .cover {
    position: relative;
    display: block;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      //background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }
  }

  .cover-image {
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    transition: box-shadow .3s, filter .3s;

    img {
      display: block;
    }
  }

  @media (prefers-color-scheme: dark) {
    .cover-image {
      filter: brightness(0.8);
    }
  }
`;class f extends d.a.Component{constructor(e){super(e),c()(this,"getList",(e=1)=>{const{ps:t,list:o}=this.state;return new s.a((r,i)=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://manga.bilibili.com/twirp/bookshelf.v1.Bookshelf/ListFavorite?device=pc&platform=web",options:{method:"POST",body:n()({page_num:e,page_size:t,order:1,wait_free:0}),headers:{"content-type":"application/json;charset=UTF-8","bilibili-helper-header-action-set-origin":"https://www.bilibili.com"},contentType:"json"}},n=>{n&&n.data?(o.push(...n.data),this.setState({pn:e+1,list:o,hasMore:n.data.length===t}),r()):i()})})}),c()(this,"handleOnClickCover",(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_manga",action:"click_video"}),this.createTab("https://manga.bilibili.com/detail/mc"+t,"direct"===this.context.videoOpenMethod()&&0===e.button)}),this.state={list:[],pn:1,ps:9,hasMore:!0},this.listRef=d.a.createRef(),this.bottomObserverRef=d.a.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/manga"}),this.getList().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{pn:o,hasMore:r}=this.state;r?e.length&&e[0].intersectionRatio&&this.getList(o):t.disconnect()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})}componentWillUnmount(){this.observer&&this.observer.disconnect()}createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}render(){const{hasMore:e,list:t,pn:o}=this.state,{columns:r,videoCardType:n}=this.context;return d.a.createElement(h,{ref:this.listRef},d.a.createElement(u.a,{columns:r>1?3:2,style:{gridColumnEnd:"span "+(r>1?3:2)},columnsGap:16,rowGap:16,footer:d.a.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e?d.a.createElement(l.b,{className:"border",onClick:()=>this.getList(o)},"点击加载更多"):null)},t.length>0?t.map(e=>d.a.createElement(v,{key:e.id},d.a.createElement("div",{className:"cover",onClick:t=>this.handleOnClickCover(t,e.comic_id)},d.a.createElement("div",{className:"cover-image"},d.a.createElement(l.d,{url:e.vcover+"@242w_252h.webp"}))))):"没有数据"))}}c()(f,"contextType",g.a),t.default=Object(m.f)(f)}}]);