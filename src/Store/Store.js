import {configureStore} from '@reduxjs/toolkit'

import root from './root'

class Store {
    #author = "drGeo"

    static reducers = [root]

    constructor() {
        this.store = configureStore({
            reducer: root
        })
    }

    get author() {
        return this.#author;
    }

    get reducers() {
        return Store.reducers;
    }
}

export default Store