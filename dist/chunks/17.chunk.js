(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{131:function(e,t){e.exports={wrapper:"src-css-login-wrapper-52fb3",logo:"src-css-login-logo-6e8db",appName:"src-css-login-appName-f5b07",input:"src-css-login-input-fa5f7",registerBox:"src-css-login-registerBox-1af84",splitBox:"src-css-login-splitBox-f8bc8",icon:"src-css-login-icon-000b5"}},370:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=b(a(23)),n=b(a(218)),u=b(a(91)),s=b(a(56)),o=b(a(44)),r=b(a(26)),d=b(a(10)),f=b(a(12)),i=b(a(3)),c=b(a(5)),p=b(a(2)),h=b(a(4)),g=b(a(94));a(24),a(240),a(69),a(57),a(45),a(27),a(95);var m=b(a(0)),w=b(a(14)),v=b(a(131)),E=b(a(89));function b(e){return e&&e.__esModule?e:{default:e}}g.default.RadioItem;var C=[{label:m.default.createElement("div",null,m.default.createElement("span",null,"厦门华厦学院")),value:"厦门华厦学院"},{label:m.default.createElement("div",null,m.default.createElement("span",null,"厦门工商旅游学院")),value:"厦门工商旅游学院"},{label:m.default.createElement("div",null,m.default.createElement("span",null,"厦门理工学院")),value:"厦门理工学院"}],y=function(e){function t(){(0,i.default)(this,t);var e=(0,p.default)(this,(t.__proto__||(0,f.default)(t)).call(this));return e.handleChange=function(t,a){e.setState((0,d.default)({},t,a))},e.onChangeSchool=function(t){e.setState({school:t})},e.register=function(){return""===e.state.user?r.default.fail("用户名不能为空，请输入用户名",2):""===e.state.pwd?r.default.fail("密码不能为空，请输入密码",2):e.state.surepwd!=e.state.pwd?r.default.fail("密码与确认密码不一致，请检查",2):""===e.state.school?r.default.fail("请填写您所属的学校",2):void e.setState({school:e.state.school[0]},function(){w.default.post("/api/register",{data:this.state}).then(function(e){return"用户名重复"==e.data.msg?r.default.fail("该用户名已存在，请重新输入",2):"后端出错了"==e.data.msg?r.default.fail("服务器异常，请稍后重试",2):(window.localStorage.setItem("user",e.data.user),window.localStorage.setItem("token",e.data.token),window.localStorage.setItem("school",e.data.school),void(window.location.href="/"))})})},e.state={user:"",pwd:"",surepwd:"",type:"Boss",school:"",tel:"",mail:"",grade:"",zy:""},e}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this;return m.default.createElement("div",{className:v.default.wrapper},m.default.createElement("p",null,"注 册"),m.default.createElement("img",{src:E.default,alt:"",className:v.default.logo}),m.default.createElement(o.default,{className:v.default.input,value:this.state.user,onChange:function(t){return e.handleChange("user",t)}},"用户名"),m.default.createElement(s.default,null),m.default.createElement(o.default,{className:v.default.input,value:this.state.pwd,type:"password",onChange:function(t){return e.handleChange("pwd",t)}},"密码"),m.default.createElement(s.default,null),m.default.createElement(o.default,{className:v.default.input,value:this.state.surepwd,type:"password",onChange:function(t){return e.handleChange("surepwd",t)},placeholder:"请再次输入您的密码"},"确认密码"),m.default.createElement(s.default,null),m.default.createElement(n.default,{data:C,value:this.state.school,cols:1,onChange:this.onChangeSchool},m.default.createElement(u.default.Item,{arrow:"horizontal",className:v.default.input},"请选择学校")),m.default.createElement(l.default,{style:{width:"70%",borderRadius:20,margin:"5% auto",height:35,lineHeight:"35px",fontSize:14,color:"#f2f2f2"},type:"primary",href:"/#/register",onClick:function(){return e.register()}},"注册"))}}]),t}(m.default.Component);t.default=y},89:function(e,t,a){e.exports=a.p+"images/f55bf366.logo.png"}}]);