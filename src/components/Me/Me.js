import React from 'react';
import axios from 'axios';
import {InputItem, Button, Toast} from 'antd-mobile';
import styles from './me.less';
import { timingSafeEqual } from 'crypto';


export default class Me extends React.Component{
    constructor() {
        super();
        this.state = {
            edit: false,
            operation: '修改',
            btnType: 'primary'
        }
    }

    componentDidMount() {
        const user = window.localStorage.getItem('user');
        axios.get('/api/me?user=' + user).then((res) => {
            const {name, tel, mail, school, help, start, grade, zy} = res.data[0];
            this.setState({name, tel, mail, school, help, start, grade, zy})
        })
    }

    inputChange = (type, value) => {
        this.setState({[type]: value})
    }

    changeInfo = () => {
        if(this.state.operation == '修改') {
            this.setState({edit: true, operation: '提交', btnType: 'warning'})
        } else if(this.state.operation == '提交') {
            const {name, tel, mail, school, grade, zy} = this.state;
            axios.post('/api/changeMyInfo', {name, tel, mail, school, grade, zy}).then((res) => {
                if(res.status == 0) {
                    Toast.fail('数据库出错啦...请稍后重试', 1);
                } else if(res.data.affectedRows == 0) {
                    Toast.fail('数据更新失败...请稍后重试', 1);
                } else {
                    Toast.success('修改成功！请重新登录', 1.5);
                    window.localStorage.removeItem('user');
                    window.location.href = '/#/login'
                }
            })
        }
    }

    render() {
        return (
            <div className={styles.me}>
                <h2>我的资料</h2>
                 <InputItem
                    editable={false}
                    value={this.state.name}
                >用户</InputItem>
                <InputItem
                    editable={this.state.edit}
                    value={this.state.tel}
                    onChange={(e) => {this.inputChange('tel', e)}}
                >手机号码</InputItem>
                <InputItem
                    editable={this.state.edit}
                    value={this.state.mail}
                    onChange={(e) => {this.inputChange('mail', e)}}
                >常用邮箱</InputItem>
                <InputItem
                    editable={this.state.edit}
                    value={this.state.school}
                    onChange={(e) => {this.inputChange('school', e)}}
                >所属学校</InputItem>
                <InputItem
                    editable={this.state.edit}
                    value={this.state.grade}
                    onChange={(e) => {this.inputChange('grade', e)}}
                >年级</InputItem>
                <InputItem
                    editable={this.state.edit}
                    value={this.state.zy}
                    onChange={(e) => {this.inputChange('zy', e)}}
                >专业</InputItem>
                <InputItem
                    editable={false}
                    value={this.state.help + '人'}
                >帮辅人数</InputItem>
                <InputItem
                    editable={false}
                    value={this.state.start + '颗'}
                >帮辅星</InputItem>
                <Button icon={<i className='iconfont icon-tubiaolunkuo_huaban'></i>} type={this.state.btnType} style={{'margin': 10}} onClick={() => this.changeInfo()}>{this.state.operation}</Button>
            </div>
        )
    }
}