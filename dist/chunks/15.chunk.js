(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(a(14)),s=m(a(2)),n=m(a(4)),r=m(a(1)),d=m(a(3)),o=m(a(0)),u=a(27),c=a(28),i=m(a(15)),f=m(a(259)),p=m(a(65));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){(0,s.default)(this,t);var e=(0,r.default)(this,(t.__proto__||(0,l.default)(t)).call(this));return e.componentDidMount=function(){e.setState({data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"]});var t=e.props.location.search.substring(6);t=decodeURI(t),e.props.getInfo(t)},e.state={data:["1","2","3"],imgHeight:176,baseUrl:"http://129.204.193.180:5000"},e}return(0,d.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this,t=[];if(this.props.data.imgUrl)for(var a in this.props.data.imgUrl)t[a]=this.props.data.imgUrl[a];return o.default.createElement("div",{style:{overflow:"hidden"}},o.default.createElement(f.default,{options:{},ref:"viewer"},o.default.createElement("ul",{id:"images"},t.map(function(t,a){return o.default.createElement("img",{src:e.state.baseUrl+"/images/img/"+t,alt:"",key:a,style:{width:"50%"}})}))),o.default.createElement("div",{className:p.default.goodInfo},o.default.createElement("p",{className:p.default.title},"商品描述:"),o.default.createElement("p",{className:p.default.desc},this.props.data.desc),o.default.createElement("table",{className:p.default.infoTable},o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("td",null,"物品名称"),o.default.createElement("td",null,this.props.data.name)),o.default.createElement("tr",null,o.default.createElement("td",null,"学校"),o.default.createElement("td",null,this.props.data.school)),o.default.createElement("tr",null,o.default.createElement("td",null,"交易地点"),o.default.createElement("td",null,this.props.data.address)),o.default.createElement("tr",null,o.default.createElement("td",null,"价格"),o.default.createElement("td",null,"￥",this.props.data.price)),o.default.createElement("tr",null,o.default.createElement("td",null,"手机号"),o.default.createElement("td",null,this.props.data.tel)),o.default.createElement("tr",null,o.default.createElement("td",null,"邮箱"),o.default.createElement("td",null,this.props.data.mail)))),o.default.createElement(c.Link,{to:"/chatting?user="+this.props.data.user,style:{display:"block",borderRadius:15,textAlign:"center",lineHeight:"50px",height:50,width:"100%",backgroundColor:"#108ee9",color:"#fff",fontSize:18}},o.default.createElement("i",{className:"iconfont icon-6"})," 联系Ta")))}}]),t}(o.default.Component);t.default=(0,u.connect)(function(e){return{data:e.goodInfo.data}},function(e){return{getInfo:function(t){i.default.post("/api/goodInfo",{name:t}).then(function(t){var a={type:"getInfo",data:t.data};e(a)})}}})(h)},65:function(e,t){e.exports={shopBox:"src-css-shopList-shopBox-ee859",shopItem:"src-css-shopList-shopItem-bf1d6",shopPut:"src-css-shopList-shopPut-ddea1",getInfo:"src-css-shopList-getInfo-171ef",goodInfo:"src-css-shopList-goodInfo-dac96",title:"src-css-shopList-title-56a42",desc:"src-css-shopList-desc-baaaa",infoTable:"src-css-shopList-infoTable-357e6",chat:"src-css-shopList-chat-3c901",chatBox:"src-css-shopList-chatBox-f8f47"}}}]);