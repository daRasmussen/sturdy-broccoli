import './scss/Calculator.scss';
import React from 'react';
import Display from '../Display/Display'
import Numbers from '../Numbers/Numbers'
import Controls from '../Controls/Controls'

class Calculator extends React.Component {
    static state = {};
    #author = "drGeo";

    constructor(props) {
        super(props);
        this.state = {
            Display: {},
            Numbers: {},
            Controls: {}
        }
    }

    get author() {
        return this.#author;
    }

    render() {

        return (
            <div id="Calculator">
                <Display update="OVERRIDE MESSAGE" />
                <Numbers />
                <Controls/>
            </div>
        )
    }
}

export default Calculator 