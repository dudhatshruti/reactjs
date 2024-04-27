// import { ADD_PRODUCT,REMOVE_PRODUCT,EMPTY_PRODUCT } from "./ProductStore";

// const Reducer = (data = [], action) => {
//     switch (action.type) {
//         case ADD_PRODUCT:
//             console.warn("Add-product called",action);
//             return [action.data, ...data]

//         case REMOVE_PRODUCT:
//             console.warn("Remove-product called",action);
//             data.length = data.length - 1
//             return [...data]

//         case EMPTY_PRODUCT:
//             console.warn("empty-product",action);   
//             return data = []  
         
//         default: 'Reducer not called'    
//     }
// }

// export default Reducer