import React from 'react';
import './scss/Buttons.scss';

class Buttons extends React.Component {
    static className = 'buttons';
    static test = 'This is the Buttons';

    render() {
        const {className, test} = Buttons;
        return (
            <div className={className}>
                <h1 id="test">{test}</h1>
                <button id="seven" onClick={this.props.decimal} value="7">
                    7
                </button>
                <button id="eight" onClick={this.props.decimal} value="8">
                    8
                </button>
                <button id="nine" onClick={this.props.decimal} value="9">
                    9
                </button>
                <button
                    id="divide"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.operators}
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
                <button id="four" onClick={this.props.decimal} value="4">
                    4
                </button>
                <button id="five" onClick={this.props.decimal} value="5">
                    5
                </button>
                <button id="six" onClick={this.props.decimal} value="6">
                    6
                </button>
                <button
                    id="multiply"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.operators}
                    value="x"
                >
                    x
                </button>
                <button id="one" onClick={this.props.decimal} value="1">
                    1
                </button>
                <button id="two" onClick={this.props.decimal} value="2">
                    2
                </button>
                <button id="three" onClick={this.props.decimal} value="3">
                    3
                </button>
                <button
                    id="subtract"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.operators}
                    value="-"
                >
                    -
                </button>
                <button id="zero" onClick={this.props.decimal} value="0">
                    0
                </button>
                <button id="decimal" onClick={this.props.handleDecimal} value=".">
                    .
                </button>
                <button
                    id="percent"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.operators}
                    value="%"
                >
                    %
                </button>
                <button
                    id="add"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.operators}
                    value="+"
                >
                    +
                </button>
                <button
                    id="equals"
                    className={[className, 'operator'].join(" ")}
                    onClick={this.props.evaluate}
                    value="="
                >
                    =
                </button>
            </div>
        )
    }
}

export default Buttons;