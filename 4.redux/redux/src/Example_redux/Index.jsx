import { combineReducers } from "redux";
import { Todos } from "./Todos";
import { Counter } from "./Counter";

export default combineReducers({
    Todos,
    Counter
})