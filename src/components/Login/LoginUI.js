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
                    <i className='iconfont icon-weixin' style={{'color': '#00c900'}}></i>
                    <i className='iconfont icon-qq' style={{'color': '#5eabdf'}}></i>
                </div>
            </WingBlank>
        </div>
    )
}