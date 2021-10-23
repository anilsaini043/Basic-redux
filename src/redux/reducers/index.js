import { combineReducers } from "redux";
import changeFood from "./changeFood";
import changeName from "./changeName";

const rootReducer = combineReducers({
    changeName,
    changeFood
})

export default rootReducer;