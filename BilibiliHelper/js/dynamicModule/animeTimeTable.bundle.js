(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(e,t){},542:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var o=i(18),a=i.n(o),n=i(17),r=i.n(n),l=i(1),s=i.n(l),c=i(0),p=i.n(c),d=i(2),m=i.n(d),g=i(3);const b=g.d.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,u=g.d.h4`
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
`;class h extends p.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:o,rowGap:n,columnsGap:l,footer:s,sectionRef:c}=e,d=r()(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return p.a.createElement(b,a()({className:"section",rowGap:n,columnsGap:l,ref:c},d),i?p.a.createElement(u,{className:"section-title"},i):null,p.a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:"span "+o}},t),s)}}s()(h,"propTypes",{children:m.a.any,footer:m.a.any,title:m.a.any,columns:m.a.number,rowGap:m.a.number,columnsGap:m.a.number,sectionRef:m.a.any}),s()(h,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},550:function(e,t,i){"use strict";i.r(t);var o=i(6),a=i.n(o),n=i(1),r=i.n(n),l=i(4),s=(i(2),i(0)),c=i.n(s),p=i(26),d=i(3),m=i(542),g=i(56);const b=d.d.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 40px;
    overflow: auto;

    .section-title {
      top: 28px;
      display: flex;
      width: 100%;

      .more-btn {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .section-content {
      min-height: 200px;
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
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,u=d.d.div`
  display: flex;
  padding: 4px;
  //height: 58px;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color .2s;
  content-visibility: auto;
  contain-intrinsic-size: 0 58px;

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .cover {
    position: relative;
    flex-shrink: 0;
    border-radius: 2px;

    .img {
      display: block;
      width: 80px;
      //height: 62.5px;
      border-radius: 2px;
      transition: filter .2s;
    }

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px;
      border-radius: 2px;
      background-color: var(--bilibili-pink);
      color: var(--bilibili-gray);
      zoom: .8;
      opacity: 0;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 6px;
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      color: var(--paper-grey-900);
      line-height: 14px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .progress {
      margin: 0;
      color: var(--paper-grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;

      &.unwatch {
        color: var(--bilibili-pink);
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .img {
        filter: brightness(1);
      }
    }

    .img {
      filter: brightness(.8);
    }

    .info {
      .title {
        color: var(--bilibili-gray);
      }
    }
  }
`;class h extends c.a.Component{constructor(e){super(e),r()(this,"state",{type:1,dataList:[{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0}]}),r()(this,"listRef",c.a.createRef()),r()(this,"bottomObserverRef",c.a.createRef()),r()(this,"loadDataByType",(e=20)=>new a.a(t=>{const{dataList:i,type:o}=this.state;i[o-1].hasMore&&chrome.runtime.sendMessage({target:"mainAnime",event:"getFeedData",type:o,pn:i[o-1].pn,ps:e},a=>{a?(i[o-1].list.push(...a),i[o-1].pn+=1,a.length<e&&(i[o-1].hasMore=!1),this.setState({dataList:i},()=>t())):t()})})),r()(this,"handleOnClickGoToAnimePage",(e,t)=>{const{type:i}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_followed",action:"click_category_item",label:`${i}_${t}`}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://www.bilibili.com/bangumi/play/ss"+e})}),r()(this,"handleOnClickTypeButton",e=>{const{type:t}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_followed",action:"click_category",label:e}),this.setState({type:e}))})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/subscribed"}),this.loadDataByType().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{dataList:i,type:o}=this.state;i[o-1].hasMore&&e.length&&e[0].intersectionRatio&&this.loadDataByType()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})}render(){const{dataList:e,type:t}=this.state,{columns:i}=this.context;return c.a.createElement(b,{ref:this.listRef},c.a.createElement("div",{className:"section-btn-group"},c.a.createElement(l.Button,{className:1===t?"active":"",onClick:()=>this.handleOnClickTypeButton(1)},"日番"),c.a.createElement(l.Button,{className:4===t?"active":"",onClick:()=>this.handleOnClickTypeButton(4)},"国创"),c.a.createElement(l.Button,{className:2===t?"active":"",onClick:()=>this.handleOnClickTypeButton(2)},"影视"),c.a.createElement(l.Button,{className:3===t?"active":"",onClick:()=>this.handleOnClickTypeButton(3)},"纪录片")),c.a.createElement(m.a,{columns:i,rowGap:0,columnsGap:4,footer:c.a.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e[t-1].hasMore&&e[t-1].list.length>0?c.a.createElement(l.Button,{className:"border",onClick:()=>this.loadDataByType()},"点击加载更多"):null)},e[t-1].list.length>0?e[t-1].list.map((e,t)=>{const{badge:i,title:o,season_id:a,cover:n,new_ep:r,progress:s}=e;return c.a.createElement(u,{key:t,onClick:()=>this.handleOnClickGoToAnimePage(a,t)},c.a.createElement("div",{className:"cover"},c.a.createElement(l.Image,{url:r.cover||n}),i?c.a.createElement("span",{className:"badge"},i):null),c.a.createElement("div",{className:"info"},c.a.createElement("p",{className:"title"},o),r?c.a.createElement("p",{className:["progress",r.is_new>0?"unwatch":""].filter(Boolean).join(" ")},r.index_show):null,s?c.a.createElement("p",{className:"progress"},s.index_show):null))}):c.a.createElement("div",{style:{padding:"0 8px"}},"没有订阅信息")))}}r()(h,"contextType",g.a),t.default=Object(p.f)(h)},551:function(e,t,i){"use strict";i.r(t);var o=i(18),a=i.n(o),n=i(1),r=i.n(n),l=i(4),s=(i(21),i(51)),c=i(0),p=i.n(c),d=i(2),m=i.n(d),g=(i(13),i(3)),b=i(26),u=i(542),h=i(56);const y=g.d.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;

    .section-content {
      .each-day {
        position: relative;
        margin-left: 2px;
        margin-right: 2px;
        padding-left: 0;
        box-sizing: border-box;
        //width: 190px;
        flex-shrink: 0;
        scroll-snap-align: start;

        .topic {
          //position: sticky;
          //left: 0px;
          //display: inline-block;
          margin-bottom: 8px;
          //margin-left: -10px;
          //padding-left: 10px;
          height: 20px;

          h5 {
            margin: 0 0 0 2px;
            font-size: 16px;
            color: #545454;
            line-height: 30px;
          }
        }

        .seasons {
          display: grid;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          //height: calc(100% - 30px);
          //margin-bottom: 30px;

          &::-webkit-scrollbar-thumb {
            visibility: visible;
          }
          
          .empty-day {
            margin-bottom: 8px;
            margin-left: 1px;
            font-size: 12px;
            font-weight: bold;
            opacity: 0.6;
          }
        }

        &.is-today {
          padding: 2px 0 6px;
          //border-top: 1px dashed var(--bilibili-pink);
          //border-bottom: 1px dashed var(--bilibili-pink);
          .topic h5 {
            color: var(--bilibili-pink);
          }

          .seasons {
            box-shadow: inset -2px 0 0px 0px var(--bilibili-pink);
            //background-color: rgb(251 114 153 / 0.1);
            //border-radius: 2px;
          }
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }
  }
`,v=g.d.div`
  display: flex;
  padding: 4px;
  border-radius: 2px;
  transition: background-color .2s;
  //margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .avatar {
    display: block;
    width: 50px;
    height: 50px;
    object-fit: cover;
    cursor: pointer;

    .img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      box-sizing: border-box;
      transition: filter .2s;
    }
  }

  .info {
    display: inline-block;
    padding-left: 6px;
    width: calc(100% - 60px);
    vertical-align: top;

    h6, p {
      margin: 0;
      line-height: 14px;
      font-size: 12px;
      cursor: pointer;
    }

    h6 {
      display: -webkit-box;
      height: 28px;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      margin-top: 8px;
      color: #666;
    }
  }

  &.follow {
    .avatar img {
      border: 2px solid var(--bilibili-pink);
    }
  }

  &.is-published {
    .info p {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .avatar {
        .img {
          filter: brightness(1);
        }
      }
    }

    .avatar {
      .img {
        filter: brightness(.8);
      }
    }

    .info {
      h6 {
        color: #aaa;
      }
    }
  }
`,f=function({cover:e,square_cover:t,pub_index:i,season_id:o,pub_time:a,title:n,url:r,follow:l,is_published:c,delay:d,delay_reason:m}){const g=p.a.useCallback(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_time_table",action:"click_category_item",label:n}),(e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})})(r)},[r]);return p.a.createElement(v,{className:[l?"follow":"",c?"is-published":null].filter(Boolean).join(" ")},p.a.createElement("div",{className:"avatar",onClick:g},p.a.createElement(s.a,{url:t+"@100w_100h.webp",sign:n})),p.a.createElement("div",{className:"info"},p.a.createElement("h6",{onClick:g},n),p.a.createElement("p",{onClick:g},d?m:i)))};f.propTypes={cover:m.a.string,square_cover:m.a.string,pub_index:m.a.string,pub_time:m.a.string,title:m.a.string,url:m.a.string,follow:m.a.number,is_published:m.a.number,delay:m.a.number,delay_reason:m.a.string,season_id:m.a.number};class x extends p.a.Component{constructor(e){super(e),r()(this,"getTimelineData",()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimeline"},e=>{e&&this.setState({timeline:e||[]},()=>{const e=document.getElementById("todayAnime");e&&e.scrollIntoView(!0)})})}),r()(this,"getTimelineCNData",()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimelineCN"},e=>{e&&this.setState({timelineCN:e||[]},()=>{const e=document.getElementById("todayAnime");e&&e.scrollIntoView(!0)})})}),r()(this,"handleOnClickTypeButton",e=>{const{type:t,timelineCN:i}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_time_table",action:"click_category",label:e}),this.setState({type:e},()=>{if(0===i.length)this.getTimelineCNData();else{const e=document.getElementById("todayAnime");e&&e.scrollIntoView(!0)}}))}),this.state={type:"global",timeline:[],timelineCN:[]}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/animeTable"}),this.getTimelineData()}render(){const{timeline:e,timelineCN:t,type:i}=this.state,{columns:o}=this.context,n="global"===i?e:t;return p.a.createElement(y,null,p.a.createElement("div",{className:"section-btn-group"},p.a.createElement(l.Button,{className:"global"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("global")},"日番"),p.a.createElement(l.Button,{className:"cn"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("cn")},"国创")),p.a.createElement(u.a,null,n.map(e=>{const{date:t,day_of_week:i,is_today:n,is_yesterday:r=!1,seasons:l}=e,s=["","一","二","三","四","五","六","日"][i];return p.a.createElement("div",{key:t,id:n?"todayAnime":"",className:["each-day",n?"is-today":null,r?"is-yesterday":null].filter(Boolean).join(" ")},p.a.createElement("div",{className:"topic"},p.a.createElement("h5",null,"周"+s," ",t.split("-").join("月"),"日")),p.a.createElement("div",{className:"seasons",style:{gridTemplateColumns:`repeat(${o}, 1fr)`}},l.map(e=>p.a.createElement(f,a()({key:e.ep_id||e.season_id},e))),0===l.length?p.a.createElement("div",{className:"empty-day"},"当天没有番剧放送"):null))})))}}r()(x,"contextType",h.a),t.default=Object(b.f)(x)}}]);