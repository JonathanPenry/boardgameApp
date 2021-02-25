/////////////////////////////////////////////////////////////////////////////
// ACTIONS ARE THE MESSENGER                                               //
// HERE'S WHAT YOU NEED TO DO AND HERE'S THE INFORMATION YOU NEED TO DO IT //
/////////////////////////////////////////////////////////////////////////////

// What actions do I need for my search?
    
// Set the query (export it)
export const SET_SEARCH = "Set SEARCH";

// Build action creators functions
    // Need to know the searched term so it's passed
    // Functions are used in the components
export function setSearch(search){
    return {type: SET_SEARCH, search: search};
}

// There could be a clear search here if functionality is needed...