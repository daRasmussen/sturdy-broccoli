import {configureStore} from '@reduxjs/toolkit'

import root from './root'

class Store {
    #author = "drGeo"

    static reducers = [root]

    constructor() {
        this.store = configureStore(root)
    }
}

export default Store