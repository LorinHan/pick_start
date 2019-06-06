import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import LoginUI from './LoginUI';
import { Toast } from 'antd-mobile';

class Login extends React.Component{
    login = () => {
        // 前端先进行校验
        if(this.props.user.length == 0) {
            return Toast.fail('请输入用户名=_=', 2);
        } else if(this.props.pwd.length == 0) {
            return Toast.fail('请输入密码=_=', 2);
        }
        // 前端校验通过，发送请求
        axios.post('/api/login', {user:this.props.user, pwd: this.props.pwd})
        .then((res) => {
            if(res.data.status == 200) {   // 登录成功，保存token
                localStorage.setItem('user', this.props.user);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('school', res.data.school);
                localStorage.setItem('grade', res.data.grade);
                localStorage.setItem('zy', res.data.zy);
                window.location.href = '/';
            } else {    // 后端信息校验失败，弹出提示
                Toast.fail('用户名或密码错误，请重新输入', 2)
            }
        })
    }

    componentDidMount() {
        // QC.Login({
        //     btnId:"qqLoginBtn",
        //     showModal: false
        // }, res => {
        //     console.log(res);
        // })
    }

    render() {
        return (
            <LoginUI
                login={this.login}
                user={this.props.user}
                pwd={this.props.pwd}
                userChange={this.props.userChange}
                pwdChange={this.props.pwdChange}></LoginUI>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        pwd: state.login.pwd
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userChange(a) {
            dispatch({type: 'userChange', value: a})
        },
        pwdChange(a) {
            dispatch({type: 'pwdChange', value: a})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);