import { DIVIDE, MULTIPLY } from "../actionTypes/actionsType"

export const multiply = (trimmedText) =>{
    return {type:MULTIPLY,payload: trimmedText}
}
export const divide = (trimmedText) =>{
    return {type:DIVIDE,payload: trimmedText}
}