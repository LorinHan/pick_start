// 创建默认数据：
const defaultState = {
    input: '',
    content: [],
    unread: 0,
    user: [{name: '', info: ''}],
    has: false,
    myInfo: [],
    HisInfo: [],
    roomInfo: []
};
// 导出一个箭头函数，其中传入两个参数，一个是存储数据，一个是会话
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'inputChange': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.input = action.value;
            return newState;
        }
        case 'content': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.content.push(action.value);
            newState.unread = newState.unread + 1;
            newState.user.push({name: action.value.me, info: action.value.data});
            return newState;
        }
        case 'reseatUnread': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.unread = 0;
            return newState;
        }
        case 'myInfo': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.myInfo.push(action.value);
            return newState;
        }
        case 'getHisInfo': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.user.map(item => {
                if(item.name == action.name) {
                    newState.HisInfo = item.info;
                }
            });
            return newState;
        }
        case 'clearInput': {
            var newState = JSON.parse(JSON.stringify(state));
            newState.input = '';
            return newState;
        }
        default: 
            return state; 
    }
}