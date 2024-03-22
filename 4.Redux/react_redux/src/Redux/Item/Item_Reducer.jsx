import React from 'react'
import { BUY_ITEM } from './Item_Type'
const initialState = ({NoOfItem : 10})

export const Item_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
        return{
            NoOfItem : state.NoOfItem - 1
        }
    default: state
  }
}
