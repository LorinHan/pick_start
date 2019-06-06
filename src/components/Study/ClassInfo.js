import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
import axios from 'axios';
import styles from '../../css/home.less';


class ClassInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            type: 0,
            classname: '',
            intro: '',
            name: '',
            place: '',
            users: '',
            success: '',
            price: '',
            tel: '',
            time: '',
            username: ''
        }
    }
    componentDidMount() {
        axios.get('/api/infomation?id=' + this.props.history.location.search.substring(4))
        .then((res) => {
            const classname = res.data[0].class;
            const intro = res.data[0].introduce;
            const { type, name, place, users, success, price, tel, time, username } = res.data[0];
            this.setState({
                classname, type, intro, name, place, users, success, price, tel, time, username
            })
        })
    }
    
    apply = () => {
        const name = window.localStorage.getItem('user');
        var users = this.state.users;
        users = users.substring(1);
        users = users.split(',');
        if(this.state.username === name) {
            return Toast.fail('请勿申请您自己发布的帮辅信息...', 2)
        }
        if(users.indexOf(name) != -1) {
            return Toast.fail('您已经申请过了...', 1.5);
        }
        axios.post('/api/apply', {id: this.props.history.location.search.substring(4), name}).then((res) => {
            if(res.data.status != 1) {
                return Toast.fail('申请失败...', 1.5);
            }
            Toast.success('申请成功', 1.5);
            setTimeout(() => {window.location.href = '/#/home/study'}, 1500);
        })
    }

    render() {
        return (
            <div>
                <div className={styles.title}>
                    <h2><NavLink to="#" onClick={() => {window.history.go(-1)}} exact activeStyle={{color: '#108ee9',fontWeight: 600}}>帮辅专区</NavLink></h2>
                    <h2><NavLink to='/home/mystudy' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>我的发布</NavLink></h2>
                </div>
                <div className={styles.classInfo}>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-jiaqileixing'></i> 类型</h2>
                        <p>{this.state.type == 0 ? '学习求助' : '学霸帮辅'}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-kecheng'></i> 课程名称</h2>
                        <p>{this.state.classname}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-wode'></i> 姓名</h2>
                        <p>{this.state.name == '' ? '匿名' : this.state.name}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-jieshao'></i> 说明</h2>
                        <p>{this.state.intro}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-shouji'></i> 联系方式</h2>
                        <p>{this.state.tel}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-iconset0112'></i> 帮辅时间</h2>
                        <p>{this.state.time}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-buygift'></i> 报酬</h2>
                        <p>{this.state.price == '' ? '无偿' : this.state.price == null ? '无偿' : this.state.price}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-didian01'></i> 帮辅地点</h2>
                        <p>{this.state.place}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-shenqingshenpi'></i> 申请者</h2>
                        <p>{this.state.users.substring(1)}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-tubiaolunkuo_huaban'></i> 同意申请</h2>
                        <p>{this.state.success}</p>
                    </div>
                    <Button onClick={() => this.apply()} style={{display: 'block', borderRadius: 10, textAlign:'center', lineHeight: '40px', height:40, width: '90%', backgroundColor: '#FC9A00', color: '#fff', fontSize: 16, margin: '10px auto'}}>发起申请</Button>
                    <Link to={`/chatting?user=test`} style={{display: 'block', borderRadius: 10, textAlign:'center', lineHeight: '40px', height:40, width: '90%', backgroundColor: '#FC9A00', color: '#fff', fontSize: 16, margin: '10px auto'}}><i className='iconfont icon-6' style={{color:'#fff'}}></i> 联系Ta</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassInfo);