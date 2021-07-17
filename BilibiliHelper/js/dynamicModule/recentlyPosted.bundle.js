(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{552:function(e,t,i){"use strict";i.r(t);var n=i(18),s=i.n(n),a=i(6),r=i.n(a),o=i(31),c=i.n(o),l=i(1),d=i.n(l),p=i(10),m=i(204),h=i(0),u=i.n(h),g=i(26),b=i(3),v=i(56);const f=b.d.div.attrs({className:"popup-main-recently-posted"})`
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
`;class y extends u.a.Component{constructor(e){super(e),d()(this,"currentDidList",new c.a),d()(this,"handleOnClickVideoCover",(e,t,i)=>{e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:i}),this.createTab("https://www.bilibili.com/video/"+t,0===e.button,!1)}),d()(this,"handleOnClickUserName",(e,t)=>{e.persist(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"upper_name"}),this.createTab("https://space.bilibili.com/"+t,0===e.button,!1)}),d()(this,"getDynamic",e=>new r.a(t=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},e=>{if(e){const{cards:i,specialAttentionList:n}=this.state,{hasMore:s,offsetDynamicId:a}=e;e.cards=e.cards.filter(e=>{if(e.isSpecialAttention=n.includes(e.card.owner.mid),!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0}),i.push(...e.cards),this.setState({hasMore:s,cards:i,offsetDynamicId:a},()=>{t()})}else t()})})),d()(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation();const{specialAttentionList:i,cards:n}=this.state;new r.a((e,n)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},s=>{if(s){const s=i.indexOf(t);s>=0?(i.splice(s,1),e(i)):n()}else n()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},s=>{s?(i.push(t),e(i)):n()}))}).then(e=>{let t=n.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t));this.setState({specialAttentionList:e,cards:t})})}),this.state={hasMore:!1,cards:[],offsetDynamicId:0,specialAttentionList:[]},this.listRef=u.a.createRef(),this.bottomObserverRef=u.a.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"}),chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},e=>{this.setState({specialAttentionList:e},()=>{this.getDynamic(0).then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore?e.length&&e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})})})}shouldComponentUpdate(e,t,i){return 0!==this.state.cards.length&&this.state.cards.length===t.cards.length}componentWillUnmount(){this.observer&&this.observer.disconnect()}createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}render(){const{cards:e,hasMore:t}=this.state,{columns:i,videoCardType:n}=this.context,a="new"===n?p.k:m.a;return u.a.createElement(f,{ref:this.listRef},u.a.createElement("div",{className:"list",style:{gridTemplateColumns:`repeat(${i}, 1fr)`}},e.length>0?e.map((e,t)=>{const{desc:i,card:n}=e;return u.a.createElement(a,s()({key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention},n,{owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid)}))}):null),u.a.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?u.a.createElement(p.b,{className:"border",onClick:()=>this.getDynamic(this.state.offsetDynamicId)},"点击加载更多"):null))}}d()(y,"contextType",v.a),t.default=Object(g.f)(y)}}]);