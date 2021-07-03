import React from 'react'

class Display extends React.Component {
    static state = {}
    #author = "drGeo"

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            messages: []
        }

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    get author() {
        return this.#author;
    }

    change(event) {
        this.setState({
            input: event.target.value
        })
    }

    submit() {
        const {state: { input: c }} = this;
        this.setState({
            input: '',
            messages: this.state.messages.concat(c)
        })
    }

    render() {
        return (
            <div id="display">
                <h2>Type in a new Message: </h2>
                <input
                    value={this.state.input}
                    onChange={this.change}
                />
                <button
                    onClick={this.submit}
                >
                    Submit
                </button>
                <ul>
                    {
                        this.state.messages.map((message, idx) => {
                            return (
                                <li key={idx}>{message}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Display