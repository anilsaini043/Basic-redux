const initialState = {
    food: "Gatta Saabji",
}

const changeFood = ( state = initialState, action )=> {
    if(action.type === "CHANGE_FOOD"){
        return {
            food: action.payload
        }
    }
    return state
}

export default changeFood;