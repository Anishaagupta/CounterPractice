import {INCREMENT,DECREMENT} from '../actionTypes/actionsType';

const initialState = 0;
export const counterReducer = (state=initialState,action)=>{

    const {type} = action;

    switch(type){
        case INCREMENT:
            return state + 10            
        case DECREMENT:
            return state - 5 ;  
        default:
            return state;
    }
}