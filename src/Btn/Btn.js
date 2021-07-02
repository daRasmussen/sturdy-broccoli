import './scss/Btn.scss'
import React from 'react'

class Btn extends React.Component {
    #author = 'drGeo'

    render() {
        const {props: {id, onClick, sign, className}} = this
        return (
            <div
                className={[className, 'btn'].join(' ')}
                id={id}
                onClick={onClick}
            >
                {sign}
            </div>
        )
    }
}

export default Btn;