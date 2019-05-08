import React from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, Button } from 'antd-mobile';
import axios from 'axios';
import styles from '../../css/chatting.less';
import { from } from 'array-flatten';
import io from 'socket.io-client';

var me = window.localStorage.getItem('user')
const socket = io()

class Chatting extends React.Component{
    constructor() {
        super();
        this.state = {
            to: '',
            myInfo: []
        }
    }
    componentDidMount() {
        this.setState({to: this.props.location.search.substring(6)})
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.location.href = '/#/home'}
                    rightContent={[
                    <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.state.to}</NavBar>
{/* 
                {this.props.myInfo.map((item, index) => {
                    return (
                            <div key={index} className={styles.myinfoBox}>
                                <p className={styles.hisInfo}>{item}</p>
                            </div>
                        )
                })} */}

                {/* {this.props.user.map((item, index) => {
                    if(item.name == this.state.to) {
                        return <div key={index}>
                            {item.info.map((info, index) => {
                            return (
                            <div key={index} className={styles.infoBox}>
                                <p className={styles.hisInfo}>{info}</p>
                            </div>)
                        })}
                        
                        </div>
                    }
                })} */}
                {this.props.user.map((item, index) => {
                    return (
                        <div key={index} className={styles.infoBox}>
                            {item.info != '' ? item.name == this.state.to ? <p className={styles.hisInfo}>{item.info}</p> : !item.name ? <p className={styles.myInfo}>{item.info}</p> : null : null}
                            
                        </div>
                    )
                })}

                <div className={styles.inputBox}>
                    <input type="text" value={this.props.input} onChange={(e) => {this.props.inputChange(e.target.value)}}/>
                    <Button type='primary' onClick={() => this.props.send(this.props.input, this.state.to)}>发送</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.chatting.input,
        user: state.chatting.user,
        content: state.chatting.content,
        myInfo: state.chatting.myInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputChange(val) {
            var action = {
                type: 'inputChange',
                value: val
            };
            dispatch(action);
        },
        send(value, to) {
            socket.emit('sendmsg', {data: value, to, me})
            dispatch({type: 'content', value: {data: value}});
            dispatch({type: 'clearInput'})
        },
        // getHisInfo(name) {
        //     dispatch({type: 'getHisInfo', name})
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatting);