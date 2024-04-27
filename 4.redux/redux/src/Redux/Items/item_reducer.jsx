import { BUY_ITEM } from "./item_type";

const initialvalue = ({NoOfItem : 10})

export const Item_redux = (state = initialvalue , action) =>{
    switch (action.type) {
        case BUY_ITEM:
            return {
                NoOfItem : state.NoOfItem - 1
            }
    
        default: state
            
    }
}