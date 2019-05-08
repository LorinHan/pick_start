// 创建默认数据：
const defaultState = {
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
};
// 导出一个箭头函数，其中传入两个参数，一个是存储数据，一个是会话
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'inputFocused': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.focused = !newState.focused;
            newState.mouseIn = newState.focused;
            return newState;
        }
        case 'list': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list = action.value;
            newState.totalPage = Math.floor(newState.list.length / 10);
            return newState;
        }
        case 'hotChange': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.mouseIn = true;
            newState.page += 1;
            if(newState.page > newState.totalPage) {newState.page = 1}
            return newState;
        }
        case 'hotHide': {
            const newState = JSON.parse(JSON.stringify(state));
            newState.mouseIn = false;
            return newState;
        }
        default: 
            return state; 
    }
}