import React from 'react';
import { Accordion, List, Toast } from 'antd-mobile';
import axios from 'axios';
import { connect } from 'react-redux';

class CertificateList extends React.Component{
    constructor() {
        super();
        this.state = {
            certificateList: []
        }
    }

    componentDidMount() {
        const kind = this.props.history.location.search.substring(6);
        axios.get('/api/study/certificateList?kind=' + kind)
        .then((res) => {
            if(res.data.status == 0) {
                return Toast.fail('数据库查询失败，请稍后重试', 2)
            }
            res.data.map(item => {
                if(item.second == '' || item.second == null) item.second = item.second
                else {
                    item.second = item.second.split(',')
                }
            });
            this.setState({certificateList: res.data});
        })
        .catch((err) => {
            Toast.fail('数据库查询失败，请稍后重试', 2)
        })
    }

    onChange = (key) => {
        console.log(key);
    }
    getList = (kind) => {
        axios.get('/api/infomationList?kind=' + kind).then((res) => {
            this.props.getList(res.data);
        })
    }

    render() {
        return (
            <div style={{position: 'absolute', width: '28%', height: '100%', boxShadow: '2px 2px 2px #ccc',  marginBottom: 50}}>
                <div>
                    <Accordion defaultActiveKey='3' className="my-accordion" onChange={this.onChange}>
                        {this.state.certificateList.map(item => {
                            if(item.second == '' || item.second == null) {
                                return (
                                    <Accordion.Panel header={item.name} key={item.id}>
                                        <List className="my-list">
                                            <List.Item onClick={() => {this.props.changeH3(item.name);this.getList(item.name);}}>{item.name}</List.Item>
                                        </List>
                                    </Accordion.Panel>
                                )
                            } else {
                                return (
                                    <Accordion.Panel header={item.name} key={item.id}>
                                        <List className="my-list">
                                        {item.second.map(secItem => {
                                            return <List.Item onClick={() => {
                                                this.props.changeH3(secItem);
                                                this.getList(secItem);
                                            }} key={secItem}>{secItem}</List.Item>
                                        })}
                                        </List>
                                    </Accordion.Panel>
                                )
                            }
                        })}
                    </Accordion>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeH3(data) {
            dispatch({'type': 'changeH3', h3: data})
        },
        getList(data) {
            dispatch({'type': 'getinfoList', data: data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificateList);