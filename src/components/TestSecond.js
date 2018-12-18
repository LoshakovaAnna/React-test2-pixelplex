import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setNewStep, getSavedStep} from '../store/actions-test2';
import {  Row, Col, Container } from 'react-bootstrap';

//import List from './List';
//import './slider.css';

class  TestSecond extends Component {  

  constructor(props) {
    super(props);
    this.props.getSavedStep(); 
    this.timerStart = this.timerStart.bind(this);
  }

    timerStart(interval) {
        clearInterval(this.timer);
        this.timer = setInterval(
            () => this.handleSelect(),
            interval
        );
    }
    render() {
      
        const defaultStepValue = this.props.step;
        this.timerStart(defaultStepValue);
            return (    
                <React.Fragment> 
                    <Container>
                    <Row className="test-title"> 
                        <h2>Test #2</h2>
                    </Row>
                    <Row>
                        <Col>
                            <input type="range" min="0" max="5000"
                                value={this.props.step} 
                                onChange={this.handlerChange} step="100" className="slider" id="myRange"/>
                                <Row>
                                <Col md="auto" className="mr-auto">0</Col>
                                <Col md="auto" className="ml-auto">5000</Col>
                                </Row>
                            <p >Value: <span id="demo">{this.props.step}</span></p>
                        </Col>
                    <Col xs="6" >
                        <p className="text-center">Counter:</p>
                        <p className="text-center" id="counter">0</p>
                    </Col>
                    </Row>
                    </Container>
                </React.Fragment>
            )
        };

        handlerChange = () => {
            var slider = document.getElementById("myRange");
         
            const setStep = this.props.setNewStep;
            setStep(slider.value);
        }
        handleSelect = () => {
            const count = document.getElementById("counter").textContent;
            var slider = document.getElementById("myRange").value;
         // console.log(slider + "update cont (summ)");
            let newCount = parseInt(count) + parseInt(slider) ;
            const  el = document.getElementById("counter");
            el.textContent = newCount;
           
        }

};    


const putStateToProps  = (state) =>{
    return {
        step : state.step
    };
};
const  putActionToProps = (dispatch) =>{
    return {
        setNewStep: bindActionCreators (setNewStep, dispatch),
        getSavedStep: bindActionCreators (getSavedStep, dispatch)
    }
}
  

export default connect(putStateToProps, putActionToProps)(TestSecond);