import React from 'react';
import zy from '../../images/zy.jpg';
import gg from '../../images/gg.jpg';
import tz from '../../images/tz.jpg';
import normal from '../../images/normal.jpg';
import px from '../../images/px.jpg';
import { Link } from 'react-router-dom';
import bg from '../../images/background.jpg'

export default class StudyKind extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            <img src={bg} style={{position: 'absolute', width: '100%', height: '100%', backgroundSize: '100% 100%', left: 0, top: 40, zIndex: 0}} alt=""/>
                <div style={{'padding': '15% 0px 20% 0', 'textAlign': 'center', position: 'absolute', zIndex: 999, opacity: .9}}>
                    {/* 专业考证 */}
                    <img src={zy} alt="" style={{'width': '30%', 'marginLeft': '2%', 'borderRadius': 15}}/>
                    {/* 公共证书 */}
                    <Link to='/home/CertificateList?kind=public'>
                        <img src={gg} alt="" style={{'width': '30%', 'marginLeft': '10%', 'borderRadius': 15}}/>
                    </Link> 
                    {/* 拓展技能考证 */}
                    <img src={tz} alt="" style={{'width': '30%', 'marginLeft': '2%', 'marginTop': 20, 'borderRadius': 15}}/>
                    {/* 大学课程 */}
                    <Link to='/home/studyList'>
                        <img src={normal} alt="" style={{'width': '30%', 'marginLeft': '10%', 'marginTop': '10%', 'borderRadius': 15}}/>
                    </Link>
                    <img src={px} alt="" style={{ marginTop: '10%', 'width': '70%', 'borderRadius': 15}}/>
                </div>
            </div>
        )
    }
}