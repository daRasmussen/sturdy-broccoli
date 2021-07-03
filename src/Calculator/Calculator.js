import './scss/Calculator.scss';
import React from 'react';
import Display from '../Display/Display'
import Numbers from '../Numbers/Numbers'
import Controls from '../Controls/Controls'
import Store from '../Store/Store'
import { Provider } from 'react-redux';

const {store: s} = new Store();

class Calculator extends React.Component {
    static state = {};
    #author = "drGeo";

    get author() {
        return this.#author;
    }

    render() {

        return (
            <div id="Calculator">
                <Provider store={s}>
                    <Display/>
                    <Numbers/>
                    <Controls/>
                </Provider>
            </div>
        )
    }
}

export default Calculator 