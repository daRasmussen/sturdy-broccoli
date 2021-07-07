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
    static endsWithOperator = /[x+‑/]$/;
    static endsWithNegativeSign = /\d[x/+‑]‑$/;
    static decimalOperator = /(-?\d+\.?\d*)$/;

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
        this.handleDecimal = this.handleDecimal.bind(this);
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
        const _ = this;
        const {state: {formula: f, previousValue: p, evaluated: _eval }} = _;
        const { endsWithOperator, endsWithNegativeSign } = Calculator;
        _.limitCheck(function() {
            const {target: {value: incoming}} = e;
            _.setState({
                currentValue: incoming,
                evaluated: false
            });
            if(_eval) {
                this.setState( { formula: p + incoming })
            } else if (!endsWithOperator.test(f)) {
                _.setState({
                    previousValue: f,
                    formula: f + incoming
                });
            } else if (!endsWithNegativeSign.test(f)) {
                _.setState({
                    formula:
                        (endsWithNegativeSign.test(f + incoming) ? f : p) + incoming
                });
            } else if (incoming !== '-') {
                this.setState({
                    formula: p + incoming
                })
            }
        });
    }

    initialize() {
        this.setState({
            currentValue: '0',
            previousValue: '0',
            formula: '',
            evaluated: false
        })
    }

    handleDecimal() {
        const { decimalOperator, endsWithOperator } = Calculator;
        const _ = this;
        const { state: { currentValue: c, formula: f, evaluated: _eval }} = _;
        if(_eval === true ) {
            _.setState({
                currentValue: '0',
                formula: '0.',
                evaluated: false
            });
        } else if (!c.includes('.') &&!c.includes('Limit')) {
            _.setState({ evaluated: false });
            if(c.length > 21) {
                _.maxWarn();
            } else if (endsWithOperator.test(f) || (c === '0' && f === '')) {
                _.setState({
                    currentValue: '0.',
                    formula: f + '0.'
                });
            } else {
                _.setState({
                    currentValue: f.match(decimalOperator)[0] + '.',
                    formula: f + '.'
                })
            }
        }

    }

    evaluate() {
        const _ = this;
        const { endsWithOperator } = Calculator
        let { state: { formula : f }} = _;
        _.limitCheck(function() {
            while(endsWithOperator.test(f)) {
                f = f.slice(0, -1);
            }
            f = f
                .replace(/x/g, '*')
                .replace(/-/g, '-')
                .replace('--', '+0+0+0+0+0+0+')
            // eslint-disable-next-line no-eval
            let ans = Math.round(1000000000000 * eval(f)) / 1000000000000;
            _.setState({
                currentValue: `${ans}`,
                formula:
                    f
                        .replace(/x/g, '*')
                        .replace(/-/g, '-')
                        .replace('--', '+0+0+0+0+0+0+')
                        .replace(/([x/+])‑/, '$1-')
                        .replace(/^‑/, '-') + '=' + ans,
                previousValue: ans,
                evaluated: true

            })
        });
    }

    render() {
        const {id, test, className} = Calculator;
        const {state: {currentValue, formula}, initialize, decimal, operators, handleDecimal, evaluate} = this;
        return (
            <div id={id} className={className}>
                <h1 id="test">{test}</h1>
                <Formula formula={formula}/>
                <Display currentValue={currentValue}/>
                <Buttons
                    initialize={initialize}
                    decimal={decimal}
                    operators={operators}
                    handleDecimal={handleDecimal}
                    evaluate={evaluate}
                />
                <Author/>
            </div>
        )
    }
}

export default Calculator 