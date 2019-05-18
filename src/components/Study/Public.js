import React from 'react';
import CertificateList from './CertificateList.js';
import styles from '../../css/public.less';
import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import { Badge } from 'antd-mobile';

class Public extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        axios.get('/api/infomationList?kind=Office').then((res) => {
            this.props.getList(res.data);
        })
    }

    render() {
        return (
            <div className={styles.wraper}>
                <CertificateList history={this.props.history}></CertificateList>
                <div className={styles.classList}>
                    <Link className={styles.button} to={'/home/postPublic?kind=' + this.props.h3}>发布信息</Link>
                    <select className={styles.select} id="" onChange={(e) => {console.log(e.target.value)}}>
                        <option value="all">全部</option>
                        <option value="help">帮辅他人</option>
                        <option value="need">求助帮辅</option>
                    </select>

                    <div className={styles.list}>
                        <div className={styles.title}>
                            <h2><NavLink to='/home/CertificateList' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>帮辅专区</NavLink></h2>
                            <h2><NavLink to='/home/mystudy' exact activeStyle={{color: '#108ee9',fontWeight: 600}}>我的发布</NavLink></h2>
                        </div>
                        <h3>{this.props.h3}</h3>

                        {this.props.data.map(item => {
                            return (
                                <Link to={'/home/study/classInfo?id=' + item.id} key={item.id}>
                                <div className={styles.infos}>
                                    <div className={styles.infoBox}>
                                        {item.type == 0 ? <Badge text={'寻'} corner>
                                        <h3>{item.class}</h3>
                                        <div>时间：{item.time}</div>
                                        <div>地点：{item.place}</div>
                                        <div className={styles.price}>价格：{item.price == '' || item.price == null ? '无偿' : item.price}</div>
                                        </Badge> : <Badge text={'辅'} corner style={{backgroundColor: '#108ee9'}}>
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        h3: state.study.h3,
        data: state.study.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList(data) {
            dispatch({'type': 'getinfoList', data: data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Public);