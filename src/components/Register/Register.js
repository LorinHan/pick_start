import React from 'react';
import axios from 'axios';
import { List, InputItem, Radio, WhiteSpace, Button, Picker } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import styles from '../../css/login.less';
import logo from '../../images/logo.png';

const RadioItem = Radio.RadioItem;
  
  const school = [
    {
      label:
      (<div>
        <span>厦门华厦学院</span>
      </div>),
      value: '厦门华厦学院',
    },
    {
      label:
      (<div>
        <span>厦门工商旅游学院</span>
      </div>),
      value: '厦门工商旅游学院',
    },
    {
      label:
      (<div>
        <span>厦门理工学院</span>
      </div>),
      value: '厦门理工学院',
    },
  ];
  
class Register extends React.Component{
    constructor() {
        super();
        this.state={
            user: '',
            pwd: '',
            surepwd: '',
            type: 'Boss',
            school: '',
            tel: '',
            mail: '',
            grade: '',
            zy: ''
        }
    }
    // 输入框和身份状态发生改变时设置state
    handleChange = (type, e) => {
        this.setState({
            [type]: e
        })
    }
    onChangeSchool = (school) => {
        this.setState({
            school: school,
          });
      };
    // 点击登录按钮时
    register = () => {
        // 校验
        if(this.state.user === '') {
            return Toast.fail('用户名不能为空，请输入用户名', 2)
        } else if(this.state.pwd === ''){
            return Toast.fail('密码不能为空，请输入密码', 2)
        } else if(this.state.surepwd != this.state.pwd) {
            return Toast.fail('密码与确认密码不一致，请检查', 2)
        } else if(this.state.school === '') {
            return Toast.fail('请填写您所属的学校', 2)
        }
        this.setState({
            school: this.state.school[0]
        }, function() {
            axios.post('/api/register', {data:this.state})
            .then((res) => {
                if(res.data.msg == '用户名重复') {
                    return Toast.fail('该用户名已存在，请重新输入', 2)
                } else if (res.data.msg == '后端出错了') {
                    return Toast.fail('服务器异常，请稍后重试', 2)
                }
                window.localStorage.setItem('user', res.data.user);
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('school', res.data.school);
                window.location.href = '/';
            })
        })
        
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <p>注 册</p>
                <img src={logo} alt="" className={styles.logo}/>
                    <InputItem className={styles.input} value={this.state.user} onChange={(e) => this.handleChange('user', e)}>用户名</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem className={styles.input} value={this.state.pwd} type='password' onChange={(e) => this.handleChange('pwd', e)}>密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem className={styles.input} value={this.state.surepwd} type='password' onChange={(e) => this.handleChange('surepwd', e)} placeholder='请再次输入您的密码'>确认密码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Picker
                    data={school}
                    value={this.state.school}
                    cols={1}
                    onChange={this.onChangeSchool}
                    style={{'backgroundColor': 'rgba(0, 0, 0, 0)'}}
                    >
                    <List.Item arrow="horizontal" className={styles.input}>请选择学校</List.Item>
                    </Picker>
                    {/* <WhiteSpace></WhiteSpace>
                    <InputItem value={this.state.tel} onChange={(e) => this.handleChange('tel', e)}>手机号码</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem value={this.state.mail} onChange={(e) => this.handleChange('mail', e)}>邮箱</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem value={this.state.grade} onChange={(e) => this.handleChange('grade', e)}>年级</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem value={this.state.zy} onChange={(e) => this.handleChange('zy', e)}>专业</InputItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem checked={this.state.type=='Boss'} onChange={() => this.handleChange('type', 'Boss')}>商家或组织</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <RadioItem checked={this.state.type=='genius'} onChange={() => this.handleChange('type', 'genius')}>学生</RadioItem>
                    <WhiteSpace></WhiteSpace> */}
                    <Button style={{'width': '70%', 'borderRadius': 20, 'margin': '5% auto', 'height': 35, 'lineHeight': '35px', 'fontSize': 14, 'color': '#f2f2f2'}} type='primary' href='/#/register' onClick={() => this.register()}>注册</Button>
            </div>
        )
    }
}

export default Register;