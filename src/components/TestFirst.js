import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTextToList  } from '../store/actions-test1';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import List from './List';

class  TestFirst  extends Component {  
    
    constructor(props) {
        super(props);
        this.createNewTextPanel = this.createNewTextPanel.bind(this);
    }
    
    render() {
        return (    
           <React.Fragment>  
               <Container className='test-container'>
                    <Row className='test-title'> 
                        <h2>Test #1</h2>
                    </Row>
                    <Row  >
                        <Col>
                            <Col xs='12'>
                                <input 
                                    className='mb-3 mt-3 wide-element'
                                    type='text' 
                                    placeholder='Enter text' 
                                    id='new-text' 
                                />
                            </Col>
                            <Col xs='6'  className='ml-auto'>
                                <Button 
                                    onClick={this.createNewTextPanel} 
                                    className='wide-element mr-3'
                                >
                                    Add text
                                </Button>
                            </Col>
                        </Col>
                        <Col  >
                            <List />
                        </Col>                            
                    </Row>
                </Container>
            </React.Fragment>
        )
    };

    createNewTextPanel = () =>{
        const InputElement = document.getElementById('new-text');
        var text = InputElement.value;
        this.props.addTextToList(text);
        InputElement.value = '';
    };
};    


const putStateToProps  = (state) =>{
    return {
        list : state.list
    };
};
const  putActionToProps = (dispatch) =>{
    return {
        addTextToList: bindActionCreators (addTextToList, dispatch) 
    }
}

export default connect(putStateToProps, putActionToProps)(TestFirst);