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
    static limitText = 'Limit Met!';
    static limitInt = 21;
    static isOperator = /[x/+‑]/;
    static isDecimal = /([^.0-9]0|^0)$/;

    constructor(props) {
        super(props);

        this
            .state = {
            currentValue: '0',
            previousValue: '0',
            history: [],
            formula: '0'
        }
        this.initialize = this.initialize.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
        this.maxWarn = this.maxWarn.bind(this);
    }

    maxWarn() {
        const {state: {currentValue, previousValue}} = this;
        const {limitText} = Calculator;
        this.setState({
            currentValue: limitText,
            previousValue: currentValue
        });
        setTimeout(() => this.setState({
            currentValue: previousValue
        }), 1000)
    }

    handleNumbers(e) {
        const _ = this;
        const {limitText, limitInt} = Calculator;
        const {state: {currentValue, evaluated}} = _;
        if (currentValue.includes(limitText) === false) {
            const {target: {value: currentValue}} = e;
            const {length} = currentValue;
            _.setState({evaluated: false})
            if (length > limitInt) {
                _.maxWarn();
            } else if (evaluated) {
                _.setState({
                    currentValue,
                    formula: currentValue !== '0' ? currentValue : ''
                });
            } else {
                // const {isOperator, isDecimal} = Calculator;
                _.setState({
                    currentValue,
                    formula: currentValue
                })
            }
        }
    }

    initialize() {
        this.setState({
            currentValue: '0',
            previousValue: '0',
            history: [],
            formula: '',
            evaluated: false
        })
    }

    render() {
        const {id, test, className} = Calculator;
        const {state: {currentValue, formula}, initialize, handleNumbers} = this;
        return (
            <div id={id} className={className}>
                <h1 id="test">{test}</h1>
                <Formula formula={formula}/>
                <Display currentValue={currentValue}/>
                <Buttons
                    initialize={initialize}
                    decimal={handleNumbers}
                />
                <Author/>
            </div>
        )
    }
}

export default Calculator 