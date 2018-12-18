import React from 'react';

import ReactDOM, {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer';

import App from './components/App';

import './style/index.css';
import './style/slider.css';

export const store = createStore(rootReducer);
render(<Provider store={store}>
        <App /> 
 </Provider>,
 document.getElementById('root'));
