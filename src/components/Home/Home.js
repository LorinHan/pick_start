import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Toast } from 'antd-mobile';
import axios from 'axios';
import '../../css/iconfont.css';
import styles from '../../css/home.less';


export default class Footer extends React.Component{
    constructor() {
        super();
        this.state={
            data: ['1', '2', '3'],
            imgHeight: 176,
            baseUrl: 'http://129.204.193.180:5000',
            page: 0,
            news: []
        }
    }
    componentDidMount() {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        axios.post("/api/checkToken", {user: user, token: token})
        .then((res) => {
            if(res.data.status != 1) {
                Toast.fail('登录信息过期，请重新登陆', 1)
                setTimeout(function() {
                    window.location.href = '/#/login';
                }, 1000)
                return
            }
            this.getNewsList();
        })
    }

    getNewsList = () => {
        axios.get('/api/home/news?page=' + this.state.page).then((res) => {
            var data = res.data;
            data.map(item => {
                var reg = new RegExp('"',"g");
                item.imgUrl = item.imgUrl.replace('[', '')
                item.imgUrl = item.imgUrl.replace(']', '')
                item.imgUrl = item.imgUrl.replace(reg, '')
                item.imgUrl = item.imgUrl.split(',')
            });
            this.setState({
                news: this.state.news.concat(data)
            })
        })
    }

    render() {
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 176 }}
                        >
                        <img
                            src={`${this.state.baseUrl}/images/gg${val}.jpg`}
                            alt=""
                            style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                    <div className={styles.mainWorks}>
                        <div className={styles.workBox}>
                            <Link to='/home/study'>
                                <i className='iconfont icon-study' style={{color: 'red'}}></i>
                                <h2>校友帮</h2>
                            </Link>  
                        </div>
                        <div className={styles.workBox}>
                            <Link to='/home/study/superMan'>
                                <i className='iconfont icon-mingrentang' style={{color: 'red'}}></i>
                                <h2>帮辅名人堂</h2>
                            </Link>  
                        </div>
                        <div className={styles.workBox}>
                            <Link to='/home/shoplist'>
                                <i className='iconfont icon-4' style={{color: '#108ee9'}}></i>
                                <h2>校园社区</h2>
                            </Link>  
                        </div>
                        <div className={styles.workBox}>
                            <Link to='/home/shoplist'>
                                <i className='iconfont icon-buygift' style={{color: '#f40'}}></i>
                                <h2>闲置交易</h2>
                            </Link>  
                        </div>
                        <div className={styles.workBox}>
                            <Link to='/home/shoplist'>
                                <i className='iconfont icon-yonggongwancheng' style={{color: 'orange'}}></i>
                                <h2>兼职信息</h2>
                            </Link>  
                        </div>
                        <div className={styles.workBox}>
                            <Link to='/home/shoplist'>
                                <i className='iconfont icon-find' style={{color: '#3f9337'}}></i>
                                <h2>发现未来</h2>
                            </Link>  
                        </div>
                        <div className={styles.workBox}>
                            <Link to='/home/more'>
                                <i className='iconfont icon-more' style={{color: 'skyblue'}}></i>
                                <h2>更多</h2>
                            </Link>  
                        </div>
                    </div>
                    <div className={styles.hot}>
                        {this.state.news.map(item => {
                            return (
                                <a className={styles.news_item} href={item.url} key={item.id}>
                                    <h3 className={styles.news_title}>{item.intro}</h3>
                                    <div className={styles.imgs}>
                                        {item.imgUrl.map((img, index) => {
                                            return (
                                            <div key={index}><img src={img} alt=""/></div>
                                            )
                                        })}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                    <div className={styles.more} onClick={() => {
                        this.setState({page: this.state.page + 1}, function() {
                            this.getNewsList();
                        });
                       
                    }}>加载更多...</div>
            </div>
        )
    }
}