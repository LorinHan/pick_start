import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ImagePicker, WingBlank, SegmentedControl, Toast, Button, WhiteSpace, InputItem } from 'antd-mobile';
import styles from '../../css/shopList.less';


class ShopPut extends React.Component{
    constructor() {
        super();
        this.state={
            files: [],
            multiple: false,
            name: '',
            desc: '',
            price: '',
            address: ''
        }
    }

    componentDidMount() {
    }

    handleChange = (type, e) => {
        this.setState({
            [type]: e
        })
    }

    onChange = (files, type, index) => {
        // console.log(files, type, index);
        this.setState({
          files,
        });
      }
      onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
      }
    
    goodsPost = () => {
        if(this.state.files.length === 0){
            return Toast.fail('请上传交易物品图片', 2)
        }
        if(this.state.name === ''){
            return Toast.fail('请填写商品名称', 1) 
        }
        if(this.state.desc === ''){
            return Toast.fail('请填写商品描述', 1) 
        }
        if(this.state.price === ''){
            return Toast.fail('请填写商品价格', 1) 
        }
        if(this.state.address === ''){
            return Toast.fail('请填写交易地点', 1) 
        }
        const user = localStorage.getItem('user');
        const name = [];
        for(var i in this.state.name) {
            name.push(this.state.name[i].charCodeAt());
        }
        console.log(name)
        const config = {
            headers:{'Content-Type':'multipart/form-data', 'name': name}
        }; 
        const school = localStorage.getItem('school');
        axios.post('/api/shopPut', {user: user, name: this.state.name, desc: this.state.desc, price: this.state.price, address: this.state.address, school: school}).then((res) => {
            Toast.loading('正在上传图片...', 1);
            setTimeout(() => {
                for(let key in this.state.files){
                    let formData = new FormData();
                    formData.append("file", this.state.files[key].file, this.state.files[key].name);
                    axios.post('api/shopPut/img', formData, config)
                    .then((res) => {
                        if(res.data == '上传失败') {
                            return Toast.fail('图片上传失败', 2)
                        }
                        Toast.success('上传成功！',1);
                    })
                }
            }, 1000)
        })
    }

    render() {
        const { files } = this.state;
            return (
              <div>
                  <WingBlank>
                <SegmentedControl
                  values={['切换到单选', '切换到多选']}
                  selectedIndex={this.state.multiple ? 1 : 0}
                  onChange={this.onSegChange}
                />
                <ImagePicker
                  files={files}
                  onChange={this.onChange}
                  onImageClick={(index, fs) => console.log(index, fs)}
                  selectable={files.length < 7}
                  multiple={this.state.multiple}
                />
              </WingBlank>
              <WhiteSpace></WhiteSpace>
              <InputItem value={this.state.name} onChange={(e) => this.handleChange('name', e)}>商品名称</InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem value={this.state.desc} onChange={(e) => this.handleChange('desc', e)}>商品描述</InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem value={this.state.price} onChange={(e) => this.handleChange('price', e)}>价格</InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem value={this.state.address} onChange={(e) => this.handleChange('address', e)}>交易地点</InputItem>
              <WhiteSpace></WhiteSpace>
              <Button type='primary' onClick={() => this.goodsPost()}>提交</Button>
              </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPut);