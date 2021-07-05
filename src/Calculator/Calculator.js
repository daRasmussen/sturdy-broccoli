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
        this.state = {
            currentValue: '0',
            previousValue: '0',
            formula: '0'
        }
        this.initialize = this.initialize.bind(this);
        this.decimal = this.decimal.bind(this);
        this.maxWarn = this.maxWarn.bind(this);
        this.operators = this.operators.bind(this);
    }

    limitCheck(fn) {
        const _ = this;
        const {limitText} = Calculator;
        const {state: {currentValue}} = _;
        if (currentValue.includes(limitText) === false) {
            fn();
        }
    }

    maxWarn() {
        const {state: {currentValue: c, previousValue: p}} = this;
        const {limitText} = Calculator;
        this.setState({
            currentValue: limitText,
            previousValue: c
        });
        setTimeout(() => this.setState({
            currentValue: p
        }), 1000)
    }

    decimal(e) {
        const _ = this;
        const {state: {formula: f, currentValue: c, evaluated}} = _;
        _.limitCheck(function () {
            const {limitInt, isOperator, isDecimal} = Calculator;
            const {target: {value: incoming}} = e;
            const {length} = incoming;
            _.setState({evaluated: false})
            if (length > limitInt) {
                _.maxWarn();
            } else if (evaluated) {
                _.setState({
                    currentValue: incoming,
                    formula: incoming !== '0' ? incoming : ''
                });
            } else {
                _.setState({
                    currentValue: c === '0' || isOperator.test(c)
                        ? incoming
                        : c + incoming,
                    formula:
                        c === '0' && incoming === '0'
                            ? f === ''
                              ? incoming
                              : f
                            : isDecimal.test(f)
                            ? f.slice(0, -1) + incoming
                            : f + incoming
                });
            }
        });
    }

    operators(e) {

    }

    initialize() {
        this.setState({
            currentValue: '0',
            previousValue: '0',
            formula: '',
            evaluated: false
        })
    }

    render() {
        const {id, test, className} = Calculator;
        const {state: {currentValue, formula}, initialize, decimal, operators} = this;
        return (
            <div id={id} className={className}>
                <h1 id="test">{test}</h1>
                <Formula formula={formula}/>
                <Display currentValue={currentValue}/>
                <Buttons
                    initialize={initialize}
                    decimal={decimal}
                    operators={operators}
                />
                <Author/>
            </div>
        )
    }
}

export default Calculator 