import React from 'react'
import Btn from '../Btn/Btn'
import Numbers from "../Numbers/Numbers";
import Controls from "../Controls/Controls";

class Display extends React.Component {
    #author = "drGeo"
    static id = "display"

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            history: []
        }

        this.change = this.change.bind(this);
        this.do = this.do.bind(this);
    }

    get author() {
        return this.#author;
    }

    change(event) {
        this.setState({
            input: event.target.value
        })
    }

    do(event) {
        const { target : { textContent : input}} = event;
        this.setState({
            input
        })
    }

    render() {
        return (
            <div id={Display.id}>
                <input
                    value={this.state.input}
                    onChange={this.change}
                />
            </div>
        )
    }
}

export default Display