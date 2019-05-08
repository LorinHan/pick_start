import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Toast } from 'antd-mobile';
import styles from '../../css/shopList.less';

class ShopList extends React.Component{
    constructor() {
        super();
        this.state={
            baseUrl: 'http://129.204.193.180:5000'
        }
    }
    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (
            <div>
                <Button className={styles.getInfo} type='primary' style={{margin: 10}} href='/#/home/shopPut'><i className='iconfont icon-buygift'></i> 上传闲置物品</Button>
                <div className={styles.shopBox}>
                    {this.props.data.map(item => {
                        return (
                            <Link to={`/home/goodInfo?name=${item.name}`} key={item}>
                                <div className={styles.shopItem}>
                                    <img src={`${this.state.baseUrl}/images/img/${item.imgUrl}`} alt=""/>
                                    <span>{item.name}</span><span>￥{item.price}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.shopList.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            const school = localStorage.getItem('school');
            axios.get('/api/goodsList?school=' + school).then((res) => {
                for(var i in res.data) {
                    res.data[i].imgUrl = res.data[i].imgUrl.split(',')[1];
                }
                var action = {
                    type: 'getList',
                    data: res.data
                };
                dispatch(action);
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);