import React from 'react';
import { InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

export default function LoginUI(props) {
    return (
        <div>
            <WingBlank>
                <InputItem value={props.user} onChange={(e) => {props.userChange(e)}}>用户</InputItem>
                <WhiteSpace></WhiteSpace>
                <InputItem type='password' value={props.pwd} onChange={(e) => {props.pwdChange(e)}}>密码</InputItem>
                <WhiteSpace></WhiteSpace>
                <Button type='primary' onClick={() => props.login()}>登录</Button>
                <WhiteSpace></WhiteSpace>
                <Button type='primary' href='/#/register'>注册</Button>
            </WingBlank>
        </div>
    )
}