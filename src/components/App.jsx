import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import './config';
import { connect } from 'react-redux';
import Logo from './Logo/Logo.jsx';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import { NavBar, Icon, Toast } from 'antd-mobile';
import axios from 'axios';
import io from 'socket.io-client';

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }
    else {
        return null;
    }
};
const Register = Loadable({
    loader: () => import('./Register/Register'),
    loading: MyLoadingComponent
});
const Login = Loadable({
    loader: () => import('./Login/Login.js'),
    loading: MyLoadingComponent
});
const ShopList = Loadable({
    loader: () => import('./ShopList/ShopList.js'),
    loading: MyLoadingComponent
});
const ShopPut = Loadable({
    loader: () => import('./ShopPut/ShopPut.js'),
    loading: MyLoadingComponent
});
const GoodInfo = Loadable({
    loader: () => import('./GoodInfo/GoodInfo.js'),
    loading: MyLoadingComponent
});
const Chat = Loadable({
    loader: () => import('./Chat/Chat.js'),
    loading: MyLoadingComponent
});
const Chatting = Loadable({
    loader: () => import('./Chatting/Chatting.js'),
    loading: MyLoadingComponent
});
const Study = Loadable({
    loader: () => import('./Study/Study.js'),
    loading: MyLoadingComponent
});
const ClassInfo = Loadable({
    loader: () => import('./Study/ClassInfo.js'),
    loading: MyLoadingComponent
});
const PostStudy = Loadable({
    loader: () => import('./PostStudy/PostStudy.js'),
    loading: MyLoadingComponent
});
const MyStudy = Loadable({
    loader: () => import('./MyStudy/MyStudy.js'),
    loading: MyLoadingComponent
});
const MyClassInfo = Loadable({
    loader: () => import('./MyStudy/MyClassInfo.js'),
    loading: MyLoadingComponent
});
const SuperMan = Loadable({
    loader: () => import('./Study/SuperMan.js'),
    loading: MyLoadingComponent
});
const Me = Loadable({
    loader: () => import('./Me/Me.js'),
    loading: MyLoadingComponent
})

class App extends React.Component{
    constructor() {
        super()
    }
    componentDidMount() {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        axios.post("/api/checkToken", {user: user, token: token})
        .then((res) => {
            if(res.data.status != 1) {
                Toast.fail('登录信息过期，请重新登陆', 1)
                setTimeout(function() {
                    window.location.href = '/#/login';
                }, 1000)
            }
        })
        if(user) {
            // 'ws://localhost:5000'
            const socket = io('ws://localhost:5000');
            const me = window.localStorage.getItem('user')
            socket.on(`recmsg${me}`, (data) => {
                // console.log(data)
                this.props.newContent(data)
            })
        }
    }
    render() {
        return (
                    <HashRouter>
                        <div>
                            <Route exact path="/" render={() => 
                                <Redirect to='/home'></Redirect>}>
                            </Route>
                            <Route path='/home' render={() => {return <div>
                                <NavBar
                                    mode="light"
                                    icon={<Icon type="left" />}
                                    style={{'backgroundColor': '#00aaef', 'color': '#fff'}}
                                    onLeftClick={() => window.history.go(-1)}
                                    rightContent={[
                                        <Icon key="1" type="ellipsis" />,
                                    ]}
                                    >校友一帮一</NavBar>
                            </div>}}></Route>
                            <Route path='/home' exact component={Home}></Route>
                            <Route path='/home' component={Footer}></Route>
                            <Route path='/home/study' exact component={Study}></Route>
                            <Route path='/home/study/superMan' exact component={SuperMan}></Route>
                            <Route path='/home/mystudy' exact component={MyStudy}></Route>
                            <Route path='/home/mystudy/MyClassInfo' exact component={MyClassInfo}></Route>
                            <Route path='/home/study/classInfo' component={ClassInfo}></Route>
                            <Route path='/home/postStudy' exact component={PostStudy}></Route>
                            <Route path='/home/shopList' exact component={ShopList}></Route>
                            <Route path='/home/shopPut' exact component={ShopPut}></Route>
                            <Route path='/home/goodInfo' exact component={GoodInfo}></Route>
                            <Route path='/home/chat' exact component={Chat}></Route>
                            <Route path='/chatting' exact component={Chatting}></Route>
                            <Route path='/login' exact component={Logo}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/register' exact component={Logo}></Route>
                            <Route path='/register' exact component={Register}></Route>
                            <Route path='/home/me' exact component={Me}></Route>
                        </div>
                    </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newContent(data) {
            var action = {
                type: 'content',
                value: data
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);