import React from 'react';
import styles from '../../css/footer.less';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../css/iconfont.css';


class Footer extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {

    }
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.box}>
                <NavLink to='/home' exact activeStyle={{color: '#108ee9',fontWeight: 600,
    fontSize: 12}}>
                    <i className='iconfont icon-home'></i>
                    首页
                    </NavLink>
                </div>
                <div className={styles.box}>
                <NavLink to='/home/chat' activeStyle={{color: '#108ee9',fontWeight: 600,
    fontSize: 12}}>
                    <i className='iconfont icon-6'></i>
                    {this.props.unread == 0 ? '': <i className='unread'>{this.props.unread}</i>}
                    消息
                    </NavLink>
                </div>
                <div className={styles.box}>
                <NavLink to='/home/me' activeStyle={{color: '#108ee9',fontWeight: 600,
    fontSize: 12}}>
                    <i className='iconfont icon-wode'></i>
                    我的
                    </NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        unread: state.chatting.unread
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);