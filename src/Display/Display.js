import React from 'react'

class Display extends React.Component {
    static state = {}
    #author = "drGeo"

    constructor(props) {
        super(props)
        this.state = {
            display: "This is a Calculator"
        }

        this.update = this.update.bind(this)
    }

    get author() {
        return this.#author;
    }

    update(display) {
        this.setState({
            display
        })
    }

    render() {
        return (
            <div id="display">
                {this.state.display}
            </div>
        )
    }
}

export default Display