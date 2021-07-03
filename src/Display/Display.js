import React from 'react'

class Display extends React.Component {
    #author = "drGeo"

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
            <div id="display">
                <input
                    value={this.state.input}
                    onChange={this.change}
                />
            </div>
        )
    }
}

export default Display