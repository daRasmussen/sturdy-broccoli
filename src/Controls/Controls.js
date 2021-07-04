import React from 'react'
import './scss/Controls.scss'
import Btn from '../Btn/Btn'

const utils_init_constants = (C, N) => {
    let re = new RegExp(/\W+/);
    const {name, sign} = re.test(N) ? C[N] : C[N.toUpperCase()]

    return {
        id: name,
        key: name,
        sign: sign
    }
}

class Controls extends React.Component {
    static state = {}
    static EQUALS = {name: 'equals', sign: '='}
    static equals = utils_init_constants(this, 'EQUALS');
    static ADD = {name: 'add', sign: '+'}
    static add = utils_init_constants(this, 'ADD');
    static SUBTRACT = {name: 'subtract', sign: '-'}
    static subtract = utils_init_constants(this, 'SUBTRACT');
    static MULTIPLY = {name: 'multiply', sign: '*'}
    static multiply = utils_init_constants(this, 'MULTIPLY');
    static DIVIDE = {name: 'divide', sign: '/'}
    static divide = utils_init_constants(this, 'DIVIDE');
    static DECIMAL = {name: 'decimal', sign: '.'}
    static decimal = utils_init_constants(this, 'DECIMAL');
    static CLEAR = {name: 'clear', sign: 'AC'}
    static clear = utils_init_constants(this, 'CLEAR');


    #author = 'drGeo'

    constructor(props) {
        super(props);
        this.state = {
            history: [],
            previous: ""
        }
        this.handle.bind(this)
    }

    get author() {
        return this.#author;
    }

    handle(e) {
        console.log('HANDLE EVENT!')
    }

    render() {
        return (
            <div id="Controls">
                <Btn
                    id={Controls.equals.id}
                    key={Controls.equals.key}
                    sign={Controls.equals.sign}
                    onClick={this.handle}
                />
                <Btn
                    id={Controls.add.id}
                    key={Controls.add.key}
                    sign={Controls.add.sign}
                    onClick={this.handle}
                />
                <Btn
                    id={Controls.subtract.id}
                    key={Controls.subtract.key}
                    sign={Controls.subtract.sign}
                    onClick={this.handle}
                />
                <Btn
                    id={Controls.multiply.id}
                    key={Controls.multiply.key}
                    sign={Controls.multiply.sign}
                    onClick={this.handle}
                />
                <Btn
                    id={Controls.divide.id}
                    key={Controls.divide.key}
                    sign={Controls.divide.sign}
                    onClick={this.handle}
                />
                <Btn
                    id={Controls.decimal.id}
                    key={Controls.decimal.key}
                    sign={Controls.decimal.sign}
                    onClick={this.handle}
                />
                <Btn
                    id={Controls.clear.id}
                    key={Controls.clear.key}
                    sign={Controls.clear.sign}
                    onClick={this.handle}
                />
            </div>
        )
    }
}

export default Controls