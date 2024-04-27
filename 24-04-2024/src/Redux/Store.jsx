// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import productSaga from './ProductRedux/productSaga'
import RootReducer from './RootReducer'
import createSagaMiddleware from 'redux-saga'


// const store = createStore(RootReducer)
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:RootReducer,
    middleware : () => [sagaMiddleware]
})
sagaMiddleware.run(productSaga)

export default store