import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../../css/shopList.less';
import Logo from '../Logo/Logo.jsx';

class Chat extends React.Component{
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.resetUnread();
    }

    render() {
        var prev = ''
        return (
            <div className={styles.chat}>
                {this.props.user.map((item, index) => {
                    if(item.name && item.name != prev) {
                        prev = item.name
                        return (
                            <Link to={`/chatting?user=${item.name}`} key={index}>
                                <div className={styles.chatBox}>
                                    <Logo></Logo>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>{item.info}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.chatting.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetUnread() {
            dispatch({type: 'reseatUnread'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);