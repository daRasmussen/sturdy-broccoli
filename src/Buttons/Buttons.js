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
                    className={className}
                    id="clear"
                    onClick={this.props.initialize}
                    value="AC"
                >
                    AC
                </button>
            </div>
        )
    }
}

export default Buttons;