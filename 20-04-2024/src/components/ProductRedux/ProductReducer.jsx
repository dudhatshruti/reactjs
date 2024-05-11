import { PRODUCT_LIST,SET_PRODUCT_LIST } from "../Constant";

const ProductReducer = (data  = [] , action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.log('ProductList Called', action);
            localStorage.setItem('productList', JSON.stringify(action.data))
            return [...action.data]
        case SET_PRODUCT_LIST:
            console.log('ProductList Called', action);
            localStorage.setItem('productList', JSON.stringify(action.data))
            return [...action.data]
        default: return data
    }
}

export default ProductReducer