import {createStore} from 'redux'
import { Item_Reducer } from './Item/Item_Reducer'

export const Store = createStore(Item_Reducer)