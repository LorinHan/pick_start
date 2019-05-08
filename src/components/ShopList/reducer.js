// 创建默认数据：
const defaultState = {
    data: []
};
// 导出一个箭头函数，其中传入两个参数，一个是存储数据，一个是会话
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'getList': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.data = action.data;
            return newState;
        }
        default: 
            return state; 
    }
}