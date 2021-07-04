import './scss/Calculator.scss';
import React from 'react';
import {Provider, connect} from 'react-redux';
import Display from "../Display/Display";
import Store from "../Store/Store";

import mapStateToProps from '../Store/mapStateToProps'
import mapDispatchToProps from '../Store/mapDispatchToProps'

const {store: s} = new Store();

const D = connect(mapStateToProps, mapDispatchToProps)(Display)

class Calculator extends React.Component {
    #author = "drGeo";
    static id = "Calculator"
    static test = "This is a Calculator"
    get author() {
        return this.#author;
    }

    render() {
        const { id, test } = Calculator;
        return (
            <div id={id}>
                <h1>{test}</h1>
                <Provider store={s}>
                    <D />
                </Provider>
            </div>
        )
    }
}

export default Calculator 