import './scss/Calculator.scss';
import React from 'react';
import {Provider, connect} from 'react-redux';
import Display from "../Display/Display";
import Store from "../Store/Store";

import mapStateToProps from '../Store/mapStateToProps'
import mapDispatchToProps from '../Store/mapDispatchToProps'

const {store: s} = new Store();

const Container = connect(mapStateToProps, mapDispatchToProps)(Display)

class Calculator extends React.Component {
    #author = "drGeo";

    get author() {
        return this.#author;
    }

    render() {
        return (
            <div id="Calculator">
                <h1>This is a Calculator</h1>
                <Provider store={s}>
                    <Container/>
                </Provider>
            </div>
        )
    }
}

export default Calculator 