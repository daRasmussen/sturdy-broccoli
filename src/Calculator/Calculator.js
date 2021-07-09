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
        this.evaluate = this.evaluate.bind(this);
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
        const {state: {formula: f, currentValue: c, evaluated}} = this;
        const {limitInt, isOperator, isDecimal, limitText} = Calculator;
        if (c.includes(limitText) === false) {
            const {target: {value: incoming}} = e;
            const {length} = incoming;
            this.setState({ evaluated: false})
            if (length > limitInt) {
                this.maxWarn();
            } else if (evaluated) {
                this.setState({
                    currentValue: incoming,
                    formula: incoming !== '0' ? incoming : ''
                });
            } else {
                this.setState({
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
        }
    }

    operators(e) {
        const {state: {currentValue: c, formula: f, previousValue: p, evaluated: _eval }} = this;
        const { endsWithOperator, endsWithNegativeSign, limitText } = Calculator;
        if (c.includes(limitText) === false) {
            const {target: {value: incoming}} = e;
            this.setState({
                currentValue: incoming,
                evaluated: false
            });
            if(_eval) {
                this.setState( { formula: p + incoming })
            } else if (!endsWithOperator.test(f)) {
                this.setState({
                    previousValue: f,
                    formula: f + incoming
                });
            } else if (!endsWithNegativeSign.test(f)) {
                this.setState({
                    formula:
                        (endsWithNegativeSign.test(f + incoming) ? p : f) + incoming
                });
            } else if (incoming !== '-') {
                this.setState({
                    formula: f + incoming
                })
            }
        }
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
        const { state: { currentValue: c, formula: f, evaluated: _eval }} = this;
        if(_eval === true ) {
            this.setState({
                currentValue: '0',
                formula: '0.',
                evaluated: false
            });
        } else if (!c.includes('.') &&!c.includes('Limit')) {
            this.setState({ evaluated: false });
            if(c.length > 21) {
                this.maxWarn();
            } else if (endsWithOperator.test(f) || (c === '0' && f === '')) {
                this.setState({
                    currentValue: '0.',
                    formula: f + '0.'
                });
            } else {
                this.setState({
                    currentValue: f.match(decimalOperator)[0] + '.',
                    formula: f + '.'
                })
            }
        }

    }

    evaluate() {
        const { endsWithOperator, limitText } = Calculator
        const { state : { currentValue: c, }} = this;

        if (c.includes(limitText) === false) {
            let { state: { formula : f }} = this;
            while(endsWithOperator.test(f)) {
                f = f.slice(0, -1);
            }
            f = f
                .replace(/x/g, '*')
                .replace(/‑/g, '-')
                .replace('--', '+0+0+0+0+0+0+');
            // eslint-disable-next-line no-eval
            let ans = Math.round(1000000000000 * eval(f)) / 1000000000000;
            this.setState({
                currentValue: ans.toString(),
                formula:
                    f
                        .replace(/\*/g, '⋅')
                        .replace(/-/g, '‑')
                        .replace('+0+0+0+0+0+0+', '‑-')
                        .replace(/([x/+])‑/, '$1-')
                        .replace(/^‑/, '-') + '=' + ans,
                previousValue: ans,
                evaluated: true

            })
        }
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