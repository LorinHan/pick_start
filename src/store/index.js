import { createStore } from 'redux';  //导入创建store的包
import reducer from './reducer'; // 导入数据驱动文件
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// 创建数据对象，并且将数据驱动传进去，第二个参数是chrome浏览器的扩展程序要求传入的参数
export default store;  //把数据对象暴露出去