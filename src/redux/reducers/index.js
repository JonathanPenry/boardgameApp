////////////////////////////////////////////////////////
// INDEX GETS ALL REDUCER FILES TOGETHER IN ONE PLACE //
// Like a hub to export out everything at once        //
////////////////////////////////////////////////////////

//Import the reducers into the index
// import LocalReducer from "./LocalReducer";
import LoginReducer from "./LoginReducer";
import SearchReducer from "./SearchReducer";
import UserGamesReducer from "./UserGamesReducer";
import { combineReducers } from "redux";


//Create a global state version
//This is where we combine everything 
    //Defines how we want to refer to it in state (ex: query:)and how we want to use it (queryReducer)
const rootReducer = combineReducers({
    search: SearchReducer,
    user: LoginReducer,
    favorite: UserGamesReducer,
});

export default rootReducer;
