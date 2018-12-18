import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

class  List  extends Component {  
    
    render() {
        const arrayList =  this.props.list;
        var List = arrayList.map(function (el, index){
            return (         
                <Item key={index} text={el}  index={index}/>
            )
        });
        return (
            <div>
                <h3>List:</h3>
                <ListGroup> 
                    {List}
                </ListGroup>            
            </div>
        );
    };    
};

const putStateToProps  = (state) =>{
    return {
        list : state.list
    };
};

export default connect(putStateToProps)(List);