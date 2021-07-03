import './scss/Calculator.scss';
import React from 'react';
import Display from '../Display/Display'
import Numbers from '../Numbers/Numbers'
import Controls from '../Controls/Controls'

import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const reducer = (state = [], action) => {
    const {type, message} = action;
    switch (type) {
        case ADD:
            return [
                ...state,
                message
            ];
        default:
            return state;
    }
};

const store = configureStore({
    reducer
});


class Calculator extends React.Component {
    static state = {};
    #author = "drGeo";
    
    get author() {
        return this.#author;
    }

    render() {

        return (
            <div id="Calculator">
                <Provider store={store}>
                    <Display/>
                </Provider>
                <Numbers/>
                <Controls/>
            </div>
        )
    }
}

export default Calculator 