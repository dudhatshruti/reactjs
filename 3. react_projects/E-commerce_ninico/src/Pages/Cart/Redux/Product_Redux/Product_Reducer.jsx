import { PRODUCT_LIST,SET_PRODUCT_LIST } from "../../Constant";

const ProductReducer = (data  = [] , action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.log('ProductList Called', action);
            return [action.data]
        case SET_PRODUCT_LIST:
            console.log('ProductList Called', action);
            return [action.data]
        default: return data
    }
}

export default ProductReducer