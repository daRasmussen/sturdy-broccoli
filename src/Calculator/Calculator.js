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
            currentValue: '0',
            previousValue: '0',
            formula: '0'
        }
        this.maxWarn = this.maxWarn.bind(this);
        this.initialize = this.initialize.bind(this);
    }

    maxWarn() {
        const { state: { currentValue, previousValue}} = this;
        this.setState({
            currentValue: 'LIMIT MET!',
            previousValue: currentValue
        });
        setTimeout(() => this.setState({
            currentValue: previousValue
        }), 1000)
    }

    initialize() {
        this.setState({
            currentValue: '0',
            formula: ''
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
                <Author/>
            </div>
        )
    }
}

export default Calculator 