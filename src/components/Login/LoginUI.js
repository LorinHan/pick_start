import React from 'react';
import { InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import styles from '../../css/login.less';
import logo from '../../images/logo.png';

export default function LoginUI(props) {
    return (
        <div className={styles.wrapper}>
            <p>登 录</p>
            <img src={logo} alt="" className={styles.logo}/>
            <p className={styles.appName}>校友一帮一</p>
            <WingBlank>
                <InputItem className={styles.input} value={props.user} onChange={(e) => {props.userChange(e)}}>用户名</InputItem>
                <WhiteSpace></WhiteSpace>
                <InputItem className={styles.input} type='password' value={props.pwd} onChange={(e) => {props.pwdChange(e)}}>密码</InputItem>
                <WhiteSpace></WhiteSpace>
                <Button style={{'width': '70%', 'borderRadius': 20, 'margin': '0 auto', 'height': 35, 'lineHeight': '35px', 'fontSize': 14, 'color': '#f2f2f2'}} type='primary' onClick={() => props.login()}>登录</Button>
                <WhiteSpace></WhiteSpace>
                <div className={styles.registerBox}>
                    <a href="/#/register">注册</a>|
                    <a href="#">忘记密码</a>
                </div>
                <div className={styles.splitBox}>
                    <span></span>
                    <p>第三方直接登录</p>
                    <span></span>
                </div>
                <div className={styles.icon}>
                    <a href="#"><i className='iconfont icon-weixin' style={{'color': '#00c900'}}></i></a>
                    <a onClick={() => {
                        // return window.location.href = 'https://graph.qq.com/oauth2.0/authorize?client_id=101583840&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.uncleLorin.cn%3A5000%2F%23%2Fhome', 'oauth2Login_10742' ,'height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=yes';
                        return window.open('https://graph.qq.com/oauth2.0/authorize?client_id=101583840&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.uncleLorin.cn%3A5000%2F%23%2Fhome', 'oauth2Login_10742' ,'height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=no');
                    }}><i className='iconfont icon-qq' style={{'color': '#5eabdf'}}></i></a>
                </div>
            </WingBlank>
        </div>
    )
}