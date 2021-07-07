import './scss/Display.scss';
import React from 'react';

class Display extends React.Component {
    static id = "display"
    static className = "screen"
    static test = "This is the Display"
    static currentValue = 'unset';
    static type = "text"

    getCurrentValue() {
        return this.props.currentValue;
    }

    render() {
        const {id, className, test, type} = Display;
        const { props: { currentValue }, getCurrentValue } = this;
        return (
            <div id={id} className={className}>
                <h1 id="test">{test}</h1>
                <input type={type} onChange={getCurrentValue} value={currentValue} />
                {currentValue}
            </div>
        )
    }
}

export default Display