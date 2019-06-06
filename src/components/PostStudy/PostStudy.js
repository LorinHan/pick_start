import React from 'react';
import axios from 'axios';
import styles from '../../css/home.less';
import { NavLink } from 'react-router-dom';
import { Radio, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

export default class PostStudy extends React.Component{
    constructor() {
        super();
        this.state = {
            class: '',
            name: '',
            intro: '',
            tel: '',
            time: '',
            types: [
                { type: 0, label: '学习求助' },
                { type: 1, label: '帮辅他人' },
              ],
            type: 0,
            price: '',
            place: ''
        }
    }
    handleInput = (type, e) => {
        this.setState({[type]: e})
    }
    componentDidMount() {
    }
    onChange = (type) => {
        this.setState({
            type,
        });
    };
    postInfo = () => {
        const classname = this.state.class;
        const { name, intro, tel, time, type, price, place } = this.state;
        const username = window.localStorage.getItem('user');
        if(classname === '') {return Toast.offline('请输入课程名称', 1.5)}
        else if(tel == '') {return Toast.offline('请输入联系方式', 1.5)}
        else if(time == '') {return Toast.offline('请输入帮辅时间', 1.5)}
        else if(place == '') {return Toast.offline('请输入帮辅地点', 1.5)}
        axios.post('/api/postInfo', {classname, name, intro, tel, time, type, price, place, username})
        .then((res) => {
            if(res.status != 200 || res.data.status != 1) {
                return Toast.offline('发布失败...', 1.5);
            }
            Toast.success('发布成功！', 1.5);
            setTimeout(function() {
                window.location.href = '/#/home/study';
            }, 1500);
        })
    }
  
    render() { 
        return (
            <div className={styles.postStudy}>
                <div className={styles.title}>
                    <h2><NavLink to='/home/study' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>帮辅专区</NavLink></h2>
                    <h2><NavLink to='/home/mystudy' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>我的发布</NavLink></h2>
                    <h1>请填写你要发布的帮辅信息</h1>
                </div>

                {this.state.types.map(i => (
                <RadioItem key={i.type} checked={this.state.type === i.type} onClick={() => this.onChange(i.type)}>
                    {i.label}
                </RadioItem>
                ))}

                <InputItem
                    clear
                    placeholder='必填项'
                    ref={el => this.autoFocusInst = el}
                    onChange={(e) => this.handleInput('class', e)}
                    value={this.state.class}
                >课程名称</InputItem>
                <InputItem
                    clear
                    placeholder='不填写默认为匿名'
                    ref={el => this.autoFocusInst = el}
                    onChange={(e) => this.handleInput('name', e)}
                    value={this.state.name}
                >你的姓名</InputItem>
                <InputItem
                    clear
                    placeholder='必填项'
                    ref={el => this.autoFocusInst = el}
                    onChange={(e) => this.handleInput('tel', e)}
                    value={this.state.tel}
                >联系方式</InputItem>
                <InputItem
                    clear
                    placeholder='必填项'
                    ref={el => this.autoFocusInst = el}
                    onChange={(e) => this.handleInput('time', e)}
                    value={this.state.time}
                >帮辅时间</InputItem>
                <InputItem
                    placeholder="默认为无偿帮辅"
                    value={this.state.price}
                    onChange={(e) => this.handleInput('price', e)}
                    extra="¥/节"
                >价格</InputItem>
                <InputItem
                    placeholder="请输入帮辅地点"
                    value={this.state.place}
                    onChange={(e) => this.handleInput('place', e)}
                >帮辅地点</InputItem>
                <textarea value={this.state.intro} id="" cols="30" rows="10" onChange={(e) => this.handleInput('intro', e.target.value)} placeholder='帮辅说明（非必填）'></textarea>
                <WhiteSpace></WhiteSpace>
                <Button style={{backgroundColor: 'rgb(252, 154, 0)', color: '#fff'}} onClick={() => this.postInfo()}>确定发布</Button>
            </div>
        )
    }
}