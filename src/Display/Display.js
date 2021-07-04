import React from 'react'

class Display extends React.Component {
    #author = "drGeo"
    static id = "display"
    static className = "screen"
    static test = "This is the Display"
    static currentValue;

    get author() {
        return this.#author;
    }

    render() {
        const {id, className, test} = Display;
        return (
            <div id={id} className={className}>
                <h1>{test}</h1>
                {this.props.currentValue}
            </div>
        )
    }
}

export default Display