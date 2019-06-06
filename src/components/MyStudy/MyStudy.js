import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Badge, Button, SearchBar } from 'antd-mobile';
import axios from 'axios';
import styles from '../../css/home.less';


export default class MyStudy extends React.Component{
    constructor() {
        super();
        this.state = {
            myClass: []
        }
    }
    componentDidMount() {
        const name = window.localStorage.getItem('user');
        axios.get('/api/myClass?name=' + name).then((res) => {
            this.setState({
                myClass: res.data.data
            })
        })
    }

    render() {
        return (
            <div style={{marginBottom: 50}}>
                <div className={styles.title}>
                    <h2><NavLink to='/home/study' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>帮辅专区</NavLink></h2>
                    <h2><NavLink to='/home/mystudy' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>我的发布</NavLink></h2>
                </div>

                <h2><Button href='/#home/postStudy' type='primary' className={styles.postBtn}>发布信息</Button></h2>
                <SearchBar placeholder="搜索课程名称" maxLength={8} onSubmit={(e) => {console.log(e)}} />

                {this.state.myClass.map(item => {
                    return (
                        <Link to={'/home/mystudy/MyClassInfo?id=' + item.id} key={item.id}>
                        <div className={styles.infos}>
                            <div className={styles.infoBox}>
                                {item.type == 0 ? <Badge text={'寻'} corner>
                                <h3>{item.class}</h3>
                                <div>时间：{item.time}</div>
                                <div>地点：{item.place}</div>
                                <div className={styles.price}>价格：{item.price == '' || item.price == null ? '无偿' : item.price}</div>
                                </Badge> : <Badge text={'辅'} corner style={{backgroundColor: '#FFE508'}}>
                                <h3>{item.class}</h3>
                                <div>时间：{item.time}</div>
                                <div>地点：{item.place}</div>
                                <div className={styles.price}>价格：{item.price == '' || item.price == null ? '无偿' : item.price}</div>
                                </Badge>}
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
