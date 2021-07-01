import './scss/btn.scss'
import React from 'react';

class Btn extends React.Component {
    #author = 'drGeo'
    render()  {
        const { props: {id, onClick, sign}} = this
        return (
            <div
                id={id}
                onClick={onClick}
            >
                {sign}
            </div>
        )
    }
}
export default Btn;