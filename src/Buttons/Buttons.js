import React from 'react';
import './scss/Buttons.scss';

class Buttons extends React.Component {
    #author = 'drGeo'
    static className = 'buttons';
    static test = 'This is the Buttons';

    get author() {
        return this.#author;
    }

    render() {
        const {className, test} = Buttons;
        return (
            <div className={className}>
                <h1 id="test">{test}</h1>
                <button id="seven" onClick={this.props.numbers} value="7">
                    7
                </button>
                <button id="eight" onClick={this.props.numbers} value="8">
                    8
                </button>
                <button id="nine" onClick={this.props.numbers} value="9">
                    9
                </button>
                <button
                    id="divide"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.initialize}
                    value="/"
                >
                    /
                </button>
                <button
                    id="clear"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.initialize}
                    value="C"
                >
                    C
                </button>

                <button
                    id="multiply"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.initialize}
                    value="x"
                >
                    x
                </button>
                <button
                    id="add"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.initialize}
                    value="+"
                >
                    +
                </button>
                <button
                    id="subtract"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.initialize}
                    value="-"
                >
                    -
                </button>
            </div>
        )
    }
}

export default Buttons;