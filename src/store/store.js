import { createStore } from 'redux'
import root from './reducers'

const store = (state) => {
    return createStore(root, state)
}

export default store