import React, { Component } from 'react';
import TestFirst from './TestFirst';
import TestSecond from './TestSecond';
import Header from './Header';
import { Container} from 'react-bootstrap';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReducerFirst } from '../store/reducer-test1';
import { ReducerSecond } from '../store/reducer-test2';

export const storeFirst = createStore(ReducerFirst);
export const storeSecond = createStore(ReducerSecond);
 
class App extends Component {
  render() {
    return (
      <div className='container-fluid '>
        <Container>
          <Header />
          <Provider store={storeFirst}>
            <TestFirst /> 
          </Provider>
          <Provider store={storeSecond}>
            <TestSecond /> 
          </Provider>
        </Container>
      </div>
    )
  };
};

export default App;