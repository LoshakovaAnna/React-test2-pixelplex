import React from 'react';

import ReactDOM, {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer-test2';

import App from './components/App';

import './style/index.css';
import './style/slider.css';

render(
        <App /> ,
 document.getElementById('root'));
