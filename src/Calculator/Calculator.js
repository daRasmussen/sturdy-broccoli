import './scss/Calculator.scss';
import React from 'react';
import Formula from "../Formula/Formula";
import Display from "../Display/Display";
import Buttons from '../Buttons/Buttons';
import Author from '../Author/Author';

class Calculator extends React.Component {
    static id = "Calculator";
    static className = "app";
    static test = "This is a Calculator";

    constructor(props) {
        super(props);
        this.state = {
            currentValue: '123',
            formula: '010'
        }
        this.initialize = this.initialize.bind(this);
    }

    initialize() {
        this.setState({
            currentValue: 'HELLO WORLD!'
        })
    }

    render() {
        const {id, test, className} = Calculator;
        const {state: {currentValue, formula}, initialize} = this;
        return (
            <div id={id} className={className}>
                <h1 id="test">{test}</h1>
                <Formula formula={formula}/>
                <Display currentValue={currentValue}/>
                <Buttons
                    initialize={initialize}
                />
                <Author />
            </div>
        )
    }
}

export default Calculator 