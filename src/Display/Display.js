import React from 'react'
import Btn from '../Btn/Btn'

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
    }

    get author() {
        return this.#author;
    }

    change(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div id={Display.id}>
                <input
                    value={this.state.input}
                    onChange={this.change}
                />
                <Btn
                    id="test"
                    key="test"
                    sign="SUBMIT"
                    onClick={this.change}
                />
            </div>
        )
    }
}

export default Display