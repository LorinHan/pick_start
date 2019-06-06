import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd-mobile';
import RcViewer from '@hanyk/rc-viewer'
import styles from '../../css/shopList.less';

class GoodInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            baseUrl: 'http://129.204.193.180:5000'
        }
    }
    componentDidMount = () => {
        this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
        var name = this.props.location.search.substring(6);
        name = decodeURI(name);
        this.props.getInfo(name)
    }

    render() {
        const options={}
        // 由于props中的imgUrl是一个array， 没有map方法。。所以这样去转换，我知道很蠢。。
        var obj = [];
        if(this.props.data.imgUrl) {
            for(var i in this.props.data.imgUrl) {
                obj[i] = this.props.data.imgUrl[i];
            }
        }
        return (
            <div style={{overflow: 'hidden'}}>
                <RcViewer options={options} ref='viewer'>
                    <ul id="images">
                        {obj.map((val, index) => (
                                <img
                                    src={`${this.state.baseUrl}/images/img/${val}`}
                                    alt=""
                                    key={index}
                                    style={{width: '50%'}}
                                />
                            ))}
                    </ul>
                </RcViewer>
                <div className={styles.goodInfo}>
                    <p className={styles.title}>商品描述:</p>
                    <p className={styles.desc}>{this.props.data.desc}</p>
                    <table className={styles.infoTable}>
                        <tbody>
                            <tr>
                                <td>物品名称</td>
                                <td>{this.props.data.name}</td>
                            </tr>
                            <tr>
                                <td>学校</td>
                                <td>{this.props.data.school}</td>
                            </tr>
                            <tr>
                                <td>交易地点</td>
                                <td>{this.props.data.address}</td>
                            </tr>
                            <tr>
                                <td>价格</td>
                                <td>￥{this.props.data.price}</td>
                            </tr>
                            <tr>
                                <td>手机号</td>
                                <td>{this.props.data.tel}</td>
                            </tr>
                            <tr>
                                <td>邮箱</td>
                                <td>{this.props.data.mail}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/chatting?user=${this.props.data.user}`} style={{display: 'block', borderRadius: 15, textAlign:'center', lineHeight: '40px', height:40, width: '90%', backgroundColor: 'rgb(252, 154, 0)', color: '#fff', fontSize: 18, margin: '10px auto'}}><i className='iconfont icon-6'></i> 联系Ta</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.goodInfo.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (name) => {
            axios.post('/api/goodInfo', {name: name}).then((res) => {
                var action = {
                    type: 'getInfo',
                    data: res.data
                };
                dispatch(action);
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodInfo);