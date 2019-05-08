import { combineReducers } from 'redux';
import loginReducer from '../components/Login/reducer';
import shopList from '../components/ShopList/reducer';
import goodInfo from '../components/GoodInfo/reducer';
import chatting from '../components/Chatting/reducer';
import footer from '../components/Footer/reducer';
import study from '../components/Study/reducer';

export default combineReducers({
    login: loginReducer,
    shopList: shopList,
    goodInfo: goodInfo,
    chatting: chatting,
    footer,
    study
});