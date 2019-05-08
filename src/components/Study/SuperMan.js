import React from 'react';
import axios from 'axios';
import styles from '../../css/home.less';


export default class SuperMan extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('/api/superMan').then((res) => {
            this.setState({data: res.data})
        })
    }

    render() {
        return (
            <div className={styles.superMan}>
                <h1>帮辅名人堂</h1>
                {this.state.data.map((item, index) => {
                    return (
                        <div className={styles.infoBox} key={index}>
                            {index+1 < 4 ? <i className='iconfont icon-guanjun' style={{color: 'orange'}}></i> : <i>{index+1}</i>}
                            <h3>{item.name}</h3>
                            <div>年级：{item.grade}</div>
                            <div>专业：{item.zy}</div>
                            <div className={styles.price}>帮辅人数：{item.help}人</div>
                            <div className={styles.start}>帮辅星：{item.start}颗</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}