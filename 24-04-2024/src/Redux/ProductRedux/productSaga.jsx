import { takeEvery , put } from "redux-saga/effects"
import { PRODUCT_LIST , SET_PRODUCT_LIST } from "../Types"

function* getProduct(){
    let data = yield fetch('http://localhost:3500/product')
    data  = yield data.json()
    console.warn("productList Called" , data);
    yield put({type:SET_PRODUCT_LIST , data})
}

function* productSaga(){

    yield takeEvery(PRODUCT_LIST , getProduct)

}

export default productSaga