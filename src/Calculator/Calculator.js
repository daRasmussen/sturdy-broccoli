import './scss/calc.scss';
import React from 'react';
import Btn from '../Btn/Btn'

class Calculator extends React.Component {
    static state = {};
    #author = "drGeo";

    constructor(props) {
        super(props);
        this.state = {
            initial: 0,
            current: 0
        }

        this.cls = this.cls.bind(this);
        this.nin = this.nin.bind(this);
        this.opi = this.opi.bind(this);
        this.eq = this.eq.bind(this);
    }

    get author() {
        return this.#author;
    }

    pi(n) {
        const base = 10;
        return Number.parseInt(n, base);
    }

    cls() {
        this.setState({
            current: this.state.initial
        })
    }

    nin(e) {
        const {target: {innerHTML: value}} = e;
        const {pi, state: {current: c, initial: i}} = this;

        this.setState({
            current: pi(c) === pi(i) ? value : pi(c) + pi(value)
        })
    }

    opi(e) {
        const {target: {innerHTML: v}} = e;
        const {state: {current: c}} = this;

        this.setState({
            current: c + v
        })
    }

    eq() {
        const {state: {current: c}} = this;
        this.setState({
            // eslint-disable-next-line no-eval
            current: eval(c)
        })
    }

    render() {

        return (
            <div id="Calculator">
                <h1>This is a Calculator</h1>
                <Btn
                    id="equals"
                    sign="="
                    onClick={this.eq}
                />
            </div>
        )
    }
}

export default Calculator 