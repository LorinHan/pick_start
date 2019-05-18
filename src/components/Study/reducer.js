const defaultState = {
    data: [],
    h3: 'Office',
    classList: []
};
// 导出一个箭头函数，其中传入两个参数，一个是存储数据，一个是会话
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'getinfoList': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.data = action.data;
            return newState;
        }
        case 'changeH3': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.h3 = action.h3;
            return newState;
        }
        default: 
            return state; 
    }
}