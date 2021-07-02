import './scss/Numbers.scss'
import React from 'react'
import Btn from '../Btn/Btn'

const nbrIds = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];

class Numbers extends React.Component {
    static state = {}
    #author = 'drGeo'

    constructor(props) {
        super(props)
        this.state = {
            history: [],
            previous: 0,
        }

        this.opi = this.opi.bind(this);
    }

    get author() {
        return this.#author;
    }

    get current() {
        const {state: {history: h}} = this
        return h[h.length - 1]
    }

    get history() {
        return this.state.history;
    };

    get previous() {
        return this.state.previous;
    }
    
    opi(e) {
        const {target: {innerHTML: v}} = e;
        const {state: {history: h}} = this;
        h.push(v);
        this.setState({
            previous: v
        })
        console.log('history: ', this.state.history)
        console.log('previous: ', this.state.previous)
        console.log('current: ', this.current)
    }

    render() {
        return nbrIds.map((nbr, index) => <Btn className="numbers" id={nbr} key={nbr} sign={index} onClick={this.opi}/>)
    }
}

export default Numbers