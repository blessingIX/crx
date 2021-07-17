(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{59:function(r,a,o){"use strict";var t=o(1),n=o.n(t),e=o(0),i=o.n(e),d=o(2),l=o.n(d),c=o(3),p=o(47);const m=c.b`
    html {
      --dark-0: #101010;
      --dark-1: #141414;
      --dark-2: #131313;
      --dark-3: #1f1f1f;
      --dark-4: #2b2b2b;
      --dark-5: #333333;
      --dark-6: #393939;
      --dark-card: #151515;
      
      --bg: #1c2022;
      --divider: rgb(47 47 47 / 75%);
      
      --dark-font-0: #e8e8e8;
      --dark-font-1: #99a2aa;
      --dark-font-2: #879199;
      --dark-font-3: #d9d9d9;
    }
    
    body {
      background-color: var(--bg)!important;
    }
    `,v=c.b`
    .international-header .mini-type, .mini-header {
      background: var(--dark-card)!important;
    }
    
    .nav-link .nav-link-ul .nav-link-item .link,
    .nav-user-center .user-con .item .name {
      color: var(--dark-font-0)!important;
    }
    `,k=c.b`
    // 搜索框
    .international-header .nav-search #nav_searchform {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      input:focus {
        color: var(--dark-font-0)!important;
      }
      .nav-search-btn {
        background: var(--dark-4)!important;
      }
    }

    .i-frame {
      &::before {
        background-color: var(--bg)!important;
      }
      iframe {
        background-color: unset!important;
      }
    }
    
    .bilibili-search-history, .bilibili-search-suggest {
      background: var(--dark-card)!important;
      border-color: var(--dark-card)!important;
      li {
        &:hover, &.focus {
          background-color: var(--dark-3)!important;
        }
        a {
          color: var(--dark-font-0)!important;
        }
      }
    }
    
    //弹出Popper
    .channel-menu-mini, .van-popper-avatar, .van-popper-avatar .level-intro, .van-popper-avatar .coins .info .login-award, .van-popper-avatar .lang-change .lang-intro,
    .van-popper-vip, .van-popper-favorite, .van-popper-favorite .view-all, .van-popper-favorite .play-all, .van-popper-history, .van-popper-upload {
      background-color: var(--dark-3)!important;
    }
    
    //文字 轻
    .van-popper-avatar .level-info .progress, .van-popper-avatar .count-item .item-key,
    .van-popper-favorite .tab-item--normal, .van-popper-favorite .tab-item--normal .num, .van-popper-favorite .empty-list,
    .header-video-card .video-info .info,
    .header-video-card .video-info .desc,
    .van-popper-history .tab-item,
    .van-popper-history .date-title {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    .van-popover a,
    .van-popper-avatar .level-info .grade, .van-popper-avatar .level-intro, .van-popper-avatar .coins,
    .van-popper-avatar .lang-change .lang-title, .van-popper-avatar .count-item .item-value, .van-popper-avatar .links .link-title,
    .van-popper-avatar .lang-change .lang-intro, .van-popper-avatar .logout, .van-popper-avatar .logout span:hover,
    .van-popper-avatar .nickname,
    .van-popper-avatar .coins .contact-tips,
    .vip-m .bubble-traditional .recommand .title,
    .van-popper-favorite .view-all, .van-popper-favorite .play-all,
    .header-video-card .video-info .line-1,
    .header-video-card .video-info .line-2,
    .van-popper-history .tab-item.tab-item--active,
    .van-popper-history .tab-item.tab-item--active:hover {
      color: var(--dark-font-0)!important;
    }
    
    //框线
    .van-popper-avatar .coins,
    .van-popper-avatar .counts,
    .van-popper-avatar .links,
    .van-popper-avatar .lang-change,
    .channel-menu-mini .r-box,
    .van-popper-favorite .tabs-panel,
    .van-popper-favorite .play-all,
    .van-popper-history .tab-header {
      border-color: var(--divider)!important;
    }
    
    //hover蓝
    .van-popover a:hover,
    .van-popper-avatar .coins .info a:hover,
    .van-popper-avatar .counts .count-item:hover .item-key,
    .van-popper-avatar .counts .count-item:hover .item-value .item-num,
    .van-popper-avatar .level-intro__link,
    .van-popper-history .tab-item:hover {
      color: #00A1D6!important;
    }
    
    //hover深
    .channel-menu-mini .box a:hover,
    .van-popper-avatar .links .link-item:hover,
    .van-popper-avatar .logout a:hover,
    .van-popper-avatar .lang-change .lang-item:hover,
    .van-popper-avatar .lang-change .lang-intro-item:hover,
    .van-popper-avatar .logout span:hover,
    .van-popper-favorite .tab-item--normal:hover,
    .van-popper-favorite .view-all:hover,
    .van-popper-favorite .play-all:hover,
    .header-video-card:hover,
    .van-popper-upload .upload-item:hover {
      background: var(--dark-2)!important;
    }
    
    //经验条
    .van-popper-avatar .level-bar {
      background: var(--dark-0)!important;
    }
    
    //Card顶上的小尖尖
    .van-popper-vip, .van-popper-favorite, .van-popper-history, .van-popper-upload, .popover-app-download {
      .popper__arrow, .popper__arrow::after {
        border-bottom-color: var(--dark-3)!important;
      }
    }
    
    //下载App
    .popover-app-download {
      background: url(${Object(p.c)("/statics/imgs/app-download.png")})!important;
      background-size: cover!important;
      .txt {
        color: var(--dark-font-0)!important;
      }
    }
    
    //历史查看更多
    .van-popper-history .view-all {
      background: var(--dark-5)!important;
    }

    //邮箱、手机绑定的悬浮提示框
    .van-popper-avatar .coins .contact-tips {
      background-color: var(--dark-5)!important;
      border-color: var(--dark-5)!important;
      //箭头
      &::after {
        transform: rotate(45deg);
        background: var(--dark-5)!important;
      }
      &.email-tips::after {
        right: -5px!important;
      }
      &.phone-tips::after {
        left: -5px!important;
      }
    }
    `,b=c.b`
    .international-footer {
      background-color: var(--bg)!important;
      .link-box .link-item {
        border-color: var(--divider);
        .bt {
          color: var(--dark-font-2);
        }
      }
      .link-box .link-item.link-c p, .link-box .link-item.link-c a.weixin:hover p,
      a, .partner, .partner a {
        color: var(--dark-font-0);
      }
    }
    `,s=c.b`
    .bili-footer {
      .footer-wrp {
        background-color: var(--bg)!important;
        padding-bottom: 70px!important;
      }
      .boston-postcards li {
        border-color: var(--divider);
        .tips {
          color: var(--dark-font-2);
        }
      }
      a {
        color: var(--dark-font-0);
      }
      .partner a:hover {
        color: #00a1d6!important;
      }
    }
    `,u=c.b`
    .user-card, .user-card-m, .userinfo-content {
      background: var(--dark-3)!important;
      .face {
        border-color: var(--dark-3)!important;
      }
      .btn-box {
        a.like {
          color: #fff!important;
          border-color: #00a1d6!important;
          background-color: #00a1d6!important;
        }
        a.like:hover {
          border-color: #00b5e5!important;
          background-color: #00b5e5!important;
        }
        a, a.liked {
          background: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
          border-color: var(--dark-5)!important;
          &:hover {
            background: var(--dark-4)!important;
          }
        }
      }
      .info {
        .user .name {
          color: var(--dark-font-0)!important;
          &.vip, &.vip-red-name {
            color: #fb7299!important;
          }
          &:hover {
            color: #00A1D6!important;
          }
        }
        .social a, .sign {
          color: var(--dark-font-1)!important;
        }
      }
    }
    
    .user-card, .user-card-m, .userinfo-wrapper {
      border-color: var(--dark-3)!important;
    }
    
    .user-card-m .loading div {
      background: var(--dark-3)!important;
    }
    
    .nameplate-card {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      .nameplate-text {
        border-color: var(--dark-1)!important;
        .n-name, .n-title {
          color: var(--dark-font-0)!important;
        }
      }
    }
    `,f="\n    .international-header a {\n      color: var(--dark-font-0);\n    }\n    .tab-line-itnl {\n      border-color: var(--divider)!important;\n    }\n    .page-tab .con li {\n      border-color: var(--bg)!important;\n    }\n    .van-popover.van-popper-channel {\n      background: var(--dark-2)!important;\n      border-color: var(--dark-2)!important;\n      .popper__arrow, .popper__arrow::after {\n        border-top-color: var(--dark-2)!important;\n        border-bottom-color: var(--dark-2)!important;\n      }\n    }\n    .bili-banner .taper-line {\n      z-index: 2!important;\n      height: 180px!important;\n    }\n    ",g="\n    .b-head {\n      color: var(--dark-font-3)!important;\n    }\n    .bb-comment {\n      background-color: unset!important;\n      .comment-header {\n        border-color: var(--divider)!important;\n        .tabs-order li:not(.on):not(:hover) {\n          color: var(--dark-font-3)!important;\n        }\n      }\n      .comment-send .comment-emoji {\n        border: 1px solid var(--dark-3);\n        background-color: var(--dark-3);\n      }\n      .comment-list .list-item {\n        .user-face .hot-follow .follow-btn.followed {\n          background-color: var(--dark-5);\n          color: var(--dark-font-2);\n        }\n        .con {\n          border-color: var(--divider)!important;\n          .user .name {\n            color: var(--dark-font-1);\n          }\n          .text, div .text-area .text-content {\n            color: var(--dark-font-3);\n          }\n          .vote-container {\n            border-color: var(--dark-4)!important;\n            &:hover .text-area {\n              box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n            }\n          }\n          .info {\n            .reply:hover {\n              background: var(--dark-1);\n            }\n            .reply-tags span {\n              background-color: var(--dark-1);\n              color: var(--dark-font-1);\n            }\n            .operation .opera-list {\n              background-color: var(--dark-3);\n              color: var(--dark-font-0);\n              li:hover {\n                background-color: var(--dark-2);\n              }\n            }\n          }\n          .reply-box {\n            .reply-item .reply-con {\n              .user .text-con {\n                color: var(--dark-font-0);\n              }\n              .info .reply:hover {\n                background: var(--dark-1);\n              }\n            }\n            .view-more {\n              color: var(--dark-font-1);\n              .btn-more:hover {\n                background: var(--dark-1);\n              }\n            }\n          }\n        }\n      }\n      .bottom-page.center {\n        border-color: var(--dark-2)!important;\n      }\n      .paging-box {\n        span.result, span.dian {\n          color: var(--dark-font-1);\n        }\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          &:hover {\n            color: #00a1d6;\n          }\n        }\n      }\n      .paging-box-big {\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          background-color: var(--dark-2);\n          border-color: var(--dark-3);\n          &:hover {\n            color: white;\n            background-color: #00a1d6;\n            border-color: var(--dark-3);\n          }\n        }\n        .dian, .dian:hover {\n          color: var(--dark-font-1);\n          background-color: var(--bg);\n          border-color: var(--bg);\n        }\n        .page-jump {\n          input {\n            border-color: var(--dark-3);\n            background-color: var(--dark-2);\n            color: white;\n          }\n        }\n      }\n    }\n    .textarea-container {\n      textarea {\n        background-color: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n        color: var(--dark-font-1)!important;\n      }\n      &:hover textarea, &.focus textarea {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .emoji-box {\n      background: var(--dark-3)!important;\n      border-color: var(--dark-3)!important;\n      box-shadow: 0 11px 12px 0 var(--dark-1)!important;\n      &:before {\n        background: unset!important;\n      }\n      .emoji-text {\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-text:hover {\n        background-color: var(--dark-5)!important;\n      }\n      .emoji-notice {\n        background-color: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-tabs {\n        background: var(--dark-4)!important;\n        .tab-link.on {\n          background: var(--dark-3)!important;\n        }\n        .tab-link:hover {\n          background: var(--dark-5)!important;\n        }\n        .emoji-tab-slider {\n          .prev {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow.svg)!important;\n          }\n          .next {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow.svg)!important;\n          }\n          .prev.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow-disable.svg)!important;\n          }\n          .next.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow-disable.svg)!important;\n          }\n        }\n      }\n    }\n    ",h=`\n    //文字\n    .text-area .view-danmaku {\n      color: var(--dark-font-2)!important;\n    }\n    \n    .text-area .content, .imagesbox .boost-control li, .text-box .count-box  .text {\n      color: var(--dark-font-1)!important;\n    }\n    \n    .text-area .title, .user-name, .user-name a, .text-box .title {\n      color: var(--dark-font-0)!important;\n    }\n    \n    .user-name.big-vip a {\n      color: #fb7299!important;\n    }\n    \n    .imagesbox .boost-control li:hover {\n      color: #23ade5!important;\n    }\n    \n    .video-container.can-hover:hover .text-area .title,\n    .bangumi-container.can-hover:hover .text-area .title,\n    .article-container:hover .text-area .title,\n    .vote-container:hover .text-area .text-content {\n      color: #00a1d6!important;\n    }\n    \n    .dynamic-link-hover-bg:hover {\n      background: var(--dark-4)!important;\n    }\n    \n    //关注的人点赞\n    .like-users-panel::before {\n      background: var(--dark-1)!important;\n    }\n    .like-users-panel {\n      color: var(--dark-font-2)!important;\n      .users-box {\n        color: var(--dark-font-1)!important;\n      }\n    }\n    .users-box .like-users-list:link, .users-box .like-users-list:visited {\n      color: var(--dark-font-1);\n    }\n    \n    //Card按钮\n    .card .more-panel {\n      background: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      -webkit-box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      &:after {\n        background: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n      }\n    }\n    \n    //视频Card, 番剧Card, 文章Card, 收藏Card\n    .video-container, .bangumi-container, .article-container, .live-container,\n    .media-list .content {\n      border-color: var(--dark-3)!important;\n      background: var(--dark-card)!important;\n    }\n    \n    //转发Card\n    .repost {\n      background: var(--dark-3)!important;\n      .deleted {\n        background: unset!important;\n      }\n    }\n    \n    //图片预览Card\n    .imagesbox .boost-control, .imagesbox .boost-img {\n      background: var(--dark-3)!important;\n    }\n    \n    //活动Card, 投票Card, 音乐Card\n    .h5share-container, .vote-container, .music-container {\n      border-color: var(--dark-3)!important;\n    }\n    \n    //收藏Card图片背景\n    .media-list .content .cover-box {\n      background: var(--dark-card)!important;\n    }\n    \n    //Card阴影\n    .article-container:hover, .vote-container:hover, .h5share-container:hover, .music-container:hover {\n      .text-area {\n        -webkit-box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n        box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n      }\n    }\n    \n    //相关作品\n    .shop-panel {\n      .shop-list {\n        background: var(--dark-3)!important;\n      }\n    }\n    \n    //表情按钮\n    .comm-emoji {\n      border-color:  var(--dark-1)!important;\n      background-color: var(--dark-1)!important;\n    }\n    \n    //评论转发\n    .panel-area {\n      .forw-area {\n        background-color: unset!important;\n      }\n      ${g}\n    }\n    \n    //弹出框\n    .bp-popup-panel {\n      background: var(--dark-4)!important;\n      .title-ctnr .popup-title, .popup-content-ctnr {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .dynamic-list-item-wrap, .forw-more {\n      border-color: var(--dark-2)!important;\n    }\n    \n    //展开相关动态 \n    .fold-box {\n      border-color: var(--divider)!important;\n    }\n    `,x=c.b`
    ${f}
    .home-slide .item, .card-pic a, .video-card-reco, .pic {
      &:before{
        z-index: 1;
      }
    }
    
    .video-card-common .card-pic a .count, .live-card .pic .count {
      z-index: 1;
      color: var(--dark-font-0);
    }
    
    .first-screen img, .storey-box img {
      filter: contrast(0.93) brightness(0.89);
    }
    
    a, .storey-title .no-link, .manga-panel .manga-list-box .manga-card .manga-title, .rank-header .name {
      color: var(--dark-font-0);
    }
    
    body, .storey-title .text-info, .storey-title .text-info a, .live-card .up .txt .desc {
      color: var(--dark-font-1);
    }
    
    .rank-wrap .number, .pgc-rank-wrap .number, .manga-rank-item .rank-number {
      background: var(--dark-4);
    }
    
    //按钮
    .bypb-window .online {
      background: var(--dark-5)!important;
      border-color: var(--dark-6)!important;
    }
    
    .exchange-btn .btn, .rank-header .more {
      background: var(--dark-5)!important;
      border-color: var(--dark-6)!important;
      color: var(--dark-font-1);
      &:hover {
        background: var(--dark-5)!important;
      }
    }
    
    .time-line .tl-link {
      background: var(--dark-5);
    }
    
    //联系客服
    .contact-help {
      background: var(--dark-4)!important;
      border-color: var(--dark-4)!important;
      box-shadow: 0 6px 10px 0 var(--dark-2)!important;
      color: var(--dark-font-1)!important;
    }
    
    //电梯
    .elevator {
      .ear {
        color: var(--dark-4);
      }
      .list-box {
        background: var(--dark-4)!important;
        border-color: var(--dark-6)!important;
        .item {
          background: var(--dark-4);
          color: var(--dark-font-0);
          &.sort, &.back-top {
            border-color: var(--dark-6)!important;
          }
        }
      }
    }
    `,w=c.b`
    ${f}
    html {
      background: unset!important;
      color: var(--dark-font-0);
    }
    .watch-later-list header {
      .s-btn {
        background: var(--bg);
      }
      .d-btn {
        background: var(--bg);
        border-color: var(--dark-6);
        color: var(--dark-font-2);
      }
    }
    .watch-later-list .list-box .av-item .av-about{
      border-color: var(--divider)!important;
      .t {
        color: var(--dark-font-0);
      }
      .info .user {
        color: var(--dark-font-1);
      }
    }
    .bili-dialog {
      color: unset!important;
      header {
        border-color: var(--dark-1)!important;
      }
      .con {
        background: var(--dark-3)!important;
        .btn-cancel {
          background-color: var(--dark-5)!important;
          &:not(:hover) {
            color: var(--dark-font-1)!important;
            border-color: var(--dark-5)!important;
          }
        }
      }
    }
    `,y=c.b`
    .history-wrap .b-head {
      .b-head-t {
        color: var(--dark-font-0);
      }
      .history-btn .btn {
        border-color: #00a1d6!important;
      }
    }
    .history-list {
      .l-info {
        border-color: var(--dark-6);
        .lastplay-time .history-red-round {
          border-color: transparent var(--dark-6) transparent;
        }
      }
      .r-info {
        background: unset!important;
        .r-txt {
          border-color: var(--divider)!important;
          .title:not(:hover) {
            color: var(--dark-font-0);
          }
          .username {
            color: var(--dark-font-1);
          }
        }
      }
    }
    .history-dlg {
      background-color: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      .dlg-txt {
        color: var(--dark-font-0)!important;
      }
      .cancel {
        height: 32px!important;
        background-color: var(--dark-5)!important;
        &:not(:hover) {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-5)!important;
        }
      }
    }
    .go-top-m .go-top {
      background-color: var(--dark-4)!important;
      border-color: var(--dark-4)!important;
    }
    `,_=c.b`
    //底层背景
    #app, .fixed-bg {
      background: none!important;
    }
    
    //所有Card背景
    .user-panel, .live-panel, .section-block, .publish-panel, .core-style, .most-viewed-panel, .tab-bar, .card, .notice-panel, .new-topic-panel,
    .feed-topic .publish-panel-container, .feed-topic .empty-content,
    .sticky-bar {
      background: var(--dark-card)!important;
    }
    
    //特殊背景
    .bg-white {
      background: var(--dark-card)!important;
    }
    
    .live-panel-item .live-up-img {
      background-color: var(--dark-card)!important;
      border-color: var(--dark-3)!important;
    }
    
    .notice-panel .img-container .notice-img {
      background-color: var(--dark-card)!important;
    }
    
    //文字 轻
    .tc-slate, .time, .live-name, .count, .dynamic-repost, .shop-desc .desc-box .sub-title {
      color: var(--dark-font-2)!important;
    }
    
    //文字 中
    .most-viewed-item .name, .tag-item .label, .shop-panel .panel-desc {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    .tc-black, .numbers, .up-name, .text .content, .tag-item .content, .item-detail .text, .core-style, .shop-desc .desc-box .title {
      color: var(--dark-font-0)!important;
    }
    
    //hover蓝
    .more-button .more:hover,
    .most-viewed-panel .list-content .most-viewed-item .name.active,
    .most-viewed-panel .list-content .most-viewed-item:hover .name,
    .tab-bar .tab .tab-text.selected,
    .tab-bar .tab .tab-text:hover {
      color: #00b5e5!important;
    }
    
    .user-panel .content .bottom .number-part:hover .numbers,
    .new-topic-panel .tag-item .content:hover {
      color: #00a1d6!important;
    }
    
    //输入框
    .hash-popup {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      .topic-container .item.is-selected {
        background: var(--dark-2)!important;
      }
    }
    
    //新动态
    .new-notice-bar {
      background: #d7d4b8!important;
      .message {
        color: #cf8612!important;
      }
    }
    
    //常看列表
    .card-list .most-viewed-panel .list-content .most-viewed-item .section {
      .icon-all, .avatar {
        border-color: var(--dark-5);
        -webkit-box-shadow: 0 0 0 1px var(--dark-0);
        box-shadow: 0 0 0 1px var(--dark-0);
        .active {
          -webkit-box-shadow: 0 0 0 1px #00a1d6!important;
          box-shadow: 0 0 0 1px #00a1d6!important;
        }
      }
    }
    
    //话题标签
    .new-topic-panel .tag-item .label {
      background: var(--dark-3)!important;
    }
    
    //feed
    .feed-topic .separater-line, .feed-topic .card, .card-offset {
      border-color: var(--dark-card)!important;
    }
    
    .card .focus-btn .unfocus {
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
    }
    
    .active-panel {
      .tc-dark-slate {
        color: var(--dark-font-1);
      }
      .show-more-button {
        background-color: unset!important;
      }
    }
    
    //动态详情
    .sticky-bar {
      -webkit-box-shadow: 0 2px 4px 0 var(--dark-card)!important;
      box-shadow: 0 2px 4px 0 var(--dark-card)!important;
      .bar-content {
        .title {
          color: var(--dark-font-0)!important;
        }
        .message {
          color: var(--dark-font-2)!important;
          &:hover {
            color: #00b5e5 !important;
          }
        }
      }
    }
    .detail-content .card {
      border-color: var(--dark-card)!important;
    }
    
    ${h}
    
    // 评论
    .comment-send-lite {
      background: var(--dark-card)!important;
    }
  `,D=c.b`
    //文字 轻
    .article-item .item-holder .article-desc, .info-holder .dynamic, .more .info {
      color: var(--dark-font-2)!important;
    }
    
    //文字 中
    .info-holder .dynamic .arc-title {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    body, .nav-tab-bar .tab-item, .partitio-name, .article-item .item-holder .article-title-holder, .rank-module .rank-tabs-bar label, .rank-module .rank-list .item a, .up-list .title, .info-holder .head .nick-name, .more .top-bar, .more .title, .categories-bar .tag-item {
      color: var(--dark-font-3)!important;
    }
 
    //hover蓝
    .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .item-holder .article-title-holder:hover, .rank-module .rank-tabs-bar .rank-tabs-list li.on, .rank-module .rank-list .item a:hover, .info-holder .head .nick-name:hover, .info-holder .dynamic .arc-title:hover, .more .title:hover, .categories-bar .tag-item.on {
      color: #00a1d6!important;
    }
    
    //背景
    .article-item, .rank-module .rank-list .item, .up-list {
      background-color: var(--bg)!important;
    }
    
    .page-content .right-side .rank-module .rank-list .item .rank-index {
      background: var(--dark-4);
    }
    
    //框线
    .article-item, .rank-module .rank-tabs-bar, .up-list .title, .more .top-bar, .categories-bar {
      border-color: var(--divider)!important;
    }
    
    //按钮
    .rank-module .complete-rank, .up-list .fresh-btn {
      background: var(--dark-5)!important;
      border-color: var(--dark-6)!important;
      color: var(--dark-font-0)!important;
      &:hover {
        color: #00a1d6!important;
      }
    }
    
    //搜索
    .search-module .search-block {
      border-color: var(--dark-6)!important;
      background-color: var(--dark-2)!important;
      input {
        background-color: var(--dark-2)!important;
        color: var(--dark-font-0)!important;
      }
      .search-word-panel {
        border-color: var(--dark-card)!important;
        background-color: var(--dark-card)!important;
        .panel-title {
          .split-line {
            border-color: var(--dark-6)!important;
          }
          p span {
            background-color: var(--dark-card)!important;
            color: var(--dark-font-2)!important;
          }
        }
        .suggest-item, .history-item {
          color: var(--dark-font-0);
          &:hover, &.focus {
            background-color: var(--dark-3)!important;
          }
        }
      }
    }
    
    //侧边按钮
    .to-top {
      background-color: var(--dark-4)!important;
      border-color: var(--dark-4)!important;
    }

    //帮助按钮修正
    .more .help .icon {
      background-image: url(${Object(p.c)("/statics/imgs/read-help.png")})!important;
    }
    
    //游戏按钮修正
    .nav-tab-bar .tab-item[data-tab-id="1"]:before {
      background-image: url(${Object(p.c)("/statics/images/read-game.png")});
    }
    `,E=c.b`
    .page-container, .article-action .more .more-ops-list, .view-note .editor-innter, .view-note .editor-innter .ql-editor {
      background: unset!important;
    }
    
    //文字 轻
    .up-info-right-block .fans-num, .up-info-right-block .view-num .follow-btn-holder .follow-btn.followed, .rightside-article-list-btn .title, .article-item .article-title .info, .more .info, .right-side-bar .to-comment .comment-num, .article-list-plane .button .title {
      color: var(--dark-font-2)!important;
    }
    
    //文字 中
    .article-action, .article-action .ops i, .article-action .more .more-ops-list {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    .nav-tab-bar .tab-item, .follow-btn-holder .follow-btn, .up-info-right-block .up-name, .article-up-info .up-name, .rightside-article-list-btn .label, .up-article-list-block .block-title, .article-item .article-title, .more .top-bar, .more .title,
    .title-container .title, .article-holder, .article-holder h1, .article-holder .color-default, .article-list-plane .button .label, .article-holder .card-container .title,
    .article-left-tab .tab-item,
    .view-note .editor-innter .ql-editor
    {
      color: var(--dark-font-3)!important;
    }
 
    //hover蓝
    .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .article-title:hover, .more .title:hover,
    .article-action .ops .on, .article-action .ops .on i, .article-action .ops i:hover,
    .article-action .ops .coin-btn:hover, .article-action .ops .fav-btn:hover, .article-action .ops .like-btn:hover,
    .article-action .ops .coin-btn:hover i, .article-action .ops .fav-btn:hover i, .article-action .ops .like-btn:hover i {
      color: #00a1d6!important;
    }
    
    //框线
    .up-article-list-block .block-title, .more .top-bar, .article-action, #article-list-btn .title, #article-list-btn .label, .rightside-article-list-btn .label {
      border-color: var(--divider)!important;
    }
    
    //文章视频引用
    .article-holder .card-container {
      .card, .video-info {
        background-color: #1515154d!important;
      }
      a:after, .slim-video-card{
        border-color: var(--dark-4)!important;
      }
    }
    
    //关注按钮
    .follow-btn-holder .follow-btn {
      background-color: #00a1d6!important;
      border-color: #00a1d6!important;
      &:hover {
        background-color: #00b5e5!important;
        border-color: #00b5e5!important;
      }
      &.followed, &.followed:hover {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
      }
    }
    
    //文章目录
    .rightside-article-list-btn {
      background-color: var(--dark-5)!important;
      border-color: var(--dark-5)!important;
      &:hover {
        background-color: var(--dark-card)!important;
        border-color: var(--dark-card)!important;
      }
      .icon-list {
        background-image: url(${Object(p.c)("/statics/imgs/article-list.png")})!important;
      }
    }
    
    .article-list-plane {
      background-color: var(--dark-5)!important;
      border-color: var(--dark-5)!important;
      .button:hover {
        background-color: var(--dark-card)!important;
        border-color: var(--dark-card)!important;
      }
    }
    
    //更多按钮
    .up-info-holder .fixed-box .up-article-list-block .more-article {
      background-color: var(--dark-5);
      border-color: var(--dark-5);
      color: var(--dark-font-0);
    }

    //帮助按钮修正
    .up-info-holder .fixed-box .more .help .icon {
      background-image: url(${Object(p.c)("/statics/imgs/read-help.png")});
    }
    
    //游戏按钮修正
    .nav-tab-bar .tab-item[data-tab-id="1"]:before, .article-left-tab .tab-item[data-tab-id="1"]:before {
      background-image: url(${Object(p.c)("/statics/images/read-game.png")});
    }
    
    // 侧边按钮
    .right-side-bar .to-comment, .right-side-bar .to-top, .right-side-bar .to-comment .comment-num {
      background-color: var(--dark-4)!important;
      border-color: var(--dark-4)!important;
    }
    
    //评论区
    .comment-title-block span {
      color: var(--dark-font-1);
    }
    .comment-send-lite, .comment-m {
      background: var(--bg)!important;
    }
    ${g}
    .textarea-container {
      textarea {
        background-color: var(--dark-1)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-1)!important;
      }
      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0)!important;
      }
    }
    .comment-emoji {
      border: 1px solid var(--dark-1)!important;
      background-color: var(--dark-1)!important;
    }
    .interaction-info {
      border-color: var(--dark-4)!important;
    }
    `,j=c.b`
    #App, .tips, .article-title {
      color: var(--dark-font-3)!important;
    }
    
    .article-desc {
      color: var(--dark-font-2)!important;
    }
    
    .article-title:hover {
      color: #00a1d6!important;
    }
    
    .article-item, .rank-module .rank-list .item, .up-list {
      background-color: var(--bg)!important;
    }
    
    #App .rank-module .tips {
      background: var(--dark-4);
    }
    
    .article-content {
      border-color: var(--dark-1)!important;
    }
    `,$="\n    .message-list {\n      background-color: var(--dark-3)!important;\n      .msg-item .message {\n        color: var(--dark-font-0);\n        .message-content {\n          background-color: var(--dark-4)!important;\n          &.is-me {\n            background-color: #6f9dca!important;\n          }\n        }\n      }\n      .msg-notify, .msg-push {\n        background: var(--dark-4)!important;\n        .content {\n          color: var(--dark-font-1);\n        }\n        .modules .module {\n          .mtitle {\n            color: var(--dark-font-1);\n          }\n          .detail {\n            color: var(--dark-font-0);\n          }  \n        }\n        hr {\n          background: var(--dark-1)!important;\n        }\n        .link {\n          color: var(--dark-font-0);\n        }\n      }\n    }\n    ",C=c.b`
    html {
      background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;
      body {
        background: #1c2022d9!important;
      }
    }
    //左栏
    .space-left {
      background-color: #151515cc!important;
      .side-bar {
        .title {
          color: var(--dark-font-0);
          .icon {
            background-image: url(${Object(p.c)("/statics/imgs/message-plane.png")});
          }
        }
        .item {
          color: var(--dark-font-1);
          &:hover, &.active{
            color: #2faee3;
          }
        }
        .divided-line {
          border-color: var(--divider);
        }
      }
    }
    
    //右栏
    .space-right {
      background-color: #1f1f1f80!important;
      .space-right-top {
        .title {
          background-color: var(--dark-card)!important;
          color: var(--dark-font-1)!important;
          -webkit-box-shadow: 0 2px 4px 0 #1313138a!important;
          box-shadow: 0 2px 4px 0 #1313138a!important;
        }
        .group-helper-msg-list {
          background-color: var(--dark-card)!important;
          -webkit-box-shadow: 0 2px 4px 0 #1313138a!important;
          box-shadow: 0 2px 4px 0 #1313138a!important;
          .tab-list {
            color: var(--dark-font-1)!important;
            .tab-item.active[data-v-29e10985]::before {
              background-color: var(--dark-card)!important;
            }
          }
          .nothing {
            color: var(--dark-font-2)!important;
          }
          .name-box {
            .name {
              color: var(--dark-font-0)!important;
            }
            .status {
              color: var(--dark-font-2)!important;
            }
          }
          &::after {
            background-color: var(--dark-card)!important;
          }
        }
      }
      .space-right-bottom {
        .card {
          background-color: var(--dark-card)!important;
          -webkit-box-shadow: 0 2px 4px 0 #1313138a!important;
          box-shadow: 0 2px 4px 0 #1313138a!important;
          .header::after {
            background: var(--divider)!important;
          }
          .loading .link-progress-tv {
            background-color: unset!important;
          }
          .line-1 {
            color: var(--dark-font-1)!important;
            .name-field {
              color: var(--dark-font-0)!important;
            }
          }
          .line-2 {
            color: var(--dark-font-0)!important;
            .orginal-reply {
              border-color: var(--dark-1)!important;
              color: var(--dark-font-2)!important;
            }
          }
          .line-3 {
            color: var(--dark-font-2)!important;
          }
          .text-box {
            color: var(--dark-font-2)!important;
          }
          &.detail .content:not(:hover) span {
            color: var(--dark-font-0)!important;
          }
          .follow-btn {
            color: var(--dark-font-1);
            &.active {
              background: var(--dark-6);
              border-color: var(--dark-6);
            }
            &.inactive {
              background: var(--dark-4);
            }
          }
          .reply-box {
            textarea {
              background-color: var(--dark-3);
              border-color: var(--dark-3);
              color: var(--dark-font-1);
            }
            &:hover textarea {
              color: var(--dark-font-0);
            }
          }
          .divider, div::after {
            border-color: var(--divider)!important;
          }
          .divider-last::before, .divider-last::after {
            background-color: var(--divider)!important;
          }
          //系统通知
          &.system-item {
            .title {
              color: var(--dark-font-0);
            }
            .time {
              color: var(--dark-font-1);
            }
            .bottom {
              color: var(--dark-font-2);
            }
          }
          //私信存档
          &.whisper {
            .list {
              border-color: var(--dark-1);
              .list-title {
                color: var(--dark-font-0);
                border-color: var(--dark-1);
              }
              .list-content .list-item {
                border-color: var(--dark-1);
                .name {
                  color: var(--dark-font-0);
                }
                .last-word {
                  color: var(--dark-font-2);
                }
                &.active, &:hover {
                  background-color: var(--dark-3)!important;
                }
              }
            }
            .dialog {
              .title {
                color: var(--dark-font-0);
                border-color: var(--dark-1);
              }
              ${$}
            }
          }
        }
        //我的消息
        .bili-im {
          color: var(--dark-font-1);
          background-color: var(--dark-card)!important;
          -webkit-box-shadow: 0 2px 4px 0 #1313138a!important;
          box-shadow: 0 2px 4px 0 #1313138a!important;
          .left, .left .title {
            border-color: var(--dark-1);
          }
          .list {
            .list-item {
              .name {
                color: var(--dark-font-0);
              }
              .last-word {
                color: var(--dark-font-2);
              }
              &.top {
                background-color: var(--dark-3);
              }
              &.active, &:hover {
                background-color: var(--dark-3)!important;
              }
            }
            .lds-spinner div:after {
              background-color: var(--dark-font-0)!important;
            }
          }
          .dialog {
            .title {
              color: var(--dark-font-0);
              border-color: var(--dark-1);
              .action-menu .menu-list {
                border-color: var(--dark-card);
                background-color: var(--dark-card)!important;
                -webkit-box-shadow: 0 6px 12px 0 var(--dark-card);
                box-shadow: 0 6px 12px 0 var(--dark-card);
                a {
                  color: var(--dark-font-0);
                  .tips {
                    color: var(--dark-font-2);
                  }
                  &:hover {
                    background-color: var(--dark-0)!important;
                  }
                }
                &:before {
                  border-color: var(--dark-card);
                  background-color: var(--dark-card)!important;
                }
              }
            }
            ${$}
            .new-message-tip {
              .text, &::after {
                background-color: var(--dark-4)!important;
              }
            }
            .send-box {
              border-color: var(--dark-0);
              background-color: var(--dark-3)!important;
              .btn-box.send-btn {
                border-color: var(--dark-5)!important;
                background-color: var(--dark-5)!important;
                color: var(--dark-font-2)!important;
                &.active {
                  background-color: #1389bf!important;
                  border-color: #1389bf!important;
                  color: #fff!important;
                }
              }
              .input-box #editor {
                  color: var(--dark-font-0);
              }
            }
            .im-popup .im-popup-shell {
              background-color: var(--dark-3);
              .content {
                .content-text {
                  color: var(--dark-font-0);
                }
                .selector-box .type-selector {
                  color: var(--dark-font-0);
                  .css-1xneiug {
                    .content {
                      fill: var(--dark-5);
                    }
                    .border {
                      fill-opacity: 0.5;
                    }
                  }
                }
                .report-tip {
                  color: var(--dark-font-1);
                }
                .input-box {
                  border-color: var(--dark-5);
                  background-color: var(--dark-5);
                  textarea {
                    color: var(--dark-font-0);
                  }
                }
              }
              .popup-btn-ctnr .bl-button--primary:disabled {
                background-color: var(--dark-4);
                color: var(--dark-font-2);
              }
            }
          }
        }
        //消息设置
        .config {
          color: var(--dark-font-0);
          background-color: var(--dark-card)!important;
          -webkit-box-shadow: 0 2px 4px 0 #1313138a!important;
          box-shadow: 0 2px 4px 0 #1313138a!important;
          .tip {
            color: var(--dark-font-2);
          }
          .config-item {
            .css-1xneiug {
              .content {
                fill: var(--dark-5);
              }
              .border {
                fill-opacity: 0.5;
              }
            }
            &::before {
              background: var(--dark-1)!important;
            }
            .radio-selector {
              color: var(--dark-font-0);
            }
          }
        }
      }
    }
  `,O=c.b`
    html {
      background: unset!important;
    }
    //文字 轻
    .n .n-data .n-data-k, .sec-empty-hint, .channel .empty-state p, .fav-item .state, .small-item .meta, .section.empty:after, .section .user-auth.no-auth .no-auth-title span,
    #page-fav .fav-sidenav .favlist-title, #page-fav .fav-sidenav .watch-later, #page-fav .fav-main .search-types,
    .i-live .i-live-unfo-btn, .section .operation, #page-channel-detail .watch-later-btn {
      color: var(--dark-font-2);
    }
    
    //文字 中
    .private-hint, .i-m-btn, .user .info .meta .row, .tc-slate, #page-fav .fav-main .fav-action-bottom .select-counter, #page-fav .fav-main .fav-meta, #page-setting .setting-privacy-item .setting-privacy-switcher .be-switch-label,
    .i-live .i-live-fo-count {
      color: var(--dark-font-1);
    }
    
    //文字 重
    body, .n .n-data .n-data-v, .section-title, .large-item .title, #page-video .play-all-btn,
    .breadcrumb .follow-tabs, .breadcrumb .batch, .breadcrumb .play-all-btn, #page-follows .follow-main .follow-action-top .back-to-info, #page-follows .follow-main .follow-action-bottom li, #page-follows .follow-main .follow-action-bottom ul.filter-disable li:hover,
    #page-fav .fav-main .fav-action-top .back-to-info, #page-fav .fav-main .fav-action-bottom li, #page-fav .fav-main .fav-action-bottom li:hover,
    .article-title, #page-fav .fav-main .fav-content .fav-pugv-list .pugv-item .item-infos p.main-title,
    .sub-tabs span, .sub-tabs .filter-content {
      color: var(--dark-font-0);
    }
    
    //高优先
    .feed-title, .section .user-auth.no-auth .no-auth-title .goto-auth, .user-auth .auth-description, .contribution-sidenav, .breadcrumb .item, .album-list__title
    .my-album .tab-list .tab:not(.active) .name, .my-album .title, .fav-sidenav, .nav-title .text,.i-live .i-live-text,
    .fav-main .filter-item, .fav-main .filter-item .filter-type .be-dropdown-item span, .favInfo-box .favInfo-details .fav-name, .my-notebook .note-header .note-title .note-text,
    .pgc-item-title, .pgc-item-desc, .setting-privacy-item .setting-privacy-name, .channel-title .channel-name, .album-title, .follow-item {
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .pgc-item-info .type-and-area, .pgc-space-follow-item .pgc-item-info .pgc-item-state, .favInfo-box .favInfo-details .fav-options .meta {
      color: var(--dark-font-1)!important;
    }
    
    //Card背景 
    .h .h-forbid, .n .n-inner, .bg-white,
    #page-index .col-1, .col-2 .section,
    .feed-title,
    .card,
    .col-full,
    .channel-option.no-channel, .channel-add-video,
    .follow-main .follow-action-bottom .follow-action-fixtop,
    #page-fav .fav-main .fav-action-bottom .fav-action-fixtop, #page-fav .fav-main .small-item:hover {
      background-color: var(--dark-card)!important;
    }
    
    //Card边框
    .col-1, .col-2 .section, .fav-covers, .card, .fav-main .small-item{
      border-color: var(--dark-card)!important;
    }
    
    //Card阴影
    .n .n-inner, .large-item .cover img, .mini-item .cover img, .col-full, .i-pin-c{
      box-shadow: 0 0 0 1px #1313138a!important;
    }
    
    //框线
    .section, .section-title, .i-pin-v .be-tab, .i-m-upload, .i-m-r2, .user .tags, .contribution-sidenav, .contribution-sidenav~.main-content,
    .album-content, .filter, .channel-detail .channel-action-row .be-dropdown, .follow-main .follow-action-top, .follow-main .follow-action-top .back-to-info,
    .fav-sidenav,.fav-sidenav .nav-container, .fav-sidenav .watch-later, .fav-main .favList-info,
    .fav-main .filter-item.search, .fav-main .search-types, .fav-main .fav-action-top .back-to-info, .fav-main .fav-action-top,
    .article-content, .s-content, .setting-index-container, .setting-index-module,
    .i-live .i-live-unfo-btn, .i-live .i-live-fo-count, .section .operation, .channel .channel-item, .watch-later-btn, .mini-item,
    .follow-sidenav, .follow-sidenav .nav-container.follow-container, .follow-main, .follow-main .follow-header.follow-header-info, .list-item, .fans-action-btn.follow {
      border-color: var(--divider)!important;
    }
    
    .my-album .line {
      background-color: var(--dark-1)!important;
    }
    
    //hover深
    #submit-video-type-filter, .my-album .tab-list,
    .contribution-sidenav .contribution-item:hover,
    .fav-item:hover,
    .follow-item:hover {
      background-color: var(--dark-3)!important;
    }
    
    //搜索
    .g-search input, #page-fav .fav-main .search-input input {
      background: var(--dark-card)!important;
      color: var(--dark-font-0);
    }
    .g-search input {
      border-color: var(--divider);
    }
    
    //置顶视频，代表作
    .list-create {
      background-color: unset!important;
      .text {
        color: var(--dark-font-1);
      }
    }
    
    .feed-title {
      border-bottom: 1px solid var(--divider);
    }
    
    //空收藏夹
    .fav-covers.empty {
      background-image: url(${Object(p.c)("/statics/imgs/playlistbg.png")})!important;
    }
    
    //角标
    .section .count {
      background-color: var(--dark-2)!important;
      border-color: var(--dark-1)!important;
      color: var(--dark-font-1);
      &:before {
        background: url(${Object(p.c)("/statics/imgs/count-before.png")})!important;
        left: -6px!important;
        top: -1px!important;
      }
    }
    
    //更多
    .section .more {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
      background-position: -310px -404.5px!important;
      &:hover {
        background-position: -438px -404.5px!important;
      }
    }
    
    //公告
    #i-ann-content {
      textarea {
        background-color: var(--dark-3);
        border-color: var(--dark-3);
        color: var(--dark-font-1)!important;
      }
      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0)!important;
      }
    }
    
    ${h}
    
    //更多操作
    #page-channel-detail .channel-detail .channel-action-row .be-dropdown {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
    }
    .be-dropdown {
      color: var(--dark-font-1);
      .be-dropdown-menu {
        background: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        box-shadow: 0 11px 12px 0 var(--dark-3)!important;
        li:hover {
          background-color: var(--dark-2)!important;
        }
        .be-dropdown-item {
          color: var(--dark-font-0);
          &.be-dropdown-item-delimiter {
            border-color: var(--dark-1)!important;
          }
        }
      }
      &.filter-item {
        color: var(--dark-font-0);
      }
      .icon-arrow {
        background-position: -1369px -215px;
      }
    }
    
    .album-card .btn {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .bangumi-options .opt-list {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      li {
        color: var(--dark-font-0)!important;
        &:hover {
          color: #00a1d6!important;
          background-color: var(--dark-2)!important;
        }
        &.disabled, &.disabled:hover {
          color: #666666!important;
        }
      }
    }
    
    //拖动排序
    #page-fav .fav-sidenav .icon-cursor {
      background-color: var(--dark-1)!important;
    }
    
    //分页
    .be-pager {
      li.be-pager-item, li.be-pager-prev, li.be-pager-next {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .be-pager-options-elevator input {
        border-color: var(--dark-3);
        background-color: var(--dark-2);
        color: var(--dark-font-0);
      }
    }
    
    .bangumi-pagelistbox {
       a.p, a.prev-page, a.next-page {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .custom-right .custom-right-inner.custompage {
        border-color: var(--dark-3)!important;
        background-color: var(--dark-2)!important;
        color: var(--dark-font-0)!important;
      }
    }
    
    //笔记
    .my-notebook {
      .note-header, .note-single-item {
        border-color: var(--divider)!important;
      }
      .note-single-item {
        .note-item__detail--title {
          color: var(--dark-font-0)!important;
        }
        .note-item__detail--summary {
          color: var(--dark-font-1)!important;
        }
        .note-item__detail--info .update-mtime {
          color: var(--dark-font-2)!important;
        }
      }
      .note-single-item--selected {
        background: var(--dark-3)!important;
      }
    }
    .note-editor {
      color: #222;
    }
    
    //个人标签
    #page-setting {
      #setting-new-tag, #setting-new-tag-btn {
        border-color: var(--dark-3)!important;
        background: var(--dark-2)!important;
      }
      #setting-new-tag {
        color: var(--dark-font-0)!important;
      }
    }
    
    //认证标识修正
    #page-index .col-2 .section .user-auth .auth-icon {
      &.organization-auth {
        background-position: -2px -50px!important;
      }
      &.personal-auth {
        background-position: -36px -50px!important;
      }
    }
    
    //充电图片
    .elec {
      .elec-status {
        color: var(--dark-font-0)!important;
        .elec-count {
          color: var(--dark-font-1)!important;
        }
        background-image: url(${Object(p.c)("/statics/imgs/charging_unfocus.png")})!important
      }
      .elec-status-bg-grey {
        background: var(--dark-card)!important;
      }
      &:hover .elec-status {
        background-image: url(${Object(p.c)("/statics/imgs/charging_focus.gif")})!important
      }
      .elec-avatar {
        border-color: var(--dark-5)!important;
      }
    }
    
    //弹出框
    .modal-wrapper {
      background-color: var(--dark-3)!important;
      .modal-title, .title {
        border-color: var(--dark-1)!important;
      }
      .modal-title p {
        color: var(--dark-font-0)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
      .be-input_inner, .be-textarea_inner {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
    }
    
    .h .report-popup-item-text {
      color: unset!important;
    }
    
    .edit-media-list .edit-mask {
      .edit-board, .default-edit {
        background-color: var(--dark-3)!important;
        .head {
          color: unset!important;
          border-color: var(--dark-1)!important;
        }
        .info-wrap {
          .name-input, .media-list-intro{
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .title {
            color: unset!important;
          }
        }
        .media-list-type {
          color: var(--dark-font-1)!important;
        }
        .default-btn-wrap .default-btn.cancel {
          background-color: var(--dark-5)!important;
          border-color: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
        }
      }
    }
    
    #pin-wrapper {
      #pin-layer {
        background-color: var(--dark-3)!important;
      }
      .pin-layer-header {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      #pin-layer-search {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .pin-layer-order-tip {
        color: unset!important;
      }
      .btn.btn-disabled {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
    }
    
    .follow-dialog-wrap .follow-dialog-window {
      background-color: var(--dark-3)!important;
      .title {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      .content .group-list {
        li {
          color: unset!important;
        }
        .add-group {
          .add-btn {
            color: var(--dark-font-1)!important;
            border-color: var(--dark-1)!important;
          }
          .input-group {
            background-color: var(--dark-2)!important;
            input {
              background: var(--dark-2)!important;
              border-color: var(--dark-1)!important;
              color: var(--dark-font-0);
            }
            .submit {
              background: #d9f1f933!important;
            }
          }
        }
        ul .follow-group-mask {
          background: unset!important;
        }
      }
      .bottom {
        border-color: var(--dark-1)!important;
        .btn:disabled {
          background-color: var(--dark-4)!important;
          border-color: var(--dark-4)!important;
          color: var(--dark-font-2)!important;
        }
      }
    }
    
    .wrapper .edit-video-modal {
      .target-favlist {
        .target-favitem .target-fav-title .fav-meta .fav-name, .target-fav-count {
          color: unset!important;
        }
      }
      .addfav-container {
        .fake-fav-input {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-1)!important;
        }
        .fav-container {
          background-color: var(--dark-2)!important;
          input {
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .fav-add-btn {
            background: #d9f1f933!important;
          }
        }
      }
      .favlist-body:after {
        background: var(--dark-1)!important;
      }
      .btn.ghost {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
    }
    
    .fans-action-btn {
      color: var(--dark-font-1);
    }
    
    .fans-action-follow {
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
    }
    
    #id-card {
      background: var(--dark-3)!important;
      .idc-meta, .idc-auth-description {
        color: var(--dark-font-1)!important;
      }
      .idc-avatar {
        border-color: var(--dark-3)!important;
      }
      .btn-center {
        a.primary {
          color: #fff!important;
          border-color: #00a1d6!important;
          background-color: #00a1d6!important;
        }
        a.primary:hover {
          border-color: #00b5e5!important;
          background-color: #00b5e5!important;
        }
        a, a.ghost {
          background: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
          border-color: var(--dark-5)!important;
          &:hover {
            background: var(--dark-4)!important;
          }
        }
      }
      .idc-content {
        a .idc-uname{
          color: var(--dark-font-0)!important;
          &.this-is-vip {
            color: #fb7299!important;
          }
          &:hover {
            color: #00A1D6!important;
          }
        }
      }
    }
    .album-list {
      .album-list__title {
        color: var(--dark-font-1);
      }
      .album-list__tabs {
        background-color: var(--bg);
        .album-list__tab {
          .album-list__tab-name {
            color: var(--dark-font-1);
          }
        }
      }
      .album-card {
        .album-card__title {
          color: var(--dark-font-1);
        }
      }
    }
  `,P=c.b`
    body {
      color: var(--dark-font-0);
    }
    
    // 播放器mini窗口
    #bofqi.mini-player:before {
      box-shadow: #000000 0 0 8px;
    }
    
    // 视频信息
    #v_desc {
      .info, .desc-info {
        color: #879199;
      }
    }
    // 创作团队
    .members-info {
      .members-info__header {
        background-color: var(--dark-1);
        .title, .btn {
          color: var(--dark-font-1);
        }
      }
      .up-card {
        .avatar .info-tag {
          background-color: var(--dark-4)!important;
        }
        .avatar-name__container .name-text {
          color: var(--dark-font-0);
        }
        .attention {
          background-color: var(--dark-5)!important;
        }
      }
      .wide-members {
        .wide-members__title {
          color: var(--dark-font-1);
        }
        .avatar {
          border-color: var(--dark-5);
          .info-tag {
            background-color: var(--dark-4)!important;
          }
          .up-name {
            color: var(--dark-font-0);
          }
        }
        .van-icon-general_back_s, .van-icon-general_enter_s {
          &:before {
            background-color: var(--dark-6);
          }
        }
        .van-icon-general_back_s:after {
          background: linear-gradient(-270deg,#000,hsla(0,0%,100%,0))!important;
        }
        .van-icon-general_enter_s:after {
          background: linear-gradient(270deg,#000,hsla(0,0%,100%,0))!important;
        }
      }
    }
    // up信息
    .up-info {
      .btn .b-cd {
        background: var(--dark-3)!important;
      }
      .up-info_right .name {
        .username {
          color: var(--dark-font-0);
        }
        .message {
          color: var(--dark-font-1);
        }
      }
      .btn-panel {
        .following {
          background-color: var(--dark-5);
          border-color: var(--dark-5);
        }
        .default-btn:not(.btn-transition) {
          background-color: var(--dark-1);
        }
      }
    }
    .bili-header-m .nav-menu .nav-mask {
      background-color: var(--dark-1)!important;
    }
    .nav-wrapper .nav-con ul li a {
      color: var(--dark-font-1)!important;
    }
    #viewbox_report .video-title .tit, .media-wrapper > h1,
     .media-right > *:not(.media-tool-bar),
    .media-right > *:not(.media-tool-bar) a, .media-right > *:not(.media-tool-bar) span {
      color: var(--dark-font-0)!important;
    }
    .main-container .media-info .media-right .media-tool-bar {
      .btn-rating {
        background-color: var(--dark-5);
        border-color: var(--dark-5);
        color: var(--dark-font-1)!important;
        &:hover {
          background-color: var(--dark-4);
        }
      }
      .btn-follow.active {
        background-color: var(--dark-5)!important;
      }
      .bangumi-options .opt-list {
        background: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        li {
          color: var(--dark-font-0)!important;
          &:hover {
            color: #00a1d6!important;
            background-color: var(--dark-2)!important;
          }
          &.disabled, &.disabled:hover {
            color: #666666!important;
          }
        }
      }
    }
    .main-container .plp-l .player-mask .player-limit-mask {
      background-color: var(--dark-0)!important;
    }
    .main-container .plp-l .player-mask .bar-wrapper {
      background-color: var(--dark-5)!important;
    }
    .main-container .pre-mask, .main-container .season-list .ss-list-wrapper .ss-item .ss-cover, .main-container .media-info .media-cover, .main-container .plp-l .player-mask .bar-wrapper .left-bar, .main-container .plp-l .player-mask .bar-wrapper .right-bar {
      background-color: var(--dark-1)!important;
    }
    .player-module .player-tool-bar {
      background: unset!important;
    }
    #bilibiliPlayer {
      box-shadow: 0 0 8px var(--dark-1)!important; 
    }
    #bilibili-player.mini-player:before {
      box-shadow: 0 0 5px var(--dark-1)!important; 
    }
    #paybar_module {
      .vip a.btn-pay.active {
        background-color: var(--dark-1)!important;
        border: 1px solid var(--dark-3);
      }
    }
    #member-container {
      .up-card {
        .info-name {
          color: #c7c7c7;
        }
      }
    }
    // tags
    #v_tag {
      border-color: var(--divider)!important;
      ul li {
        background-color: var(--dark-1)!important;
        border-color: var(--dark-1)!important;
        .tag-info-pane, a, .text {
          background-color: var(--dark-1)!important;
          color: var(--dark-font-1)!important;
       }
      }
      .btn-add, .ipt {
        background-color: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-1)!important;
      }
    }
    
    // 弹幕列表
    .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],
    .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,
    .danmaku-wrap {
      background: #191919!important;
      color: var(--dark-font-1)!important;
      .player-auxiliary-area {
        .player-auxiliary-danmaku-wrap, .player-auxiliary-danmaku-btn-history, .player-auxiliary-danmaku-btn-footer {
          background: #191919!important;
        }
      }
      .player-auxiliary-danmaku-contaner {
        .player-auxiliary-danmaku-load-status {
          background: #191919!important;
          color: #fff;
        }
      }
    }
    .player-auxiliary-area {
      background: #191919!important;
    }
    .player-auxiliary-danmaku-load-status {
      background: unset!important;
      &.disabled {
        color: var(--dark-font-1)!important;
      }
    }
    .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .bscroll-vertical-scrollbar {
      background-color: black !important;
    }
    .danmaku-info-row {
      .danmaku-info-danmaku, span {
        color: var(--dark-font-1)!important;
      }
      &.danmaku-info-row-block {
        opacity: 0.3!important;
      }
    }
    .player-auxiliary-area .player-auxiliary-filter {
      .player-auxiliary-setting-menu-wrap {
        background-color: var(--dark-1)!important;
        border-color: var(--dark-1)!important;
        .player-auxiliary-setting-menu-list {
          background-color: var(--dark-1)!important;
          color: var(--dark-font-1)!important;
          &:hover {
            background-color: var(--dark-3)!important;
          }
        }
      }
    }

    .player-auxiliary-playlist-bottom {
      border-color: var(--dark-3)!important;
    }
    .danmaku-wrap .player-auxiliary-block .player-auxiliary-block-tabpanel {
      .player-auxiliary-block-tabpanel-row {
        &.special-title .player-auxiliary-block-label {
          color: var(--dark-font-1)!important;
        }
        &.player-auxiliary-border {
          background-color: var(--dark-3)!important;
        }
      }
      .player-auxiliary-block-string-short {
        background: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        &:focus {
          color: var(--dark-font-0)!important;
        }
      }
      .bui-button.bui-button-gray:not(:hover) {
        background: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
      .bui-tabs .bui-tabs-header .bui-tabs-header-item:not(.bui-tabs-header-item-active) {
        color: var(--dark-font-1);
      }
      .player-auxiliary-block-list-wrap .player-auxiliary-block-list .player-auxiliary-block-line {
        color: var(--dark-font-3)!important;
        background: var(--dark-4)!important;
      }
    }
    // 弹幕列表管理菜单
    .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-management {
      background-color: var(--dark-3)!important;
      & > * {
        border-color:  var(--dark-1)!important;
      }
      .player-auxiliary-danmaku-wrap .player-auxiliary-danmaku-load-status {
        background: transparent !important;
      }
    }
    
    
    .v-wrap .danmaku-wrap {
      background-color: var(--dark-2)!important;
    }
    .bui-collapse-wrap {
      .bui-collapse-header, .player-auxiliary-filter {
        background-color: var(--dark-2)!important;
      }
      .bui-collapse-body {
        background-color: var(--dark-2)!important;
        .player-auxiliary-playlist-item-active, .player-auxiliary-playlist-item:hover {
          .player-auxiliary-playlist-item-title {
            color: #00a1d6;
          }
        }
        .player-auxiliary-playlist-item-title {
          color: var(--dark-font-1);
        }
      }
    }
    .bui-collapse .bui-collapse-header, .player-auxiliary-filter {
      background: var(--dark-2);
      span {
        color: var(--dark-font-1);
      }
    }
    
    // 选集列表
    #eplist_module, #multi_page, .ep-section-module {
      background-color: var(--dark-2);
      .list-wrapper.longlist {
        padding-right: 6px;
      }
      .list-wrapper.simple li {
        width: 64px;
      }
      .list-title, .head-con {
        h4, h3 {
          color: var(--dark-font-1);
        }
      }
      .section-title {
        color: var(--dark-font-1);
      }
      
      .module-box  {
        li {
          &:not(.on):not(:hover) {
            border-color: var(--dark-3);
            background-color: #232323;
            a {
              color: var(--dark-font-1);
            }
          }
          &:not(.on):hover {
            background-color: #232323;
          }
        }
      }
      .list-wrapper, .cur-list .list-box, .section-ep-wrapper {
        &.simple {
          .ep-item:not(.cursor) {
            color: var(--dark-font-1);
            border-color: var(--dark-3);
            background-color: #232323;
          }
        }
        .ep-item, li {
          width: auto;
          margin-right: 5px;
          color: var(--dark-font-1);
          a {
            color: var(--dark-font-1);
          }
          &.cursor, & {
            background-color: #232323;
          }
          &.visited, &.watched {
            color: #757575;
          }
          &:hover {
            background-color: var(--dark-3);
            color: var(--dark-font-1);
          }
        }
      }
    }
    
    .video-sections {
      background-color: var(--dark-2)!important;
      .video-sections-head {
        .first-line-left {
          .first-line-title {
            color: var(--dark-font-1)!important;
          }
        }
        .video-sections-head_second-line {
          button {
            background: transparent!important;
          }
        }
        .border-bottom-line {
          background: var(--dark-4)!important;
        }
      }
      .video-sections-content-list {
        .video-sections-item {
          background-color: var(--dark-2)!important;
          border-color: var(--dark-1)!important;
          .video-section-title {
            background: var(--dark-1)!important;
            color: var(--dark-font-1)!important;
          }
          .video-episode-card {
            .video-episode-card__info-title {
              color: var(--dark-font-1)!important;
              &.video-episode-card__info-title-playing, &:hover {
                color: #00a1d6!important;
              }
            }
          }
        }
      }
    }
    
    //广告
    .slide-ad .slide-gg {
      background: var(--dark-1)!important;
    }
    a.ad-report {
      color: var(--dark-font-3);
      .vcd {
        .cover {
          background: var(--dark-1)!important;
        }
      }
    }
    
    // 播放器工具栏
    .bilibili-player {
      background: unset!important;
    }
    .bilibili-player-video-bottom-area {
      :before {
        background: var(--dark-2)!important;
      }
    }
    .bilibili-player-video-sendbar {
      background: transparent!important;
      .bilibili-player-video-inputbar {
        background-color: unset!important;
        .bilibili-player-video-inputbar-wrap {
          border-color: var(--dark-4)!important;
          background-color: var(--dark-4);
        }
        .bilibili-player-video-danmaku-input {
          color: var(--dark-font-1)!important;
        }
      }
      .bilibili-player-video-sendbar-left, .bilibili-player-video-sendbar-right {
        background-color: var(--dark-1)!important;
      }
    }
    
    // 交互栏
    #arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {
      border-color: var(--divider)!important;
      .more-ops-list {
        background-color: var(--dark-1)!important;
        border-color: var(--dark-1)!important;
        box-shadow: unset!important;
        color: var(--dark-font-1)!important;
        li:hover {
          background-color: var(--dark-3)!important;
        }
      }
      .media-desc i {
        background-color: var(--bg);
      }
    }
    .media-tool-bar {
      .btn-rating {
        background-color: var(--dark-1);
        border-color: var(--dark-1);
      }
    }
    
    // 活动
    .activity-m {
      .onlytip {
        color: var(--dark-font-1);
      }
      .inside-wrp {
        border-color: var(--dark-1);
        background-color: var(--dark-1);
        .left {
          color: var(--dark-font-1);
        }
        .right .inside-bg:before {
          background-image: linear-gradient(90deg,var(--dark-1),transparent 30%);
        }
      }
    }
    
    // 评价
    #review_module {
      border-color: var(--divider)!important;
      .review-list .review-item .review-body {
        background-color: var(--dark-1)!important;
       .review-header .review-author, .review-title {
          color: var(--dark-font-1)
       }
       .review-content {
         color: var(--dark-font-1)!important;
       }
      }
    }
    
    // 承包榜
    #sponsor_module {
      border-color: var(--divider)!important;
      .sponsor-rank-header {
        h3, .sponsor-rank-tab li {
          color: var(--dark-font-1)!important;
        }
      }
      .sponsor-rank-item {
        .sp-right .sp-msg {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-1)!important;
          background-color: var(--dark-1)!important;
        }
      }
    }
    
    // 右侧视频推荐区
    #recom_module {
      .recom-title, .recom-list .video-title {
        color: var(--dark-font-3);
      }
      .expand-more {
        background-color: var(--dark-1);
        color: var(--dark-font-1);
      }
    }
    #reco_list {
      .rec-title {
        color: var(--dark-font-3);
      }
      .card-box {
        .pic-box {
          background: var(--dark-1)!important;
        }
        .info .title {
          color: var(--dark-font-3);
        }
      }
      a:hover {
        color: #00a1d6!important;
      }
      .rec-footer {
        background-color: var(--dark-1);
      }
    }
    
    // 收藏页面右侧推荐区
    .rcmd-list {
      .remd-video-card {
        .info {
          .title {
            color: var(--dark-font-1)!important;
          }
          .count a {
            color: var(--dark-font-2) !important;
          }
        }
      }
    }
    // 番剧剧集信息
    #seasonlist_module {
      .series-title, .ss-list-wrapper .ss-item .ss-info .ss-title {
        color: var(--dark-font-3);
      }
      .ss-list-wrapper .ss-item .ss-info {
        .ss-title {
          color: var(--dark-font-3);
        }
        .pub-info {
          color: var(--dark-font-3);
        }
      }
      .expand-more {
        background-color: var(--dark-1);
        color: var(--dark-font-1);
      }
    }
    // 直播推荐 
    #live_recommand_report .pl__card {
      border-color: var(--dark-1);
      background-color: var(--dark-1);
      .pl__info .pl__title {
        color: var(--dark-font-1);
      }
    }
    // 侧边按钮
    .float-nav .nav-menu .item, .main-container .nav-tools .tool-item {
      background-color: var(--dark-4);
      border-color: var(--dark-4);
    }
    //投币弹出
    .coin-operated-m {
      background-color: var(--dark-3);
      .coin-title, .like-checkbox {
        color: var(--dark-font-0);
      }
    }
    //收藏弹出
    .collection-m {
      background-color: var(--dark-3);
      .title {
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0)!important;
      }
      .content .group-list {
        li .fav-title {
          color: var(--dark-font-0);
        }
        ul .collection-mask {
          background-color: unset!important;
        }
      }
      .add-group {
        .add-btn {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-1)!important;
        }
        .input-group {
          background-color: var(--dark-2)!important;
          input {
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .submit {
            background: #d9f1f933!important;
          }
        }
      }
      .bottom {
        border-color: var(--dark-1)!important;
        .btn.disable {
          background-color: var(--dark-4)!important;
          border-color: var(--dark-4)!important;
          color: var(--dark-font-2)!important;
        }
      }
    }
    //转发弹出
    .video-toolbar .ops .share .share-pos {
      background-color: var(--dark-card)!important;
      border-color: var(--dark-card)!important;
      color: var(--dark-font-1);
      .box-a .share-down .share-btn {
        color: var(--dark-font-1);
      }
      .share-address .t {
        color: var(--dark-font-3);
      }
      .box-b {
        border-color: var(--dark-6)!important;
      }
    }
    
    //笔记
    .video-editor .ql-toolbar {
      color: #222;
    }
    
    //评论区
    #comment_module, #comment .common{
      border-color: var(--divider)!important;
      .b-head {
        color: var(--dark-font-1);
      }
      .comment-send-lite {
        background: var(--bg)!important;
      }
      .comment-emoji {
        box-shadow: none!important;
      }
    }
    .comm, .comment {
        ${g}
        .textarea-container {
          textarea {
            background-color: var(--dark-1)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-1)!important;
          }
          &:hover textarea, &.focus textarea {
            color: var(--dark-font-0)!important;
          }
        }
        .comment-emoji {
          border: 1px solid var(--dark-1)!important;
          background-color: var(--dark-1)!important;
        }
      }
    // 笔记功能
    .ql-editor {
      color: initial;
    }
    `,z=c.b`
    .room-bg.p-fixed:after {
      background: #1c2022d9!important;
    }
    
    .link-navbar-ctnr,
    .link-navbar-vm,
    .link-navbar,
    .head-info-section,
    .gift-control-section,
    .rank-list-section,
    .rank-list-ctnr,
    .chat-history-panel,
    .announcement-cntr,
    .chat-control-panel,
    .control-panel-ctnr,
    .gift-sender-panel,
    .count-choice,
    .gift-panel-box,
    .content-wrapper,
    .link-progress-tv,
    .pay-note-panel,
    .feed-title,
    .card,
    .live-record-list-cntr,
    .flip-view-image,
    .bg-white,
    .live-player-ctnr.minimal,
    .user-panel,
    .link-panel-ctnr,
    .calendar-checkin,
    .calendar-checkin .title,
    .calendar-checkin .calendar-wrapper,
    .download-panel-ctnr,
    .side-bar-popup-cntr {
      background-color: var(--dark-card)!important;
    }
    
    .daily-record-title, .choice-item.active, .choice-item:hover, .divider, .more-btn-cntr,  .animation-list .icon-arrow-left, .animation-list .icon-arrow-right {
      background-color: var(--dark-5)!important;
    }
    
    .choice-item, .danmaku-menu, .logout-btn, .load-more-btn, .checkin-btn, .link-popup-panel {
      background-color: var(--dark-3)!important;
    }
    
    .danmaku-item .user-name {
      color: var(--dark-font-1)!important;
    }
    
    body{
      color: var(--dark-font-0);
    }
    
    .selector-box, .feed-title, .glory-name {
      color: var(--dark-font-0)!important;
    }
    
    .common-popup-wrap, .gVPoeh,
    .gift-item.buy:hover, .gift-panel-switch:hover, .download-item:hover, .item.self, .rank-list-ctnr .own {
      background-color: var(--dark-3)!important;
    }
    
    .rank:not(.rank-1):not(.rank-2):not(.rank-3) {
      background: var(--dark-6)!important;
    }
    
    .item, .daily-record-title, .daily-text, .gift-info-expScore, .seeds-wrap, .tab-candidate, .room-introduction-scroll-wrapper,
    .username-info, .calendar-checkin .calendar-wrapper, .download-panel-ctnr a, .list-unit {
      color: var(--dark-font-1)!important;
    }
    
    .gift-info-desc {
      color: var(--dark-font-2)!important;
    }
    
    .link-navbar .main-ctnr .nav-logo, .link-navbar .nav-item, .shortcuts-ctnr, .room-title, .tab-list .item.active, .rank-list-box a.live-skin-main-a-text, .chat-item.danmaku-item,
    .gift-item .label, .gift-info-title, .choice-item, .announcement-cntr .content, .record-title, .live-player-ctnr, .area-list-panel .list-item, .username, .user-row,
    .gift-component-effect-rule, .share-addr-name, th.list-head-text {
      color: var(--dark-font-0)!important;
    }
    
    .calendar-checkin .calendar-wrapper .calendar .date-ctnr .day-item {
      color: var(--dark-5)!important;
      &.checked {
        color: #fff!important;
      }
    }
    
    .rank-list-box a:hover, .chat-item.danmaku-item .danmaku-content:hover, .area-list-panel .list-item:hover, .user-item:hover .username, .download-item:hover {
      color: #23ade5!important;
    }
    
    .head-info-section,
    .gift-control-section,
    .aside-area,
    .announcement-cntr,
    .gift-sender-panel.arrow-bottom:before,
    .gift-panel-box,
    .content-wrapper,
    .card,
    .live-record-list-cntr,
    .side-bar-popup-cntr {
      border-color: var(--dark-card)!important;
    }
    
    .tab-list .item, .l-line, .r-line, .rank-list-ctnr, .count-choice, .choice-item, .gift-reveal-header, .announcement-cntr .content, .room-introduction-tags, .info-item-ctnr, .footer-line, .edit-button {
      border-color: var(--dark-5)!important;
    }
    
    .common-popup-wrap {
      border-color: var(--dark-3)!important;
    }
    
    .common-popup-wrap.arrow-bottom:after, .common-popup-wrap.arrow-bottom:before {
      border-color: var(--dark-3) transparent transparent !important;
    }
  
    .common-popup-wrap.arrow-top:after, .common-popup-wrap.arrow-top:before {
      border-color: transparent transparent var(--dark-3) !important;
    }
    
    .arrow {
      border-color: transparent transparent transparent var(--dark-card)!important;
    }
    
    .link-navbar-ctnr {
      box-shadow: 0 0 5px 1px var(--dark-card)!important;
    }
    
    .gift-sender-panel, .common-popup-wrap, .side-bar-popup-cntr, .gVPoeh {
      box-shadow: 0 6px 12px 0 var(--dark-1)!important;
    }
    
    .link-navbar .panel-shadow {
      box-shadow: 0 8px 20px 0 var(--dark-card)!important;
    }
    
    .live-player-ctnr.minimal {
      box-shadow: 0 0 30px 1px var(--dark-card)!important;
    }
    
    .chat-input-ctnr {
      border-color: var(--divider)!important;
      background-color: var(--dark-3)!important;
      .medal-section {
        border-color: var(--divider)!important;
      }
      .chat-input, .count-choice .count-input {
        background-color: var(--dark-3)!important;
        color: var(--dark-font-0)!important;
        border-color: var(--dark-4)!important;
      }
    }
    
    .bl-button--primary:disabled {
      background-color: var(--dark-4)!important;
      color: var(--dark-font-2)!important;
    }
    
    .area-list-panel {
      background-color: var(--dark-3)!important;
      .list-item:hover {
        background-color: var(--dark-2)!important;
      }
    }
    
    .search-bar-ctnr .search-bar {
      background-color: var(--dark-3)!important;
      input {
        color: var(--dark-font-1)!important;
        &:focus {
          color: var(--dark-font-0)!important;
        }
      }
    }
    
    .live-room-app .app-content .link-footer-ctnr {
      background-color: unset!important;
      .link-footer {
        background-color: unset!important;
        border-color: var(--divider)!important;
        .footer-linker-line {
          background-color: var(--divider)!important;
        }
      }
    }
    
    .record-download button {
      background: var(--dark-5)!important;
      border-color: var(--dark-6)!important;
      color: var(--dark-font-1)!important;
    }
    
    .side-bar-cntr {
      background-color: var(--dark-card)!important;
      border-color: var(--dark-card)!important;
    }
    
    .flip-view-image-ctnr {
      filter: brightness(0.9);
    }
    
    .pophover>p:first-child {
      color: var(--dark-font-1)!important;
    }
    
    .feed-title {
      border-bottom: 1px solid var(--divider);
    }
    
    ${h}
    `,A=c.b`
  html {
    background: unset!important;
  }
  body {
    color: var(--dark-font-0);
  }
  input {
    border-color: var(--dark-4)!important;
    outline: none!important;
    color: var(--dark-font-0)!important;
  }
  .suggest-wrap {
    background: var(--dark-card)!important;
    border-color: var(--dark-card)!important;
    .horizontal .hz-text:not(:hover) {
      border-color: var(--dark-6);
      color: var(--dark-font-0);
    }
    .title {
      border-color: var(--dark-6);
      span {
        background: var(--dark-card);
      }
    }
    .vt-text {
      color: var(--dark-font-0);
      &:hover {
        background-color: var(--dark-3);
      }
    }
    .keyword-wrap .keyword {
      color: var(--dark-font-0);
      &.focus {
        background-color: var(--dark-3);
      }
    }
  }
  //主页
  .home-wrap {
    .home-input {
      .type {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        &.selected, &:hover {
          background-image: linear-gradient(0deg,var(--dark-3),var(--dark-4));
        }
      }
      .list {
        background-color: var(--dark-4);
        border-color: var(--dark-4);
        li:hover {
          background-color: var(--dark-3);
        }
      }
      .content {
        background-color: var(--dark-3)!important;
      }
    }
    .home-suggest {
      .hot-search, .history {
        border-color: var(--dark-5);
      }
      .hotlist {
        .num {
          background-color: var(--dark-4);
          &:not(.special) {
            color: var(--dark-font-1);
          }
        }
        .item {
          border-color: var(--dark-6);
        }
      }
      .history .list .item {
        border-color: var(--dark-6);
        a {
          color: var(--dark-font-0);
        }
      }
    }
  }
  //结果
  .total-wrap .total-text {
    color: var(--dark-font-2);
  }
  .search-wrap .search-block .input-wrap {
    background-color: var(--dark-3)!important;
  }
  #navigator .v-switcher-header-item {
    border-color: var(--divider);
    a {
      color: var(--dark-font-1);
    }
  }
  .filter-wrap {
    border-color: var(--divider);
    .filter-item:not(active) a {
      color: var(--dark-font-1);
    }
    .fold:hover {
      background-color: var(--dark-2);
    }
    .sub-filter {
      background-color: var(--dark-2);
      border-color: var(--dark-2);
    }
    .filter-wrap_bottom {
      background-color: var(--divider);
    }
  }
  #all-list .mixin-list ul:not(:last-child) {
    border-color: var(--divider);
  }
  .activity-item .info {
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
    .title {
      color: var(--dark-font-0);
    }
    .desc {
      color: var(--dark-font-1);
    }
  }
  .fixed-top {
    background: hsla(0,100%,0%,.9)!important;
  }
  .page-wrap .pager {
    background: unset!important;
    .pages .page-item:not(.active) button:not(:hover) {
      color: var(--dark-font-1);
      background-color: var(--dark-2);
      border-color: var(--dark-3);
    }
  }
  .error-wrap {
    border-color: var(--divider);
    background-color: unset!important;
  }
  //视频
  .video-item.matrix, .video-item.list {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }
  //番剧，影视
  .bangumi-item, .pgc-item {
    border-color: var(--divider);
    .right-info {
      .headline {
        span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2)!important;
        }
        .title {
          color: var(--dark-font-0);
        }
      }
      .intros .value {
        color: var(--dark-font-0);
      }
      .ep-box .ep-sub .ep-item {
        border-color: var(--divider)!important;
        &:not(:hover) {
          color: var(--dark-font-2)!important;
        }
      }
    }
  }
  //直播
  #live-list {
    .live-tabs a {
      color: var(--dark-font-0);
    }
    .headline-live, .headline-room {
      h3 {
        color: var(--dark-font-1);
        .num-txt {
          color: var(--dark-font-2);
        }
      }
    }
    .live-user-wrap .live-user-item {
      box-shadow: 0 0 3px var(--dark-6);
      .item-right {
        .uname {
          color: var(--dark-font-1);
        }
        .status.free {
          background-color: var(--dark-4);
          color: var(--dark-font-1);
        }
        .info .star, .info .type {
          color: var(--dark-font-1);
        }
        .tags>span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2);
        }
      }
    }
    .headline-room .filter a {
      color: var(--dark-font-0);
    }
    .live-room-item {
      .item-title {
        color: var(--dark-font-0);
      }
      .item-info .live-num, .item-info .uname {
        color: var(--dark-font-1);
      }
    }
  }
  //专栏
  .article-item {
    border-color: var(--divider);
    .content .title {
      color: var(--dark-font-0);
    }
  }
  //话题
  .topic-item {
    border-color: var(--divider);
    .content .headline a {
      color: var(--dark-font-0);
    }
  }
  // 游戏
  .game-list {
    .game-item {
      
    }
    .info {
      .headline {
        .title {
          color: var(--dark-font-3);
        }
      }
    }
  }
  //用户
  #user-list .dropdown-wrap .select-wrap {
    border-color: var(--divider);
    .bili-dropdown {
      color: var(--dark-font-0);
      .selected {
        color: var(--dark-font-2);
      }
      .dropdown-list {
        background: var(--dark-3);
        border-color: var(--dark-3);
        .dropdown-item:hover {
          background: var(--dark-2);
        }
      }
    }
  }
  .user-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .attention-btn.followed, .attention-btn.followed:hover {
      background: var(--dark-5);
      color: var(--dark-font-1);
    }
    .up-info>span, .desc {
      color: var(--dark-font-1);
    }
    .up-videos .video-item .video-desc {
      color: var(--dark-font-0);
    }
  }
  //相簿
  .photo-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
  }
`,M=c.b`
  body {
    background-color: unset!important;
  }
  .out-container {
    background-color: var(--dark-3)!important;
    .tab-bar {
      border-color: var(--divider)!important;
    }
  }
  .split-line {
    &:before {
      border-color: var(--divider)!important;
    }
  }
  .history-tip {
    background-color: var(--divider)!important;
  }
  .list-item {
    &:hover {
      background-color: var(--dark-2) !important;
    }
    .center-box {
      .name-line {
        color: var(--dark-font-1)!important;
      }
      .content {
        color: var(--dark-font-1)!important;
      }
    }
  }
`,S=c.b`
  html {
    background-image: none!important;
  }
  body {
    background-color: unset!important;
  }
  .im-list-box {
    background-color: var(--dark-3)!important;
    color: var(--dark-font-1) !important;
    
    .im-list {
      &:hover {
        background-color: var(--dark-6)!important;
        color: var(--dark-font-0)!important;
      }
    }
  }
`;o.d(a,"d",(function(){return I})),o.d(a,"e",(function(){return F})),o.d(a,"c",(function(){return J})),o.d(a,"a",(function(){return V})),o.d(a,"i",(function(){return R})),o.d(a,"h",(function(){return T})),o.d(a,"j",(function(){return U})),o.d(a,"g",(function(){return B})),o.d(a,"l",(function(){return G})),o.d(a,"n",(function(){return H})),o.d(a,"b",(function(){return K})),o.d(a,"m",(function(){return N})),o.d(a,"f",(function(){return Q})),o.d(a,"k",(function(){return W}));class q extends i.a.Component{constructor(r){super(r),n()(this,"state",{showDark:!0}),n()(this,"sysDark",matchMedia("(prefers-color-scheme: dark)")),n()(this,"updateDarkModeListener",()=>{!0===this.props.followSystem?(this.setState({showDark:this.sysDark.matches}),this.sysDark.onchange=()=>{this.setState({showDark:this.sysDark.matches})}):this.sysDark.onchange=null})}componentDidMount(){this.updateDarkModeListener()}componentDidUpdate(r,a,o){null===r.followSystem&&this.updateDarkModeListener()}}n()(q,"propTypes",{followSystem:l.a.bool});const L=(r,a=!1,o=!0,t=!0)=>i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),t?i.a.createElement(k,null):null,o?i.a.createElement(v,null):null,a?i.a.createElement(b,null):null,r);class I extends q{render(){const r=L([i.a.createElement(M,{key:"iframeDynamic"})]);return this.state.showDark?r:null}}class F extends q{render(){const r=L([i.a.createElement(S,{key:"iframeMessage"})]);return this.state.showDark?r:null}}class J extends q{render(){const r=L([i.a.createElement(x,{key:"home"})],!0,!1);return this.state.showDark?r:null}}class V extends q{render(){const r=L([i.a.createElement(_,{key:"dynamic"}),i.a.createElement(u,{key:"userPopper"})]);return this.state.showDark?r:null}}class R extends q{render(){const r=L([i.a.createElement(D,{key:"read"})]);return this.state.showDark?r:null}}class T extends q{render(){const r=L([i.a.createElement(E,{key:"cv"}),i.a.createElement(u,{key:"userPopper"})],!0);return this.state.showDark?r:null}}class U extends q{render(){const r=L([i.a.createElement(j,{key:"readRank"})],!0);return this.state.showDark?r:null}}class B extends q{render(){const r=L([i.a.createElement(C,{key:"message"})]);return this.state.showDark?r:null}}class G extends q{render(){const r=L([i.a.createElement(O,{key:"space"}),i.a.createElement(u,{key:"userPopper"})]);return this.state.showDark?r:null}}class H extends q{render(){const r=L([i.a.createElement(w,{key:"watchLater"})],!0,!1);return this.state.showDark?r:null}}class K extends q{render(){const r=L([i.a.createElement(y,{key:"history"}),i.a.createElement(s,{key:"footer2"})],!1,!1);return this.state.showDark?r:null}}class N extends q{render(){const r=L([i.a.createElement(P,{key:"videoPlay"}),i.a.createElement(u,{key:"userPopper"})]);return this.state.showDark?r:null}}class Q extends q{render(){return this.state.showDark?i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement(z,null)," ",i.a.createElement(u,null)):null}}class W extends q{render(){const r=L([i.a.createElement(A,{key:"search"})],!0);return this.state.showDark?r:null}}}}]);