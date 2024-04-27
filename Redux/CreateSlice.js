import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState : {value : 0, NoOfCake : 10},
    reducers: {
        AddToCart : state => {
            state.NoOfCake +=1
        },
        RemoveToCart : state => {
            state.value -=1
        },
        increment : state => {
            state.value += 1
        },
        decrement : state => {
            state.value -=1
        }
    }
})

export const {AddToCart, RemoveToCart, increment , decrement} = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe(()=> console.log(store.getState()))


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
