import React from 'react'

class Display extends React.Component {
    #author = "drGeo"
    static id = "display"

    get author() {
        return this.#author;
    }

    render() {
        return (
            <div id={Display.id}>
                <input
                    value={this.props.input}
                />
            </div>
        )
    }
}

export default Display