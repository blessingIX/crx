(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{555:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return g}));var n=o(1),i=o.n(n),r=o(20),a=o(22),l=o.n(a),p=o(2),s=o.n(p),c=o(0),d=o.n(c),m=o(3),h=o(56);const x=m.d.div`
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
  transition: visibility 0.3s, opacity 0.3s;
  backdrop-filter: blur(60px);
  z-index: 31;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    z-index: -1;
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

  @supports not (backdrop-filter: blur(60px)) {
    background-color: rgb(255 255 255);
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;

    @supports not (backdrop-filter: blur(60px)) {
      background-color: #999;
    }
  }


`,u=m.d.div`
  padding-bottom: 46px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;

  footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 32px;
    height: 52px;
    text-align: right;

    .button {
      margin-left: 8px;
      height: 28px;
      font-size: 14px;

      .button-view {
        padding: 0 16px;
      }
    }
  }
`,b=m.d.div`
  //position: absolute;
  margin: 24px 12px 12px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  background-color: rgb(236 236 236);
  overflow: hidden;

  &:first-of-type {
    margin-top: 12px;
  }

  &.hide {
    main {
      height: 0;
      margin: 6px;
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
  }

  .title {
    text-align: center;
    margin: 18px 12px 12px;
    font-size: 16px;
    font-weight: bold;
  }

  main {
    margin: 0 12px 40px;
    overflow: auto;
    white-space: pre-line;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
  }
`;class g extends d.a.Component{constructor(t){super(t),this.modalElement=document.createElement("div"),this.modalElement.id="announcementContent",document.getElementById("root").appendChild(this.modalElement)}render(){const{active:t,list:e,handleOnCloseButton:o}=this.props,{columns:n,hasLogin:i}=this.context;return l.a.createPortal(d.a.createElement(x,{className:["announcement-modal",t?"show":"hide",1===n?"columns-1":"columns-2"].join(" ")},t?d.a.createElement(u,null,e.map(({title:t,content:e,id:o},n)=>d.a.createElement(b,{key:n},d.a.createElement("h2",{className:"title"},t),d.a.createElement("main",{dangerouslySetInnerHTML:{__html:e}}))),d.a.createElement("footer",null,d.a.createElement(r.a,{className:"primary",onClick:o},"已阅"))):null),this.modalElement)}}i()(g,"contextType",h.a),i()(g,"propTypes",{active:s.a.bool,list:s.a.array,handleOnCloseButton:s.a.func})}}]);