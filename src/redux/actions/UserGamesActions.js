/////////////////////////////////////////////////////////////////////////////
// ACTIONS ARE THE MESSENGER                                               //
// HERE'S WHAT YOU NEED TO DO AND HERE'S THE INFORMATION YOU NEED TO DO IT //
/////////////////////////////////////////////////////////////////////////////


// What actions do I need for my favorites?
    // Add  (export it)
    // Delete (export it)
    export const ADD_FAVORIE = "Set Favorite";
    export const DETLETE_FAVORITE = "Delete Favorite";


// Build action creators functions
    // Need to know the favorite itself so it's passed
    // Functions are used in the components
    export function addFavorite(favorite){
        return {type: ADD_FAVORITE, favorite: favorite};
    }

// Build action creators functions
    // Need to know the id of the deleted favorite so it's passed
    // Functions are used in the components
    export function deleteFavorite(){
        return {type: DETLETE_FAVORITE, id: id};
    }

// dispatchEvent({type: "Add Favorite", favorite {id: 1, title: "hello"})
// addFavorite({id: 1, title: "hello"})