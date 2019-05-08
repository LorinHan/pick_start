import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
import axios from 'axios';
import styles from '../../css/home.less';


export default class MyClassInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            type: 0,
            classname: '',
            intro: '',
            name: '',
            place: '',
            users: [],
            success: '',
            price: '',
            tel: '',
            time: '',
            username: '',
            show: false,
            getUser: [],
            finishShow: false,
            xxx: ['', '', '', '', ''],
            zl: 0,
            td: 0,
            my: 0
        }
    }
    componentDidMount() {
        axios.get('/api/infomation?id=' + this.props.history.location.search.substring(4))
        .then((res) => {
            const classname = res.data[0].class;
            var users = res.data[0].users;
            console.log(users)
            users = users.substring(1);
            users = users.split(',');
            if(users[0] == ''){users = []}
            const intro = res.data[0].introduce;
            const { type, name, place, success, price, tel, time, username } = res.data[0];
            this.setState({
                classname, type, intro, name, place, users, success, price, tel, time, username
            })
        })
    }

    getUser = (name) => {
        var arr = [name];
        axios.get('/api/getUser?name=' + name).then((res) => {
            arr.push(res.data.data[0])
            this.setState({getUser: arr})
        })
    }
    agree = (name) => {
        if(this.state.success.length != 0) {
            return Toast.fail('只能同意一个人的申请...', 1.5);
        }
        axios.post('/api/agreeUser', {name, id:this.props.history.location.search.substring(4)})
        .then((res) => {
            if(res.data.status != 1) {
                return Toast.fail('操作失败...', 1.5);
            }
            Toast.success('操作成功！', 1.5);
            setTimeout(() => {window.history.go(0)}, 1500);
        })
    }
    finish = () => {
        if(this.state.success == '') {return Toast.fail('目前您没有同意任何人的申请...', 1.5);}
        // this.state.success.substring(1)
        this.setState({finishShow: true})
    }
    wjx(classname, index) {
        this.setState({[classname]: index + 1})
        var dom = document.querySelectorAll(`.${classname} > .wjx`);
        dom[index].textContent = '★'
        dom[index].style.color = 'red';
        for (var i=0;i<index;i++) {
            dom[i].textContent = '★'
            dom[i].style.color = 'red';
        }
        for (var x=index+1;x<5;x++) {
            dom[x].textContent = '☆'
            dom[x].style.color = '#000';
        }
    }

    scoreAdd = () => {
        // console.log(this.state.zl + this.state.my + this.state.td)
        axios.post('/api/scoreAdd', {name: this.state.success.substring(1), start: this.state.zl + this.state.my + this.state.td, id: this.props.history.location.search.substring(4)}).then((res) => {
            if(res.data.status != 1) {
                return Toast.fail('操作失败...', 1.5);
            }
            Toast.success('操作成功！', 1.5);
            setTimeout(() => {window.location.href = '/#/home/mystudy'}, 1500);
        })
    }

    render() {
        return (
            <div>
                <div className={styles.title}>
                    <h2><NavLink to='/home/study' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>帮辅专区</NavLink></h2>
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
                        <p>{this.state.users.map((item, key) => {
                            return (<a key={key} onClick={() => {this.setState({show: true});this.getUser(item)}}>{item}</a>)
                        })}</p>
                    </div>
                    <div className={styles.classinfoBox}>
                        <h2><i className='iconfont icon-tubiaolunkuo_huaban'></i> 同意申请</h2>
                        <p>{this.state.success.substring(1)}</p>
                    </div>
                    <Button onClick={() => this.finish()} style={{display: 'block', borderRadius: 15, textAlign:'center', lineHeight: '50px', height:50, width: '100%', backgroundColor: 'red', color: '#fff', fontSize: 18, marginTop: 10}}>结束帮辅并评价</Button>
                </div>

                {this.state.show ? 
                <div className={styles.agreeBox}>
                    <div onClick={() => {this.setState({show: false})}}>X</div>
                    <h3>姓名：{this.state.getUser[0]}</h3>
                    <p>专业：{this.state.getUser[1] ? this.state.getUser[1].zy : 'xxxx'}</p>
                    <p>帮辅人数：{this.state.getUser[1] ? this.state.getUser[1].help : '0'}人</p>
                    <p>帮辅星：{this.state.getUser[1] ? this.state.getUser[1].start : '0'}颗</p>
                    <p>帮辅指数：{this.state.getUser[1] ? (this.state.getUser[1].start / (this.state.getUser[1].help*15) * 100).toFixed(2) : '0'}分</p>
                    <Button type='primary' onClick={() => this.agree(this.state.getUser[0])}>同意申请</Button>
                </div>
                : null}

                {this.state.finishShow ? 
                <div className={styles.agreeBox}>
                    <div onClick={() => {this.setState({finishShow: false})}}>X</div>
                    <p className='zl'>帮辅质量： {this.state.xxx.map((item, index) => {
                        return (<span key={index} className='wjx' onClick={() => this.wjx('zl', index)}>☆</span>)
                    })}</p>
                    <p className='td'>帮辅态度： {this.state.xxx.map((item, index) => {
                        return (<span key={index} className='wjx' onClick={() => this.wjx('td', index)}>☆</span>)
                    })}</p>
                    <p className='my'>满意程度： {this.state.xxx.map((item, index) => {
                        return (<span key={index} className='wjx' onClick={() => this.wjx('my', index)}>☆</span>)
                    })}</p>
                    <Button type='primary' onClick={() => this.scoreAdd()}>确定</Button>
                </div>
                : null}
            </div>
        )
    }
}
