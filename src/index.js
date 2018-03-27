import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadCss } from 'esri-loader';

loadCss('https://js.arcgis.com/4.6/esri/css/main.css');

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
