export const nameAction = (name)=> {
    return {
        type: "CHANGE_NAME",
        payload: name
    }
}

export const foodAction = (food)=> {
    return {
        type: "CHANGE_FOOD",
        payload: food
    }
}
