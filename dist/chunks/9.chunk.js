(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{131:function(e,t){e.exports={wrapper:"src-css-login-wrapper-52fb3",logo:"src-css-login-logo-6e8db",appName:"src-css-login-appName-f5b07",input:"src-css-login-input-fa5f7",registerBox:"src-css-login-registerBox-1af84",splitBox:"src-css-login-splitBox-f8bc8",icon:"src-css-login-icon-000b5"}},132:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(3)),n=i(a(5)),r=i(a(2)),u=i(a(4)),o=i(a(9)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.size,l=e.className,n=e.children,r=e.style,u=(0,o.default)(t,t+"-"+a,l);return s.createElement("div",{className:u,style:r},n)}}]),t}(s.Component);t.default=f,f.defaultProps={prefixCls:"am-wingblank",size:"lg"},e.exports=t.default},133:function(e,t,a){"use strict";a(16),a(216)},213:function(e,t){},216:function(e,t){},246:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(a(132)),n=f(a(23)),r=f(a(56)),u=f(a(44));t.default=function(e){return o.default.createElement("div",{className:s.default.wrapper},o.default.createElement("p",null,"登 录"),o.default.createElement("img",{src:i.default,alt:"",className:s.default.logo}),o.default.createElement("p",{className:s.default.appName},"校友一帮一"),o.default.createElement(l.default,null,o.default.createElement(u.default,{className:s.default.input,value:e.user,onChange:function(t){e.userChange(t)}},"用户名"),o.default.createElement(r.default,null),o.default.createElement(u.default,{className:s.default.input,type:"password",value:e.pwd,onChange:function(t){e.pwdChange(t)}},"密码"),o.default.createElement(r.default,null),o.default.createElement(n.default,{style:{width:"70%",borderRadius:20,margin:"0 auto",height:35,lineHeight:"35px",fontSize:14,color:"#f2f2f2"},type:"primary",onClick:function(){return e.login()}},"登录"),o.default.createElement(r.default,null),o.default.createElement("div",{className:s.default.registerBox},o.default.createElement("a",{href:"/#/register"},"注册"),"|",o.default.createElement("a",{href:"#"},"忘记密码")),o.default.createElement("div",{className:s.default.splitBox},o.default.createElement("span",null),o.default.createElement("p",null,"第三方直接登录"),o.default.createElement("span",null)),o.default.createElement("div",{className:s.default.icon},o.default.createElement("a",{href:"#"},o.default.createElement("i",{className:"iconfont icon-weixin",style:{color:"#00c900"}})),o.default.createElement("a",{onClick:function(){return window.open("https://graph.qq.com/oauth2.0/authorize?client_id=101583840&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.uncleLorin.cn%3A5000%2F%23%2Fhome","oauth2Login_10742","height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=no")}},o.default.createElement("i",{className:"iconfont icon-qq",style:{color:"#5eabdf"}})))))},a(133),a(24),a(57),a(45);var o=f(a(0)),s=f(a(131)),i=f(a(89));function f(e){return e&&e.__esModule?e:{default:e}}},371:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=p(a(26)),n=p(a(12)),r=p(a(3)),u=p(a(5)),o=p(a(2)),s=p(a(4));a(27);var i=p(a(0)),f=a(21),c=p(a(14)),d=p(a(246));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){var e,a,u,s;(0,r.default)(this,t);for(var i=arguments.length,f=Array(i),d=0;d<i;d++)f[d]=arguments[d];return a=u=(0,o.default)(this,(e=t.__proto__||(0,n.default)(t)).call.apply(e,[this].concat(f))),u.login=function(){return 0==u.props.user.length?l.default.fail("请输入用户名=_=",2):0==u.props.pwd.length?l.default.fail("请输入密码=_=",2):void c.default.post("/api/login",{user:u.props.user,pwd:u.props.pwd}).then(function(e){200==e.data.status?(localStorage.setItem("user",u.props.user),localStorage.setItem("token",e.data.token),localStorage.setItem("school",e.data.school),localStorage.setItem("grade",e.data.grade),localStorage.setItem("zy",e.data.zy),window.location.href="/"):l.default.fail("用户名或密码错误，请重新输入",2)})},s=a,(0,o.default)(u,s)}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.default.createElement(d.default,{login:this.login,user:this.props.user,pwd:this.props.pwd,userChange:this.props.userChange,pwdChange:this.props.pwdChange})}}]),t}(i.default.Component);t.default=(0,f.connect)(function(e){return{user:e.login.user,pwd:e.login.pwd}},function(e){return{userChange:function(t){e({type:"userChange",value:t})},pwdChange:function(t){e({type:"pwdChange",value:t})}}})(m)},56:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(3)),n=i(a(5)),r=i(a(2)),u=i(a(4)),o=i(a(9)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.size,l=e.className,n=e.style,r=e.onClick,u=(0,o.default)(t,t+"-"+a,l);return s.createElement("div",{className:u,style:n,onClick:r})}}]),t}(s.Component);t.default=f,f.defaultProps={prefixCls:"am-whitespace",size:"md"},e.exports=t.default},57:function(e,t,a){"use strict";a(16),a(213)},89:function(e,t,a){e.exports=a.p+"images/f55bf366.logo.png"}}]);