/////////////////////////////////////////////////////////////////////////////
// REDUCERS TAKE AN ACTIONS AND THEN CHANGE STATE BASED ON DATA OR NO DATA //
/////////////////////////////////////////////////////////////////////////////

// Import the constants from Actions QueryActions
import {SET_SEARCH} from "../actions";

// Create a function that takes state and action (always named this)
// Run once on start-up with no action so we need to provide a default
const initialState = [];
export default function searchReducer (state = initialState, action){
    switch(action.type){
        case SET_SEARCH:
            return [...action.search]
        default:
            return state;
    }
}