/////////////////////////////////////////////////////////////////////////////
// REDUCERS TAKE AN ACTIONS AND THEN CHANGE STATE BASED ON DATA OR NO DATA //
/////////////////////////////////////////////////////////////////////////////

import {ADD_FAVORITE, DETLETE_FAVORITE} from "../actions";

// Create a function that takes state and action (always named this)
// Run once on start-up with no action so we need to provide a default
const initialState = [];
export default function userGamesReducer(state = initialState, action){
    switch (action.type){
        case ADD_FAVORITE:
            return [...state, action.favorite];
        case DETLETE_FAVORITE:
            return state.filter(val => val.id !== action.id);   //.filter tests each array element
        default: 
            return state;
    }
}