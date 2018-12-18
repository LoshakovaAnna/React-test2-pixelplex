import React, { Component } from 'react';
import TestFirst from './TestFirst';
import TestSecond from './TestSecond';

import { Container, Row, Col } from 'react-bootstrap';

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
          <Row className="test-container">
              <TestFirst />
          </Row>{/*}
          <Row >
            <TestSecond />
          </Row> */}
        </Container>
      </div>
    )
  };
};

export default App;