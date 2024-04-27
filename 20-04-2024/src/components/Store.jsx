import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./ProductRedux/ProductSaga";
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
    reducer:RootReducer,
    middleware : () => [sagaMiddleware]
})
sagaMiddleware.run(productSaga)

export default Store