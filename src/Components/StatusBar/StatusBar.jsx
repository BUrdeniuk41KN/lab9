import React from 'react';
import {toggleTrafic, changeColor} from './Actions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const StatusBar = () => {
    const typeOBJ = useSelector(state => state.StatusBarState.toggleTraficType);
    const selectedOPred = useSelector(state => state.StatusBarState.redColor);
    const selectedOPyelow = useSelector(state => state.StatusBarState.yelowColor);
    const selectedOPgreen = useSelector(state => state.StatusBarState.greenColor);
    const dispatch = useDispatch();

    


    const hlColor = (color) => {
        dispatch(changeColor(color));
    };
    
    return (
        <div>
            <h4>Side bar</h4> 
            <p>{"Mode vertical: " +  typeOBJ}</p>
            <h4>Change color</h4> 
            <Form>
                
                <Form.Check
                type="radio"
                id="option1"
                label={"Red: " + selectedOPred.coutntActive}
                name="Red"
                value="red"
                checked={selectedOPred.activeNow === true}
                onChange={() => {}}
                onClick={() => hlColor("red")}
                />
                <Form.Check
                type="radio"
                id="option2"
                label={"Yelow: " + selectedOPyelow.coutntActive}
                name="yelow"
                value="yelow"
                checked={selectedOPyelow.activeNow === true}
                onChange={() => {}}
                onClick={() => hlColor("yelow")}
                />
                <Form.Check
                type="radio"
                id="option3"
                label={"Green: " + selectedOPgreen.coutntActive}
                name="green"
                value="green"
                checked={selectedOPgreen.activeNow === true}
                onChange={() => {}}
                onClick={() => hlColor("green")}
                />
            </Form>
        </div>
    );
}

export default StatusBar;
