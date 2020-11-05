/**
 * 
 * rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
 * 
 * 
 */

import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { multiReducer } from "./multiReducer";


export const rootReducer = combineReducers({
    counter:counterReducer,
    multi:multiReducer
});