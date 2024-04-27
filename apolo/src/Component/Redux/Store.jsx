import {createStore, applyMiddleware} from 'redux'
import { ProductReducer } from './Cart/CartReducer'
import { CakeReducer } from './Cake/CakeReducer'
import  logger  from 'redux-logger'

const middleware = [logger]
const Store = createStore(ProductReducer,applyMiddleware(...middleware))

const store = createStore(CakeReducer)

export default Store


