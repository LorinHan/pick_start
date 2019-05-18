import React from 'react';
import zy from '../../images/zy.jpg';
import gg from '../../images/gg.jpg';
import tz from '../../images/tz.jpg';
import normal from '../../images/normal.jpg';
import px from '../../images/px.jpg';
import { Link } from 'react-router-dom';

export default class StudyKind extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{'padding': '10px 0px 20% 0', 'textAlign': 'center'}}>
                {/* 专业考证 */}
                <img src={zy} alt="" style={{'width': '45%', 'borderRadius': 15, 'boxShadow': '0px 0px 10px #333'}}/>
                {/* 公共证书 */}
                <Link to='/home/CertificateList?kind=public'>
                    <img src={gg} alt="" style={{'width': '45%', 'marginLeft': '4%', 'borderRadius': 15, 'boxShadow': '0px 0px 10px #333'}}/>
                </Link> 
                {/* 拓展技能考证 */}
                <img src={tz} alt="" style={{'width': '45%', 'marginTop': 20, 'borderRadius': 15, 'boxShadow': '0px 0px 10px #333'}}/>
                {/* 大学课程 */}
                <Link to='/home/studyList'>
                    <img src={normal} alt="" style={{'width': '45%', 'marginLeft': '4%', 'marginTop': 20, 'borderRadius': 15, 'boxShadow': '0px 0px 10px #333'}}/>
                </Link>
                <img src={px} alt="" style={{ marginTop: '4%', 'width': '80%', 'borderRadius': 15, 'boxShadow': '0px 0px 10px #333'}}/>
            </div>
        )
    }
}