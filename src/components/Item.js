import React, { Component} from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteItem } from '../store/actions-test1';
import { Button, ListGroupItem , Row, Col} from 'react-bootstrap';

class  Item  extends Component {  
    render() {
        return (     
            <ListGroupItem> 
                <Row className='show-grid'>
                    <Col> <p className='wide-element'> {this.props.text}</p></Col>
                    <Col>
                        <Button 
                            className='delet-button' 
                            value = {this.props.index}
                            onClick={this.deletemItem}
                        >
                            delete text
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>           
        );
    };  

    deletemItem = (event) => {
        this.props.deleteItem(event.target.value);
    };
};

const putStateToProps  = (state) =>{
    return {
        list : state.list
    };
};

const  putActionToProps = (dispatch) =>{
    return {
        deleteItem: bindActionCreators (deleteItem, dispatch) 
    }
};

export default  connect(putStateToProps, putActionToProps)(Item);
  