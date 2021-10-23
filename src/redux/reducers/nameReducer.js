import { CHANGE_NAME } from "../constant/actionType"

const initialState = "Anil";

export const nameReducer = (state=initialState, action)=> {
    if( action.type === CHANGE_NAME ){
        return state=action.payload
    }
    return state;
}
