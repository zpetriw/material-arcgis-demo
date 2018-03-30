import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadCss } from 'esri-loader';
import store from './store';

loadCss('https://js.arcgis.com/4.6/esri/css/main.css');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
