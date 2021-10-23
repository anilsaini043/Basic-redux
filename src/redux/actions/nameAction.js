import { CHANGE_NAME } from "../constant/actionType";

export const nameAction = () =>{
    return async (dispatch)=> {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await data.json()
          dispatch({type: CHANGE_NAME, payload:result[0].name}) 
    }
}
