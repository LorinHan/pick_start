import React from 'react';
import {NavLink} from 'react-router-dom';
import sty from './Header.less';

export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            startX: 0,
            x:0,
            disx: 0
        };
    }

    handleStart = (e) => {
        e.preventDefault();     
        this.setState({  
            startX : e.targetTouches[0].clientX,
            x:0
        });
    }

    handleTouchMove = (e) => {
        const startX = this.state.startX;//取得初始坐标和屏幕可视宽高     
        var dis = e.touches[0].clientX - startX
        this.setState({
            x: dis
        });
        var fuck = document.getElementById('fuck');
        fuck.style.left = this.state.disx + dis + 'px';
    }

    handleEnd = () => {
        if(this.state.disx + this.state.x > 0) {  // 不知道为什么，这里设置disx=0是成功的，但是页面没有更新
            this.setState({disx: 0}, function() {document.getElementById('fuck').style.left='0px'})
        } else if(this.state.disx + this.state.x < -280) {
            this.setState({disx: -280}, function() {document.getElementById('fuck').style.left='-280px'})
        } else {
            this.setState({
                disx: this.state.disx + this.state.x
            })
        } 
    }

    render() {
        return(
            <div className={sty.header}>
                <ul id='fuck' style={{position: 'absolute', left: this.state.disx}} onTouchStart={e => {this.handleStart(e)}} onTouchMove={e => this.handleTouchMove(e)} onTouchEnd={() => this.handleEnd()}>
                    <li>
                        <NavLink to='/home' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>推荐</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/studyList' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>校友帮辅导</NavLink>
                    </li>
                    {/* 这小子比较麻烦，带了参数不好识别是否激活 */}
                    <li>
                        <NavLink isActive={(match, location) => {
                            if(location.pathname == '/home/CertificateList') {
                                return true;
                            }
                        }} to='/home/CertificateList?kind=public' activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>公共证书</NavLink>
                    </li>

                    <li>
                        <NavLink to='#' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>专业证书</NavLink>
                    </li>
                    <li>
                        <NavLink to='#' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>技能拓展</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/study/superMan' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>名人堂</NavLink>
                    </li>
                    <li>
                        <NavLink to='#' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>发现未来</NavLink>
                    </li>
                    <li>
                        <NavLink to='#' exact activeStyle={{color: '#FC9A00', borderBottom: '2px solid #FC9A00', fontWeight: 600}}>意见反馈</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}