import './scss/calc.scss';
import Btn from '../Btn/Btn'

const signChar = '+'
const id = "plusBtn"
const alert = () => alert('test')

function Calculator() {
    return (
        <div className="Calculator">
            <h1>This is a Calculator</h1>
            <Btn id={id} sign={signChar} onClick={alert} />
        </div>
    )
}

export default Calculator;