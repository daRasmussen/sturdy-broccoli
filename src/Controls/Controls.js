import React from 'react'
import './scss/Controls.scss'
import Btn from '../Btn/Btn'

class Controls extends React.Component {
    static state = {}
    #author = 'drGeo'

    constructor(props) {
        super(props);
        this.state = {
            history: [],
            previous: ""
        }
        this.handle.bind(this)
    }

    get author() {
        return this.#author;
    }

    handle(e) {
        console.log('HANDLE EVENT!')
    }

    render() {
        return (
            <div id="Controls">
                <Btn
                    id="equals"
                    key="equals"
                    sign="="
                    onClick={this.handle}
                />
                <Btn
                    id="add"
                    key="add"
                    sign="+"
                    onClick={this.handle}
                />
                <Btn
                    id="sub"
                    key="sub"
                    sign="-"
                    onClick={this.handle}
                />
                <Btn
                    id="multiply"
                    key="multiply"
                    sign="*"
                    onClick={this.handle}
                />
                <Btn
                    id="divide"
                    key="divide"
                    sign="/"
                    onClick={this.handle}
                />
            </div>
        )
    }
}

export default Controls