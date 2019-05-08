// 创建默认数据：
const defaultState = {
    user: '',
    pwd: ''
};
// 导出一个箭头函数，其中传入两个参数，一个是存储数据，一个是会话
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'userChange': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.user = action.value;
            return newState;
        }
        case 'pwdChange': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.pwd = action.value;
            return newState;
        }
        default: 
            return state; 
    }
}