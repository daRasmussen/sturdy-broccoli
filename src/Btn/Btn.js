import './scss/btn.scss'
import React from 'react'

class Btn extends React.Component {
    #author = 'drGeo'

    render() {
        const {props: {id, onClick, sign, className}} = this
        return (
            <div
                className={className}
                id={id}
                onClick={onClick}
            >
                {sign}
            </div>
        )
    }
}

export default Btn;