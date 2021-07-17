(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,i){"use strict";var o=i(20),n=i(93),a=i(21),r=i(1),l=i.n(r),s=i(0),c=i.n(s),d=i(2),p=i.n(d),h=i(3),b=i(23),u=i(24),m=i.n(u);const{color:g}=b.a,x=h.d.div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  filter: grayscale(${({theme:e={}})=>!1!==e.toggle?0:1});
`,f=h.d.span`
  width: 28px;
  height: 12px;
  position: absolute;
  left: 3px;
  top: 2px;
  border-radius: 8px;
  background-color: ${g("google-grey-400")};
  transition: background-color linear 80ms;
  //opacity: 0.5;
  .checked & {
    background-color: ${g("bilibili-pink")};
    opacity: 1;
  }
`,v=h.d.span.attrs(()=>({className:"radio-knob"}))`
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  transition: transform linear 80ms, background-color linear 80ms;
  border-radius: 50%;
  z-index: 1;
  .ripple-item {
    //opacity: 0.125;
  }
  .checked & {
    transform: translate3d(18px, 0, 0);
    .ripple-item {
      background-color: ${m()(g("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`;class w extends c.a.Component{constructor(){super(),l()(this,"propTypes",{on:p.a.bool,onClick:p.a.func,disable:p.a.bool}),this.handleOnMouseDown=this.handleOnMouseDown.bind(this),this.handleOnMouseUp=this.handleOnMouseUp.bind(this),this.state={mouseDown:!1,rippleRadius:0}}handleOnMouseDown(){this.setState({mouseDown:!0})}handleOnMouseUp(){this.setState({mouseDown:!1})}render(){const{on:e,onClick:t,disable:i}=this.props,{mouseDown:o}=this.state;return c.a.createElement(x,{className:e?"checked":"",onClick:t},c.a.createElement(f,null),c.a.createElement(v,{ref:e=>this.btn=e,onMouseDown:i?null:this.handleOnMouseDown,onMouseUp:i?null:this.handleOnMouseUp,onMouseLeave:i?null:this.handleOnMouseUp},c.a.createElement(h.a,{theme:{radius:17,speed:.75,size:1.2}},c.a.createElement(n.a,{active:o}))))}}var k=i(18),y=i.n(k),E=i(17),C=i.n(E);i(61);const z=h.d.div.attrs(({open:e})=>({className:e?"modal on":"modal"}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s;
  overflow: auto;
  z-index: -1000;
  white-space: nowrap;

  ::after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    overflow: hidden;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &.on {
    transition: opacity 0.2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }
`,N=h.d.div.attrs(()=>({className:"modal-container"}))`
  position: relative;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  max-width: 560px;
  min-width: 300px;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
  color: #222;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: transform 0.12s;
  transform: scale(1);
`,M=h.d.div.attrs(()=>({className:"modal-title"}))`
  flex: 0;
  padding: 20px 20px 0;
  font-size: 15px;
  font-weight: bold;
`,L=h.d.div.attrs(()=>({className:"modal-body"}))`
  flex: 1;
  padding: 16px 20px;
  min-height: 50px;
  max-height: 600px;
  overflow: auto;
`,O=h.d.div.attrs(()=>({className:"modal-button-container"}))`
  display: flex;
  flex-direction: row-reverse;
  flex: 0;
  padding: 0 20px 20px 20px;
`;class F extends c.a.Component{constructor(e){super(e),this.handleMaskClick=this.handleMaskClick.bind(this)}handleMaskClick(e){e.target.classList.contains("mask")&&(this.container.style.transform="scale(1.02)",setTimeout(()=>this.container.style.transform="scale(1)",120))}componentDidUpdate(e,t,i){e.open&&!this.props.open&&this.props.onClosed&&this.props.onClosed instanceof Function&&this.props.onClosed()}render(){const e=this.props,{open:t,title:i,buttons:o,children:n,onClickMask:a}=e,r=C()(e,["open","title","buttons","children","onClickMask"]);return c.a.createElement(z,{open:t},c.a.createElement("div",{className:"mask",onMouseDown:a||this.handleMaskClick}),c.a.createElement(N,y()({ref:e=>this.container=e},r),i&&c.a.createElement(M,null,i),c.a.createElement(L,null,n),o&&c.a.createElement(O,null,o)))}}F.propTypes={open:p.a.bool.isRequired,title:p.a.string,children:p.a.any,buttons:p.a.any,onClickMask:p.a.func,onClosed:p.a.func};var B=i(51),S=i(76);const T=h.d.div.attrs({className:"carousel"})`
  position: relative;
  //border-radius: 2px;
  //box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  //overflow: hidden;

  .dot-btns {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 8px;
    right: 10px;
    width: fit-content;
    height: 6px;
    z-index: 2;

    span {
      display: inline-block;
      margin-right: 5px;
      width: 6px;
      height: 6px;
      vertical-align: top;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.5);
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        width: 8px;
        height: 8px;
        background-color: #FB7299;
      }
    }
  }

  .turn-btn {
    position: absolute;
    top: calc(50% - 18px);
    padding: 8px 4px;
    background-color: rgba(0, 0, 0, .7);
    //opacity: 0;
    visibility: hidden;
    color: #eee;
    z-index: 3;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .turn-left-btn {
    left: 0;
    border-radius: 0 4px 4px 0;
  }

  .turn-right-btn {
    right: 0;
    border-radius: 4px 0 0 4px;
  }

  &:hover {
    .turn-btn {
      //opacity: 1;
      visibility: visible;
    }
  }
`,A=h.d.div.attrs({className:"carousel-item"})`
  position: absolute;
  top: 0;
  left: calc(50% - 155px);
  height: 100%;
  width: 310px;
  opacity: 0;
  cursor: pointer;
  transition: opacity .7s, transform .3s;
  transform: translate(0, 0);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  will-change: transform, opcity;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 32px;
    width: 100%;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  &.active {
    opacity: 1;
    z-index: 2;
  }

  &.beforeBefore {
    z-index: 1;
    transform: translate(-202%, 0);
  }

  &.before {
    opacity: 1;
    z-index: 1;
    transform: translate(-102%, 0);
  }

  &.after {
    opacity: 1;
    z-index: 1;
    transform: translate(102%, 0);
  }

  &.afterAfter {
    z-index: 1;
    transform: translate(202%, 0);
  }

  .title {
    position: absolute;
    left: 8px;
    bottom: 6px;
    color: #fff;
    z-index: 1;
  }

  .ad-tag {
    margin-right: 2px;
    width: 38px;
    height: 22px;
    vertical-align: bottom;
    zoom: 0.74;
    z-index: 1;
  }
`,j=function(e){let{index:t,selected:i,src:o,onClick:n,alt:a,id:r,isAD:l,itemCount:s}=e,d=C()(e,["index","selected","src","onClick","alt","id","isAD","itemCount"]);return c.a.createElement(A,y()({className:[i===t?"active":null,(i<=1?s-(2-i)===t:i-2===t)?"beforeBefore":null,(0===i?s-1===t:i-1===t)?"before":null,(i===s-1?0===t:i+1===t)?"after":null,(i>=s-2?2+i-s===t:i+2===t)?"afterAfter":null].filter(Boolean).join(" "),onClick:()=>n()},d),c.a.createElement(B.a,{url:o,alt:a}),c.a.createElement("div",{className:"title"},l?c.a.createElement(B.a,{className:"ad-tag",url:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad-tag"}):null,a))},D=function(e){let{data:t=[],interval:i=2500,showDots:o=!1,columns:n}=e,r=C()(e,["data","interval","showDots","columns"]);const[l,d]=Object(s.useState)(0),[p,h]=Object(s.useState)(!1),b=Object(s.useCallback)(e=>{d(e)},[]),u=Object(s.useCallback)(()=>{h(!0)},[]),m=Object(s.useCallback)(()=>{h(!1)},[]),g=Object(s.useCallback)(()=>{d(0===l?t.length-1:l-1)},[l,t]),x=Object(s.useCallback)(()=>{l===t.length-1?d(0):d(l+1)},[l,t]),f=Object(s.useCallback)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_carousel",label:l}),chrome.runtime.sendMessage({target:"tabController",event:"create",strict:!1,url:t?t[l]&&t[l].url:null})},[l,t]);return Object(s.useEffect)(()=>{let e;return p||(e=setTimeout(()=>{l===t.length-1?d(0):d(l+1)},i)),()=>{clearTimeout(e)}},[l,p,t]),c.a.createElement(T,y()({},r,{onMouseEnter:u,onMouseLeave:m,style:{gridColumnEnd:"span "+n}}),t.map((e,i)=>c.a.createElement(j,y()({key:e.alt,index:i,selected:l,itemCount:t.length,onClick:f},e))),t.length>1&&o&&c.a.createElement("div",{className:"dot-btns"},t.map((e,t)=>c.a.createElement("span",{key:e.alt,className:l===t?"active":null,onClick:()=>b(t)}))),t.length>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"turn-btn turn-left-btn",onClick:g},c.a.createElement(a.a,{icon:"left-arrow",size:20})),c.a.createElement("div",{className:"turn-btn turn-right-btn",onClick:x},c.a.createElement(a.a,{icon:"right-arrow",size:20}))))};D.propTypes={data:p.a.array,interval:p.a.number,columns:p.a.number,showDots:p.a.bool},j.propTypes={selected:p.a.number,index:p.a.number,src:p.a.string,alt:p.a.string,id:p.a.number,onClick:p.a.func,isAD:p.a.bool,itemCount:p.a.number};const W=h.d.section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
  min-width: 148px;
  //height: 98px;
  z-index: 1;
  cursor: pointer;
  content-visibility: paint;
  contain-intrinsic-size: 48px 0;

  &:hover {
    background-color: #fff;
  }

  //content-visibility: auto;
  //contain-intrinsic-size: none 98px;

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 33%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 4px;
    transform-origin: 50% 30%;
    transition: transform .3s;

    .duration {
      position: absolute;
      right: 10px;
      bottom: 6px;
      padding: 0 3px;
      min-width: 34px;
      height: 15px;
      font-size: 12px;
      text-align: center;
      zoom: calc(4 / 6);
      color: #FFFFFF;
      background-color: rgb(0 0 0 / 80%);
      //border-radius: 2px;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 6px;
    width: 40px;
    height: 40px;
    cursor: pointer;

    .img {
      border-radius: 20px;
      border: 1px solid #fff;
      box-sizing: border-box;
    }
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    //height: 30px;
    line-height: 12px;
    word-break: break-all;
    z-index: 2;

    a {
      width: fit-content;
      height: 18px;
      line-height: 22px;
      font-size: 14px;
      color: #616161;
      cursor: pointer;
    }

    .title {
      position: relative;
      //top: 74px;
      //display: -webkit-box;
      margin: 10px 0 0 0;
      box-sizing: border-box;
      //padding: 0 2px;
      //width: calc(100% - 46px);
      width: 100%;
      font-size: 12px;
      color: #828282;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      //text-indent: 2px;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      z-index: 1;
      pointer-events: none;
      //zoom: 0.9;
    }

    .username {
      margin-top: 2px;
      height: 12px;
      line-height: 12px;
      font-size: 12px;
      overflow: hidden;
      text-decoration: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      padding: 1px;
      height: 16px;
      line-height: 12px;
      //border-radius: 2px;
      text-decoration: none;
      transform: scale(0.8);
      color: #666;
      box-sizing: border-box;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        //filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }
  }

  &.special-attention {
    .info {
      .avatar {
        .img {
          border-color: var(--bilibili-pink);
        }
      }

      .username {
        color: var(--bilibili-pink);
      }
    }

    .cover {
      //box-sizing: border-box;
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        //border-radius: 4px;
        box-shadow: inset 0 0 0px 1px var(--bilibili-pink);
        z-index: 1;
      }
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #111;
    }

    .info {
      .username {
        color: #ddd;
      }
    }

    .cover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 4px;

      &:hover .cover-image {
        filter: brightness(0.85);
      }
    }
  }
`,U=function(e){let{cover:t,duration:i,title:o="none title",isSpecialAttention:n,owner:a,stat:r,onClickCover:l,onClickUserName:s,hideAuthor:d,onClickFollowBtn:p}=e,h=C()(e,["cover","duration","title","isSpecialAttention","owner","stat","onClickCover","onClickUserName","hideAuthor","onClickFollowBtn"]);const b=c.a.useCallback(e=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+a.mid})},[a]);return c.a.createElement(W,y()({className:["live-card",n?"special-attention":""].join(" "),onClick:l},h),c.a.createElement("div",{className:"avatar",onClick:s||b},c.a.createElement(B.a,{url:a.face,height:30})),c.a.createElement("div",{className:"info"},c.a.createElement("a",{className:"username",onClick:s||b},a.name),c.a.createElement("p",{className:"title",title:o},o)))};U.propTypes={className:p.a.string,isSpecialAttention:p.a.bool,bvid:p.a.string,cover:p.a.string,duration:p.a.string,title:p.a.string,owner:p.a.object,stat:p.a.object,onClickCover:p.a.func,onClickUserName:p.a.func,onClickFollowBtn:p.a.func,hideAuthor:p.a.bool};const P=h.d.input`
`,R=function(e){const{value:t,max:i,min:o,step:n,onChange:a}=e,r=C()(e,["value","max","min","step","onChange"]);return c.a.createElement(P,y()({className:"range",type:"range",max:i,min:o,step:n,value:t,onChange:a},r))};R.propTypes={value:p.a.number,max:p.a.number,min:p.a.number,step:p.a.number,onChange:p.a.func};var $=i(110),H=i(206),I=i(22),_=i.n(I);const V=h.d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s;
  overflow: auto;
  z-index: -1000;
  white-space: nowrap;

  &.show {
    transition: opacity 0.2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }

  ::after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    overflow: hidden;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }


`,X=h.d.div`
  position: relative;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  width: 800px;
  max-width: 1000px;
  min-width: 300px;
  height: 500px;
  vertical-align: middle;
  border-radius: 4px;
  color: #222;
  text-align: left;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  transition: transform 0.12s;
  backdrop-filter: blur(50px);
  transform: scale(1);
  overflow: hidden;

  main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 36px;
    left: 0;
  }

  .toolbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 36px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    background-color: rgb(255 255 255 / 4%);

    .button {
      .button-view {
        padding: 0 16px;
      }
    }

    .prev-button {

    }

    .next-button {
      margin-left: auto;
    }

    .close-button {
      margin-left: auto;
    }
  }


`,Y=h.d.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  z-index: -1;
  overflow: auto;

  &.show {
    transition: opacity .2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }

  .title {

  }

  .content {
    .topic-image {
      margin: 30px 30px 0;
      width: calc(100% - 60px);
      border-radius: 4px;
    }
  }
`;class G extends c.a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t}=e,i=C()(e,["children"]);return c.a.createElement(Y,i,c.a.createElement("div",{className:"content"},t))}}l()(G,"propTypes",{children:p.a.any});class q extends c.a.Component{constructor(e){super(e),l()(this,"state",{current:0}),l()(this,"updateBodyOverflow",()=>{}),l()(this,"handleOnClickPrevButton",()=>{const{current:e}=this.state;this.state.current>0&&this.setState({current:e-1})}),l()(this,"handleOnClickNextButton",()=>{const{sections:e}=this.props,{current:t}=this.state;this.state.current<e.length-1&&this.setState({current:t+1})}),this.wrapper=document.createElement("div"),document.body.appendChild(this.wrapper)}componentDidMount(){this.updateBodyOverflow()}componentDidUpdate(e,t,i){this.updateBodyOverflow()}render(){const e=this.props,{show:t,sections:i,onClose:n}=e,a=C()(e,["show","sections","onClose"]),{current:r}=this.state;return _.a.createPortal(c.a.createElement(V,y()({className:t?"show":""},a),c.a.createElement("div",{className:"mask"}),c.a.createElement(X,null,c.a.createElement("main",null,i.map((e,t)=>c.a.createElement(G,{className:r===t?"show":"hide",key:t},e))),c.a.createElement("footer",{className:"toolbar"},r>0?c.a.createElement(o.a,{className:"prev-button primary",disabled:0===r,onClick:this.handleOnClickPrevButton},"上一页"):null,r<i.length-1?c.a.createElement(o.a,{className:"next-button primary",onClick:this.handleOnClickNextButton},"下一页"):null,r===i.length-1?c.a.createElement(o.a,{className:"close-button primary",onClick:n},"我知道啦_(:з」∠)_"):null))),this.wrapper)}}l()(q,"propTypes",{show:p.a.bool,sections:p.a.array,onClose:p.a.func}),l()(q,"defaultProps",{show:!1,sections:[]});var J=i(204);i(205);i.d(t,"b",(function(){return o.a})),i.d(t,"j",(function(){return n.a})),i.d(t,"c",(function(){return a.a})),i.d(t,!1,(function(){return w})),i.d(t,"h",(function(){return F})),i.d(t,"d",(function(){return B.a})),i.d(t,"e",(function(){return S.a})),i.d(t,!1,(function(){return D})),i.d(t,"f",(function(){return U})),i.d(t,"i",(function(){return R})),i.d(t,!1,(function(){return $.a})),i.d(t,"g",(function(){return H.a})),i.d(t,"a",(function(){return q})),i.d(t,"k",(function(){return J.c})),i.d(t,!1,(function(){return J.a})),i.d(t,!1,(function(){return J.b})),i.d(t,!1,(function(){})),i.d(t,!1,(function(){}))},110:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var o=i(0),n=i.n(o),a=i(3),r=i(151),l=i(75);const s=a.b`
  body {
    ${l.a};
  }
`,c=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,null),n.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://at.alicdn.com/t/font_1690169_cumlkywihxk.css"}),n.a.createElement(r.a,e))}},151:function(e,t,i){"use strict";var o=i(18),n=i.n(o),a=i(17),r=i.n(a),l=i(1),s=i.n(l),c=i(21),d=i(0),p=i.n(d),h=i(2),b=i.n(h),u=i(7),m=i(3),g=i(13),x=i.n(g);const f=p.a.createContext({}),v=m.d.div.attrs(({show:e,position:t})=>({className:["handle-content-wrapper",e?"":"hide","left"===t?"right":"left"]}))`
  position: absolute;
  top: 0;
  padding: 10px;
  min-width: 100px;
  width: max-content;
  min-height: 100px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.14) 0 2px 4px 0;
  background-color: white;
  color: #222;
  opacity: 1;
  transition: transformX .15s, opacity .15s;
  overflow: auto;

  &.left {
    right: 36px;
    border-radius: 4px 0 4px 4px;
    transform: translateX(0px);
    transform-origin: top right;
  }

  &.right {
    left: 36px;
    border-radius: 0 4px 4px 4px;
    transform: translateX(0px);
    transform-origin: top left;
  }

  &.hide {
    transition: transform .2s, opacity .1s, visibility 0s .2s;
    opacity: 0;
    visibility: hidden;

    &.left {
      //transform: translateX(20px) !important;
    }

    &.right {
      //transform: translateX(-20px) !important;
    }
  }

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-corner {
    display: none;
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

  & > footer {
    display: flex;
    justify-content: space-between;
    margin: 12px -10px -10px;
    padding: 4px 10px 4px;
    border-top: 1px solid var(--google-grey-100);
    color: var(--google-grey-700);

    .bilibili-helper-name, .report {
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .version {
      margin-left: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
`;class w extends p.a.Component{constructor(e){super(e),s()(this,"contentRef",p.a.createRef()),s()(this,"state",{states:null,currentVersionInfo:null,needRefreshPage:!1,hasLogin:!1,hasRegister:!1,bilibiliAccount:null,downloadingSettings:!1,loading:!1,loginLoginModalShow:!1,hasBilibiliAccountLogin:!1,handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickLogin:()=>{this.state.loading||(this.setState({loading:!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login"},e=>{e?this.setState({loading:!1,hasLogin:e.hasLogin,hasRegister:e.hasRegister,bilibiliAccount:e.bilibiliAccount}):this.setState({loading:!1,loginLoginModalShow:!0})}))},handleOnClickRefresh:()=>{history.go()},handleOnClickGoToOverview:()=>{this.setState({needRefreshPage:!0}),this.openPage(chrome.runtime.getURL("/html/config.html"))},handleOnClickGoToWebsite:()=>{this.openPage("https://bilibilihelper.com/")},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")}}),s()(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),s()(this,"openHelperWebsite",()=>{this.openPage("https://bilibilihelper.com/")}),s()(this,"goToSendMessageForDeveloper",()=>{this.openPage("https://message.bilibili.com/#/whisper/mid1344117169")})}componentDidMount(){chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{if(e){const{hasLogin:t,bilibiliAccount:i,downloadingSettings:o}=e;this.setState({hasLogin:t,bilibiliAccount:i,downloadingSettings:o})}}),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:e})})}render(){const{show:e=!1,position:t="left",children:i}=this.props;return p.a.createElement(f.Provider,{value:this.state},p.a.createElement(v,{ref:this.contentRef,id:"bilibiliHelper2ContentWrapper",show:e,position:t},i,p.a.createElement("footer",null,p.a.createElement("span",{className:"bilibili-helper-name",onClick:this.openHelperWebsite},"哔哩哔哩助手官网"),p.a.createElement("span",{className:"report",onClick:this.goToSendMessageForDeveloper},"点击反馈"),p.a.createElement("span",{className:"version"},"当前版本: ",u.version))))}}s()(w,"contextType",f),w.propTypes={show:b.a.bool,position:b.a.string,children:b.a.any},i.d(t,"b",(function(){return y})),i.d(t,"a",(function(){return M})),Object(u.injectIconfont)();const k=m.d.div.attrs(({showWhenFullWiden:e,showInInjectPlayer:t})=>({className:["handle-wrapper",e?"show-in-full-widen":""],id:"bilibiliHelper2HandleButtonWrapper"}))`
  position: fixed;
  top: 100px;
  right: 24px;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  //opacity: .8;
  transition: opacity .2s .1s;
  z-index: 999999;

  &:hover {
    opacity: 1 !important;
    transition: opacity .2s;
  }
`,y=Object(m.d)(c.a).attrs(()=>({id:"bilibiliHelper2HandleButton"}))`
  position: relative;
  margin: 0;
  padding: 6px;
  border-radius: 50%;
  background-size: 24px;
  opacity: 1;
  cursor: pointer;
  user-select: none;
  transform: scale(1);
  transition: transform 300ms, border-radius 200ms, opacity .2s;
  z-index: 1;

  &.default {
    background-color: var(--bilibili-pink);
    color: #fff;
    box-shadow: 0 1px 4px 0 rgb(251 114 153 / 0.6);
  }

  &.translucentPink {
    background-color: var(--bilibili-pink);
    color: #fff;
    box-shadow: 0 0 1px 0 var(--bilibili-pink);
    opacity: .6;
  }

  &.pinkCat {
    background-color: #fff;
    color: var(--bilibili-pink);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  }

  &.blackCat {
    background-color: var(--bilibili-gray);
    color: var(--paper-grey-900);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  }

  &.translucentWhite {
    background-color: var(--bilibili-gray);
    color: var(--bilibili-pink);
    opacity: .6;
  }

  &::before {
    display: block;
    transition: transform 300ms;
  }

  &:hover {
    opacity: 1;

    .lock-btn, .dark-btn {
      visibility: visible;
    }
  }

  &:hover::before {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  .tool-buttons {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    .bilibili-helper-2-iconfont {
      transform: scale(.7);
    }
  }

  &.right.showContent {
    border-radius: 0 50% 50% 0;
  }

  &.left.showContent {
    border-radius: 50% 0 0 50%;
  }
`,E=Object(m.d)(c.a).attrs(({position:e})=>({className:["lock-btn",e]}))`
  position: absolute;
  bottom: -12px;
  padding: 3px;
  border-radius: 50%;
  background-color: var(--bilibili-gray);
  color: var(--paper-grey-900);
  //transform: scale(0.6);
  cursor: pointer;
  user-select: none;
  visibility: hidden;
  z-index: 1;

  &.right {
    right: 0;
    transform-origin: top right;
  }

  &.left {
    left: 0;
    transform-origin: top left;
  }

  .bilibili-helper-2-dark-mode & {
    background-color: var(--dark-4);
    color: var(--paper-pink-50);

    &::before {
      transform: scale(0.85);
      display: block;
    }
  }
`;let C=x.a.get("bilibili-helper-2-handle-lock-mode"),z=x.a.get("bilibili-helper-2-handle-lock-mode-direction");const N=x.a.get("bilibili-helper-2-handle-lock-mode-position");class M extends p.a.Component{constructor(e){super(e),s()(this,"state",{isLocked:C,toolBarPosition:z||"right",showContent:!1,catType:"default",hideWhenFullWiden:!0,showInInjectPlayer:!1}),s()(this,"mouseDown",!1),s()(this,"handleMoved",!1),s()(this,"initPosition",()=>{const{isLocked:e}=this.state,t=document.getElementById("bilibiliHelper2HandleButtonWrapper");if(t.style.position=e?"fixed":"absolute",N){let{top:e,left:i,right:o}=N;e<0&&(e=0,N.top=0),t.style.top=e+"px",void 0!==i?(i<0&&(i=0,N.left=0),this.setState({toolBarPosition:"left"}),t.style.left=i+"px"):void 0!==o&&(o<0&&(o=0,N.right=0),this.setState({toolBarPosition:"right"}),t.style.right=o+"px"),x.a.set("bilibili-helper-2-handle-lock-mode-position",N)}const i=t.offsetWidth,o=t.offsetHeight,n=t.offsetTop,a=t.offsetLeft,r=document.body.clientWidth,l=window.innerHeight;n>l-o&&(t.style.top=l-o+"px"),a>r-i&&(t.style.left=r-i+"px")}),s()(this,"initDragEvent",()=>{const e=document.getElementById("bilibiliHelper2HandleButtonWrapper"),t=document.getElementById("bilibiliHelper2ContentWrapper"),i=document.getElementById("bilibiliHelper2HandleButton"),o=i.clientWidth;let n,a,r;const l=()=>{n=t.offsetHeight,a=i.offsetHeight,r=window.innerHeight,t.style.maxHeight=r<n?r-40+"px":""};if(window.addEventListener("resize",()=>{l()}),i.addEventListener("mousedown",t=>{t.stopPropagation(),this.mouseDown=!0,this.originOffectTop=e.offsetTop,this.originOffectLeft=e.offsetLeft,this.originX=t.clientX,this.originY=t.clientY,l()}),window.ResizeObserver){new window.ResizeObserver(()=>{r=window.innerHeight,n=t.offsetHeight,r<n&&(t.style.maxHeight=r-40+"px")}).observe(t)}document.addEventListener("mousemove",i=>{if(this.mouseDown){const l=this.originX-i.clientX,s=this.originY-i.clientY;if(Math.abs(2*l+2*s)>10||this.handleMoved){let i=this.originOffectTop-s;if(i<=0?i=0:i>=r-a&&(i=r-a),t.style.transform=r-i<n?`translate(0px, ${-(n-(r-i))}px)`:"translate(0, 0)",e.style.top=i+"px",this.handleMoved=!0,this.originOffectLeft-l+o/2<document.body.clientWidth/2){"left"!==this.state.toolBarPosition&&(this.setState({toolBarPosition:"left"}),x.a.set("bilibili-helper-2-handle-lock-mode-direction","left"));let t=this.originOffectLeft-l;t<=0&&(t=0),e.style.right="unset",e.style.left=t+"px"}else{"right"!==this.state.toolBarPosition&&(this.setState({toolBarPosition:"right"}),x.a.set("bilibili-helper-2-handle-lock-mode-direction","right"));let t=document.body.clientWidth-(this.originOffectLeft-l)-o;t<0&&(t=0),e.style.left="unset",e.style.right=t+"px"}}}},!0),document.addEventListener("mouseup",()=>{const{toolBarPosition:t}=this.state;if(this.mouseDown){this.mouseDown=!1;let{left:i,top:o,right:n}=e.getBoundingClientRect();i<-10?i=-10:n<-10&&(n=-10),"left"===t?x.a.set("bilibili-helper-2-handle-lock-mode-position",{top:o,left:i}):"right"===t&&x.a.set("bilibili-helper-2-handle-lock-mode-position",{top:o,right:document.body.clientWidth-n})}},!1)}),s()(this,"handleOnClickLockModeBtn",e=>{e.persist(),e.stopPropagation();const t=!this.state.isLocked;return chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"cat",action:"click_handle_lock_button",label:!this.state.isLocked}),this.setState({isLocked:!this.state.isLocked},()=>{const{toolBarPosition:e}=this.state;x.a.set("bilibili-helper-2-handle-lock-mode",t);const i=document.getElementById("bilibiliHelper2HandleButtonWrapper"),{top:o,left:n,right:a}=i.getBoundingClientRect(),r=window.scrollY,l=window.scrollX,s={};if(t){i.style.position="fixed",i.style.top=o+"px";let e=o-r;e<=12&&(e=12),s.top=e}else i.style.position="absolute",i.style.top=o+r+"px",s.top=o+r;"left"===e?(i.style.left=n-l+"px",i.style.right="unset",s.left=n-l,s.right=""):"right"===e&&(i.style.left="unset",i.style.right=""+(document.body.clientWidth-a),s.left="",s.right=document.body.clientWidth-a),x.a.set("bilibili-helper-2-handle-lock-mode-position",s)}),!1}),s()(this,"handleOnClickHandleBtn",()=>{const{onBeforeClickHandle:e,onAfterClickHandle:t}=this.props;e instanceof Function&&e(this.state.showContent),this.handleMoved?(this.handleMoved=!1,t instanceof Function&&t(this.state.showContent)):(this.updateContentWrapperPosition(),this.setState({showContent:!this.state.showContent}),t instanceof Function&&t(!this.state.showContent))}),s()(this,"updateContentWrapperPosition",()=>{const e=document.getElementById("bilibiliHelper2ContentWrapper"),t=document.getElementById("bilibiliHelper2HandleButton"),i=e.offsetHeight,o=t.offsetHeight,n=window.innerHeight;let a=this.originOffectTop;a>=n-o&&(a=n-o),e.style.transform=n-a<i?`translate(0px, ${-(i-(n-a))}px)`:"translate(0, 0)"}),void 0===C&&(C=!1,x.a.set("bilibili-helper-2-handle-lock-mode",C)),z||(z="right",x.a.set("bilibili-helper-2-handle-lock-mode-direction",z))}get pageWidth(){return document.documentElement.offsetWidth+document.documentElement.scrollLeft}componentDidMount(){this.initPosition(),this.initDragEvent(),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},({catType:e,showWhenFullWiden:t=!0,showInInjectPlayer:i=!1})=>{this.setState({catType:e,showWhenFullWiden:t,showInInjectPlayer:i})})}render(){const e=this.props,{lockMode:t=!0,children:i,onBeforeClickHandle:o,onAfterClickHandle:a}=e,l=r()(e,["lockMode","children","onBeforeClickHandle","onAfterClickHandle"]),{isLocked:s,toolBarPosition:c,showContent:d,catType:h,showWhenFullWiden:b,showInInjectPlayer:u}=this.state;return p.a.createElement(k,n()({showWhenFullWiden:b,showInInjectPlayer:u},l),p.a.createElement(y,{className:["handle-button",c,d?"showContent":"",h].filter(Boolean).join(" "),icon:"cat",size:24,onClick:this.handleOnClickHandleBtn},p.a.createElement("div",{className:"tool-buttons"},t&&p.a.createElement(E,{position:c,icon:s?"lock":"unlock",size:16,onClick:this.handleOnClickLockModeBtn}))),p.a.createElement(w,{show:d,position:c},i))}}M.propTypes={lockMode:b.a.bool,darkMode:b.a.bool,children:b.a.any,onBeforeClickHandle:b.a.any,onAfterClickHandle:b.a.any}},20:function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var o=i(28),n=i.n(o),a=i(29),r=i.n(a),l=i(15),s=i.n(l),c=i(14),d=i.n(c),p=i(12),h=i.n(p),b=i(11),u=i.n(b),m=i(18),g=i.n(m),x=i(1),f=i.n(x),v=i(17),w=i.n(v),k=i(2),y=i.n(k),E=i(0),C=i.n(E),z=i(3),N=i(21),M=i(93),L=i(23);function O(e,t){var i=u()(e);if(h.a){var o=h()(e);t&&(o=o.filter((function(t){return d()(e,t).enumerable}))),i.push.apply(i,o)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach((function(t){f()(e,t,i[t])})):s.a?r()(e,s()(i)):O(Object(i)).forEach((function(t){n()(e,t,d()(i,t))}))}return e}const{color:B}=L.a,S=z.c`
  height: 36px;
  //margin-right: -12px;
  border-radius: 50%;
`,T=z.d.div.attrs(()=>({className:"button"}))`
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 32px;
  line-height: inherit;
  border-radius: 3px;
  color: ${B("paper-grey-600")};
  ${({theme:e})=>e.icon&&S};
  overflow: hidden;
  user-select: none;

  &.disabled {
    cursor: not-allowed !important;
    filter: grayscale(1) !important;
  }

  &.primary {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  &.border {
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
`,A=z.d.button.attrs(()=>({className:"button-view"}))`
  display: block;
  width: 100%;
  height: 100%;
  min-width: ${({theme:e})=>e.icon?"36px":"50px"};
  ${({theme:e})=>e.icon?"padding: 0":""};
  ${({theme:e})=>e.normal?"min-height: 36px":""};
  font-size: inherit;
  font-weight: inherit;
  background-color: transparent;
  color: inherit;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":e.loading?"progress":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  transition: color .3s;
  border: none;
  outline: none;
  z-index: 1;

  &.disabled {
    cursor: not-allowed !important;;
    //pointer-events: none!important;
  }
`,j=function(e){let{disabled:t=!1,disableEvent:i=!0,loading:o,children:n,className:a,theme:r,icon:l,normal:s,onClick:c,disable:d,iconSize:p=16,onMouseDown:h,onMouseUp:b}=e,u=w()(e,["disabled","disableEvent","loading","children","className","theme","icon","normal","onClick","disable","iconSize","onMouseDown","onMouseUp"]);const[m,x]=Object(E.useState)(!1),[f,v]=Object(E.useState)(null),[k,y]=Object(E.useState)(void 0),[L,O]=Object(E.useState)(void 0),B=Object(E.useRef)(null),S=Object(E.useCallback)(e=>{if(t&&i)return!1;if(!m){const t=B.current.clientWidth,i=B.current.clientHeight,o=B.current.getBoundingClientRect(),n=l?t/2:e.clientX-o.left,a=l?i/2:e.clientY-o.top,r=l?t/2:Math.abs(t/2-n)+t/2,s=l?i/2:Math.abs(i/2-a)+i/2;x(!0),v(Math.sqrt(r*r+s*s)),y(n),O(a)}},[m,t]),j=Object(E.useCallback)(()=>{if(t&&i)return!1;m&&x(!1)},[m,t]);return C.a.createElement(z.a,{theme:F(F({},r),{},{radius:f,icon:l,normal:s,disable:d,loading:o})},C.a.createElement(T,{className:[a,t?"disabled":""].filter(Boolean).join(" "),onMouseDown:d?null:S,onMouseUp:d?null:j,onMouseLeave:d?null:j},C.a.createElement(A,g()({ref:B,onClick:t&&i?null:c,onMouseDown:h,onMouseUp:b,className:t?"disabled":""},u),l&&C.a.createElement(N.a,{icon:l,size:p}),n),C.a.createElement(M.a,{active:m,x:k,y:L})))};j.propTypes={disabled:y.a.bool,disableEvent:y.a.bool,icon:y.a.any,iconSize:y.a.number,loading:y.a.bool,children:y.a.any,className:y.a.any,theme:y.a.object,normal:y.a.bool,onClick:y.a.func,disable:y.a.bool,onMouseDown:y.a.func,onMouseUp:y.a.func}},204:function(e,t,i){"use strict";var o=i(18),n=i.n(o),a=i(17),r=i.n(a),l=i(1),s=i.n(l),c=i(21),d=i(51),p=i(2),h=i.n(p),b=i(0),u=i.n(b),m=i(3),g=i(7);const x=m.d.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  //height: 160px;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      transition: filter 0.2s;
      filter: brightness(0.95);
      border-radius: 2px;
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;class f extends u.a.Component{constructor(e){super(e),s()(this,"state",{isSetWatchLater:!1,watchLaterText:!1}),s()(this,"visible",!1),s()(this,"handleOnClickUsername",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_card",action:"click_video",label:"upper_name"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+this.props.owner.mid})}),s()(this,"handleOnClickSetWatchLater",e=>{if(e.stopPropagation(),!this.state.isSetWatchLater)return(this.props.aid||this.props.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:this.props.aid||Object(g.bv2av)(this.props.bvid)},e=>{switch(e){case!0:this.setState({isSetWatchLater:!0,watchLaterText:"已添加到稍后再看"});break;case"notSupport":this.setState({isSetWatchLater:!0,watchLaterText:"版权内容暂时无法添加到稍后再看"});break;case!1:this.setState({isSetWatchLater:!1,watchLaterText:"添加稍后再看失败"})}}),!1}),s()(this,"handleOnClickRemoveWatchLater",e=>{if(e.stopPropagation(),!this.state.isSetWatchLater)return(this.props.aid||this.props.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:this.props.aid||Object(g.bv2av)(this.props.bvid)},e=>{switch(e){case!0:this.setState({isSetWatchLater:!0,watchLaterText:"已添加到稍后再看"});break;case!1:this.setState({isSetWatchLater:!1,watchLaterText:"添加稍后再看失败"})}}),!1})}componentDidMount(){}render(){const e=this.props,{cover:t,duration:i,title:o="none title",owner:a,stat:l,onClickCover:s,onClickUserName:p,hideAuthor:h,isSpecialAttention:b,onClickFollowBtn:m,publishDateDesc:g,onContentVisible:f,publishTime:v,aid:w,bvid:k,isNew:y,showWatcherLaterButton:E,showRemoveWatcherLaterButton:C,showNewTag:z}=e,N=r()(e,["cover","duration","title","owner","stat","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","publishDateDesc","onContentVisible","publishTime","aid","bvid","isNew","showWatcherLaterButton","showRemoveWatcherLaterButton","showNewTag"]),{isSetWatchLater:M,watchLaterText:L}=this.state;return u.a.createElement(x,n()({className:b?"special-attention":null},N),u.a.createElement("a",{className:"cover",onMouseUp:s},u.a.createElement(d.a,{className:"cover-image",url:t+"@634w_400h.webp",height:86}),v&&y?u.a.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,g&&u.a.createElement("time",{className:"publish-date-desc"},g),(w||k)&&E?u.a.createElement("div",{className:["play-later-wrapper",M?"watched":null].filter(Boolean).join(" "),onMouseUp:this.handleOnClickSetWatchLater},M?null:u.a.createElement(c.a,{className:"play-later",icon:"play-later",size:18}),L?u.a.createElement("span",{className:"text"},L):null):null,(w||k)&&C?u.a.createElement("div",{className:["play-later-wrapper",M?"watched":null].filter(Boolean).join(" "),onMouseUp:this.handleOnClickRemoveWatchLater},M?null:u.a.createElement(c.a,{className:"play-later",icon:"play-later",size:18}),L?u.a.createElement("span",{className:"text"},L):null):null,u.a.createElement("time",{className:"duration"},i)),u.a.createElement("a",{className:"title",title:o,onMouseUp:s},o),u.a.createElement("div",{className:"info"},u.a.createElement("div",{className:"info-line name"},!h&&u.a.createElement("a",{className:"username",onMouseUp:p||this.handleOnClickUsername},"UP: ",a.name),!h&&u.a.createElement("a",{className:"add-special-attention-btn",onMouseUp:m},b?u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{icon:"love",size:14})):null,b?null:u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{icon:"love-hollow",size:14}))))))}}s()(f,"defaultProps",{showWatcherLaterButton:!0}),f.propTypes={className:h.a.string,aid:h.a.number,bvid:h.a.string,cover:h.a.string,duration:h.a.string,title:h.a.string,publishTime:h.a.number,publishDateDesc:h.a.string,owner:h.a.object,stat:h.a.object,onClickCover:h.a.func,onClickUserName:h.a.func,onClickFollowBtn:h.a.func,onContentVisible:h.a.func,isSpecialAttention:h.a.bool,hideAuthor:h.a.bool,showWatcherLaterButton:h.a.bool,showRemoveWatcherLaterButton:h.a.bool,showNewTag:h.a.bool,isNew:h.a.bool};var v=i(40),w=i.n(v);const k=m.d.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  //height: 114px;
  z-index: 1;
  contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    //:before {
    //  content: "";
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  height: 38px;
    //  width: 100%;
    //  //border-radius: 0 0 2px 2px;
    //  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
    //  z-index: 1;
    //  pointer-events: none;
    //}

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      filter: grayscale(0.5) brightness(.4);
      border-radius: 4px;
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      left: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .3s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      line-height: 14px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px 6px 4px;
    width: 100%;
    line-height: 16px;
    border-radius: 4px;
    background: linear-gradient(180deg, transparent,rgba(0,0,0,.8));

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;
      cursor: pointer;
      z-index: 1;
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 4px;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`,y=function(e){let{cover:t,duration:i,title:o="none title",owner:a,stat:l,onClickCover:s,onClickUserName:p,hideAuthor:h,isSpecialAttention:b,onClickFollowBtn:m,publishDateDesc:g,publishTime:x,aid:f,showWatcherLaterButton:v=!0,showRemoveWatcherLaterButton:y=!1,showNewTag:E=!1}=e,C=r()(e,["cover","duration","title","owner","stat","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","publishDateDesc","publishTime","aid","showWatcherLaterButton","showRemoveWatcherLaterButton","showNewTag"]);const[z]=u.a.useState(w()()-x<864e5),[N,M]=u.a.useState(!1),[L,O]=u.a.useState(!1),F=u.a.useCallback(e=>{e.stopPropagation(),a&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+a.mid})},[a]),B=u.a.useCallback(e=>(e.stopPropagation(),f&&!N&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:f},e=>{switch(e){case!0:M(!0),O("已稍后再看");break;case"notSupport":M(!0),O("不支持番剧视频");break;case!1:M(!1),O("设置失败")}}),!1),[f,N]),S=u.a.useCallback(e=>(e.stopPropagation(),f&&!N&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:f},e=>{switch(e){case!0:M(!0),O("已从稍后再看删除");break;case!1:M(!1),O("设置失败")}}),!1),[f,N]);return u.a.createElement(k,n()({className:b?"special-attention":null},C),u.a.createElement("div",{className:"cover",onMouseUp:s},u.a.createElement(d.a,{className:"cover-image",url:t+"@638w_220h.webp",height:86,lazy:!0,duration:0}),x&&E&&z?u.a.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,v?u.a.createElement("div",{className:["play-later-wrapper",N?"watched":null].filter(Boolean).join(" "),onMouseUp:B},N?null:u.a.createElement(c.a,{className:"play-later",icon:"play-later",size:18}),L?u.a.createElement("span",{className:"text"},L):null):null,y?u.a.createElement("div",{className:["play-later-wrapper",N?"watched":null].filter(Boolean).join(" "),onMouseUp:S},N?null:u.a.createElement(c.a,{className:"play-later",icon:"play-later",size:18}),L?u.a.createElement("span",{className:"text"},L):null):null,u.a.createElement("div",{className:"top-info"},u.a.createElement("div",{className:"user-info"},!h&&a?u.a.createElement("a",{className:"username",onMouseUp:p||F},a.name):null,!h&&u.a.createElement("a",{className:"add-special-attention-btn",onMouseUp:m},b?u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{icon:"love",size:14})):null,b?null:u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{icon:"love-hollow",size:14})))),i||g?u.a.createElement("div",{className:"time-box"},i?u.a.createElement("time",{className:"duration"},i):null,g?u.a.createElement("time",{className:"publish-date"},g):null):null),u.a.createElement("div",{className:"bottom-info"},u.a.createElement("a",{className:"title",title:o},o))))};y.propTypes={className:h.a.string,aid:h.a.number,bvid:h.a.string,cover:h.a.string,duration:h.a.string,title:h.a.string,publishTime:h.a.number,publishDateDesc:h.a.string,owner:h.a.object,stat:h.a.object,onClickCover:h.a.func,onClickUserName:h.a.func,onClickFollowBtn:h.a.func,isSpecialAttention:h.a.bool,hideAuthor:h.a.bool,showWatcherLaterButton:h.a.bool,showRemoveWatcherLaterButton:h.a.bool,showNewTag:h.a.bool};const E=m.d.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  display: flex;
  //margin-bottom: 6px;
  padding: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  //max-width: 200px;
  min-width: 148px;
  //height: 42px;
  border-radius: 2px;
  z-index: 1;
  contain: paint;
  content-visibility: paint;
  contain-intrinsic-size: 0 56px;
  //will-change: scroll-position;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  .cover {
    position: relative;
    display: block;
    flex-shrink: 0;
    width: 64px;
    height: 48px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    //:before {
    //  content: "";
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  height: 38px;
    //  width: 100%;
    //  //border-radius: 0 0 2px 2px;
    //  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
    //  z-index: 1;
    //  pointer-events: none;
    //}

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
      //filter: brightness(.8);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;
  }

  .add-special-attention-btn {
    visibility: hidden;
    margin-left: 2px;
    line-height: 14px;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #aaa;
    }

    span {
      vertical-align: middle;
      font-size: 12px;
      font-weight: bold;
    }

    .text {
      padding: 0 2px;
      zoom: 0.8;
    }
  }

  .user-info {
    margin-top: 2px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    //transition: background-color .3s;

    a {
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      opacity: 0.3;

      :hover {
        opacity: 1;
      }
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    //position: absolute;
    //top: 0;
    //right: 0;
    //left: 62px;
    box-sizing: border-box;
    //display: flex;
    //align-items: center;
    padding: 0 0 0 4px;
    line-height: 16px;
    color: var(--paper-grey-900);

    .title {
      display: -webkit-box;
      flex-grow: 1;
      margin-top: -2px;
      font-size: 12px;
      overflow: hidden;
      text-align: justify;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;
    }
  }

  &:hover {
    //.cover .cover-image {
    //  filter: brightness(1);
    //}

    .top-info {
      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }

    .user-info {
      background-color: rgb(0 0 0 / 50%);

      .add-special-attention-btn {
        visibility: visible;
      }
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 4px 1px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #111;
    }

    .title {
      color: #ddd;
    }

    .user-info {
      a {
        color: #ddd;
      }
    }

    .bottom-info {
      //color: var()
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`,C=function(e){let{cover:t,duration:i,title:o="none title",owner:a,stat:l,onClickCover:s,onClickUserName:p,hideAuthor:h,isSpecialAttention:b,onClickFollowBtn:m,publishDateDesc:g,publishTime:x,aid:f,showWatcherLaterButton:v=!0,showRemoveWatcherLaterButton:w=!1}=e,k=r()(e,["cover","duration","title","owner","stat","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","publishDateDesc","publishTime","aid","showWatcherLaterButton","showRemoveWatcherLaterButton"]);const[y,C]=u.a.useState(!1),[z,N]=u.a.useState(!1),M=u.a.useCallback(e=>{e.stopPropagation(),a&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+a.mid})},[a]),L=u.a.useCallback(e=>(e.stopPropagation(),f&&!y&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:f},e=>{switch(e){case!0:C(!0),N("已稍后再看");break;case"notSupport":C(!0),N("不支持番剧视频");break;case!1:C(!1),N("设置失败")}}),!1),[f,y]),O=u.a.useCallback(e=>(e.stopPropagation(),f&&!y&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:f},e=>{switch(e){case!0:C(!0),N("已从稍后再看删除");break;case!1:C(!1),N("设置失败")}}),!1),[f,y]);return u.a.createElement(E,n()({className:b?"special-attention":null},k,{onMouseUp:s}),u.a.createElement("div",{className:"cover"},u.a.createElement(d.a,{className:"cover-image",url:t+"@128w_96h.webp",height:86,lazy:!0,duration:0}),v?u.a.createElement("div",{className:["play-later-wrapper",y?"watched":null].filter(Boolean).join(" "),onMouseUp:L},y?null:u.a.createElement(c.a,{className:"play-later",icon:"play-later",size:18}),z?u.a.createElement("span",{className:"text"},z):null):null,w?u.a.createElement("div",{className:["play-later-wrapper",y?"watched":null].filter(Boolean).join(" "),onMouseUp:O},y?null:u.a.createElement(c.a,{className:"play-later",icon:"play-later",size:18}),z?u.a.createElement("span",{className:"text"},z):null):null),u.a.createElement("div",{className:"bottom-info"},u.a.createElement("a",{className:"title",title:o},o),u.a.createElement("div",{className:"user-info"},!h&&a?u.a.createElement("a",{className:"username",onMouseUp:p||M},a.name):null,!h&&u.a.createElement("a",{className:"add-special-attention-btn",onMouseUp:m},b?u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{icon:"love",size:14})):null,b?null:u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{icon:"love-hollow",size:14}))))))};C.propTypes={className:h.a.string,aid:h.a.number,bvid:h.a.string,cover:h.a.string,duration:h.a.string,title:h.a.string,publishTime:h.a.number,publishDateDesc:h.a.string,owner:h.a.object,stat:h.a.object,onClickCover:h.a.func,onClickUserName:h.a.func,onClickFollowBtn:h.a.func,isSpecialAttention:h.a.bool,hideAuthor:h.a.bool,showWatcherLaterButton:h.a.bool,showRemoveWatcherLaterButton:h.a.bool},i.d(t,"c",(function(){return f})),i.d(t,"a",(function(){return y})),i.d(t,"b",(function(){return C}))},205:function(e,t,i){"use strict";var o=i(18),n=i.n(o),a=i(17),r=i.n(a),l=i(1),s=i.n(l),c=(i(21),i(51)),d=i(2),p=i.n(d),h=i(0),b=i.n(h),u=i(3);i(7);const m=u.d.section.attrs(()=>({className:"ad-card"}))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      transition: filter 0.2s;
      filter: brightness(0.95);
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.ad {
      //position: absolute;
      //top: 6px;
      //left: 6px;
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;class g extends b.a.Component{constructor(e){super(e),s()(this,"state",{isSetWatchLater:!1,watchLaterText:!1}),s()(this,"visible",!1),s()(this,"handleOnClick",(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:t}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"click_ad",label:this.props.id})})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"show_ad",label:this.props.id})}render(){const e=this.props,{cover:t,title:i="none title",link:o}=e,a=r()(e,["cover","title","link"]);return b.a.createElement(m,n()({},a,{onMouseUp:e=>this.handleOnClick(e,o)}),b.a.createElement("a",{className:"cover"},b.a.createElement(c.a,{className:"cover-image",url:t+"@634w_400h.webp",height:86})),b.a.createElement("a",{className:"title",title:i},b.a.createElement("img",{className:"tag ad",src:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad"}),i))}}s()(g,"defaultProps",{showWatcherLaterButton:!0}),g.propTypes={cover:p.a.string,title:p.a.string,link:p.a.string,id:p.a.number};const x=u.d.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  height: 114px;
  z-index: 1;
  contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      //filter: grayscale(0.5) brightness(0.24);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.ad {
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .3s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 6px 4px;
    width: 100%;
    line-height: 16px;

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`,f=function(e){let{cover:t,title:i="none title",link:o,id:a}=e,l=r()(e,["cover","title","link","id"]);Object(h.useEffect)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"show_ad",label:a})},[]);const s=b.a.useCallback(e=>{e.stopPropagation(),o&&(chrome.runtime.sendMessage({target:"tabController",event:"create",url:o}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"click_ad",label:o}))},[o]);return b.a.createElement(x,n()({},l,{onMouseUp:s}),b.a.createElement("div",{className:"cover"},b.a.createElement(c.a,{className:"cover-image",url:t+"@638w_220h.webp",height:86,lazy:!0,duration:0}),b.a.createElement("div",{className:"bottom-info"},b.a.createElement("a",{className:"title",title:i},b.a.createElement("img",{className:"tag ad",src:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad"}),i))))};f.propTypes={cover:p.a.string,title:p.a.string,link:p.a.string,id:p.a.number},i.d(t,!1,(function(){return g})),i.d(t,!1,(function(){return f}))},206:function(e,t,i){"use strict";i.d(t,"a",(function(){return C}));var o=i(6),n=i.n(o),a=i(40),r=i.n(a),l=i(1),s=i.n(l),c=i(20),d=i(2),p=i.n(d),h=i(0),b=i.n(h),u=i(22),m=i.n(u),g=i(3);const x=g.d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s, transform .2s;
  overflow: auto;
  white-space: nowrap;
  pointer-events: none;
  transform: translateY(-12px);
  z-index: -100000;

  //::after {
  //  content: " ";
  //  display: inline-block;
  //  vertical-align: middle;
  //  width: 0;
  //  height: 100%;
  //  overflow: hidden;
  //}

  &.on {
    transition: opacity .2s, transform .2s;
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    z-index: 1000000;
  }
`,f=g.d.div.attrs(()=>({className:"message-container"}))`
  position: relative;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  max-width: 560px;
  min-width: 300px;
  vertical-align: top;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: transform 0.12s;

  @media (prefers-color-scheme: dark) {
    background-color: var(--paper-grey-900);
    color: #E5E5E5;
  }
`,v=g.d.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 0;
  border-bottom: 1px solid #eee;
  padding: 0 12px;
  font-size: 14px;
  pointer-events: initial;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s, height .3s, padding .2s;

  &:last-of-type {
    border-bottom: none;
  }

  .content {
    flex-grow: 1;
  }

  .action-box {
    display: flex;
    flex-shrink: 0;

    .button {
      margin: -10px -12px -10px 0px;
    }
  }

  &.on {
    visibility: visible;
    opacity: 1;
    height: 36px;
    padding: 8px 12px;
    transition: opacity 0.2s, height .2s, padding .2s;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #151515;
  }
`;class w extends b.a.Component{constructor(e){super(e),s()(this,"state",{show:!1,messageList:[]}),s()(this,"addMessage",(e,t,i=3e3)=>{const{messageList:o}=this.state,n=r()();o.push({key:n,type:e,content:t,duration:i,on:!1}),this.setState({messageList:o},()=>{setTimeout(()=>{this.showMessage(n)},200)})}),s()(this,"showMessage",e=>{const{messageList:t}=this.state,i=t.find(({key:t})=>t===e);i.on=!0,this.setState({messageList:t,show:t.filter(({on:e})=>e).length>0},()=>{"number"==typeof i.duration&&i.duration>0&&setTimeout(async()=>{await this.hideMessage(e)},i.duration)})}),s()(this,"hideMessage",async e=>new n.a(t=>{const{messageList:i}=this.state;1===i.length&&this.setState({show:!1}),setTimeout(()=>{const o=i.findIndex(({key:t})=>t===e);i[o].on=!1,this.setState({messageList:i},()=>{setTimeout(()=>this.deleteMessage(e),200),t(o)})},1===i.length?200:0)})),s()(this,"deleteMessage",async e=>new n.a(t=>{const{messageList:i}=this.state,o=i.findIndex(({key:t})=>t===e);i.splice(o,1),this.setState({messageList:i,show:i.filter(({on:e})=>e).length>0},t)})),s()(this,"closeMessage",e=>this.hideMessage(e)),s()(this,"clearAll",()=>{const{messageList:e}=this.state;e.forEach(({key:e})=>{this.hideMessage(e)})})}componentDidMount(){this.props.app.current=this}render(){const{show:e,messageList:t}=this.state;return b.a.createElement(x,{className:e?"message-model on":"message-model"},b.a.createElement(f,{classNames:"message-container"},t.map(({key:e,type:t,content:i,duration:o,on:n})=>b.a.createElement(v,{key:e,className:["message-row",t,n?"on":""].join(" ")},b.a.createElement("div",{className:"content"},i),o?null:b.a.createElement("div",{className:"action-box"},b.a.createElement(c.a,{icon:"close",iconSize:12,onClick:()=>this.closeMessage(e)}))))))}}w.propTypes={app:p.a.any,title:p.a.string,children:p.a.any,buttons:p.a.any,onClickMask:p.a.func,onClosed:p.a.func};const k=b.a.createRef(),y=()=>new n.a(e=>{let t=document.getElementById("bhMessageWrapper");t?e(k):(t=document.createElement("div"),t.id="bhMessageWrapper",document.body.appendChild(t),m.a.render(b.a.createElement(w,{app:k}),t,()=>{e(k)}))}),E=(e,t,...i)=>{y().then(o=>{o.current.addMessage(e,t,...i)})},C={info:(e,...t)=>E("info",e,...t),warn:(e,...t)=>E("warn",e,...t),error:(e,...t)=>E("error",e,...t),clearAll:()=>{y().then(e=>{e.current.clearAll()})}}},21:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var o=i(18),n=i.n(o),a=i(17),r=i.n(a),l=i(2),s=i.n(l),c=i(0),d=i.n(c),p=i(3),h=i(7);const b={cat128:Object(h.getURL)("statics/imgs/icon-128.png"),catSvg:Object(h.getURL)("statics/images/cat.svg"),catSvgWhite:Object(h.getURL)("statics/images/cat-white.svg"),arrowRight:Object(h.getURL)("statics/imgs/arrow_right.svg"),arrowDown:Object(h.getURL)("statics/imgs/arrow_down.svg"),arrowUp:Object(h.getURL)("statics/imgs/arrow_up.svg"),arrowLeft:Object(h.getURL)("statics/imgs/arrow_left.svg")},u=p.d.span.attrs(({icon:e})=>({className:e?"bilibili-helper-2-iconfont bilibili-helper-2-icon-"+e:"icon"}))`
  display: inline-block;
  width: ${e=>e.size||36}px;
  height: ${e=>e.size||36}px;
  line-height: ${e=>e.size||36}px;
  vertical-align: middle;
  font-size: ${e=>e.size||36}px !important;
  background-image: url(${({image:e})=>e&&b[e]});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${e=>e.image?"100%":"60%"};
  -webkit-font-smoothing: antialiased;
`;class m extends d.a.Component{render(){const e=this.props,{icon:t,image:i,size:o=36}=e,a=r()(e,["icon","image","size"]);return d.a.createElement(u,n()({icon:t,image:i,size:o,className:t?"bilibili-helper-2-iconfont bilibili-helper-2-icon-"+t:"icon"},a))}}m.propTypes={icon:s.a.string,image:s.a.bool,size:s.a.number}},36:function(e,t,i){"use strict";var o=i(3);const n=o.d.div.attrs(({extend:e})=>({className:e?"extend":""}))`
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: all 0.3s;
  &.extend {
    margin-bottom: 0;
  }
  &::-webkit-scrollbar {
    //display: none;
    //visibility: hidden;
  }
`;var a=i(0),r=i.n(a),l=i(2),s=i.n(l),c=i(23);const{color:d}=c.a,p=o.d.div.attrs(()=>({className:"list-wrapper"}))`
  flex-shrink: 0;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  min-height: 0;
  min-width: 350px;
  transition: min-height 0.3s;
  visibility: visible;
  opacity: 1;
  
  .list-wrapper & {
    margin-left: 16px;
  }
`,h=o.d.div.attrs(()=>({className:"list-header"}))`
  margin: 21px 0 12px;
  padding: 8px 0 4px;
  max-height: 18px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .25px;
  color: ${d("paper-grey-900")};
  overflow: hidden;
  transition: all 0.2s;
  opacity: 1;
`,b=o.d.div.attrs(()=>({className:"list-body"}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  opacity: 1;
  transition: all 0.2s;
  //border-radius: 4px;
  border-radius: 3px;
  //box-shadow: 0 0px 1px 0 rgba(0,0,0,0.1);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  //background-color: whitesmoke;
  overflow: hidden;
  //padding-left: 40px;
  //background-color: white;
  .extended & {
    display: none;
  }
`;class u extends r.a.Component{constructor(){super(),this.top=0}render(){const{children:e,title:t,hidden:i}=this.props;return r.a.createElement(p,{hidden:i},t&&r.a.createElement(h,null,t),r.a.createElement(b,null,e))}}u.propTypes={children:s.a.any,title:s.a.string,theme:s.a.object,hidden:s.a.bool};var m=i(18),g=i.n(m),x=i(16),f=i.n(x),v=i(17),w=i.n(v),k=i(20);const y=o.d.div.attrs(()=>({className:"list-item"}))`
  background-color: #fff;
  border-top: 1px solid #f2f3f5;
  ${({disable:e})=>e?"cursor: not-allowed; opacity: .5;":""}
  
  &:nth-of-type(1) {
    border-top: none;
    margin-top: 0;
  }
  .list-item & {
    border-top: 1px solid #f2f3f5;
    margin-top: 0;
  }
`,E=o.d.div.attrs(()=>({className:"list-item-main"}))`
  min-height: ${e=>e.twoLine?"56px":"40px"};
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  cursor: ${({onClick:e})=>e?"pointer":"default"};
  opacity: 1;
  //.icon {
  //  margin: 0 12px 0 -6px;
  //}
`,C=o.d.div.attrs(()=>({className:"front-operation-wrapper"}))`
  margin: 12px 20px auto -20px;
`,z=o.d.div.attrs(()=>({className:"two-line-container"}))`
  display: flex;
  flex-direction: column;
  flex: auto;
  h3 {
    margin: 0;
    height: 20px;
    font-size: 13px;
  }
`,N=o.d.h3`
  margin: 0;
  height: 20px;
  font-size: 13px;
  font-weight: 400;
`,M=o.d.div`
  margin-top: 2px;
  height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #757575;
`,L=o.d.div.attrs(()=>({className:"list-item-end"}))`
  display: flex;
  align-items: center;
  margin: 0 4px 0 0;
  .separator + & {
    margin: 0 13px 0 -13px;
  }
  .button {
    margin-right: -12px;
  }
`,O=o.d.div.attrs(({hide:e})=>({className:e?"sub-list hide":"sub-list"}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 0;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
  overflow: hidden;
  opacity: 1;
  .list-item {
    margin-left: ${({noIndent:e})=>e?"0px":"60px"};
    .list-item-start {
      margin: 0;
    }
    &:last-of-type {
      padding-bottom: 16px;
    }
  }
`,F=function(e){let{icon:t,title:i,description:o,frontOperation:n,operation:l,subList:s,onClick:c,extend:d,separator:p,toggle:h,disable:b}=e,u=w()(e,["icon","title","description","frontOperation","operation","subList","onClick","extend","separator","toggle","disable"]);const[m,x]=Object(a.useState)(!1),[v,F]=Object(a.useState)(0),B=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(B.current){const e=f()(B.current.querySelectorAll(".list-item, *"));F(e.reduce((e,t)=>e+t.getBoundingClientRect().height,0))}},[B]),s&&s.children&&d&&(l=r.a.createElement(k.a,{icon:!0===m?"arrowDown":"arrowUp",onClick:()=>this.setState({hideSubList:!m})}),c=()=>x(!m)),r.a.createElement(y,g()({disable:b},u),i&&r.a.createElement(E,{onClick:c||null,twoLine:!!i&&!!o},t||null,n&&r.a.createElement(C,null,n),r.a.createElement(z,null,r.a.createElement(N,null,i),o&&r.a.createElement(M,null,o)),l&&r.a.createElement(L,{separator:p},l)),s&&s.children&&s.children&&r.a.createElement(O,{ref:B,noIndent:!i,style:{maxHeight:!d&&s.hide||d&&!0===m?"0":v||""}},s.children))};F.propTypes={icon:s.a.any,title:s.a.any,description:s.a.any,toggle:s.a.bool,frontOperation:s.a.any,operation:s.a.any,subList:s.a.object,extend:s.a.bool,onClick:s.a.any,separator:s.a.bool,disable:s.a.bool},F.defaultProps={subList:null,operation:null,toggle:!0,children:[],separator:!1,disable:!1};var B=i(1),S=i.n(B),T=i(24),A=i.n(T),j=i(93),D=i(61);const{color:W}=D.a,U=o.d.div.attrs(()=>({className:"radio-button-wrapper"}))`
  display: flex;
  align-items: center;
  //margin-left: -16px;
  width: 100%;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  opacity: ${({theme:e={}})=>e.disable?.5:1};
`,P=o.d.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${W("google-grey-700")};
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: ${W("bilibili-pink")};
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: ${W("bilibili-pink")};
    &::after {
      transform: scale(0.5);
    }
    .ripple-item {
      background-color: ${A()(W("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`,R=o.d.div.attrs(()=>({className:"radio-button-title"}))`
  margin-left: 20px;
  font-size: 14px;
`;class $ extends r.a.Component{constructor(){super(),this.handleOnMouseDown=this.handleOnMouseDown.bind(this),this.handleOnMouseUp=this.handleOnMouseUp.bind(this),this.state={mouseDown:!1}}handleOnMouseDown(){this.setState({mouseDown:!0})}handleOnMouseUp(){this.setState({mouseDown:!1})}render(){const{on:e,title:t,onClick:i,disable:n=!1}=this.props,{mouseDown:a}=this.state;return r.a.createElement(o.a,{theme:{disable:n}},r.a.createElement(U,{onClick:i},r.a.createElement(P,{className:[e?"checked":"","radio-button-disc"],onMouseDown:n?null:this.handleOnMouseDown,onMouseUp:n?null:this.handleOnMouseUp,onMouseLeave:n?null:this.handleOnMouseUp},r.a.createElement(o.a,{theme:{speed:.5,size:1.2}},r.a.createElement(j.a,{active:a}))),r.a.createElement(R,null,t)))}}S()($,"propTypes",{on:s.a.bool,title:s.a.any,onClick:s.a.func,disable:s.a.bool});var H=i(10);const I=o.d.div.attrs(({active:e})=>({className:e?"radio-button-disc active":"radio-button-disc"}))`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid var(--google-grey-700);
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: var(--bilibili-pink);
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: var(--bilibili-pink);
    &::after {
      transform: scale(0.5);
    }
  }
`,_=({on:e,mouseDown:t})=>r.a.createElement(I,{className:e?"checked":""},r.a.createElement(o.a,{theme:{speed:.5,size:1.2}},r.a.createElement(H.j,{active:t})));_.propTypes={on:s.a.bool,mouseDown:s.a.bool};const V=({data:e,value:t,onClick:i})=>e instanceof Array?e.map((e,o)=>{const{key:n,title:a,description:l,disable:s=!1,hide:c=!1}=e;return c?null:r.a.createElement(F,{disable:s,key:o,noBorder:!1,title:a,description:l,onClick:s?null:()=>i(n),frontOperation:r.a.createElement(_,{on:n===t,mouseDown:!1})})}):null,X=o.d.div.attrs(({active:e,disabled:t=!1})=>({className:e?"checkbox-rect on":"checkbox-rect",disabled:t}))`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 2px solid #848990;
  border-radius: 2px;
  transition: background-color 140ms, transform 140ms;
  cursor: pointer;
  
  &::after {
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    content: '';
    display: block;
    height: 73%;
    transform: scale(0) rotate(45deg);
    transform-origin: 100% 80%;
    width: 36%;
  }
  &.on {
    background-color: var(--bilibili-pink);
    border-color: var(--bilibili-pink);
    
    ::after {
      transform: scale(0.9) rotate(45deg) translate(0.5px, 0.5px);
      transition: transform 140ms ease-out;
    }
  }
  
  &[disabled] {
    cursor: not-allowed;
    filter: brightness(1.7) grayscale(1);
  }
`,Y=function({data:e,direction:t="left",onClick:i}){return r.a.createElement(r.a.Fragment,null,e.map(e=>{const{key:o,title:n=null,description:a=null,on:l=!1,toggle:s=!0,hide:c=!1}=e;if(c)return null;const d={};return"left"===t?d.frontOperation=r.a.createElement(X,{disabled:!s,active:l?1:0}):d.operation=r.a.createElement(X,{disabled:!s,active:l?1:0}),r.a.createElement(F,g()({key:o,title:n,description:a,onClick:!!s&&!!i&&(()=>i(o,!l))},d))}))};Y.propTypes={data:s.a.any,direction:s.a.oneOf(["left","right"]),onClick:s.a.func},Y.defaultProps={data:[],direction:"left",onClick:null};var G=i(154),q=i.n(G);const{color:J}=D.a,Q=o.d.div.attrs(()=>({className:"update-list-item"}))`
    margin-left: -20px;
    font-size: 13px;
    line-height: 26px;
    list-style: none;
    padding: 10px 0;
    &.serious {
      color: ${J("paper-red-500")};
      font-weight: bold;
    }
    i {
      margin: 4px;
      padding: 1px 6px;
      border-radius: 3px;
      font-size: 12px;
      font-style: normal;
      letter-spacing: 0.3px;
      background-color: ${J("paper-pink-50")};
      color: ${J("bilibili-pink")};
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: ${J("paper-pink-50")};
      }
    }
    a {
      color: ${J("bilibili-pink")};
    }
`;class K extends r.a.Component{constructor(...e){super(...e),S()(this,"propTypes",{data:s.a.any,title:s.a.string,active:s.a.bool})}render(){const e=this.props,{data:t,title:i,active:o=!1}=e,n=w()(e,["data","title","active"]);return r.a.createElement(F,{extend:!0,twoLine:!0,first:i,second:`包含 ${t.length} 条内容`,subList:{hide:!o,children:q()(t,(e,t)=>r.a.createElement(F,g()({key:t,noBorder:!1},n),r.a.createElement(Q,{dangerouslySetInnerHTML:{__html:e}})))}})}}const Z=o.d.div.attrs(({on:e})=>({className:e?"sub-page-wrapper on":"sub-page-wrapper off"}))`
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 100%;
  transform: scaleY(0.9);
  opacity: 0;
  background-color: transparent;
  transition: z-index 300ms, background-color 200ms, opacity 150ms, transform 0ms 500ms, visibility 300ms;
  pointer-events: none;
  z-index: -100;
  visibility: hidden;
  
  &.on {
    transition: z-index 300ms, opacity 300ms, transform 200ms;
    opacity: 1;
    overflow: auto;
    background-color: #f2f3f5;
    transform: scaleY(1);
    pointer-events: auto;
    visibility: visible;
    z-index: 100;
  }
`,ee=o.d.div.attrs(()=>({className:"sub-page-container"}))`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translate(-50%, 0);
  max-width: 800px;
  width: 100%;
  opacity: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  pointer-events: auto;
`,te=o.d.div.attrs(()=>({className:"sub-page-header"}))`
  display: flex;
  width: 100%;
  padding: 16px 6px;
  flex-grow: 0;
  flex-shrink: 0;
`,ie=o.d.h5.attrs(()=>({className:"sub-page-title"}))`
  margin: auto 0 auto 24px;
  font-size: 14px;
  font-weight: 500;
`,oe=o.d.div.attrs(()=>({className:"sub-page-body"}))`
  flex-grow: 1;
  max-height: 0;
  min-height: 0;
  overflow: auto;
  //transition: max-height 0.2s;
  .on & {
    max-height: 100%;
    min-height: 100%;
  }
  & .list-body {
    box-shadow: none;
  }
`;class ne extends r.a.Component{constructor(){super()}render(){const{on:e=!1,title:t="无标题",children:i,onClose:o}=this.props;return r.a.createElement(Z,{on:e?1:0},r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(k.a,{icon:"left-arrow",onClick:o}),r.a.createElement(ie,null,t)),r.a.createElement(oe,null,i)))}}ne.propTypes={on:s.a.any,title:s.a.string,children:s.a.any,onClose:s.a.func,theme:s.a.object,parent:s.a.node};const{color:ae}=c.a,re=o.d.div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  ${({theme:e={}})=>!1!==e.toggle?"":"filter: grayscale(1)"};
  &[disabled] {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`,le=o.d.div`
  width: 36px;
  height: 16px;
  border-radius: 2px;
  background-color: ${ae("google-grey-400")};
  transition: background-color linear 80ms;
  box-shadow: inset 0px 0px 2px hsla(340, 0%, 40%, 1);
  //opacity: 0.5;
  .checked & {
    background-color: var(--bilibili-pink);
    box-shadow: inset 0px 0px 2px hsla(340, 60%, 40%, 1);
    //opacity: 1;
  }
`,se=o.d.span.attrs(()=>({className:"checkbox-knob"}))`
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  border: 1px solid transparent;
  transition: transform linear 150ms, background-color linear 100ms, width linear 150ms;
  z-index: 1;
  .checked & {
    transform: translate3d(20px, 0, 0);
    right: 16px;
    left: unset;
  }
`;class ce extends r.a.Component{constructor(e){super(e),this.handleOnMouseDown=this.handleOnMouseDown.bind(this),this.handleOnMouseUp=this.handleOnMouseUp.bind(this),this.state={mouseDown:!1,rippleRadius:0}}handleOnMouseDown(){this.setState({mouseDown:!0})}handleOnMouseUp(){this.setState({mouseDown:!1})}render(){const e=this.props,{on:t,onClick:i,disable:n,className:a}=e,l=w()(e,["on","onClick","disable","className"]),{mouseDown:s}=this.state;return r.a.createElement(o.a,{theme:{mouseDown:s}},r.a.createElement(re,g()({className:[a,t?"checked":"","check-box-button"].join(" "),disabled:n,onClick:n?null:i},l),r.a.createElement(le,{onMouseDown:n?null:this.handleOnMouseDown,onMouseUp:n?null:this.handleOnMouseUp,onMouseLeave:n?null:this.handleOnMouseUp},r.a.createElement(se,null))))}}ce.propTypes={className:s.a.any,on:s.a.any,onClick:s.a.func,disable:s.a.bool},i.d(t,!1,(function(){return n})),i.d(t,!1,(function(){return u})),i.d(t,"d",(function(){return F})),i.d(t,"e",(function(){return V})),i.d(t,!1,(function(){return $})),i.d(t,"b",(function(){return Y})),i.d(t,!1,(function(){return K})),i.d(t,!1,(function(){return ne})),i.d(t,"a",(function(){return ce})),i.d(t,"c",(function(){return X})),i.d(t,!1,(function(){return _}))},4:function(e,t,i){"use strict";var o=i(36);i.d(t,"CheckBoxButton",(function(){return o.a})),i.d(t,"CheckBoxGroup",(function(){return o.b})),i.d(t,"CheckboxRect",(function(){return o.c})),i.d(t,"ListItem",(function(){return o.d})),i.d(t,"RadioButtonGroup",(function(){return o.e}));var n=i(10);i.d(t,"BilibiliHelperButtonGuide",(function(){return n.a})),i.d(t,"Button",(function(){return n.b})),i.d(t,"Icon",(function(){return n.c})),i.d(t,"Image",(function(){return n.d})),i.d(t,"Input",(function(){return n.e})),i.d(t,"Message",(function(){return n.g})),i.d(t,"Modal",(function(){return n.h})),i.d(t,"Range",(function(){return n.i}));i(132)},51:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var o=i(18),n=i.n(o),a=i(17),r=i.n(a),l=i(2),s=i.n(l),c=i(0),d=i.n(c),p=i(3);const h=p.e`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,b=p.d.img.attrs({className:"img"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:not([src]) {
    content: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    backdrop-filter: blur(14px);
    background-color: rgb(221 221 221 / 7%);
    box-sizing: border-box;
  }

  &[src] {
    animation: ${h} cubic-bezier(0.16, 0.6, 0.45, 0.93);
    animation-duration: ${({duration:e=500})=>e}ms;
  }
`,u=function(e){let{sign:t,url:i,direct:o}=e,a=r()(e,["sign","url","direct"]);const[l,s]=Object(c.useState)(!1),[p,h]=Object(c.useState)(null),[u,m]=Object(c.useState)(null);return Object(c.useEffect)(()=>{if(u!==(t||i)&&s(!1),o)h(i),m(t||i),s(!0);else{const e=new window.Image;e.onload=()=>{h(i),m(t||i),s(!0)},e.src=i}},[i]),d.a.createElement(b,n()({src:l?p:null,alt:t||null},a))};u.propTypes={direct:s.a.bool,sign:s.a.string,url:s.a.string};class m extends d.a.Component{constructor(e){super(e)}render(){const e=this.props,{sign:t,url:i,lazy:o=!1,direct:a=!1,offset:l=0,offsetVertical:s=0,duration:c,onContentVisible:p}=e,h=r()(e,["sign","url","lazy","direct","offset","offsetVertical","duration","onContentVisible"]);return d.a.createElement(u,n()({key:t,url:i,direct:a,duration:c},h))}}m.propTypes={duration:s.a.number,offset:s.a.oneOfType([s.a.number,s.a.array]),sign:s.a.string,url:s.a.string,className:s.a.string,onContentVisible:s.a.func,direct:s.a.bool,lazy:s.a.bool,offsetVertical:s.a.oneOfType([s.a.number,s.a.string]),offsetHorizontal:s.a.oneOfType([s.a.number,s.a.string])}},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var o=i(18),n=i.n(o),a=i(0),r=i.n(a);const l=i(3).d.input.attrs({className:"input"})`
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
`,s=r.a.forwardRef((function(e,t){return r.a.createElement(l,n()({},e,{ref:t}))}))},93:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var o=i(2),n=i.n(o),a=i(0),r=i.n(a),l=i(3);const s=l.e`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,c=l.d.div.attrs(()=>({className:"ripple-box"}))`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 1;
  .ripple-item {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: scale(0);
    background-color: rgb(0, 0, 0);
    opacity: 0.2;
    animation: ${e=>e.theme.speed?1.15*e.theme.speed:1.15}s ${s} cubic-bezier(0.1, 0.3, 0, 1) forwards;
  }
  .hiding {
    transition: opacity ${e=>e.theme.speed?1.2*e.theme.speed*.3:.3}s;
    opacity: 0;
  }
`;class d extends r.a.Component{constructor(){super(),this.state={currentRipple:null,box:null}}static getDerivedStateFromProps(e,t){const{active:i,x:o,y:n,theme:a}=e,{radius:r=15,size:l=1}=a;let s=`width:${2*r*l}px;height:${2*r*l}px;margin: -${r*l}px;`;if(void 0!==o&&void 0!==n&&(s+=`top:${n}px;left:${o}px;`),i){const e=document.createElement("div");return e.setAttribute("class","ripple-item"),e.setAttribute("style",s),t.box.prepend(e),{currentRipple:e}}return t.currentRipple&&(t.currentRipple.classList.add("hiding"),setTimeout(()=>t.currentRipple.remove(),300)),t}render(){return r.a.createElement(c,{ref:e=>!this.state.box&&this.setState({box:e})})}}d.propTypes={active:n.a.bool,x:n.a.number,y:n.a.number,theme:n.a.object};const p=Object(l.f)(d)}}]);