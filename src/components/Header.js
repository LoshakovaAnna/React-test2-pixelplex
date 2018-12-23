import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (        
        <React.Fragment>        
            <Container>
                <Row className='header justify-content-md-center'>
                    <Col  md='auto' className='align-self-center'>
                        <a className='header-link' href='https://loshakovaanna.github.io/React-test2-pixelplex/'>Home Link</a>
                    </Col> 
                    <Col md='auto'  className='align-self-center'>
                        <a className='header-link' href ='https://pixelplex.io '>Pixelplex link</a>
                    </Col>              
                </Row>
            </Container>
        </React.Fragment>
    )
  };
};

export default Header;
