import React from 'react'; 
import ReactDom from 'react-dom';
import './css/reset.css';
import store from './store'
import { Provider } from 'react-redux';
// import './static/iconfont/iconfont.css';

import App from './components/App.jsx';
ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
);