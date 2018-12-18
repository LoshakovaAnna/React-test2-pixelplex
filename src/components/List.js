import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

import { ListGroup } from 'react-bootstrap';

class  List  extends Component {  
    
    render() {
        const arrayList =  this.props.list;
      ///  console.log(arrayList);


        var List = arrayList.map(function (el, index){
           // console.log(el + "render");
            return (         
                <Item key={index} text={el}  ind={index}/>
            )
        });
        //console.log(List);
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

export default connect(putStateToProps)(List);/*/

export default List;/*/