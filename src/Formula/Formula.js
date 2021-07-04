import React from 'react';

class Formula extends React.Component {
    #author = 'drGeo'
    static className = 'formula';
    static test = 'This is the Formula';
    static formula;

    get author() {
        return this.#author;
    }

    render() {
        const { className, test } = Formula;
        return (
            <div className={className}>
                <h1 id="test">{test}</h1>
                {this.props.formula}
            </div>
        )
    }
}

export default Formula;