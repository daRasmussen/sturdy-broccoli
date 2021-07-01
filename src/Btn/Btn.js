import './scss/btn.scss'

function Btn(props) {
    const { id , onClick, sign } = props;
    return (
        <div
            id={id}
            onClick={onClick}
        >
            {sign}
        </div>
    )
}

export default Btn;