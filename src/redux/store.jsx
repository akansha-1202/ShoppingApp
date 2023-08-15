import {createStore, combineReducers} from "redux"

const reducer = combineReducers({
    getProducts : getProductsReducer
})

const store = createStore(
    reducer
)