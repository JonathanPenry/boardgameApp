/////////////////////////////////////////////////////////////////////////////
// REDUCERS TAKE AN ACTIONS AND THEN CHANGE STATE BASED ON DATA OR NO DATA //
/////////////////////////////////////////////////////////////////////////////

// Import the constants from Actions (SearchActions)
import {SET_USER, CLEAR_USER} from "../actions";

// Create a function that takes state and action (always named this)
// Run once on start-up with no action so we need to provide a default
const initialState = {
    username: "",
};

// Create a function that takes state and action (always named this)
export default function signupReducer(state = initialState, action){
    switch(action.type){
        case SET_USER:
            return {...state, username: action.username};
        case CLEAR_USER:
            return {...initialState};
        default:
            return state;
    }    
}