/////////////////////////////////////////////////////////////////////////////
// ACTIONS ARE THE MESSENGER                                               //
// HERE'S WHAT YOU NEED TO DO AND HERE'S THE INFORMATION YOU NEED TO DO IT //
/////////////////////////////////////////////////////////////////////////////

// What actions do I need for my users?
    // Login (export it)
    // Logout (export it)
    export const SET_USER = "Set User";
    export const CLEAR_USER = "Clear User";
    
    // Build action creators functions
        // Need to know the user to log-in so it's passed
        // Functions are used in the components
    export function setUser(user){
        return {type: SET_USER, username: user};
    }
    
    // Build action creators functions
        // Don't need to know any additional info to detele it, just delete the current one
        // Just clearing out the default state and then the reducer handles it
        // Functions are used in the components
    export function clearUser(){
        return {type: CLEAR_USER};
    }