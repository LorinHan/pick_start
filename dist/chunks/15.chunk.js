(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{261:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement("img",{src:a.default,alt:""})};var n=o(s(0)),a=o(s(89));function o(e){return e&&e.__esModule?e:{default:e}}},375:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(s(12)),a=p(s(3)),o=p(s(5)),c=p(s(2)),u=p(s(4)),r=p(s(0)),l=s(21),f=s(17),i=(p(s(14)),p(s(68))),d=p(s(261));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,a.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.resetUnread()}},{key:"render",value:function(){var e="";return r.default.createElement("div",{className:i.default.chat},this.props.user.map(function(t,s){if(t.name&&t.name!=e)return e=t.name,r.default.createElement(f.Link,{to:"/chatting?user="+t.name,key:s},r.default.createElement("div",{className:i.default.chatBox},r.default.createElement(d.default,null),r.default.createElement("div",null,r.default.createElement("h2",null,t.name),r.default.createElement("p",null,t.info))))}))}}]),t}(r.default.Component);t.default=(0,l.connect)(function(e){return{user:e.chatting.user}},function(e){return{resetUnread:function(){e({type:"reseatUnread"})}}})(h)},68:function(e,t){e.exports={shopBox:"src-css-shopList-shopBox-ee859",shopItem:"src-css-shopList-shopItem-bf1d6",shopPut:"src-css-shopList-shopPut-ddea1",getInfo:"src-css-shopList-getInfo-171ef",goodInfo:"src-css-shopList-goodInfo-dac96",title:"src-css-shopList-title-56a42",desc:"src-css-shopList-desc-baaaa",infoTable:"src-css-shopList-infoTable-357e6",chat:"src-css-shopList-chat-3c901",chatBox:"src-css-shopList-chatBox-f8f47"}},89:function(e,t,s){e.exports=s.p+"images/f55bf366.logo.png"}}]);