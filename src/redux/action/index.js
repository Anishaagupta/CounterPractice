import {INCREMENT,DECREMENT} from '../actionTypes/actionsType'

export const increment = (trimmedText) =>{
    return{type:INCREMENT, payload:trimmedText}
}
export const decrement = (trimmedText) =>{
    return {type:DECREMENT,payload:trimmedText}
}
