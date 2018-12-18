import React, { Component } from 'react';
import TestFirst from './TestFirst';
import TestSecond from './TestSecond';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { ReducerFirst } from '../store/reducer-test1';
import { ReducerSecond } from '../store/reducer-test2';

export const storeFirst = createStore(ReducerFirst);
export const storeSecond = createStore(ReducerSecond);
 
class App extends Component {
  render() {
    return (
      <div className='container-fluid '>
        <Container>
          <Row className='header justify-content-md-center'>
            <Col  md="auto" className="align-self-center">
                <a className="header-link" href='/'>Home Link</a>
            </Col> 
            <Col md="auto"  className="align-self-center">
                <a className="header-link" href ='https://pixelplex.io '>Pixelplex link</a>
            </Col>              
          </Row>
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