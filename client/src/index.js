import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore';
import './css/bootstrap/bootstrap.css';
import './css/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(); 
global.STORE = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
