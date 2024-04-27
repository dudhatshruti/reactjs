import { PRODUCT_LIST } from "../Types";


export const productList = () =>{

    return{
        type:PRODUCT_LIST,
        data : "apple"
    }
    
}

// export const setProductList = (data) =>{
//     console.warn('set action');
//     return{
//         type:SET_PRODUCT_LIST,
//         data : data
//     }
    
// }