import {MULTIPLY,DIVIDE} from '../actionTypes/actionsType';
const initialState= 10;

export const multiReducer = (state=initialState,action)=>{
   const {type} = action;
   switch(type){
       case MULTIPLY:
           return Math.floor(state * 30);
        case DIVIDE:
            return Math.round(state / 10);
        default:
            return state;    
   }
}