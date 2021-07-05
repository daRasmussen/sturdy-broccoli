import React from 'react';

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
                <button
                    id="clear"
                    className={[className, 'ac'].join(" ")}
                    onClick={this.props.initialize}
                    value="AC"
                >
                    AC
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