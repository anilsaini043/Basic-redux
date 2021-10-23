const initialState = {
    name: "Anil",
}

const changeName = ( state = initialState, action )=> {
    if(action.type === "CHANGE_NAME"){
        return {
            name: action.payload
        }
    }
    return state
}

export default changeName;